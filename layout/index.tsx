import { NextComponentType } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";


export default function Layout({children}: {children: NextComponentType}) {
    return (
        <>
        <header>
            <p>Header</p>
        </header>
        {children}
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&amp;utm_medium=default-template&amp;utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
        </>
    )
}
