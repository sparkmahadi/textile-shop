
import { Outlet } from 'react-router-dom';
import { Nav } from '../pages/Common/Nav/Nav';
import Footer from '../pages/Common/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;