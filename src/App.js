import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Appoinment from './pages/Appoinment/Appoinment/Appoinment';
import Login from './pages/Login/Login/Login';
import Resister from './pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './pages/Dashboard/AddDoctor/AddDoctor';
import AdminRoute from './pages/Login/AdminRoute/AdminRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/appoinment" element={<Appoinment />} /> */}
            <Route
              path="/appoinment"
              element={
                <PrivateRoute>
                  <Appoinment />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Resister />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route
                path="/dashboard/home"
                element={<DashboardHome />}
              />
              <Route
                path="/dashboard"
                element={<DashboardHome />}
              />
              <Route
                path="/dashboard/makeadmin"
                element={<AdminRoute>
                  <MakeAdmin />
                </AdminRoute>}
              />
              <Route
                path="/dashboard/adddoctor"
                element={<AddDoctor />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
