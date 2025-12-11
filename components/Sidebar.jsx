import React from 'react';
import Link from "next/link";

const Sidebar = () => {
    return (
        <ul className="menu bg-base-200 rounded-box w-56">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <a>Contact</a>
            </li>
        </ul>
    );
};

export default Sidebar;
