import React, { Component } from 'react'
import './Galeri.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Video extends Component{

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
                    <img src="/assets/img/galeri/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Galeri</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <h2 className="txt-uppercase">Video</h2>
                            <div className="row m-b-30">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-video">
                                        <img src="/assets/img/galeri/img-thumb-video-1.png" />
                                        <div className="desc">
                                            <label className="label-medium-bold txt-clr-green-4">Video 1</label>
                                            <label className="label-medium-regular txt-clr-green-4">20 Agustus 2020</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-video">
                                        <img src="/assets/img/galeri/img-thumb-video-2.png" />
                                        <div className="desc">
                                            <label className="label-medium-bold txt-clr-green-4">Video 2</label>
                                            <label className="label-medium-regular txt-clr-green-4">20 Agustus 2020</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-b-30">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-video">
                                        <img src="/assets/img/galeri/img-thumb-video-3.png" />
                                        <div className="desc">
                                            <label className="label-medium-bold txt-clr-green-4">Video 31</label>
                                            <label className="label-medium-regular txt-clr-green-4">20 Agustus 2020</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-video">
                                        <img src="/assets/img/galeri/img-thumb-video-4.png" />
                                        <div className="desc">
                                            <label className="label-medium-bold txt-clr-green-4">Video 4</label>
                                            <label className="label-medium-regular txt-clr-green-4">20 Agustus 2020</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row m-b-30">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-video">
                                        <img src="/assets/img/galeri/img-thumb-video-5.png" />
                                        <div className="desc">
                                            <label className="label-medium-bold txt-clr-green-4">Video 5</label>
                                            <label className="label-medium-regular txt-clr-green-4">20 Agustus 2020</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="box-video">
                                        <img src="/assets/img/galeri/img-thumb-video-6.png" />
                                        <div className="desc">
                                            <label className="label-medium-bold txt-clr-green-4">Video 6</label>
                                            <label className="label-medium-regular txt-clr-green-4">20 Agustus 2020</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br/>
                            <p className="txt-center">
                                <button className="btn-1 bg-clr-green-1 txt-clr-white-1">Load More <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
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

export default Video;