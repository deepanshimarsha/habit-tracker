import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useHabitContext } from "../../context/HabitContext";

export default function ModalDialog() {
  const { state, dispatch } = useHabitContext();
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setError("");
    dispatch({ type: "CLEAR_NEW_HABIT" });
    setShow(false);
  };

  const handleSave = () => {
    if (!state.newHabit) {
      setError("Fill all the fields");
    } else if (!state.newHabit.name) {
      setError("Fill all the fields");
    } else {
      setError("");
      dispatch({ type: "ADD_NEW_HABIT" });
      dispatch({ type: "CLEAR_NEW_HABIT" });
      setShow(false);
    }
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Create New Habit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  color: "red",
                  fontWeight: "400",
                  fontSize: "14px",
                  padding: "5px",
                  textAlign: "center",
                }}
              >
                {error.length ? error : ""}
              </span>
            </div>

            <div class="form-row habit-name">
              <div class="form-group">
                <label for="inputAddress">Name</label>
                <input
                  onChange={(e) =>
                    dispatch({
                      type: "SET_NEW_HABIT",
                      field: "NAME",
                      data: e.target.value,
                    })
                  }
                  value={state.newHabit.name}
                  autoComplete="off"
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Habit"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputPassword4">Goal</label>
                <select
                  onChange={(e) =>
                    dispatch({
                      type: "SET_NEW_HABIT",
                      field: "GOAL",
                      data: e.target.value,
                    })
                  }
                  value={state.newHabit.goal}
                  id="inputState"
                  class="form-control"
                >
                  <option selected>Choose...</option>
                  <option value="1 time a day">1 time a day</option>
                  <option value="twice a day">twice a day</option>
                  <option value="thrice a day">thrice a day</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Repeat</label>
                <select
                  onChange={(e) =>
                    dispatch({
                      type: "SET_NEW_HABIT",
                      field: "REPEAT",
                      data: e.target.value,
                    })
                  }
                  value={state.newHabit.repeat}
                  id="inputState"
                  class="form-control"
                >
                  <option selected>Choose...</option>
                  <option value="Daily">Daily</option>
                  <option value="1 time a week">1 time a week</option>
                  <option value="twice a week">twice a week</option>
                  <option value="thrice a week">thrice a week</option>
                  <option value="4 times a week">4 times a week</option>
                  <option value="5 times a week">5 times a week</option>
                  <option value="6 times a week">6 times a week</option>
                  <option value="Weekly">Weekly</option>
                  <option value="alternate days in a week">
                    alternate days in a week
                  </option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputCity">Time of the day</label>
                <select
                  onChange={(e) =>
                    dispatch({
                      type: "SET_NEW_HABIT",
                      field: "TIME",
                      data: e.target.value,
                    })
                  }
                  value={state.newHabit.time}
                  id="inputState"
                  class="form-control"
                >
                  <option selected>Choose...</option>
                  <option value="Morning">Morning</option>
                  <option value="Afternoon">Afternoon</option>
                  <option value="Evening">Evening</option>
                  <option value="Night">Night</option>
                  <option value="Any time">Any time</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Start Date</label>
                <select
                  onChange={(e) =>
                    dispatch({
                      type: "SET_NEW_HABIT",
                      field: "DATE",
                      data: e.target.value,
                    })
                  }
                  value={state.newHabit.date}
                  id="inputState"
                  class="form-control"
                >
                  <option selected>Choose...</option>
                  <option value="Today">Today</option>
                  <option value="Tomorrow">Tomorrow</option>
                </select>
              </div>
            </div>
            {/* <button type="submit" class="btn btn-primary">Sign in</button> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
