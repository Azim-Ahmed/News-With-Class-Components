import React, { Component } from 'react';

class Filtration extends Component {
    render() {

        const {totalResults, totalpage, currentPage} = this.props;
        return (
            <div className="d-flex ">
                <p className="text-black-50">
                    About {totalResults} result found 
                    </p>
                    <p className="text-black-50 ml-auto">
                    {currentPage} page of {totalpage}
                    </p>
            </div>
        );
    }
}

export default Filtration;