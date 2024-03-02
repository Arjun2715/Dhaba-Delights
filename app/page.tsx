import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-slate-900">
    
      <div className="w-[1200px]">

        {/* Headder */}
        <div className=" top-0 z-10 w-[1200px]">
          <div className="flex flex-row justify-between h-20 w-full">
            <div className="self-end">
              <h1 className="font-dancing-script font-normal text-3xl ">Dhaba Delights</h1>
            </div>
            <div className="self-end">
              <nav>
                <ul className="flex flex-row space-x-4">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Shop</li>
                  <li className="cursor-pointer">About us</li>
                  <li className="cursor-pointer">Contact</li> 
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="scroll-container overflow-y-auto snap-y-mandatory">
  
          {/* main hero */}
          <div className="h-[90vh] flex flex-col justify-center scroll-snap-center">
            {/* main text area */}
            <div className="flex flex-row justify-between">
              <div className=" flex flex-col">
                <h1 className="text-[84px]">Delicious<br></br>and Autentic Indian Food</h1>
                <div className="my-10">
                  <a className="w-auto inline-block  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-[3px] color-orange-500" href="">Order Now</a>
                </div>
              </div>
              {/* main image */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <div className="">
                    <Image
                      className="object-cover w-auto "
                      src="/images/main.png"
                      alt="main IMG"
                      width={550}
                      height={50}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* featured */}
          <div className=" flex flex-col justify-center space-y-4 scroll-snap-center">
            {/* main text area */}
            <div className="flex flex-row justify-between w-full">
              <h1 className="flex flex-1 text-[72px] " >Featured </h1>
              <p className="flex-1">
              </p>
            </div>
            {/* row 1,2 */}
            <div className="space-y-4">
              <div className="flex flex-row justify-start space-x-10">
                <Image
                  className="object-contain w-[300px]"
                  src="/images/main.png"
                  alt="main IMG"
                  width={550}
                  height={50}
                  priority
                />
                <div className="self-center">
                  <h1 className="text-[34px] ">VEGETARIAN SAMOSA</h1>
                  <p>80p per piece</p>
                </div>
              </div>
              <div className="flex flex-row justify-end space-x-10">
                <div className="self-center">
                  <h1 className="text-[34px] ">PANEER SAMOSA</h1>
                  <p>£1 per piece</p>
                </div>
                <Image
                  className="object-contain w-[300px]"
                  src="/images/paneer_samosas.png"
                  alt="main IMG"
                  width={550}
                  height={50}
                  priority
                />

              </div>
            </div>
            {/* row 3,4 */}
            <div className="space-y-4">
              <div className="flex flex-row justify-start space-x-10">
                <Image
                  className="object-contain w-[300px]"
                  src="/images/main.png"
                  alt="main IMG"
                  width={550}
                  height={50}
                  priority
                />
                <div className="self-center">
                  <h1 className="text-[34px] ">VEGETARIAN SPRING ROLL</h1>
                  <p>80p per piece</p>
                </div>
              </div>
              <div className="flex flex-row justify-end space-x-10">
                <div className="self-center">
                  <h1 className="text-[34px] ">PANEER SPRING ROLL</h1>
                  <p>£1 per piece</p>
                </div>
                <Image
                  className="object-contain w-[300px]"
                  src="/images/paneer_samosas.png"
                  alt="main IMG"
                  width={550}
                  height={50}
                  priority
                />

              </div>
            </div>
          </div>

          {/* aboutus */} 
          <div className="h-[100vh] flex flex-col justify-center scroll-snap-center">
            {/* main text area */}
            <div className="flex flex-row justify-between bg-white w-full h-[50vh] ">
              {/*  image */}
              <div className="flex flex-col justify-center">
                <Image
                  className="object-cover h-[50vh] w-[520px] z-10"
                  src="/images/second.jpg"
                  alt="main IMG"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              {/* main image */}
              <div className="text-slate-900 flex flex-col m-20 w-[500px]">
                <h1 className="text-4xl ">Our Story</h1>
                <p className="mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <div>
                  <a className="w-auto mt-10 inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-slate-900 border-[3px]" href="">About Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* contact */} 
          <div className="h-[100vh] flex flex-col justify-center scroll-snap-center">
            {/* main text area */}
            <div className="flex flex-row justify-center w-full h-[50vh] bg-cover"

              style={{
                backgroundImage: `url(${'/images/spices2.jpg'})`,
              }}>
              {/*  image */}
              <div className="text-white  z-20 absolute self-center ">
                <h1 className="text-4xl text-center">Contact Us</h1>
                <p className="mt-5 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex justify-center">
                  <a className="self-center w-auto mt-10 inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-[3px]
                                dark:border-white" href="">About Us</a>
                </div>
              </div>
              <div className="w-full h-full bg-slate-950  opacity-60 relative z-10"></div>
            </div> 
          </div> 
        </div>  
      </div> 
    </main>
  );
}
