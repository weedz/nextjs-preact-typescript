import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import { Component } from 'preact';
import styles from '../styles/Home.module.css'

class Hello extends Component {
    render() {
        return <p>Hello!</p>
    }
}

// export async function getStaticProps(_context: unknown) { return {props: {},} }

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>About</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>

                <Hello />

                <div className={styles.grid}>
                    <Link href="/">
                        <a className={styles.card}>
                            <h2>Home?</h2>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default About;
