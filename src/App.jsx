import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
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

			<div className="container main-content">
				<div className="row">
					<div className="col-md-4 text-center">
						<img src="https://codingapple1.github.io/shop/shoes1.jpg" />
						<h4>Product</h4>
						<p>Description</p>
					</div>
					<div className="col-md-4 text-center">
						<img src="https://codingapple1.github.io/shop/shoes2.jpg" />
						<h4>Product</h4>
						<p>Description</p>
					</div>
					<div className="col-md-4 text-center">
						<img src="https://codingapple1.github.io/shop/shoes3.jpg" />
						<h4>Product</h4>
						<p>Description</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
