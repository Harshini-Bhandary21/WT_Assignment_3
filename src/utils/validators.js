// Validation rules for the enrollment form.
// Each function gets the value (and the whole form when needed) and returns an error text, or "" when the value is fine.

export const COURSES = [
  { id: "web", name: "Web Development with React", fee: 6000 },
  { id: "py", name: "Python for Data Analysis", fee: 5000 },
  { id: "java", name: "Core Java Programming", fee: 4500 },
  { id: "dsa", name: "Data Structures and Algorithms", fee: 5500 },
];

const todayString = () => new Date().toISOString().slice(0, 10);

export const validators = {
  fullName: (v) => {
    const name = v.trim();
    if (!name) return "Full name is required.";
    if (name.length < 3) return "Name must be at least 3 characters.";
    if (!/^[A-Za-z ]+$/.test(name)) return "Name can contain only letters and spaces.";
    return "";
  },
  email: (v) => {
    if (!v.trim()) return "Email is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim())) return "Enter a valid email like name@example.com.";
    return "";
  },
  phone: (v) => {
    if (!v) return "Phone number is required.";
    if (!/^\d+$/.test(v)) return "Phone number can contain only digits.";
    if (v.length !== 10) return "Phone number must be exactly 10 digits.";
    if (!/^[6-9]/.test(v)) return "Phone number must start with 6, 7, 8 or 9.";
    return "";
  },
  age: (v) => {
    if (v === "") return "Age is required.";
    const n = Number(v);
    if (!Number.isInteger(n)) return "Age must be a whole number.";
    if (n < 16 || n > 60) return "Age must be between 16 and 60.";
    return "";
  },
  course: (v) => (v ? "" : "Please select a course."),
  mode: (v) => (v ? "" : "Please choose a learning mode."),
  startDate: (v) => {
    if (!v) return "Please pick a start date.";
    if (v < todayString()) return "Start date cannot be in the past.";
    return "";
  },
  password: (v) => {
    if (!v) return "Password is required.";
    if (v.length < 8) return "Password must be at least 8 characters.";
    if (!/[A-Za-z]/.test(v) || !/\d/.test(v)) return "Password must contain a letter and a digit.";
    return "";
  },
  confirmPassword: (v, form) => {
    if (!v) return "Please confirm your password.";
    if (v !== form.password) return "Passwords do not match.";
    return "";
  },
  terms: (v) => (v ? "" : "You must accept the terms to enroll."),
};

// Runs every rule and returns an object like { fullName: "...", email: "" }.
export function validateAll(form) {
  const errors = {};
  Object.keys(validators).forEach((field) => {
    errors[field] = validators[field](form[field], form);
  });
  return errors;
}

export const hasErrors = (errors) => Object.values(errors).some(Boolean);
