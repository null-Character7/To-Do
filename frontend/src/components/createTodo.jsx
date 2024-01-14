import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    return (
        <div>
          <form>
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button
              onClick={() => {
                fetch("http://localhost:3000/todo", {
                  method: "POST",
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    title: title,
                    description: description
                  })
                })
                  .then(async function (res) {
                    const json = await res.json();
                    alert("Todo added");
                  })
              }}
            >
              Add a ToDo
            </button>
          </form>
        </div>
      );
}