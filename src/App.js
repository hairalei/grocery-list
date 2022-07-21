import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [error, setError] = useState(false);
  const [item, setItem] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const handleChangeInput = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (item.trim().length === 0) return;

    const id = item[0] + Math.trunc(Math.random() * 10000) + item.slice(-1);
    const listItem = { item, id };

    setGroceryList((prev) => {
      return [...prev, listItem];
    });

    setItem("");
  };

  const handleEditItem = (e) => {};

  return (
    <main className="App">
      <div className="error"></div>
      <h1 className="primary-header">Grocery List</h1>
      <Card>
        <Form
          item={item}
          handleAddItem={handleAddItem}
          handleChangeInput={handleChangeInput}
        />
        <List groceryList={groceryList} />
      </Card>
    </main>
  );
}

export default App;
