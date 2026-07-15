# 🚀 JobFlow - Freelance Marketplace

A modern full-stack freelance marketplace where clients can post jobs and freelancers can browse opportunities, place bids, and manage their work. JobFlow provides a clean, responsive, and user-friendly platform built with the MERN stack.

---

## 🌐 Live Website

👉 Live Site: https://your-live-site.vercel.app

---

## 🎯 Project Overview

JobFlow is designed to bridge the gap between clients and freelancers by providing an intuitive platform for posting jobs, submitting bids, and managing freelance projects.

The application includes secure authentication, role-based foundations, a responsive dashboard, search & filtering, and a complete CRUD workflow for job management.

---

# ✨ Features

## 🔐 Authentication

- Secure authentication using Better Auth
- Email & Password Sign In
- User Registration
- Protected Routes
- Persistent Login Session
- Demo Login Button (Auto-fill Credentials)

---

## 💼 Job Management

- Post a New Job
- Browse All Jobs
- Featured Jobs on Homepage
- View Job Details
- Update Existing Jobs
- Delete Jobs
- My Jobs Dashboard
- Responsive Job Cards

---

## 💰 Bidding System

- Place Bid on Jobs
- Prevent users from bidding on their own jobs
- View My Bids
- Bid Status (Pending)
- Cover Letter Submission

---

## 🔎 Search & Filtering

- Search jobs by title
- Filter jobs by category
- Filter jobs by minimum budget
- Dynamic filtering

---

## 👤 User Dashboard

- Dashboard Homepage
- Profile Page
- My Jobs
- My Bids
- Add Job
- Edit Job
- Delete Job

---

## 🎨 User Experience

- Fully Responsive Design
- Modern UI
- Loading States
- Form Validation
- Error Handling
- Toast Notifications
- Clean Navigation
- Functional Footer
- About Page
- Contact Page

---

# 🛠 Tech Stack

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- Axios
- Better Auth
- React Icons

---

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Better Auth
- CORS

---

## Database

- MongoDB Atlas

---

## Deployment

- Vercel (Frontend)
- Render / Railway / VPS (Backend)

---

# 📁 Project Structure

```
src
│
├── app
├── components
├── hooks
├── lib
├── schemas
├── services
├── types
└── utils
```

---

# 📱 Main Pages

- Home
- All Jobs
- Job Details
- Login
- Register
- About
- Contact

### Dashboard

- Dashboard Home
- Profile
- Add Job
- My Jobs
- My Bids

---

# 🔒 Protected Routes

- Dashboard
- Add Job
- My Jobs
- My Bids
- Profile

Only authenticated users can access these pages.

---

# 🔍 Search & Filter

Users can:

- Search jobs by title
- Filter by category
- Filter by minimum budget

---

# 📦 CRUD Operations

## Jobs

- ✅ Create
- ✅ Read
- ✅ Update
- ✅ Delete

## Bids

- ✅ Create
- ✅ Read

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/rintia/jobflow-client-ts.git
```

Move into the project

```bash
cd jobflow-client-ts
```

Install dependencies

```bash
npm install
```

Create a `.env.local`

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_BETTER_AUTH_URL=
```

Run the development server

```bash
npm run dev
```

---

# 🖥 Backend Installation

```bash
git clone https://github.com/rintia/jobflow-server-ts.git
```

```bash
cd jobflow-server-ts
```

```bash
npm install
```

Create `.env`

```env
PORT=
MONGODB_URI=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

Run

```bash
npm run dev
```

---

# 🧪 Demo Account

Email:

```
rachel@green.com
```

Password:

```
123456Aa
```

You can also use the **Demo Login** button to automatically fill the credentials.

---

# 🚀 Future Improvements

The project has been designed with scalability in mind. Future updates may include:

- 👥 Separate Client & Freelancer registration
- 👑 Full Admin Dashboard
- 📩 Client Received Bids page
- ✅ Accept / Reject Bid functionality
- ⭐ Ratings & Reviews
- 💬 Real-time Chat System
- 🔔 Notifications
- ❤️ Save Favorite Jobs
- 📂 Resume Upload
- 💳 Payment Gateway Integration
- 📈 Admin Analytics Dashboard
- 📧 Email Notifications
- 🌙 Dark Mode
- 📱 Progressive Web App (PWA)
- 🌍 Multi-language Support

---

# 💡 Challenges Solved

- Better Auth Integration
- Protected Dashboard Routes
- Session Management
- CRUD Operations
- MongoDB Integration
- Form Validation using Zod
- Dynamic Search & Filtering
- Responsive Dashboard Layout

---

# 📄 License

This project is created for educational purposes.

---

# 👨‍💻 Author

Developed with ❤️ by **Rintia Islam**

GitHub: https://github.com/rintia

LinkedIn: *(Add your LinkedIn profile here)*

---