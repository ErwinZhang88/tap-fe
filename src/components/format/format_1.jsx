import React, { Component } from 'react'
import parse from 'html-react-parser';

class Format1 extends Component{

    render(){
        const { content, subRight } = this.props;

        return(
            <div className={!subRight ? "row box-desc" : "row box-desc box-desc-subright"} style={{backgroundColor: content.bg_color}}>
                {
                    content.title !== null && content.title !== "" && content.show_title === 1 &&
                    <div className="col-12">
                        <h2 className="txt-uppercase txt-clr-green-1">{content.title}</h2>
                    </div>
                }

                {
                    content.desc !== null && content.desc !== "" &&
                    <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 p-small-med txt-clr-green-4">
                        { content.desc !== null ? parse(content.desc) : ""}
                    </div>
                }

            </div>
        )
    }
}

export default Format1;