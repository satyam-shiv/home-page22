// 'use client'
import Header from "../_components/Header";
import { get } from "../_middleware/get";

export default async function Brand() {
    const res = await get({
      url: '/api/businesses'
    })
    
    console.log({res})

    return (
      <>
        <Header />
        This is brand page
        <pre>{JSON.stringify(res, null, 2)}</pre>
      </>
    )  
}