// Reusable input used for text, email, number, date and password fields.
// It only displays things; the value and the error come from the parent as props.
function FormField({ label, name, type = "text", value, error, touched, onChange, onBlur, placeholder }) {
  const showError = touched && error;
  const valid = touched && !error;

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        className={showError ? "invalid" : valid ? "valid" : ""}
        aria-invalid={showError ? "true" : "false"}
      />
      {showError && <p className="error" role="alert">{error}</p>}
    </div>
  );
}

export default FormField;
