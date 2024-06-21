import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="" className="company-logo" />
            </div>
            <div className="icons">
                <img src="/search.svg" alt="" className="icon" />
                <div className="notifications">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src="/noavatar.png" alt="" />
                    <span>John Doe</span>
                </div>
                <img src="/settings.svg" alt="" className="icon" />
            </div>
        </div>
    )
}

export default Navbar