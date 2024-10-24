import React from 'react'
import {projects} from "@/data";
import {CardBody, CardContainer, CardItem} from "@/components/ui/3d-card";
import {AnimatedTooltip} from "@/components/ui/animated-tooltip";

const RecentProjects = () => {
    return (
        <div className='pt-20 pb-10' id='projects'>
            <h1 className="heading">
                A Small Selection of
                <span className='text-purple'><br/>Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-stretch justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({id, title, des, img, iconLists, link}) => (
                    <CardContainer link={link} key={id} className="h-full inter-var">
                        <CardBody className="sm:w-[30rem] md:w-[35rem] w-[20rem] h-full flex flex-col justify-between relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black-100 border-white/[0.2] rounded-xl p-6 border">
                            <CardItem
                                translateZ="50"
                                className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                            >
                                <span className='text-purple'>{title.split('-')[0]}</span>- {title.split('-')[1]}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="lg:text-xl lg:font-normal font-light text-sm"
                            >
                                {des}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src={img}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={50}
                                    className="flex flex-row items-center justify-center"
                                >
                                    <AnimatedTooltip items={iconLists}/>
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                                >
                                    Test it out →
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    )
}
export default RecentProjects
