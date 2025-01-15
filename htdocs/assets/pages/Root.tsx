import React from "react"
import {NavLink, Outlet, useNavigation} from "react-router";
import {ROUTEURL} from "./App";
import Spinner from "./DragCard/Spinner";

export default function Root() {
    const {state} = useNavigation();
    return (
        <div className={'container'}>
            <div className={'row'}>
                <nav className={'col-12'}>
                    <NavLink className={'btn btn-primary m-1'} to={ROUTEURL.home}>Home</NavLink>
                    <NavLink className={'btn btn-primary m-1'} to={ROUTEURL.myform}>My form</NavLink>
                    <NavLink className={'btn btn-primary m-1'} to={ROUTEURL.dragcard}>Drag card</NavLink>
                    <NavLink className={'btn btn-primary m-1'} to={ROUTEURL.blog}>Mon blog</NavLink>
                    <NavLink className={'btn btn-primary m-1'} to={ROUTEURL.blog2}>Mon blog 2</NavLink>
                    <NavLink className={'btn btn-primary m-1'} to={ROUTEURL.article + '1'}>Article 1</NavLink>
                </nav>
                <div className={'col-12'}>
                    {state === 'loading' && <Spinner/>}
                </div>

            </div>
            <Outlet/>
        </div>
    )
}
