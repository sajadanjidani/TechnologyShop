const CircleBtn = ({children}) => {
    return(
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-bgLight overflow-hidden cursor-pointer hover:bg-hoverLight">
            {children}
        </div>
    )
}
export default CircleBtn