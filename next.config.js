/** @type {import('next').NextConfig} */

const repo = 'frontendmentor-3-column-preview-card-component'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig