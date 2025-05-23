import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameworkList from "./FrameworkList";
import Products from "./Products";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";

createRoot (document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
            {/* <FrameworkListSearchFilter/> */}
            <Products/>
        </div>
    )