// Reusable dropdown. The options are passed in as a prop.
function SelectField({ label, name, value, options, error, touched, onChange, onBlur }) {
  const showError = touched && error;

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={showError ? "invalid" : touched ? "valid" : ""}
      >
        <option value="">-- Select --</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>{o.name}</option>
        ))}
      </select>
      {showError && <p className="error" role="alert">{error}</p>}
    </div>
  );
}

export default SelectField;
