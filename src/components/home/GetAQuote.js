import { Container, Form } from 'react-bootstrap'
function GetAQuote() {
	return (
		<section className='bg-primary text-light p-5'>
			<Container>
				<div className='d-md-flex justify-content-btween align-items-center text-center text-sm-start'>
					<h3 className='mb-3 mb-md-0 ms-lg-5 ps-lg-5'>
						Get A Quote For Your Next Project
					</h3>
					<Form className='d-sm-flex justify-content-btween align-items-center text-center text-sm-start'>
						<Form.Group
							controlId='formBasicPhone'
							className='mx-2 mx-md-5 my-2'>
							<Form.Control type='phone' placeholder='Phone Number' />
						</Form.Group>

						<button
							type='submit'
							className='btn btn-outline-light mx-2 px-3 lead quote-btn'>
							Request A Call
						</button>
					</Form>
				</div>
			</Container>
		</section>
	)
}

export default GetAQuote
