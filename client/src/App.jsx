import Home from './components/home';
import Form from './components/Form';
import Post from './components/Post';
import BlogPosts from './components/Blogpost'
import './App.css'

function App() {


  return (
    <>

  <h1> Feeling Awesome!</h1>
  <nav>
    <a href="/form"> Form</a>
    <a href="blogpost">BlogPosts</a>
  </nav>

<Home />
<BlogPosts />
    </>
  )
}

export default App
