import { NavLink } from "react-bootstrap";
export default function NavPills() {
  return (
    <div className="topNav" style={{ textAlign: "center" }}>
      <ul class="nav nav-pills">
        <li class="active">
          {" "}
          <NavLink className="nav-link" to="/">
            Habits
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className="nav-link" to="/archives">
            Archives
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
