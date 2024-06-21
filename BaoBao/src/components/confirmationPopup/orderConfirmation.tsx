import "./orderConfirmation.scss";

const OrderConfirmation = ({ onClose, imgSrc, price, title }) => {
  const handleConfirm = () => {
    // Handle order confirmation logic here
    onClose();
  };

  return (
    <div className="orderConfirmation">
      <div className="popup">
        <h2>Confirm Your Order</h2>
        <div className="productDetails">
          <img src={imgSrc} alt={title} className="productImg" />
          <div className="productInfo">
            <h3>{title}</h3>
            <p className="price">{price}</p>
          </div>
        </div>
        <p>Are you sure you want to place this order?</p>
        <div className="buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

