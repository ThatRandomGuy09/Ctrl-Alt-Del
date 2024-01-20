import Image from "next/image";
import pic1 from "../../public/pic1.png"
import pic2 from "../../public/pic2.png"
import pic3 from "../../public/pic3.png"

const Page = () => (
  <div className="bg-black flex flex-row justify-center w-full">
    <div className="bg-black overflow-hidden border border-solid border-black w-[1540px] h-[939px] relative">
      <div className="absolute w-[563px] h-[747px] top-[-68px] left-[-94px]">
        <div className="w-[563px] h-[541px] top-0 left-0 rounded-[281.5px/270.5px] absolute blur-[108.5px] [background:linear-gradient(180deg,rgb(68,37,143)_0%,rgb(77.97,22.88,140.63)_48.4%,rgb(88.6,7.83,138.11)_100%)]" />
        <p className="absolute w-[387px] top-[269px] left-[176px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ffffffe6] text-[80px] tracking-[0] leading-[normal]">
          Discover the Best
          <br />
          Music with Emotions
        </p>
      </div>
      <div className="absolute w-[1019px] h-[861px] top-[122px] left-[691px]">
        <div className="w-[420px] h-[415px] top-[446px] left-[599px] rounded-[210px/207.5px] absolute blur-[108.5px] [background:linear-gradient(180deg,rgb(68,37,143)_0%,rgb(77.97,22.88,140.63)_48.4%,rgb(88.6,7.83,138.11)_100%)]" />
        <div className="absolute w-[311px] h-[436px] top-[294px] left-[317px] bg-[#d9d9d9] rounded-[33px] rotate-[65.00deg] shadow-[0px_19px_4px_#00000040]" />
        <Image
          className="w-[300px] h-[345px] top-[315px] left-[330px] absolute object-cover rotate-[65.00deg] rounded-3xl"
          alt="Unsplash"
          src={pic1}  // Check the correct path
          width={227} height={283}
        />
        <div className="absolute w-[311px] h-[462px] top-[137px] left-[226px] bg-[#1e1e1e] rounded-[33px] rotate-[46.00deg] shadow-[0px_19px_4px_#00000040]" />
        <Image
          className="w-[240px] h-[365px] top-[218px] left-[270px] absolute object-cover rotate-[47.00deg] rounded-3xl"
          alt="Unsplash"
          src={pic2}  // Check the correct path
          width={227} height={283}
        />
        {/* <Rectangle className="!absolute !left-0 !top-0" /> */}
        <div className="absolute w-[311px] h-[436px] top-[35px] left-[100px] bg-[#d9d9d9] rounded-[33px] rotate-[50.00deg] shadow-[0px_19px_4px_#00000040]" />
        <Image
          className="w-[270px] h-[365px] top-[78px] left-[115px] absolute object-cover rotate-[50.00deg] rounded-3xl"
          alt="Unsplash"
          src={pic3}  // Check the correct path
          width={227} height={283}
        />
      </div>
      <div className="absolute w-[292px] h-[78px] top-[753px] left-[82px] rounded-[31px] shadow-[-4px_7px_4px_#ffffff78] [background:conic-gradient(from_180deg_at_50%_50%,rgb(251,251,253)_26.25deg,rgb(199.66,211.76,217.81)_88.13deg,rgb(255,255,255)_156.58deg,rgb(174,192,206)_191.74deg,rgb(227,233,238)_237.13deg,rgb(250,251,252)_255.19deg,rgb(214,223,230)_310.11deg,rgb(184,201,211)_331.88deg)]">
        <div className="absolute top-[18px] left-[26px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
          Connect Wallet
        </div>
      </div>
      <div className="absolute w-[261px] top-[17px] left-[1263px] [-webkit-text-stroke:2px_#d9d9d9] [font-family:'Nico_Moji-Regular',Helvetica] font-normal text-[#fdf9ff] text-[46px] tracking-[0] leading-[normal] whitespace-nowrap">
        MoodJam
      </div>
    </div>
    
  </div>
);

export default Page;
