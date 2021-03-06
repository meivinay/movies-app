import React, { Component } from 'react';
import "./Pagination.css"
class Pagination extends Component {
    state = {}
    render() {
        return (
            <>
                <nav >
                    <ul className="pagination justify-content-center">
                        {this.props.currPage === 1 ? <li className="page-item disabled"><a className="page-link" aria-disabled="true">Previous</a></li> 
                                                : <li className="page-item"  onClick = {()=>{this.props.previousPage()}}><a className="page-link">Previous</a></li> 
                        }
                            {
                            this.props.pages.map((el)=>{
                                console.log(el+"el is");
                                return (
                                    // conditional rendering
                                    this.props.currPage === el ? 
                                    <li className="page-item active"><a className="page-link" >{el}</a></li>      
                                    :
                                    <li className="page-item" onClick = {()=>{
                                        this.props.setPage(el)}}>
                                    <a className="page-link" >{el}</a></li>      
                                    
                                )
                            })
                        }

                        {this.props.currPage === this.props.pages.length ? <li className="page-item disabled"><a className="page-link" aria-disabled="true">Next</a></li>
                                                                        : <li className="page-item" onClick = {()=>{this.props.nextPage()}}><a className="page-link">Next</a></li>
                        }
                    </ul>
                </nav>
            </>
        );
    }
}

export default Pagination;