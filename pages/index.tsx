import type { NextPage } from 'next'
import SliderComponent from '../components/home/SliderComp'

import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div>
            <SliderComponent />
        </div>
    );
}

export default Home;