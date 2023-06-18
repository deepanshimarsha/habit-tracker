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
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>Habit : {habit.name}</h3>
          <p>Goal : {habit.goal}</p>
          <p>Repeat :{habit.repeat}</p>
          <p>Time :{habit.time}</p>
          <p>Date :{habit.date}</p>
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
