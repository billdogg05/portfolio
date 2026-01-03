import JobTitle from '../assets/icons/FRONT-END-DEVELOPER.svg?react'
import profile from '../assets/marvel.jpg'
import TelegramIcon from '../assets/icons/telegram.svg?react'
import EmailIcon from '../assets/icons/envelope.svg?react'
import GithubIcon from '../assets/icons/github.svg?react'
import PhoneIcon from '../assets/icons/call.svg?react'
import LocationIcon from '../assets/icons/location.svg?react'
import { Trans, useTranslation } from "react-i18next"

const birthDate = new Date('2004-06-05')
const today = new Date()
const age = today.getFullYear() - birthDate.getFullYear() - (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate()))

function Hero(props) {
    const { t } = useTranslation()
    return (
        <section className="spacing" id={props.id}>
            <div className="my-container">
                <JobTitle className='w-full text-[rgba(0, 0, 0, 0.1)] dark:text-[rgba(255, 255, 255, 0.1)] hidden xs:block' />
                <div className="grid xs:grid-cols-[1fr_2fr] items-center xs:gap-x-4 gap-x-2 xs:my-10 mb-6">
                    <img src={profile} alt="Profile-pic" className="rounded-full hidden xs:block" />
                    <div>
                        <h1 className="xs:mb-4 mb-2">{t("hero.greeting")}</h1>
                        <p>
                            <Trans i18nKey="hero.description" values={{ age }} components={{ tech: <span /> }}>
                                I specialise in <span>frontend development</span> and have a strong understanding of Python fundamentals. I have broad IT knowledge that allows me to adapt to new tools quickly, along with solid experience in graphic design.
                            </Trans>
                        </p>
                        <div className="flex justify-between items-center gap-y-2 gap-x-6 mt-6 xs:mt-4 flex-wrap">
                            <a className="font-medium text-sm cursor-pointer flex gap-2 items-center border-b border-transparent hover:border-primary hover:text-primary" href="https://yandex.uz/maps/-/CLTfJCMd" target="_blank" rel="noopener noreferrer"><LocationIcon className="w-4 text-primary" />{t("hero.location")}</a>
                            <a className="font-medium text-sm cursor-pointer flex gap-2 items-center border-b border-transparent hover:border-primary hover:text-primary" href="tel:+998909795123"><PhoneIcon className="w-4 text-primary" />(90) 979 51 23</a>
                        </div>
                    </div>
                </div>
                <div className="grid 2xs:grid-cols-3 grid-cols-1 xs:gap-4 gap-2">
                    <a href="https://t.me/billdogg" className="btn" target="_blank" rel="noopener noreferrer"><TelegramIcon className="w-4" />telegram</a>
                    <a href="mailto:aminov.bun@gmail.com" className="btn"><EmailIcon className="w-4" />email</a>
                    <a href="https://github.com/billdogg05" className="btn" target="_blank" rel="noopener noreferrer"><GithubIcon className="w-4" />github</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;