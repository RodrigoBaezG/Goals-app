import LinkCss from "./Link.module.css";

function Link ({children, text, href}){
    return (
        <a href={href} className={LinkCss.element}>
            {children}
            {text && <span className={LinkCss.text}>{text}</span>}
        </a>
    );
}

export default Link;