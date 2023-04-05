import '@/styles/globals.css';
import 'animate.css';
import '@/styles/index.css'
import Layout from './components/Layout.js';
import { ChakraProvider } from '@chakra-ui/react';

export default function App({ Component, pageProps }) {
  return (
  <>
    <ChakraProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </ChakraProvider> 
  </>
  )
}
