import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ExerciseForm = ({ onCreate }) => {
  const [nameOfExercise, setNameOfExercise] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [numberOfSets, setNumberOfSets] = useState(0);
  const [numberOfReps, setNumberOfReps] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const exerciseData = {
      nameOfExercise,
      description,
      duration,
      numberOfSets,
      numberOfReps,
    };
    onCreate(exerciseData);
    setNameOfExercise("");
    setDescription("");
    setDuration("");
    setNumberOfSets(0);
    setNumberOfReps(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of Exercise</Form.Label>
        <Form.Control
          type="text"
          value={nameOfExercise}
          onChange={(e) => setNameOfExercise(e.target.value)}
          placeholder=""
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number of Sets</Form.Label>
        <Form.Control
          type="number"
          value={numberOfSets}
          onChange={(e) => setNumberOfSets(parseInt(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicNumber">
        <Form.Label>Number of Reps per set</Form.Label>
        <Form.Control
          type="number"
          value={numberOfReps}
          onChange={(e) => setNumberOfReps(parseInt(e.target.value))}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    // <form onSubmit={handleSubmit}>
    //   <h2>Create Exercise</h2>
    //   <label>
    //     Name of Exercise:
    //     <input type="text" value={nameOfExercise} onChange={(e) => setNameOfExercise(e.target.value)} />
    //   </label>
    //   <label>
    //     Description:
    //     <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
    //   </label>
    //   <label>
    //     Duration:
    //     <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
    //   </label>
    //   <label>
    //     Number of Sets:
    //     <input type="number" value={numberOfSets} onChange={(e) => setNumberOfSets(parseInt(e.target.value))} />
    //   </label>
    //   <label>
    //     Number of Reps:
    //     <input type="number" value={numberOfReps} onChange={(e) => setNumberOfReps(parseInt(e.target.value))} />
    //   </label>
    //   <button type="submit">Create</button>
    // </form>
  );
};

export default ExerciseForm;
