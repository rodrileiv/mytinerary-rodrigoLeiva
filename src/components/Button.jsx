import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ img, text, to, onClick, className }) => (
    <Link className={className} to={to}>
    <button onClick={onClick}>
        <span className="absolute inset-0 translate-x-0 translate-y-0 bg-stone-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="button-text relative flex items-center gap-0.5 border-2 border-current px-4 py-2 text-sm font-bold tracking-widest text-white group-active:text-opacity-75">
            {img}
            <span>{text}</span>                 
        </span>
    </button>
    </Link>
);

export default Button;