export const TagSchema = {
  name: "Tag",
  properties: {
    _id: "string",
    name: "string",
    color: "string",
    isDefault: "bool?",
  },
  primaryKey: "_id",
};

export const TaskSchema = {
  name: "Task",
  properties: {
    _id: "string",
    name: "string",
    isDone: "bool",
    description: "string?",
    startDate: "int?",
    createdAt: "int",
    priority: "int",
    hasDeadline: "bool?",
    repeat: "string?",
    tags: "string[]",
  },
  primaryKey: "_id",
};
