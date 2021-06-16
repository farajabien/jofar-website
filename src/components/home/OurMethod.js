import { useState } from 'react'

import { Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import blockchain from '../../images/blockchain.png'
import { methodObj } from '../../resources/methodObj'

import {
	Gear,
	Search,
	PencilSquare,
	CodeSlash,
	QuestionDiamond,
	Tools,
} from 'react-bootstrap-icons'

function OurMethod() {
	const [clicked, setClicked] = useState(false)

	const handleClick = (e) => {
		clicked ? setClicked(false) : setClicked(true)
	}

	return (
		<section className='bg-primary text-light py-5 '>
			<Container>
				<Row className=' align-items-center'>
					<Col sm={12} md={4} lg={4}>
						<h1 className='text-center  text-md-start'>
							<Gear className='me-3' />
							Our Method
						</h1>

						<p className='text-center text-md-start'>
							With many years of experience, the JSL process is flexible,
							time-tested, and able to deliver on all kinds of application
							builds.
						</p>

						<div className='planwithusBtn text-center'>
							<button type='submit' className='btn btn-outline-light mx-2 px-3'>
								Plan With Us
							</button>
						</div>
					</Col>
					<Col sm={12} md={8} lg={8}>
						<Accordion
							defaultActiveKey='0'
							className='ms-0 ps-0 ms-md-5 ps-md-5'>
							{methodObj.map((step, index) => (
								<div key={index}>
									<Accordion.Toggle
										as={Card.Header}
										eventKey={`${index}`}
										value={index}
										className='my-4 accordion-body'
										onClick={handleClick}>
										{index === 0 ? (
											<Search size={25} />
										) : index === 1 ? (
											<PencilSquare size={25} />
										) : index === 2 ? (
											<CodeSlash size={25} />
										) : index === 3 ? (
											<QuestionDiamond size={25} />
										) : index === 4 ? (
											<Tools size={25} />
										) : null}
										<span className='ourmethod-header-text ms-2'>
											{step.title}
										</span>
										{/* 	<span className='ms-auto'>
											{clicked ? <CaretRightFill /> : <CaretDownFill />}
										</span> */}
									</Accordion.Toggle>
									<Accordion.Collapse eventKey={`${index}`} className='my-5'>
										<Card.Body>
											<p className='lead'>{step.descTitle}</p>
											<p>{step.descContent}</p>
											<p>{step.descContent2}</p>
										</Card.Body>
									</Accordion.Collapse>
								</div>
							))}
						</Accordion>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default OurMethod
