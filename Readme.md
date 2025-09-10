# Resume Builder

A full-stack web application for creating, customizing, and downloading professional resumes. Built with React (Vite) for the frontend and Node.js/Express for the backend.

## Features
- User authentication (sign up, login)
- Input and edit resume data (personal info, education, experience, skills, etc.)
- Live preview of resume templates
- Download resume as PDF (using html2pdf)
- Responsive and modern UI

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)
- **PDF Generation:** html2pdf

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm (or npm/yarn)
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Sonudhukia143/Resume_builder.git
   cd Resume_builder
   ```

2. **Install dependencies:**
   ```sh
   npm install
   cd client && npm install
   cd ../backend && npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `backend/` directory with your MongoDB URI and JWT secret.

4. **Start the backend server:**
   ```sh
   cd backend
   npm start
   ```

5. **Start the frontend dev server:**
   ```sh
   cd ../client
   npm dev
   ```

6. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
```
Resume_builder/
├── backend/         # Express API, models, routes, services
├── client/          # React frontend (Vite)
└── Readme.md        # Project documentation
```

## Scripts
- `npm dev` (in `client/`): Start frontend dev server
- `npm start` (in `backend/`): Start backend server

## License
MIT

---

**Author:** Sonudhukia143
