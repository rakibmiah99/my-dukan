"use client";
import React, {useState} from 'react';

const Product = () => {
    const [output, setOutput] = useState(10)


    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Wireless Mouse',
            price: '$25',
            status: 'Active',
            totalSales: 320,
        },
        {
            id: 2,
            name: 'Mechanical Keyboard',
            price: '$85',
            status: 'Active',
            totalSales: 210,
        },
        {
            id: 3,
            name: 'Gaming Headset',
            price: '$60',
            status: 'Inactive',
            totalSales: 120,
        },
        {
            id: 4,
            name: 'USB-C Hub',
            price: '$40',
            status: 'Active',
            totalSales: 540,
        },

    ]);


    const handleDelete = (productItem) => {

        let newProducts = [];

        for(let i = 0; i < products.length; i++){
            let product = products[i];

            if(product.id !== productItem.id){
                newProducts.push(product);
            }

        }

        setProducts(newProducts);
    }


    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Products Page</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">

                <button onClick={() =>  setOutput(30)} className='btn btn-primary'>Click</button>
                <p>output: {output}</p>




                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Total Sales</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <th>{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                    <span
                                        className={`badge ${
                                            product.status === 'Active'
                                                ? 'badge-success'
                                                : 'badge-error'
                                        }`}
                                    >
                                        {product.status}
                                    </span>
                            </td>
                            <td>{product.totalSales}</td>
                            <td>
                                <button className="btn btn-sm btn-outline btn-primary mr-2">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(product)} className="btn btn-sm btn-outline btn-error">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Product;
