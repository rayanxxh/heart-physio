import type { NextConfig } from 'next';
const config: NextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  output: process.env.GITHUB_PAGES === 'true' ? 'export' : undefined,
  images: { unoptimized: true },
};
export default config;
