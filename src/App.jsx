import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './Component/Auth';
import Dashboard from './Component/Dashboard';
import {  Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" />;
};
const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Auth />} />
              <Route 
                  path="/dashboard" 
                  element={
                      <ProtectedRoute>
                          <Dashboard />
                      </ProtectedRoute>
                  } 
              />
          </Routes>
      </Router>
  );
};

export default App;
