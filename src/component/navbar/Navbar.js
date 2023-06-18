import { NavLink } from "react-router-dom";
export default function NavPills() {
  return (
    <div className="topNav" style={{ textAlign: "center" }}>
      <ul class="nav nav-pills">
        <li>
          {" "}
          <NavLink className="nav-link" to="/">
            Habits
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="nav-link" to="/archive">
            Archives
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
