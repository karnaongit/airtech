// app/products/[id]/page.js
'use client '
import React from 'react';
//import ProductsPage from '../page'; // Adjust the import path as needed

const ProductDetailPage = ({ params }) => {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">{product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-gray-600 text-lg">{product.description}</p>
          <div className="mt-6">
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
    </div>
  );
};

export default ProductDetailPage;