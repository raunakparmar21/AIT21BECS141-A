// src/ProductList.js
import React, { useState } from 'react';

const ListProduct = () => {
    const products = {
        AMZ: ['Laptop 1', 'Laptop 2', 'Laptop 3'],
        FLP: ['FLP Product 1', 'FLP Product 2', 'FLP Product 3'],
        SNP: ['SNP Product 1', 'SNP Product 2', 'SNP Product 3'],
        MYN: ['MYN Product 1', 'MYN Product 2', 'MYN Product 3'],
        AZO: ['AZO Product 1', 'AZO Product 2', 'AZO Product 3'],
    };
    const [selectedCompany, setSelectedCompany] = useState('AMZ');
    const [searchQuery, setSearchQuery] = useState('');

    const handleCompanyChange = (event) => {
        setSelectedCompany(event.target.value);
        setSearchQuery('');
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredProducts = products[selectedCompany].filter((product) =>
        product.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="product-list">
            <h1>List of all products</h1>
            <div>
                <label htmlFor="company-select">Select Company: </label>
                <select id="company-select" value={selectedCompany} onChange={handleCompanyChange}>
                   
                    <option value="AMZ">AMZ</option>
                    <option value="FLP">FLP</option>
                    <option value="SNP">SNP</option>
                    <option value="MYN">MYN</option>
                    <option value="AZO">AZO</option>
                </select>
            </div>
            <div>
            <div>
                <label htmlFor="company-select">Select Price for the company: </label>
                <input
                    type="text"
                    placeholder={`0 `}
                    value={searchQuery}
                    onChange={handleSearchChange}
                /> to
                <input
                    type="text"
                    placeholder={``}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />

            </div>
            </div>
            <div>
                <input
                    type="text"
                    placeholder={`Search products in ${selectedCompany}`}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <ul>
                {filteredProducts.map((product, index) => (
                    <li key={index}>{product}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListProduct;
