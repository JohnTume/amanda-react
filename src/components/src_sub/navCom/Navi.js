import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'
// import 'navistyle.css'
export default class Navi extends Component{
    render() {
        console.log("Hey");
        return(
            <Navbar bg="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/">HOME</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/commentOverview">CONNECT</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Inspire">INSPIRE</NavLink>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/AboutUs">ABOUT US</NavLink>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}

