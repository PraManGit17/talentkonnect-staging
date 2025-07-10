import React, { useEffect, useState } from 'react';
import { Copy, Check, Users, Award, Share2, Gift, TrendingUp } from 'lucide-react';
import { Logo } from '../components/logo';

const Referral = () => {
  const [referralLink, setReferralLink] = useState('');
  const [referralCount, setReferralCount] = useState(0);
  const [totalCreditsEarned, setTotalCreditsEarned] = useState(0);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);
  const [recentReferrals, setRecentReferrals] = useState([]);

  useEffect(() => {
    const userId = 'user123';
    const link = `https://talentkonnect.com/invite/${userId}`;
    setReferralLink(link);

    const users = JSON.parse(localStorage.getItem('users'));

    let referrals;
    if (users && users.length > 0) {
      referrals = users.slice(-5).reverse().map((user, index) => ({
        name: user.name || `User ${index + 1}`,
        date: Date.now() - index * 86400000,
        status: 'active',
      }));
    } else {
      // Use static fallback data if no users in localStorage
      referrals = [
        { name: 'Alex M.', date: Date.now() - 86400000, status: 'active' },
        { name: 'Sarah K.', date: Date.now() - 2 * 86400000, status: 'active' },
        { name: 'Mike R.', date: Date.now() - 3 * 86400000, status: 'pending' },
        { name: 'Lisa P.', date: Date.now() - 5 * 86400000, status: 'active' },
        { name: 'Tom W.', date: Date.now() - 7 * 86400000, status: 'active' }
      ];
    }

    setReferralCount(referrals.length);
    setTotalCreditsEarned(referrals.filter(r => r.status === 'active').length); // +1 credit only for active
    setRecentReferrals(referrals);
    setLoading(false);
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = referralLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join TalentKonnect',
          text: 'Turn your everyday expertise into earnings! Join me on TalentKonnect.',
          url: referralLink,
        });
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    } else {
      handleCopyLink();
    }
  };

  const formatDate = (timestamp) => {
    const diff = Date.now() - timestamp;
    const days = Math.floor(diff / 86400000);
    if (days === 0) return 'Today';
    if (days === 1) return 'Yesterday';
    return `${days} days ago`;
  };

  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10 px-80 py-4 rounded-md mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div>
              <Logo size="default" />
              <p className="text-sm text-gray-500 px-12">Referral Program</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#E76F51] text-white font-semibold">
            <Award className="w-4 h-4" />
            <span>{totalCreditsEarned} Credits</span>
          </div>
        </div>
      </header>


      <div className="max-w-4xl mx-auto">


        {loading ? (
          <p className="text-center py-10 text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-6">
            {/* Referral Overview */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-[#1D3557] mb-2">Invite Friends & Earn Credits</h2>
              <p className="text-gray-600 mb-4">Share your link and earn +1 credit for every signup.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <StatBox icon={<Users />} label="Friends Invited" value={referralCount} color="#E76F51" />
                <StatBox icon={<Award />} label="Credits Earned" value={totalCreditsEarned} color="#10B981" />
                <StatBox icon={<TrendingUp />} label="Success Rate" value={
                  referralCount > 0 ? `${Math.round((totalCreditsEarned / referralCount) * 100)}%` : '0%'
                } color="#3B82F6" />
              </div>
            </div>

            {/* Referral Link */}
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <label className="block text-sm font-medium text-gray-700">Your Invite Link</label>
              <div className="flex items-center gap-2">
                <input type="text" value={referralLink} readOnly className="flex-1 px-4 py-2 rounded border bg-gray-50 text-sm" />
                <button onClick={handleCopyLink} className={`px-4 py-2 text-white rounded ${copied ? 'bg-green-500' : 'bg-[#E76F51]'}`}>
                  {copied ? <Check className="w-4 h-4 inline" /> : <Copy className="w-4 h-4 inline" />} {copied ? 'Copied' : 'Copy'}
                </button>
                <button onClick={handleShare} className="px-4 py-2 border border-[#E76F51] text-[#E76F51] rounded hover:bg-orange-50">
                  <Share2 className="w-4 h-4 inline mr-1" /> Share
                </button>
              </div>
            </div>

            {/* Recent Referrals */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1D3557] mb-4">Recent Referrals</h3>
              {recentReferrals.map((ref, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-50 rounded px-4 py-2 mb-2">
                  <div>
                    <p className="font-medium text-gray-800">{ref.name}</p>
                    <p className="text-sm text-gray-500">{formatDate(ref.date)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${ref.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                      {ref.status === 'active' ? '✓ Active' : '⏳ Pending'}
                    </span>
                    {ref.status === 'active' && (
                      <span className="text-[#E76F51] flex items-center text-sm"><Award className="w-3 h-3 mr-1" />+1</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Referral Bonus Tips */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-4 mt-10">
          <div className="bg-orange-100 rounded-full p-2">
            <Gift className="text-orange-500 w-5 h-5" />
          </div>
          <ul className="text-sm text-gray-700 list-disc pl-2">
            <li>Credits from referrals count toward raffle entries</li>
            <li>Use credits for instant rewards in the marketplace</li>
            <li>Invite 10+ friends to unlock exclusive bonus rewards</li>
            <li>Your friend also gets 2 bonus credits for joining!</li>
          </ul>
        </div>

        {/* Share Ideas */}
        <div className="bg-white rounded-xl p-6 shadow-sm mt-10">
          <h3 className="text-xl font-bold text-[#1D3557] mb-4">Share Ideas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-[#1D3557] mb-2">Social Media</h4>
              <p className="text-sm text-gray-600 mb-3">
                "Just found this amazing platform for quick micro-tasks! Earning credits while helping others. Join me!"
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded">Facebook</button>
                <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded">Twitter</button>
                <button className="px-3 py-1 text-sm bg-pink-100 text-pink-600 rounded">Instagram</button>
              </div>
            </div>
            <div className="border rounded-lg p-4">
              <h4 className="font-semibold text-[#1D3557] mb-2">Direct Message</h4>
              <p className="text-sm text-gray-600 mb-3">
                "Hey! I'm using TalentKonnect to turn my skills into earnings with quick 5–15 min tasks. Want to try it?"
              </p>
              <div className="flex gap-2 flex-wrap">
                <button className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded">WhatsApp</button>
                <button className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded">Discord</button>
                <button className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded">Email</button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-10 bg-[#F1FAEE]">
          <h2 className="text-2xl font-bold text-[#1D3557] mb-2">Ready to Start Earning?</h2>
          <p className="text-gray-600 mb-4">Copy your link above and start inviting friends today!</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleCopyLink}
              className="bg-[#E76F51] text-white px-6 py-3 rounded-lg font-semibold"
            >
              Copy Link Now
            </button>
            <button
              onClick={handleShare}
              className="border border-[#1D3557] text-[#1D3557] px-6 py-3 rounded-lg font-semibold bg-white hover:bg-gray-50"
            >
              Share with Friends
            </button>
          </div>
        </div>

      </div>


    </div>
  );
};

// Component for Stat Boxes
const StatBox = ({ icon, label, value, color }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm text-center">
    <div className="w-10 h-10 mx-auto mb-2 rounded-full flex items-center justify-center" style={{ backgroundColor: color, color: 'white' }}>
      {icon}
    </div>
    <div className="text-2xl font-bold text-[#1D3557]">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default Referral;
