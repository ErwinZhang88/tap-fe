import React, { Component } from 'react'
import './Operasional.scss';
import GoogleMapReact from 'google-map-react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const pabrikIcon = new L.Icon({
    iconUrl: require('../../assets/img/pabrik_icon.png'),
    iconRetinaUrl: require('../../assets/img/pabrik_icon.png'),
    iconAnchor: null,
    popupAnchor: [0, -25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(27, 50),
})

const plantationIcon = new L.Icon({
    iconUrl: require('../../assets/img/plantation_icon.png'),
    iconRetinaUrl: require('../../assets/img/plantation_icon.png'),
    iconAnchor: null,
    popupAnchor: [0, -25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(27, 50),
})

const kebunpabrikIcon = new L.Icon({
    iconUrl: require('../../assets/img/kebunpabrik_icon.png'),
    iconRetinaUrl: require('../../assets/img/kebunpabrik_icon.png'),
    iconAnchor: null,
    popupAnchor: [0, -25],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(65, 50),
})

class OperasionalMap extends Component{

    constructor(props) {
        super(props);

        this.state = {
            lat: -0.789275,
            lng: 113.921326,
            zoom: 5,
        }
    }

    handleChangeViewPort = (lat, lon) => {
        // this.setState({
        //     lat: lat,
        //     lng: lon,
        //     zoom: 8,
        // })
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        const position = [this.state.lat, this.state.lng]

        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/operasional/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase ">Peta</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 no-pad">
                            {/* <h2 className="txt-clr-green-1 txt-uppercase">Peta</h2> */}
                            <p>
                                <img className="img-dsg-4" src="/assets/img/operasional/img-2.png" />
                            </p>


                            {/* <Map 
                            center={position} 
                            zoom={this.state.zoom}
                            zoomControl={false}
                            // dragging={false}
                            // scrollWheelZoom={false}
                             style={{ height: '500px', width: '100%' }}>
                                <TileLayer
                                attribution=''
                                url="https://api.maptiler.com/maps/topographique/{z}/{x}/{y}.png?key=mtooH8cHkdvbvkoRfiIM"
                                />
                                <Marker position={[0.538659,116.419388]} icon={pabrikIcon}>
                                    <Popup>
                                        PT ... ... ...
                                    </Popup>
                                </Marker>
                                <Marker position={[-1.681488,113.382355]} icon={plantationIcon}>
                                    <Popup>
                                        PT ... ... ...
                                    </Popup>
                                </Marker>
                                <Marker position={[-1.485183,102.438057]} icon={kebunpabrikIcon}>
                                    <Popup>
                                        PT ... ... ...
                                    </Popup>
                                </Marker>
                            </Map> */}
                        </div>
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-30 no-pad" style={{marginTop: "30px"}}>
                            <div className="box-label-map">
                                <div className="list-label">
                                    <h2 className="txt-clr-gray-1 txt-uppercase">Kalimantan Tengah</h2>
                                    <ol>
                                        <li onClick={() => this.handleChangeViewPort(-1.681488,113.382355)}>PT GAWI BAHANDEP SAWIT MEKAR</li>
                                        <li onClick={() => this.handleChangeViewPort(-1.681488,113.382355)}>PT MEGA IKA KHANSA</li>
                                        <li onClick={() => this.handleChangeViewPort(-1.681488,113.382355)}>PT TRIEKA AGRO NUSANTARA</li>
                                        <li onClick={() => this.handleChangeViewPort(-1.681488,113.382355)}>PT SUKSES KARYA MANDIRI</li>
                                        <li onClick={() => this.handleChangeViewPort(-1.681488,113.382355)}>PT FIRST LAMANDAU TIMBER INTERNATIONAL</li>
                                    </ol>
                                </div>
                                <div className="list-label">
                                    <h2 className="txt-clr-gray-1 txt-uppercase">Jambi</h2>
                                    <ol>
                                        <li onClick={() => this.handleChangeViewPort(-1.485183,102.438057)}>PT BRAHMA BINABAKTI</li>
                                    </ol>
                                </div>
                                <div className="list-label">
                                    <h2 className="txt-clr-gray-1 txt-uppercase">Kalimantan Timur</h2>
                                    <ol>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT KEDAP SAYAAQ DUA</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT ETAM BERSAMA LESTARI</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT DWIWIRA LESTARI JAYA</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT NATURA PASIFIC NUSANTARA</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT MUARATOYU SUBUR LESTARI</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT HAMPARAN PERKASA MANDIRI</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT SUBUR ABADI WANA AGUNG</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT KUTIM AGRO MANDIRI</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT PRADANA TELEN AGROMAS</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT YUDHA WAHANA ABADI</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT ANUGERAH AGUNG PRIMA ABADI</li>
                                        <li onClick={() => this.handleChangeViewPort(0.538659,116.419388)}>PT GENERAL AURA SEMARI</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OperasionalMap;