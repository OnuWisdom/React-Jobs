import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobSinglePage from './pages/JobSinglePage';
import AddJobPage from './pages/AddJobPage';
import jobLoader from './components/JobLoader';
import EditJobPage from './pages/editJobPage';

function App() {
	// Add New Job
	const addJob = async (newJob) => {
		const res = await fetch('/api/jobs', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(newJob),
		});
		if (!res.ok) throw new Error('Failed to add job');

		return;
	};

	// Delete Job
	const deleteJob = async (id) => {
		const res = await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		});
		if (!res.ok) throw new Error('Failed to delete job');

		return;
	};

	// Update job
	const updateJob = async (job) => {
		const res = await fetch(`/api/jobs/${job.id}`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(job),
		});
		if (!res.ok) throw new Error('Failed to add job');

		return;
	};

	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path="/jobs" element={<JobPage />} />
				<Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
				<Route
					path="/jobs/:id"
					element={<JobSinglePage deleteJob={deleteJob} />}
					loader={jobLoader}
				/>
				<Route
					path="/edit-job/:id"
					element={<EditJobPage updateJobSubmit={updateJob} />}
					loader={jobLoader}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
	// (
	// 	<>
	// 		<Navbar />
	// 		<Hero />
	// 		<HomeCard />
	// 		<JobListing />
	// 		<ViewAllJob />
	// 	</>
	// );
}

export default App;
