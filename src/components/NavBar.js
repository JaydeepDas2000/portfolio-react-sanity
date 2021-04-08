import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcons } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inflex-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        <h2>Jaydeep</h2>
                    </NavLink>
                    <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
                        <h6>Blog Posts</h6>
                    </NavLink>
                    <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
                        <h6>Project</h6>
                    </NavLink>
                    <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800" activeClassName="text-red-100 bg-red-700">
                        <h6>About Me</h6>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
