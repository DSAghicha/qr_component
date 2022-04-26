import './App.sass'
import QrCode from './images/qr-code.png'

const App = () => {
    return (
        <div className="main">
            <img src={ QrCode } alt="QR Code" />
            <h3>Improve your front-end skills by building projects</h3>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    )
}

export default App
