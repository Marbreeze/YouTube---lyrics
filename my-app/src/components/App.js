import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyDQAgyNC_hHvdX7q-EmraZsntTEY19mCOA'



class App extends React.Component{

    
    state = {
        videos:[],
        selectedVideo:null

    }

    componentDidMount(){
        this.onTextSubmit("flowers");
    }
   onTextSubmit = async text =>{
        console.log("text",text);
//gave 400 at first,make sure to use async funct and await when making API req
        const response = await youtube.get('/search',{
            params:{
                q:text,
                part:'snippet',
                type:'video',
                maxResults: 5,
                key:`${KEY}`
            }
        }); //endpoint added to my API
        
        console.log('response', response);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

onVideoSelect = video =>{ //callback taking the video selected from videoList and VideoItem coming back
    console.log('From the app',video);
    this.setState({selectedVideo:video});
}
  render(){
        return(
        <div className= "ui container">
            <SearchBar onFormSubmit = {this.onTextSubmit}/>
            <div className = "ui grid">
                <div className ="ui row">
            <div className ="eleven wide column">
                <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className ="five wide column">
                <VideoList videos = {this.state.videos}
                onVideoSelect={this.onVideoSelect}/>
             </div>
            </div>
        </div>
    </div>
        )
    }
}

export default App;