import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import cardImg from './images/headshot.jpg'
import fbImg from './images/fb-square.svg'
import ghImg from './images/gh-square.svg'
import liImg from './images/li-square.svg'
import emImg from './images/email.svg'
import fbLtImg from './images/fb-lt-square.svg'
import ghLtImg from './images/gh-lt-square.png'
import liLtImg from './images/li-lt-square.svg'
import liDkImg from './images/li-dk-square.svg'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="cards card-1">
                    <div className="card-img">
                        <img src={cardImg} className="profPic" alt="profile" />
                    </div>
                    <div className="card-info">
                        <h1>Wesley Snyder</h1>
                        <h2>Front-End Developer</h2>
                        <h3>https://wsnyder21.github.io/</h3>
                        <div className="card-btns">
                            <a href="mailto: wsfilosofee@gmail.com" target="_blank" rel="noreferrer"><button className="btn-Email"><img src={emImg} alt="email" />Email
                            </button></a>
                            <a href="https://www.linkedin.com/in/wesley-snyder-89662123a/" target="_blank" rel="noreferrer"><button className="btn-LinkedIn"><img src={liImg} alt="linkedIn" />LinkedIn</button></a>
                        </div>
                        <div className="about">
                            <h3>About</h3>
                            <p>I am a Frontend Developer with a passion for understanding the nuances and intricacies of web and app development. I aspire to learn all that I can about the field in the hopes of one day developing the next greatest app. </p>
                        </div>
                        <div className="interests">
                            <h3>Interests</h3>
                            <p>Beyond coding, I love bowling, playing Texas Hold'em Poker, or watching NFL, hoping my fantasy team wins a championship. I also love playing my PS5, watching South Park or It's Always Sunny, or anything in the Marvel Universe. </p>
                        </div>
                        <footer className="footer">
                            <a href="https://www.facebook.com/wsnyder21" target="_blank" rel="noreferrer"><img src={fbLtImg} alt="facebook" /></a>
                            <a href="https://github.com/WSnyder21" target="_blank" rel="noreferrer"><img src={ghLtImg} alt="github" /></a>
                        </footer>
                    </div>
                </div>
                <div className="cards card-2">
                    <div className="card-img">
                        <img src={cardImg} className="profPic" alt="profile" />
                    </div>
                    <div className="card-info">
                        <h1>Wesley Snyder</h1>
                        <h2>Front-End Developer</h2>
                        <h3>https://wsnyder21.github.io/</h3>
                        <div className="card-btns">
                            <a href="mailto: wsfilosofee@gmail.com" target="_blank" rel="noreferrer"><button className="btn-Email"><img src={emImg} alt="email" />Email
                            </button></a>
                        </div>
                        <div className="about">
                            <h3>About</h3>
                            <p>I am a Frontend Developer with a passion for understanding the nuances and intricacies of web and app development. I aspire to learn all that I can about the field in the hopes of one day developing the next greatest app. </p>
                        </div>
                        <div className="interests">
                            <h3>Interests</h3>
                            <p>Beyond coding, I love bowling, playing Texas Hold'em Poker, or watching NFL, hoping my fantasy team wins a championship. I also love playing my PS5, watching South Park or It's Always Sunny, or anything in the Marvel Universe. </p>
                        </div>
                        <footer className="footer">
                            <a href="https://www.facebook.com/wsnyder21" target="_blank" rel="noreferrer"><img src={fbLtImg} alt="facebook" /></a>
                            <a href="https://github.com/WSnyder21" target="_blank" rel="noreferrer"><img src={ghLtImg} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/wesley-snyder-89662123a/" target="_blank" rel="noreferrer"><img src={liLtImg} alt="linkedIn" /></a>
                        </footer>
                    </div>
                </div>
                <div className="cards card-3">
                    <div className="card-img">
                        <img src={cardImg} className="profPic" alt="profile" />
                    </div>
                    <div className="card-info">
                        <h1>Wesley Snyder</h1>
                        <h2>Front-End Developer</h2>
                        <h3>https://wsnyder21.github.io/</h3>
                        <div className="card-btns">
                            <a href="mailto: wsfilosofee@gmail.com" target="_blank" rel="noreferrer"><button className="btn-Email"><img src={emImg} alt="email" />Email
                            </button></a>
                            <a href="https://www.linkedin.com/in/wesley-snyder-89662123a/" target="_blank" rel="noreferrer"><button className="btn-LinkedIn"><img src={liImg} alt="linkedIn" />LinkedIn</button></a>
                        </div>
                        <div className="about">
                            <h3>About</h3>
                            <p>I am a Frontend Developer with a passion for understanding the nuances and intricacies of web and app development. I aspire to learn all that I can about the field in the hopes of one day developing the next greatest app. </p>
                        </div>
                        <div className="interests">
                            <h3>Interests</h3>
                            <p>Beyond coding, I love bowling, playing Texas Hold'em Poker, or watching NFL, hoping my fantasy team wins a championship. I also love playing my PS5, watching South Park or It's Always Sunny, or anything in the Marvel Universe. </p>
                        </div>
                        <footer className="footer">
                            <a href="https://www.facebook.com/wsnyder21" target="_blank" rel="noreferrer"><img src={fbImg} alt="facebook" /></a>
                            <a href="https://github.com/WSnyder21" target="_blank" rel="noreferrer"><img src={ghImg} alt="github" /></a>
                        </footer>
                    </div>
                </div>
                <div className="cards card-4">
                    <div className="card-img">
                        <img src={cardImg} className="profPic" alt="profile" />
                    </div>
                    <div className="card-info">
                        <h1>Wesley Snyder</h1>
                        <h2>Front-End Developer</h2>
                        <h3>https://wsnyder21.github.io/</h3>
                        <div className="card-btns">
                            <a href="mailto: wsfilosofee@gmail.com" target="_blank" rel="noreferrer"><button className="btn-Email"><img src={emImg} alt="email" />Email
                            </button></a>
                        </div>
                        <div className="about">
                            <h3>About</h3>
                            <p>I am a Frontend Developer with a passion for understanding the nuances and intricacies of web and app development. I aspire to learn all that I can about the field in the hopes of one day developing the next greatest app. </p>
                        </div>
                        <div className="interests">
                            <h3>Interests</h3>
                            <p>Beyond coding, I love bowling, playing Texas Hold'em Poker, or watching NFL, hoping my fantasy team wins a championship. I also love playing my PS5, watching South Park or It's Always Sunny, or anything in the Marvel Universe. </p>
                        </div>
                        <footer className="footer">
                            <a href="https://www.facebook.com/wsnyder21" target="_blank" rel="noreferrer"><img src={fbImg} alt="facebook" /></a>
                            <a href="https://github.com/WSnyder21" target="_blank" rel="noreferrer"><img src={ghImg} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/wesley-snyder-89662123a/" target="_blank" rel="noreferrer"><img src={liDkImg} alt="linkedIn" /></a>
                        </footer>
                    </div>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

