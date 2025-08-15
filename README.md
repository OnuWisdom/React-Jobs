# React Jobs

A simple job listing application built with React, Vite, TailwindCSS, and json-server for mock API.

## Features

- Browse job listings
- View single job details
- Add new jobs
- Delete jobs
- Responsive UI with TailwindCSS
- Loading spinners and toast notifications
- React Router for navigation

## Tech Stack

- **React** (with hooks)
- **Vite** (development/build tool)
- **TailwindCSS** (styling)
- **React Router DOM** (routing)
- **React Icons** (icons)
- **React Toastify** (notifications)
- **React Spinners** (loading indicators)
- **json-server** (mock REST API)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**

   ```sh
   git clone <your-repo-url>
   cd React-Jobs
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Start the mock API server:**

   ```sh
   npm run server
   ```

   This runs `json-server` on [http://localhost:8000](http://localhost:8000).

4. **Start the development server:**
   ```sh
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Project Structure

```
src/
  components/
    JobCard.jsx
    JobListing.jsx
    Navbar.jsx
    Spinner.jsx
  pages/
    AddJobPage.jsx
    JobSinglePage.jsx
  jobs.json
  App.jsx
  main.jsx
public/
  logo.svg
vite.config.js
package.json
```

### API

- **GET /api/jobs** - List all jobs
- **GET /api/jobs/:id** - Get job by ID
- **POST /api/jobs** - Add a new job
- **PUT /api/jobs/:id** - Update a job
- **DELETE /api/jobs/:id** - Delete a job

## Customization

- Edit `src/jobs.json` to change seed data.
- Update styles in Tailwind config or component classes.

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start json-server API

## License

MIT

---

**Note:**  
Make sure `json-server` is running for API requests to work. The Vite proxy is configured to forward `/api` requests to `localhost:8000
