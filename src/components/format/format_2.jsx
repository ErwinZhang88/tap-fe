import React, { Component } from 'react'
import parse from 'html-react-parser';
import {isMobile} from 'react-device-detect';

class Format2 extends Component{

    render(){
        const { content, subRight } = this.props;

        return(
            <div className={!subRight ? "row box-desc" : "row box-desc box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                <div className="col-12">
                    <h2 className="txt-uppercase txt-clr-green-1">{content.title}</h2>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4">
                    { content.desc !== null ? parse(content.desc) : ""}
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img src={isMobile ? content.image_mobile !== null ? content.image_mobile : content.image  : content.image} alt="" />
                </div>
            </div>
        )
    }
}

export default Format2;