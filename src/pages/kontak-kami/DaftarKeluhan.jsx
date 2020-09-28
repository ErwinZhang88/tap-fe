import React, { Component } from 'react'
import {isMobile} from 'react-device-detect';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import DataTable from 'react-data-table-component';

const apiRequest = new ApiRequest();

const customStyles = {
    rows: {},
    headCells: {
      style: {
        background: "#9bbb58",
        color: "#ffffff",
        fontWeight: 700,
        fontSize: "1em",
        border: "2px solid #ffffff"
      },
    },
    cells: {
      style: {
        
      },
    },
  };

class DaftarKeluhan extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
           dataTable : [],
           columns: [],
           pending: true,
           pageData: {
               category : []
           }

        }
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    handleGetContent = (nicename, pathName) => {
        let data = {
            nicename : this.props.nicename
        };

        axios.post(apiRequest.getBaseApiUrl() + '/content', data)
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    pageData: response.data.data,
                    curNicename: nicename
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    handleGetDataTable = () => {
        axios.get(apiRequest.getBaseApiUrl() + '/keluhan')
        .then(function (response) {
            if(response.data.success){

                let col = [];

                let i=0;
                while(i<response.data.data.column.length){
                    col.push(
                        {
                            name: response.data.data.column[i].label,
                            selector: response.data.data.column[i].value,
                            sortable: true,
                            style: {
                                border: "2px solid #ffffff"
                            },
                        }
                    )
                    
                    i++;
                }

                col.push(
                    {
                        name: 'Detail',
                        button: true,
                        cell: row => row.is_download === 0 ? <span></span> : <a tyle={{cursor: "pointer"}} target="_blank" rel="noopener noreferrer" onClick={()=>this.previewPDF(row.file_download, row.is_download )}>Click Here</a> ,
                        style: {
                            border: "2px solid #ffffff"
                        },
                    },
                )
                    

                this.setState({
                    dataTable: response.data.data.list_data,
                    columns: col,
                    pending: false
                })
            }
            else{
                this.setState({
                    dataTable: [],
                    columns:[],
                    pending: false
                })
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    previewPDF = (url, isDownload) =>{
        this.props.handleShowPDFPopUp(url, isDownload);
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
        this.handleGetContent(this.props.nicename);
        this.handleGetDataTable();
    }

    render(){
        
        const { pageData, pending, dataTable, columns, curNicename } = this.state;
        const { subMenuRight } = this.props;

        return(
            <div className="row box-content">

                {/* Banner Header */}
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src={isMobile ? pageData.banner_mobile : pageData.banner}  alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageData.title}</h1>
                </div>

                
                {/* With Right Sub Menu */}
                {
                    subMenuRight.length > 0 &&
                    <React.Fragment>
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="row cont-table">
                                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-table">
                                    <DataTable
                                        title=""
                                        columns={columns}
                                        data={dataTable}
                                        customStyles={customStyles}
                                        striped={true}
                                        style={{border:"1px solid #AEAEAE"}}
                                        noHeader={true}
                                        pagination={true}
                                        progressPending={pending}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div className="sub-menu-right">

                                {subMenuRight.map((menu, idxMenu) => {
                                    return  <div key={idxMenu}>
                                            <h3 className="txt-uppercase m-b-10 p-l-15">{menu.name}</h3>
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
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default DaftarKeluhan;