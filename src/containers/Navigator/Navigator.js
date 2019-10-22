import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as menuActions from '../../store/actions/'

import GridHandler from '../../hoc/GridHandler'
import WidthHandler from '../../hoc/WidthHandler'
import Logo from '../../components/Navigation/Logo'
import NavigationItems from '../../components/Navigation/NavigationItems'

class Navigator extends Component {

    componentWillMount(){
        //
        this.props.onLoadData(process.env.REACT_APP_GLOBALDATA_ENDPOINT)
    }

    render() {
        return(
            <header className="header">
                <GridHandler>
                    <WidthHandler width={4}>
                        <Logo />
                    </WidthHandler>
                    <WidthHandler width={8}>
                        <nav>
                            <NavigationItems items={this.props.items} />
                        </nav>
                    </WidthHandler>
                </GridHandler>
                
            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.menu.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadData: (end) => dispatch(menuActions.initData(end))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigator);