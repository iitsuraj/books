import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const res = await fetch(process.env.DB_HOST);
  const { pages } = await res.json();
  const paths = [];

  for (let i = 2; i < pages + 1; i++) {
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
  const data = await res.json();
  return {
    props: {
      posts: data.posts,
      page: data.page,
      pages: data.pages,
    },
  };
}

const page = ({ posts, page, pages }) => {
  return <Layout posts={posts} page={page} pages={pages} />;
};

export default page;
