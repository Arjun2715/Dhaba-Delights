import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <main className="flex md:min-h-screen flex-col items-center justify-between text-slate-900 space-y-6">

    <div className="flex flex-col md:flex-row h-[90vh] justify-center items-center">
      {/* main text area */}
      <div className="flex flex-col justify-center text-center md:text-left md:w-1/2 md:mx-24 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl">Delicious and Authentic Indian Snacks</h1>
        <div className="mt-6">
          <Link href="/shop">
            <p className="inline-block px-6 py-3 text-sm md:text-base bg-orange-500 text-white uppercase font-medium rounded border-2 border-orange-500 hover:bg-transparent hover:text-orange-500 transition duration-300">Order Now</p>
          </Link>
        </div>
      </div>
      {/* main image */}
      <div className="w-full md:w-1/2 ">
        <div className="h-full">
        <Image
                className="object-cover md:w-full sm:w-[400px] xs:w-[200px] "
                src="/images/main.png"
                alt="main IMG"
                width={550}
                height={50}
                priority
              />
        </div>
      </div>
    </div>


    {/* featured */}
    <h1 className="flex flex-1 md:text-[72px] sm:text-[44px] text-[32px]" >Featured </h1>
    <div className="m-6 sm:m-10 md:m-14 xs:my-4 sm:my-6 md:my-8  grid xs:grid-col-1  sm:grid-cols-2  md:grid-cols-4">
      <div className=" rounded-xl overflow-hidden hover:shadow-xl shadow-md m-2">
        <Image
          className="object-cover h-[250px] w-full select-none "
          src="/images/samosa-chaart.png"
          alt="IMG"
          width={550}
          height={50}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl">Smosa Chaart</div>
          <div className="font-medium text-xl">£3.50 per box</div>
          <div className="font-medium text-lg"></div>
          <div className="font-normal text-md">
            <strong>Ingredients:</strong>Yoghourt, Tamarind sauce, Vegi Smosa X 2 , Onion</div>
        </div>
      </div>

      <div className=" rounded-xl overflow-hidden hover:shadow-xl shadow-md m-2">
        <Image
          className="object-cover h-[250px] w-full select-none "
          src="/images/chana-bathura.png"
          alt="IMG"
          width={550}
          height={50}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl">Channa Batura</div>
          <div className="font-medium text-xl">£3.50 per box</div>
          <div className="font-medium text-lg"></div>
          <div className="font-normal text-md">
            <strong>Ingredients:</strong>Chickpeas, Curry, Onion, Garlic, Ginger, Salt, peppers, 2 x Batura</div>
        </div>
      </div>

      <div className=" rounded-xl overflow-hidden hover:shadow-xl shadow-md m-2">
        <Image
          className="object-cover h-[250px] w-full select-none "
          src="/images/paneer-rolls.png"
          alt="IMG"
          width={550}
          height={50}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl">Paneer Spring Roll</div>
          <div className="font-medium text-xl">£1 per piece</div>
          <div className="font-medium text-lg">Unfry: 90p per piece</div>
          <div className="font-normal text-md">
            <strong>Ingredients:</strong>Paneer, Onion, Sweetcorn, Peas, Salt, Black peppers, Criander</div>
        </div>
      </div>

      <div className=" rounded-xl overflow-hidden hover:shadow-xl shadow-md m-2">
        <Image
          className="object-cover h-[250px] w-full select-none "
          src="/images/Pakora.png"
          alt="IMG"
          width={550}
          height={50}
          priority
        />
        <div className="px-6 py-4">
          <div className="font-bold text-2xl">Mix Pakora</div>
          <div className="font-medium text-xl">£12.50 per Kilo</div>
          <div className="font-medium text-lg"></div>
          <div className="font-normal text-md">
            <strong>Ingredients:</strong>Onion, Cabbage, Spinach, Potatoes, Salt, Red chill, Black pepper, Chat masala, Gram flour</div>
        </div>
      </div>
    </div>
    {/* aboutus */}
    <div className="mt-40 flex flex-col justify-center sm:m-12">
      {/* main text area */}
      <div className="flex md:flex-row flex-col xs:justify-center bg-white w-full md:h-[50vh] ">
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
        <div className="text-slate-900 md:flex md:flex-col m-5 sm:m-10 md:m-20 md:w-[500px]">
          <h1 className="text-4xl ">Our Story</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br /> Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="flex justify-start xs:justify-center self-center">
            <a className="w-auto mt-10 inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-slate-900 border-[3px]" href="">About Us</a>
          </div>
        </div>
      </div>
    </div>

    {/* contact */}
    <div className="my-32 flex flex-col justify-center">
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
            <Link href="/contact" className="self-center w-auto mt-10 inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal border-[3px]
                                dark:border-white">Contact Us</Link>
          </div>
        </div>
        <div className="w-full h-full bg-slate-950  opacity-60 relative z-10"></div>
      </div>
    </div>
  </main >
}
