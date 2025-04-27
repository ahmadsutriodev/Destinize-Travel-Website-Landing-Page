const MenuReservasiCard = ({ icon="" , title="...", description="..." }) => {
    return (
        <div className="card-resrvasi-container flex gap-[22.5px] w-full items-start">
            <div className="icon w-[50.46px] shrink-0 rounded-lg bg-amber-100 flex justify-center items-center h-[51.53px]">
                <img src={icon} alt="" />
            </div>
            <div className="container-text">
                <h3 className="title font-plus-jakarta-sans text-lg font-bold leading-[124.5%] text-[#5E6282] ">{title}</h3>
                <p className="description text-[#5E6282] font-normal mt-[4.71px] text-base leading-[124.5%] text-ellipsis line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default MenuReservasiCard;
