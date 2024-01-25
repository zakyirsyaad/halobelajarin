/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'media.discordapp.net',
                hostname: 'img.freepik.com',
                hostname: 'firebasestorage.googleapis.com',
                hostname: 'lh3.googleusercontent.com'
            },
        ],
    },
};

export default nextConfig;
