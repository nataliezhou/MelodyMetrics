import React, { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PostCompose() { 
    const [postContent, setPostContent] = useState({ name: "", date: "", location: "", contact: "", description: ""});
    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name == "itemName") {
            setPostContent({...postContent, name: value});
        } else if (name == "date") {
            setPostContent({...postContent, date: value});
        } else if (name == "location") {
            setPostContent({...postContent, location: value});
        } else if (name == "contact") {
            setPostContent({...postContent, contact: value});
        } else if (name == "description") {
            setPostContent({...postContent, description: value});
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        createPost(postContent);
    }
     async function createPost(content) {
        try {
        //    const response = await axios({
        //     method: "post",
        //     url: "/api/v1/insertpost",
        //     headers: {
        //       Authorization: localStorage.getItem("psnToken"),
        //     },
        //     data: {
        //       id: null,
        //       userId: localStorage.getItem("psnUserId"),
        //       content: inputContent,
        //       image: file64StringWithType,
        //       createdAt: null,
        //       love: null,
        //       share: null,
        //       comment: null,
        //     },
        //   });
     
            console.log("Posted successfully!");
            setPostContent("", null, "", "", "");
          
        } catch (error) {
          console.log("Post failed. Please try again later!");
        }
    } 
    return (
        <Popup trigger={ <button className="button"> New Post</button>} modal nested > 
            {  
            close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> 
                <div className="header"> Found an Item? </div> 
                <form onSubmit={handleSubmit} >
                    <label>
                        <input placeholder="Item Name" 
                            name = "itemName" 
                            onChange={ handleChange } />
                    </label>
                    <label>
                        <input placeholder="Date Found" 
                            name = "date" 
                            type="date"
                            onChange={ handleChange } />
                    </label>
                    <label>
                        <input placeholder="Location" 
                            name = "location" 
                            onChange={ handleChange } />
                    </label>
                    <label>
                        <input placeholder="Your name and contact information" 
                            name = "contact" 
                            onChange={ handleChange } />
                    </label>
                    <label>
                        <input placeholder="Description/notes" 
                            name = "description"
                            type="textarea" 
                            onChange={ handleChange } />
                    </label>
                    <div>
                        <button variant="primary" type="submit">Post</button>
                        <button className="button" onClick={() => { console.log('modal closed '); close(); }} > Cancel </button> 
                    </div>
                </form>
            
            </div> )
            } 
        </Popup>); 
}

export default PostCompose;