import { useHabitContext } from "../context/HabitContext";

export default function Archive() {
  const { state, dispatch } = useHabitContext();
  if (!state.archive.length) {
    return <h3 style={{ marginTop: "50px" }}>Archive is empty!</h3>;
  }
  return (
    <div className="habit-main">
      {state.archive.map((habit) => {
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
                          <span
                            class="dropdown-item"
                            onClick={() =>
                              dispatch({
                                type: "UNDO_ARCHIVE_HABIT",
                                habit: habit,
                              })
                            }
                          >
                            <i class="fa fa-edit"></i> Undo
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="habit-name">
                      <span>{habit.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
