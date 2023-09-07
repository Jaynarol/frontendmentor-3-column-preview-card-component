/** @type {import('next').NextConfig} */

const REPO = 'frontendmentor-3-column-preview-card-component'
const nextConfig = {
  output: 'export'
}

if(process.env.NODE_ENV !== "development"){
  const assetPrefix = `/${REPO}/`
  const basePath = `/${REPO}`
  nextConfig.assetPrefix = assetPrefix
  nextConfig.basePath = basePath
}


module.exports = nextConfig