import { Route, Routes } from "react-router-dom";
import { DetailPage } from "../pages/DetailPage";
import { HomePage } from "../pages/HomePage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/detalhes/:id" element={<DetailPage />}/>

            <Route path="*" element={<HomePage />}/>
        </Routes>
    )
}