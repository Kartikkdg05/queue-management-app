import { useState } from "react";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";
import "./App.css";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue((prevQueue) => [
      ...prevQueue,
      {
        ...customer,
        id: Date.now(),
        status: "waiting",
      },
    ]);
  };

  const updateStatus = (id, newStatus) => {
    setQueue((prevQueue) =>
      prevQueue.map((customer) =>
        customer.id === id ? { ...customer, status: newStatus } : customer,
      ),
    );
  };

  const removeFromQueue = (id) => {
    setQueue((prevQueue) => prevQueue.filter((customer) => customer.id !== id));
  };

  return (
    <main className="app">
      <header className="header">
        <h1>Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <div className="dashboard">
        <QueueForm onAdd={addToQueue} />

        <QueueDisplay
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
        />
      </div>
    </main>
  );
}
