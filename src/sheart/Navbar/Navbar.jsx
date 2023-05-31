
import React, { useContext, useState } from 'react'
import { Avatar, Button, Navbar } from 'flowbite-react'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

function Navbars() {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut().then(() => { }).catch((error) => { });
    }
    return (
        <Navbar
            fluid={true}
            rounded={true}
            className='py-6 items-center sticky top-0 z-10'
        >
            <Navbar.Brand>
                <span className="self-center whitespace-nowrap text-2xl lg:text-3xl font-bold">
                    INDIAN FOODIE
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    !user ?
                        <Link className='mr-2 lg:mr-0' to="/login">
                            <Button color="dark">
                                Login
                            </Button>
                        </Link> :
                        <>
                            <Avatar alt="User settings" className='hidden lg:block' title={user?.displayName ? user.displayName : "user name"} img={user?.photoURL} rounded={true} />
                            <Button onClick={handleLogOut} color="dark" className='ml-2 hidden lg:block'>Log Out</Button>
                        </>
                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {
                    user && <div className='flex flex-col items-center gap-2 mb-2 lg:mb-0'>
                    <Avatar alt="User settings" className='block lg:hidden' title={user?.displayName ? user.displayName : "user name"} img={user?.photoURL} rounded={true} />
                    <Button onClick={handleLogOut} color="dark" className='ml-2 block lg:hidden'>Log Out</Button>
                </div>
                }
                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ''} to='blogs'>Blogs</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbars
