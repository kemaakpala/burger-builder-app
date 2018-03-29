import React, {Component} from 'react'
import {connect} from 'react-redux'

import Aux from '../Auxillary/Auxillary'
import classes from './Layout.css'
import ToolBar from "../../components/Navigation/ToolBar/ToolBar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"

class Layout extends Component {
    state= {
        showSideDrawer : false
    }

    SideDrawerOpenHandler = () => {
        this.setState((prevState) => { 
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <ToolBar 
                    isAuth={this.props.isAuthenticated}
                    openSideDrawer={this.SideDrawerOpenHandler}/>
                <SideDrawer 
                    isAuth={this.props.isAuthenticated}
                    open= {this.state.showSideDrawer} closed = {this.SideDrawerClosedHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}


const mapStateToProps = state=> {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout)