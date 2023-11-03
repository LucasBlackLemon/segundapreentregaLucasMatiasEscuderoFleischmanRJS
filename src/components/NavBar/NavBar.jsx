import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import pokeball from '../../assets/img/pokeball.png'
import '../NavBar/NavBar.css'
import { Link, NavLink } from 'react-router-dom';



function NavBar() {
    return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary-" id="fondoNavBar">
        <Container>
        
        <Navbar.Brand href="#home">
            <img className="pokeball" src={pokeball}/>
            Tienda Pokémon
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink  className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to="/" >Inicio</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/peluches'  >Peluches</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/remeras' >Remeras</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/buzos'  >Buzos</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/pijamas' >Pijamas</NavLink>
            </Nav>


            <Nav>
                <Nav.Link href="#deets">📞 Contacto</Nav.Link>
            </Nav>


            <Link to='/cart'>
                <CartWidget />
            </Link>
            
        </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export default NavBar;
