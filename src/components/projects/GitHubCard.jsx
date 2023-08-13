import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function GitHubCard({ link, owner, name, description }) {
    return (
        <Link target="_blank" to={link} className="w-72 bg-secondary rounded-lg p-5">
            <div className="flex flex-row">
                <p className="ml-3">
                    <span className="text-gray-500 font-semibold">{owner}/</span>
                    <span className="text-gray-300 font-semibold">{name}</span>
                </p>
            </div>
            <p className="text-xs text-gray-500 mt-3">
                {description}
            </p>
        </Link>
    );
}
