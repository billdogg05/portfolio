import JobTitle from '../assets/icons/FRONT-END-DEVELOPER.svg?react'
import profile from '../assets/marvel.jpg'
import TelegramIcon from '../assets/icons/telegram.svg?react'
import EmailIcon from '../assets/icons/envelope.svg?react'
import GithubIcon from '../assets/icons/github.svg?react'

function Hero(props) {
    return(
        <section className="py-20" id={props.id}>
            <div className="my-container">
                <JobTitle className='w-full text-[rgba(0, 0, 0, 0.1)] dark:text-[rgba(255, 255, 255, 0.1)]' />
                <div className="grid grid-cols-[1fr_2fr] items-center gap-4 my-10">
                    <img src={profile} alt="Profile-pic" className="rounded-full" />
                    <div>
                        <h1 className="mb-4">Bunyod Aminov</h1>
                        <p>I specialise in <span>frontend development</span> and have a strong understanding of Python fundamentals. I have broad IT knowledge that allows me to adapt to new tools quickly, along with solid experience in graphic design.</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <a href="https://t.me/billdogg" className="btn" target="_blank" rel="noopener noreferrer"><TelegramIcon className="w-4" />telegram</a>
                    <a href="mailto:aminov.bun@gmail.com" className="btn"><EmailIcon className="w-4" />email</a>
                    <a href="https://github.com/billdogg05" className="btn" target="_blank" rel="noopener noreferrer"><GithubIcon className="w-4" />github</a>
                </div>
            </div>
        </section>
    )
}

export default Hero;