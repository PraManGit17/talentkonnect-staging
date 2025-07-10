import React, { useState } from 'react';
import { Logo } from '../components/logo';

const Notifications = () => {
  const [creditBalance, setCreditBalance] = useState(245);
  const [tokenBalance, setTokenBalance] = useState(89);
  const [showModal, setShowModal] = useState(false);

  const handleConvertCredits = () => {
    setCreditBalance(196);
    setTokenBalance(138);
    setShowModal(false);
    setTimeout(() => alert('Converted 49 credits to TalentTokens!'), 300);
  };

  const handleRefreshBalance = () => {
    alert('Balance updated successfully!');
  };

  const saveNotificationSettings = () => {
    alert('Notification settings saved successfully!');
  };

  const testNotification = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("TalentKonnect Test", {
          body: "This is a test notification from TalentKonnect!",
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
          if (permission === "granted") {
            new Notification("TalentKonnect Test", {
              body: "Notifications enabled successfully!",
            });
          }
        });
      }
    } else {
      alert("Browser notifications are not supported");
    }
  };

  return (
    <div className='bg-green-100/40 min-h-screen flex flex-col'>

      {/* Full-width header */}
      <header className="bg-white shadow-sm w-full">
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <Logo size="default" />
        </div>
      </header>

      {/* Main container */}
      <div className="w-full mx-auto p-5 font-['Lora'] text-[#2A2D34]">

        {/* Notification Box - centered with 40% width */}
        <div id="notifications" className="bg-white rounded-xl p-4 shadow-sm mb-5 w-[40%] mx-auto">
          <div className="font-['Inter'] font-semibold text-lg text-[#1D3557] mb-4">
            🔔 Notifications & Reminders
          </div>

          <div className="mb-5">
            <h4 className="font-['Inter'] font-semibold text-[#1D3557] mb-2">Recent Notifications</h4>
            <div className="bg-white rounded-md mb-2 p-2 border-l-4 border-[#E76F51]">
              <strong>Credit Earned!</strong> You gained 5 credits for sharing a productivity tip.
              <small className="block text-sm text-gray-600 mt-1">2 hours ago</small>
            </div>
            <div className="bg-white rounded-md mb-2 p-2 border-l-4 border-[#1D3557]">
              <strong>Raffle Reminder</strong> Don't forget to enter tonight's raffle draw!
              <small className="block text-sm text-gray-600 mt-1">5 hours ago</small>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="font-['Inter'] font-semibold text-[#1D3557] mb-2">Notification Settings</h4>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="mr-2" /> Push Notifications
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="mr-2" /> SMS Reminders
            </label>
            <label className="block mb-2 cursor-pointer">
              <input type="checkbox" className="mr-2" /> WhatsApp Updates
            </label>
          </div>

          <button className="bg-[#E76F51] text-white py-2 px-4 rounded mr-2 hover:bg-[#d85a3e]" onClick={saveNotificationSettings}>Save Settings</button>
          <button className="border-2 border-[#1D3557] text-[#1D3557] py-2 px-4 rounded hover:bg-[#1D3557] hover:text-white" onClick={testNotification}>Test Notification</button>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl text-center max-w-md w-full">
              <div className="font-['Inter'] font-semibold text-xl text-[#1D3557] mb-4">Confirm Credit Conversion</div>
              <p>You're about to convert <strong>49 credits</strong> (20% of 245) into <strong>TalentTokens</strong>.</p>
              <p className="mt-4 text-sm text-[#2A2D34]/80">
                TalentTokens provide exclusive benefits and can be used for premium features.
              </p>
              <div className="flex justify-center gap-4 mt-6 max-sm:flex-col">
                <button className="bg-[#E76F51] text-white py-2 px-4 rounded hover:bg-[#d85a3e]" onClick={handleConvertCredits}>Convert Now</button>
                <button className="border-2 border-[#1D3557] text-[#1D3557] py-2 px-4 rounded hover:bg-[#1D3557] hover:text-white" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Notifications;
