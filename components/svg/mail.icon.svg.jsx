export function MailIconSvg({className, svgColor, onClick}) {
    return <svg className={className} onClick={onClick}
                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill={svgColor}/>
        <line x1="10" y1="14" x2="21" y2="3"/>
        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"/>
    </svg>;


}