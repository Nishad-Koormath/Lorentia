import { products } from '@/data/product';
import React from 'react'
import ProductCard from '../components/ProductCard';

const collections = () => {
    const prod = products
    return (
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h1 className="display-4 text-center mt-5 mb-4 text-warning fw-bolder">
            Collection
          </h1>
          <p className="text-center mb-4 mx-auto px-4">
            Discover our most coveted fragrances, each bottle a masterpiece of
            olfactory artistry
          </p>
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2  row-cols-lg-4 g-4">
              {prod.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}

export default collections