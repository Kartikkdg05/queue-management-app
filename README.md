# 🚀 Queue Management Application

A modern **Queue Management Application** built using **React** and **Vite**. It allows users to add customers to a queue, manage their service status, and remove customers with a clean, responsive user interface.

---

## 📸 Preview

![Queue Management Application](https://via.placeholder.com/900x450.png?text=Queue+Management+Application)

> You can replace the above image with an actual screenshot of your application.

---

## ✨ Features

- ➕ Add customers to the queue
- 📝 Select a service type
- 📋 Display all queued customers
- 🔄 Update customer status:
  - Waiting
  - Serving
  - Completed
- ❌ Remove customers from the queue
- 🎨 Responsive dark-themed UI
- ⚡ Fast performance with React + Vite

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Vite
- CSS3
- HTML5

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── QueueForm.jsx
│   └── QueueDisplay.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## ⚛️ React Concepts Used

- Functional Components
- useState Hook
- Props
- Callback Functions
- Controlled Components
- Event Handling
- Conditional Rendering
- List Rendering using `map()`
- Unique Keys
- Spread Operator
- State Management
- Immutable State Updates

---

## 🔄 Application Flow

```text
User fills the form
        │
        ▼
QueueForm
        │
        ▼
onAdd(customer)
        │
        ▼
App.jsx
        │
        ▼
setQueue()
        │
        ▼
Queue State Updated
        │
        ▼
QueueDisplay
        │
        ▼
Customer Appears
```

---

## 📌 Customer Status Flow

```text
Waiting
   │
   ▼
Serving
   │
   ▼
Completed
```

---

## 📦 Installation

Clone the repository

```bash
git clone https://github.com/Kartikkdg05/queue-management-app.git
```

Go to the project directory

```bash
cd queue-management-app
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open your browser and visit

```text
http://localhost:5173
```

---

## 🧠 Key React Logic

### Add Customer

```javascript
setQueue((prevQueue) => [
  ...prevQueue,
  {
    ...customer,
    id: Date.now(),
    status: "waiting",
  },
]);
```

### Update Customer Status

```javascript
setQueue((prevQueue) =>
  prevQueue.map((customer) =>
    customer.id === id
      ? { ...customer, status: newStatus }
      : customer
  )
);
```

### Remove Customer

```javascript
setQueue((prevQueue) =>
  prevQueue.filter((customer) => customer.id !== id)
);
```

---

## 📸 Screenshots

You can add screenshots here.

Example:

```text
screenshots/
├── home.png
├── add-customer.png
└── serving.png
```

Then use:

```markdown
![Home](screenshots/home.png)
```

---

## 🎯 Future Improvements

- Search customers
- Queue statistics dashboard
- Authentication
- Database integration
- Backend using Node.js & Express
- Persistent storage with MongoDB
- Drag-and-drop queue ordering

---

## 👨‍💻 Author

**Kartik Deep Gautam**

- GitHub: https://github.com/Kartikkdg05
- LinkedIn: https://linkedin.com/in/kartik-deep-gautam-kdg

---

## 📄 License

This project is developed for learning and educational purposes.

---

⭐ If you found this project useful, consider giving it a star on GitHub.