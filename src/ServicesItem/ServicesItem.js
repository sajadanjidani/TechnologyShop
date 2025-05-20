const ServicesItem = ({children}) => {
    return(
        <div className="flex items-center px-5 w-full h-full rounded-lg bg-white">
            {/* icon container */}
            <div className="w-14 h-5/6 rounded-full bg-red-600">
                <div className="flex relative child:absolute child:top-7 child:-left-5">{children}</div>
            </div>
            {/* content container */}
            <div className="grid py-5 items-center justify-center w-full h-full pr-8">
                <h2>لورم</h2>
                <p className="leading-7">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
            </div>
        </div>
    )
}
export default ServicesItem