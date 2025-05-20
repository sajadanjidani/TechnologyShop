const StoreSlider = ({children , title}) => {
    return(
        <div className="w-full h-auto p-5 mt-14">
            <h2 className="text-xl">{title}</h2>
            <div className="grid grid-flow-col gap-3 w-full h-auto mt-5 overflow-hidden">
                {children}
            </div>
        </div>
    )
}
export default StoreSlider