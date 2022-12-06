import React from 'react';

const Home = () => {
    return (
        <>
            <div>
                {/* // ? img / logo 
                    // ! TO DO:S
                    // ! - add img
                    // ! - add logo
                    // ! - add height 5/6
                */}
                <div className='bg-zinc-300 flex items-center justify-center h-96'>
                    <img src="" alt="logo" className='bg-zinc-200 w-32 h-32' />
                </div>

                {/* // ? Produits phares 
                    // ! TO DO:
                    // ! - 
                */}
                <div>
                    <div className='grid justify-center text-center'>
                        <h1 className='text-2xl font-bold'>Produits Vedettes</h1>
                        <h2 className='mt-10'>laissez-vous tenter !</h2>
                    </div>
                </div>

                {/* // ? Localisation 
                    // ! TO DO:
                    // ! - 
                */}
                <div>
                    retrouver nous
                </div>

                {/* // ? Produits 
                    // ! TO DO:
                    // ! - 
                */}
                <div>
                    Decouvrez tous nos produits
                    Viennoiseries, pain, pâtisseries, gâteaux...
                </div>

            </div>
        </>
    );
};

export default Home