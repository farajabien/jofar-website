import GetAQuote from '../components/home/GetAQuote'
import LandingPage from '../components/home/LandingPage'
import ServicesSection from '../components/home/ServicesSection'
import OurMethod from '../components/home/OurMethod'

function HomeScreen() {
	return (
		<>
			<LandingPage />
			<GetAQuote />
			<ServicesSection />
			<OurMethod />
		</>
	)
}

export default HomeScreen
