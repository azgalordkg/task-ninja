import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import moment from "moment/moment";

import { BASE_URL, URL_ROUTES } from "@/constants";
import { prepareHeaders } from "@/utils";

import { AllTasksResponse, Task, TaskCreateOrEdit } from "./tasks.types";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders,
  }),
  tagTypes: ["getAllTasks"],
  endpoints: builder => ({
    getAllTasks: builder.query<AllTasksResponse, void>({
      providesTags: ["getAllTasks"],
      query: () => `${URL_ROUTES.TASKS}`,
      transformResponse: (response: Task[]) => {
        const currentDate = moment();

        return {
          taskList: response,
          unscheduledTaskList: response.filter(task => !task.startDate),
          overdueTaskList: response.filter(
            task =>
              !task.isDone &&
              moment(task.startDate).isBefore(currentDate, "day"),
          ),
        };
      },
    }),

    getTasks: builder.query<Task, number | string | void>({
      query: (id = "") => `${URL_ROUTES.TASKS}/${id}`,
    }),

    createTask: builder.mutation<Task, TaskCreateOrEdit>({
      query: ({ userData }) => {
        return {
          url: URL_ROUTES.TASKS,
          method: "POST",
          body: userData,
        };
      },
    }),

    updateTask: builder.mutation<void, TaskCreateOrEdit>({
      query: ({ userData, id }) => {
        return {
          url: `${URL_ROUTES.TASKS}/${id}`,
          method: "PUT",
          body: userData,
        };
      },
      invalidatesTags: ["getAllTasks"],
    }),

    deleteTask: builder.mutation<void, string | number>({
      query: (id = "") => {
        return {
          url: `${URL_ROUTES.TASKS}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["getAllTasks"],
    }),
  }),
});

export const {
  useGetAllTasksQuery,
  useGetTaskItemQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = tasksApi;
