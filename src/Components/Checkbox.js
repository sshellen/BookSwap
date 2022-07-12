import React from "react";

const Checkbox = ({ name, id, checked, callback }) => {
  const toggleCheckbox = (e, name) => {
    e.preventDefault();
    let checkbox = e.target;
    let input = checkbox.nextElementSibling;

    if (checkbox.classList.contains("checked")) {
      checkbox.classList.remove("checked");
    } else {
      checkbox.classList.add("checked");
    }
    input.dispatchEvent(new MouseEvent("click"));

    if (callback) callback(input.checked, input.name);
  };

  return (
    <div className="checkboxWrapper">
      <div
        className={checked ? "checkbox checked" : "checkbox"}
        onClick={(e) => toggleCheckbox(e, name)}
      />
      <input
        type="checkbox"
        name={name}
        id={id}
        value={id}
        defaultChecked={checked}
      />
    </div>
  );
};

export default Checkbox;
