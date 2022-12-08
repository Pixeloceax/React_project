import React from 'react';

/* import link */
import { Link } from 'react-router-dom';

const Produits = () => {
    return (
        <>
            {/* // * produits */}
            <div className='flex justify-center mt-32'>
                <h1 className='font-bold text-3xl'>Nos differents Produits</h1>
            </div>

            {/* // ? grid produits
                    // ! TO DO:S
                    // ! - add link
                */}
            <div className='flex justify-center mt-24 mb-14'>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-32 gap-10'>
                    <Link to="/produits/pains" className='bg-bg_pain bg-cover bg-center'>
                        <p className='opacity-0 transition duration-200 hover:opacity-100 w-64 h-64 flex justify-center items-center hover:shadow-xl font-extrabold text-2xl text-white'>Les pains</p>
                    </Link>  
                    <Link to="/gateau" className='bg-bg_gateau bg-cover bg-center'>
                        <p className='opacity-0 transition duration-200 hover:opacity-100 w-64 h-64 flex justify-center items-center hover:shadow-xl font-extrabold text-2xl text-white'>Les Gateaux</p>
                    </Link>
                    <Link to="/viennoiserie" className='bg-bg_viennoiserie bg-cover bg-center'>
                        <p className='opacity-0 transition duration-200 hover:opacity-100 w-64 h-64 flex justify-center items-center hover:shadow-xl font-extrabold text-2xl text-white'>Les Viennoiseries</p>
                    </Link>
                    <Link to="/patisserie" className='bg-bg_patisserie bg-cover bg-center'>
                        <p className='opacity-0 transition duration-200 hover:opacity-100 w-64 h-64 flex justify-center items-center hover:shadow-xl font-extrabold text-2xl text-white'>Les Patisseries</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Produits;