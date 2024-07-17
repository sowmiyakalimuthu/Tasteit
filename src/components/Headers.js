import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchBar from './SearchBar';

const Headers = () => {
const {carts} = useSelector((state)=>state.allCart);

    return (
        <div className="headerPaddingMob" style={{ paddingTop: "60px"}}>
            {/* desktop view */}
            <div>
            <Navbar className="bg-dark headerMob" style={{ height: "60px", color: "white", position: "fixed", width: "100%", top: 0, zIndex: 10 }} >
                <Container>
                <NavLink to="/" className="text-decoration-none text-light mx-2">
                    <h3 style={{ color: "#E43A19"}} >Tast<i class="fa-solid fa-drumstick-bite"></i>it</h3>
                </NavLink>
                {/* search bar */}
                <div className='desktop'>
                <SearchBar/>
                    <Navbar>
                    <NavLink style={{paddingRight:"10px"}} to="/login">
                    <Button style={{ width:"100px", background: "#E43A19", border: "none" }} variant='outline-light'>Login</Button>
                    </NavLink>
                    <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                    </Navbar>
                    </div>
                </Container>
            </Navbar>
            </div>

            {/* mobile view */}
            <div className='mobile' >
            <Navbar className="bg-dark" style={{ height: "60px", color: "white", position: "fixed", width: "100%", bottom: 0, zIndex: 10 }} >
                <Container>
                <NavLink to="/foodlist" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x'>
                        <i class="fa-solid fa-drumstick-bite"></i>
                        </span>
                    </div>
                    </NavLink>
                <NavLink to="/search" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x'>
                            <i class="fa-solid fa-search"></i>
                        </span>
                    </div>
                    </NavLink>
                <NavLink to="/login" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x'>
                            <i class="fa-solid fa-user"></i>
                        </span>
                    </div>
                    </NavLink>

                <NavLink to="/cart" className="text-decoration-none text-light mx-2">
                    <div id='ex4'>
                        <span className='p1 fa-stack fa-2x has-badge' data-count={carts.length}>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </span>
                    </div>
                    </NavLink>
                </Container>
            </Navbar>
            </div>
        </div>
    )
}

export default Headers