import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <header className="container-fluid bg-dark text-light sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand text-success fw-bold" href="#">Nexa Coin</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link text-light" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#">Features</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#">About Us</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li>
                <li className="nav-item"><a className="nav-link text-light" href="#">FAQs</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-5 bg-gradient" style={{background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)'}}>
        <h1 className="display-4 text-success">Discover Your Financial Future with Nexa Coin</h1>
        <p className="text-light my-4">Explore the financial world with ease and confidence. Connect your wallet today and get started!</p>
        <div>
          <button className="btn btn-success btn-lg mx-2 my-2 shadow-lg hover-shadow">Connect Wallet</button>
          <button className="btn btn-primary btn-lg mx-2 my-2 shadow-lg hover-shadow">Learn More</button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-5 text-center">
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-dark text-light p-3 mb-4 shadow-lg">
              <strong className="d-block fs-4">9432+</strong>
              <p>Collectibles</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-light p-3 mb-4 shadow-lg">
              <strong className="d-block fs-4">144ETH+</strong>
              <p>Auctions</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-dark text-light p-3 mb-4 shadow-lg">
              <strong className="d-block fs-4">50K</strong>
              <p>Artists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary text-light py-5">
        <div className="container">
          <h2 className="text-center text-success mb-4">Best Features Provided by Nexa Coin</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-light p-3 shadow-lg hover-shadow">
                <h3 className="fs-5">Expense Tracking</h3>
                <p>Stay on top of your expenses with real-time analytics and efficient tracking.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-light p-3 shadow-lg hover-shadow">
                <h3 className="fs-5">Credit Monitoring</h3>
                <p>Get insights into your financial stability and improve your credit scores.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card bg-dark text-light p-3 shadow-lg hover-shadow">
                <h3 className="fs-5">Secure Document</h3>
                <p>Enjoy the security of blockchain technology for storing sensitive data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 border-top bg-dark">
        <p className="text-secondary">&copy; 2024 Nexa Coin. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
