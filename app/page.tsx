import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <main className="flex md:min-h-screen flex-col items-center justify-between text-slate-900 space-y-20">

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
        <div className="h-full flex justify-center">
          <Image
            className="object-cover md:w-full sm:w-[400px] w-[300px] "
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
    <div className=" m-2 sm:m-10  xs:my-4 sm:my-6 md:my-8 ">
      <h1 className="text-4xl md:text-6xl lg:text-7xl md:self-start self-center m-3" >Featured </h1>
      <div className="  grid xs:grid-col-1  sm:grid-cols-2  md:grid-cols-4">
        <div className="rounded-xl overflow-hidden  shadow-[rgba(8,8,8,0.08)_0px_0px_6px_6px] m-3">
          <Image
            className="object-cover h-[250px] w-full select-none "
            src="/images/samosa-chaart.png"
            alt="IMG"
            width={550}
            height={50}
            priority
          />
          <div className="md:px-6 md:py-4 sm:px-4 sm:py-2 px-2 py-1">
            <div className="font-bold text-2xl">Smosa Chaart</div>
            <div className="font-medium text-xl">£3.50 per box</div>
            <div className="font-medium text-lg"></div>
            <div className="font-normal text-md">
              <strong>Ingredients:</strong>Yoghourt, Tamarind sauce, Vegi Smosa X 2 , Onion</div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden  shadow-[rgba(8,8,8,0.08)_0px_0px_6px_6px] m-3">
          <Image
            className="object-cover h-[250px] w-full select-none "
            src="/images/chana-bathura.png"
            alt="IMG"
            width={550}
            height={50}
            priority
          />
          <div className="md:px-6 md:py-4 sm:px-4 sm:py-2 px-2 py-1">
            <div className="font-bold text-2xl">Channa Batura</div>
            <div className="font-medium text-xl">£3.50 per box</div>
            <div className="font-medium text-lg"></div>
            <div className="font-normal text-md">
              <strong>Ingredients:</strong>Chickpeas, Curry, Onion, Garlic, Ginger, Salt, peppers, 2 x Batura</div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden  shadow-[rgba(8,8,8,0.08)_0px_0px_6px_6px] m-3">
          <Image
            className="object-cover h-[250px] w-full select-none "
            src="/images/paneer-rolls.png"
            alt="IMG"
            width={550}
            height={50}
            priority
          />
          <div className="md:px-6 md:py-4 sm:px-4 sm:py-2 px-2 py-1">
            <div className="font-bold text-2xl">Paneer Spring Roll</div>
            <div className="font-medium text-xl">£1 per piece</div>
            <div className="font-medium text-lg">Unfry: 90p per piece</div>
            <div className="font-normal text-md">
              <strong>Ingredients:</strong>Paneer, Onion, Sweetcorn, Peas, Salt, Black peppers, Criander</div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden  shadow-[rgba(8,8,8,0.08)_0px_0px_6px_6px] m-3">
          <Image
            className="object-cover h-[250px] w-full select-none "
            src="/images/Pakora.png"
            alt="IMG"
            width={550}
            height={50}
            priority
          />
          <div className="md:px-6 md:py-4 sm:px-4 sm:py-2 px-2 py-1">
            <div className="font-bold text-2xl">Mix Pakora</div>
            <div className="font-medium text-xl">£12.50 per Kilo</div>
            <div className="font-medium text-lg"></div>
            <div className="font-normal text-md">
              <strong>Ingredients:</strong>Onion, Cabbage, Spinach, Potatoes, Salt, Red chill, Black pepper, Chat masala, Gram flour</div>
          </div>
        </div>
      </div></div>


    {/* aboutus */}
    {/* main text area */}
    <div className="flex md:flex-row flex-col xs:justify-center bg-white m-6  my-14 sm:space-x-10">
      {/*  image */}
      <div className="flex flex-col justify-start md:w-1/2">
        <Image
          className="object-cover h-[400px]  w-full z-10"
          src="/images/second.jpg"
          alt="main IMG"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="text-slate-900 md:flex md:flex-col my-2 md:w-1/2 md:mb-12">
        <h1 className="text-4xl ">Our Story</h1>
        <p className="mt-5">
          {/* Passed down through generations, our family's recipes are a treasure trove of flavors that have stood the test of time. With each dish, we strive to recreate the magic of those roadside eateries, where the aroma of spices filled the air and the sizzle of tandoors echoed through the streets.

          <br /><br /> At Dhaba Delights, we believe in preserving the authenticity of Indian cuisine while embracing modern techniques and flavors. Every ingredient is carefully sourced, ensuring the highest quality and freshness. From the vibrant spices of North India to the coastal delights of the South, our menu is a celebration of India's diverse culinary landscape. */}
          {/* <br /><br /> But it's not just about the food; it's about the experience. As you step into Dhaba Delights, you'll be greeted with warmth and hospitality, just like a guest in our own home. Our friendly staff is dedicated to providing you with a memorable dining experience, whether you're grabbing a quick meal on the go or lingering over a leisurely dinner with family and friends. */}


        </p>
        {/* <div className="flex justify-start xs:justify-center ">
            <a className="w-auto mt-10 inline-block bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-slate-900 border-[3px]" href="">About Us</a>
          </div> */}
      </div>
    </div>


    {/* contact */}
    <div className="flex flex-row justify-center w-full h-[50vh] bg-cover p-12"

      style={{
        backgroundImage: `url(${'/images/spices2.jpg'})`,
      }}>
      {/*  image */}
      <div className="text-white  z-20 absolute self-center sm:p-14 w-2/3">
        <h1 className="md:font-bold font-medium md:text-4xl sm:text-2xl text-lg text-center">Contact Us</h1>
        <p className="md:mt-5 md:text-xl sm:text-lg text-sm text-center ">
          {/* <br /> At Dhaba Delights, we're not just serving food; we're sharing a piece of our heritage with each and every customer. It's a journey of flavors, aromas, and memories that we invite you to be a part of. */}
        </p>
        <div className="flex justify-center mt-10">
        <Link href="/contact">
            <p className="inline-block px-6 py-3 text-sm md:text-base bg-transparent text-white uppercase font-medium rounded border-2 border-white hover:bg-transparent hover:border-orange-500 hover:text-orange-500 transition duration-300">Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="w-full h-full bg-slate-950  opacity-60 relative z-10"></div>
    </div>
  </main >
}
