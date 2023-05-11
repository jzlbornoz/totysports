'use client'
import { useContext, useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import Image from 'next/image'
import { JerseyModel } from '@/models/jersey.model'
import { AppContext } from '@/context/AppContex'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
};

const ProductPage = ({ productItem }: { productItem: JerseyModel }) => {


    const product = {
        name: productItem.name,
        price: productItem.sale,
        href: '#',
        breadcrumbs: [
            { id: 1, name: 'Home', href: '#' },
            { id: 2, name: 'Store', href: '#' },
        ],
        images: productItem.img,
        sizes: [
            { name: 'XXS', inStock: false },
            { name: 'XS', inStock: true },
            { name: 'S', inStock: true },
            { name: 'M', inStock: true },
            { name: 'L', inStock: true },
            { name: 'XL', inStock: true },
            { name: '2XL', inStock: true },
            { name: '3XL', inStock: false },
        ],
    }

    const { addToCart } = useContext(AppContext);
    const [selectedSizeOption, setSelectedSizeOption] = useState(productItem.size[0]);
    const [selectedDorsalOption, setSelectedDorsalOption] = useState<string>('');
    const [productToAdd, setProductToAdd] = useState<JerseyModel>({ ...productItem, size: [selectedSizeOption] });

    // ---
    return (
        <div className="bg-white pt-[11vh]" >
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <Image
                            width={1200}
                            height={1200}
                            src={product.images[0]}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                                width={1200}
                                height={1200}
                                src={product.images[1]}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <Image
                                width={1200}
                                height={1200}
                                src={product.images[2]}
                                alt={product.name}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <Image
                            width={1200}
                            height={1200}
                            src={product.images[3]}
                            alt={product.name}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-500 line-through">{productItem.price}$</p>
                        <p className="text-3xl tracking-tight text-primary">{product.price}$</p>
                        <form className="mt-10">
                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    <a href="#" className="text-sm font-medium text-primary hover:text-success">
                                        Size guide
                                    </a>
                                </div>

                                <RadioGroup value={selectedSizeOption} onChange={setSelectedSizeOption} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {product.sizes.map((size) => (
                                            <RadioGroup.Option
                                                key={size.name}
                                                value={size.name}
                                                disabled={!size.inStock}
                                                className={({ active }) =>
                                                    classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        active ? 'ring-2 ring-success' : '',
                                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                        {size.inStock ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-primary' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            <button
                                onClick={() => addToCart(productToAdd)}
                                type='button'
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-8 py-3 text-base font-medium text-white hover:bg-success focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Add to bag
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-12">
                                <div className="grid grid-cols-2 grid-rows-2 gap-12">
                                    <p className="text-xl tracking-tight text-gray-900">Tecnologia: {productItem.technology}</p>
                                    <p className="text-xl tracking-tight text-gray-900">Marca: {productItem.brand}</p>
                                    <p className="text-xl tracking-tight text-gray-900">Temporada: {productItem.season}</p>
                                    <p className="text-xl tracking-tight text-gray-900">{productItem.players ? `Dorsal: ${productItem.players}` : null}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export { ProductPage };