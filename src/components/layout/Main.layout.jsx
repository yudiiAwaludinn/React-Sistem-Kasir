import Header from "./Header"
import Footer from "./Footer"


function Mainlayout({ children , showHeader = true}) {
    return (
    <>
        {showHeader && <Header/>}
        {children}
        <Footer/>
    </>
    )
}

export default Mainlayout