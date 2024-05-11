import { MouseEvent, useState } from "react";

function ListGroup() {
  let items = ["Benin", "Burundi", "Burkina Faso", "Botswana", "Brazaville"];
  const [selectedIndex, setSlectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
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
            onClick={() => setSlectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
