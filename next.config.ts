import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            {
                source: '/birds',
                destination: '/terns',
                permanent: true,
            },
        ]
    }
};

export default nextConfig;
