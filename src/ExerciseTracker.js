import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import ExerciseList from "./ExerciseList";
import ExerciseForm from "./ExerciseForm";
import NavBar from "./NavBar";
import ExerciseUpdate from "./ExerciseUpdate";

const ExerciseTracker = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);
  // const [selectedExerciseForUpdate, setSelectedExerciseForUpdate] =
  //   useState(null);

  // redirect
  // const navigateTo = useNavigate();

  // {
  //   selectedExerciseForUpdate && (
  //     <ExerciseUpdateForm
  //       exercise={selectedExerciseForUpdate}
  //       onUpdate={handleExerciseUpdate}
  //     />
  //   );
  // }

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get("/api/v1/exercises");
      setExercises(response.data);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  // currently not being used
  const fetchExercise = async (exerciseId) => {
    try {
      const response = await axios.get(`/api/v1/exercises/${exerciseId}`);
      setSelectedExercise(response.data);
    } catch (error) {
      console.error("Error fetching exercise:", error);
    }
  };

  const handleExerciseSelect = (exercise) => {
    setSelectedExercise(exercise);
    // setSelectedExerciseForUpdate(null);
  };

  const handleExerciseCreate = async (exerciseData) => {
    try {
      const response = await axios.post("/api/v1/exercises", exerciseData);
      setExercises([...exercises, response.data]);
      // navigateTo("/"); // navigate back to home page after creation
    } catch (error) {
      console.error("Error creating exercise:", error);
    }
  };

  // currently not being used
  const handleExerciseUpdate = async (exerciseId, exerciseData) => {
    try {
      const response = await axios.put(
        `/api/v1/exercises/exercise/${exerciseId}`,
        exerciseData
      );
      const updatedExercises = exercises.map((exercise) =>
        exercise.id === exerciseId ? response.data : exercise
      );
      setExercises(updatedExercises);
      setSelectedExercise(response.data);
    } catch (error) {
      console.error("Error updating exercise:", error);
    }
  };

  const handleExerciseDelete = async (exerciseId) => {
    try {
      await axios.delete(`/api/v1/exercises/${exerciseId}`);
      const updatedExercises = exercises.filter((exercise) => {
        return exercise.id !== exerciseId;
      });
      setExercises(updatedExercises);
      setSelectedExercise(null);
    } catch (error) {
      console.error("Error deleting exercise:", error);
    }
  };

  return (
    <Router>
      <div className="exercise-app">
        <NavBar />
        <div className="exercise-container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ExerciseList
                  exercises={exercises}
                  onSelect={handleExerciseSelect}
                  exercise={selectedExercise}
                  onUpdate={handleExerciseUpdate}
                  onDelete={handleExerciseDelete}
                />
              }
            />

            <Route
              path="/create"
              element={<ExerciseForm onCreate={handleExerciseCreate} />}
            />

            <Route
              path="/update/:"
              element={<ExerciseUpdate onUpdate={handleExerciseUpdate} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default ExerciseTracker;
