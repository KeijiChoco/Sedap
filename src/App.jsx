import "./assets/tailwind.css";
import Loading from "./components/Loading";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

const DashboardAdmin = React.lazy(() => import("./pages/DashboardAdmin"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const AboutUs = React.lazy(() => import("./components/AboutUs"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const Error404 = React.lazy(() => import("./pages/Error404"));
const OrderList = React.lazy(() => import(".//components/OrderList"));
const CustomerList = React.lazy(() => import("./components/CustomerList"));
const OrderForm = React.lazy(() => import("./components/AddOrderForm"));
const CustomerForm = React.lazy(() => import("./components/AddCustomerForm"));
const UserList = React.lazy(() => import("./components/UserList"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Main Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<DashboardAdmin />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/customerform" element={<CustomerForm />} />
          <Route path="/orderform" element={<OrderForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/review" element={<Error400 />} />
          <Route path="/about" element={<Error403 />} />
          <Route path="/contact" element={<Error404 />} />
          <Route path="*" element={<Error404 />} />
        </Route>
        {/* Guest Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<Dashboard />} />
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
