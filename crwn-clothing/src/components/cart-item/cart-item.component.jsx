import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageurl, price, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageurl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} × ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
