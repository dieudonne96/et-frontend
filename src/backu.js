<Router>
      <div className="App">
        <NavBar />
        <div className="exercise-container">
          <Switch>
            <Route exact path="/">
              <ExerciseList
                exercises={exercises}
                onSelect={handleExerciseSelect}
              />
            </Route>
            <Route path="/create">
              <ExerciseForm onCreate={handleExerciseCreate} />
            </Route>
          </Switch>
          <div className="exercise-list">
            <ExerciseList
              exercises={exercises}
              onSelect={handleExerciseSelect}
            />
          </div>
          <div className="exercise-details">
            {selectedExercise ? (
              <ExerciseView
                exercise={selectedExercise}
                onUpdate={handleExerciseUpdate}
                onDelete={handleExerciseDelete}
              />
            ) : (
              <ExerciseForm onCreate={handleExerciseCreate} />
            )}
          </div>
        </div>
      </div>
    </Router>