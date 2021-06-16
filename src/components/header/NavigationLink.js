import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
function NavigationLink({ name }) {
	return (
		<LinkContainer to={`/${name}`}>
			<Nav.Link className='lead mx-lg-2'>{name}</Nav.Link>
		</LinkContainer>
	)
}

export default NavigationLink
