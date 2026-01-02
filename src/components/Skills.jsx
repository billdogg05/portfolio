import { useEffect, useRef } from 'react'
import GitHubIcon from '../assets/icons/github.svg?react'
import { useTranslation } from "react-i18next"

// Icons
import ApiIcon from '../assets/skills/api.svg?react'
import BootstrapIcon from '../assets/skills/bootstrap.svg?react'
import RestApiIcon from '../assets/skills/cloud.svg?react'
import CssIcon from '../assets/skills/css3.svg?react'
import ElementorIcon from '../assets/skills/elementor.svg?react'
import FigmaIcon from '../assets/skills/figma.svg?react'
import FirebaseIcon from '../assets/skills/firebase.svg?react'
import GitIcon from '../assets/skills/git.svg?react'
import HtmlIcon from '../assets/skills/html5.svg?react'
import IllustratorIcon from '../assets/skills/illustrator.svg?react'
import JavaIcon from '../assets/skills/java.svg?react'
import JavaScriptIcon from '../assets/skills/javascript.svg?react'
import KotlinIcon from '../assets/skills/kotlin.svg?react'
import NodeJsIcon from '../assets/skills/node-js.svg?react'
import PhotoshopIcon from '../assets/skills/photoshop.svg?react'
import PythonIcon from '../assets/skills/python.svg?react'
import ReactIcon from '../assets/skills/react.svg?react'
import RstudioIcon from '../assets/skills/rstudio.svg?react'
import SassIcon from '../assets/skills/sass.svg?react'
import TailwindIcon from '../assets/skills/tailwind.svg?react'
import VsCodeIcon from '../assets/skills/vs-code.svg?react'
import VueIcon from '../assets/skills/vue.svg?react'
import WordpressIcon from '../assets/skills/wordpress.svg?react'
import AndroidStudioIcon from '../assets/skills/android-studio.svg?react'
import CsharpIcon from '../assets/skills/c-sharp.svg?react'
import IntellijIdiaIcon from '../assets/skills/intellij-idea.svg?react'
import JqueryIcon from '../assets/skills/jquery.svg?react'
import PhpIcon from '../assets/skills/php.svg?react'
import PyCharmIcon from '../assets/skills/pycharm.svg?react'
import SqlIcon from '../assets/skills/sql.svg?react'
import TypeScriptIcon from '../assets/skills/typescript.svg?react'
import WooCommerceIcon from '../assets/skills/woocommerce.svg?react'

function Skills(props) {
    const { t } = useTranslation()
    return (
        <section className='spacing scroll-mt-4' id={props.id}>
            <div className="my-container">
                <h2 className='under-heading'>{t("skills.title")}</h2>
                <SkillsGroup 
                    title={t("skills.skillGroups.experience")}
                    skills={[
                        {name: "WordPress", icon: <WordpressIcon className="h-6 text-text"/>},
                        {name: "WPBakery", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Elementor", icon: <ElementorIcon className="h-6 text-text"/>},
                        {name: "WooCommerce", icon: <WooCommerceIcon className="h-6 text-text"/>},
                        {name: "Gravity Forms", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Slider Revolution", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Imprezza", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Kanban flow", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "PHP", icon: <PhpIcon className="h-6 text-text"/>},
                        {name: "jQuery", icon: <JqueryIcon className="h-6 text-text"/>},
                        {name: "Bootstrap", icon: <BootstrapIcon className="h-6 text-text"/>},
                        {name: "SEO", icon: <GitHubIcon className="h-6 text-text"/>},
                    ]}
                />
                <SkillsGroup 
                    title={t("skills.skillGroups.academic")}
                    skills={[
                        {name: "Python", icon: <PythonIcon className="h-6 text-text"/>},
                        {name: "Kotlin", icon: <KotlinIcon className="h-6 text-text"/>},
                        {name: "Java", icon: <JavaIcon className="h-6 text-text"/>},
                        {name: "C#", icon: <CsharpIcon className="h-6 text-text"/>},
                        {name: "SQL", icon: <SqlIcon className="h-6 text-text"/>},
                        {name: "OOP", icon: <JavaIcon className="h-6 text-text"/>},
                        {name: "Agile", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Rest API", icon: <RestApiIcon className="h-6 text-text"/>},
                        {name: "Firebase", icon: <FirebaseIcon className="h-6 text-text"/>},
                        {name: "Draw io", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "XML", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Pug", icon: <GitHubIcon className="h-6 text-text"/>},
                    ]}
                />
                <SkillsGroup 
                    title={t("skills.skillGroups.training")}
                    skills={[
                        {name: "HTML", icon: <HtmlIcon className="h-6 text-text"/>},
                        {name: "CSS", icon: <CssIcon className="h-6 text-text"/>},
                        {name: "JavaScript", icon: <JavaScriptIcon className="h-6 text-text"/>},
                        {name: "TypeScript", icon: <TypeScriptIcon className="h-6 text-text"/>},
                        {name: "React", icon: <ReactIcon className="h-6 text-text"/>},
                        {name: "Vue", icon: <VueIcon className="h-6 text-text"/>},
                        {name: "Tailwind", icon: <TailwindIcon className="h-6 text-text"/>},
                        {name: "Sass", icon: <SassIcon className="h-6 text-text"/>},
                        {name: "Git", icon: <GitIcon className="h-6 text-text"/>},
                        {name: "GitHub", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "API", icon: <ApiIcon className="h-6 text-text"/>},
                        {name: "Node.js", icon: <NodeJsIcon className="h-6 text-text"/>},
                    ]}
                />
                <SkillsGroup 
                    title={t("skills.skillGroups.tooling")}
                    skills={[
                        {name: "Figma", icon: <FigmaIcon className="h-6 text-text"/>},
                        {name: "Illustrator", icon: <IllustratorIcon className="h-6 text-text"/>},
                        {name: "Photoshop", icon: <PhotoshopIcon className="h-6 text-text"/>},
                        {name: "VS code", icon: <VsCodeIcon className="h-6 text-text"/>},
                        {name: "Visual Studio", icon: <VsCodeIcon className="h-6 text-text"/>},
                        {name: "PyCharm", icon: <PyCharmIcon className="h-6 text-text"/>},
                        {name: "IntelliJ IDEA", icon: <IntellijIdiaIcon className="h-6 text-text"/>},
                        {name: "Android Studio", icon: <AndroidStudioIcon className="h-6 text-text"/>},
                        {name: "SSMS", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "Jupyter", icon: <GitHubIcon className="h-6 text-text"/>},
                        {name: "R-Studio", icon: <RstudioIcon className="h-6 text-text"/>},
                        {name: "MS Project", icon: <GitHubIcon className="h-6 text-text"/>},
                    ]}
                />
            </div>
        </section>
    )
}

function SkillsGroup(props) {
    return (
        <div className="under-heading last:mb-0">
            <h4 className="mb-3">{props.title}</h4>
            <div className="grid sm:grid-cols-6 2xs:grid-cols-4 grid-cols-3 xs:gap-4 gap-2">
                {props.skills.map((skill, index) => (
                    <Skill key={index} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>

    )
}

function Skill(props) {
    const card = useRef(null)

    useEffect(() => {
        if (!card.current) return;

        const cardHeight = card.current.clientWidth;
        card.current.style.setProperty('--card-height', `${cardHeight}px`);
    })

    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-surface rounded-lg h-(--card-height)" ref={card}>
            {props.icon}
            <p className="text-primary font-normal sm:text-[10px] text-xs max-xs:text-[10px] text-center">{props.name}</p>
        </div>
    )
}

export default Skills