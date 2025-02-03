import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-wrap items-center justify-center content-center mx-auto pt:mt-0  bg-[#4CAB72] w-full h-screen">

            <div className="w-2/3 h-[80vh] py-[40px] px-[60px] space-y-8 rounded-[70px] shadow-xl shadow-[0px_0px_80px_34px_rgba(0,0,0,0.25)] bg-[url(/images/auth_bg.png)] bg-center bg-no-repeat bg-cover overflow-hidden">

                <div className="lg-w-1/2 sm-w-full h-full max-w-lg p-8 border-solid border-2 border-white rounded-[50px] shadow-xl shadow-[0px_0px_80px_34px_rgba(0,0,0,0.25)] bg-white/30 backdrop-blur-sm">


                    <h1 className="text-center font-[poppinsbold] text-[40px]">Get Started</h1>

                    {children}


                </div>

                {/* <Image
                    // className="bg-[left_calc(-200%)_top_calc(0%)]"
                    className="relative hidden md:block bottom-[calc(65%+7rem)] left-[calc(25%+2rem)] leaf_png"
                    src="/images/leaf.png"
                    alt="leaf green herbals"
                    width={800}
                    height={800}
                    priority
                /> */}
            </div>

        </div>
    );
}