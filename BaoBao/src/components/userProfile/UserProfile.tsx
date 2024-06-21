import "./userProfile.scss";

interface UserProfileProps {
    profilePicture: string;
    userName: string;
    userRank: string;
    walletBalance: number;
    gainBonus: number;
}

const UserProfile: React.FC<UserProfileProps> = ({ profilePicture, userName, userRank, walletBalance, gainBonus }) => {
    return (
        <div className="user-profile">
            <div className="profile-picture">
                <img src={profilePicture || "/noavatar.png"} alt={`${userName}'s profile`} />
            </div>
            <div className="user-info">
                <h2 className="user-name">{userName}</h2>
                <p className="user-rank">Rank: {userRank}</p>
                <p className="wallet-balance">Wallet Balance: ${walletBalance.toFixed(2)}</p>
                <p className="gain-bonus">Gain Bonus: ${gainBonus.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default UserProfile;