import HabitCard from "../component/HabitCard/HabitCard";
import { useHabitContext } from "../context/HabitContext";
import ModalForm from "../component/newHabitForm/ModalForm.js";
export default function Home() {
  const { state } = useHabitContext();

  return (
    <div className="habit-main">
      <ModalForm />
      {state.allHabits.map((habit) => {
        {
          console.log(habit);
        }
        return <HabitCard {...habit} />;
      })}
    </div>
  );
}
