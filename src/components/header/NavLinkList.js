import { Nav } from 'react-bootstrap'

import NavigationLink from './NavigationLink'
import NavigationDropdown from './NavigationDropdown'
import { brands } from '../../resources/brands'
import { solutions } from '../../resources/solutions'

function NavLinkList() {
	return (
		<Nav className='ms-auto'>
			<NavigationLink name='Home' />
			<NavigationDropdown title='Brands' items={brands} />
			<NavigationDropdown title='Solutions' items={solutions} />
			<NavigationLink name='About' className='ms-auto' />
			<NavigationLink name='Contacts' />
		</Nav>
	)
}

export default NavLinkList
