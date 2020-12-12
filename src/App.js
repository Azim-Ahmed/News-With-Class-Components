import React, { Component } from 'react'
import './app.css'
import Header from './components/Homes/Header/Header'
import News, { newsCategory } from './News'
import NewsList from './components/Homes/NewsList/NewsList.jsx'
import Pagination from './components/Homes/Header/Pagination/Pagination'
import Filtration from './components/Homes/Header/Pagination/Filtration/Filtration'
import Loading from './components/Homes/Loading/Loading'
import MainPart from './components/Homes/MainPart/MainPart'

const news = new News(newsCategory.technology)
class App extends Component {

    state = {
        data: {},
        isLoading: true
    }

aboutResult = React.createRef()
searchRef = React.createRef()

    componentDidMount() {
        news.getNews()
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(e => {
                console.log(e);
                alert("something went wrong")
                this.setState({ isLoading: false })
            })

            //using Ref
            //console.dir(this.aboutResult.current);
            this.searchRef.current.focus();
    }

    next = () => {
        if (this.state.data.isNext) {
            this.setState({ isLoading: true })
        }
        news.next()
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(e => {
                console.log(e);
                alert("something went wrong")
                this.setState({ isLoading: false })
            })
    }
    prev = () => {
        if (this.state.data.isPrevious) {
            this.setState({ isLoading: true })
        }
        news.prev()
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(e => {
                console.log(e);
                alert("something went wrong")
                this.setState({ isLoading: false })
            })
    }

    handlePageChange = value => {
        this.setState({
            data: {
                ...this.state.data,
                currentPage: Number.parseInt(value)
            }
        })
    }

    changeCategory = category => {
        this.setState({ isLoading: true })
        news.changeCategory(category)
            .then(data => this.setState({ data, isLoading: false }))
            .catch(e => {
                console.log(e);
                alert("something went wrong")
                this.setState({ isLoading: false })
            })
    }
    search = searchTerm => {
        this.setState({ isLoading: true })
        news.search(searchTerm)
            .then(data => this.setState({ data, isLoading: false }))
            .catch(e => {
                console.log(e);
                alert("something went wrong")
                this.setState({ isLoading: false })
            })
    }


    goToPage = () => {
        this.setState({ isLoading: true })
        news.setCurrentPage(this.state.data.currentPage)
            .then(data => {
                this.setState({ data, isLoading: false })
            })
            .catch(e => {
                console.log(e);
                alert("something went wrong")
                this.setState({ isLoading: false })
            })
    }

    goToTop = () => {
window.scroll(0, this.aboutResult.current.scrollTop)
    }


    render() {
        const { article, isPrevious, isNext, category, totalResults, currentPage, totalpage } = this.state.data

        
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header ref={this.searchRef} search={this.search} changeCategory={this.changeCategory} category={category} />
                        <Filtration ref={this.aboutResult} totalResults={totalResults} currentPage={currentPage} totalpage={totalpage} />
                        {this.state.isLoading ? (<Loading />) : (<div>
                            <NewsList news={article} />
                            <Pagination
                                next={this.next}
                                prev={this.prev}
                                isPrevious={isPrevious}
                                isNext={isNext}
                                totalpage={totalpage}
                                currentPage={currentPage}
                                goToPage={this.goToPage}
                                handlePageChange={this.handlePageChange}
                            />
                            <button className="btn btn-dark my-5"
                            onClick={this.goToTop}
                            >Go to Top</button>
                        </div>
                        )}
                        <MainPart/>
                    </div>
                </div>
            </div>
        )

    }

}
export default App