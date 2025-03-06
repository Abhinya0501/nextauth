Authentication System with NextAuth.js

📌 Project Overview

This is a full-featured authentication system built with Next.js 14 using NextAuth.js for authentication. It supports credentials-based login, as well as social authentication (Google & GitHub). The project is designed with MongoDB (via Prisma) for database management, rate limiting for security, and responsive styling.

🚀 Features

User Authentication (Login, Registration, Logout)

Social Login (Google & GitHub)

Secure Credential Authentication (Email & Password with Prisma + MongoDB)

Session Management using NextAuth.js

Rate Limiting for API protection

Protected Dashboard (Only logged-in users can access it)

User-friendly UI with Tailwind CSS

Unit Testing (for key authentication flows)

Fully Responsive Design

📂 Project Structure

my-auth-project/
│-- .next/               # Next.js build folder
│-- prisma/              # Prisma database schema
│-- public/              # Static assets
│-- src/
│   │-- app/
│   │   │-- api/
│   │   │   │-- auth/[...nextauth]/route.ts   # NextAuth.js configuration
│   │   │   ├── register/route.ts             # User Registration API
│   │   │   ├── login/route.ts                 # User Login API
│   │   │   ├── rate-limit.ts                  # Rate Limiting Middleware
│   │   │-- dashboard/page.tsx                # Protected Dashboard Page
│   │   │-- login/page.tsx                     # Login Page
│   │   │-- register/page.tsx                  # Registration Page
│   │   │-- layout.tsx                         # Main Layout
|   |   |-- page.tsx
│   ├── components/                            # Reusable UI Components
│   ├── lib/                                   # Utility functions
│   ├── styles/                                # Global styles
│-- .env                                      # Environment Variables
│-- package.json                              # Project dependencies
│-- README.md                                 # Documentation
│-- next.config.js                            # Next.js Configuration

🛠️ Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-username/my-auth-project.git
cd my-auth-project

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the root folder and add the following:

NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
DATABASE_URL=mongodb+srv://your-mongo-url
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4️⃣ Set Up Prisma & Database

npx prisma db push

5️⃣ Start the Development Server

npm run dev

Your app will be running at http://localhost:3000

🔑 Authentication Flow

User Registration → User signs up with email and password.

Login with Credentials → User logs in with email & password.

Login with Google/GitHub → Users can authenticate with OAuth providers.

Protected Routes → Only logged-in users can access the dashboard.

Session Handling → Users remain logged in across sessions.

Logout → User can securely log out from the system.

🛡️ Security Features

✅ Rate Limiting → Prevents brute-force attacks on login/registration APIs.✅ Session Expiration → Secure session handling with NextAuth.js.✅ Environment Variables → Secrets are stored securely in .env.✅ Validation & Error Handling → Proper error messages for invalid input.

🧪 Running Tests

This project includes unit tests for authentication flows. Run the tests using:

npm run test

🚀 Deployment

To deploy on Vercel, run:

vercel

Or deploy on Netlify, Railway, or Render with the proper environment variables.

💡 Future Improvements

Add email verification after registration.

Implement password reset functionality.

Enhance role-based access control (RBAC).

🙌 Contributing

Feel free to fork this project, raise issues, and submit PRs!

📜 License

This project is MIT Licensed. You are free to use and modify it.

