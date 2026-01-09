import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';

import profile from "../assets/marvel.jpg";
import ArrowIcon from "../assets/icons/arrow-left.svg?react";
import LinkIcon from '../assets/icons/link.svg?react';
import GithubIcon from '../assets/icons/github.svg?react'

function Projects(props) {
    const { t } = useTranslation()
    return (
        <section className="spacing overflow-hidden" id={props.id}>
            <div className="my-container relative">
                <h2 className='under-heading'>{t("projects.title")}</h2>
                <Swiper
                    spaceBetween={0}
                    // slidesPerView={1}
                    loop={true}
                    centeredSlides
                    slidesPerView="auto"

                    modules={[Navigation, Pagination]}
                    navigation={{ prevEl: '.projects-prev', nextEl: '.projects-next' }}
                    pagination={{ el: '.projects-pagination', clickable: true }}

                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Slide
                            image={profile}
                            techs={["React js", "Tailwind css"]}
                            title={"Medical Unlimited"}
                            webLink={"#"}
                            githubLink={"#"}
                            description={"This is my personal portfolio website which illustrates my projects, work experience, education, and skills. The website is built using React with JavaScript and Tailwind CSS (v4). It also uses i18n for language options (English, Uzbek, and Russian) and the SVGR plugin for optimal use of SVGs as React components."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            image={profile}
                            techs={["React js", "Tailwind css"]}
                            title={"Medical Unlimited"}
                            webLink={"#"}
                            githubLink={"#"}
                            description={"This is my personal portfolio website which illustrates my projects, work experience, education, and skills. The website is built using React with JavaScript and Tailwind CSS (v4). It also uses i18n for language options (English, Uzbek, and Russian) and the SVGR plugin for optimal use of SVGs as React components."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            image={profile}
                            techs={["React js", "Tailwind css"]}
                            title={"Medical Unlimited"}
                            webLink={"#"}
                            githubLink={"#"}
                            description={"This is my personal portfolio website which illustrates my projects, work experience, education, and skills. The website is built using React with JavaScript and Tailwind CSS (v4). It also uses i18n for language options (English, Uzbek, and Russian) and the SVGR plugin for optimal use of SVGs as React components."}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide
                            image={profile}
                            techs={["React js", "Tailwind css"]}
                            title={"Medical Unlimited"}
                            webLink={"#"}
                            githubLink={"#"}
                            description={"This is my personal portfolio website which illustrates my projects, work experience, education, and skills. The website is built using React with JavaScript and Tailwind CSS (v4). It also uses i18n for language options (English, Uzbek, and Russian) and the SVGR plugin for optimal use of SVGs as React components."}
                        />
                    </SwiperSlide>
                    <span slot="container-end" className="flex justify-between items-center sm:mt-10 xs:mt-8 mt-6">
                        <ArrowIcon className="projects-prev text-text [&_path]:fill-white-bg cursor-pointer" />
                        <div className="projects-pagination flex justify-center items-center gap-2" />
                        <ArrowIcon className="rotate-180 projects-next text-text [&_path]:fill-white-bg cursor-pointer" />
                    </span>
                </Swiper>
            </div>
        </section>
    )
}

export default Projects

function Slide(props) {
    return (
        <div className="flex flex-col h-[600px] rounded-lg shadow-card overflow-hidden">
            <div className="bg-cover bg-center h-full" style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className="flex flex-col p-4 bg-surface">
                <ul className="flex gap-2 mb-4">
                    {props.techs.map((tech, index) => {
                        return <li key={index} className="text-sm font-medium px-2 text-primary border border-primary rounded-sm">{tech}</li>
                    })}
                </ul>
                <div className="flex items-center gap-3 mb-2">
                    <h3>{props.title}</h3>
                    <a href={props.githubLink} target="_blank" rel="noopener noreferrer"><LinkIcon className="w-5.5" /></a>
                    <a href={props.githubLink} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-5.5" /></a>
                </div>
                <p className="line-clamp-2">{props.description}</p>
            </div>
        </div>
    )
}