import TrxHistoryTable from "../../components/TrxHistoryTable/TrxHistoryTable"
import "./trxHistory.scss"

const TrxHistory = () => {
    return (
        <div className="trxHistory">
            <h1>Transaction History</h1>
            <TrxHistoryTable transactions={[
                { id: 1, dateTime: '2023-06-14 12:34:56', amount: 150.00, transactionId: 'TXN123456', paymentType: 'Credit Card', status: 'Completed' },
                { id: 2, dateTime: '2023-06-13 08:21:14', amount: 200.00, transactionId: 'TXN123457', paymentType: 'PayPal', status: 'Pending' },
                { id: 3, dateTime: '2023-06-12 15:45:30', amount: 75.50, transactionId: 'TXN123458', paymentType: 'Bank Transfer', status: 'Failed' },
                { id: 4, dateTime: '2023-06-11 10:12:00', amount: 320.20, transactionId: 'TXN123459', paymentType: 'Credit Card', status: 'Completed' },
                { id: 5, dateTime: '2023-06-10 16:34:22', amount: 50.00, transactionId: 'TXN123460', paymentType: 'Crypto', status: 'Completed' },
            ]}/>
        </div>
    )
}

export default TrxHistory
