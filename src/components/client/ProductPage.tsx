'use client'
import { ChangeEvent, useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { JerseyModel } from '@/models/jersey.model'
import { AppContext } from '@/context/AppContex'
import Link from 'next/link'

const ProductPage = ({ productItem }: { productItem: JerseyModel }) => {


    const sizes: string[] = ["XS", "S", "M", "L", "XL", "XXL"];

    const { addToCart } = useContext(AppContext);
    const [selectedSizeOption, setSelectedSizeOption] = useState<string>(productItem.size[0]);
    const [selectedDorsalOption, setSelectedDorsalOption] = useState<string>("S");
    const [productToAdd, setProductToAdd] = useState<JerseyModel>({ ...productItem, size: [], players: [""] });

    const handleSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSelectedSizeOption((prevSize => (prevSize === value ? '' : value)));
    }

    const handleDorsalChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        console.log("...")
        setSelectedDorsalOption((prevSize => (prevSize === value ? '' : value)));
    }

    //Actualiza el producto a agregar
    useEffect(() => {
        setProductToAdd((prev) => ({
            ...prev,
            size: [selectedSizeOption],
        }));
    }, [selectedSizeOption])
    useEffect(() => {
        setProductToAdd((prev) => ({
            ...prev,
            players: [selectedDorsalOption],
        }));
    }, [selectedDorsalOption])


    // ---
    return (
        <section className='mt-[11vh] bg-white text-third'>
            <nav aria-label="Breadcrumb" className="px-4 pt-4 pb-2">
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
                        <Link href="/store" className="block transition hover:text-gray-700"> Tienda </Link>
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
                        {productItem.club
                            ? <Link href="/store/clubs" className="block transition hover:text-gray-700"> Clubes </Link>
                            : <Link href="/store/nations" className="block transition hover:text-gray-700"> Naciones </Link>}
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
                        {productItem.club
                            ? <Link href="/store/clubs" className="block transition hover:text-gray-700"> {productItem.name} </Link>
                            : <Link href="/store/nations" className="block transition hover:text-gray-700"> {productItem.name} </Link>}
                    </li>
                </ol>
            </nav>
            <div className="relative mx-auto max-w-screen-xl px-4 py-8 ">
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:h-[100vh] overflow-y-scroll">
                        <Link href={productItem.img[0]}>
                            <Image
                                alt="Principal product Image"
                                src={productItem.img[0]}
                                width={1200}
                                height={1200}
                                className={`aspect-square w-full rounded-xl object-cover cursor-zoom-in`}
                            />
                        </Link>
                        <div className="grid grid-cols-2 gap-4 lg:mt-4 ">
                            {productItem.img.map((item, index) => {
                                if (index === 0) {
                                    return;
                                } else {
                                    return (
                                        <Link key={index} href={item}>
                                            <Image
                                                alt={item + index}
                                                src={item ? item : "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="}
                                                width={1200}
                                                height={1200}
                                                className="aspect-square w-full rounded-xl object-cover bg-slate-500 cursor-zoom-in"
                                            />
                                        </Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="sticky top-0">
                        {productItem.stock > 0 ? <strong
                            className="rounded-full border border-blue-600 bg-gray-100 
                            px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                        >
                            Disponibilidad inmediata
                        </strong> : <strong
                            className="rounded-full border border-blue-600 bg-gray-100 
                            px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
                        >
                            Pre Order
                        </strong>}

                        <div className="mt-8 flex justify-between">
                            <div className="max-w-[35ch] space-y-2">
                                <h1 className="text-xl font-bold sm:text-2xl text-third">
                                    {productItem.name}
                                </h1>

                                <p className="text-sm text-third">Highest Rated Product</p>

                                <div className="-ms-0.5 flex">
                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 
                                            1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 
                                            0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-
                                            .57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588
                                             1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 
                                             0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 
                                             00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 
                                            2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 
                                            00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 
                                            8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-yellow-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 
                                            2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 
                                            00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 
                                            8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>

                                    <svg
                                        className="h-5 w-5 text-gray-200"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 
                                            1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 
                                            00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 
                                            8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            {productItem.sale ? <span>
                                <p className="text-lg font-bold line-through">{productItem.price}$</p>
                                <p className="text-lg font-bold text-primary">{productItem.sale}$</p>
                            </span> : <span>
                                <p className="text-lg font-bold">{productItem.price}$</p>
                            </span>}
                        </div>
                        <form className="mt-8">
                            <fieldset className="mb-3">
                                <legend className="mb-1 text-sm font-medium">Equipo y Marca</legend>

                                <div className="flex flex-wrap gap-1">
                                    <label htmlFor="color_tt" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="color"
                                            id="color_tt"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-block rounded-full border px-3 py-1 text-xs font-medium"
                                        >
                                            {productItem.team}
                                        </span>
                                    </label>
                                    <label htmlFor="color_tt" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="color"
                                            id="color_tt"
                                            className="peer sr-only"
                                        />

                                        <Link href={productItem.link}
                                            className="group inline-block rounded-full border px-3 py-1 text-xs font-medium text-white bg-black"
                                        >
                                            {productItem.brand}
                                        </Link>
                                    </label>
                                </div>
                            </fieldset>
                            <fieldset className="mb-3">
                                <legend className="mb-1 text-sm font-medium">Tecnologia</legend>

                                <div className="flex flex-wrap gap-1">
                                    {productItem.technology.map((item) => (
                                        <label htmlFor="color_tt" className="cursor-pointer" key={item}>
                                            <input
                                                type="radio"
                                                name="color"
                                                id="color_tt"
                                                className="peer sr-only"
                                            />

                                            <span
                                                className="group inline-block rounded-full border px-3 py-1 text-xs font-medium
                                             peer-checked:bg-black peer-checked:text-white"
                                            >
                                                {item}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>
                            {productItem.players ?
                                <fieldset className="mb-3">
                                    <legend className="mb-1 text-sm font-medium">Dorsal</legend>

                                    <div className="flex flex-wrap gap-1">
                                        <label htmlFor="SinDorsal" className="cursor-pointer">
                                            <input
                                                type="radio"
                                                name="color"
                                                id="SinDorsal"
                                                className="peer sr-only"
                                                value={"S"}
                                                checked={selectedDorsalOption === "S"}
                                                onChange={handleDorsalChange}
                                            />

                                            <span
                                                className={`group inline-block rounded-full border px-3 py-1 text-xs font-medium
                                          ${selectedDorsalOption === "S" ? 'peer-checked:bg-black peer-checked:text-white' : ''
                                                    }`}
                                            >
                                                Sin dorsal
                                            </span>
                                        </label>
                                        {productItem.players?.map((player, index) => (
                                            <label htmlFor={`dorsar_${index}`} className="cursor-pointer" key={player}>
                                                <input
                                                    type="radio"
                                                    name="color"
                                                    id={`dorsar_${index}`}
                                                    className="peer sr-only"
                                                    value={player}
                                                    checked={selectedDorsalOption === player}
                                                    onChange={handleDorsalChange}
                                                />

                                                <span
                                                    className={`group inline-block rounded-full border px-3 py-1 text-xs font-medium
                                                ${selectedDorsalOption === player ? 'peer-checked:bg-black peer-checked:text-white' : ''
                                                        }`}
                                                >
                                                    {player}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </fieldset> : null}
                            <fieldset className="mt-4">
                                <legend className="mb-1 text-sm font-medium">Size</legend>

                                <div className="flex flex-wrap gap-1">
                                    {sizes.map((size) => (
                                        <label htmlFor={`size_${size}`} className="cursor-pointer" key={size} >
                                            <input
                                                type="radio"
                                                name="size"
                                                id={`size_${size}`}
                                                className="peer sr-only"
                                                value={size}
                                                checked={selectedSizeOption === size}
                                                onChange={handleSizeChange}
                                            />

                                            <span
                                                className={`group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium 
                                                ${selectedSizeOption === size ? 'peer-checked:bg-black peer-checked:text-white' : ''
                                                    }`}
                                            >
                                                {size}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </fieldset>

                            <div className="mt-8 flex gap-4">
                                <button
                                    type="button"
                                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                                    onClick={() => {
                                        addToCart(productToAdd);
                                    }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

}

export { ProductPage };