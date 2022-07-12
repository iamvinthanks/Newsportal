import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Homepage(props) {
  return (
    //create navbar with tailwindcss
    <div className="flex flex-col min-h-screen">
        <Head>
            <title>Homepage</title>
        </Head>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span className="font-semibold text-xl tracking-tight">Inertia</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link href="/welcome">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Home
                        </a>
                    </Link>
                    <Link href="/dashboard">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Contact
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
        <main className="flex-1 overflow-y-auto">
            <div className="px-6 py-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900">
                            Welcome to Inertia
                        </h1>
                        <p className="text-gray-600">
                            This is a React project built with Inertia.
                        </p>
                    </div>
                </div>
            </div>
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">John Doe</td>
                    <td className="border px-4 py-2">Budi@gmail.com</td>
                    <td className="border px-4 py-2">081234567890</td>
                </tr>
            </tbody>
        </table>
        </main>
    </div>
    );
}