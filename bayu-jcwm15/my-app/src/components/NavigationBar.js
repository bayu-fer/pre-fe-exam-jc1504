import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
  import {Link  } from 'react-router-dom'

class NavigationBar extends Component {
    state = { 
        isOpen: false
     }
    tooggle = () =>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
    render() { 
        return (  <div>
            <Navbar color="primary" light expand="md">
              <NavbarBrand href="/">Remed FrontEnd</NavbarBrand>
              <NavbarToggler onClick={this.tooggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                   <Link to='/latihan1'> <NavLink>Soal 1</NavLink></Link>
                  </NavItem>
                  <NavItem>
                     <Link to='/petunjuk'> <NavLink>Petunjuk</NavLink></Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>);
    }
}
 
export default NavigationBar;