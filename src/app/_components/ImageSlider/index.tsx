import Image from 'next/image';

const ImageSlider = () => {
  return (
    <div className="bg-blue-400  justify-center pt-5  w-full overflow-hidden h-96 ">
      
      <div className="slider-container w-full relative pt-10 ">
        
        <ul className="flex animate-scroll w-[150%] pt-8 pb-8">
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center"> {/* Adjust width and height as needed */}
            <Image
              src="/slide-Images/image1.jpg"
              alt="Image 1"
              width={400} // Adjust size as needed 
              height={700} // Adjust size as needed
              className="object-contain" // Ensures the image scales to fit within its container without covering it
            />
          </li>
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center">
            <Image
              src="/slide-Images/image2.jpg"
              alt="Image 2"
              width={400}
              height={700}
              className="object-contain"
            />
          </li>
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center">
            <Image
              src="/slide-Images/image3.jpg"
              alt="Image 3"
              width={400}
              height={700}
              className="object-contain"
            />
          </li>
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center">
            <Image
              src="/slide-Images/image4.jpg"
              alt="Image 1"
              width={400}
              height={700}
              className="object-contain"
            />
          </li>
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center">
            <Image
              src="/slide-Images/image1.jpg"
              alt="Image 1"
              width={400}
              height={700}
              className="object-contain"
            />
          </li>
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center">
            <Image
              src="/slide-Images/image1.jpg"
              alt="Image 1"
              width={400}
              height={700}
              className="object-contain"
            />
          </li>
          <li className="flex-shrink-0 w-1/4 h-32 relative flex items-center justify-center">
            <Image
              src="/slide-Images/image1.jpg"
              alt="Image 1"
              width={400}
              height={700}
              className="object-contain"
            />
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default ImageSlider;
