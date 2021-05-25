import Link from "next/link";
import Head from "next/head";

const Pagination = ({ pages, page }) => {
  // console.log("pages", pages, "page", page);
  let previousPage;
  let nextPage;
  let previousPageLink;
  let nextPageLink;
  if (page === 1 || pages === 1) {
    previousPage = "#";
    nextPage = "#";
    previousPageLink = undefined;
    nextPageLink = undefined;
  }

  if (page === 2) {
    previousPage = "/";
    previousPageLink = "https://yogicscriptures.itsuraj.com";
  }

  if (page > 2) {
    previousPage = `/page/${page - 1}`;
    previousPageLink = `https://yogicscriptures.itsuraj.com${previousPage}/`;
  }

  if (pages === page) {
    nextPage = "#";
    nextPageLink = undefined;
  }

  if (page < pages) {
    nextPage = `/page/${page + 1}`;
    nextPageLink = `https://yogicscriptures.itsuraj.com${nextPage}/`;
  }

  return (
    <div className="mt-8">
      <Head>
        {previousPageLink ? <link rel="prev" href={previousPageLink} /> : null}
        {nextPageLink ? <link rel="next" href={nextPageLink} /> : null}
        {page !== 1 ? (
          <link
            rel="canonical"
            href={`https://yogicscriptures.itsuraj.com/page/${page}/`}
          />
        ) : null}
      </Head>

      <div className="flex">
        <Link href={previousPage}>
          <a
            className={`px-3 py-2 mx-1 font-medium bg-white rounded-md hover:bg-blue-500 hover:text-white ${
              previousPage === "#"
                ? "text-gray-500 cursor-not-allowed"
                : "text-gray-700"
            }`}
          >
            previous
          </a>
        </Link>
        <Link href={nextPage}>
          <a
            className={`px-3 py-2 mx-1 font-medium  bg-white rounded-md hover:bg-blue-500 hover:text-white ${
              nextPage === "#"
                ? "text-gray-500 cursor-not-allowed"
                : "text-gray-700"
            }`}
          >
            Next
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
