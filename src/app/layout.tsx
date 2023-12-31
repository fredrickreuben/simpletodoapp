import '../assets/css/globals.css';
import { Quicksand  } from 'next/font/google';

const quicksand  = Quicksand({ subsets: ['latin'] });

export const metadata = {
    title: 'Todo App',
    description: 'Simple Todo App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={quicksand.className}>{children}</body>
        </html>
    );
}
