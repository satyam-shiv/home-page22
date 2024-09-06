import Image from 'next/image';
// import banner1 from '../../assets/images/banner-bg.webp';

export default function Body() {
    return (
        <div className='overflow-hidden'>
            <div className="bg-cover bg-center flex "
                style={{ backgroundImage: `url('/images/banner-bg.webp')`,
                     backgroundSize: 'cover'
                 }}
            >
                <div className="p-16">
    <h1 className="text-white text-5xl font-bold leading-relaxed">
        <span className="text-yellow-400">Buy with Confidence</span>
        <br />from <span className="text-blue-300">Verified</span> and
        <span className="text-green-400 ">
            <br /> Trusted Instagram
            <br /> Sellers
        </span>
    </h1>
</div>

                <div className=" p-14">
                    <Image 
                        src="/images/banner1-med.png" 
                        alt="Description of Image"
                        layout="intrinsic"  
                        width={356}  
                        height={780}
                        className="rounded-lg  m-6"
                    />
                </div>
            </div>
        </div>
    );
}
