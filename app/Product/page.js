'use client'// app/products/page.js
import React from 'react';
import Link from 'next/link';
import products from '@/data/product'; // Adjust the import path as needed

const ProductsPage = () => {
  return (
    <>
    <div className="container mx-auto py-32 ">
      <h1 className="text-3xl font-bold mb-52 justify-center text-center bg ">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md">
            <Link href={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg cursor-pointer"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  <strong>Length:</strong> {product.length}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Height:</strong> {product.height}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Sold:</strong> {product.sold}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductsPage;