// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaStar } from "react-icons/fa6";
import image from "../../assets/images/Image.png";

function Home() {
  return (
    <div className=" ">
      <div className="flex items-center justify-center p-20 flex-wrap  ">
        <div className="max-h-[317px] max-w-[557px] flex flex-col max-md:text-center">
          <h3 className="text-xl font-semibold ">Branding | Image making</h3>
          <h1 className=" max-md:text-[65px]  md:text-[80px] font-semibold">
            My awesome portfolio
          </h1>
          <h4 className="text-[20px]">
            And I made it myself! Yes. In Figma with Anima
          </h4>
        </div>
        <div className=" max-sm:mt-28">
          <img width={495} height={424} src={image} alt="" />
        </div>
      </div>

      <div className=" my-28 max-md:my-0 flex items-center justify-center  gap-24 flex-wrap ">
        <div className=" h-[300px] w-64 flex flex-col items-center justify-between ">
          <img
            width={130}
            height={130}
            src="./src/assets/images/Image placeholder.png"
            alt=""
          />
          <h3 className="font-semibold text-[27px]">Product design</h3>
          <p className="text-[17px] text-center ">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <div className=" h-[300px] w-64 flex flex-col items-center justify-between ">
          <img
            width={130}
            height={130}
            src="./src/assets/images/Image placeholder2.png"
            alt=""
          />
          <h3 className="font-semibold text-[27px]">Art Drection</h3>
          <p className="text-[17px] text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
        <div className="h-[300px] w-64 flex flex-col items-center justify-between">
          <img
            width={130}
            height={130}
            src="./src/assets/images/Image placeholder3.png"
            alt=""
          />
          <h3 className="font-semibold text-[27px]">Visual design</h3>
          <p className="text-[17px] text-center">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com
          </p>
        </div>
      </div>

      <div className=" px-56 max-md:px-28 mt-10  ">
        <div className="flex items-center py-10  justify-center min-h-[150px] gap-32 border-t border-b border-[#a3a3a3] flex-wrap max-md:gap-12    ">
          <img
            width={53}
            height={34}
            src="./src/assets/images/Behance.png"
            alt=""
          />
          <img
            width={103}
            height={34}
            src="./src/assets/images/Google.png"
            alt=""
          />
          <img
            width={38}
            height={46}
            src="./src/assets/images/Apple.png"
            alt=""
          />
          <img
            width={139}
            height={34}
            src="./src/assets/images/Dribbble.png"
            alt=""
          />
          <img
            width={213}
            height={34}
            src="./src/assets/images/Awwwards.png"
            alt=""
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-center font-semibold text-[32px] mt-8 mb-14">
          My latest work
        </h1>
        <div>
          <div className="flex items-center justify-center gap-16 flex-wrap ">
            <div className="h-[407px] flex flex-col justify-between">
              <img
                width={315}
                height={315}
                src="./src/assets/images/category1.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">Free Bird</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Lynyrd Skynyrd</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img
                width={315}
                height={315}
                src="./src/assets/images/category2.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">Purple Haze</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Jimi Hendrix</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img
                width={315}
                height={315}
                src="./src/assets/images/category3.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">You Really Got Me</h1>
              <p className="text-[17px] text-[#2d2d2d] ">The Kinks</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-16 mt-16 flex-wrap">
            <div className="h-[407px] flex flex-col justify-between">
              <img
                width={315}
                height={315}
                src="./src/assets/images/category4.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">American Girl</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Tom Petty</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img
                width={315}
                height={315}
                src="./src/assets/images/category5.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">Who Lotta Love</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Led Zeppelin</p>
            </div>
            <div className="h-[407px] flex flex-col justify-between">
              <img
                width={315}
                height={315}
                src="./src/assets/images/category6.png"
                alt=""
              />
              <h1 className="text-xl font-semibold">Under Pressure</h1>
              <p className="text-[17px] text-[#2d2d2d] ">Queen</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-center font-semibold text-[32px] mb-16">Clients</h1>
        <div className="flex items-center justify-center gap-16 flex-wrap">
          <div className="w-[315px] h-[344px] bg-[#FFFCF5] border-[2px] border-[#FFD285] flex flex-col  justify-between p-8  ">
            <p className="  font-semibold text-xl leading-[30px]">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center text-[#2d2d2d]">
              <img
                className="pb-5"
                width={50}
                height={50}
                src="./src/assets/images/Author-images.png"
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex pl-4 hover:text-yellow-300">
                  <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} />
                  <FaStar size={20} /> <FaStar size={20} />
                </div>
                <h4 className="text-xl pl-4 leading-[27px]">
                  Gemma Nolen,
                  <br />
                  Google
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[344px] bg-[#FFFCF5] border-[2px] border-[#FFD285] flex flex-col  justify-between p-8 ">
            <p className="leading-[30px]  font-semibold text-xl">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center text-[#2d2d2d]">
              <img
                className="pb-5"
                width={50}
                height={50}
                src="./src/assets/images/Author-images2.png"
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex pl-4 hover:text-yellow-300">
                  <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} />
                  <FaStar size={20} /> <FaStar size={20} />
                </div>
                <h4 className="text-xl pl-4 leading-[27px]">
                  Gemma Nolen,
                  <br />
                  Google
                </h4>
              </div>
            </div>
          </div>
          <div className="w-[315px] h-[344px] bg-[#FFFCF5] border-[2px] border-[#FFD285] flex flex-col  justify-between p-8 ">
            <p className="leading-[30px]  font-semibold text-xl">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <div className="flex items-center text-[#2d2d2d]">
              <img
                className="pb-5"
                width={50}
                height={50}
                src="./src/assets/images/Author-images3.png"
                alt=""
              />
              <div className="flex flex-col">
                <div className="flex pl-4 hover:text-yellow-300">
                  <FaStar size={20} /> <FaStar size={20} /> <FaStar size={20} />
                  <FaStar size={20} /> <FaStar size={20} />
                </div>
                <h4 className="text-xl pl-4 leading-[27px]">
                  Gemma Nolen,
                  <br />
                  Google
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-20 border mx-56  border-[#a3a3a3] items-center max-md:mx-16" />
      <div className="flex flex-wrap mt-14 justify-center px-56   ">
        <div className=" h-full flex flex-col mb-5">
          <h1 className="text-[32px] font-semibold max-w-[385px] ">
            Let’s work together
          </h1>
          <p className=" py-10 text-[17px] leading-[27px]  w-[385px] ">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </p>
          <div className="flex gap-5  py-1 ">
            <img
              className="object-none"
              width={36}
              height={36}
              src="./src/assets/images/Vector_DC.png"
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src="./src/assets/images/Vector_FB.png"
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src="./src/assets/images/Vector_dribbble.png"
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src="./src/assets/images/Vector_instagram.png"
              alt=""
            />
            <img
              className="object-none"
              width={36}
              height={36}
              src="./src/assets/images/Vector_behance.png"
              alt=""
            />
          </div>
        </div>
        <div className=" h-full flex flex-col ">
          <div className="flex flex-col gap-10  min-w-[385px]">
            <input
              className="p-5 border focus:outline-none bg-[#F3F3F3]"
              type="text"
              placeholder="NAME"
            />
            <input
              className="p-5 border focus:outline-none bg-[#F3F3F3]"
              type="email"
              placeholder="EMAİL"
            />
            <textarea
              className="p-5  h-[231px] text-left border-none focus:outline-none bg-[#F3F3F3]"
              placeholder="Type your message here"
            />
            <button className="p-5 mb-8 bg-black text-white w-[235px] font-semibold ">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
