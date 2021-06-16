import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ServiceCard({ service, index }) {
	return (
		<Col sm={12} md={6} lg={6}>
			<Link
				to={`/solutions/${service.linkto}`}
				style={{ textDecoration: 'none' }}>
				<Card className='mb-4'>
					<Card.Body>
						<Card.Title>{service.name}</Card.Title>
						<Card.Text className='mb-2 text-muted'>
							{service.desc}

							{/*	<span>
				<Link to='/home' style={{ textDecoration: 'none' }}>
					Read More
				</Link>
			</span> */}
						</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	)
}

export default ServiceCard
