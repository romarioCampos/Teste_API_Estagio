import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      nome: '',
      email: ''
    }
  }

  componentDidMount() {
    fetch('https://85k7bv04na.execute-api.us-east-1.amazonaws.com/dev/register', {
      method: 'POST',
      headers: {
        'Authorization': 'oliveira-campos@outlook.com.br',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nome: '',
        email: ''
      })
    }).then((response) => {
      return response;
    });
  }

  render() {

    return (
      <div className="container">
        <header className="App-header">
          <div className="header">
            <img src="Header.png" alt="Header" width="4000" height="900" />
          </div>
          <div className="header-2">
          </div>
        </header>
        <main className="App-main">
          <div className="main">
            <img src="Main.png" alt="Main" width="4000" height="1200" />
          </div>
          <div className="main-retangulo">
            <h1>Quer conhecer mais sobre o Neovision?</h1>
            {/* Entrada dos dados para a API */}
            <input type="text" placeholder="Nome" name="name"></input>
            <input type="email" placeholder="Email" name="email"></input>
            <button type="submit" className="button-enviar">ENVIAR</button>
          </div>
        </main>
        <footer className="App-footer">
          <div className="footer">
            <img src="Footer.png" alt="Footer" width="4000" height="150" />
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
