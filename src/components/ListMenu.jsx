import { FaUserAlt } from "react-icons/fa"; 
import { AiOutlineUser } from "react-icons/ai"; 
import { MdPermContactCalendar } from "react-icons/md"; 
import { FcAbout } from "react-icons/fc"; 
import { MdReviews } from "react-icons/md"; 
import { BsFillPeopleFill } from "react-icons/bs"; 
import { MdBorderColor } from "react-icons/md"; 
import { MdDashboard } from "react-icons/md"; 
import { NavLink } from "react-router-dom";

export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (
        <div id="list-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <NavLink id="menu-1" to="/" className={menuClass}><MdDashboard className="mr-4 text-x1"/>Dashboard</NavLink>
                </li>
                <li>
                    <NavLink id="menu-2" to="/orders" className={menuClass}><MdBorderColor className="mr-4 text-x1"/>Orders</NavLink>
                </li>
                <li>
                    <NavLink id="menu-3" to="/customers" className={menuClass}><BsFillPeopleFill className="mr-4 text-x1"/>Customers</NavLink>
                </li>
                <li>
                    <NavLink id="menu-4" to="/users" className={menuClass}><FaUserAlt className="mr-4 text-x1"/>Users</NavLink>
                </li>
                <hr />
                <li>
                    <NavLink id="menu-4" to="/review" className={menuClass}><MdReviews className="mr-4 text-x1"/>Review</NavLink>
                </li>
                <li>
                    <NavLink id="menu-5" to="/about" className={menuClass}><FcAbout className="mr-4 text-x1"/>About</NavLink>
                </li>
                <li>
                    <NavLink id="menu-6" to="/contact" className={menuClass}><MdPermContactCalendar className="mr-4 text-x1"/>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}