import React, { Component } from 'react'
import {isMobile} from 'react-device-detect';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import Format1 from '../../components/format/format_1';
import Format2 from '../../components/format/format_2';
import Format3 from '../../components/format/format_3';
import Format4 from '../../components/format/format_4';
import Format5 from '../../components/format/format_5';
import Format6 from '../../components/format/format_6';
import Format7 from '../../components/format/format_7';
import Format8 from '../../components/format/format_8';
import Format9 from '../../components/format/format_9';
import Format10 from '../../components/format/format_10';
import Format11 from '../../components/format/format_11';
import Format12 from '../../components/format/format_12';
import Format13 from '../../components/format/format_13';

const apiRequest = new ApiRequest();

class CustomPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
           pageData: {
               category : []
           },
           currPageNo: 1,
           labelButtonReadMore: ""
        }
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    handleGetContent = (nicename, pageNo) => {
        let data = {
            nicename : this.props.nicename,
            page: pageNo
        };

        axios.post(apiRequest.getBaseApiUrl() + '/content', data)
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    pageData: response.data.data,
                    curNicename: nicename,
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    handleGetLabelReadMore = () => {
        axios.get(apiRequest.getBaseApiUrl() + '/readmore')
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    labelButtonReadMore: response.data.data,
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }



    handleChangePageNumber = (number) =>{
        this.setState({
            currPageNo: number
        });

        this.handleGetContent(this.props.nicename, number);
    }


    renderPagination = (currentPage, lastPage) => {

        let pages = [];
        for(let i=1; i<=lastPage; i++){
            pages.push(i);
        } 

        return <div className="paging">
            <ul>
                {
                    this.state.currPageNo !== 1 ? 
                    <li className="ready" onClick={() => this.handleChangePageNumber(1)}>FIRST</li>
                    :
                    <li className="disable">FIRST</li>
                }

                {
                     this.state.currPageNo > 1 ? 
                     <li className="ready" onClick={() => this.handleChangePageNumber(currentPage-1)}>PREV</li>
                     :
                     <li className="disable">FIRST</li>
                }

                {
                    pages.map((page, idx) => {
                        if(this.state.currPageNo === page){
                            return <li key={idx} className="active">{page}</li>
                        }
                        else{
                            if(currentPage<lastPage-2){
                                if(idx+1 >= currentPage && idx+1 < currentPage+2){
                                    return <li key={idx} className="ready" onClick={() => this.handleChangePageNumber(page)}>{page}</li>
                                }
                                else if(idx+1 >= currentPage && idx+1 === currentPage+3){
                                    return <li key={idx} className="dot">...</li>
                                }
                                else if(idx+1 > (lastPage-2)){
                                    return <li key={idx} className="ready" onClick={() => this.handleChangePageNumber(page)}>{page}</li>
                                }
                                else{
                                    return "";
                                }
                            }
                            else{
                                if(idx+1 === (lastPage-6)){
                                    return <li key={idx} className="dot">...</li>
                                }
                                
                                else if(idx+1 > (lastPage-5)){
                                    return <li key={idx} className="ready" onClick={() => this.handleChangePageNumber(page)}>{page}</li>
                                }

                                else{
                                    return "";
                                }
                            }
                        }
                    })
                }

                {
                    this.state.currPageNo < lastPage ? 
                    <li className="ready" onClick={() => this.handleChangePageNumber(currentPage+1)}>NEXT</li>
                    :
                    <li className="disable">NEXT</li>
                }

                {
                    lastPage > 1 && this.state.currPageNo !== lastPage ? 
                    <li className="ready" onClick={() => this.handleChangePageNumber(lastPage)}>LAST</li>
                    :
                    <li className="disable">LAST</li>
                }

               
            </ul>
        </div>
    }

    handleRenderContent = (pageData, subRight, labelButtonReadMore) => {
        return(pageData.category.map((category, idxCategory) => {
                        
            return(<React.Fragment key={idxCategory}>
                    {category.name !== null && category.name !== "" && category.show_name === 1 &&
                        <div key={idxCategory} className="col-12 box-title-category">
                            <h2 className="txt-uppercase txt-clr-green-1">{category.name}</h2>
                        </div>
                    }
                    
                    {category.content.map((content, idxContent) => {
                        switch(content.format){
                            case 1:
                                return  <Format1 key={idxContent} content={content} subRight={subRight} />
                            case 2:
                                return  <Format2 key={idxContent} content={content} subRight={subRight}  />
                            case 3:
                                return  <Format3 key={idxContent} content={content} subRight={subRight}  />
                            case 4:
                                return  <Format4 key={idxContent} content={content} subRight={subRight}  />
                            case 5:
                                return  <Format5 key={idxContent} content={content} subRight={subRight}  />
                            case 6:
                                return  <Format6 key={idxContent} content={content} subRight={subRight}  />
                            case 7:
                                return  <Format7 key={idxContent} content={content} subRight={subRight} labelButtonReadMore={labelButtonReadMore} />
                            case 8:
                                return  <Format8 key={idxContent} content={content} subRight={subRight} labelButtonReadMore={labelButtonReadMore} />
                            case 9:
                                return  <Format9 key={idxContent} content={content} subRight={subRight} handleChangePage={this.handleChangePage} labelButtonReadMore={labelButtonReadMore} />
                            case 10:
                                return  <Format10 key={idxContent} content={content} subRight={subRight} handleChangePage={this.handleChangePage} labelButtonReadMore={labelButtonReadMore} />
                            case 11:
                                return  <Format11 key={idxContent} content={content} subRight={subRight} handleChangePage={this.handleChangePage}  />
                            case 12:
                                return  <Format12 key={idxContent} content={content} subRight={subRight} handleShowPDFPopUp={this.props.handleShowPDFPopUp} />
                            case 13:
                                return  <Format13 key={idxContent} content={content} subRight={subRight} handleShowVideoPopUp={this.props.handleShowVideoPopUp} />
                            
                            default:
                                return "";
                        }
                    })}

                    { 
                        category.pagination === 1 && 
                        this.renderPagination(category.current_page, category.lastPage) 
                    }
                </React.Fragment>
            );
        }));
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
        this.handleGetContent(this.props.nicename, 1);
        this.handleGetLabelReadMore();
    }

    render(){
        
        const { pageData, curNicename, labelButtonReadMore } = this.state;
        const { subMenuRight } = this.props;

        return(
            <div className="row box-content">

                {/* Banner Header */}
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src={isMobile ? pageData.banner_mobile : pageData.banner} alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageData.title}</h1>
                </div>

                {/* Content | Cek Format Component */}
                
                {/* Without Right Sub Menu */}
                { 
                    subMenuRight.length === 0 &&
                    <React.Fragment>
                        { this.handleRenderContent(pageData, false, labelButtonReadMore) }
                    </React.Fragment>
                }

                {/* With Right Sub Menu */}
                {
                    subMenuRight.length > 0 &&
                    <React.Fragment>
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="row">
                            <React.Fragment>
                                { this.handleRenderContent(pageData, true) }
                            </React.Fragment>
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

export default CustomPage;