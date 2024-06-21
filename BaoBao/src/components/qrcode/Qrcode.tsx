import "./qrcode.scss"

const Qrcode = () => {
    return (
        <div className="qrcode">
            <span className="qr-label">Affiliate Program</span>
            <div className="qrcode-holder">
                <img src="qrcode.png" alt="QR Code" />
            </div>
            <span className="qr-label">Share your referral link!</span>
            <div className="referral-link">
                <input type="text" placeholder="https://member.aplustech.com/register/LATkeIgzut" />
                <button>Link</button>
            </div>
        </div>
    )
}

export default Qrcode
