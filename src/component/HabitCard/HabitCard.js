import "./habit-card.css";
export default function HabitCard(habit) {
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
                    <span class="dropdown-item">
                      <i class="fa fa-edit"></i> Update
                    </span>
                  </li>
                  <li>
                    <span class="dropdown-item">
                      <i class="fa fa-trash-o"></i> Delete
                    </span>
                  </li>
                  <li>
                    <span class="dropdown-item">
                      <i class="fa fa-archive"></i> Archive
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
}
