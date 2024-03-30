import Map from "@/app/components/locationMap"
import Link from 'next/link';

export default function contact() {
    return <main className="flex flex-col  text-slate-900 mx-10">
        <div className="my-8">
            <h1 className="text-4xl font-medium ">
                Contact Us
            </h1>
        </div>
        <div className="flex flex-col w-full justify-center mb-14">
            <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap justify-evenly md:space-x-6">

                <div className="flex justify-center w-full md:w-1/4 h-48 md:h-[200px] mb-4 rounded-xl shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Phone number</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <a className="flex flex-col md:flex-row justify-center" href="tel:00447466891903"> <p className="self-center">English:</p>  <p className="whitespace-nowrap">+44 7466891903</p></a>
                                <a className="flex flex-col md:flex-row justify-center" href="tel:00447460411957"> <p className="self-center">Punjabi:</p>  <p className="whitespace-nowrap">+44 7460411957</p></a>
                            </div>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-full md:w-1/4 h-48 md:h-[200px] mb-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Instagram</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <a href="#">@instagram</a>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-full md:w-1/4 h-48 md:h-[200px] mb-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Email</div>
                        <p className="text-gray-700 text-xl flex justify-center">
                            <a href="mailto:as1211300@gmail.com">as1211300@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-full md:w-1/4 h-48 md:h-[200px] mb-4 rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-2xl mb-2 flex justify-center">Tiktok</div>
                        <p className="text-gray-700 text-xl flex justify-center text-nowrap">
                            <a href="#">@dhaba-delightes</a>
                        </p>
                    </div>
                </div>
            </div> 
            <Map /> 
        </div>
    </main>
}