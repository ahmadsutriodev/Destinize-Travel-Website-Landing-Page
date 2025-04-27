import React from 'react';
import Logo from '/assets/icons/icon-logo.svg';
import IconSearch from '/assets/icons/icon-search.svg';
import IconLenguage from '/assets/icons/icon-lengague.svg';
import IconArrowBottom from '/assets/icons/icon-arrow-bottom.svg';
import IconLocation from '/assets/icons/icon-location.svg';

const Header = () => {
    return (
        <header className="border-b border-ternary/30">
            <div className="h-[4.813rem] flex items-center text-ternary justify-between max-w-[74.625rem] mx-auto">
                <div className="logo flex gap-2 items-center">
                    <img src={Logo} alt="" className="" />
                    <h3 className="font-bold text-black">Destinize</h3>
                </div>
                <div className="search bg-[#F0F1F2] w-[33.125rem] overflow-x-hidden flex items-center h-12 rounded-full px-5 gap-2">
                    <img src={IconSearch} alt="" className="" />
                    <input type="text" className="border-0 w-full outline-0 text-sm" placeholder="Cari apapun disini..." />
                </div>
                <div className="lenguage flex items-center gap-2">
                    <img src={IconLenguage} alt="" className="" />
                    <p className="text-sm">Bahasa Indonesia</p>
                    <img src={IconArrowBottom} alt="" className="" />
                </div>
                <div className="container-locate flex gap-3">
                    <div className="icon-locate size-12 rounded-full flex justify-center items-center bg-[#E3EBFD]">
                        <img src={IconLocation} alt="" className="" />
                    </div>
                    <div className="">
                        <p className="locate-title text-sm">Lokasi</p>
                        <div className="flex gap-1">
                            <b className="locate text-base text-primary">Indonesia, Yogyakarta</b>
                            <img src={IconArrowBottom} alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
