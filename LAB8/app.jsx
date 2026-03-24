import React, { useState } from "react";
import "./index.css";

function App() {
  const [tasks, setTask] = useState([]);
  const [filter, setFilter] = useState("all");
  const [form, setForm] = useState({ name: "", date: "", desc: "" });

  const add = (e) => {
    e.preventDefault(); // FIXED

    if (form.name && form.date) {
      setTask([...tasks, { ...form, done: false }]);
      setForm({ name: "", date: "", desc: "" });
    }
  };

  const toggle = (i) => {
    setTask(
      tasks.map((t, j) =>
        j === i ? { ...t, done: !t.done } : t
      )
    );
  };

  return (
    <div className="app">
      <h1>Reminder App</h1>

      <form onSubmit={add}>
        {["name", "date", "desc"].map((k) => (
          <input
            key={k}
            type={k === "date" ? "date" : "text"}
            placeholder={k}
            value={form[k]} // FIXED
            onChange={(e) =>
              setForm({ ...form, [k]: e.target.value })
            }
          />
        ))}
        <button type="submit">Add</button>
      </form>

      <div className="filters">
        {["all", "done", "notdone"].map((v) => (
          <button key={v} onClick={() => setFilter(v)}>
            {v}
          </button>
        ))}
      </div>

      <ul>
        {tasks
          .filter(
            (t) =>
              filter === "all" ||
              (filter === "done" && t.done) ||
              (filter === "notdone" && !t.done)
          )
          .map((t, i) => (
            <li
              key={i}
              onClick={() => toggle(i)}
              className={t.done ? "done" : ""}
            >
              <b>{t.name}</b> - {t.date}{" "}
              {t.desc && `| ${t.desc}`}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
