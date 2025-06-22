# 💊 Medication Management System

## 📋 Project Overview

The *Medication Management System* helps patients and caretakers track daily medication schedules. It includes role-based dashboards, medication tracking, adherence monitoring, and secure user authentication. Built with *React, **React Query, and integrates with a **Node.js + SQLite* backend.

---

## 🌐 Live Demo

* *Frontend:* [https://medication-frontend-psi.vercel.app](https://medication-frontend-psi.vercel.app)

### 🧪 Test Credentials

#### Caretaker

* *Email:* [Sindhuja@example.com](mailto:Sindhuja@example.com)
* *Password:* sindhuja111

#### Patient

* *Email:* [Sairam@example.com](mailto:Sairam@example.com)
* *Password:* sairamgoud111

---

## 🚀 Tech Stack

### 🖥 Frontend

* *React* (Component-based UI)
* *React Query* (Server state & cache management)
* *React Router DOM* (Routing)
* *styledComponents* (Styling)
* *CSS* (Styling)
* *JavaScript (ES6+)*

### ⚙ Backend

* *Node.js* with *Express.js*
* *SQLite* for data storage
* *JWT + bcrypt* for authentication

---

## 📦 Features (Phase 1 Implemented)

### ✅ Authentication

* Separate login/signup pages for *Patients* and *Caretakers*
* Session-based navigation logic

### ✅ Medication Tracking

* Add medications with name, dosage, frequency
* "Mark as Taken" button updates adherence
* View medication list dynamically

### ✅ Patient Dashboard

* Displays:

  * Patient name
  * Caretaker name
  * Medication streak (daily)
  * Monthly adherence rate
  * Today’s medication status
  * Calendar with medication completion status

### 🔁 Caretaker Dashboard

* Displays:

  * Assigned patient(s)
  * Overall adherence rate
  * Caretaker performance metrics
  * Calendar and daily activity history

---

## 🧭 Folder Structure (Frontend)


project-frontend/
├── public/
├── src/
│   ├── components/         # Shared components
│   ├── pages/              # Page-level components
│   ├── services/           # API services
│   ├── App.js              # Routing
│   ├── index.js            # Entry point
│   └── styles.css          # Styling
└── package.json


## 🧭 Folder Structure (Backend)


project-backend/
├── index.js                # Entry point of backend server
├── db.sqlite3              # SQLite database file
├── routes/                 # Route handlers for auth & medication
├── middleware/             # Auth/token verification middleware
├── controllers/            # Business logic
├── utils/                  # Helper functions
└── package.json


---

## 🛠 Installation & Setup

### 1. Clone the repository

bash
git clone https://github.com/NandeeshwarYadav/Medication-Management-System.git
cd Medication-Management-System


### 2. Set up the Backend

bash
cd project-backend
npm install
node index.js


* Backend runs at http://localhost:3001

### 3. Set up the Frontend

bash
cd ../project-frontend
npm install
npm start


* App runs at http://localhost:3000

> ⚠ Make sure src/services in frontend points to correct backend URL

---

## 🧪 Running Tests (Vitest)

Add your frontend test cases in src/__tests__/

bash
npm run test


Recommended test ideas:

* Dashboard rendering
* API service correctness
* Form validation behavior

---

## 📋 API Endpoints

### Authentication

* POST /signup/patient
* POST /signup/caretaker
* POST /login/patient
* POST /login/caretaker

### Medication

* POST /medications
* GET /medications
* POST /medications/mark

---

## ✅ Functional Highlights

* 📅 Calendar with daily status coloring
* 🔁 Live dashboard update on "Mark as Taken"
* 📊 Monthly adherence stats
* 🔐 Secure, role-based access
* 🔄 Efficient data fetching with React Query

---

## ✅ Additional Requirements Met

* ✅ Form validation on all inputs
* ✅ Loading and error states for data fetching
* ✅ Git with meaningful commit history
* ✅ Real-time dashboard updates on medication actions

---

## 📜 Notes & Assumptions

* Each patient has a single assigned caretaker
* A day is marked complete only if *all medications* are taken
* File upload is not yet available
* Backend must be live for all features to function correctly

---

## 🧠 Future Enhancements

* Real-time updates via WebSockets
* File upload (photo proof for taken medications)
* Data visualization (weekly/monthly adherence trends)
* Notification system for reminders and alerts

---

## 👨‍💻 Author

*Nandeeshwar Yadav*
[GitHub Profile](https://github.com/NandeeshwarYadav)

---

## 📃 License

Licensed under the *MIT License*
