import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainNavigation from './components/header/MainNavigation'
import Footer from './components/footer/Footer'
import HomeScreen from './screens/HomeScreen'

function App() {
	return (
		<Router>
			<MainNavigation />
			<main className='mt-5'>
				<Route path='/' component={HomeScreen} exact />
				<Route path='/home' component={HomeScreen} />
			</main>
			<Footer />
		</Router>
	)
}

export default App
