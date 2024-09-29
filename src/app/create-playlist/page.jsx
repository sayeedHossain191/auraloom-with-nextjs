import Image from 'next/image';
//import img1 from '../../../public/pexels-dmitry-demidov-515774-3783471.jpg'
import { IoIosAddCircleOutline } from "react-icons/io";

const createPlaylist = () => {
    return (
        <div>
            <span className="relative flex justify-center mt-10 text-xl font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                ></div>
                <span className="relative z-10 bg-white text-2xl px-6 text-[#0077b6] ">Create Playlist</span>
            </span>


            {/* CARD */}
            <div className=" mx-auto dark:text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded scale-75">

                    <Image src="/public/pexels-dmitry-demidov-515774-3783471.jpg" width='1920' height='1080' alt="" className="w-full h-60 sm:h-96" />
                    <div className="p-6 pb- m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-[#0077b6]">
                        <div className="space-y-2 text-center">
                            <a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-white">Let's Start Building Your Playlist</a>
                            <p className="font-semibold">
                                <a rel="noopener noreferrer" href="#" className="text-sm hover:underline text-[#03045e] font-bold">Leroy Jenkins</a>
                            </p>
                        </div>

                        <div className="flex justify-center scale-90">
                            <button type="button" className="px-8 py-3 font-semibold rounded-full bg-slate-200 hover:bg-[#caf0f8] flex items-center gap-2 text-lg">Add here <IoIosAddCircleOutline className='text-xl text-[#0077b6] font-bold' /> </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default createPlaylist;