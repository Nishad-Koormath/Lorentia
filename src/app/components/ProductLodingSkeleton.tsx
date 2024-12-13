import React from 'react';
import "./product_skeleton_styles.css"

const ProductListSkeleton = () => {
  return (
    <>
      <div className="text-center mb-4">
        <h2>Loading Products...</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm border-light">
              <div className="skeleton skeleton-img"></div>
              <div className="card-body">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-price"></div>
                <div className="skeleton skeleton-button"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListSkeleton;
