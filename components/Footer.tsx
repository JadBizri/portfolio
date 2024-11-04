import React from 'react'
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa6";
import {socialMedia} from "@/data";

const Footer = () => {
    return (
        <footer className="w-full pb-10" id='contact'>
            <div className="flex flex-col items-center">
                <h1 className='heading lg:max-w-[45vw]'>Ready to <span className='text-purple'>Collaborate</span>?</h1>
                <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how my unique blend of skills and background could be a good fit for your needs.</p>
                <a href='mailto:jad.f.bizri@gmail.com'>
                    <MagicButton title={"Let's get in touch"} icon={<FaLocationArrow/>} position={'right'} />
                </a>
            </div>

            <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
                <p className='md:text-base text-sm font-light md:font-normal'>&copy; 2024 Jad Bizri</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200'>
                            <a target='_blank' href={profile.url}><img src={profile.img} alt={profile.id.toString()} height={20} width={20}/></a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}
export default Footer
