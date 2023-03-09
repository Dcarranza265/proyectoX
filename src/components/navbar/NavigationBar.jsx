import './navigationBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import imgSubmenu1 from "../../img/submenu-1.svg";
import imgSubmenu2 from "../../img/submenu-2.svg"

const NavigationBar = () => {
  return (
  <>
    <Navbar expand="md" className='navbar px-5 navbar-dark'>
      {/* <Container > */}
        <Navbar.Brand href="#home">
          <Link to = "/"><img src={require('../../img/logo.png')} alt="logo" height={38} width="82px"/></Link>        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-md-center '>
          <Nav className='d-flex align-items-center'>                        
              <Link to="/nosotros" className='navOptions nunito-semi-bold-white-18px text-center '>Nosotros</Link>            
              <NavDropdown title="Servicios" className='text-center dropList  navCollapse' id="basic-nav-dropdown">  
                              
                <Link to="/marketing" className='d-flex dropItem dropdown-menu-dark'>
                  <span className='dropText'>Marketing</span> 
                  <div className="circleDrop d-flex justify-content-center align-items-center">
                    <img className='dropImg' src={imgSubmenu1} alt="" />
                  </div>                  
                </Link>
                <Link to="/diseño" className='d-flex dropItem dropdown-menu-dark'>
                  <span className='dropText'>Diseño UX/UI</span> 
                  <div className="circleDrop d-flex justify-content-center align-items-center">
                    <img className='dropImg' src={imgSubmenu2} alt="" />
                  </div>                  
                </Link>
                  
              </NavDropdown>              
              <Link to="/contacto"  className='navOptions text-center '>Contacto</Link>      
              <Nav.Link href="https://calendly.com/teamproyectox/conozcamonos-y-hagamos" target={'_blank'} className='navOptions btnNav text-center '>Agenda una cita</Nav.Link>     
              {/* <Button className='btn btnNav'>Agenda una cita</Button>       */}
               
          </Nav>
        </Navbar.Collapse>        
      {/* </Container> */}
    </Navbar>
    <Outlet />
  </>
   
  )
}

export default NavigationBar