import Work from './Work'
import { useTranslation } from "react-i18next"

function Education(props) {
    const { t } = useTranslation()
    return (
        <section className='spacing scroll-mt-4' id={props.id}>
            <div className="my-container [&>*:last-child_.subchild]:last:pb-0">
                <h2 className='under-heading'>{t("education.title")}</h2>
                <Work duration={t("education.institutions.institution3.duration")}
                    title={t("education.institutions.institution3.name")}
                    link="https://www.wiut.uz/business-information-systems/"
                    subtitle={t("education.institutions.institution3.position")}
                    description={t("education.institutions.institution3.description")}
                    responsibilities={t("education.institutions.institution3.responsibilities", { returnObjects: true })}
                    responsibilitiesPath="education.institutions.institution3.responsibilities" />
                <Work duration={t("education.institutions.institution1.duration")}
                    title={t("education.institutions.institution1.name")}
                    link="https://proweb.uz/ru/courses/web-development/"
                    subtitle={t("education.institutions.institution1.position")}
                    description={t("education.institutions.institution1.description")}
                    responsibilities={t("education.institutions.institution1.responsibilities", { returnObjects: true })}
                    responsibilitiesPath="education.institutions.institution1.responsibilities" />
                <Work duration={t("education.institutions.institution2.duration")}
                    title={t("education.institutions.institution2.name")}
                    link="https://lets.uz/courses/predmets/"
                    subtitle={t("education.institutions.institution2.position")}
                    description={t("education.institutions.institution2.description")}
                    responsibilities={t("education.institutions.institution2.responsibilities", { returnObjects: true })}
                    responsibilitiesPath="education.institutions.institution2.responsibilities" />
            </div>
        </section>
    )
}

export default Education