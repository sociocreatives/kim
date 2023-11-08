import Footer from "./Footer";
import Navbar from "./Navbar";
import { AuthContextProvider } from '../context/AuthContext';

const  Layout = ({ children }) => {
    return (
        <div className="layout">
            <AuthContextProvider>
                <Navbar />
                    {children}
                <Footer />
            </AuthContextProvider>
        </div>
    );
}
export default Layout;