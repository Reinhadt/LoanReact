import React, {Component} from 'react';
import {connect} from 'react-redux'

import * as homeActions from '../../store/actions/'
import Title from '../../components/UI/Title'
import Spinner from '../../components/UI/Spinner'
import Carousel from '../../components/UI/carousel/Carousel'
import Aux from '../../hoc/Auxiliar'

class Home extends Component{

    componentWillMount(){
        
        this.props.onInitReviews(process.env.REACT_APP_HOME_ENDPOINT);
    }

    render() {

        let home = this.props.error ? <Spinner /> : <Spinner />
        if(this.props.title){
            home = (
                <div className="container homeContainer content">
                    <Title text={this.props.title} />
                    <Carousel elements={this.props.reviews} />
                </div>
            )
        }
        return(
            <Aux>
                {home}
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        title   : state.home.title,
        reviews : state.home.reviews,
        error   : state.home.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitReviews: (end) => dispatch(homeActions.initData(end))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);