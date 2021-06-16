import { Container, Row, Col } from 'react-bootstrap'
import ServiceCard from './ServiceCard'
import { services } from '../../resources/solutions'

function ServicesSection() {
	return (
		<Container>
			<Row className='w-100 my-5 align-items-center'>
				<Col sm={12} md={12} lg={4}>
					<h1 className='mb-5 text-center text-lg-start lh-base'>
						For 5+ years we have been providing technology solutions to SME's,
						governments and enterprises
					</h1>
				</Col>
				<Col sm={12} md={12} lg={8}>
					<Row>
						{services.map((service, index) => (
							<ServiceCard service={service} key={index} />
						))}
					</Row>
				</Col>
			</Row>
		</Container>
	)
}

export default ServicesSection
