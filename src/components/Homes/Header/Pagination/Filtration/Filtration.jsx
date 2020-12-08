import React, { Component } from 'react';

class Filtration extends Component {
    render() {
        return (
            <div className="d-flex ">
                <p className="text-black-50">
                    About {0} result found 
                    </p>
                    <p className="text-black-50 ml-auto">
                    {1} page of {100}
                    </p>
            </div>
        );
    }
}

export default Filtration;