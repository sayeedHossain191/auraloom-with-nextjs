import React from 'react';

const Notification = () => {
    return (
        <div>
            <span className="relative flex justify-center mt-20 font-bold">
                <div
                    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
                ></div>

                <span className="relative z-10 bg-white px-6">Notifications</span>
            </span>

            <div className="space-y-5 mt-10 mx-8">
                <div className="relative mx-auto max-w-full rounded-md border border-secondary-50 bg-white p-4 text-sm shadow-lg hover:bg-gray-100 hover:border-red-600 hover:transform: scale-75">
                    <button className="ttop-4 absolute right-4 ml-auto text-secondary-500 hover:text-secondary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        <div className="relative h-10 w-10">
                            <img className="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-green-400 ring ring-white"></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="pr-6 font-medium text-secondary-900">Taylor Swift <span className="ml-2 font-normal text-secondary-500">5 min ago</span></h4>
                            <div className="mt-1 text-secondary-500 hover:underline">Your team has made changes to your company profile since you last logged in.</div>
                            {/* <div className="mt-2 flex space-x-4">
                                <button className="inline-block font-medium leading-loose text-secondary-500 hover:text-secondary-900">Dismiss</button>
                                <button className="inline-block font-medium leading-loose text-primary-600 hover:text-primary-700">View more</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-5 mt-10 mx-8 ">
                <div className="relative mx-auto max-w-full rounded-md border border-secondary-50 bg-white p-4 text-sm shadow-lg hover:bg-gray-100 hover:border-red-600">
                    <button className="ttop-4 absolute right-4 ml-auto text-secondary-500 hover:text-secondary-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        <div className="relative h-10 w-10">
                            <img className="h-full w-full rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1645378999013-95abebf5f3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <span className="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-green-400 ring ring-white"></span>
                        </div>
                        <div className="flex-1">
                            <h4 className="pr-6 font-medium text-secondary-900">Taylor Swift <span className="ml-2 font-normal text-secondary-500">5 min ago</span></h4>
                            <div className="mt-1 text-secondary-500 hover:underline">Your team has made changes to your company profile since you last logged in.</div>
                            {/* <div className="mt-2 flex space-x-4">
                                <button className="inline-block font-medium leading-loose text-secondary-500 hover:text-secondary-900">Dismiss</button>
                                <button className="inline-block font-medium leading-loose text-primary-600 hover:text-primary-700">View more</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Notification;