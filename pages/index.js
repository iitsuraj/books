import Layout from "../components/Layout";
import Head from "next/head";
const home = ({ posts, pages, page }) => {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://yogicscriptures.itsuraj.com"></link>
      </Head>
      <Layout posts={posts} pages={pages} page={page} />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(process.env.DB_HOST);
  const json = await res.json();
  return { props: { posts: json.posts, pages: json.pages, page: json.page } };
}

export default home;
