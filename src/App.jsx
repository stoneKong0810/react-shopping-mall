import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import shoesData from './data/data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/Detail.jsx';
import Main from './pages/Main.jsx';

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

			<Routes>
				<Route path="/" element={<Main shoes={shoes} />} />
				<Route path="/detail" element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;
