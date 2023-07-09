const Navbar = () => {
    return (
        <nav className="bg-primary py-3 shadow-md shadow-black/5 dark:shadow-black/10">
            <div className="container flex w-full mx-auto flex-wrap items-center justify-between px-4">
                <div className="flex items-center">
                    <a className="font-bold text-lg text-white hover:opacity-80 transition-all" href="/">
                        Todo
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
