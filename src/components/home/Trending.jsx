import Image from 'next/image';
import img1 from '../../../public/pexels-chuck-3587477.jpg'
import img2 from '../../../public/pexels-karolina-grabowska-4476138.jpg'
import { FaRegPlayCircle } from 'react-icons/fa';

const Trending = () => {


    return (
        <div>
            <span className="relative flex justify-center mt-20 mb-10 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75 scale-75"
                ></div>

                <span className="relative z-10 px-6 text-2xl text-[#0077b6] font-montserrat">Trending</span>
            </span>

            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">

                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
                                </div>
                            </a>
                        </div>



                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by engin akyurt" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Women</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Summer Season</span>
                                </div>
                            </a>
                        </div>



                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Men</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Streetwear</span>
                                </div>
                            </a>
                        </div>



                        <div>
                            <a href="#" className="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                    <span className="text-gray-500">Women</span>
                                    <span className="text-lg font-bold text-gray-800 lg:text-xl">Sale</span>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;