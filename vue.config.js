module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/PostList/'
    : '/',
  
    // pwa: {
    //   workboxOptions: {
    //     exclude: [/_redirects/]
    //   }
    // }
}
