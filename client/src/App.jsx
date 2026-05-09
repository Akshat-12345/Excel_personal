import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./redux/authSlice";

// Protection Routes
import ProtectedRoute from "./protection/ProtectedRoute";
import AdminRoute from "./protection/AdminRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

// Layouts & Components
import AdminDashboard from "./layouts/AdminLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardHome from "./components/Dashboard/DashboardHome";
import Upload from "./components/Dashboard/Upload";
import Analyze from "./components/Dashboard/Analyze";
import History from "./components/Dashboard/History";
import AIInsights from "./components/Dashboard/AIInsights";
import Settings from "./components/Dashboard/Settings";
import ChatWithFile from "./components/Dashboard/ChatWithFile";

// Admin Components
import AdminHome from "./components/Admin/AdminHome";
import AdminManageUsers from "./components/Admin/AdminManageUsers";
import AdminManageFiles from "./components/Admin/AdminManageFiles";
import AdminSettings from "./components/Admin/AdminSettings";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Storage Sync: SessionStorage se check karna (Login.jsx bhi ab yahi use karega)
    const token = sessionStorage.getItem("token");
    const userData = sessionStorage.getItem("user");

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        // 2. Redux Sync: App load hote hi Redux state fill karna
        dispatch(setCredentials({ token, user: parsedUser }));
      } catch (error) {
        console.error("Auth initialization error:", error);
        // Agar data corrupt hai toh clear kar do
        sessionStorage.clear();
      }
    }
    
    // Auth check ke baad loading stop karo
    setIsLoading(false);
  }, [dispatch]);

  // Loading spinner jab tak auth check na ho jaye
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#ffc000]"></div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Normal User Dashboard with Nested Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="upload" element={<Upload />} />
          <Route path="analyze" element={<Analyze />} />
          <Route path="history" element={<History />} />
          <Route path="ai-insights" element={<AIInsights />} />
          <Route path="settings" element={<Settings />} />
          <Route path="chatwithfile" element={<ChatWithFile />} />
        </Route>

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminHome />} />
          <Route path="users" element={<AdminManageUsers />} />
          <Route path="files" element={<AdminManageFiles />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Catch-all route - Redirect to Home if path not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;