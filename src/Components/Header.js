import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.png';

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img alt="logo" width={80} src={logo}/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav>
                        <Nav.Link href="#Home">Home</Nav.Link>
                        <Nav.Link href="#About Us">About Us</Nav.Link>
                        <Nav.Link href="#form">Contact</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;