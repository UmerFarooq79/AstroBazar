import React, { useEffect } from 'react';
import CardRecentOrders from '~/components/shared/cards/CardRecentOrders';
import CardSaleReport from '~/components/shared/cards/CardSaleReport';
import CardEarning from '~/components/shared/cards/CardEarning';
import CardStatics from '~/components/shared/cards/CardStatics';
import ContainerDashboard from '~/components/layouts/ContainerDashboard';
import { useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import CardTopCountries from '~/components/shared/cards/CardTopCountries';
import Link from 'next/link';
import Router, { Routes, useRouter } from 'next/router';

import LoginForm from './login';
import RegistrationForm from './register';

const Index = () => {
    


    const router = useRouter();

    // Render the appropriate form based on the current route
    let component;
    if (router.pathname === '/') {
      component = <LoginForm /> 
    } else if (router.pathname === '/register') {
      component = <RegistrationForm />;
    }
    // else if (router.pathname == '/home') {
    //     component =  <ContainerDashboard title="Dashboard">
    //     <section className="ps-dashboard" id="homepage">
    //         <div className="ps-section__left">
    //             <div className="row">
    //                 <div className="col-xl-8 col-12">
    //                     <CardSaleReport />
    //                 </div>
    //                 <div className="col-xl-4 col-12">
    //                     <CardEarning />
    //                 </div>
    //             </div>
    //             <CardRecentOrders />
    //         </div>
    //         <div className="ps-section__right">
    //             <CardStatics />
    //             <CardTopCountries />
    //         </div>
    //     </section>
    // </ContainerDashboard>;
    //   }
    return (
        <>
        {/* {router.pathname !== '/' && (
        <nav>
          <Link href="/"><a>Home</a></Link>
          <Link href="/login"><a>Log In</a></Link>
          <Link href="/register"><a>Sign Up</a></Link>
        </nav>
      )} */}
      {component}
      
        {/* <ContainerDashboard title="Dashboard">
            <section className="ps-dashboard" id="homepage">
                <div className="ps-section__left">
                    <div className="row">
                        <div className="col-xl-8 col-12">
                            <CardSaleReport />
                        </div>
                        <div className="col-xl-4 col-12">
                            <CardEarning />
                        </div>
                    </div>
                    <CardRecentOrders />
                </div>
                <div className="ps-section__right">
                    <CardStatics />
                    <CardTopCountries />
                </div>
            </section>
        </ContainerDashboard> */}
        </>
    );
};


export default Index;
