import jobTitle from '../assets/icons/FRONT-END-DEVELOPER.svg'
import profile from '../assets/marvel.jpg'
import telegramIcon from '../assets/icons/telegram.svg'
import emailIcon from '../assets/icons/envelope.svg'
import githubIcon from '../assets/icons/github.svg'

function Hero() {
    return(
        <section className="py-20">
            <div className="my-container">
                <img src={jobTitle} alt="Job Title" className='w-full' />
                <div className="grid grid-cols-[1fr_2fr] items-center gap-4 my-10">
                    <img src={profile} alt="Profile-pic" className="rounded-full" />
                    <div>
                        <h1 className="mb-4">Bunyod Aminov</h1>
                        <p>I specialise in <span>frontend development</span> and have a strong understanding of Python fundamentals. I have broad IT knowledge that allows me to adapt to new tools quickly, along with solid experience in graphic design.</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <a href="https://t.me/billdogg" className="btn" target="_blank" rel="noopener noreferrer"><img src={telegramIcon} alt="Telegram" />telegram</a>
                    <a href="mailto:aminov.bun@gmail.com" className="btn"><img src={emailIcon} alt="Email" />email</a>
                    <a href="https://github.com/billdogg05" className="btn" target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="GitHub" />github</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;