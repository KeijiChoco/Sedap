import { BsFillPeopleFill } from "react-icons/bs"; 
import { MdBorderColor } from "react-icons/md"; 
import { MdDashboard } from "react-icons/md"; 

export default function ListMenu() {
    return (
        <div id="list-menu" className="mt-10">
            <ul id="menu-list" className="space-y-3">
                <li>
                    <div id="menu-1" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><MdDashboard className="mr-4 text-x1"/>Dashboard</div>
                </li>
                <li>
                    <div id="menu-2" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><MdBorderColor className="mr-4 text-x1"/>Orders</div>
                </li>
                <li>
                    <div id="menu-3" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><BsFillPeopleFill className="mr-4 text-x1"/>Customers</div>
                </li>
                <hr></hr>
                <li>
                    <div id="menu-4" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"><BsFillPeopleFill className="mr-4 text-x1"/>Analytic</div>
                </li>
                <li>
                    <div id="menu-5" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">Reviews</div>
                </li>
                <li>
                    <div id="menu-6" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">Food Detail</div>
                </li>
                <li>
                    <div id="menu-7" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">Customer</div>
                </li>
            </ul>
        </div>
    );
}