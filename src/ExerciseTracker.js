import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExerciseList from "./ExerciseList";
import ExerciseView from "./ExerciseView";
import ExerciseForm from "./ExerciseForm";
import NavBar from "./NavBar";

const ExerciseTracker = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

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
  };

  const handleExerciseCreate = async (exerciseData) => {
    try {
      const response = await axios.post("/api/v1/exercises", exerciseData);
      setExercises([...exercises, response.data]);
    } catch (error) {
      console.error("Error creating exercise:", error);
    }
  };

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
      const updatedExercises = exercises.filter(
        (exercise) => exercise.id !== exerciseId
      );
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
                />
              }
            />
          
            <Route path="/create" element={ <ExerciseForm onCreate={handleExerciseCreate} />}/>
             
          </Routes>
          
          {/* <div className="exercise-details">
            {selectedExercise ? (
              <ExerciseView
                exercise={selectedExercise}
                onUpdate={handleExerciseUpdate}
                onDelete={handleExerciseDelete}
              />
            ) : (
              <ExerciseForm onCreate={handleExerciseCreate} />
            )}
          </div> */}
        </div>
      </div>
    </Router>
  );
};

export default ExerciseTracker;
