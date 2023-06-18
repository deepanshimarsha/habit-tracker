import { useContext, createContext, useReducer } from "react";
import { habitReducer } from "../reducer/habitReducer";
import { habits } from "../db/habits";

const HabitContext = createContext(null);

const HabitContextProvider = ({ children }) => {
  const initialState = {
    allHabits: habits,
    newHabit: {},
  };

  const [state, dispatch] = useReducer(habitReducer, initialState);
  return (
    <HabitContext.Provider value={{ state, dispatch }}>
      {children}
    </HabitContext.Provider>
  );
};

const useHabitContext = () => useContext(HabitContext);

export { useHabitContext, HabitContextProvider };
