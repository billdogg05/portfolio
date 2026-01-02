import { useTranslation } from "react-i18next"

function Languages() {
    const { t } = useTranslation()
    return (
        <section className="spacing">
            <div className="my-container">
                <h2 className="mb-10">{t("languages.title")}</h2>
                <ul className="flex flex-col xs:gap-4 gap-2 text-center sm:text-xl xs:text-lg">
                    <li className="border border-primary rounded-lg p-2"><span className="text-text">{t("languages.languages.language1.name")}</span> - {t("languages.languages.language1.level")}</li>
                    <li className="border border-primary rounded-lg p-2"><span className="text-text">{t("languages.languages.language2.name")}</span> - {t("languages.languages.language2.level")}</li>
                    <li className="border border-primary rounded-lg p-2"><span className="text-text">{t("languages.languages.language3.name")}</span> - {t("languages.languages.language3.level")}</li>
                </ul>
            </div>
        </section>
    )
}

export default Languages