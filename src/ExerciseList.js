import React, { Component } from "react";

import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ExerciseList extends Component {
  // Helper function to format the time difference
  formatTimeDifference = (createdAt) => {
    const currentTime = new Date();
    const createdAtTime = new Date(createdAt);
    const timeDifference = currentTime - createdAtTime;
    const minutes = Math.floor(timeDifference / 60000); // 1 minute = 60000 milliseconds
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
      return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
      return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
      return "recently";
    }
  };

  render() {
    const { exercises, onSelect, onDelete } = this.props;

    const sortedExercises = [...exercises].sort(
      (a, b) => new Date(b.timeCreated) - new Date(a.timeCreated)
    );

    const buttonStyles = {
      updateButton: {
        backgroundColor: "green",
        color: "white",
        marginRight: "10px", // small gap between the buttons
      },
      deleteButton: {
        backgroundColor: "red",
        color: "white",
      },
    };

    const setData = (exercise) => {
      console.log(exercise);
      let {
        id,
        nameOfExercise,
        description,
        duration,
        numberOfSets,
        numberOfReps,
      } = exercise;
      localStorage.setItem("ID", id);
      localStorage.setItem("Name of Exercise", nameOfExercise);
      localStorage.setItem("Description", description);
      localStorage.setItem("Duration", duration);
      localStorage.setItem("Number of Sets", numberOfSets);
      localStorage.setItem("Number of Reps", numberOfReps);
    };

    return (
      <div>
        {sortedExercises.map((exercise, index) => (
          <div
            key={index}
            className="exercise-card"
            onClick={() => onSelect(exercise)}
          >
            <Card style={{ margin: "5rem" }}>
              {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
              <Card.Body>
                <Card.Title className="exercise-title">
                  {exercise.nameOfExercise}
                </Card.Title>
                <Card.Text className="exercise-description">
                  {exercise.description}
                </Card.Text>
                <Card.Text className="exercise-details">
                  Duration: {exercise.duration} | Sets: {exercise.numberOfSets}{" "}
                  | Reps: {exercise.numberOfReps}
                </Card.Text>
                <Link to={"/update/:"}>
                  <Button
                    onClick={() => setData(exercise)}
                    variant="primary"
                    style={buttonStyles.updateButton}
                  >
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => onDelete(exercise.id)}
                  variant="primary"
                  style={buttonStyles.deleteButton}
                >
                  Delete
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Created: {this.formatTimeDifference(exercise.timeCreated)}
                </small>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}

export default ExerciseList;
