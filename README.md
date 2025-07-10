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
├── public/                          # Static assets (images, icons, etc.)
│   └── logo.png                     # Example static file
│
├── src/
│   ├── components/
│   │   ├── ui/                      # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── Logo.jsx
│   │   │   ├── BalanceHeader.jsx
│   │   │   ├── LedgerTable.jsx
│   │   │   ├── OnboardingForm.jsx
│   │   │   ├── AdminAnalyticsDashboard.jsx
│   │   │   └── AdminClusteringDashboard.jsx
│   │   │
│   │   ├── modules/                # Feature-specific components
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
│   │   └── lib/                    # API utilities and helper functions
│   │       ├── api.js
│   │       └── utils.js
│
│   ├── pages/                      # Pages/routes
│   │   ├── AdminDashboard.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│
│   ├── App.jsx                     # App layout and routing setup
│   ├── main.jsx                    # Vite entry point
│   ├── index.css                   # Tailwind CSS and global styles
│
├── index.html                      # Root HTML file (Vite entry)
├── tailwind.config.js              # Tailwind config
├── vite.config.js                  # Vite config
├── package.json
├── package-lock.json
├── .eslintrc.js                    # Linter config
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