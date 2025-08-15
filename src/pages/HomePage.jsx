import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobListing from '../components/JobListing';
import ViewAllJob from '../components/ViewAllJob';

const HomePage = () => {
	return (
		<>
			<Hero />
			<HomeCard />
			<JobListing isHome={true} />
			<ViewAllJob />
		</>
	);
};

export default HomePage;
