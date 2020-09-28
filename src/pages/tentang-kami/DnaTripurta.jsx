import React, { Component } from 'react'
import './TentangKami.css';

class DnaTripurta extends Component{

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/tentang-kami/dna/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Tentang Kami</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col-12 no-pad">
                            <h2 className="txt-uppercase txt-clr-green-1">Triputra DNA</h2>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 no-pad">
                            <p className="p-small-med txt-clr-green-4">
                                Triputra DNA merupakan Guiding Values bagi Insan Triputra untuk mewujud nyatakan reason of being Triputra
                                Group yakni "Ada karena Indonesia, oleh Indonesia, dan untuk Indonesia".
                            </p>

                            <p className="p-small-med txt-clr-green-4">
                            "Sebagai Guiding Values, maka Triputra DNA dinyatakan sebagai pemersatu dari
                            keberagaman di Triputra Group, sehingga apapun jabatannya; dimanapun
                            perusahaannya; dan sampai kapanpun Insan Triputra akan memiliki keseragaman
                            values. Hal ini juga akan memudahkan kesamaan bahasa dan pemahaman yang pada
                            akhirnya akan mendorong efektivitas sosialisasi dan internalisasi dalam lingkup Triputra
                            Group."
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 txt-center">
                            <img src="/assets/img/tentang-kami/dna/icon-dna.png" className="img-dsg-8" />
                        </div>
                    </div>
                </div>
                
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-3 txt-clr-green-4">
                    <div className="title-dna">
                        <span className="icon-dna">
                            <img src="/assets/img/tentang-kami/dna/icon-1.png" />
                        </span>
                        <h2 className="txt-uppercase">Integrity and Ethics</h2>
                    </div>
                   
                    <p><q><i>Menjalani hidup dengan transparan dan jujur</i></q></p>
                    <ul>
                        <li>Melakukan yang dikatakan.</li>
                        <li>Fokus pada masalah dan pemecahannya bukan pada orang.</li>
                        <li>Lakukan yang benar dan seharusnya, bukan hanya yang diinginkan.</li>
                        <li>bertindak berdasarkan fakta dan data.</li>
                    </ul>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-4 txt-clr-green-4">
                    <div className="title-dna">
                        <span className="icon-dna">
                            <img src="/assets/img/tentang-kami/dna/icon-2.png" />
                        </span>
                        <h2 className="txt-uppercase">Excellence</h2>
                    </div>
                   
                    <p><q><i>Menghasilkan karya yang lebih dari<br/>yang diharapkan dalam situasi apapun.</i></q></p>
                    <ul>
                        <li>Pantang menyerah dan bertindak untuk menang.</li>
                        <li>Eksekusi yang disiplin, perbaikan berkesinambungan dan inovasi.</li>
                    </ul>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-4 txt-clr-green-4">
                    <div className="title-dna">
                        <span className="icon-dna">
                            <img src="/assets/img/tentang-kami/dna/icon-3.png" />
                        </span>
                        <h2 className="txt-uppercase">Compassion</h2>
                    </div>
                    
                    <p><q><i>Menempatkan kemanusiaan dan tujuan yang lebih<br/>mulia di atas kepentingan pribadi.</i></q></p>
                    <ul>
                        <li>Kepedulian kepada sesama dan lingkungan dengan tindakan nyata.</li>
                        <li>Membangun generasi penerus yang lebih hebat.</li>
                    </ul>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height txt-clr-green-4">
                    <div className="title-dna">
                        <span className="icon-dna">
                            <img src="/assets/img/tentang-kami/dna/icon-4.png" />
                        </span>
                        <h2 className="txt-uppercase">Humility</h2>
                    </div>
                    
                    <p><q><i>Kerendahan hati, membuka diri,<br/>dan terus memperbaiki diri.</i></q></p>
                    <ul>
                        <li>Mengalahkan ego diri untuk kepentingan lebih besar dan berpikiran terbuka</li>
                        <li>Bersyukur atas apa yang dimiliki dan tulus menghargai sesama</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default DnaTripurta;