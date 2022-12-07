import React, { useState, useEffect } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PostCompose() { 
    const [postContent, setPostContent] = useState({ item: "", datetime: "", location: "", contact: "", description: "", image: ""});
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("items")) || []
    );

    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => { 
    	if (images.length < 1) return;
	const newImageUrls = [];
	images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
	setImageURLs(newImageUrls);
    }, [images]);
    function onImageChange(e) {
	setImages([...e.target.files]);
    }
    
    function handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        if (name == "itemName") {
            setPostContent({...postContent, item: value});
        } else if (name == "datetime") {
            setPostContent({...postContent, date: value});
        } else if (name == "location") {
            setPostContent({...postContent, location: value});
        } else if (name == "contact") {
            setPostContent({...postContent, contact: value});
        } else if (name == "description") {
            setPostContent({...postContent, description: value});
        } else if (name == "image")
            setPostContent({...postContent, image: value});

    }
    function handleSubmit(e) {
        React.memo();
        createPost(postContent);
       // document.getElementsByName("Popup").classList.remove("show");
    }
     async function createPost(content) {
        try {
            localStorage.setItem("items", JSON.stringify(items.concat(content)));
            console.log("Posted successfully!");
         //   const initItems = JSON.parse(localStorage.getItem("items"));
            //console.log(initItems);
           // setPostContent("", null, "", "", "");
          
        } catch (error) {
            console.log(error);
          console.log("Post failed. Please try again later!");
        }
    } 
    return (
        <Popup trigger={ <button className="button"> New Post</button>} modal nested > 
            {  
            close => ( <div className="modal"> <button className="close" onClick={close}> &times; </button> 
                <div className="popup-box">
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
		    <label>
			<input type="file" onChange={onImageChange} />
		    	{ imageURLs.map(imageSrc => <img src={imageSrc} width="150" height="150"/>) }
		    </label>
		    <div>
                        <button variant="primary" type = "submit">Post</button>
                        <button className="button" onClick={() => { console.log('modal closed '); close(); }} > Cancel </button> 
                    </div>
                </form>
                </div>
            </div> )
            } 
        </Popup>); 
}

export default PostCompose;
