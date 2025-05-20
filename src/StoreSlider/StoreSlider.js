const StoreSlider = ({children}) => {
    return(
        <div className="w-full h-auto p-5 mt-20 bg-red-500">
            <h2 className="text-2xl">محصولات</h2>
            <div className="grid grid-flow-col gap-3 w-full h-auto mt-5 overflow-hidden">
                {children}
            </div>
        </div>
    )
}
export default StoreSlider