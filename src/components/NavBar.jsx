import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import useLogout from "../Utils/useLogout"; 

const NavBar = ()=> {
  const user = useSelector((state)=> state.user);
  const logout = useLogout();
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">TENDER UI</a>
  </div>
  <div className="flex gap-2">
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    { user && (<p>Welecome {user.firstName}</p>)}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        {user && (<div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user ? user.photoUrl : '/assets/logo.png'} />
        </div>)}
        {!user && (<div className="h-10 rounded"> </div>)}
      </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link className="justify-between" to="/profile" >
                  Profile
                </Link>
              </li>
              <li>
                <Link className="justify-between" to="/feed" >
                  feed
                </Link>
              </li>
              <li><Link to="/updatePeofile">Update Profile</Link></li>
              <li ><Link to="/myConnections">My connections</Link></li>
              <li ><Link to="/newConnections">New requests</Link></li>
              {/* <li ><Link to="/signup">New requests</Link></li> */}
              <li onClick={logout}><Link to="/login">Logout</Link></li>
            </ul>
    </div>
  </div>
</div>
    )
}

export default NavBar
