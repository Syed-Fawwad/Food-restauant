'use client';
import React from 'react';
import Navbar from '../components/Navbar/page'; // Navbar import
import Footer from '../components/Footer/page'; // Footer import
import Chef from '../about/page'; // Chef page import
import Link from 'next/link'; // Link from Next.js

const HomePage = () => {
  return (
    <div className="w-full bg-[#0D0D0D] min-h-screen relative">
      {/* Navbar */}
      <Navbar />
    

      {/* Background Image */}
      <img 
        src="https://s3-alpha-sig.figma.com/img/bcf0/20ef/d92778ab1e51e3d679ae6f027cad1785?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oSlTdJ-d4CxtUWeXTQplBgYhw2ML~xPelyQdsGosrWLeIRGTo~lQJmq9fn~H~H1uC7kX0JNM~0Xx9ozEz6exYpx8BQC3T5b6-~lshgfuJAxTh4xIEuSLAjNtL6Z7tKcwjTOyh87k8~9iWs1PvVdJ9aOMs~6eYSGuuDv5w5RitIf0vLfGUbBnqIO8uvJ85h6QKYgi0WbNYxdCZAPxD8HZc1kHeFsceHUk6yaPSp5qBFy2ZbQGHmzjPwIIAvNU06tnosNYhHHQXJNAM7JX8tPTH48TGZTNDZRQI4Dywek~h~WWTXDNz4fbbTwQHfSPjQp1BxD7Xoq0dMKXzqHOUkrxnw__" 
        alt="Background" 
        className="opacity-20 object-cover w-full h-[100vh] bg-center absolute top-0 left-0"
      />

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 pt-10 relative z-10">
        {/* Sidebar Section */}
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:space-y-6 lg:px-4 text-white">
          <div className="h-16 w-[1px] bg-gray-500"></div>
          <a href="#" className="hover:text-[#FF9F0D]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-[#FF9F0D] hover:text-[#FF9F0D]">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-[#FF9F0D]">
            <i className="fab fa-pinterest"></i>
          </a>
          <div className="h-16 w-[1px] bg-gray-500"></div>
        </div>

        {/* Main Content */}
        <div className="text-white text-left max-w-lg md:max-w-none">
          <h3 className="text-[#FF9F0D] font-serif italic text-lg mb-2">It's Quick & Amusing!</h3>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-[#FF9F0D]">The</span> Art of <br /> speed food <span className="text-[#FF9F0D]">Quality </span>
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          <Link href="menu">
          <button className="bg-[#FF9F0D] text-black font-semibold px-6 py-2 rounded-lg hover:bg-orange-500">
            See Menu
          </button>
        </Link>
        </div>

        {/* Right Circular Section */}
        <div className="relative flex justify-center items-center mt-8 md:mt-0">
          {/* Large Circle */}
          <div className="absolute w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full border-[1.5px] border-white z-0 left-[10%] md:left-[5%]"></div>

          {/* Main Dish */}
          <div className="relative w-[360px] md:w-[460px] h-[360px] md:h-[460px] rounded-full overflow-hidden z-10">
            <img
              src="https://s3-alpha-sig.figma.com/img/c057/0cdb/15aa0f4f312fd5f483e60b93f68c90ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KekfcZ1FIgdsuduvG3FEaZPDcd~cuC4U5xL0MrMaLnZLM8ysmXhkakM3Wi16kBm6z0lF7hJCk9jSn1MOH0QFdEhcLvzL8SA1jAPlckxHiUJ17gn9zzjRKJzeV-mP51r80~TphLYJubdk3EhEue7Ldy0ychNDXLN5YY8E-fyne3JrQx3juJzYCGUfyYS77GVZfDLbYFhQuzRVlHUqT~eOKheB~nu6Co0-HYJOisDUPT9TWnrCVGWOVJbNu7E4PnYFbGJoBoQw5Alswn1pPKy8ea4ylBQ37PJ9wAZ160Av0DHiGgcdmKPV0C2pbPkG37csFCOGi1TLjtvXspbqQYCyrg__"
              alt="Main Dish"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Ring Image 1 */}
          <div className="absolute top-[20%] left-[5%] w-[60px] md:w-[80px] h-[60px] md:h-[80px] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://w7.pngwing.com/pngs/786/552/png-transparent-platter-of-grilled-lamb-italian-cuisine-pizza-pasta-food-plate-healthy-food-food-beef-roast-beef-thumbnail.png"
              alt="Ring Image 1"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Ring Image 2 */}
          <div className="absolute top-[40%] left-[-4%] w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/dadd/02d1/84dddf1d8b9bc95b4a094dd0d3efa64c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qC5ITn6HeTn-sfWxEIRsu4OZOs0i2NJS0P~a62lhPHw7VqiczoiCCSxZju4SCFUmQZRCeUo9bzSIEdBrL9zyrHEXigEvZSdDDfZgvhQgq8A3ukbXHP6CLr60t8rX51kQl9RWpZXkB2I-4J21gEhz4LtTuIZqN1QJiGES5L1i638STmJerHHqeRzdVSw5XiVPUZIgQofkF~QFf3qZmuZQpawYOoyrcIsXiGE4ILkcgsPxM8T3KPwv-Ael05Cf9vPqq~lBHqj1MBhtrQU0DMTvOXmsP4Wg0J6quTzaVbTjGGTZQL8BEVqimDo8NOzfywQFO4f22CvoYAqGXYIuwE~Qvg__"
              alt="Ring Image 2"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Ring Image 3 */}
          <div className="absolute bottom-[33%] left-[3%] w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/be8b/3c94/f504c2123b9bef2777c224a9b0110fdb?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tc0vbdGt6kBT52Bq88GBbwGAQLVBHNHo1~lHeZDBqKwysoVHXs3CwWDOxl3szuBJUolLd-9tEz5~fei8FoKYinIPiSoO~jNfx1JjY7u3TcZ8XW4YkirSGbtjNB0SGzbA9Bem8NdokaIV0dB4lAaf3kEQmZFWvMwbLCgApyZdFEOJU8fzxsl1GjowE3Owxf-rYLa1Wl8MzvCMDpFvl5H8JiKD1oA4~5HVKMGwdFsKl9a5A8gojydfBvR8sFEEpwoHUGlLmJeF9qvdJ5CSbZxYBB1T4GvqIZl2Ik~gCo7eL95Ip-DBOPOFEONoqA0pAv~pANGBlkSsHwp~PGxyJzVdNg__"
              alt="Ring Image 3"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
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
{/* main page 4 */}
<div
  className=" relative h-80 bg-cover bg-center text-white flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://s3-alpha-sig.figma.com/img/1944/ac8e/e3b37e0565ec1924d79ec4cd31db8f19?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VEcHnEoMGhDqTbaz9rT5JicX020~6F69OhuiJ707E7-nGnlHc5CBdnwy6nkKJ4n0SnNwgT-jH0W~N0qUkM6xuT5E2G8s0~wdFG2sS2-B1EXfxLY8AqTQmeIC7LgtpzMkBDteNeTh9u7sd8EcisofRQSR-e61pfmx00znOUO-FtrEz5GpxHtRcz8NMfsn4Xx~bLKKGz6jSsvMgivhujEflMTEBXMoACi-gT5qfJzpb0yqd1Z~7pPTOHCVUEdLEchwgqwU-P4gGBIE1V4OoKQBezJD-WA1rVJVlCFHfVHMUCvapmQxKaAyJ-NZiNduStX4pK-qMO5WO5B9bUdixkERkQ__')",
    opacity: 0.9,
  }}
>
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 text-center max-w-5xl mx-auto">
  <div className="group">
    <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍳</div>
    <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Professional Chefs
    </h3>
    <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">420</p>
  </div>
  <div className="group">
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍔</div>
    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Items Of Food
    </h3>
    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">320</p>
  </div>
  <div className="group">
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍴</div>
    <h3 className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Years Of Experience
    </h3>
    <p className="text-xl sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">30+</p>
  </div>
  <div className="group">
    <div className="text-3xl hidden lg:block sm:text-4xl md:text-5xl mb-2 transition duration-300 group-hover:scale-110 group-hover:text-yellow-400">🍕</div>
    <h3 className="text-sm hidden lg:block sm:text-lg md:text-xl font-extrabold uppercase tracking-wide transition duration-300 group-hover:text-yellow-400">
      Happy Customers
    </h3>
    <p className="text-xl hidden lg:block sm:text-2xl md:text-3xl font-semibold mt-1 md:mt-2 group-hover:text-yellow-300">220</p>
  </div>
</div>
</div>

{/* // main 5 */}


<div className="px-8 py-16  text-white">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-semibold text-yellow-500">Chefs</h2>
    <h3 className="text-4xl font-bold">Meet Our Chef</h3>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className=" p-4 rounded-lg">
      <img src="https://s3-alpha-sig.figma.com/img/2956/e89f/63b3ad3780f14ec8050d5330d0bbe3d3?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HAZ8FNtnCjwL8D~HKymrHCSgsX1quIC0mbddG9sqwiWdAfn0Z2xdmPWJ2GaOtw6tASmgLq94UeaRS-GWKD-FU6-vCS7A-EUW3N9eHL64OHjGFY6TCYN-PxD6IzeeYJwRljxPxygAPA58zBcPX-9gp27-CqguyaG9jPNHVfsagAioNLxWGtAhqN7hfdzdzq~zqU-qQhSB9rSscLdlYG09A--4YL8~mAr6YMB3PoCcxkmUc7g~6PaUJH4y2-5ENWxntCae1rF~hh6qXsg7nFZBlLAymf5Dzp3d6sFTirZrDyRri68ws2Yt~uwgPGE~6HNbVbbsZSYPEC8QYBdCal10EQ__" alt="Chef D. Estwood" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h4 className="text-xl font-semibold">D. Estwood</h4>
        <p className="text-sm text-gray-400">Chief Chef</p>
      </div>
    </div>
    <div className=" p-4 rounded-lg">
      <img src="https://s3-alpha-sig.figma.com/img/739d/a984/393201b3dc9e27fc4fb0c36fcf325121?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g0yF7~Dm8AnTOV~YO8kQJCuFGX3YUVdGocW-51lhlTi05uvZoL7Gvrbql3AnO6g2al5ZlF263hEfPLqitW5uDBto3~ufR2VGADwGHp93FHGFYa61Tqfp302dnKgx3krIo7leMdVgOBcd5vvF7vUuTth2StSHPwmmCVueC46NRyLpabGwAuvCll-CwAdiGSXNen~bnzYFB2IhUvQHDGsoWbckTLuojU3Lou3POJe0OyFqnmzONESwFdQTKF2xm1bzywLlRKGxkUqSvgpBkIbPXJDGuvZITeA2wQXh9LpJ61ne2UjwpsSRHZ4mP-~eX5dsqEvimIigw~Tc1ka2VyiN~Q__" alt="Chef D. Scoriesh" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h4 className="text-xl font-semibold">D. Scoriesh</h4>
        <p className="text-sm text-gray-400">Assistant Chef</p>
      </div>
    </div>
    <div className=" p-4 rounded-lg">
      <img src="https://s3-alpha-sig.figma.com/img/02df/ba08/73840bb5acc63f60d771890f69a51dff?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lV0AbzcqPNlOyoKmjOuHU3L-myTju2wp25Qn23RT1H32MynjCLym4P-jE9EdUs-vmrFbJnMUOUFtvo7MUef63042-PD2BMX5EU5c6XmXmm1naNH-Zr~0mBtNFp7wO7Hy2dIhTLcK2Fc~EEW~cJ05MoxQ9vjeqbF1unkqRmSWVv5Z25FGV00dt0vgJYKHbKRe-U6Hc3QByRxGRK6LL9xGotR1uLFeOPringH93PXQCh2qCFLAf9Q7PsvGpxOaA3C7woce9LekK5U7PPn38DnETF6e--IGrF5jZJNVhhqfNt3vNnBXo546Oet-okvVSlp8utc5EA8cKMrUpnRND9PohA__" alt="Chef M. William" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h4 className="text-xl font-semibold">M. William</h4>
        <p className="text-sm text-gray-400">Advertising Chef</p>
      </div>
    </div>
    <div className="p-4 rounded-lg">
      <img src="https://s3-alpha-sig.figma.com/img/decf/0517/d3f00e63da45d56d728ed0d393ec2d87?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jVrWlmKKIagZ9Eqb0DzysdnVRd9lHauFqOImCFpeGjnEmLZKSAMVfcKOrEHAsfy4h2zsPrDGbpzNhe4Aox5DS7A9hQRdUs7-7uImL6LhD~LOHeYl7notq683ewWf1PGILyt6Euif-3sxSRrD9fImVJHaLAwjBE1zC5-A6pY-ElJudnQ-b7Y6aZItGrhohO1uw6gLiTjEQw14qRtX4B3E0DfSgfOsssGk8snHRE-xKH~Q5uBndpHrUXcvfclRh-nuS~XNlizPD4K8-zOzyeagd8ZsJQi7oTaGPvCmFOZbRPg1EksKSFiCApsrRYKe6x-6z7Pveh3XWmi1PbekDaYRHg__" alt="Chef W. Readfroad" className="w-full h-64 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h4 className="text-xl font-semibold">W. Readfroad</h4>
        <p className="text-sm text-gray-400">Chef</p>
      </div>
    </div>
  </div>
  <div className="text-center mt-12">
    <button className="px-6 py-2 border-[#FF9F0D] bg-transparent border-[2px] text-white font-semibold rounded-full hover:bg-yellow-600 transition">
      
    
  
            <Link href="/about">
            See More
            </Link>
            </button>
  </div>
</div>
{/* main 6 */}

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


{/* main 7 */}
<div
  className="relative h-80 bg-cover bg-center text-white flex items-center px-8"
  style={{
    backgroundImage:
      "url('https://s3-alpha-sig.figma.com/img/8c40/329c/c1efef9d11e4b3ab985cc7b147dd76df?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUQnXYLxiPJyI4tYEi6Sa06ASNFYHZGI-XNVydj6B19n4xioc58Hfl7L7DDgngR-fE7EqNlQ73iObvgy8rwLunniIRaxMjLQt1GG9CBvT6dJMcKdu5kS3qIBiEG4bNjBwVJlDIaMTgDjJ3AL9x2xxfbX56btfs6VIK67F-UiA5IzRdX8gyeYTOcG0VskERNW6WFdzu71SMSq09Wc4VBzUFQYzk5xc0HZeWlDLPuiXlTheiOnNiWJTnPPf6YUdzEP8hFbxFvHpZJqqyB4rVOysylLtgE2mZWiuH0QUAFobE10JyE8K-3Jy1isQVT2WbodHVrBKoPcsCy54ZTMQcrLgQ__')",
  }}
>
  <div className="max-w-lg text-right  py-6 px-6 rounded-md shadow-lg ml-auto">
    <h3 className="text-lg font-semibold text-[#FF9F0D] uppercase tracking-wide mb-2">
      Restaurant Active Process
    </h3>
    <h1 className="text-3xl font-bold text-white mb-4">
      <span className='text-[#FF9F0D]'>We</span> Document Every Food Bean Process until it is saved
    </h1>
    <p className="text-white text-sm mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque Bibendum non dui volutpat fringilla Bibendum. Ut ac augue
      urna.
    </p>
    <div className="flex justify-end gap-4">
     <Link href='shopdetail'><button className="border-[#FF9F0D] border-[2px] bg-transparent text-white font-medium py-2 px-4 rounded-full hover:bg-yellow-600">
        Read More
      </button>
      </Link> 
      <button className="flex items-center bg-[#FF9F0D] text-gray-900 font-medium py-2 px-4 rounded hover:bg-gray-300">
        <span className="mr-2">Play Video</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.414v6.828a1 1 0 001.707.707l3.586-3.586a1 1 0 000-1.414L10.707 6.293A1 1 0 009 6.586z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</div>


{/* last */}

<div className="flex justify-center items-center min-h-screen  text-white">
  <div className="w-full max-w-6xl px-4 py-8">
    <h2 className="text-center text-2xl font-bold text-[#FF9F0D]">Blog Post</h2>
    <h3 className="text-center text-4xl font-bold mb-8"><span className='text-[#FF9F0D]'>La</span>test News & Blog</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="border-white border-[2px] overflow-hidden">
        <img src="https://s3-alpha-sig.figma.com/img/de2d/f62a/18bfe05bad2bc6f245b89416f19715f6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UGf36f8GY9Hftnq8nV9fpd8LQdT5vjpRa9c8NrxNpEq-JlvdV7DOQCiWIzxxsBEybAGmO8bJSMrspQCMbS6hgQYFk6SAn9yOjhXFsY9-QyFX072hdbPiCS0U0VaMvqbwTeNYcg6yGX5doaXRoNLpiTGgKIKze2oja0Q1MwHa381QVJN6KbhTgRSYmtYWksfiVnU3tB3u394vrFJQoRGCnn1clDMZhcbo3YjhiDwAJI~ElzbMLDIUpU2QGdYR9pWPUw92sa5FmDu502ZXIbl9S-eMI7YG2cdg3f78Osc0Fund2XaiXlmX8HE1tGtr6FuM6TmtnVtuJ1zo2sDct427wQ__" alt="Blog 1" className="w-full h-60 object-cover" />
        <div className="p-4">
          <p className="text-[#FF9F0D] text-xs mb-1">10 February 2022</p>
          <h4 className="text-lg font-semibold mb-3">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h4>
          <a href="#" className="text-[#FF9F0D] text-sm font-medium">Learn More</a>
          <div className="flex justify-between mt-3 text-gray-500 text-xs">
            <i className="fas fa-thumbs-up"></i>
            <i className="fas fa-comment"></i>
          </div>
        </div>
      </div>
      <div className="  border-white border-[2px] overflow-hidden">
        <img src="https://s3-alpha-sig.figma.com/img/f377/7103/094e9a9132b5c1aef8aec5b11c298d99?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5gnF2rs9b9gF6URp7nw3TqHFDFcbbgmxOEEbqdL5pb~AReF86BHsCnLlfokuyaA1Jr28A0H27PwDBU7eBoNOLb8Nfee71a7D3ynt6mdrm0gPwrNPC8pzhJ48Zs2LxEiZ~UyrfPoEcDh-bOt0pu2MGYqLcvs15NBy02HusFVFFfXuXJeCykbNLN8USgho1Oxksh5OIg-G8CgugS3OGHpdT4ysVVm~tHPai0zZxpaEVGevLrVguSi~vT0PlMjNp1JjKNOIBTXU2mmLI9veouvZ6SGXZGAGhxFazOkBpj4lwXNuzBiMCieRhwQRCQynNgsjkgFazouVzSywiSL7suvLw__" alt="Blog 2" className="w-full h-60 object-cover" />
        <div className="p-4">
          <p className="text-[#FF9F0D] text-xs mb-1">10 February 2022</p>
          <h4 className="text-lg font-semibold mb-3">Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</h4>
          <a href="#" className="text-[#FF9F0D] text-sm font-medium">Learn More</a>
          <div className="flex justify-between mt-3 text-gray-500 text-xs">
            <i className="fas fa-thumbs-up"></i>
            <i className="fas fa-comment"></i>
          </div>
        </div>
      </div>
      <div className=" border-white border-[2px]  overflow-hidden">
        <img src="https://s3-alpha-sig.figma.com/img/3f83/6bec/490aaf1f210114b7e305179efb718c06?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GjqvOggLDUdOhn-yXMj9rocLv75~G1ix1yO6ZXELLTdRTXpxGTTXK5rX68PwDt9Rxg8hwYt4LTQjGMcLwB0aRhqCKwPoVrwl6tGbrO0INXSbcMLvpAXZFdbiNEFMk~czGJwkWEq3ahukIcISy~tb0IFl~9AgbjSdB7asFbFQe6sCki~aJtbVLNUE9K9Zg1Hrv6DpBuSx5Z3NYrI7to-63WtCWRUNOM8WYwRAv01k18UdBV~IrqaicoSpp3uEaMSUENV83hijwXmnyLJn6JC6zQSPAxCZqauVoj0m075dgKe5r7O1i6QnC3vF8q8yk78qeQs10CLULwawlZwE~~a69Q__" alt="Blog 3" className="w-full h-60 object-cover" />
        <div className="p-4">
          <p className="text-yellow-400 text-xs mb-1">10 February 2022</p>
          <h4 className="text-lg font-semibold mb-3">Curabitur rutrum velit ac congue malesuada</h4>
          <a href="#" className="text-yellow-400 text-sm font-medium">Learn More</a>
          <div className="flex justify-between mt-3 text-gray-500 text-xs">
            <i className="fas fa-thumbs-up"></i>
            <i className="fas fa-comment"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>


  );
};

export default HomePage;
