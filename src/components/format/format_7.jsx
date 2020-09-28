import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import parse from 'html-react-parser';

class Format7 extends Component{

    render(){
        const { content, subRight, labelButtonReadMore } = this.props;

        return(

            <div className={!subRight ? "box-desc fixed-height col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4" : "box-desc fixed-height col col-lg-6 col-md-6 col-sm-12 col-xs-12 p-small-med txt-clr-green-4 box-desc-subright"} style={{backgroundColor: content.bg_color}}>
            <div className="col-12">
                {
                    ((content.title !== null && content.title !== "" && content.show_title === 1 ) ||
                    (content.icon !== null && content.icon !== "")) &&

                    <div className="title-dna">
                        {
                            (content.icon !== null && content.icon !== "") &&
                            <span className="icon-dna">
                                <img src={content.icon} alt=""  />
                            </span>
                        }

                        {
                            (content.title !== null && content.title !== "" && content.show_title === 1) &&
                            <h2 className="txt-uppercase">{content.title}</h2>
                        }
                    </div>
                }
               
               
                { content.desc !== null ? parse(content.desc) : ""}

                { 
                    content.button === 1 &&
                    <p>
                        <button className="btn-2" onClick={() => {}}>
                            {labelButtonReadMore} <FontAwesomeIcon icon="arrow-right" className="icon" />
                        </button>
                    </p>
                }
                </div>
            </div>

        )
    }
}

export default Format7;