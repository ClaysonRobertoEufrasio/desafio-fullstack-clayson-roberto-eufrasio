import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Contats from "../Pages/Contats/Contats";
import Customers from "../Pages/Customers/Customers";

export default function RouteMain() {
    const location = useLocation();

    return (
        <Routes key={location.pathname} location={location}>
            <Route path="/customers" element={<Customers />}/>
            <Route path="/contats" element={<Contats />}/>
            <Route path="*" element={<Navigate replace to="/customers" />} />
        </Routes>
    )
}