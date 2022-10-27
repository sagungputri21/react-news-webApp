import { Link } from "react-router-dom";
import Search from "./Search";
import './style/Navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
    return (
      <header id= "header" >
        <div >
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto gap-3">
                <Link to="/">Home</Link>
                <Link to='/covid'>Covid-19</Link> 
                <Link to='/programming'>Programming</Link>
                <Link to='/search'>Search Page</Link>
              </Nav>
              <Search />
            </Container>
          </Navbar>
        </div>
      </header>
    )
  };
  
  export default NavbarComponent;