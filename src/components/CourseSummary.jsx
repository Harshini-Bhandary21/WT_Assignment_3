import { COURSES } from "../utils/validators";

// Shows the selected course and its fee while the user is filling the form.
function CourseSummary({ courseId, mode }) {
  const course = COURSES.find((c) => c.id === courseId);

  if (!course) {
    return <aside className="summary"><h3>Course summary</h3><p>Select a course to see its fee.</p></aside>;
  }

  const discount = mode === "Online" ? 10 : 0;
  const total = course.fee - (course.fee * discount) / 100;

  return (
    <aside className="summary">
      <h3>Course summary</h3>
      <p><strong>{course.name}</strong></p>
      <p>Fee: ₹{course.fee}</p>
      {discount > 0 && <p>Online discount: {discount}%</p>}
      <p className="total">Payable: ₹{total}</p>
    </aside>
  );
}

export default CourseSummary;
