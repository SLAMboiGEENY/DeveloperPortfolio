import React from 'react'
import Head from 'next/head';

const Layout = (props) => {
    const { children, pageTitle } = props;
    return (
        <>  
            <div>{children}</div>
        </>
    ); 
};   

export default Layout;   