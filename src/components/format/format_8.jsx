import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

class Format8 extends Component{

    render(){
        const { content, subRight, labelButtonReadMore } = this.props;

        return(
            <div className={!subRight ? "box-desc col col-lg-12 col-md-12 col-sm-12 col-xs-12 p-small-med txt-clr-green-4" : "box-desc col col-lg-12 col-md-12 col-sm-12 col-xs-12 p-small-med txt-clr-green-4 box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                <div className="title-dna">
                    <span className="icon-dna">
                        <img src={content.icon}  alt="" />
                    </span>
                    <h2 className="txt-uppercase">{content.title}</h2>
                </div>
            
                { content.desc !== null ? parse(content.desc) : ""}
                
                { 
                    content.button !== undefined && content.button !== null &&
                    <p>
                        <button className="btn-2" onClick={() => {}}>
                            {labelButtonReadMore} <FontAwesomeIcon icon="arrow-right" className="icon" />
                        </button>
                    </p>
                }
            </div>
        )
    }
}

export default Format8;