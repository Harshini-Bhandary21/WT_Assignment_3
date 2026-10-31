import { useState, useEffect } from "react";
import EnrollmentForm from "./components/EnrollmentForm";
import EnrolledList from "./components/EnrolledList";

function App() {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");

  const addStudent = (record) => {
    setStudents((prev) => [...prev, record]);
    setMessage(`Thank you ${record.fullName}, your enrollment is confirmed!`);
  };

  // Update the browser tab title after each enrollment.
  useEffect(() => {
    document.title = `Course Enrollment (${students.length} enrolled)`;
  }, [students]);

  return (
    <main className="container">
      <header>
        <h1>LearnHub Course Enrollment</h1>
        <p>Fill in the form below to join a course.</p>
      </header>

      {message && <div className="success" role="status">{message}</div>}

      <EnrollmentForm onEnroll={addStudent} />
      <EnrolledList students={students} />
    </main>
  );
}

export default App;
