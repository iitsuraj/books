import Header from "../components/header";
import Pagination from "./Pagination";
import Image from "next/image";
const Layout = ({ posts, pages, page }) => {
  return (
    <div className="overflow-x-hidden bg-gray-100">
      <Header />
      <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">
                Books
              </h1>
            </div>
            {posts.map((post, index) => {
              return (
                <div className="mt-6" key={index}>
                  <div className="px-10 py-6 mx-auto bg-white rounded-lg shadow-md w-width">
                    <div className="flex items-center justify-between">
                      <span className="font-light text-gray-600">
                        {post.date}
                      </span>
                      {/* <a
                            href="#"
                            className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                          >
                            {post.category}
                          </a> */}
                    </div>
                    <div className="mt-2">
                      <a
                        href="#"
                        className="text-2xl font-bold text-gray-700 hover:underline"
                      >
                        {post.name}
                      </a>
                      <p className="mt-2 text-gray-600">{post.description}</p>
                    </div>
                    <div className="flex items-center justify-end mt-4">
                      <a
                        href="#"
                        className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {pages > 1 ? <Pagination page={page} pages={pages} /> : null}
          </div>
        </div>
      </div>
      <footer className="px-6 py-2 text-gray-100 bg-gray-800">
        <div className="container flex flex-col items-center justify-between mx-auto md:flex-row">
          <a href="https://itsuraj.com" className="text-2xl font-bold">
            itsuraj
          </a>
          <p className="mt-2 md:mt-0">All rights reserved 2020.</p>
          <div className="flex mt-4 mb-2 -mx-2 md:mt-0 md:mb-0">
            <a
              href="https://linkedin.com/organization/iitsuraj"
              className="mx-2 text-gray-100 hover:text-gray-400"
            >
              <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/itsuraj.in"
              className="mx-2 text-gray-100 hover:text-gray-400"
            >
              <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
              </svg>
            </a>
            <a
              href="https://twitter.com/itsuraj_offical"
              className="mx-2 text-gray-100 hover:text-gray-400"
            >
              <svg viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div id="carbonads">
        <span className="carbon-wrap">
          <a
            href="https://bit.ly/3uXkddg"
            className="carbon-img"
            target="_blank"
          >
            <Image
              src="/promotion.jpg"
              height={100}
              width={130}
              layout={"fixed"}
            />
          </a>
          <a
            href="https://bit.ly/3uXkddg"
            className="carbon-text"
            target="_blank"
          >
            Want to Make Serious Money Trade With Binary Options in 5 Easy Steps
          </a>
        </span>
      </div>
    </div>
  );
};

export default Layout;
