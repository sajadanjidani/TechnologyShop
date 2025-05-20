const ServicesItem = ({children, title , content , iconColor , iconBgColor}) => {
    return(
        <div className="flex items-center px-5 w-full h-full rounded-lg bg-white">
            {/* icon container */}
            <div id="iconContainer" className="w-14 h-5/6 rounded-full" style={{ backgroundColor: iconBgColor }}>
                <div className="flex relative child:absolute child:top-7 child:-left-5" style={{ fill: iconColor }}>{children}</div>
            </div>
            {/* content container */}
            <div className="grid py-5 items-center justify-center w-full h-full pr-8">
                <h2>{title}</h2>
                <p className="leading-7">{content}</p>
            </div>
        </div>
    )
}
export default ServicesItem