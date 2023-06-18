import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export default function ModalDialog() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
            <div class="form-row habit-name">
              <div class="form-group">
                <label for="inputAddress">Name</label>
                <input
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
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>1 time a day</option>
                  <option>twice a day</option>
                  <option>thrice a day</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Repeat</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>Daily</option>
                  <option>1 time a week</option>
                  <option>twice a week</option>
                  <option>thrice a week</option>
                  <option>4 times a week</option>
                  <option>5 times a week</option>
                  <option>6 times a week</option>
                  <option>Weekly</option>
                  <option>alternate days in a week</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="inputCity">Time of the day</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Night</option>
                  <option>Any time</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Start Date</label>
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>Today</option>
                  <option>Tomorrow</option>
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
          <Button variant="dark" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
