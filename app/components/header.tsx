import Link from 'next/link';

export default function header() {
    return <div className=" top-0 z-50 ">
        <div className="flex flex-row justify-between h-20 w-full ">
            <div className="self-end">
                <h1 className="font-dancing-script font-normal text-3xl ">Dhaba Delights</h1>
            </div>
            <div className="self-end">
                <nav>
                    <ul className="flex flex-row space-x-4">
                        <li className="cursor-pointer hover:underline">
                            <Link className="font-medium text-xl" href="/">Home</Link>
                        </li>
                        <li className="cursor-pointer hover:underlin">
                            <Link className="font-medium text-xl" href="/shop">Shop</Link>
                        </li>
                        {/* <li className="cursor-pointer">
                            <Link href="/about">About us</Link>
                        </li> */}
                        <li className="cursor-pointer hover:underlin">
                            <Link className="font-medium text-xl" href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

}