import React from 'react';

const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(id)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;