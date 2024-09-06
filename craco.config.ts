import * as path from 'node:path';

const conf = {
  eslint: {
    enable: true,
  },
  webpack: {
    alias: {
      '@/src': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/'),
      '@/api': path.resolve(__dirname, 'src/api/'),
      '@/config': path.resolve(__dirname, 'src/config/'),
      '@/context': path.resolve(__dirname, 'src/context/'),
      '@/lib': path.resolve(__dirname, 'src/lib/'),
      '@/types': path.resolve(__dirname, 'src/types/'),
    },
    configure: (webpackConfig: any) => {
      return webpackConfig;
    },
  },
};

export default conf;
