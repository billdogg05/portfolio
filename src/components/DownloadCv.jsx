import cv from '../assets/cv/CV.pdf'
import DownloadIcon from '../assets/icons/download.svg?react';
import { useTranslation } from "react-i18next"

function DownloadCv() {
    const { t } = useTranslation()
    return (
        <a href={cv} download className="p-1 text-text font-medium text-base border border-primary rounded-sm flex items-center justify-center gap-3 w-full hover:text-white hover:bg-primary transition-colors duration-200 cursor-pointer">
            {t("downloadCV")}
            <DownloadIcon className="w-4" />
        </a>
    )
}

export default DownloadCv