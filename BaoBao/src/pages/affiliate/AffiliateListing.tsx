import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../dataTable/DataTable"
import "./affiliateListing.scss"

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
    },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      width: 150,
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 150,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'referralCode',
      headerName: 'Referral Code',
      width: 150,
    }
];

// Sample rows with the required fields
const rows = [
    { id: 1, name: 'Jon Snow', phoneNumber: '1234567890', username: 'jonsnow', email: 'jon@example.com', referralCode: 'ABC123', amount: 100 },
    { id: 2, name: 'Cersei Lannister', phoneNumber: '0987654321', username: 'cersei', email: 'cersei@example.com', referralCode: 'XYZ456', amount: 200 },
    { id: 3, name: 'Jaime Lannister', phoneNumber: '5678901234', username: 'jaime', email: 'jaime@example.com', referralCode: 'DEF789', amount: 150 },
    { id: 4, name: 'Arya Stark', phoneNumber: '2345678901', username: 'arya', email: 'arya@example.com', referralCode: 'GHI012', amount: 250 },
    { id: 5, name: 'Daenerys Targaryen', phoneNumber: '3456789012', username: 'daenerys', email: 'daenerys@example.com', referralCode: 'JKL345', amount: 300 },
    { id: 6, name: 'Melisandre', phoneNumber: '4567890123', username: 'melisandre', email: 'melisandre@example.com', referralCode: 'MNO678', amount: 400 },
    { id: 7, name: 'Ferrara Clifford', phoneNumber: '5678901234', username: 'ferrara', email: 'ferrara@example.com', referralCode: 'PQR901', amount: 500 },
    { id: 8, name: 'Rossini Frances', phoneNumber: '6789012345', username: 'rossini', email: 'rossini@example.com', referralCode: 'STU234', amount: 600 },
    { id: 9, name: 'Harvey Roxie', phoneNumber: '7890123456', username: 'harvey', email: 'harvey@example.com', referralCode: 'VWX567', amount: 700 },
];


const AffiliateListing = () => {
    return (
        <div className="users">
            <div className="info">
                <h1>Affiliate Listing</h1>
                <button>Add New Member</button>
            </div>
            <div className="data-table-container">
                <DataTable slug="users" columns={columns} rows={rows} />
            </div>
        </div>
    );
}

export default AffiliateListing