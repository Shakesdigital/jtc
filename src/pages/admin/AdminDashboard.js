import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiUsers, 
  FiVideo, 
  FiCalendar, 
  FiFileText,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiX,
  FiBarChart2,
  FiHeart,
  FiGift
} from 'react-icons/fi';
import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

// Import admin components (these would be created separately)
const DashboardOverview = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Stats Cards */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-blue-100 rounded-full">
            <FiUsers className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Total Members</p>
            <p className="text-2xl font-bold text-gray-900">1,234</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-green-100 rounded-full">
            <FiVideo className="w-6 h-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Sermons</p>
            <p className="text-2xl font-bold text-gray-900">156</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-purple-100 rounded-full">
            <FiCalendar className="w-6 h-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Events</p>
            <p className="text-2xl font-bold text-gray-900">23</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <div className="p-3 bg-yellow-100 rounded-full">
            <FiGift className="w-6 h-6 text-yellow-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Donations</p>
            <p className="text-2xl font-bold text-gray-900">$12,345</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Quick Actions */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
            Add New Sermon
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
            Create Event
          </button>
          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
            View Prayer Requests
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="text-sm">
            <p className="text-gray-900">New sermon uploaded</p>
            <p className="text-gray-500">2 hours ago</p>
          </div>
          <div className="text-sm">
            <p className="text-gray-900">Prayer request submitted</p>
            <p className="text-gray-500">4 hours ago</p>
          </div>
          <div className="text-sm">
            <p className="text-gray-900">Event registration received</p>
            <p className="text-gray-500">6 hours ago</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Website</span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Online</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Database</span>
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Healthy</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Storage</span>
            <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">75% Used</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const navigationItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: FiHome },
    { name: 'Ministries', href: '/admin/ministries', icon: FiHeart },
    { name: 'Sermons', href: '/admin/sermons', icon: FiVideo },
    { name: 'Events', href: '/admin/events', icon: FiCalendar },
    { name: 'Blog Posts', href: '/admin/blog', icon: FiFileText },
    { name: 'Prayer Requests', href: '/admin/prayer-requests', icon: FiHeart },
    { name: 'Users', href: '/admin/users', icon: FiUsers },
    { name: 'Analytics', href: '/admin/analytics', icon: FiBarChart2 },
    { name: 'Settings', href: '/admin/settings', icon: FiSettings },
  ];

  const handleLogout = () => {
    logout();
    // Navigation will be handled by the auth context redirect
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 bg-church-red">
          <Link to="/admin/dashboard" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-church-red font-bold text-sm">JTC</span>
            </div>
            <span className="text-white font-bold text-lg">Admin</span>
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? 'bg-church-red text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* User Info & Logout */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-church-red rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {user?.firstName?.[0]}{user?.lastName?.[0]}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 truncate">{user?.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <FiLogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <FiMenu className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-church-red transition-colors duration-200"
              >
                View Site
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route index element={<DashboardOverview />} />
            <Route path="dashboard" element={<DashboardOverview />} />
            <Route path="ministries" element={<div className="p-6"><h1 className="text-2xl font-bold">Ministries Management</h1><p className="text-gray-600 mt-2">Manage church ministries here.</p></div>} />
            <Route path="sermons" element={<div className="p-6"><h1 className="text-2xl font-bold">Sermons Management</h1><p className="text-gray-600 mt-2">Upload and manage sermons here.</p></div>} />
            <Route path="events" element={<div className="p-6"><h1 className="text-2xl font-bold">Events Management</h1><p className="text-gray-600 mt-2">Create and manage events here.</p></div>} />
            <Route path="blog" element={<div className="p-6"><h1 className="text-2xl font-bold">Blog Management</h1><p className="text-gray-600 mt-2">Write and manage blog posts here.</p></div>} />
            <Route path="prayer-requests" element={<div className="p-6"><h1 className="text-2xl font-bold">Prayer Requests</h1><p className="text-gray-600 mt-2">View and manage prayer requests here.</p></div>} />
            <Route path="users" element={<div className="p-6"><h1 className="text-2xl font-bold">User Management</h1><p className="text-gray-600 mt-2">Manage admin users here.</p></div>} />
            <Route path="analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics</h1><p className="text-gray-600 mt-2">View site analytics here.</p></div>} />
            <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600 mt-2">Configure site settings here.</p></div>} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;