"use client";
import React, {useState} from 'react';
import Tab from "daisyui/components/tab";

const Product = () => {

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


    const onDeleteFunc = (product) => {
        handleDelete(product);
    }



    const onChangesData = (updatedProduct) => {
        let newProducts = [];

        for(let i = 0; i < products.length; i++) {
            let product = products[i];

            if (product.id === updatedProduct.id) {
                newProducts.push(updatedProduct);
            } else {
                newProducts.push(product);
            }
        }
        setProducts(newProducts);
    }


    return (
        <div>
            <h1 className="text-2xl font-semibold mb-4">Products Page</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">

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
                        <TableRow
                            key={index}
                            product={product}
                            index={index}
                            onChangesData={onChangesData}
                            onDelete={onDeleteFunc}
                        >

                        </TableRow>
                    ))}
                    </tbody>
                </table>
            </div>


        </div>
    );
};







const TableRow = ({product, index, onDelete, onChangesData}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [productName, setProductName] = useState(product.name);
    const [productStatus, setProductStatus] = useState(product.status);
    const [productPrice, setProductPrice] = useState(product.price);



    const handleEditData = () => {
        product.name = productName;
        onChangesData(product);
        setShowEditModal(false);
    }

    return (
        <>
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
                    <button onClick={() => setShowEditModal(true)} className="btn btn-sm btn-outline btn-primary mr-2">
                        Edit
                    </button>
                    <button onClick={() => onDelete(product)} className="btn btn-sm btn-outline btn-error">
                        Delete
                    </button>
                </td>
            </tr>

            {/*Edit Modal*/}
            <dialog id={'modal_'+index} open={showEditModal}  className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Product Name</legend>
                            <input onChange={(e) => setProductName(e.target.value)} type="text" value={productName} className="input" placeholder="Type here" />
                        </fieldset>
                    </div>
                    <div className="modal-action">
                        <div>
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={handleEditData} className="btn btn-primary">Save</button>
                            <button onClick={() => setShowEditModal(false)} className="btn">Close</button>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default Product;
