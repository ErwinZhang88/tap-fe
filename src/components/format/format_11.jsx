import React, { Component } from 'react'

class Format11 extends Component{

    render(){
        const { content, subRight } = this.props;

        return(
            <div className={!subRight ? "row box-desc berita" : "row box-desc berita box-desc-berita-subright"} style={{backgroundColor: content.bg_color}}>
                {
                    content.title !== null && content.title !== "" && content.show_title === 1 &&
                    <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 p-small-med txt-clr-green-4">
                        <div className="row list-berita">
                            <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                <label className="label-small-regular">{content.created_at}</label>
                            </div>
                            <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                {/* <label className="label-small-regular txt-clr-green-2">{content.created_at}</label><br/> */}
                                <label className="label-medium-bold csr-pointer" onClick={() => {this.props.handleChangePage("/detail/"+content.id)}} >{content.title}</label>
                            </div>
                        </div>
                        
                    </div>
                }
            </div>
        )
    }
}

export default Format11;