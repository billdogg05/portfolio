
function Header() {
    
    return(
        <header className="bg-surface shadow-bottom">
            <div className="my-container py-5 flex justify-between items-center">
                <ul className="flex gap-8">
                    <li><a href="#" className="font-medium text-heading hover:text-primary">Projects</a></li>
                    <li><a href="#" className="font-medium text-heading hover:text-primary">Experience</a></li>
                    <li><a href="#" className="font-medium text-heading hover:text-primary">Education</a></li>
                    <li><a href="#" className="font-medium text-heading hover:text-primary">Skills</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header