/** @type {import('next').NextConfig} */
require('dotenv').config({ path: `.env.${process.env.NEXT_PUBLIC_ENV_STATE}` })

const nextConfig = {
    images: {
        domains: ["img.freepik.com"]
    }
}

module.exports = nextConfig
