import React, { useRef } from "react";
import ReactDOM from "react-dom";

function ReactForm() {
  const [box, setBox] = useState("");
  const componentRef = useRef({});
  const { current: cmp } = componentRef;
  cmp.timer = null;
  const debounce = (callback, delay) => {
    return function () {
      clearTimeout(cmp.timer);
      cmp.timer = setTimeout(() => {
        callback.apply(this);
      }, delay);
    };
  };
  const handleSearch = (e) => {
    setBox(e.target.value);
    console.log(e.target.value);
  };
  const debouncedSearch = debounce(handleSearch, 1000);
  return (
    <React.Fragment>
      <div>
        <hr />
        <label>
          Search:
          <input
            value={box}
            placeholder="search with debounce"
            type="text"
            name="txtSearch"
            onChange={debouncedSearch}
          />
        </label>
      </div>
    </React.Fragment>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<ReactForm />, rootElement);
