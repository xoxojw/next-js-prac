import Head from "next/head";

interface Ititle {
  title : string
  }

const Seo = ({ title }: Ititle) => {
  return <Head>
    <title>{title} | Next Movies</title>
  </Head>
 };

export default Seo;