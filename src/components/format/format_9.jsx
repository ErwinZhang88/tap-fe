import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';
import {isMobile} from 'react-device-detect';

class Format9 extends Component{

    render(){
        const { content, subRight, labelButtonReadMore } = this.props;

        return(
            <div className={!subRight ? "row box-desc full" : "row box-desc full box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-white-1 cont-text">
                    {
                        content.title !== null && content.title !== "" && content.show_title === 1 &&
                        <h2 className="txt-uppercase txt-clr-white-1">{content.title}</h2>
                    }
                    { content.short_desc !== null ? parse(content.short_desc) : ""}
                    { 
                        content.button === 1 &&
                        <p>
                            <button className="btn-2" onClick={() => {this.props.handleChangePage("/detail/"+content.id)}}>
                                {labelButtonReadMore} <FontAwesomeIcon icon="arrow-right" className="icon" />
                            </button>
                        </p>
                    }
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 no-pad">
                    <img className="img-full-cover" src={isMobile ? content.image_mobile !== null ? content.image_mobile : content.image  : content.image}  alt="" />
                </div>
            </div>
        )
    }
}

export default Format9;