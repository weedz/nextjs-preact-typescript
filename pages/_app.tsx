import type { AppProps } from 'next/app'
import Layout from '../layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (_appContext: unknown) => {
//     // calls page's `getInitialProps` and fills `appProps.pageProps`
//     return {
//         msg: "Hello, world!",
//     };
// };
