import React from "react";
import "./product_card_style.css"

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const ProductCard = ({ name, price, description, image }: ProductCardProps) => {
  return (
    <div className="position-relative">
      <div
        className="card position-relative overflow-hidden"
        style={{ width: "18rem" }}
      >
        <img src={image} className="card-img-top" alt={name} />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>${price}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    </div>

    // <Card className="position-relative">
    //   <div className="position-relative overflow-hidden">
    //     <img
    //       src={image}
    //       alt={name}
    //       className="w-100 h-100 object-fit-cover transform transition-transform duration-700"
    //       style={{ transition: 'transform 0.7s', transform: 'scale(1)' }}
    //     />
    //   </div>
    //   <div className="p-4 p-sm-5">
    //     <h3 className="h4 text-white mb-2">{name}</h3>
    //     <p className="text-muted mb-4 small">{description}</p>
    //     <p className="h5 text-white mb-4">{price}</p>
    //     <Button className="btn btn-outline-primary w-100">
    //       Add to Cart
    //     </Button>
    //   </div>
    // </Card>
  );
};

export default ProductCard;
