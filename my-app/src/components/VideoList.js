import React from 'react';
import VideoItem from './VideoItem';

const VideoList= ({videos,onVideoSelect}) =>{
   const renderList = videos.map((video)  => {
        return <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}/>; //obj from Youtube API pass down as props
   })
    return(
        <div className="ui relaxed devided list">{renderList}
        </div>
    )
}

export default VideoList;