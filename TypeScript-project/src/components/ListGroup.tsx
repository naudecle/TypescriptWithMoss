import { useState } from "react";
import Button from "./button";
import Alert from "./Alert";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSlectedIndex] = useState(-1);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSlectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {showAlert && (
        <Alert>
          <h1>YOU </h1> <h2>CLICKED </h2> <h3>ON </h3> <h4>THE </h4>{" "}
          <h5>WRONG </h5> <h6>BUTTON </h6>
          <button
            type="button"
            className="btn-close"
            aria-label="close"
            onClick={() => setShowAlert(false)}
          ></button>
        </Alert>
      )}
      <Button Click={() => setShowAlert(true)}>ClickMe</Button>
    </>
  );
}

export default ListGroup;
