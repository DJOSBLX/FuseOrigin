import { useState } from 'react';
import './wallet.scss';
import DepositPopup from '../../components/depositPopup/DepositPopup';

const Wallet = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    const handleConfirmPopup = (data: any) => {
        console.log('Deposit confirmed:', data);
        setIsPopupOpen(false);
    };

    return (
        <div className="wallet-page">
            <h1 className="wallet-title">My Wallets</h1>
            <div className="wallet-container">
                <div className="wallet e-wallet">
                    <h2>E-Wallet</h2>
                    <p>Amount: $500</p>
                    <button className="wallet-button" onClick={handleOpenPopup}>Deposit</button>
                    <button className="wallet-button">Transfer</button>
                </div>
                <div className="wallet cash-wallet">
                    <h2>Cash Wallet</h2>
                    <p>Amount: $1000</p>
                    <button className="wallet-button" onClick={handleOpenPopup}>Deposit</button>
                    <button className="wallet-button">Withdrawal</button>
                    <button className="wallet-button">Internal Transfer</button>
                </div>
                <div className="wallet bonus-wallet">
                    <h2>Bonus Wallet</h2>
                    <p>Amount: $200</p>
                    <button className="wallet-button">Internal Transfer</button>
                </div>
            </div>
            <DepositPopup isOpen={isPopupOpen} onClose={handleClosePopup} onConfirm={handleConfirmPopup} />
        </div>
    );
};

export default Wallet;
