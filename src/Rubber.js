import React, {useEffect} from 'react';

import { Outlet } from 'react-router-dom';

import Logo from './components/rubber/logo/Logo';
import Menu from './components/rubber/menu/Menu';
import Introduction from './components/rubber/introduction/Introduction';
import Footer from './components/rubber/footer/Footer';


export default function Rubber(props) {

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


                        <Outlet/>

                    </>



                <Footer />

            </>
    )
}
