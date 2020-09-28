import React, { Component } from 'react'
import {isMobile} from 'react-device-detect';

class Format13 extends Component{

    render(){
        const { content, subRight } = this.props;

        return(

            <div className={!subRight ? "box-desc col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4" : "box-desc col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4 box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                <div className="box-video" onClick={() => this.props.handleShowVideoPopUp(content.video)}>
                    <img src={isMobile ? content.image_mobile !== null ? content.image_mobile : content.image  : content.image}  alt="" />
                    <div className="desc">
                        <label className="label-medium-bold txt-clr-green-4">{content.title}</label>
                        {/* <label className="label-medium-regular txt-clr-green-4">{content.created_at}</label> */}
                    </div>
                </div>
            </div>

        )
    }
}

export default Format13;