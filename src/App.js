import { useState, useEffect } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const localData =
    JSON.parse(window.localStorage.getItem("groceryList")) || [];
  const [groceryList, setGroceryList] = useState(localData);
  const [item, setItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState("");
  const [error, setError] = useState(false);

  const handleChangeInput = (e) => {
    setItem(e.target.value);
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (item.trim().length === 0) return;

    const randomId =
      item[0] + Math.trunc(Math.random() * 10000) + item.slice(-1);
    const id = isEditing ? editID : randomId;
    const listItem = { item, id };

    if (isEditing) {
      setGroceryList((prev) => {
        const newList = prev.filter((listItem) => listItem.id !== id);

        return [...newList, listItem];
      });
      setIsEditing(false);
    } else {
      setGroceryList((prev) => {
        return [...prev, listItem];
      });
    }

    setItem("");
  };

  const handleEditItem = (key) => {
    const editItem = groceryList.filter((list) => list.id === key);

    const { item, id } = editItem[0];

    setItem(item);
    setEditID(id);
    setIsEditing(true);
  };

  const handleDeleteItem = (key) => {
    setGroceryList((prev) => {
      const newList = prev.filter((listItem) => listItem.id !== key);

      return [...newList];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("groceryList", JSON.stringify(groceryList));
  }, [groceryList]);

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
        <List
          groceryList={groceryList}
          handleDeleteItem={handleDeleteItem}
          handleEditItem={handleEditItem}
        />
      </Card>
    </main>
  );
}

export default App;
