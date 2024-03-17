import Link from 'next/link';

export default function header() {
    return <div className=" top-0 z-50 ">
        <div className="flex flex-row justify-between h-20 w-full px-6  sm:px-4 md:px-2 ">
            <div className="self-end">
                <h1 className=" font-medium sm:font-bold md:text-3xl ">Dhaba Delights</h1>
            </div>
            <div className="self-end">
                <nav>
                    <ul className="flex flex-row space-x-4">
                        <li className="cursor-pointer ">
                            <Link className="md:font-medium md:text-xl hover:text-orange-500 " href="/">Home</Link>
                        </li>
                        <li className="cursor-pointer hover:underlin">
                            <Link className="md:font-medium md:text-xl hover:text-orange-500 " href="/shop">Shop</Link>
                        </li>
                        {/* <li className="cursor-pointer">
                            <Link href="/about">About us</Link>
                        </li> */}
                        <li className="cursor-pointer hover:underlin">
                            <Link className="md:font-medium md:text-xl hover:text-orange-500 " href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

}