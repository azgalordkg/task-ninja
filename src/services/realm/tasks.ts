import "react-native-get-random-values";

import moment, { Moment } from "moment";
import Realm from "realm";
import { v4 as uuidv4 } from "uuid";

import { TaskSchema } from "@/constants";
import {
  CreateTaskData,
  RecurringTypes,
  TasksResponseItem,
  UpdateTaskData,
} from "@/types";
import { getToday } from "@/utils";

const realm = new Realm({
  path: "realm-files/taskManager",
  schema: [TaskSchema],
  deleteRealmIfMigrationNeeded: true,
});

export const getRecurringTasks = (type: RecurringTypes = "Daily") => {
  if (realm) {
    return realm.objects("Task").filtered("repeat == $0", type);
  }
  return [];
};

export const getAllTasks = () => {
  if (realm) {
    return realm.objects("Task");
  }
  return [];
};

export const getUnscheduledTasks = () => {
  if (realm) {
    return realm
      .objects("Task")
      .filtered("startDate == null")
      .sorted("priority");
  }
  return [];
};

export const getOverdueTasks = () => {
  if (realm) {
    const today = getToday();
    today.setHours(0, 0, 0, 0);
    return realm
      .objects("Task")
      .filtered("startDate < $0 && isDone == $1", today.getTime(), false)
      .sorted("startDate")
      .sorted("priority");
  }
  return [];
};

export const getTasks = (targetDate: number) => {
  if (realm) {
    const targetDateStart = new Date(targetDate);
    targetDateStart.setHours(0, 0, 0, 0);

    const targetDateEnd = new Date(targetDate);
    targetDateEnd.setHours(23, 59, 59, 999);

    return realm
      .objects("Task")
      .filtered(
        "startDate >= $0 && startDate <= $1",
        targetDateStart.getTime(),
        targetDateEnd.getTime(),
      )
      .sorted("startDate")
      .sorted("priority");
  }
  return [];
};

export const createTask = (data: CreateTaskData) => {
  if (realm) {
    realm.write(() => {
      realm.create("Task", {
        ...data,
        _id: uuidv4().slice(0, 8),
        isDone: false,
        startDate: data?.startDate?.getTime(),
        createdAt: getToday().getTime(),
      });
    });
  }
};

export const findOneTask = (_id: string): TasksResponseItem => {
  if (realm) {
    const tasks = realm
      .objects("Task")
      .filtered("_id == $0", _id) as unknown as TasksResponseItem[];
    return tasks[0];
  }
  return {} as TasksResponseItem;
};

export const updateTask = ({
  _id,
  name,
  startDate,
  description,
  priority,
  hasDeadline,
  repeat,
  tags,
  isDone,
}: UpdateTaskData) => {
  const task = findOneTask(_id) as unknown as TasksResponseItem;
  if (realm && task) {
    realm.write(() => {
      task.name = name;
      task.description = description;
      task.startDate = startDate?.getTime();

      task.hasDeadline = hasDeadline;
      task.priority = priority;
      task.isDone = Boolean(isDone);
      task.repeat = repeat;
      task.tags = tags;
    });
  }
};

export const prepareUpdateRecurringData = (task: TasksResponseItem) => {
  const start = moment(new Date(Number(task.startDate)));
  const today = moment();

  const { _id, name, repeat, description, hasDeadline, tags, priority } = task;
  const updateData = {
    _id,
    name,
    tags,
    repeat,
    priority,
    description,
    hasDeadline,
    isDone: false,
  } as unknown as UpdateTaskData;

  if (task.startDate) {
    start.set("year", today.year());
    start.set("month", today.month());
    start.set("date", today.date());

    updateData.startDate = start.toDate();
  }

  return updateData;
};

const checkMonthlyTaskUpdate = (
  today: moment.Moment,
  start: moment.Moment,
  createdAt: number,
) => {
  const monthDifference = today.diff(start, "months");

  if (monthDifference > 0) {
    const startDate = start.toDate().getDate();
    const todayDate = today.toDate().getDate();

    const createdAtDate = moment(new Date(Number(createdAt)));
    const isEndOfMonth = moment(createdAtDate)
      .endOf("month")
      .isSame(createdAtDate, "day");

    const endOfMonth = moment().endOf("month");
    const isTodayEnd = today.isSame(endOfMonth, "day");

    if (isEndOfMonth) {
      return isTodayEnd;
    } else if (startDate === todayDate) {
      return true;
    }
  }

  return false;
};

const checkYearlyTaskUpdate = (today: moment.Moment, start: moment.Moment) => {
  const yearDifference = today.diff(start, "years");

  if (yearDifference > 0) {
    const isEndOfLeapFebruary =
      start.toDate().getMonth() === 1 && start.toDate().getDate() >= 28;
    const isTodayLastOfFebruary =
      today.toDate().getMonth() === 1 && today.toDate().getDate() >= 28;

    if (isEndOfLeapFebruary && isTodayLastOfFebruary) {
      return true;
    }
  }
  return false;
};

export const updateRecurringDates = (
  tasks: TasksResponseItem[],
  today: Moment,
  type: RecurringTypes,
) => {
  for (let i in tasks) {
    const recurringTask = tasks[i];
    const start = moment(new Date(Number(recurringTask.startDate)));
    start.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

    let isBefore = false;

    if (type === "Daily") {
      isBefore = start.isBefore(today);
    }
    if (type === "Weekly") {
      isBefore = today.diff(start, "days") % 7 === 0;
    }
    if (type === "Monthly") {
      isBefore = checkMonthlyTaskUpdate(today, start, recurringTask.createdAt);
    }
    if (type === "Yearly") {
      isBefore = checkYearlyTaskUpdate(today, start);
    }

    if (isBefore) {
      const updateData = prepareUpdateRecurringData(recurringTask);
      updateTask(updateData);
    }
  }
};

export const updateRecurringTasks = () => {
  const dailyTasks = getRecurringTasks(
    "Daily",
  ) as unknown as TasksResponseItem[];
  const weeklyTasks = getRecurringTasks(
    "Weekly",
  ) as unknown as TasksResponseItem[];
  const monthlyTasks = getRecurringTasks(
    "Monthly",
  ) as unknown as TasksResponseItem[];
  const yearlyTasks = getRecurringTasks(
    "Yearly",
  ) as unknown as TasksResponseItem[];

  const today = moment();
  today.set({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 });

  updateRecurringDates(dailyTasks, today, "Daily");
  updateRecurringDates(weeklyTasks, today, "Weekly");
  updateRecurringDates(monthlyTasks, today, "Monthly");
  updateRecurringDates(yearlyTasks, today, "Yearly");
};

const getPostponeDate = (repeat: string, startDate: number) => {
  const start = moment(startDate);

  if (repeat === "Daily") {
    start.add(1, "days");
  }
  if (repeat === "Weekly") {
    start.add(1, "weeks");
  }
  if (repeat === "Monthly") {
    start.add(1, "months");
  }
  if (repeat === "Yearly") {
    start.add(1, "years");
  }

  return start.toDate();
};

export const markTaskAsDone = (_id: string, isDone: boolean) => {
  const task = findOneTask(_id);
  const { repeat, startDate } = task;
  if (realm && task) {
    realm.write(() => {
      const taskForUpdate = findOneTask(_id) as unknown as TasksResponseItem;

      if (startDate && repeat && repeat !== "Never" && isDone) {
        taskForUpdate.startDate = getPostponeDate(repeat, startDate).getTime();
      } else {
        taskForUpdate.isDone = isDone;
      }
    });
  }
};

export const deleteOneTask = (_id: string) => {
  const task = findOneTask(_id);
  if (realm && task) {
    realm.write(() => {
      realm.delete(task);
    });
  }
};
