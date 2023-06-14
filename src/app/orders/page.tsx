import { Orders } from "@/components/client/Orders";
import Link from "next/link";



export default function StorePage() {
    return (
        <main className="max-w-screen-2xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 mt-[11vh] bg-white">
            <nav aria-label="Breadcrumb">
                <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                        <Link href="/" className="block transition hover:text-gray-700">
                            Home
                        </Link>
                    </li>

                    <li className="rtl:rotate-180">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </li>

                    <li>
                        <Link href="/orders" className="block transition hover:text-gray-700"> Ordenes de compra </Link>
                    </li>
                </ol>
            </nav>
            <Orders />
        </main>
    )
}
