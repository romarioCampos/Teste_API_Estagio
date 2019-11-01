import React, { Component } from 'react';

class PostForm extends Component {
    render() {
        return (
            <div className="container">
                <header className="App-header">
                    <div className="header" margin="0">
                        <button type="button" className="button-candidatarse">CANDIDATE</button>
                        <img src="Header.png" alt="Header" width="1100" height="900" />
                    </div>
                    <div className="header-2">
                    </div>
                </header>
                <main className="container">
                    <div className="main">
                        <img src="Main.png" alt="Main" width="1100" height="1000" />
                    </div>
                    <div className="main-retangulo">
                        <h1>Quer conhecer mais sobre o Neovision?</h1>
                        <input type="text" placeholder="Nome"></input>
                        <input type="email" placeholder="Email"></input>
                        <button type="button" className="button-enviar">ENVIAR</button>
                    </div>
                </main>
                <footer className="container">
                    <div className="footer">
                        <img src="Footer.png" alt="Footer" width="1100" height="100" />
                    </div>
                </footer>
            </div>
        )
    }
}

export default PostForm;