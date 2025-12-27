import { useEffect, useRef, useState } from 'react';
import LinkIcon from '../assets/icons/link.svg?react';

function Work(props) {
    const content = useRef(null);
    const [lineCount, setLineCount] = useState([]);

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
            <div ref={content}>
                <p className="text-sm font-normal text-text mb-2">{props.duration}</p>
                <h3 className='flex items-center'>{props.title} <a href={props.link} target="_blank" rel="noopener noreferrer" className='ml-3 cursor-pointer hover:text-primary'><LinkIcon className="w-5" /></a></h3>
                <h4 className="mb-4">{props.subtitle}</h4>
                <p>{props.description}</p>
                <ul className="list-disc pl-8 pb-15">
                    {props.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Work;