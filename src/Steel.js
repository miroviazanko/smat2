import React, {useEffect} from 'react';
import { Outlet } from 'react-router-dom';

import Logo from './components/steel/logo/Logo';
import Menu from './components/steel/menu/Menu';
import Introduction from './components/steel/introduction/Introduction';

import Footer from './components/steel/footer/Footer';



export default function Steel(props) {


    useEffect(() => {
        props.unMount(false)
        return () => {
            props.unMount(true)
        }
    })


    return (

        <>
            <Logo />


                <>
                    <Menu />
                    <Introduction />

                    <Outlet />


                </>



            <Footer />

        </>

    )
}
