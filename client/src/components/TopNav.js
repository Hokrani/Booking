import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from 'react-router-dom';


const TopNav = () => {
    const { auth } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();
    // const history = useHistory();

    const logout = () => {

        dispatch({
            type: 'LOGOUT',
            payload: null,
        })
        window.localStorage.removeItem("auth");
        // history.push("/login");
    }
    return (
        <div className="nav bg-light d-flex justify-content-between">

            <Link className="nav-link" to="/">Home </Link>
            {auth && <a className="nav-link pointer" onClick={logout}>Logout</a>}
            {!auth && (<>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
            </>)}


        </div>
    )
}

export default TopNav;