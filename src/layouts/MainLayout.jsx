import { Outlet } from "react-router-dom";

import Header from "../components/ui/Header.jsx";

export default function MainLayout() {
    return (
        <main id="about-me" className="w-full h-full flex flex-col bg-background text-text scroll-smooth select-none p-8">
            <div className="w-full h-1/6">
                <Header />
            </div>
            <div className="w-full h-full">
                <Outlet />
            </div>
        </main>
    );
}
