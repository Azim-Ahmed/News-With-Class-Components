import React, { Component } from 'react'
import axios from 'axios'
import './app.css'
import Header from './components/Homes/Header/Header'
import News, { newsCategory } from './News'
import NewsList from './components/Homes/NewsList/NewsList.jsx'
import Pagination from './components/Homes/Header/Pagination/Pagination'
import Filtration from './components/Homes/Header/Pagination/Filtration/Filtration'
import Loading from './components/Homes/Loading/Loading'


class App extends Component {

    state = {
        news: [],
        category: newsCategory.technology
    }

    changeCategory = (category) => {
        console.log(category);
        this.setState({
            category
        })
    }


    componentDidMount() {
        // const url = `${process.env.REACT_APP_URL}?apikey=${process.env.REACT_APP_API}&category=${this.state.category}&pageSize=5`
        // axios.get(url).then(response =>
        //     this.setState({
        //         news: response.data.articles
        //     })
        // )
        //     .catch(error => console.log(error))
        const news = new News (newsCategory.technology)
        news.getNews().then(data =>{
            console.log(data);
        })
    }

    componentDidUpdate(prevProps, prevState) {
        //    if( this.state.category !== prevState.category){
        //     const url = `${process.env.REACT_APP_URL}?apikey=${process.env.REACT_APP_API}&category=${this.state.category}&pageSize=5`
        //     axios.get(url).then(response =>
        //         this.setState({
        //             news: response.data.articles
        //         })
        //     )
        //         .catch(error => console.log(error))
        //    }

    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header changeCategory={this.changeCategory} category={this.state.category} />
                        <Filtration />
                        <NewsList news={this.state.news} />
                        <Pagination />
                        <Loading />
                    </div>
                </div>
            </div>
        )

    }

}
export default App



// import React from 'react'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Home from './components/Home/Home';
// import './app.css'
// import Privacy from './components/Privacy/Privacy';
// import Terms from './components/Terms/Terms';
// import NotFound from './components/NotFound/NotFound';

// const App = () => {
//     return (
//         <Router>
//             <Switch>
//                 <Route exact path="/">
//                     <Home />
//                 </Route>
//                 <Route path="/privacy">
//                     <Privacy />
//                 </Route>
//                 <Route path="/terms">
//                     <Terms />
//                 </Route>
//                 <Route path="*">
//                     <NotFound />
//                 </Route>
//             </Switch>
//         </Router>
//     )
// }

// export default App