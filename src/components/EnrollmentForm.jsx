import { useState } from "react";
import FormField from "./FormField";
import SelectField from "./SelectField";
import RadioGroup from "./RadioGroup";
import CourseSummary from "./CourseSummary";
import { COURSES, validateAll, hasErrors } from "../utils/validators";

const emptyForm = {
  fullName: "", email: "", phone: "", age: "", course: "", mode: "",
  startDate: "", password: "", confirmPassword: "", terms: false,
};

function EnrollmentForm({ onEnroll }) {
  const [form, setForm] = useState(emptyForm);       // values of all controlled inputs
  const [touched, setTouched] = useState({});        // which fields the user has visited

  // Re-checked on every render, so the errors update as the user types (real-time validation).
  const errors = validateAll(form);

  // The submit button stays disabled until there are no errors.
  const formValid = !hasErrors(errors);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e) => setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;
    // only the public details go to the list, the password is never stored
    const { fullName, email, phone, age, course, mode, startDate } = form;
    onEnroll({ fullName, email, phone, age, course, mode, startDate });
    setForm(emptyForm);
    setTouched({});
  };

  const common = (name) => ({
    name, value: form[name], error: errors[name], touched: touched[name],
    onChange: handleChange, onBlur: handleBlur,
  });

  return (
    <div className="layout">
      <form onSubmit={handleSubmit} noValidate>
        <FormField label="Full name" placeholder="e.g. Anita Sharma" {...common("fullName")} />
        <FormField label="Email" type="email" placeholder="name@example.com" {...common("email")} />
        <FormField label="Phone number" type="tel" placeholder="10 digit mobile number" {...common("phone")} />
        <FormField label="Age" type="number" placeholder="16 to 60" {...common("age")} />
        <SelectField label="Course" options={COURSES} {...common("course")} />
        <RadioGroup label="Learning mode" options={["Online", "Offline"]} {...common("mode")} />
        <FormField label="Preferred start date" type="date" {...common("startDate")} />
        <FormField label="Password" type="password" placeholder="min 8 characters, letter and digit" {...common("password")} />
        <FormField label="Confirm password" type="password" {...common("confirmPassword")} />

        <div className="field">
          <label className="radio">
            <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange} />
            I accept the terms and conditions
          </label>
          {touched.terms && errors.terms && <p className="error" role="alert">{errors.terms}</p>}
        </div>

        <button type="submit" disabled={!formValid}>Enroll now</button>
        {!formValid && <p className="hint">Fill all fields correctly to enable the button.</p>}
      </form>

      <CourseSummary courseId={form.course} mode={form.mode} />
    </div>
  );
}

export default EnrollmentForm;
