// SearchLocation.jsx
import { useState } from "react";

function SearchLocation({ setCity }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputValue); // Set the city state in App.jsx
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center mt-10">
        <label className="input flex items-center w-[320px] gap-2 bg-white border-6 shadow-md">
          <input
            type="text"
            className="grow"
            placeholder="Enter City ..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 2 16 16"
              fill="currentColor"
              className="h-6 w-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>
    </>
  );
}

export default SearchLocation;
