import React from 'react'
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Blog from './pages/blog'
import About from './pages/about'
import Tag from './pages/tags'
import Header from './componenets/header';
import Footer from './componenets/footer';
import Article from './pages/article';
import './landing.css'
import './componenets/theme.css'

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className='app' data-theme = {isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <Routes >
          <Route path='/' element = {<Landing></Landing>}></Route>
          <Route path='/blog' element = {<Blog></Blog>}></Route>
          <Route path='/about' element = {<About></About>}></Route>
          <Route path='/tag' element = {<Tag></Tag>}></Route>
          <Route path='/article' element = {<Article></Article>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
