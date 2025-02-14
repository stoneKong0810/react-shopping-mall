import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import shoesData from './data.js';

function App() {
	const [shoes] = useState(shoesData);

	return (
		<>
			<Navbar bg="light" data-bs-theme="light">
				<Container>
					<Navbar.Brand href="#home">Shoe Shop</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#cart">Cart</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<div className="main-bg"></div>

			<Products shoes={shoes} />
		</>
	);
}

function Products({ shoes }) {
	const renderShoe = (shoe, index) => (
		<div className="col-md-4 text-center" key={index}>
			<img src={shoe.image} alt={shoe.name} />
			<h4>{shoe.title}</h4>
			<p>{shoe.content}</p>
		</div>
	);

	return (
		<div className="container main-content">
			<div className="row">{shoes.map(renderShoe)}</div>
		</div>
	);
}

export default App;
