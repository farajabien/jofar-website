import { Navbar, Container, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import jofarlogo from '../../images/jofarlogo.png'
import NavLinkList from './NavLinkList'

function MainNavigation() {
	return (
		<Navbar
			bg='light'
			variant='light'
			expand='lg'
			className='p-0 m-0 fixed-top'>
			<Container>
				<LinkContainer to='/'>
					<Image
						src={jofarlogo}
						alt='jofarlogo'
						fluid
						className='m-0 p-0 jofarlogo'
					/>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<NavLinkList />
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MainNavigation
