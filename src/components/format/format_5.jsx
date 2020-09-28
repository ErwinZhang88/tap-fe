import React, { Component } from 'react'
import parse from 'html-react-parser';
import {isMobile} from 'react-device-detect';

class Format5 extends Component{

    render(){
        const { content, subRight } = this.props;

        return(
            <div className={!subRight ? "row box-desc" : "row box-desc box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-gray-5">
                    <div className="box-img-quote">
                        <img src={isMobile ? content.image_mobile !== null ? content.image_mobile : content.image  : content.image} alt=""  />
                        <div className="bx-quote">
                            <div className="title bg-clr-green-1 txt-clr-white-1">
                                {content.title}
                            </div>
                            <div className="quote bg-clr-white-1 txt-clr-green-4">
                                { content.desc !== null ? parse(content.desc) : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Format5;