export default function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  return (
    <section className="queue-card">
      <h2>Current queue</h2>

      {queue.length === 0 ? (
        <p className="empty-message">No customers in the queue.</p>
      ) : (
        <div className="queue-list">
          {queue.map((customer) => (
            <div className="queue-item" key={customer.id}>
              <div className="customer-info">
                <h3>{customer.name}</h3>

                <p>{customer.service}</p>

                <span className={`status ${customer.status}`}>
                  {customer.status}
                </span>
              </div>

              <div className="actions">
                {customer.status === "waiting" && (
                  <button
                    className="serve-btn"
                    onClick={() => onUpdateStatus(customer.id, "serving")}
                  >
                    Serve
                  </button>
                )}

                {customer.status === "serving" && (
                  <button
                    className="complete-btn"
                    onClick={() => onUpdateStatus(customer.id, "completed")}
                  >
                    Complete
                  </button>
                )}

                <button
                  className="remove-btn"
                  onClick={() => onRemove(customer.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
