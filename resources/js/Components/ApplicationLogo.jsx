export default function ApplicationLogo({   colored=true,
                                            width = "126.879", height = "56.957",
                                            stroke = "",
                                            startStroke =  "rgba(255, 224, 224)" ,
                                            stopStroke = "rgba(196, 242, 255)" ,

                                            ...props
                                        }) {
    return (
        <svg
            {...props}
            className="mx-auto"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 128 58"
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
        >
            <defs>
                <linearGradient id="myGradient">
                    <stop offset="0%" stop-color={stopStroke}/>
                    <stop offset="100%" stop-color={startStroke}/>
                </linearGradient>
            </defs>
            <g
                id="svgGroup"

                stroke={stroke}
                fill="url(#myGradient)"
            >
                <path
                    d="M 26.172 0 L 36.035 0 L 25.977 55.957 L 9.961 55.957 L 0 0 L 9.375 0 L 16.406 47.949 L 19.238 47.949 L 26.172 0 Z M 114.355 7.129 L 114.355 55.957 L 106.934 55.957 L 106.934 7.129 L 94.824 7.129 L 94.824 0 L 125.879 0 L 125.879 7.129 L 114.355 7.129 Z M 68.945 55.957 L 47.949 55.957 L 47.949 0 L 69.922 0 L 78.906 12.988 L 78.906 43.945 L 68.945 55.957 Z M 55.371 7.031 L 55.371 48.34 L 68.164 48.34 L 70.117 45.996 L 70.117 9.961 L 68.164 7.031 L 55.371 7.031 Z"
                    vectorEffect="non-scaling-stroke"
                />
            </g>
        </svg>
    );
}
