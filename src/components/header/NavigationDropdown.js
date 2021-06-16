import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function NavigationDropdown({ title, items }) {
	return (
		<NavDropdown title={title} id='basic-nav-dropdown' className='lead '>
			{items.map((item, index) => (
				<div key={index}>
					<LinkContainer to={`/${title.toLowerCase()}/${item.linkto}`}>
						<NavDropdown.Item className='px-3 py-2'>
							{item.name}
						</NavDropdown.Item>
					</LinkContainer>
				</div>
			))}
		</NavDropdown>
	)
}

export default NavigationDropdown
