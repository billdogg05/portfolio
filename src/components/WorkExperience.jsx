import Work from './Work'
import { useTranslation } from "react-i18next"

function WorkExperience(props) {
    const { t } = useTranslation()
    return (
        <section className='spacing scroll-mt-4' id={props.id}>
            <div className="my-container [&>*:last-child_.subchild]:last:pb-0">
                <h2 className='under-heading'>{t("experience.title")}</h2>
                <Work duration={t("experience.companies.company1.duration")}
                    title={t("experience.companies.company1.name")}
                    link="https://ara8.de/"
                    subtitle={t("experience.companies.company1.position")}
                    description={t("experience.companies.company1.description")}
                    responsibilities={t("experience.companies.company1.responsibilities", { returnObjects: true })}
                    responsibilitiesPath="experience.companies.company1.responsibilities" />
            </div>
        </section>
    )
}

export default WorkExperience