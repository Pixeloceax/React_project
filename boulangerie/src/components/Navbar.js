import React from 'react';

/* import Nav items */
import { Navitems } from './Navitems';

/* import Link */
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    {Navitems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.path} className={item.cName}>
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;