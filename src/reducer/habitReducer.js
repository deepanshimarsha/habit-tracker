import { v4 as uuid } from "uuid";

export const habitReducer = (state, action) => {
  switch (action.type) {
    case "SET_NEW_HABIT": {
      if (action.field === "NAME") {
        return {
          ...state,
          newHabit: { ...state.newHabit, name: action.data, id: uuid() },
        };
      }
      if (action.field === "GOAL") {
        return {
          ...state,
          newHabit: { ...state.newHabit, goal: action.data, id: uuid() },
        };
      }
      if (action.field === "REPEAT") {
        return {
          ...state,
          newHabit: { ...state.newHabit, repeat: action.data, id: uuid() },
        };
      }
      if (action.field === "TIME") {
        return {
          ...state,
          newHabit: { ...state.newHabit, time: action.data, id: uuid() },
        };
      }
      if (action.field === "DATE") {
        return {
          ...state,
          newHabit: { ...state.newHabit, date: action.data, id: uuid() },
        };
      }
    }

    case "ADD_NEW_HABIT": {
      return {
        ...state,
        allHabits: [...state.allHabits, state.newHabit],
      };
    }
    case "CLEAR_NEW_HABIT": {
      return {
        ...state,
        newHabit: {},
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
