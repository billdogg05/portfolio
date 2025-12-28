import Work from './Work'

function Education(props) {
    return (
        <section className='spacing' id={props.id}>
            <div className="my-container">
                <h2 className='mb-10'>Education</h2>
                <Work duration="06.2020 - 02.2021"
                    title="ProWeb"
                    link="https://proweb.uz/ru/courses/web-development/"
                    subtitle="Web Development Course"
                    description=""
                    responsibilities={[
                        <>completed the <span>9-month</span> course of web development</>,
                        <>certificate ID: <span>1521</span></>,
                        <>course duration: <span>72 lessons</span></>
                    ]} />
                <Work duration="01.2021 - 04.2021"
                    title="Let’s Animate"
                    link="https://lets.uz/courses/predmets/"
                    subtitle="Graphic Design Course"
                    description=""
                    responsibilities={[
                        <>completed the <span>9-month</span> course of graphic design</>,
                        <>certificate ID: <span>445</span></>,
                        <>course duration: <span>24 lessons</span></>
                    ]} />
                <Work duration="2022 - 2026"
                    title="Westminster International University in Tashkent"
                    link="https://www.wiut.uz/business-information-systems/"
                    subtitle="BSc (Hons) in Business Information Systems"
                    description="Related modules:"
                    responsibilities={[
                        <>Object Oriented Programming</>,
                        <>Web Application Development</>,
                        <>Mobile Applications Development</>,
                        <>System Analysis and Design</>,
                        <>Web Technology</>,
                        <>Machine Learning</>,
                        <>Computer Science Fundamentals</>,
                        <>Database Systems Development</>,
                        <>Software Quality, Performance and Testing</>,
                        <>Network Operations</>,
                        <>Distributed Systems and Cloud Computing</>,
                        <>Fundamentals of Programming</>,
                        <>Information Systems Management</>,
                        <>Visual Programming</>,
                        <>Graphic design</>,
                        <>Project Management</>
                    ]} />
            </div>
        </section>
    )
}

export default Education