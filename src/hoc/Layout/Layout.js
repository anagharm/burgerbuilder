import React , { Component } from "react";
import Auxs from "../Auxs/Auxs";
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
  state={
    showSideDrawer: true
  }
  sideDrawerClosedHandler = () => {
    console.log("sideDrawerClosedHandler")
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((prevState) =>{
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }

  render(){
    return (
      <Auxs>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
      </Auxs>
    )
  }
}

export default Layout;