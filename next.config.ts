import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    env: {
        NEXT_PUBLIC_API_URL: "http://localhost:8041",
    },
    images: {
        domains: ['localhost'],
    },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);