module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false,
      buffer: false,
      crypto: false
    }

    return config
  }
}
