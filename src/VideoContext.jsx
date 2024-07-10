// VideoContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

export const useVideoContext = () => useContext(VideoContext)


export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);



  const fetchVideos = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/Ikkitonga/aluraflix-api/videos")
      const data = await response.json()
      setVideos(data)
      console.log('Fetched data:', data)
    } catch (error) {
      console.error('Error fetching videos:', error)
    }
  }

  useEffect(() => {
    fetchVideos();
  }, []);

  // funcion para agregar video
  const addVideo = (video) => {
    setVideos([...videos, video]);
  };


  // funcion para borrar el video
  const deleteVideo = (id) => {
    setVideos(videos.filter(video => video.id !== id));
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, deleteVideo }}>
      {children}
    </VideoContext.Provider>
  );
};

export default VideoProvider



