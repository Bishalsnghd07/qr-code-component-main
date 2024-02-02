import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center bg-blue-100">
      <div className=" flex-wrap max-w-[18rem] border justify-center items-center bg-white rounded-2xl pl-3 pr-3 p-3"> 
        <Image 
         src="/images/image-qr-code.png" 
         alt={""}
         width={280}
         height={280}
         className="rounded-2xl"
         />
         <div className="pt-4 pl-1 pr-1 text-center justify-center items-center text-[2.4vh] lg:text-[1.6vw] font-bold text-black">Improve your front-end skills by building projects</div>
         <p className="text-[0.8rem] pl-2 pr-2 text-center text-slate-400 pt-2 pb-4">Scan the QR code to visit Frontend Mentor and take your coding to the next level</p>
      </div>
    </main>
  );
}
