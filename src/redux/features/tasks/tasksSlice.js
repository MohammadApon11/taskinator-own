import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Mke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mohammad Apon",
      priority: "high",
    },
    {
      id: 2,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Mke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mohammad Papon",
      priority: "high",
    },
    {
      id: 3,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Mke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mohammad Apon",
      priority: "low",
    },
    {
      id: 4,
      status: "pending",
      title: "Remove Button",
      description:
        "We need a remove button in our task card. Mke the button red and use Heroicon for tashbin icon.",
      date: "2023-08-28",
      assignedTo: "Mohammad Apon",
      priority: "medium",
    },
  ],
  userSpecificTasks: [],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks.at(-1);
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...payload,
        });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload);
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((task) => task.id === payload.id);
      target.status = payload.status;
    },
    setUserTasks: (state, { payload }) => {
      state.userSpecificTasks = state.tasks.filter(
        (item) => item.assignedTo === payload
      );
    },
  },
});

export const { addTask, removeTask, updateStatus, setUserTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
