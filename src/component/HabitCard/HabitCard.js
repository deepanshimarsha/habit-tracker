import "./habit-card.css";
import { useHabitContext } from "../../context/HabitContext";
import DetailModal from "../HabitDetail/DetailModal";
import EditModalForm from "../EditHabit/EditModalForm";
export default function HabitCard(habit) {
  const { dispatch } = useHabitContext();
  return (
    <div class="containers">
      <div class="rows">
        <div class="cols">
          <div class="card card-main">
            <div class="card-body habit-card">
              <div class="dropdown habit-dropdown">
                <i
                  class="fa fa-ellipsis-v"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <ul class="dropdown-menu">
                  <li>
                    {/* <span
                      class="dropdown-item"
                      onClick={() =>
                        dispatch({ type: "EDIT_HABIT", habit: habit })
                      }
                    >
                      <i class="fa fa-edit"></i> Update
                    </span> */}
                    <EditModalForm {...habit} />
                  </li>
                  <li>
                    <span
                      class="dropdown-item"
                      onClick={() =>
                        dispatch({ type: "DELETE_HABIT", id: habit.id })
                      }
                    >
                      <i class="fa fa-trash-o"></i> Delete
                    </span>
                  </li>
                  <li>
                    <span
                      class="dropdown-item"
                      onClick={() => {
                        dispatch({ type: "ARCHIVE", habit: habit });
                        dispatch({ type: "DELETE_HABIT", id: habit.id });
                      }}
                    >
                      <i class="fa fa-archive"></i> Archive
                    </span>
                  </li>
                </ul>
              </div>
              <div className="habit-name">
                <span>
                  <DetailModal {...habit} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
