'use client'

import {cn} from "@/lib/utils";
import {BackgroundGradientAnimation} from "@/components/ui/GradientBg";
import {GlobeDemo} from "./GridGlobe";
import Lottie from "react-lottie";
import React, {useState} from "react";
import animationData from '@/data/confetti.json'
import MagicButton from "@/components/ui/MagicButton";
import {IoCopyOutline} from "react-icons/io5";
import {BackgroundBeams} from "@/components/ui/background-beams";
import Link from "next/link";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

export const BentoGrid = ({className, children}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className)}>
            {children}
        </div>
    );
};

export const BentoGridItem = ({className, title, description, img, imgClassName, titleClassName, spareImg, id}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {

    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText('jad.f.bizri@gmail.com').then(r => {
            setCopied(true)
            setTimeout(() => setCopied(false), 3000);
            return r;
        });
    }

    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200" +
                "shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
                className
            )}
            style={{
                background: "rgb(4,7,29)",
                backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {id !== 5 && img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover object-center w-full h-full'}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation />
                )}

                <div className={cn(
                    titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full flex flex-col min-h-40 px-5 p-5 lg:p-10'
                )}>
                    <div className='font-sans font-extra-light text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10'>
                        {description}
                    </div>
                    <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-50">
                        {title} {id === 2 &&
                        <Popover>
                            <PopoverTrigger className='text-purple hover:underline'>Home</PopoverTrigger>
                            <PopoverContent>United States, Lebanon, UAE & Saudi Arabia</PopoverContent>
                        </Popover>
                    }
                    </div>

                    {id === 5 && (
                        <div className='w-full h-full absolute'>
                            <Link href='https://drive.google.com/file/d/11eLBOCApNQhRUx8cRRTgYe6VJ_ypq5g6/view?usp=sharing' target='_blank'>
                                <img
                                    src={img}
                                    alt={img}
                                    className={cn(imgClassName, 'object-cover object-center')}
                                />
                            </Link>
                        </div>
                    )}

                    {id === 2 && <GlobeDemo/>}

                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                        <div className="flex flex-col gap-3 lg:gap-8">
                                {['TypeScript', 'Next.js', 'React.js'].map((item => (
                                    <span key={item}
                                          className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                                    {item}
                                </span>
                                )))}
                                <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]'/>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className='py-4 px-3 rounded-lg text-center bg-[#10132E]'/>
                                {['Flask', 'Spring Boot', 'Postgres'].map((item => (
                                    <span key={item}
                                          className='py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                                    {item}
                                </span>
                                )))}
                            </div>
                        </div>
                    )}

                    { id === 5 && <BackgroundBeams/> }

                    { id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie
                                    options={{
                                        loop: false,
                                        autoplay: copied,
                                        animationData,
                                        rendererSettings: {
                                            preserveAspectRatio: 'xMidYMid slice',
                                        }
                                    }}
                                    width={400}
                                    height={200}
                                    isStopped={!copied}
                                />
                            </div>
                            <MagicButton title={copied ? 'Email Copied!' : 'Copy my Email'} icon={<IoCopyOutline />} position={'left'} otherClasses='!bg-[#161a31]' handleClick={handleCopy}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
