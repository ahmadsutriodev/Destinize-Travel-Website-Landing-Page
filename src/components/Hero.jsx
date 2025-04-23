import HeroImage from '/assets/images/Hero-image.webp'
import PlayButton from '/assets/images/Play button.png'

const Hero = () => {
  return (
    <main className="grid grid-cols-12 mt-[110px] max-w-[1440px] mx-auto ">
      <div className=" col-start-2 col-span-5 tagline-container ">
        <div className="bg-[#E5EDFF] inline-block px-5 py-2 rounded-full">
          <p className="text-primary text-sm font-semibold">✈️ • Explore the wonderful indonesia!</p>
        </div>
        <h1 className="text-secondary text-[4.375rem] tracking-[-0.25px] leading-[5rem] mt-4 font-extrabold ">Liburan & nikmati <span className='text-primary'>tempat baru</span> di indonesia  ️🏝</h1>
        <p className="text-base leading-[30px] mt-[30px]">
          Destinize membuat kamu selalu update terkait tempat liburan <br /> baru di Indonesia dengan mengikuti perkembangan para <br /> influencer di sosial media ✨
        </p>
        <div className="call-to-action-container flex gap-3">
          <button type="button" className='bg-[#4475F2] shadow-2xl cursor-pointer shadow-[#4475f25d] text-white text-base flex justify-center items-center h-[60px] px-[47px] rounded-xl mt-[34px]'>
            Mulai Sekarang
          </button>
          <button type="button" className=' text-primary font-bold gap-3 cursor-pointer text-base flex justify-center items-center h-[60px] px-[47px] rounded-xl mt-[34px]'>
            <img src={PlayButton} alt="" className='size-12' />Putar Demo
          </button>
        </div>
      </div>
      <div className=" col-span-5 ">
        <div className="hero-image">
          <img src={HeroImage} alt="" className="" />
        </div>
      </div>
    </main>
  )
}

export default Hero