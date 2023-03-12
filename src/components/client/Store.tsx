import { JerseyModel } from '@/models/jersey.model'
import Image from 'next/image'
import React from 'react'

const Store = ({ jerseys }: { jerseys: JerseyModel[] }) => {
    return (
        <>
            {jerseys.map(item => (
                <>
                    <p>  {item.name}</p>
                    <p>{item.sale}</p>
                    <p>{item.technology}</p>
                    <p>{item.img}</p>
                    {item.img ? <Image src={item.img} alt="f" width={50} height={50} /> : null}
                </>
            ))}
        </>
    )
}

export { Store }