import React from 'react';

/* import Nav items */
import { Navitems } from './Navitems';

/* import Link */
import { Link } from 'react-router-dom';

/* imprort fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

/* import img */
import logo_preview from "../assets/images/logo_preview.png";

const Navbar = () => {
    return (
        <>
            <nav className='bg-zinc-500 flex justify-evenly p-5'>
                {/* // * logo */}
                <Link Link to='/' className="">
                    <img src={logo_preview} alt="logo" className='w-32 h-32' />
                </Link>

                {/* // * Lists pages */}
                <ul className='md:flex items-center hidden'>
                    {Navitems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className="m-[3.5vw] text-white text-xl">
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* // ? hamburger phone
                    // ! TO DO:
                    // ! - on click change to <FontAwesomeIcon icon={faBarsStaggered} className='text-white h-16' /> 
                    // ! - list pages appear
                    // ! - styles list pages appear
                 */}
                <div className='flex items-center ml-[35vw] md:hidden'>
                    <FontAwesomeIcon icon={faBars} className='text-white h-10' />
                    <FontAwesomeIcon icon={faBarsStaggered} className='text-white h-10 hidden' />
                </div>
            </nav>
        </>
    );
};

export default Navbar;