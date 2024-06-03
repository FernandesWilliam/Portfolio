export function GlossPolygon({className}) {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink={"http://www.w3.org/1999/xlink"}
                viewBox="0 0 800 800" opacity="1">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%"
                    filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="80" x="0%" y="0%" width="100%" height="100%"
                                in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse rx="153" ry="97" cx="516.621337890625" cy="254.83046470761923"
                     fill="rgba(57, 155, 38, 1.00)"></ellipse>
            <ellipse rx="153" ry="97" cx="716.602388551722" cy="134.33521266757506"
                     fill="hsla(49, 90%, 55%, 1.00)"></ellipse>
        </g>
    </svg>;
}