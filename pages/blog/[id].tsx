import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';;
import styles from '../../styles/Home.module.css'

interface Props {
    id: number
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            id: context.params!.id,
        },
    };
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
            { params: { id: '4' } },
            { params: { id: '5' } },
        ],
        fallback: "blocking"
    };
}

const Blog: NextPage = (props: Props) => {
    const { id } = props;
    return (
        <div className={styles.container}>
            <Head>
                <title>Blog {id}</title>
                <meta name="description" content={`Blog ${id}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Blog {id}</h1>

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

export default Blog;
