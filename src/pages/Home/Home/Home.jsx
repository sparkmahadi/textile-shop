
// import Counter from '../Counter/Counter';
// import Creative from '../Creative/Creative';
// import Different from '../Different/Different';
// import Explore from '../Explore/Explore';
// import Reviews from '../Reviews/Reviews';
import Hero from '../Hero/Hero';
// import Popular from '../Popular/Popular';
import FAQ from '../FAQ/FAQ';

const Home = () => {
    return (
        <div className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 py-10'>
            <Hero></Hero>
            {/* <Popular></Popular>
            <Creative></Creative>
            <Different></Different>
            <Counter></Counter>
            <Explore></Explore>
            <Reviews></Reviews> */}
            <FAQ></FAQ>
        </div>
    );
};

export default Home;