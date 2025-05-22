const WeblogContainer = ({children}) => {
    return(
        <div className="w-full h-auto p-5 dark:text-textDark dark:child:fill-textDark">
            <h2 className="text-xl">وبلاگ ها</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 w-full h-auto my-4 px-5 lg:px-0">
                {children}
            </div>
        </div>
    )
}
export default WeblogContainer