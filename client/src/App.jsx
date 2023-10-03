import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/home';

import Form from './components/Form';
import Post from './components/Post';
import BlogPosts from './components/Blogpost'
import './App.css'

function App() {


  return (
    <><Router>
    <div className="App">
<div className="content">
  <h1> Feeling Awesome!</h1>
  <nav> 
     <a href="/">Home</a>
    <a href="/form"> Form</a>
    <a href="/BlogPosts">BlogPosts</a>
  
  </nav>
{/* need to add routes  */}
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
<Routes>
  <Route path="/Form" element={<Form />} />
</Routes>
<Routes>
  <Route path="/BlogPosts" element={<BlogPosts />} />
</Routes>
<Routes>
  <Route path="/BlogPosts/:id" element={<Post />} />
</Routes>
</div>
</div>
</Router><div>
  <Post />
</div>
    </>
  )
}

export default App
