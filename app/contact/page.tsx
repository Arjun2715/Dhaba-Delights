import Map from "@/app/components/locationMap"
import Link from 'next/link';

export default function contact() {
    return <main className="flex flex-col  text-slate-900 overflow-x-hidden">
        <div className="my-8">
            <h1 className="text-4xl font-medium ">
                Contact Us
            </h1>
        </div>
        <div className="flex flex-col md:w-full justify-center mb-14">
            <div className="flex md:flex-nowrap sm:flex-wrap  md:flex-row xs:flex-col justify-evenly m-8 ">
                {/* phone */}
                <div className="flex justify-center w-full h-[200px] m-4 rounded-xl  shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Phone number</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <div className="flex flex-col">
                                <Link href="tel:00447466891903" className="self-center">English: +44 7466891903</Link>
                                <Link href="tel:00447460411957" className="self-center">Punjabi: +44 7460411957</Link>

                            </div>
                        </p>
                    </div>
                </div>
                {/* Insta */}
                <div className="flex justify-center w-full h-[200px]  m-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Instagram</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <Link href="#">@instagram</Link>
                        </p>
                    </div>
                </div>
                {/* Email */}
                <div className="flex justify-center w-full h-[200px]  m-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Email</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <Link href="mailto:as1211300@gmail.com">as1211300@gmail.com</Link>
                        </p>
                    </div>
                </div>
                {/* Tiktok */}
                <div className="flex justify-center w-full h-[200px]  m-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Tiktok</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <Link href="#">@dhaba-delightes</Link>
                        </p>
                    </div>
                </div>
            </div>

            <Map />

        </div>
    </main>
}