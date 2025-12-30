import { useEffect, useRef, useState } from 'react';
import LinkIcon from '../assets/icons/link.svg?react';

function Work(props) {
    const content = useRef(null);
    const [lineCount, setLineCount] = useState(0);

    useEffect(() => {
        if (!content.current) return;

        const contentHeight = content.current.clientHeight;
        const xTimes = Math.ceil((contentHeight - 12) / 16);

        setLineCount(xTimes)
    }, [])

    return (
        <div className='grid grid-cols-[24px_1fr]'>
            <div className="flex flex-col items-center mr-4">
                <div className="w-2 h-2 bg-heading rounded-full my-0.5"></div>
                {Array.from({ length: lineCount }).map((_, index) => (
                    <div
                        key={index}
                        className="w-0.5 h-3 bg-heading rounded-full my-0.5"
                    />
                ))}
            </div>
            <div className="sm:pb-15 pb-10 subchild" ref={content}>
                <p className="text-sm font-normal text-text xs:mb-2 mb-0.5">{props.duration}</p>
                <h3 className='flex items-center'>{props.title} <a href={props.link} target="_blank" rel="noopener noreferrer" className='ml-3 cursor-pointer hover:text-primary'><LinkIcon className="w-5" /></a></h3>
                <h4 className="xs:mb-4 mb-3">{props.subtitle}</h4>
                <p>{props.description}</p>
                <ul className="list-disc xs:pl-8 pl-6 ">
                    {props.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Work;