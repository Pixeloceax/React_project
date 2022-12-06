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
                {Navitems.map((item) => {
                    return (
                        <li key={item.id} className={item.cName}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    );
                })}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;