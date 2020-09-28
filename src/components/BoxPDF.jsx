import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PDFViewer from 'pdf-viewer-reactjs';
import { saveAs } from 'file-saver';

class BoxPDF extends Component{

    handleHidePDFPopUp(){
        this.props.handleHidePDFPopUp()
    }

    handleSavePDF(){
        var lastslashindex = this.props.url.lastIndexOf('/');
        var pdfName = this.props.url.substring(lastslashindex  + 1);
        saveAs(this.props.url, pdfName);
    }

    render(){
        if(this.props.url === ""){
            return "";
        }

        return(
            <React.Fragment>
                <button className="close-popup-black" style={{"right": "10px", "top": "-18px"}} onClick={() => this.handleHidePDFPopUp()}>
                <FontAwesomeIcon icon="times-circle" className="icon" />
                </button>

                { this.props.pdfIsDownload === 1 &&
                <button className="close-popup-black icon-pdf-download" onClick={() => this.handleSavePDF()}>
                    <span style={{"fontSize": "0.3em"}}>DOWNLOAD</span>
                </button>
                }

                <PDFViewer
                    document={{
                        url: this.props.url,
                    }}
                    navigation={{
                    css: {
                        navbarWrapper:"navbar-pdf-viewer"
                    }
                    }}
                    css="cont-pdf-viewer"
                    canvasCss="canvas-pdf-viewer"
                    scale={1}
                    minScale={1}
                    hideRotation={true}
                />
            </React.Fragment>
        )
    }
}

export default BoxPDF;