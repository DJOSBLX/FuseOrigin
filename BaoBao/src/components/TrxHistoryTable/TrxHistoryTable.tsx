import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import "./trxHistoryTable.scss";

interface Transaction {
    id: number;
    dateTime: string;
    amount: number;
    transactionId: string;
    paymentType: string;
    status: string;
}

interface TrxHistoryTableProps {
    transactions: Transaction[];
}

const columns: GridColDef[] = [
    { field: 'dateTime', headerName: 'Date & Time', width: 180 },
    { field: 'amount', headerName: 'Amount', width: 120, type: 'number' },
    { field: 'transactionId', headerName: 'Transaction ID', width: 180 },
    { field: 'paymentType', headerName: 'Payment Type', width: 150 },
    { field: 'status', headerName: 'Status', width: 120 },
];

const TrxHistoryTable: React.FC<TrxHistoryTableProps> = ({ transactions }) => {
    return (
        <div className="trx-history-table">
            <DataGrid
                rows={transactions}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}
                autoHeight
            />
        </div>
    );
}

export default TrxHistoryTable;
