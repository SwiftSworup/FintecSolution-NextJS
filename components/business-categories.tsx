
"use client";
import Image from "next/image";
import styles from "./business-categories.module.css";

const logos = [
  "/images/Logos/unionPay-Logo.png",
  "/images/Logos/discover-Logo.png",
  "/images/Logos/aliPay-Logo.png",
  "/images/Logos/qpay-Logo.png",
  "/images/Logos/pakQR-Logo.png",
  "/images/Logos/npci-Logo.png",
  "/images/Logos/smartQr-Logo.png",
  "/images/Logos/weChat-Logo.png",
  "/images/Logos/visa-Logo.png",
  "/images/Logos/lankaPay-Logo.png"
];

export default function BusinessCategories() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
          Our Trusted Partners
        </h3>
        <p className="text-[15px] text-gray-700 mb-8">
          Our products are certified with various payment schemes such as UnionPay International, Discover, AliPay, NPCI, and WeChat.
        </p>
      </div>
      <div className={styles.logoContainer}>
        {/* Render single set of logos for all screens, duplicate only for larger screens */}
        {logos.map((logo, i) => (
          <div
            key={i}
            className={styles.logoItem}
          >
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={75}
              className="object-contain w-auto h-16"
            />
          </div>
        ))}
        {/* Duplicate logos only for larger screens with scrolling */}
        <div className={styles.logoDuplicate}>
          {logos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className={styles.logoItem}
            >
              <Image
                src={logo}
                alt="Logo"
                width={120}
                height={75}
                className="object-contain w-auto h-16"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







// "use client";
// import Image from "next/image";

// const logos = [
//   "/images/Logos/unionPay-Logo.png",
//   "/images/Logos/discover-Logo.png",
//   "/images/Logos/aliPay-Logo.png",
//   "/images/Logos/qpay-Logo.png",
//   "/images/Logos/pakQR-Logo.png",
//   "/images/Logos/npci-Logo.png",
//   "/images/Logos/smartQr-Logo.png",
//   "/images/Logos/weChat-Logo.png",
//   "/images/Logos/visa-Logo.png",
//   "/images/Logos/lankaPay-Logo.png"
// ];

// export default function ScrollingLogos() {
//   return (
//     <section className=" py-16 overflow-hidden">
//        <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
//             <h3 className="text-3xl font-bold text-gray-900 md:text-4xl md:pb-4">
//               Our Trusted Partners
//             </h3>
//             <p className="text-[15px] text-gray-700">
//             Our products are certified with various payment schemes such as UnionPay International, Discover, AliPay, NPCI, and WeChat.
//               </p>
//           </div>
//       <div className="whitespace-nowrap flex animate-scroll">
//         {[...logos, ...logos].map((logo, i) => (
//           <div
//             key={i}
//             className="inline-block  mx-4 opacity-100 hover:opacity-100 transition-opacity duration-300"
//           >
//             <Image
//               src={logo}
//               alt="Logo"
//               width={160}
//               height={200}
//               className="object-contain" 
//               style={{ height: "200px" }}
      
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

































// import Image from "next/image";
// import Logo01 from "@/public/images/logo-01.svg";
// import Logo02 from "@/public/images/logo-02.svg";
// import Logo03 from "@/public/images/logo-03.svg";
// import Logo04 from "@/public/images/logo-04.svg";
// import Logo05 from "@/public/images/logo-05.svg";
// import Logo06 from "@/public/images/logo-06.svg";
// import Logo07 from "@/public/images/logo-07.svg";
// import Logo08 from "@/public/images/logo-08.svg";
// import Logo09 from "@/public/images/logo-09.svg";
// import finteclogo from "@/public/images/fintec_logo.svg"
// import Client1 from "@/public/images/union_pay.svg"
// import Client2 from "@/public/images/discover.svg"
// import Client3 from "@/public/images/Alipay.svg"
// import Client4 from "@/public/images/Qpay (2).svg"
// import Client5 from "@/public/images/Pakqr.svg"
// import Client6 from "@/public/images/NPCI.svg"
// import Client7 from "@/public/images/Smartqr.svg"
// import Client8 from "@/public/images/logo-10.svg"
// import Client9 from "@/public/images/weChat.svg"

// export default function BusinessCategories() {
//   return (
//     <section id="partners">
   
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="pb-12 md:pb-20">
//         <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
//             <h3 className="text-3xl font-bold text-gray-900 md:text-4xl md:pb-4">
//               Our Trusted Partners
//             </h3>
//             <p className="text-[15px] text-gray-700">
//             Our products are certified with various payment schemes such as UnionPay International, Discover, AliPay, NPCI, and WeChat.
//               </p>
//           </div>
//           {/* Tab panels */}
//           <div className="relative flex h-[324px] items-center justify-center">
//             {/* Small blue dots */}
//             <div className="absolute -z-10">
//               <svg
//                 className="fill-blue-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={164}
//                 height={41}
//                 viewBox="0 0 164 41"
//                 fill="none"
//               >
//                 <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
//                 <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
//                 <circle cx={1} cy={15} r={1} />
//                 <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
//                 <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
//                 <circle cx={8} cy={8} r={1} />
//                 <circle cx={8} cy={15} r={1} />
//                 <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
//                 <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
//                 <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
//                 <circle cx={8} cy={33} r={1} />
//                 <circle cx={1} cy={40} r={1} />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 164 7)"
//                   fillOpacity="0.24"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 164 0)"
//                   fillOpacity="0.16"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 164 14)"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 164 25)"
//                   fillOpacity="0.64"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 164 32)"
//                   fillOpacity="0.24"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 157 7)"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 157 14)"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 157 25)"
//                   fillOpacity="0.24"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 150 14)"
//                   fillOpacity="0.64"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 150 25)"
//                   fillOpacity="0.16"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 157 32)"
//                 />
//                 <circle
//                   cx={1}
//                   cy={1}
//                   r={1}
//                   transform="matrix(-1 0 0 1 164 39)"
//                 />
//               </svg>
//             </div>
//             {/* Blue glow */}
//             <div className="absolute -z-10">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={432}
//                 height={160}
//                 viewBox="0 0 432 160"
//                 fill="none"
//               >
//                 <g opacity="0.6" filter="url(#filter0_f_2044_9)">
//                   <path
//                     className="fill-blue-500"
//                     fillRule="evenodd"
//                     clipRule="evenodd"
//                     d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
//                   />
//                 </g>
//                 <defs>
//                   <filter
//                     id="filter0_f_2044_9"
//                     x={0}
//                     y={0}
//                     width={432}
//                     height={160}
//                     filterUnits="userSpaceOnUse"
//                     colorInterpolationFilters="sRGB"
//                   >
//                     <feFlood floodOpacity={0} result="BackgroundImageFix" />
//                     <feBlend
//                       mode="normal"
//                       in="SourceGraphic"
//                       in2="BackgroundImageFix"
//                       result="shape"
//                     />
//                     <feGaussianBlur
//                       stdDeviation={32}
//                       result="effect1_foregroundBlur_2044_9"
//                     />
//                   </filter>
//                 </defs>
//               </svg>
//             </div>
//             {/* Horizontal lines */}
//             <div className="absolute inset-x-0 top-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
//             <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
//             <div className="absolute inset-x-[200px] top-1/2 -z-10 h-px bg-linear-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply"></div>
//             <div className="absolute inset-x-0 top-1/2 -z-10 h-px -translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-linear-to-r before:via-blue-500"></div>
//             <div className="absolute inset-x-0 top-1/2 -z-10 h-px translate-y-[82px] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-linear-to-r before:via-blue-500"></div>
//             {/* Diagonal lines */}
//             <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
//             <div className="absolute inset-x-[300px] top-1/2 -z-10 h-px -rotate-[20deg] bg-linear-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply"></div>
//             {/* Vertical lines */}
//             <div className="absolute inset-y-0 left-1/2 -z-10 w-px -translate-x-[216px] bg-linear-to-b from-gray-200 to-transparent mix-blend-multiply"></div>
//             <div className="absolute inset-y-0 left-1/2 -z-10 w-px translate-x-[216px] bg-linear-to-t from-gray-200 to-transparent mix-blend-multiply"></div>
//             {/* Logos */}


//             <div className="absolute before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,var(--color-blue-500))_border-box]">
//               <div className="animate-[breath_8s_ease-in-out_infinite_both]">
//                 <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                   <Image
//                     className="relative"
//                     src={finteclogo}
//                     width={90}
//                     height={90}
//                     alt="Logo 01"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="relative flex flex-col">
//               <article className="flex h-full w-full items-center justify-center focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-300">

//                 {/* To put VISA LOGO here*/}
//                 <div className="absolute -translate-y-[120px]">
//                   <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client8}
//                         width={40}
//                         height={40}
//                         alt="Logo 02"
//                       />
//                     </div>
//                   </div>
//                 </div>
                
//                   <div className="absolute -translate-y-[-120px]">
//                   <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client9}
//                         width={40}
//                         height={40}
//                         alt="Logo 08"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -translate-x-[136px]">
//                   <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client1}
//                         width={40}
//                         height={40}
//                         alt="Logo 02"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute translate-x-[136px]">
//                   <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
//                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client2}
//                         width={40}
//                         height={40}
//                         alt="Logo 03"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -translate-x-[216px] -translate-y-[82px]">
//                   <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client3}
//                         width={40}
//                         height={40}
//                         alt="Logo 04"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -translate-y-[82px] translate-x-[216px]">
//                   <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client4}
//                         width={40}
//                         height={40}
//                         alt="Logo 05"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute translate-x-[216px] translate-y-[82px]">
//                   <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client5}
//                         width={40}
//                         height={40}
//                         alt="Logo 06"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -translate-x-[216px] translate-y-[82px]">
//                   <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
//                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
//                       <Image
//                         className="relative"
//                         src={Client6}
//                         width={40}
//                         height={40}
//                         alt="Logo 07"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute -translate-x-[292px] opacity-40">
//                   <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
//                       <Image
//                         className="relative"
//                         src={Client7}
//                         width={40}
//                         height={40}
//                         alt="Logo 08"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute translate-x-[292px] opacity-40">
//                   <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
//                     <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
//                       <Image
//                         className="relative"
//                         src={Client7}
//                         width={40}
//                         height={40}
//                         alt="Logo 09"
//                       />
//                     </div>
//                   </div>
//                 </div>
                
//               </article>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// 