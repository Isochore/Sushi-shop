import Image from 'next/image'
import About from '@/components/About';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Popular from '@/components/Popular';
import Subscribe from '@/components/Subscribe';
import Trending from '@/components/Trending';

const Home = () => {
  return (
    <main>
        <Header />
        <Hero />
        <About />
        <Popular />
        <Trending />
        <Subscribe />
        <Footer />
    </main>
  )
}

export default Home;