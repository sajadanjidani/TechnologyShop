const StoreItems = () => {
    return(
        <div className="grid gap-3 min-w-[250px] min-h-[370px] p-3 rounded-lg bg-blue-400">
            {/* imageContainer */}
            <div className="flex justify-center items-center w-full h-64">
                {/* imagebox */}
                <div className="w-full h-full bg-green-500"></div>
            </div>
            {/* descript */}
            <div className="grid gap-2 w-full h-28">
                <p className="text-sm">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <div className="grid gap-2 child:text-left">
                    <p className="text-sm">*5</p>
                    <p>20.000.000 $</p>
                </div>
            </div>
        </div>
    )
}
export default StoreItems
