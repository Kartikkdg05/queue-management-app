import { useState } from "react";

export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) {
      return;
    }

    onAdd({
      name: name.trim(),
      service,
    });

    setName("");
    setService("");
  };

  return (
    <section className="form-card">
      <h2>Add to queue</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          <option value="Payment">Payment</option>
          <option value="Support">Support</option>
          <option value="Consultation">Consultation</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>

        <button className="add-btn" type="submit">
          Add Customer
        </button>
      </form>
    </section>
  );
}
