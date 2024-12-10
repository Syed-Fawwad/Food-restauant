import React from 'react'

import Footer from '../components/Footer/page';
import Com from '../components/CommonNav/page';


const Faq = () => {
  return (
    <div>
       
    <Com/>
      {/* Full-Screen Header Image Section */}
      <div className="relative">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />

        <img
          src="https://s3-alpha-sig.figma.com/img/82bc/a07c/de288adf1e3ed51d209d2c3f30979e78?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQL~Nowe5qHeDwvYTwOPBHfxtToNJ3j1p~R65RrtA3PCLRY-hR8k16Auv57VWEHjebKmSFe8OPaBs6m7zHMn3bxM7MSoVmyl3xY8CyFZGqvo6ia80FhQngEdyc2tl6n6WZatLKelDXF~4n5TdAIbVmmqjVwGN~cmZX3pPFvMXwP7c6by92RAYZbIAlqaWceeoeNu9pAUPyGZeRND7npJAFlZPVILvGR7qFdkM4RyJFLWqC3G5sGvPb7v7eRken4Ba3uC~MneFHQHWPCJAu4eMGr-69tGrYJffGvvGSlbjUgMKmVqJHRD3QhKhNkLQEpgp0mVPONTxkQOqdTJPoTC-Q__"
          alt="Sign-in Header"
          className="w-full h-[410px] object-cover"
        />
        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl font-extrabold mb-2">FAQ</h1>
          <p className="text-lg mb-2">Home / <span className='text-[#FF9F0D]'>FAQ</span></p>
        </div>
      </div>

      <div className="text-center py-8">
  <h2 className="text-2xl font-bold text-gray-800">Questions Looks Here</h2>
  <p className="text-sm text-gray-500 mt-2">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 px-4 md:px-10">
    <div className="bg-gray-50 p-4 rounded-md shadow">
      <h3 className="text-sm font-semibold text-gray-800 flex justify-between items-center">
        How we serve food? 
        <span className="text-lg font-bold">+</span>
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
        veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
        quidem?
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-md shadow">
      <h3 className="text-sm font-semibold text-gray-800 flex justify-between items-center">
        How can we get in touch with you? 
        <span className="text-lg font-bold">-</span>
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
        veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
        quidem?
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-md shadow">
      <h3 className="text-sm font-semibold text-gray-800 flex justify-between items-center">
        How is our food quality? 
        <span className="text-lg font-bold">+</span>
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
        veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
        quidem?
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-md shadow">
      <h3 className="text-sm font-semibold text-gray-800 flex justify-between items-center">
        What will be delivered? And When? 
        <span className="text-lg font-bold">+</span>
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
        veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
        quidem?
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-md shadow">
      <h3 className="text-sm font-semibold text-gray-800 flex justify-between items-center">
        How do we give home delivery? 
        <span className="text-lg font-bold">+</span>
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
        veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
        quidem?
      </p>
    </div>

    <div className="bg-gray-50 p-4 rounded-md shadow">
      <h3 className="text-sm font-semibold text-gray-800 flex justify-between items-center">
        Is this restaurant 24 hours open? 
        <span className="text-lg font-bold">+</span>
      </h3>
      <p className="text-xs text-gray-500 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero
        veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam
        quidem?
      </p>
    </div>
  </div>
</div>



      <Footer/>
    </div>
  )
}

export default Faq;
