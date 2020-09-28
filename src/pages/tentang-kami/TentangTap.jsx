import React, { Component } from 'react'
import './TentangKami.css';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import parse from 'html-react-parser';

const apiRequest = new ApiRequest();

class TentangTap extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          data : null
        }
      }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);

        let data = {
            nicename : this.props.nicename
        };

        axios.post(apiRequest.getBaseApiUrl() + '/content', data,
           )
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    data : response.data.data
                })
            }
            else{

            }
        }.bind(this))
        .catch((err) => console.log(err));
    }

    render(){
        const { data } = this.state;

        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/tentang-kami/dna/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{data !== null ? data.title : ""}</h1>
                </div>

                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-gray-5">
                    <div className="row">
                        <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12 txt-clr-green-4 no-pad">
                            {data === null || data.category === null || data.category[0] === undefined ? "" :
                                data.category[0].content.map((item, index) => {
                                      return parse(item.desc) 
                                })
                            }
                        </div>
                    </div>
                </div>


                {data === null || data.category === null || data.category[1] === undefined ? "" :
                    data.category[1].content.map((item, index) => {
                        return <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                            <div className="row">
                                <div className="col-12 no-pad">
                                    <h2 className="txt-uppercase">{item.title}</h2>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 txt-clr-green-4 no-pad">
                                    {parse(item.desc)}
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 no-pad">
                                    <img className="img-dsg-1" src={item.image} />
                                </div>
                            </div>
                        </div> 
                    })
                }

                {data === null || data.category === null || data.category[2] === undefined ? "" :
                    data.category[2].content.map((item, index) => {
                        return <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc bg-clr-gray-3">
                            <h2 className="txt-uppercase">{item.title}</h2>
                            {parse(item.desc)}
                        </div>
                    })
                }

                
                
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc bg-clr-gray-3">
                    <h2 className="txt-uppercase">Misi</h2>
                    <p><q><i>Mengembangkan Perkebunan Ramah Lingkungan<br/>yang Mampu Memperbaiki Taraf Hidup Orang Banyak</i></q></p>
                    <p className="p-small-med txt-clr-green-4">
                        Menjadi perusahaan yang bertaraf internasional yang dominan dan diperhitungkan baik oleh perusahaan perkebunan 
                        lainnya maupun pasar. Dapat memberikan kontribusi positif bagi perekonomian dunia dan lingkungan sosial dengan konsep 
                        perkebunan yang ramah ingkungan yang dapat meningkatkan taraf hidup orang banyak.
                    </p>
                </div>



                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="txt-uppercase">Struktur perusahaan</h2>
                        </div>
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <img className="img-dsg-2" src="/assets/img/tentang-kami/img-3.png" />
                        </div>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-gray-5">
                    <div className="box-img-quote">
                        <img src="/assets/img/tentang-kami/img-4.png" />
                        <div className="bx-quote">
                            <div className="title bg-clr-green-1 txt-clr-white-1">
                                Motto Kami
                            </div>
                            <div className="quote bg-clr-white-1 txt-clr-green-4">
                                <q><i>Semangat untuk Mencapai yang Terbaik</i></q>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TentangTap;