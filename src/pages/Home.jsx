import {createRef, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';
import toast from "react-hot-toast";

import linkedin from "../assets/logo-linkedin.svg";
import github from "../assets/logo-github.svg";
import html from "../assets/logo-html5.svg";
import css from "../assets/logo-css3.svg";
import javascript from "../assets/logo-javascript.svg";
import java from "../assets/logo-java.svg";
import react from "../assets/logo-react.svg";
import springBoot from "../assets/logo-spring-boot.svg";
import GitHubCard from "../components/projects/GitHubCard.jsx";

export default function Home() {
    const githubKey = import.meta.env.VITE_GITHUB_KEY;
    const formspreeKey = import.meta.env.VITE_FORMSPREE_KEY;
    const [repos, setRepos] = useState([]);
    const [state, handleSubmit] = useForm(formspreeKey);
    const emailRef = createRef();
    const messageRef = createRef();

    useEffect(() => {
        const fetchGitHubRepos = async () => {
            const res = await fetch("https://api.github.com/user/repos", {
                method: "GET",
                headers: new Headers({
                    Authorization: `Bearer ${githubKey}`
                })
            });

            const data = await res.json();

            setRepos(res.status === 200 ? data : []);
        }
        
        fetchGitHubRepos();
    }, [githubKey]);

    const Projects = () => {
        if (repos.length === 0) {
            return <span className="font-semibold text-4xl text-center">Loading...</span>;
        }

        return (
            <>
                {repos
                    .filter(repo => repo["private"] === false && repo["owner"]["login"] === "ju-dev-17" && repo["name"] !== "ju-dev-17")
                    .map((repo, i) => (
                        <GitHubCard
                            key={i}
                            link={repo["html_url"]}
                            owner={repo["owner"]["login"]}
                            name={repo["name"]}
                            description={repo["description"]}
                        />
                    ))}
            </>
        );

    }

    useEffect(() => {
        if (state.succeeded) {
            toast.success("Danke für die Nachricht!");
        }
    }, [state]);

    const _handleSubmit = (event) => {
        handleSubmit(event);
        emailRef.current.value = "";
        messageRef.current.value = "";
    }

    return (
        <div className="w-full flex flex-col p-8">
            <section className="w-full h-screen flex flex-col justify-around">
                <div className="flex flex-col items-center justify-around gap-5">
                    <h1 className="text-4xl sm:text-6xl font-bold leading-tight">Fullstack React & <br/>Spring Boot Entwickler 👋</h1>
                    <span className="text-gray-400 text-xl leading-10 sm:text-2xl sm:leading-10">Hi, ich bin Jahid Uddin.<br/> Abiturient, mit dem Ziel professioneller Softwareentwickler zu werden.</span>
                    <div className="flex gap-5">
                        <Link target="_blank" to="https://www.linkedin.com/in/jahid-uddin-410918267/">
                            <img className="w-12 h-12" src={linkedin} alt="Linkedin Logo" />
                        </Link>
                        <Link target="_blank" to="https://github.com/ju-dev-17">
                            <img className="w-12 h-12" src={github} alt="GitHub Logo" />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap justify-around gap-5 sm:gap-0">
                    <img className="w-16 h-16" src={html} alt="HTML Logo" />
                    <img className="w-16 h-16" src={css} alt="CSS Logo" />
                    <img className="w-16 h-16" src={javascript} alt="JavaScript Logo" />
                    <img className="w-16 h-16" src={java} alt="Java Logo" />
                    <img className="w-16 h-16" src={react} alt="React Logo" />
                    <img className="w-16 h-16" src={springBoot} alt="Spring Boot Logo" />
                </div>
            </section>
            <section id="projects" className="w-full h-screen flex flex-col justify-center">
                <div className="grid grid-cols-4 gap-72 2xl:gap-8 overflow-x-scroll">
                    <Projects />
                </div>
            </section>
            <section id="contact" className="w-full h-screen flex flex-col justify-center gap-6">
                <span className="font-bold text-2xl sm:text-3xl">jahid.uddin@outlook.de</span>
                <form onSubmit={_handleSubmit} className="w-full space-y-6">
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-text text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input ref={emailRef} className="appearance-none block w-full bg-secondary text-text rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-background focus:border-accent" name="email" id="email" type="email" />
                        </div>
                    </div>
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-text text-xs font-bold mb-2" htmlFor="grid-password">
                                Nachricht
                            </label>
                            <textarea ref={messageRef} className="no-resize appearance-none block w-full bg-secondary text-text rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-background focus:border-accent h-48 resize-none" name="message" id="message"></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-accent hover:bg-accent focus:shadow-outline focus:outline-none text-text font-bold py-2 px-4 rounded" type="submit">
                                Abschicken
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </section>
        </div>
    );
}
