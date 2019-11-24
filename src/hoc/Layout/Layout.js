import React, {useState} from 'react';
import {connect} from 'react-redux';
import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

const layout = (props) => {
    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);
    const sideDrawerClosedHandler = () => {
        setSideDrawerVisible(false);
    };
    const sideDrawerToggleHandler = () => {
        setSideDrawerVisible(!sideDrawerVisible);
    };

    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={sideDrawerToggleHandler}/>
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={sideDrawerVisible}
                closed={sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);