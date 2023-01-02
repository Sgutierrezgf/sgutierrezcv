import Menu from '../pages/Menu';
import Footer from '../pages/Footer';


const Layout = ({ children }: any) =>(
    <div>
        <Menu/>
        {children}
        <Footer/>
    </div>
)

export default Layout;