TalentKonnect Staging
TalentKonnect is a gamified micro-task marketplace where everyday experts earn cash and raffle credits by sharing quick tips, completing 5–15 min gigs, or inviting friends—fueling a self-sustaining ecosystem of rewards and growth.

🔗 Live Demo
Frontend: https://talentkonnect-staging-seven.vercel.app/

🚀 Features
✅ Frontend (React + Vite + Tailwind CSS)

- Task-based gig dashboard (static mock)
- Post & complete gigs, tips, and referrals (via UI only, no backend)
- Admin clustering and analytics dashboard (with mock data)
- Modern UI components powered by shadcn/ui, lucide-react
- Custom Tailwind theme with utility classes (bg-primary-blue, text-accent-orange)
- Smooth navigation via react-router-dom
- Toast notifications with react-toastify


🧩 Project Structure
project/
├── public/
│   └── logo.png                     
│
├── src/
│   ├── components/
│   │   ├── ui/         
│   │   │   ├── Button.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── BalanceHeader.jsx
│   │   │   ├── LedgerTable.jsx
│   │   │   ├── OnboardingForm.jsx
│   │   │   ├── AdminAnalyticsDashboard.jsx
│   │   │   └── AdminClusteringDashboard.jsx
│   │   │
│   │   ├── modules/
│   │   │   ├── Clustering.jsx
│   │   │   ├── CompleteGig.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Notifications.jsx
│   │   │   ├── Onboarding.jsx
│   │   │   ├── PostGig.jsx
│   │   │   ├── Referral.jsx
│   │   │   └── Wallet.jsx
│   │   │
│   │   └── lib/ 
│   │       ├── api.js
│   │       └── utils.js
│
│   ├── pages/
│   │   ├── AdminDashboard.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
├── package-lock.json
├── .eslintrc.js
├── .gitignore
└── README.md



⚙️ Getting Started
1. Clone the repo
    git clone https://github.com/your-username/talentkonnect-staging.git
    cd talentkonnect-staging

2. Install dependencies
    npm install

3. Start the development server
    npm run dev

The app will be available at http://localhost:5173.

🛠 Stack
- Framework: React 19 + Vite
- Styling: Tailwind CSS (custom config)
- Routing: React Router v7
- Icons/UI: Lucide, shadcn/ui, class-variance-authority
- Notifications: react-toastify
- Mock Data: Static JSON / localStorage

📂 Deployment
Hosted on Vercel
You can update the code and latest changes will reflect live if using a connected GitHub repo with auto-deploy enabled.