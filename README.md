# Exercise Tracker App

The Exercise Tracker App is a simple web application that allows users to track their exercise routines. It provides functionalities to create, view, update, and delete exercise entries.

![Exercise Tracker Screenshot](./images/et-home.png)

## Features

- View a list of exercises with details such as name, description, duration, number of sets, number of reps, and creation timestamp.
- Create new exercise entries with the required details.
- View and update the details of existing exercises.
- Delete exercises from the list.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: For handling client-side routing.
- Bootstrap: For styling the user interface.
- Axios: For making HTTP requests to the backend API.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/exercise-tracker.git
   ```

2. Navigate to the project directory:
   ```
   cd exercise-tracker
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

## API Backend

The frontend of this app communicates with a RESTful API backend, powered by Java and Spring Boot. The backend provides endpoints for managing exercises and their details. The API documentation can be found [here](https://github.com/dieudonne96/exercisetrackerjava).

Make sure to set the appropriate API base URL in the `axios` requests to interact with the backend. You can configure it in the `axios.defaults.baseURL` in the `ExerciseTracker` component.

## Usage

1. Launch the application by running `npm start` in the project directory.
2. Upon starting the app, you will see a list of exercises (if any) on the home page.
3. To add a new exercise, click on the "Add New Exercise" button and fill in the required details in the form.
4. To update an existing exercise, click on the "Update" button on the desired exercise card and make the necessary changes in the update form.
5. To delete an exercise, click on the "Delete" button on the exercise card.

## Contributing

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Future Works
1. Add Sign up and Login feature to personalise user usage
2. Implement search feature, for searching exercise by 'name' or 'keyword'

## License

This project is licensed under the [MIT License](LICENSE).

---
