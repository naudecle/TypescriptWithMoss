import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Benin", "Burundi", "Burkina Faso", "Botswana", "Brazaville"];
  return (
    <div>
      <ListGroup items={items} heading="Country" />
    </div>
  );
}

export default App;
