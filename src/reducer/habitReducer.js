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
    // eslint-disable-next-line
    case "EDIT_NEW_HABIT": {
      if (action.field === "NAME") {
        return {
          ...state,
          newHabit: { ...state.newHabit, name: action.data },
        };
      }
      if (action.field === "GOAL") {
        return {
          ...state,
          newHabit: { ...state.newHabit, goal: action.data },
        };
      }
      if (action.field === "REPEAT") {
        return {
          ...state,
          newHabit: { ...state.newHabit, repeat: action.data },
        };
      }
      if (action.field === "TIME") {
        return {
          ...state,
          newHabit: { ...state.newHabit, time: action.data },
        };
      }
      if (action.field === "DATE") {
        return {
          ...state,
          newHabit: { ...state.newHabit, date: action.data },
        };
      }
    }
    // eslint-disable-next-line
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
    case "DELETE_HABIT": {
      let filteredHabit = state.allHabits.slice();
      filteredHabit = filteredHabit.filter(({ id }) => id !== action.id);
      return {
        ...state,
        allHabits: filteredHabit,
      };
    }
    case "ARCHIVE": {
      return {
        ...state,
        archive: [...state.archive, action.habit],
      };
    }
    case "EDIT_HABIT": {
      return {
        ...state,
        newHabit: action.habit,
      };
    }
    case "UPDATE_HABIT_IN_ALL_HABIT": {
      return {
        ...state,
        allHabits: state.allHabits.map((habit) => {
          if (habit.id === state.newHabit.id) {
            return state.newHabit;
          } else {
            return habit;
          }
        }),
      };
    }
    case "UNDO_ARCHIVE_HABIT": {
      return {
        ...state,
        allHabits: [...state.allHabits, action.habit],
        archive: state.archive.filter(({ id }) => id !== action.habit.id),
      };
    }
    default:
      throw new Error("Unknown action type");
  }
};
