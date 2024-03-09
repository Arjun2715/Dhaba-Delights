import Map from "@/app/components/locationMap"
import Link from 'next/link';

export default function contact() {
    return <main className="flex flex-col items-start  text-slate-900">
        <div className="my-8">
            <h1 className="text-[44px] font-medium ">
                Contact Us 
            </h1>
        </div> 
        <div className="flex flex-row w-full justify-between space-x-8 mb-14">
            <div className="flex flex-wrap flex-row justify-between ">
                {/* phone */}
                <div className="flex justify-start w-[250px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-xl mb-2">Phone number</div>
                        <p className="text-gray-700 text-base">
                        <Link href="tel:1234567789">1234567889</Link>      
                        </p>
                    </div> 
                </div>
                {/* Insta */}
                <div className="flex justify-start w-[250px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-xl mb-2">Instagram</div>
                        <p className="text-gray-700 text-base">
                            <Link href="#">@instagram</Link>                 
                        </p>
                    </div> 
                </div>
                {/* Email */}
                <div className="flex justify-start w-[250px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-xl mb-2">Email</div>
                        <p className="text-gray-700 text-base">
                        <Link href="#">example@gamil.com</Link>                   
                        </p>
                    </div> 
                </div>
                {/* Tiktok */}
                <div className="flex justify-start w-[250px] h-[200px] rounded-xl overflow-hidden shadow-md hover:shadow-xl">
                    <div className="px-6 py-4 self-center">
                        <div className="font-bold text-xl mb-2">Tiktok</div>
                        <p className="text-gray-700 text-base">
                        <Link href="#">@dhaba-delightes</Link>                   
                        </p>
                    </div> 
                </div>
            </div>
            <div className="flex">
                <Map/>
            </div>
        </div>
    </main>
}