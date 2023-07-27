import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// const ExerciseList = ({ exercises, onSelect }) => {
//   return (
//     <div>
//       {exercises.map((exercise) => (
//         <div
//           key={exercise.id}
//           className="exercise-card"
//           onClick={() => onSelect(exercise)}
//         >
//           <Card style={{ margin: "5rem" }}>
//             {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
//             <Card.Body>
//               <Card.Title className="exercise-title">
//                 {exercise.nameOfExercise}
//               </Card.Title>
//               <Card.Text className="exercise-description">
//                 {exercise.description}
//               </Card.Text>
//               <Card.Text className="exercise-details">
//                 Duration: {exercise.duration} | Sets: {exercise.numberOfSets} |
//                 Reps: {exercise.numberOfReps}
//               </Card.Text>
//               <Button variant="primary">Go somewhere</Button>
//             </Card.Body>
//             <Card.Footer>
//               <small className="text-muted">
//                 Created At: {exercise.timeCreated}
//               </small>
//             </Card.Footer>
//           </Card>
//         </div>
//       ))}
//     </div>
//   );
// };

class ExerciseList extends Component {
  render() {
    const { exercises, onSelect } = this.props;

    return (
      <div>
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
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
                  Duration: {exercise.duration} | Sets: {exercise.numberOfSets} |
                  Reps: {exercise.numberOfReps}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Created At: {exercise.timeCreated}
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
