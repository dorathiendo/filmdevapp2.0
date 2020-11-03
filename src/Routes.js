import {Route, Switch, useLocation} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Home from "./pages/Home";
import React from "react";
import './Routes.scss';

export default function Routes() {
    const location = useLocation();
    return (
        <div className="routes">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    classNames="page"
                    timeout={300}
                >
                    <Switch>
                        <Route exact="/">
                            <Home />
                        </Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}