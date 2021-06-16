import smilingWoman2 from '../../images/smilingWoman2.png'
import favicon from '../../images/favicon.png'
import borderRedTechnology from '../../images/borderRedTechnology.png'
import { Container, Image } from 'react-bootstrap'

function LandingPage() {
	return (
		<Container>
			<div className='d-sm-flex justify-content-btween text-center text-sm-start'>
				<Image
					src={smilingWoman2}
					alt='smiling woman'
					fluid
					className=' w-50 d-none d-md-block'
				/>
				<div className='text-center landingPageSection'>
					<Image src={favicon} alt='Jofar Logo' fluid className='me-5' />
					<Image src={favicon} alt='Jofar Logo' fluid />

					<h1>Jofar Systems Limited</h1>
					<p className='lead'>
						Jofar Systems Limited is a software company providing software and
						development solutions in various sectores such as government,
						education and business.
					</p>
					<div className='btndiv'>
						<button className='btn btn-lg btn-outline-primary mt-3'>
							Find Out More
						</button>
					</div>
					<Image
						src={borderRedTechnology}
						alt='borderRedTechnology'
						fluid
						style={{ width: '60%' }}
					/>
				</div>
			</div>
		</Container>
	)
}

export default LandingPage
