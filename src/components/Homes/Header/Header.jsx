import React, { Component } from 'react';
import { newsCategory } from '../../../News'


class Header extends Component {

    state = {
        searchTerm: ''
    }



    handleChange = (e) => {
        //Implement 
        this.setState({ searchTerm: e.target.value })

    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.search(this.state.searchTerm)
        }
    }

    // componentDidMount() {
        
    // }
    render() {
        const { category, changeCategory } = this.props
        return (
            <div className="my-4">
                <h1 className="mb-4">Block Buster Headlines</h1>
                <input ref={this.props.innerRef} type="search"
                    className="form-control"
                    placeholder="Type anything to get update and search"
                    value={this.props.searchterm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                <div className="my-4">
                    {
                        newsCategory && Object.keys(newsCategory).map((item, i) => {
                            if (category == newsCategory[item]) {
                                return (
                                    <button onClick={() => { changeCategory(newsCategory[item]) }} className="btn btn-sm btn-warning mr-2 mb-2" key={i}>
                                        {`#${newsCategory[item]}`}
                                    </button>
                                )
                            }
                            return (
                                <button onClick={() => { changeCategory(newsCategory[item]) }} className="btn btn-sm btn-light mr-2 mb-2" key={i}>
                                    {`#${newsCategory[item]}`}
                                </button>
                            )

                        })
                    }
                </div>
            </div>
        );
    }
}



export default React.forwardRef((props, ref) => <Header {...props} innerRef={ref}/>);