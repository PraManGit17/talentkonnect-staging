import React, { useState, useEffect } from 'react';
import { Heart, Star, Award, Check, TrendingUp, Medal } from 'lucide-react';
import { Logo } from '../components/logo';

const Feed = () => {
  const [feedItems, setFeedItems] = useState([]);
  const [userCredits, setUserCredits] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchFeed = () => {
    setLoading(true);
    const tips = JSON.parse(localStorage.getItem('tips')) || [];
    const credits = JSON.parse(localStorage.getItem('credits')) || [];
    const postedGigs = JSON.parse(localStorage.getItem('gigs')) || [];

    const tipItems = tips.map((tip, i) => ({
      id: `tip-${i}`,
      type: 'tip',
      user: tip.name,
      avatar: '💡',
      timestamp: new Date(credits[i]?.timestamp || Date.now()).getTime(),
      content: tip.tip,
      upvotes: 1,
      hasUpvoted: true,
    }));

    const gigItems = postedGigs.map((gig, i) => ({
      id: `gig-${gig.id}`,
      type: 'gig',
      user: 'You',
      avatar: '📝',
      timestamp: Date.now() - i * 1000000,
      content: `Posted gig: ${gig.title} - ${gig.description}`,
      upvotes: 0,
      hasUpvoted: false,
    }));

    const allFeed = [...tipItems, ...gigItems].sort((a, b) => b.timestamp - a.timestamp);
    const totalCredits = credits.reduce((sum, c) => sum + c.amount, 0);
    setUserCredits(totalCredits);
    setFeedItems(allFeed);
    setLoading(false);
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return `${minutes}m ago`;
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'tip':
        return { icon: <Star className="w-4 h-4" />, color: 'text-yellow-500', bg: 'bg-yellow-100' };
      case 'gig':
        return { icon: <Award className="w-4 h-4" />, color: 'text-green-500', bg: 'bg-green-100' };
      case 'completion':
        return { icon: <Check className="w-4 h-4" />, color: 'text-blue-500', bg: 'bg-blue-100' };
      default:
        return { icon: <TrendingUp className="w-4 h-4" />, color: 'text-gray-500', bg: 'bg-gray-100' };
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className='bg-green-100/30 min-h-screen flex flex-col gap-10 w-full'>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-80 py-4 flex justify-between items-center">
          <div className='flex flex-col'>
            <Logo size="default" />
            <div className='text-gray-500 px-2'>Feed & Discovery</div>
          </div>
          <div className="bg-[#E76F51] text-white px-3 py-1 rounded-full text-sm font-medium flex gap-2">
            <Medal size={20} />{userCredits} Credits
          </div>
        </div>
      </header>

      <div className="w-[60%] mx-auto p-6">
        <div className="flex flex-col mb-6">
          <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-bold text-[#1D3557]">Community Feed</h1>
            <button onClick={fetchFeed} disabled={loading} className='border px-4 py-2 rounded-xl flex items-center gap-2 disabled:opacity-50'>
               <TrendingUp size={15} className={`${loading ? 'animate-spin' : ''}`}/> {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
          <div>Latest tips, gigs, and completions from the community. Upvote to earn credits!</div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <div className="space-y-4">
            {feedItems.map((item) => {
              const typeInfo = getTypeIcon(item.type);
              return (
                <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 transition-all hover:shadow-md">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{item.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-gray-800">{item.user}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${typeInfo.bg} ${typeInfo.color} flex items-center space-x-1`}>
                          {typeInfo.icon}
                          <span className="capitalize">{item.type}</span>
                        </span>
                        <span className="text-xs text-gray-400">• {formatTime(item.timestamp)}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Load More */}
        {!loading && feedItems.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={fetchFeed}
              className="px-6 py-3 rounded-lg border-2 font-medium transition-all hover:scale-105 border-[#E76F51] text-[#E76F51]"
            >
              Load More Posts
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && feedItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts yet</h3>
            <p className="text-gray-600 mb-4">Be the first to share a tip or complete a gig!</p>
            <button
              onClick={fetchFeed}
              className="px-4 py-2 rounded-lg text-white font-medium bg-[#E76F51]"
            >
              Refresh Feed
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;