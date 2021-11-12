import React from 'react'
import Banner from './Banner'
import Menu from './Menu'
import Offers from './Offers'
import Services from './Services'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Menu />
            <Services />
            <Offers></Offers>
        </div>
    )
}

export default Home
