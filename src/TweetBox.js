import React,{useState} from 'react';
import "./TweetBox.css";
import {Avatar, Button } from "@material-ui/core";
import Foto from './asets/em.jpg';
import db from './firebase';

function TextBoxt() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = (e) => {
        e.preventDefault();
      
        db.collection('posts').add({
            displayName: 'Armend Krasniqi1',
            username:'cleverArmendi',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
            "https://i.ibb.co/BTF3Y5Q/https-specials-images-forbesimg-com-imageserve-5f47d4de7637290765bce495-0x0.jpg"
        });
        setTweetMessage("");
        setTweetImage("");
    };
    return <div className="tweetBox">
        <form>
           <div className="tweetBox__input">
           <Avatar alt="Armend" src={Foto} />
            <input

            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening?"
            type="text"/>
           </div>
           <input 
           value={tweetImage}
           onChange={e => setTweetImage(e.target.value)}
           className="tweetBox__imageInput"
           placeholder="Optional: Enter Image URL"
            type="text"/>

           <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>
    
}

export default TextBoxt
