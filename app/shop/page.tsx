import Image from "next/image";
import { getProducts } from "@/app/lib/data";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

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
                {products.map((product: { 
                    id: Key,
                    name: string,
                    price: string,
                    imageUrl: string,
                    unfry_Price: string,
                    ingredients: string
                }) => (
                    <div key={product.id} className=" rounded-xl overflow-hidden hover:shadow-xl shadow-md m-2">
                        <Image
                            className="object-cover h-[300px] w-full select-none "
                            src={product.imageUrl}
                            alt="main IMG"
                            width={550}
                            height={50}
                            priority
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-2xl mb-2">{product.name}</div>
                            <div className="font-medium text-xl mb-2">{product.price}</div>  
                            <div className="font-medium text-lg mb-2">{product.unfry_Price}</div>
                            <div className="font-normal text-md"><strong>Ingredients:</strong>  {product.ingredients}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 