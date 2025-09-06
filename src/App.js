import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import MinistryDetail from './pages/MinistryDetail';
import ChildrensMinistry from './pages/ChildrensMinistry';
import WorshipMinistry from './pages/WorshipMinistry';
import ChurchService from './pages/ChurchService';
import Sermons from './pages/Sermons';
import SermonDetail from './pages/SermonDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import Multimedia from './pages/Multimedia';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import PrayerRequests from './pages/PrayerRequests';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="ministries" element={<Ministries />} />
          <Route path="ministries/:slug" element={<MinistryDetail />} />
          <Route path="ministries/childrens-ministry" element={<ChildrensMinistry />} />
          <Route path="ministries/worship-ministry" element={<WorshipMinistry />} />
          <Route path="church-service" element={<ChurchService />} />
          <Route path="church-service/sermons" element={<Sermons />} />
          <Route path="church-service/sermons/:id" element={<SermonDetail />} />
          <Route path="events" element={<Events />} />
          <Route path="events/:id" element={<EventDetail />} />
          <Route path="multimedia" element={<Multimedia />} />
          <Route path="multimedia/videos" element={<Multimedia />} />
          <Route path="multimedia/audio" element={<Multimedia />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="prayer-requests" element={<PrayerRequests />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;