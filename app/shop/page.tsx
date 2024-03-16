import Image from "next/image";
import { getProducts } from "@/app/lib/data";

export default async function Shop() {
    const products = await  getProducts();
    return (
        <div className="flex min-h-screen flex-col items-start justify-start text-slate-900">
            <div className="my-8 m-4 md:p-0">
                <h1 className="text-[44px] font-medium">
                    Shop
                </h1>
            </div>
        
            <div className="my-8 grid sm:grid-cols-2  md:grid-cols-3">
                {products.map(product => (
                    <div key={product.id} className=" rounded overflow-hidden hover:shadow-xl shadow-md m-2 p-4">
                        <Image
                            className="object-cover w-auto "
                            src="/images/main.png"
                            alt="main IMG"
                            width={550}
                            height={50}
                            priority
                        />
                        <div className="px-6 py-4">
                            <div className="font-normal text-2xl mb-2">{product.name}</div>
                            <div className="font-bold text-xl mb-2">{product.price}</div>  
                            <div className="font-bold text-lg mb-2">{product.unfry_Price}</div>
                            <div className="font-normal text-md">{product.ingredients}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 