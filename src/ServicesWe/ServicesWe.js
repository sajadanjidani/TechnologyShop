const ServicesWe = ({children}) => {
    return(
        <div className="flex flex-col gap-3 w-full h-auto p-5 dark:text-textDark">
            <h1 className="text-xl">خدمات ما</h1>
            <div className="grid md:p-4 gap-4 md:grid-cols-2 md:grid-rows-2 w-full h-[90%]">
                {children}
            </div>
        </div>
    )
}
export default ServicesWe