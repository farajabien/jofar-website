import { Link } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import { Facebook, Twitter, Linkedin, Instagram } from 'react-bootstrap-icons'

let date = new Date().getFullYear()

function Footer() {
	return (
		<footer className='page-footer font-small blue py-4'>
			<Container className='footer-copyright text-center py-3'>
				<div className='mb-3'>
					<h4 className='mb-2'>Follow Us On Social Media</h4>
					<a
						target='_blank'
						href='https://www.facebook.com/jofarsystems'
						style={{ textDecoration: 'none', color: '#3b5998' }}
						variant='dark'
						rel='noreferrer'>
						<Facebook size={25} />
					</a>
					<a
						target='_blank'
						href='https://twitter.com/Jofar_Systems'
						style={{ textDecoration: 'none', color: ' #00acee' }}
						className='ms-3'
						rel='noreferrer'>
						<Twitter size={25} />
					</a>
					<a
						target='_blank'
						href='https://www.linkedin.com/company/jofar-systems-limited/'
						style={{ textDecoration: 'none', color: '#0e76a8 ' }}
						className='ms-3'
						rel='noreferrer'>
						<Linkedin size={25} />
					</a>
					<a
						target='_blank'
						href='https://www.instagram.com'
						style={{ textDecoration: 'none' }}
						className='ms-3 '
						rel='noreferrer'>
						<Instagram size={25} className='instagram' />
					</a>
				</div>
				<div>
					© {date} Copyright : &nbsp;
					<Link to='/' style={{ textDecoration: 'none' }}>
						Jofar Systems Ltd.
					</Link>
					<span>&nbsp;All rights reserved</span>
				</div>
			</Container>
		</footer>
	)
}

export default Footer
