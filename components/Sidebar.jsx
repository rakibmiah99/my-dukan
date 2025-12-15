import React from 'react';
import Link from "next/link";

const Sidebar = () => {
    const sideBarItems = [
        {name: "Dashboard", path: "/dashboard"},
        {name: "Products", path: "/products"},
        {name: "Buy", path: "/buy"},
        {name: "Sell", path: "/sell"},
        {name: "Incomes", path: "/incomes"},
        {name: "Expenses", path: "/expenses"},
        {name: "Report", path: "/report"},
        {name: "Balance Sheet", path: "/balance-sheet"},
    ]
    return (
        <ul className="menu bg-base-200 rounded-box w-56">
            { sideBarItems.map( (item, itemIndex) => (
                <li key={itemIndex}>
                    <Link href={item.path} className='text-lg'>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default Sidebar;
