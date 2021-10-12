import type { NextPage } from 'next'
import SliderComponent from '../components/home/SliderComp'
import TopCatComp from '../components/home/TopCatComp'

import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <TopCatComp />
            <SliderComponent />
        </div>
    );
}

export default Home;