import React from 'react';
import './App.css';
import WebTicTacToeContainer from './WebTicTacToeContainer';

// PUBLIC_INTERFACE
function App() {
  return (
    <div className="app" style={{ background: "#f8fafb", minHeight: "100vh" }}>
      <nav className="navbar" style={{ background: "#fff", borderBottom: "1px solid #ededed" }}>
        <div className="container" style={{ maxWidth: 940, width: "100%" }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol" style={{ color: "#4caf50" }}>*</span> WebTicTacToe
            </div>
            <span style={{ color: "#2196F3", fontSize: 15, fontWeight: 500 }}>by KAVIA AI</span>
          </div>
        </div>
      </nav>
      <main>
        <WebTicTacToeContainer />
      </main>
    </div>
  );
}

export default App;