import logo from './logo.svg';
import './App.css';



function App() {
    return (
        <div>
            <div>
                <p>COOL NFT</p>
            </div>
            <div>
                <svg width="700" height="700" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100%" height="100%" fill="#FFDAB9" />
                    <rect
                        width="500"
                        height="500"
                        x="100"
                        y="100"
                        stroke="black"
                        strokeWidth="2"
                        fill="#708090"
                    />
                    <rect
                        width="388"
                        height="388"
                        x="154"
                        y="154"
                        stroke="yellow"
                        strokeWiidth="2"
                        fill="#00FFFF"
                    />
                    <rect
                        width="274"
                        height="274"
                        x="213"
                        y="213"
                        stroke="yellow"
                        strokeWidth="2"
                        fill="#F8F8FF"
                    />
                    <rect
                        width="112"
                        height="112"
                        x="294"
                        y="294"
                        stroke="yellow"
                        strokeWidth="2"
                        fill="#DC143C"
                    />
                    <rect width="3" height="3" x="349" y="349" fill="#4B0082" />
                    <text fontSize="10" y="340" x="325">👽 <animateMotion dur="10s" repeatCount="indefinite" path="M 10,10 h 10 m 0,10 h 10" /></text>
                </svg>
            </div>
        </div>
    );
}

export default App;
