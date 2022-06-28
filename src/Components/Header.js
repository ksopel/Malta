import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';
import "../scss/header.scss"

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="styleLink" to="/"><img alt="logo" width={80} src={logo}/> </Link>

                    <Nav>
                        <Link className="styleLink" to="/">Home</Link>
                        <Link className="styleLink" to="/about">About Us</Link>
                        <Link className="styleLink" to="/contact">Contact</Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;