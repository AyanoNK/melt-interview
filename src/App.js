import "./App.css";
import { createContext, useState } from "react";
import ListItem from "./components/ListItem";
import Form from "./Form";

const {} = createContext();

// create context with todo state
export const TodoContext = createContext();

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Learn React",
      status: "In Progress",
    },
  ]);

  const addTodo = (values) => {
    setTodo((prevStat) => [
      ...prevStat,
      {
        id: prevStat.length + 1,
        title: values.title,
        status: "In Progress",
      },
    ]);
  };

  const changeStatus = (id) => {
    setTodo((prevStat) =>
      prevStat.map((item) =>
        item.id === id ? { ...item, status: "Done" } : item
      )
    );
  };

  return (
    <div className="App">
      <main>
        <TodoContext.Provider value={{ todo, addTodo }}>
          <h1>TODO LIST</h1>
          <div className="input-container">
            <Form />
          </div>
          <div className="list-container">
            {todo.map((item, index) => (
              <ListItem
                item={item}
                key={index}
                changeStatus={() => changeStatus(item.id)}
              />
            ))}
          </div>
        </TodoContext.Provider>
      </main>
    </div>
  );
}

export default App;
