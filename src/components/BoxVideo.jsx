import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactPlayer from 'react-player/youtube'

class BoxVideo extends Component{
    constructor(props) {
        super(props);
        this.state = {
           urlVideo: "",
           videoPlay: false
        }
    }

    handleHideVideoPopUp(){
        this.props.handleHideVideoPopUp()
    }

    componentDidUpdate(prevProps, prevState){
        if(this.props.url !== prevState.urlVideo){
            this.setState({
                urlVideo: this.props.url,
                videoPlay: false
            })
        }

        if(this.props.videoPlay !== prevState.videoPlay){
            this.setState({
                videoPlay: this.props.videoPlay 
            })
        }
    }

    render(){
        if(this.state.urlVideo === ""){
            return "";
        }

        return(
            <React.Fragment>
                <button className="close-popup-black" onClick={() => this.handleHideVideoPopUp()}>
                <FontAwesomeIcon icon="times-circle" className="icon" />
                </button>
                <div className='player-wrapper' style={{padding: "22% 40%"}}>
                    <ReactPlayer
                        className='react-player'
                        url={this.state.urlVideo}
                        width='100%'
                        height='100%'
                        playing={this.state.videoPlay}
                        controls={true}
                        playing={false}
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default BoxVideo;