import React from 'react';

/* import img */
import logo_preview from "../assets/images/logo_preview.png";
import croissant from "../assets/images/croissant.jpg";
import pain_chocolat from "../assets/images/pain_chocolat.jpg";
import pain_tradition from "../assets/images/pain_tradition.jpg";

/* import Link */
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div>
                {/* // * img / logo */}
                <div className='flex items-center justify-center h-[40rem] bg-bg_image bg-no-repeat bg-cover bg-center'>
                    <img src={logo_preview} alt="logo" className='w-32 h-32' />
                </div>

                {/* // ? Produits phares 
                    // ! TO DO:
                    // ! - add Link
                    // ! - add button style
                */}
                <div>
                    <div className='grid justify-center text-center mt-20'>
                        <h1 className='text-2xl font-bold'>Produits Vedettes</h1>
                        <h2 className='font-semibold mt-10'>laissez-vous tenter !</h2>
                    </div>
                    <div className='flex justify-center mt-20'>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mx-18'>
                            <div>
                                <img src={pain_tradition} alt="produit_baguette_tradition" className='w-64 h-64 mb-10' />
                                <h3 className='font-bold float-left'>Baguette Tradition</h3>
                                <h3 className='float-right'>0,90€</h3>
                            </div>
                            <div>
                                <img src={croissant} alt="produit_croissant" className='w-64 h-64 mb-10' />
                                <h3 className='font-bold float-left'>Croissant</h3>
                                <h3 className='float-right'>1,00€</h3>
                            </div>
                            <div>
                                <img src={pain_chocolat} alt="produit_pain_au_chocolat" className='w-64 h-64 mb-10' />
                                <h3 className='font-bold float-left'>Pain au Chocolat</h3>
                                <h3 className='float-right'>1,10€</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center mt-20'>
                        <Link to="/produits" className='font-semibold text-xl border-2 border-black rounded-full px-5 py-2'>Decouvrer plus de produit</Link>
                    </div>
                </div>

                {/* // ? Localisation 
                    // ! TO DO:
                    // ! - add api google
                    // ! - add list adresse
                */}
                <div>
                    <div className='grid justify-center text-center my-20'>
                        <h1 className='text-2xl font-bold'>Retrouvez Nous</h1>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home