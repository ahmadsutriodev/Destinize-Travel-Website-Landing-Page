const data = [
    {
        id: 0,
        path: '/assets/images/axon-brand.png',
    },
    {
        id: 1,
        path: '/assets/images/jetstar-brand.png',
    },
    {
        id: 2,
        path: '/assets/images/expedia-brand.png',
    },
    {
        id: 3,
        path: '/assets/images/qantas-brand.png',
    },
    {
        id: 4,
        path: '/assets/images/alitalia-brand.png',
    },
];

const Sponsore = () => {
    return (
        <div className="grid grid-cols-12 lg:mt-[160px] lg:mb-[191px]">
            <div className="lg:col-span-10 flex justify-around gap-10  lg:col-start-2">
                {data.map((item) => (
                    <div className="hover:shadow-2xl w-[268px] h-[95.86px] transition-all ease-in-out duration-1000 flex justify-center items-center rounded-lg ">
                        <img src={item.path} key={item.id} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sponsore;
