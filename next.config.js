module.exports = {
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/index.html',
        permanent: true,
      },
    ];
  },
};
module.exports = {
  async redirects() {
    return [
      {
        source: '/tutorials',
        destination: 'tutorials/tutorials.html',
        permanent: true,
      },
    ];
  },
};module.exports = {
  async redirects() {
    return [
      {
        source: '/socials',
        destination: '/social.html',
        permanent: true,
      },
    ];
  },
};