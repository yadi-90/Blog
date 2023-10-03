import { useState} from "react";
import { useNavigate } from "react-router-dom";

const Form = (props)=>{
    const {initialPost={
        id:null,
        date:"",
        title:"",
        content:"",
        image: "",
        alt:"" 
    }}=props;

    const [ posts, setPosts] = useState(initialPost);

//create functions that handle the event of the user typing into the form
 const handleDateChange = (event) => {
 const date = event.target.value;
setPosts((posts) => ({ ...posts, date }));
    
}
    
 const handleTitleChange = (event) => {
 const title = event.target.value;
 setPosts((post) => ({ ...post, title }));
    
 }
    
const handleContentChange = (event) => {
 const content = event.target.value;
setPosts((post) => ({ ...post, content }));
    
 }
    
const handleImageChange = (event) => {
const image = event.target.value;
 setPosts((posts) => ({ ...posts, image }));
    
 }
    
const handlealt = (event) => {
   const alt = event.target.value;
   setPosts((posts) => ({ ...posts, alt }));
    
 }
    
    
 const navigate = useNavigate()
    
    
    
//A function to handle the post request
  const postBlogPost = (newPost) => {
    return fetch('http://localhost:5173/blogposts', {
  method: 'POST',
   headers: {'Content-Type': 'application/json'}, 
   body: JSON.stringify(newPost)
   }).then((response) => {
    return response.json()
    }).then((data) => {
    console.log("From the post ", data);
  props.savePost(data);
   
   });
   }
    
   //a function to handle the Update request
   const updatePost = (existingPost) =>{
   return fetch(`http://localhost:5173/blogposts/${existingPost.id}`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'}, 
   body: JSON.stringify(existingPost)
    }).then((response) => {
   return response.json()
    }).then((data) => {
    console.log("From put request ", data);
    props.savePost(data);
    });
 
  }
    
     const handleSubmit = (e) => {
   e.preventDefault();
  if(posts.id){
    updatePost(posts);
    } else {
     postBlogPost(posts);
  } 
     navigate('/blogposts')
    

  };
   
    
     return (
    <form onSubmit={handleSubmit}>
    <fieldset>
     <label>Date</label>
    <input
     reset = "reset"
     type="Date"
     id="add-date"
     placeholder=""
    required
     value={posts.date}
     onChange={handleDateChange}
    
     />
     <label>Title</label>
    <input
     type="text"
     id="add-title"
     placeholder=""
    required
     value={posts.title}
     onChange={handleTitleChange}
    />
     <label>Content</label>
    <input
     type="text"
     id="add-content"
    placeholder=""
     required
     value={posts.content}
    onChange={handleContentChange}
     />
    <label>Image</label>
    <input
   type="url"
     id="add-image"
    placeholder=""
     required
    value={posts.image}
    onChange={handleImageChange}
   />
    <label>Alt text</label>
    <input
    type="text"
    id="add-alt"
     placeholder=""
    required
   value={posts.alt}
     onChange={handlealt}
     />
    </fieldset>
     <button type="submit">{!posts.id ? "Add" : "Save"}</button>
   </form>
    );
    };
    
    export default Form;