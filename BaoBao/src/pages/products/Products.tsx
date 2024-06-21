
import UserProfile from "../../components/userProfile/UserProfile"
import "./products.scss"

const Products = () => {
    return (
        <div className="products">
            <UserProfile profilePicture={""} userName={""} userRank={""} walletBalance={0} gainBonus={0}/>
        </div>
    )
}

export default Products