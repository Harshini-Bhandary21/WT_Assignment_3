// Reusable group of radio buttons (used for the learning mode).
function RadioGroup({ label, name, value, options, error, touched, onChange }) {
  return (
    <div className="field">
      <span className="label">{label}</span>
      <div className="radios">
        {options.map((opt) => (
          <label key={opt} className="radio">
            <input type="radio" name={name} value={opt} checked={value === opt} onChange={onChange} />
            {opt}
          </label>
        ))}
      </div>
      {touched && error && <p className="error" role="alert">{error}</p>}
    </div>
  );
}

export default RadioGroup;
