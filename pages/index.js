import Layout from "../components/Layout";
const home = ({ posts }) => {
  return <Layout posts={posts} />;
};

export async function getStaticProps(context) {
  const res = await fetch(process.env.DB_HOST);
  const json = await res.json();
  return { props: { posts: json.posts } };
}

export default home;
