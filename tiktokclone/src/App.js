import './App.css';
import Video from "./Video.js"
import React, {useEffect, useState} from "react"
import axios from "./axios"


function App() {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setvideos(response.data);
      return response;
    }
    fetchPosts();
  }, [])

  console.log(videos);

  return (
    <div className="app">
      <div className= "app_videos">
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
          <Video 
          url= {url}
          channel= {channel}
          description= {description}
          song = {song}
          likes={likes}
          message= {messages}
          shares= {shares}
          />
                )
        )}
      
      </div>
    </div>
  );
}

export default App;
