import Link from "next/link";
const header = () => {
  return (
    <nav className="px-6 py-4 bg-white shadow">
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a className="text-xl font-bold text-gray-800 md:text-2xl">
                Yogicscriptures
              </a>
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default header;
