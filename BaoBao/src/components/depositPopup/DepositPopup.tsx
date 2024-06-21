import { SetStateAction, useState } from 'react';
import './DepositPopup.scss';

const DepositPopup = ({ isOpen, onClose, onConfirm }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentSlip, setPaymentSlip] = useState(null);

    const handlePaymentMethodChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setPaymentMethod(e.target.value);
    };

    const handleAmountChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setAmount(e.target.value);
    };

    const handlePaymentSlipChange = (e: { target: { files: SetStateAction<null>[]; }; }) => {
        setPaymentSlip(e.target.files[0]);
    };

    const handleConfirm = () => {
        // Perform the necessary actions for confirmation
        onConfirm({ paymentMethod, amount, paymentSlip });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="deposit-popup">
            <div className="popup-content">
                <h2>Deposit</h2>
                <label>
                    Payment Method:
                    <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                        <option value="">Select Method</option>
                        <option value="creditCard">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="bankTransfer">Bank Transfer</option>
                    </select>
                </label>
                <label>
                    Amount:
                    <input type="number" value={amount} onChange={handleAmountChange} />
                </label>
                <label>
                    Upload Payment Slip:
                    <input type="file" onChange={handlePaymentSlipChange} />
                </label>
                <div className="popup-buttons">
                    <button onClick={onClose} className="cancel-button">Cancel</button>
                    <button onClick={handleConfirm} className="confirm-button">Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DepositPopup;
