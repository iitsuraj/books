module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/page/1",
        destination: "/",
        permanent: true,
      },
      {
        source: "/page/1/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
