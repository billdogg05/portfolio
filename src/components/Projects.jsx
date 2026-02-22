import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';

import profile from "../assets/profile.webp";
import ArrowIcon from "../assets/icons/arrow-left.svg?react";
import LinkIcon from '../assets/icons/link.svg?react';
import GithubIcon from '../assets/icons/github.svg?react'

function Projects(props) {
    const { t } = useTranslation()

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://api.github.com/users/billdogg05/repos")

                if (!response.ok) {
                    throw new Error("Failed to fetch repositories");
                }

                const data = await response.json();

                const projectsWithLanguages = await Promise.all(
                    data.map(async (repo) => {
                        const langResponse = await fetch(repo.languages_url);
                        const languagesData = await langResponse.json();

                        return {
                            ...repo,
                            languages: Object.keys(languagesData)
                        };
                    })
                );

                setProjects(projectsWithLanguages);
            }
            catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

    return (
        <section className="spacing overflow-hidden" id={props.id}>
            <div className="my-container relative">
                <h2 className='under-heading'>{t("projects.title")}</h2>
                {loading && <Loading />}
                {error && <Error message={error} />}
                {!loading && !error && <Slider projects={projects} />}
            </div>
        </section>
    )
}

export default Projects

function Slider({ projects }) {
    return (
        <Swiper
            spaceBetween={0}
            // slidesPerView={1}
            loop={true}
            centeredSlides
            slidesPerView="auto"

            modules={[Navigation, Pagination]}
            navigation={{ prevEl: '.projects-prev', nextEl: '.projects-next' }}
            pagination={{ el: '.projects-pagination', clickable: true }}

        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >
            {projects.filter(project => project.fork).map((project) => (
                <SwiperSlide key={project.id}>
                    <Slide
                        image={`https://raw.githubusercontent.com/billdogg05/${project.name}/main/lookscreen.jpg`}
                        techs={project.languages}
                        date={project.created_at}
                        fork={project.fork}
                        title={project.name}
                        webLink={project.homepage}
                        githubLink={project.html_url}
                        description={project.description}
                    />
                </SwiperSlide>
            ))}
            <span slot="container-end" className="flex justify-between items-center sm:mt-10 xs:mt-8 mt-6">
                <ArrowIcon className="projects-prev text-text [&_path]:fill-white-bg cursor-pointer" />
                <div className="projects-pagination flex justify-center items-center gap-2" />
                <ArrowIcon className="rotate-180 projects-next text-text [&_path]:fill-white-bg cursor-pointer" />
            </span>
        </Swiper>
    )
}

function Slide(props) {
    return (
        <div className="flex flex-col justify-between rounded-lg shadow-card overflow-hidden">
            <div className="overflow-hidden md:h-80 xs:h-70 h-50">
                <img src={props.image} alt="Project screenshot" onError={(e) => e.currentTarget.src = profile} />
            </div>
            <div className="flex flex-col p-4 bg-surface">
                <ul className="flex gap-2 mb-4">
                    {props.techs.map((tech, index) => {
                        return <li key={index} className="text-sm font-medium px-2 text-text border border-text rounded-sm">{tech}</li>
                    })}
                </ul>
                <div className="flex items-center gap-3">
                    <h3>{props.title}</h3>
                    {props.webLink && <a href={props.webLink} target="_blank" rel="noopener noreferrer"><LinkIcon className="w-5.5" /></a>}
                    {props.githubLink && <a href={props.githubLink} target="_blank" rel="noopener noreferrer"><GithubIcon className="w-5.5" /></a>}
                </div>
                <h4 className="mb-4">
                    {props.fork ? "Forked at " : "Created at "} {new Date(props.date).toLocaleDateString()}
                </h4>
                <p className="line-clamp-2 leading-5 h-10">
                    {props.description ? props.description : "Description is not provided"}
                </p>
            </div>
        </div>
    )
}

function Loading() {
    return (
        <p>Loading...</p>
    )
}

function Error({ message }) {
    return (
        <p>Error: {message}</p>
    )
}