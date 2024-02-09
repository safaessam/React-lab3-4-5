import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar(){
    const myFaves = useSelector((state) => state.Rmovie.movie);

    return (
        <nav className="navbar navbar-expand-lg navbar" id="nav">
            <div className="container-fluid" id="nav">
                <Link className="navbar-brand" to="/">
                   
                    Home
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active navbar-brand" aria-current="page" to="/Fave">
                                   
                                    Favourite ({myFaves.length})
                                </Link>
                        </li>   
                    </ul>
                    <div className="d-flex align-items-center">
                        <Link to="/login" className="nav-link active m-2 navbar-brand" aria-current="page" >
                            Login
                        </Link>
                        <div className="mx-2">|</div> 
                        <Link to="/Registration" className="nav-link navbar-brand" >
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
