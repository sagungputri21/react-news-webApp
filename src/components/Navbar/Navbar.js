import { Link } from "react-router-dom";
import Search from "./Search";
import './style/Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Form } from "react-bootstrap";

const NavbarComponent = () => {
    return (
      <header id= "navbar" >
        <div >
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto gap-3">
                <Link className='text-link' to="/" >Indonesia</Link>
                <Link className='text-link' to='/covid' >Covid-19</Link> 
                <Link className='text-link' to='/programming'>Programming</Link>
              </Nav>
              <Form className="d-flex">
                <Search />
              </Form>
            </Container>
          </Navbar>
        </div>
      </header>
    )
  };
  
  export default NavbarComponent;