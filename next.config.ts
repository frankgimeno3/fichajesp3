import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    serverExternalPackages: ['sequelize', 'pg', 'pg-hstore'],
    outputFileTracingIncludes: {
        '*': ['./certs/**/*']
    },
};

export default nextConfig;
