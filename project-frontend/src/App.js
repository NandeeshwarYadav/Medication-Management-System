// App.js
import { Route, Routes } from 'react-router-dom';

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Patient from "./components/Patient";
import Caretaker from "./components/Caretaker";

import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";

import './App.css';

const App = () => (
  <Routes>
    {/* Public Routes */}
    <Route
      path="/login"
      element={
        <PublicRoute>
          <Login />
        </PublicRoute>
      }
    />
    <Route
      path="/register"
      element={
        <PublicRoute>
          <Register />
        </PublicRoute>
      }
    />
    <Route
      path="/"
      element={
        <PublicRoute>
          <Home />
        </PublicRoute>
      }
    />

    {/* Protected Routes */}
    
    <Route
      path="/patient"
      element={
        <ProtectedRoute>
          <Patient />
        </ProtectedRoute>
      }
    />
    <Route
      path="/caretaker"
      element={
        <ProtectedRoute>
          <Caretaker />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default App;
