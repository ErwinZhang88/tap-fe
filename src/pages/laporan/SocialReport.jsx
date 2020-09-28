import React, { Component } from 'react'
import './Laporan.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SocialReport extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
        }
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
        this.setState({
            curNicename: this.props.nicename
        })
    }

    render(){
        const { curNicename } = this.state;
        const { subMenuRight } = this.props;

        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/laporan/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Laporan</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">

                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <h2 className="txt-uppercase">Laporan Sosial</h2>
                                
                            <div className="row m-b-35">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-filedownload-thumb">
                                        <img className="cover" src="/assets/img/laporan/cover.png" />
                                        <div className="desc-info">
                                            <img className="icon" src="/assets/img/pdf_icon.png" />
                                            <label className="label-small-regular">Social Report 2016</label>
                                        </div>
                                        <button className="btn-4 txt-clr-white-1">Download <FontAwesomeIcon icon="arrow-down" className="icon" /></button>
                                    </div>
                                </div>

                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-filedownload-thumb">
                                        <img className="cover" src="/assets/img/laporan/cover.png" />
                                        <div className="desc-info">
                                            <img className="icon" src="/assets/img/pdf_icon.png" />
                                            <label className="label-small-regular">Social Report 2019</label>
                                        </div>
                                        <button className="btn-4 txt-clr-white-1">Download <FontAwesomeIcon icon="arrow-down" className="icon" /></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-filedownload-thumb">
                                        <img className="cover" src="/assets/img/laporan/cover.png" />
                                        <div className="desc-info">
                                            <img className="icon" src="/assets/img/pdf_icon.png" />
                                            <label className="label-small-regular">Social Report 2020</label>
                                        </div>
                                        <button className="btn-4 txt-clr-white-1">Download <FontAwesomeIcon icon="arrow-down" className="icon" /></button>
                                    </div>
                                </div>

                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-filedownload-thumb">
                                        <img className="cover" src="/assets/img/laporan/cover.png" />
                                        <div className="desc-info">
                                            <img className="icon" src="/assets/img/pdf_icon.png" />
                                            <label className="label-small-regular">Social Report 2020</label>
                                        </div>
                                        <button className="btn-4 txt-clr-white-1">Download <FontAwesomeIcon icon="arrow-down" className="icon" /></button>
                                    </div>
                                </div>
                            </div>

                            <br/>
                            <p className="txt-center">
                                <button className="btn-1 bg-clr-green-1 txt-clr-white-1" style={{margin: "0 auto"}}>Load More <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </p>
                        </div>

                        {
                            subMenuRight.length > 0 &&

                            <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12 no-pad">
                                <div className="sub-menu-right">

                                    {subMenuRight.map((menu, idxMenu) => {
                                        return  <div key={idxMenu}>
                                                
                                                    <ul>
                                                        {menu.item.map((item, idxItem) => {
                                                            return  <li key={idxItem}>
                                                                        <label className={curNicename === item.nicename ? "label-xs-small-bold txt-clr-green-3 csr-pointer" : "label-xs-small-bold txt-clr-gray-2 csr-pointer"} 
                                                                         onClick={() => this.handleChangePage(item.path)}>
                                                                            {item.name}
                                                                        </label>
                                                                    </li>
                                                        })}
                                                    </ul>
                                                </div>
                                    })}
                                </div>
                            </div>  
                        }

                        
                    </div>
                </div>
               
            </div>
        )
    }
}

export default SocialReport;