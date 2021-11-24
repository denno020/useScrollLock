import React from "react";

const ProductCard = (props) => {
  const { product, onQuickView } = props;
  const { name, price, image } = product;

  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img className="product-card__image" src={image} alt={name} />
      </div>
      <div className="product-card__name">
        {name}
      </div>
      <div className="product-card__price">${price}</div>
      <div className="product-card__configurations">
        <div className="product-card__configuration configuration--red" />
        <div className="product-card__configuration configuration--white" />
        <div className="product-card__configuration configuration--blue" />
        <div className="product-card__configuration configuration--green" />
        <div className="product-card__configuration configuration--yellow" />
      </div>
      <div className="product-card__configurations">
        <div className="product-card__configuration">S</div>
        <div className="product-card__configuration">M</div>
        <div className="product-card__configuration">L</div>
        <div className="product-card__configuration">XL</div>
      </div>
      <div className="product-card__actions">
        <button className="product-card__action product-card__action--add">Add to Cart</button>
        <button onClick={onQuickView} className="product-card__action product-card__action--qv">&#128269;</button>
      </div>
    </div>
  );
};

export default ProductCard;
