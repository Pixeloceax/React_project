import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='flex justify-center mt-20'>
                <h1 className='font-bold text-4xl'>Contact</h1>
            </div>
            <div className='flex justify-center mt-20'>
                <h2 className='font-bold text-xl'>Boulangerie XXX</h2>
            </div>
            <div className='flex justify-center mt-20'>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-20'>
                    <div>
                        <p><span className='font-semibold'>Adresse:</span> 1 rue XXX</p>
                        <p><span className='font-semibold'>Code postal:</span> 00000</p>
                        <p><span className='font-semibold'>Email:</span> exemple@gmail.com</p>
                        <p><span className='font-semibold'>Telephone:</span> 00 00 00 00 00</p>
                    </div>
                    <div>
                        <p><span className='font-semibold'>Adresse:</span> 2 rue XXX</p>
                        <p><span className='font-semibold'>Code postal:</span> 00000</p>
                        <p><span className='font-semibold'>Email:</span> exemple@gmail.com</p>
                        <p><span className='font-semibold'>Telephone:</span> 00 00 00 00 00</p>
                    </div>
                    <div>
                        <p><span className='font-semibold'>Adresse:</span> 3 rue XXX</p>
                        <p><span className='font-semibold'>Code postal:</span> 00000</p>
                        <p><span className='font-semibold'>Email:</span> exemple@gmail.com</p>
                        <p><span className='font-semibold'>Telephone:</span> 00 00 00 00 00</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='font-bold text-xl mt-20 text-center'>
                    Pour nous contacter, veuillez remplir le formulaire ci-dessous.

                </div>
            </div>
            <div className='flex justify-center my-20'>
                <div class="block p-6 w-[30rem]">
                    <form>
                        <div class="form-group mb-6">
                            <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
                                placeholder="Name" />
                        </div>
                        <div class="form-group mb-6">
                            <input type="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
                                placeholder="Email address" />
                        </div>
                        <div class="form-group mb-6">
                            <textarea
                                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea13"
                                rows="3"
                                placeholder="Message"
                            ></textarea>
                        </div>
                        <button type="submit" class=" w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;