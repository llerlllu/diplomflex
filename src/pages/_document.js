import Document, { Html, Main, Head, NextScript } from 'next/document';
import { withRouter } from 'next/router';

export default withRouter(
    class MyDocument extends Document {
        render() {
            return (
                <Html lang="ru">
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" type="image/png" href="src/static/icon.ico" />
                    </Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Html>
            );
        }
    },
);
