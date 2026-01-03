import DownloadIcon from '../assets/icons/download.svg?react';
import { useTranslation } from "react-i18next"

import cvEn from '../assets/cv/CV_en.pdf';
import cvUz from '../assets/cv/CV_uz.pdf';
import cvRu from '../assets/cv/CV_ru.pdf';

function DownloadCv() {
    const { t, i18n } = useTranslation()

    const cvByLanguage = {
        en: cvEn,
        uz: cvUz,
        ru: cvRu,
    };

    const currentCv = cvByLanguage[i18n.language] || cvEn;
    return (
        <a href={currentCv} download className="p-1 text-text font-medium text-base border border-primary rounded-sm flex items-center justify-center gap-3 w-full hover:text-white hover:bg-primary transition-colors duration-200 cursor-pointer">
            {t("downloadCV")}
            <DownloadIcon className="w-4" />
        </a>
    )
}

export default DownloadCv