import Work from './Work'

function WorkExperience(props) {
    return (
        <section className='spacing scroll-mt-4' id={props.id}>
            <div className="my-container [&>*:last-child_.subchild]:last:pb-0">
                <h2 className='under-heading'>Work Experience</h2>
                <Work duration="05.2023 - 01.2025"
                    title="Ara8 GmbH"
                    link="https://ara8.de/"
                    subtitle="Front-End Developer"
                    description=""
                    responsibilities={[
                        <>developed websites in the <span>WordPress</span> platform using <span>WPBakery</span> and <span>Elementor</span> page builders.</>,
                        <>worked with and analyzed plugins such as <span>WooCommerce</span>, <span>Gravity Forms</span>, and <span>Slider Revolution</span>, as well as the <span>Impreza theme</span>.</>,
                        <>customised codes in <span>jQuery</span>, <span>Bootstrap</span>, and <span>PHP</span>, and participated in the <span>SEO</span> setup process for websites.</>,
                        <>managed tasks through the <span>Kanban Flow</span>.</>,
                        <>worked remotely with the company on a freelance basis.</>
                    ]} />
            </div>
        </section>
    )
}

export default WorkExperience