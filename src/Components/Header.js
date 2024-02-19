import './Header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> parent of e666bd4 (Updates)

const Header = () => {
  return (
    <div>
      <Navbar expand="lg" className="navBarStyle">
        <Navbar.Brand>
<<<<<<< HEAD
          <a href="#profile"><img src="/hologram.png" alt="Hologram Projector Icon" className="icon"></img></a>
=======
        {/*Anchor here has rel tag to avoid the possibility of tabnapping on my page.*/}
          <a href="https://github.com/JamTru/JamieTruongWebsite" target="_blank" rel="noopener noreferrer">
            <img src="/hologram.png" alt="Hologram Projector Icon" className="icon"></img>
          </a>
>>>>>>> parent of e666bd4 (Updates)
        </Navbar.Brand>
        <Nav className="me-auto">
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </Nav>
      </Navbar>
    </div>
  );
};
export default Header;
