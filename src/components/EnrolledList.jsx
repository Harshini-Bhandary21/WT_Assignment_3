import { COURSES } from "../utils/validators";

// Lists the students who have enrolled so far (kept in the state of App).
function EnrolledList({ students }) {
  if (students.length === 0) return null;

  return (
    <section className="enrolled">
      <h2>Enrolled students</h2>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            <strong>{s.fullName}</strong> ({s.email}) enrolled in{" "}
            {COURSES.find((c) => c.id === s.course)?.name}, {s.mode}, starting {s.startDate}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EnrolledList;
