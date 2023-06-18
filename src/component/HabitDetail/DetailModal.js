import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
export default function DetailModal(habit) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        {habit.name}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{habit.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Goal</b> : {habit.goal}
          </p>
          <p>
            <b>Repeat</b> : {habit.repeat}
          </p>
          <p>
            <b>Time of day</b> : {habit.time}
          </p>
          <p>
            <b>Start Date</b> : {habit.date}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
