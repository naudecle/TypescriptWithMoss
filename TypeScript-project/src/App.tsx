import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Benin", "Burundi", "Burkina Faso", "Botswana", "Brazaville"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Country"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        The List <span>Of kind Country</span>{" "}
      </Alert>
    </div>
  );
}

export default App;
