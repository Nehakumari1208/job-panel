import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import CreateJob from './Pages/CreateJob';
import Job from './Pages/Job';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/create-job" element={<CreateJob />} />
      <Route path="/jobs" element={<Job />} />
      <Route path="/Jobs" element={<Navigate to="/jobs" replace />} />
      <Route path="/job-section" element={<Navigate to="/jobs" replace />} />
    </Routes>
  )
}

export default App
