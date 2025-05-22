const CircleBtn = ({children , onClick}) => {
    return(
        <div onClick={onClick} className="flex items-center justify-center w-10 h-10 rounded-full bg-bgLight dark:bg-bgDark dark:child:fill-textDark overflow-hidden cursor-pointer hover:bg-hoverDark dark:hover:bg-hoverLight">
            {children}
        </div>
    )
}
export default CircleBtn