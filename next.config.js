const withPWA = require('next-pwa')
const withPreact = require('next-plugin-preact')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withPreact, withPWA], {
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  experimental: {
    optimizeFonts: true,
  },
  reactStrictMode: true,
})
