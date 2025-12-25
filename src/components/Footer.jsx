
function Footer() {
    const toggleTheme = () => {
        document.documentElement.classList.toggle("dark");
    }
    

    return (
        <footer className="bg-surface ">
            <div className="my-container py-5 flex justify-between items-center">
                <p className="font-medium">&copy; {new Date().getFullYear()} | Bunyod Aminov</p>
                <div onClick={toggleTheme} className="cursor-pointer">{document.documentElement.classList.contains("dark") ? "Light Theme" : "Dark Theme"}</div>
            </div>
        </footer>
    );
}

export default Footer