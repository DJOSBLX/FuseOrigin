import "./topBox.scss"

const TopBox = () => {
    return (
        <div className="topBox">
            <h1 className="title">User</h1>
            <div className="userInformation">
                <div className="userRanking">
                    <img src="noavatar.png" alt="" />
                    <div className="userRanking">
                        <span className="ranking">Member</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBox