const ServicesWe = ({children}) => {
    return(
        <div className="flex flex-col gap-3 w-full h-96 p-5">
            <h1 className="text-xl">خدمات ما</h1>
            <div className="grid p-4 gap-4 grid-cols-2 grid-rows-2 w-full h-[90%]">
                {children}
            </div>
        </div>
    )
}
export default ServicesWe