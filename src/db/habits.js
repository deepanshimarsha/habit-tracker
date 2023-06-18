import { v4 as uuid } from "uuid";
export const habits = [
  {
    id: uuid(),
    name: "Medidate",
    goal: "1 time a day",
    repeat: "Alternate days in a week",
    time: "Morning",
    date: "Tomorrow",
  },
  {
    id: uuid(),
    name: "Drink Water",
    goal: "thrice a day",
    repeat: "Daily",
    time: "Any Time",
    date: "Today",
  },
  {
    id: uuid(),
    name: "Hit The Gym",
    goal: "1 time a day",
    repeat: "5 times a week",
    time: "Evening",
    date: "Today",
  },
  {
    id: uuid(),
    name: "Code",
    goal: "2 times a day",
    repeat: "Daily",
    time: "Morning",
    date: "Tomorrow",
  },
  {
    id: uuid(),
    name: "Read Books",
    goal: "1 time a day",
    repeat: "Weekly",
    time: "Evening",
    date: "Today",
  },
];
