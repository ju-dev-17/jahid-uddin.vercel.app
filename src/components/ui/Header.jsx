import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        if (!window.location.href.endsWith("/")) {
            navigate("/");
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 bg-background w-full flex justify-between items-center p-8">
            <h1 className="font-bold text-xl cursor-pointer" onClick={() => scrollToSection("about-me")}>Jahid Uddin</h1>
            <nav className="hidden sm:flex items-center gap-10 font-semibold select-none">
                <a className="cursor-pointer" onClick={() => scrollToSection("about-me")}>Über mich</a>
                <a className="cursor-pointer" onClick={() => scrollToSection("projects")}>Projekte</a>
                <a className="cursor-pointer" onClick={() => scrollToSection("contact")}>Kontakt</a>
            </nav>
        </header>
    );
}
