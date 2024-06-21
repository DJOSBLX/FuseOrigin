import { useState } from "react";
import DataTable from "../../dataTable/DataTable";
import OrderConfirmation from "../../components/confirmationPopup/orderConfirmation";
import SubscriptionPack from "../../components/subscriptionPack/SubscriptionPack";
import "./affiliateSubscriptions.scss";

const columns = [
  { field: "number", headerName: "Number", width: 90 },
  { field: "date", headerName: "Date", width: 150 },
  { field: "username", headerName: "Username", width: 150 },
  { field: "orderId", headerName: "Order ID", width: 150 },
  { field: "amount", headerName: "Amount", width: 150 },
  { field: "status", headerName: "Status", width: 150 },
];

const rows = [
  { id: 1, number: 1, date: "2024-01-01", username: "user1", orderId: "ORD001", amount: "$100", status: "Completed" },
  { id: 2, number: 2, date: "2024-02-01", username: "user2", orderId: "ORD002", amount: "$150", status: "Pending" },
  // Add more rows as needed
];

const AffiliateSubscriptions = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ title: "", imgSrc: "", price: "" });

  const handleOrderClick = (title, imgSrc, price) => {
    setSelectedProduct({ title, imgSrc, price });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="affiliateSubscriptions">
      <h1 className="pageTitle">Affiliate Subscriptions</h1>
      <div className="subscriptionPackContainer">

        <SubscriptionPack 
          title="Subscription Pack 1" 
          imgSrc="product.svg" 
          price="$699" 
          onOrderClick={() => handleOrderClick("Subscription Pack 1", "product.svg", "$699")} 
        />
        <SubscriptionPack 
          title="Subscription Pack 2" 
          imgSrc="product.svg" 
          price="$499" 
          onOrderClick={() => handleOrderClick("Subscription Pack 2", "product.svg", "$499")} 
        />
        <SubscriptionPack 
          title="Subscription Pack 3" 
          imgSrc="product.svg" 
          price="$299" 
          onOrderClick={() => handleOrderClick("Subscription Pack 3", "product.svg", "$299")} 
        />
        <SubscriptionPack 
          title="Subscription Pack 4" 
          imgSrc="product.svg" 
          price="$299" 
          onOrderClick={() => handleOrderClick("Subscription Pack 4", "product.svg", "$299")} 
        />

      </div>
      {showPopup && <OrderConfirmation 
        onClose={handleClosePopup} 
        imgSrc={selectedProduct.imgSrc} 
        price={selectedProduct.price}
        title={selectedProduct.title}
      />}
      <div className="purchaseHistory">
        <h2>Purchase History</h2>
        <DataTable columns={columns} rows={rows} slug="affiliateSubscriptions" />
      </div>
    </div>
  );
};

export default AffiliateSubscriptions;

