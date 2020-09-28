import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {isMobile} from 'react-device-detect';

class Format12 extends Component{
    render(){
        const { content, subRight } = this.props;

        return(

            <div className={!subRight ? "box-desc col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4" : "box-desc col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4 box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                {
                    content.show_title === 1 &&
                    <h2 className="txt-uppercase txt-center txt-clr-green-1" style={{"fontSize": "1.2em"}}>{content.title}</h2>
                }
 
                <div className="box-filedownload-thumb">
                    <img className="cover" src={isMobile ? content.image_mobile !== null ? content.image_mobile : content.image  : content.image}  alt="" />
                    <div className="desc-info">
                        <img className="icon" src="/assets/img/pdf_icon.png"  alt="" />
                        <label className="label-small-regular">{content.title}</label>
                    </div>
                    {/* <a href={content.files} target="_blank" rel="noopener noreferrer" download style={{zIndex: 9, width: "100%"}}>
                        <button className="btn-4 txt-clr-white-1">
                            Download <FontAwesomeIcon icon="arrow-down" className="icon" />
                        </button>
                    </a> */}

                    <button className="btn-4 txt-clr-white-1" onClick={() => this.props.handleShowPDFPopUp(content.files, content.is_download)}>
                            View
                    </button>
                </div>
            </div>

        )
    }
}

export default Format12;