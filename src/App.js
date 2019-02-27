import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookList />
        <Footer />
      </div>
    )
  }
}

export default App;