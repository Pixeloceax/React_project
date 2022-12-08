import React from 'react';

/* import images */
import logo_preview from "../assets/images/logo_preview.png";

/* import Nav items */
import { Navitems } from './Navitems';

/* import Link */
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-zinc-500 text-white p-5 grid md:grid-cols-3 grid-cols-1 gap-5 w-full bottom-0 left-0'>
            {/* // * logo */}
            <img src={logo_preview} alt='logo' className='w-20 h-20 justify-self-center self-center' />

            {/* // * info boulangerie */}
            <div className='flex flex-col ml-5 md:text-left text-center'>
                <h1 className='text-2xl'>Boulangerie XXX</h1>
                <p>Adresse</p>
                <p>Code postal - Ville</p>
                <p>Téléphone</p>
                <p>Mail</p>
            </div>

            {/* // * Lists pages */}
            <div className='flex flex-col ml-5 text-center'>
                {Navitems.map((item, index) => {
                    return (
                        <p key={index}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
