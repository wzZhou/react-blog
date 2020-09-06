import '../styles/globals.css'
import '../styles/components/header.css';
import '../styles/pages/comm.css';
import 'antd/dist/antd.css';
import '../styles/pages/index.css';
import '../styles/pages/detail.css';
import '../styles/components/author.css';
import '../styles/components/advert.css';
import '../styles/components/footer.css';
import 'markdown-navbar/dist/navbar.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
