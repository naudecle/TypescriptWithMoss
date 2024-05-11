function ListGroup() {
  let items = ["Benin", "Burundi", "Burkina Faso", "Botswana", "Brazaville"];
  items = [];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 ? <p>No item found</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
