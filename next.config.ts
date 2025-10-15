import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.destinocordoba.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'destinocordoba.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cordobaturismo.gov.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cordobaoutdoor.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'rallypais.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'calamuchitaenlinea.info',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media-cdn.tripadvisor.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'el-portal-de-calamuchita.valle-de-calamuchita-hoteles.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'estaciontrip.com.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.argentina.gob.ar',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.lavoz.com.ar',
        port: '',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'www.rionegro.com.ar',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
