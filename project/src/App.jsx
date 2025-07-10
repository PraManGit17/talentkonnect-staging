import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Onboarding from './modules/onboarding';
import Wallet from './modules/Wallet';
import PostGig from './modules/PostGig';
import CompleteGig from './modules/CompleteGig';
import Feed from './modules/Feed';
import Referral from './modules/Referral';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import Notifications from './modules/Notifications';


const App = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/post-gig" element={<PostGig />} />
        <Route path="/complete-gig" element={<CompleteGig />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/notifications" element={<Notifications />} />

        {/* Admin */}
        <Route path="/dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
