
import Qrcode from "../../components/qrcode/Qrcode"
import UserProfile from "../../components/userProfile/UserProfile"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <div className="box box1">
                <Qrcode/>
            </div>
            <div className="box box2">
                <UserProfile profilePicture={""} userName={"JohnDoe2327"} userRank={"Member"} walletBalance={0} gainBonus={0}/>
            </div>
            <div className="box box3">
                <div>E-WALLET</div>
            </div>
            <div className="box box4">
                <div>CASH WALLET</div>
            </div>
            <div className="box box5">
                <div>BONUS WALLET</div>
            </div>



        </div>
    )
}

export default Home