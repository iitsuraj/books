import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const res = await fetch(process.env.DB_HOST);
  const { pages } = await res.json();
  const paths = [];

  for (let i = 1; i < pages + 1; i++) {
    paths.push(`/page/${i}`);
  }
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { page } = params;
  const res = await fetch(`${process.env.DB_HOST}?pageNumber=${page}`);
  const { posts } = await res.json();
  return {
    props: {
      posts,
    },
  };
}

const page = ({ posts }) => {
  return <Layout posts={posts} />;
};

export default page;
