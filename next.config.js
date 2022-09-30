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