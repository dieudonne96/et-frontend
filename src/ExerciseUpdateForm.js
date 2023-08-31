import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const ExerciseUpdateForm = () => {
  const [id, setID] = useState(null);
  const [nameOfExercise, setNameOfExercise] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [numberOfSets, setNumberOfSets] = useState("");
  const [numberOfReps, setNumberOfReps] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setNameOfExercise(localStorage.getItem("Name of Exercise"));
    setDescription(localStorage.getItem("Description"));
    setDuration(localStorage.getItem("Duration"));
    setNumberOfSets(localStorage.getItem("Number of Sets"));
    setNumberOfReps(localStorage.getItem("Number of Reps"));
  }, []);

  const updateExercise = () => {
    axios.put(`/api/v1/exercises/exercise/${id}`, {
      nameOfExercise,
      description,
      duration,
      numberOfSets,
      numberOfReps,
    });
  };

  return (
    <Form onClick={updateExercise} style={{ margin: "5rem" }}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name of Exercise</Form.Label>
        <Form.Control
          type="text"
          name="nameOfExercise"
          value={nameOfExercise}
          onChange={(e) => setNameOfExercise(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="nameOfExercise"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          name="nameOfExercise"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number of Sets</Form.Label>
        <Form.Control
          type="text"
          name="nameOfExercise"
          value={numberOfSets}
          onChange={(e) => setNumberOfSets(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number of Reps per set</Form.Label>
        <Form.Control
          type="text"
          name="nameOfExercise"
          value={numberOfReps}
          onChange={(e) => setNumberOfReps(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Update Exercise
      </Button>
    </Form>
  );
};

export default ExerciseUpdateForm;
