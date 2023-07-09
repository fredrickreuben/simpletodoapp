import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="text-center bg-gray text-dark dark:bg-dark dark:text-white">
            <div className="p-4 text-center opacity-80">
                © 2023 Copyright:
                <Link className="text-gray-800 opacity-60 px-2" href="/">
                    Simpel Todo App
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
