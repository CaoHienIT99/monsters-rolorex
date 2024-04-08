/* eslint-disable react/prop-types */
import "./SearchBox.style.css";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    ></input>
  );
};
