// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);