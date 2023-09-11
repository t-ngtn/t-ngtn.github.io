/** @type {import('next').NextConfig} */

const repoName = process.env.REPO_NAME || ''

const nextConfig = {
    basePath: repoName,
    assetPrefix: repoName ? `/${repoName}/` : '',
}

module.exports = nextConfig
