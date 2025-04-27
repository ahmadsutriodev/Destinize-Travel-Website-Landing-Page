import MenuReservasiCard from './MenuReservasiCard';

const ImageReservasi = '/assets/images/reservasi.png';
const data = [
    {
        icon: '',
        title: 'Cari tempat yang kamu mau',
        description: 'Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize',
    },
    {
        icon: '',
        title: 'Isi data dan konfirmasi pembayaran',
        description: 'Tulis dan lengkapi data kamu untuk keperluan data booking',
    },
    {
        icon: '',
        title: 'Tinggal masuk dan enjoy!',
        description: 'Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan',
    },
];

const ReservasiTempat = () => {
    return (
        <div className="mt-[153px] grid grid-cols-12 self- mb-96">
            <div className="col-span-5  col-start-2">
                <p className="leading-[26.5px] lg:text-lg text-primary font-manrope font-extrabold mb-3">RESERVASI TEMPAT</p>
                <h2 className="text-[50px] font-plus-jakarta-sans font-extrabold text-[#14183E] leading-16">
                    Gak mau ngantri? <br /> reservasi aja! 🤙🏻
                </h2>
                <div className="flex flex-col gap-11 w-full mt-[33px]  ">
                    {data.map((item) => (
                        <MenuReservasiCard {...item} />
                    ))}
                </div>
            </div>
            <div className="col-span-5 ">
                <img src={ImageReservasi} alt="" className="-mt-24 ms-20" />
            </div>
        </div>
    );
};

export default ReservasiTempat;
