import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


/*
  Instructions:
    part1:
    You're given the UI for a basic form. Your task is to
    hook it all up using refs.

    The `Focus X Input` buttons should focus that specific input
    field.

    The `Submit` button should log `name`, `email`, and `password`
    to the console.

    The `Reset` button should result all of the input fields to
    empty strings.

    part2:
    Develop a search tag with debounce functionality.
    Debouncing means that a function will not be called again until
    a certain amount of time has passed. So here the setsearch method
    should be called repeatedly for every key stroke, instead it should
    be delayed by the time peroid mentioned in the debounce method (add some
    console log to validate this no need to use any api mock).
    It should avoid memory leaks and the solution provided should be scalable.

*/

function ReactForm() {
  const txtName = useRef(null);
  const txtEmail = useRef(null);
  const txtPwd = useRef(null);
  const txtSearch = useRef(null);
  const componentRef = useRef({});
  const { current: cmp } = componentRef;
  cmp.timer = null;
  const handleSubmit = (e) => {
    console.log(txtName.current.value);
    console.log(txtEmail.current.value);
    console.log(txtPwd.current.value);
  };

  const handleReset = () => {
    txtName.current.value = "";
    txtEmail.current.value = "";
    txtPwd.current.value = "";
  };

  const focusTxtName = () => {
    txtName.current.focus();
  };
  const focusTxtEmail = () => {
    txtEmail.current.focus();
  };
  const focusTxtPwd = () => {
    txtPwd.current.focus();
  };
  const debounce = (callback, delay) => {
    return function () {
      clearTimeout(cmp.timer);
      cmp.timer = setTimeout(() => {
        callback.apply(this);
      }, delay);
    };
  };
  const handleSearch = (e) => {
    console.log(txtSearch.current.value);
  };
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <React.Fragment>
      <div>
        <label>
          Name:
          <input placeholder="name" ref={txtName} type="text" />
        </label>
        <label>
          Email:
          <input placeholder="email" ref={txtEmail} type="text" />
        </label>
        <label>
          Password:
          <input placeholder="password" ref={txtPwd} type="text" />
        </label>

        <hr />

        <button onClick={focusTxtName}>Focus Name Input</button>
        <button onClick={focusTxtEmail}>Focus Email Input</button>
        <button onClick={focusTxtPwd}>Focus Password Input</button>

        <hr />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <hr />
        <label>
          Search:
          <input
            placeholder="search with debounce"
            type="text"
            name="txtSearch"
            ref={txtSearch}
            onChange={debouncedSearch}
          />
        </label>
      </div>
    </React.Fragment>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ReactForm />, rootElement);
