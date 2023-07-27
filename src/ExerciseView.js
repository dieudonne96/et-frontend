import React from 'react';


const ExerciseView = ({ exercise, onUpdate, onDelete }) => {
  const handleUpdate = () => {
    // Handle update logic
  };

  const handleDelete = () => {
    // Handle delete logic
  };

  return (
    <div>
      <h2 className="exercise-title">{exercise.nameOfExercise}</h2>
      <p className="exercise-description">{exercise.description}</p>
      <p className="exercise-details">
        Duration: {exercise.duration} | Sets: {exercise.numberOfSets} | Reps: {exercise.numberOfReps}
      </p>
      <div>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default ExerciseView;
