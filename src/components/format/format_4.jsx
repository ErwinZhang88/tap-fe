import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';

class Format4 extends Component{


    render(){
        const { content, subRight } = this.props;

        return(
            <div className={!subRight ? "row box-desc" : "row box-desc box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                {
                    (content.title !== null && content.title !== "") &&
                    <div className="col-12">
                        <h2 className="txt-uppercase">{content.title}</h2>
                    </div>
                }

                {
                    (content.image !== null && content.image !== "") &&
                    <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <img className="img-full-cover" src={isMobile ? content.image_mobile !== null ? content.image_mobile : content.image  : content.image}  alt="" />
                    </div>
                }
            </div>
        )
    }
}

export default Format4;