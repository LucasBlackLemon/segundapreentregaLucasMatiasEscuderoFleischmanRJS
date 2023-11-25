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
        
        <Navbar.Brand className="title" href="#home">
            <img className="pokeball" src={pokeball}/>
            Tienda Pokémon
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <NavLink  className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to="/" >Inicio</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/Peluches'  >Peluches</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/Remeras' >Remeras</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/Buzos'  >Buzos</NavLink>
                <NavLink className={({isActive})=> isActive ? 'btn btn-outline-danger' : 'btn'} to='/category/Pijamas' >Pijamas</NavLink>
            </Nav>


            <Nav>
                <Nav.Link className="phone" href="#deets">📞 Contacto</Nav.Link>
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
