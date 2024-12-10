import React from 'react'
import Com from '../components/CommonNav/page'
import Footer from '../components/Footer/page'
import Link from 'next/link'

const info = () => {
  return (
    <div className='bg-[#0D0D0D]'>
      <Com/>
 {/* Full-Screen Header Image Section */}
 <div className="relative">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />

        <img
          src="https://s3-alpha-sig.figma.com/img/82bc/a07c/de288adf1e3ed51d209d2c3f30979e78?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQL~Nowe5qHeDwvYTwOPBHfxtToNJ3j1p~R65RrtA3PCLRY-hR8k16Auv57VWEHjebKmSFe8OPaBs6m7zHMn3bxM7MSoVmyl3xY8CyFZGqvo6ia80FhQngEdyc2tl6n6WZatLKelDXF~4n5TdAIbVmmqjVwGN~cmZX3pPFvMXwP7c6by92RAYZbIAlqaWceeoeNu9pAUPyGZeRND7npJAFlZPVILvGR7qFdkM4RyJFLWqC3G5sGvPb7v7eRken4Ba3uC~MneFHQHWPCJAu4eMGr-69tGrYJffGvvGSlbjUgMKmVqJHRD3QhKhNkLQEpgp0mVPONTxkQOqdTJPoTC-Q__"
          alt="Sign-in Header"
          className="w-full h-[250px] md:h-[410px] object-cover"
        />

        {/* Text Overlay on the Image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold mb-2">About Us</h1>
          <p className="text-sm md:text-lg mb-2">
            Home / <span className="text-[#FF9F0D]">About Us</span>
          </p>
        </div>
      </div>

 {/* main2 */}

 <div className="m-16">
  <div className=" text-white py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h2 className="text-[#FF9F0D] font-semibold text-3xl font-serif">About us</h2>
        <h1 className="text-4xl font-bold">
        <span className="text-[#FF9F0D]"> We</span> Create the best foody product
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non ullamcorper fringilla bibendum. Urna, elit augue urna, feugiat at semper.
        </p>
        <ul className="space-y-4">
          <li className="flex items-center">
            <svg className="w-6 h-6 text-[#FF9F0D] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Lorem nisi, et ac dapibus duis et elit in consequat.
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 text-[#FF9F0D] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Quisque diam pellentesque bibendum non duis.
          </li>
          <li className="flex items-center">
            <svg className="w-6 h-6 text-[#FF9F0D] mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>
        <Link href="shopdetail" className="inline-block px-6 py-3 bg-[#FF9F0D] text-black font-semibold rounded-full hover:bg-yellow-500">
          Read More
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <img className="w-full h-[250px] object-cover rounded" src="https://s3-alpha-sig.figma.com/img/9a83/42b7/720836129d2c2c37fd0b40cbbcdd80c0?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PpfucaUCI3Zx2-s3mkew79MnDDM1fG0c7Hlt9bxH~S~rVVQ0yO0TOhmnFkuNvwoYPYqmu2t0c8E-srGmMmPA6EGX4A0EYjNuFwbfpgRLn0tBLVCBtbUTL7QOnpa5EAcsYuOHBZu3h4Yh2LueGH~MITLkcdnb1wPtMcAheA8naZGwVnB9ZqywYhRCPCks-Alnx-HOeXuQLOdiqVQTWUSr-iQrYcDS2XTvTnYJ3YBe6QeaOjuxrVkNWS919Ft9EDyJwwSQjCDBdPRD9ICc3S2HL8m6HnLGpwJYhdgEbs4tKj7bznOoLmYooqhJjfCtoYb0~W415Np397SvVsLAP56y3w__" alt="Main food image" />
        </div>
        <div>
          <img className="w-full h-[120px] object-cover rounded" src="https://s3-alpha-sig.figma.com/img/b3c4/f89f/63d784f7e0694faa1abbb2c2e8c2f4cd?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewSCFmbFGPIoz76A~uaUx3eARwlvwr56UH6Jx-X2~zXo34vZv3sgxfg5dRo~yPikjqXGsk7EPD79Hz09qCrEmpqAbdvFPgJLR-SNx2xLSkGvkcgELz~0jYMgm3mvP85mwnIk9Vdh-BsQ5VyWSrLuLOTH2xEa4K4xZSKXL3LUdeXi0V8g~op3gzUAWZVxZz80kfdvoPlnvV6jB6FKCsXNzJr7jNOjjmNRQhhNYxx1zL33ob91wU9TFbuIKrGlTNoJ9QTGqihs1KFp1l1Xwrp-bdSITyl77Lz5HcsIgLZX5adaAHTPvdbNcrN3uMC81eS~J-hEXVdiJqpGlzyEUU7GxQ__" alt="Food image 1" />
        </div>
        <div>
          <img className="w-full h-[120px] object-cover rounded" src="https://s3-alpha-sig.figma.com/img/ebbe/da0a/90e9539d34a966a134a41b5fb29a7b88?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kh4eRHlFnIgM~dn~JmimIwnqtj4yjBUdJh~sopn7UtKFfEufx2X0T9WeWcuvyjB-Ja6Zkgcx6yqhDPHyRXynvjoUvDsMxyT7WDZNPFvR~AVjeUrK5XBFXQ7avtVD7iHgym7LYf0Sm7a1QZD3CsMLd1GYXqc8m4GNJjD3-bojRPJaCGGgcnhcEBP2gUTDuGVItPnHh2358NcZOyk9ReQuYriVo~~DSZEEl2BobIXvVqLjbyaewDmwDJQNyEpjWYTrm6qU35JXLjZjAy7mAeF~IdMpQanRMij4wMDmK8HL5ecYYeIhtDJeFuSZYs2twdQOxh0-HwysaMnNQcRPYypr4A__" alt="Food image 2" />
        </div>
      </div>
    </div>
  </div>
</div>
{/* main 3 */}
      



<div className="container mx-auto px-4 py-8">
  <h1 className="text-center text-3xl font-semibold text-[#FF9F0D] mb-6">Food Category</h1>
  <h2 className="text-center text-4xl font-bold text-white mb-8"><span className='text-[#FF9F0D]'>Ch</span>oose Food Item</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="relative bg-white shadow-lg rounded-sm overflow-hidden">
      <img src="https://s3-alpha-sig.figma.com/img/6ae5/7915/290d08005ab80fbaeee1c75962765f96?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QGCkOyq2TC27sDHLsSy7PXcYleZ5t9vSn3MkpRh7cAlXwxMoScVts9iFrzQrwyVgtyG0aWiDSDgC4ApCyJfbxjTFyKkqCBcJKQRn6vxq3cSaCJpPNEv5law-lSeQX~GG~DGIcYefz7rupLa-JIWZiQQpdgFsbrmyyw9nF9jJO3HrVrU8xBd5DTlyk6JHvk3~DRPY6thAJ6c0qNNP3Lmzh0Jb4tvdSRoyymP34Om-PIpLiP-LHS-yFsdX3z42K3UHanB16~5aDerkCjTUyadaVvZLSbx6wvte8aEDsuHd6OwpLwbn9lMc921KrCtjsseMeAABhzy99CPqkE-8cOPZqA__" alt="Dish 1" className="w-full h-48 object-cover" />
      <div className="absolute top-2 left-2 bg-[#FF9F0D] text-white text-sm font-semibold py-1 px-3 rounded">Save 30%</div>
      <p className="absolute top-10 left-2 bg-gray-900 text-white text-xs py-1 px-2 rounded">Fast Food Dish</p>
    </div>
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      <img src="https://s3-alpha-sig.figma.com/img/f33f/a312/82b389ea7fd5eae34501efabe507e7f3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fYEOJLJmbmqB~vZQGF01sACCTGVKvUhC3YA1ZTqwrEmivdadsjyzgMIrKWOCQ3ARnU52RAT14n4Uufq0y70Zj6kERROka-JgUMj5651c-Ay8ZvAMSetjWavfGesqp67ljiP2pQUvMXRSbikzRfNeRNE9Jz-cYcnFTHFsk4UUth9kmj6Ylvxb92mBuWRqkWNBsBErqpyxnsh3TjJ4msgBloRmJ9dO2Ty2jEYDwFY~CdXZr4pj1-mi4anlX3-WEQ3Y2u5QGwFQhH6BOLhPcJdwyrAPrhpx9BeaFNxSR7ZRxj06gE~g~WIV1eVSVXagX3v7PfETHu1qeNg9q6A-WCZugQ__" alt="Burger" className="w-full h-48 object-cover" />
    </div>
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      <img src="https://s3-alpha-sig.figma.com/img/4a4b/680f/e9efbfd6ed7f2dc01adb26a6f18a5928?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Im24odjYMGsxmtgDGcuz1Gsj9CjWPqxk7OQPEvGf9PTs1AYF905dZqMMjbPPO3QOcyr2muXuoJAta7r-c8t166C-GoBE20TR7lOo3IxUj1S3WcjBLCz0esPgp7kiT9IggAxsGJBllKRPoSgIzHG5HonbamA0IuhPB1d4jofa5Asivq-LOsMtNAGj2PuNr-2tmj3EOb0nVj02diw9C1I9HrK9d61hOP8iKHSTFpjgWXIy-59nZioop1b7sUqzqG1t5smocsnPZDytsmMNcY5l1kj4k8ZToSD0nv44QhBbD5PJKPrBdC08jOjXXREfi2wCucxCzSYj1bv0zNTfZYsW0w__" alt="Salad" className="w-full h-48 object-cover" />
    </div>
    <div className="bg-white shadow-lg rounded-sm overflow-hidden">
      <img src="https://s3-alpha-sig.figma.com/img/1b1c/50ed/2f81e7830ebf065a32e5637a2540c2fc?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLwqp3mmKmb6t-JZA3mdYKp5I0DSrIH7Iku9-8eNkR3M4gk1-p7hfXr9GS6-aNSNuHMAICxIzjMZzz9v9tloz0KzQ0U6okUsDiam2q~cOJQS4ontl-PHJTbgSpDFZupj~xBRTM26z6Nwu47U8lAk2n8t-~BAiBgfBz7LTf6bD5xnw4RrehbeDUwjlK8ZMYr60Vv~~v6tjV0eVs5Vn~25Pf5G8z9oBfUl-Z5PiZFtjcV3PhfCBl14p1zDOV~MYCDl3fKWDUSz5mfRLKF3SZD43lD05BwLSeziCTjUPKDgSNttKGJG9O9pqrsIY1ZP~mGg41G6zZiKME-0OpcNiDV10A__" alt="Donuts" className="w-full h-48 object-cover" />
    </div>
  </div>

{/* 2nd part */}
<div className="max-w-7xl mt-16 mx-auto p-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/c3c7/402d/a6dca01876b16c7cdde3e580a2d9335d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DpnhQa5MTZMTJjEL4VOQ0pOU-DLHqRaxXLBs-yiP8OHunXDP8BnmABdsgFCfBc8TozRnu2EjSt-9uJOOOGCd1LYFuOSwxn5g5i2X51fsFC3QoNscFbUNXoH3LYg0pqrPwKSMmQmqwlL1Lgv-r7g8Ex28u6NfUbrmeNXjdadSLYhKfaUdYoKis8M-3TElXq1ezPa-P~AMKtWOriH1doJI5U5Cmuxr9mK-o-dTZY1tulROrWMvGo6nJebrS6q5kpmW5F1yY4LzDOdtUN6QVTngmebvOaaAFUZQxMf5EZGkrJ7g4fCkkqwrq8G83tZLcVHVJMWxx-IZ~q0HaWeL8U6HjA__" alt="Tacos" className="rounded-lg w-full" />
      </div>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/ee28/1714/c79fb6762b1e9aad373372c4b5a7b8fe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AmDAPcdUNGSPePtJNH3UMalNuN~cCVDBcyMav9roIUDFMDxGAllE-KlxMkWdWoI7ROLjugZj90xhr7UlhBaRIQkHtrD7~nZgnPPZ1qBgsaIQD9To7wkTSKP7YbCLItJOzLht-gjgaCDHccMGf91U2ksAIL~ql-kgqVT95zT4AcNuF-k8kCw3rcJgfn6vqK~2wmh4Nd24yRWUDIM1J6DcKLkViipTZDvI9BxzJgtNPCC2VHY64CdK5DlNzNNdrRAjhAOOd~7fA4WR0W78cv-uL37uPQumSwi8IvCzDFqLdn5YcCvehLzKOnesvmqAA48Ez4CImw99QVupNf1N4VNi9g__" alt="Burger" className="mt-8 rounded-lg w-full" />
      </div>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/d8de/2bc1/f4b6077a5373381ab8936b05ed586275?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lKFzoZxMnTEL3F3IYPdKNBc0C~bYB8rtz7gWE9MRvqwwupwm2-BCBske3slsuGhLr1tsigHZeShZpzkDFew0VcRnSlIfI6lfAmjuLVhKF2JgZZpyG1Lk9PR25JQWK8R9e5wEU8fWFV1ghOr6JBYdEI9ccEBrzpvGYPboQXJ5hOWO4ck1Ha1ythCBhZR3KQUZ4GhSNgcyPOeDKBDjcgvUwhoXkwNuSHuJ28LQ9pVmLeWe7Z8FIC0EYXTu9kxrsJRU5dojXQnrI4h1bjnZXwmkIZXMXkjYXg5wJ1LoEzPVk7LKaqbo6oFvV4R-CxleMAXnSTrshbXHf6NZUMcHINAeTg__" alt="Fried food" className="rounded-lg w-full" />
      </div>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/0151/395e/7b34df15d4416b126f556c9463bfb4e8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G0xukQD5Zr57HF8uStlg-M-Ls1ALRKYey7Yf179R5wGr1QZdKs7CPnFzXONvIwIPdPUUzHPKXfLUpqUbbytyapkUrcJGtDjPWhF5QE9wSC~4vppIlxgHbbCH15S6cZRAUPvdRWVtBggU~Kq3n~oFzY4gn92UIO1bKtCHoSasAo0cspexVszhnk~f8uhvGKQLzFOBc1~CQA~qAVqIekaD0ax6g4NWjO7aspgQAuYfBvcAuIZTaaW0qsjVCQfT3RYzJOdFBipZz80ZjpGo4FheJOnfuSCEGSHUfcUNwvzrZ44jpXqlBchKR7NCGFgW0P-Q5EckL3LCStTA2fZSqonOhw__" alt="Cheeseburger" className="rounded-lg  h-40 object-cover w-full" />
        <img src="https://s3-alpha-sig.figma.com/img/501b/2409/7bb7439b5ea205c15290f204572869de?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dk6ajvEr8W1OCQISXhORVaEhjnVrcQ8r531n043kB8TodfkehvDiNPrwRdmgElI~XjzBqqqZ-2cczbuoyMJxv6pvb7di6DH3iRBIDAbLfbwNAymt1aK5QMnJD9dzxt9orENlJTQg1fOWK4D231zAp9BxgJ3qaMva~CNixuD8LWzuiDNcCbGgJZbG1eSEl6xuQx9iNLBVAVm-GWlw0TLzDu-pmyClye6-eqYVr8m-TDpEa24vVJZSMm-t1iRIZqNmf-PS0I8d3-8dIenWJ~F9ySTSpO4tLYI1mQlfFRIPIcetOIpaRTu86-kQqMPP0QFd875pnxWoK4V4JqHv5bbGLw__" alt="Cheeseburger" className="rounded-lg  h-40 mt-4 object-cover w-full" />
      </div>
      
    </div>

    <div className="text-white">
      <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
      <h3 className="text-4xl font-bold text-white"><span className='text-[#FF9F0D]'>Ex</span>traordinary Taste<br />And Experienced</h3>
      <p className="mt-4 text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      </p>
      <div className="flex mt-2 space-x-6">
  <div className="text-center">
    <div className="bg-[#FF9F0D] p-3 rounded-sm items-center  inline-block">
      <i className="fas fa-hamburger w-8 h-8 text-2xl text-white"></i>
    </div>
    <p className="mt-2 text-sm">Fast Food</p>
  </div>

  <div className="text-center">
    <div className="bg-[#FF9F0D] p-3 rounded-sm items-center  inline-block">
      <i className="fas fa-cookie-bite w-8 h-8 text-2xl text-white"></i>
    </div>
    <p className="mt-2 text-sm">Lunch</p>
  </div>

  <div className="text-center">
    <div className="bg-[#FF9F0D] p-3 rounded-sm items-center inline-block">
      <i className="fas fa-glass-martini-alt w-8 h-8 text-2xl text-white"></i>
    </div>
    <p className="mt-2 text-sm">Dinner</p>
  </div>

  
</div>
      <div className="mt-8 flex items-center gap-3 rounded-sm h-12 w-52 bg-white">
        <div className='w-2 bg-[#FF9F0D] h-12'></div>
        <p className="text-2xl pl-2 font-bold text-[#FF9F0D]">30+</p>
        <p className="text-base text-black">Years of <span className='font-extrabold'>Experience</span></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className=" text-white py-10 px-4">
  <div className="max-w-xl mx-auto ">
    <h2 className="text-gold text-lg text-[#FF9F0D] font-medium mb-4">Testimonials</h2>
    <h3 className="text-2xl font-semibold mb-8">What our client are saying</h3>

    <div className="bg-white text-black p-6 rounded-lg relative shadow-md mt-10">
      <div className="absolute -top-12 mt-6 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white">
        <img
          src="https://s3-alpha-sig.figma.com/img/a230/9dbb/7a5f4d862c2abe4b31f2e5bf78bf6511?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hrYecBsgqXUxnjkxXXA108D5dT1QF5LYfRaYIBNguPI10XOkUEW24-K8~N5Lreb5rlNHnSQnNpi2pymK7o6TAldxHUu1bJJvEZlGw4wuSw87AcNfrRERiD6LPpKglTFhdPk4LTwRBad6gxGxnIkIliRP500IRNLYsHMOPspORuAlHUU1JiAYd9czRYObM5p--muEjKj0bPZdEJrHYYOhe~x1DY52PboK4VSQBdiq6U-ivxk5x7lT9aYwaj7l-7~WRmyF4fZVvN8WNNNB90XPG115BqfQQ0oYzCCUTZo6Kr9Vu4ABesSybBEUERkqJ91K8pJQZw80LdJLF1is1MlDYw__" 
          alt="Client"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-12 text-center">
        <p className="text-6xl text-[#FF9F0D] text-gold font-bold">99</p>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non volutpat tristique tincidunt.
        </p>
      </div>

      <div className="mt-6">
      <div className="flex justify-center mt-2">
          <div className="flex space-x-1">
            <span className="text-gold text-[#FF9F0D] text-xl">★</span>
            <span className="text-gold text-[#FF9F0D] text-xl">★</span>
            <span className="text-gold text-[#FF9F0D] text-xl">★</span>
            <span className="text-gold text-[#FF9F0D] text-xl">★</span>
            <span className="text-gold text-xl">★</span>
          </div>
        </div>
        <p className="font-medium text-center text-lg">Alaimin Hasan</p>
        <p className="text-sm text-center text-gray-500">Food Specialist</p>
     
      </div>
    </div>

    <div className="flex justify-center mt-8 space-x-2">
      <span className="h-2 w-2 rounded-full bg-gold"></span>
      <span className="h-2 w-2 rounded-full bg-[#FF9F0D]"></span>
      <span className="h-2 w-2 rounded-full bg-[#FF9F0D]"></span>
      <span className="h-2 w-2 rounded-full bg-[#FF9F0D] opacity-20"></span>
    </div>
  </div>
</div>





      <Footer/>
    </div>
  )
}

export default info
