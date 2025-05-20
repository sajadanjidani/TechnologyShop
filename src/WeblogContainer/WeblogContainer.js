const WeblogContainer = ({children}) => {
    return(
        <div className="w-full h-auto p-5">
            <h2 className="text-xl">وبلاگ ها</h2>
            <div className="grid gap-5 grid-cols-4 grid-rows-1 w-full h-96 my-4">
                {children}
            </div>
        </div>
    )
}
export default WeblogContainer