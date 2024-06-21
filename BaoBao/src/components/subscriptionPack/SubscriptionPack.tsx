import "./subscriptionPack.scss";

type SubscriptionPackProps = {
  title: string;
  imgSrc: string;
  price: string;
  onOrderClick: () => void;
};

const SubscriptionPack = ({ title, imgSrc, price, onOrderClick }: SubscriptionPackProps) => {
  return (
    <div className="subscriptionPack">
      <img src={imgSrc} alt={title} className="productImg" />
      <h2 className="productTitle">{title}</h2>
      <div className="priceAndButton">
        <p className="price">{price}</p>
        <button onClick={onOrderClick}>Order</button>
      </div>
    </div>
  );
};

export default SubscriptionPack;
