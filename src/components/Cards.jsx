import React from 'react'
import Card from './Card'

const data = [
    {
        cover: "../../public/assets/images/Raja ampat.png"
    },
    {
        cover: "../../public/assets/images/Fanjingshan.png"
    },
    {
        cover: "../../public/assets/images/Vevey.png"
    },
    {
        cover: "../../public/assets/images/Skadar.png"
    },
]

const Cards = () => {
    return (
        <div className="grid grid-cols-12 font-manrope ">
            <div className="col-span-10 col-start-2">
                <p className="leading-[26.5px] lg:text-lg text-primary font-extrabold">DESTINASI FAVORIT</p>
                <div className="flex items-center justify-between mt-3.5">
                    <h2 className="text-5xl font-extrabold leading-[50px] tracking-[-1px]">✈ • Temukan Destinasi Favoritmu</h2>
                    <button className="text-primary cursor-pointer font-plus-jakarta-sans text-[17px] leading-[60px]">Lihat semua {">"} </button>
                </div>
                <div className="flex w-full justify-between mt-[46px]">
                    {data.map(card => (
                        <Card {...card} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards