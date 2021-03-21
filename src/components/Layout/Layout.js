import React from "react";
import Auxs from "../../hoc/Auxs";
import classes from './Layout.module.css';

const layout = (props) => (
  <Auxs>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
  </Auxs>
);


export default layout;