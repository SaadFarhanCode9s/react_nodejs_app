import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-wrap items-center justify-center content-center mx-auto pt:mt-0  bg-[#4CAB72] w-full h-screen">



                    {children}



        </div>
    );
}