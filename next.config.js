/** @type {import('next').NextConfig} */  
const nextConfig = {  
  images: {  
    remotePatterns: [  
      {  
        protocol: 'https',  
        hostname: 'avatars.githubusercontent.com'  
      },  
      {  
        protocol: 'https',  
        hostname: 'avatar.vercel.sh'  
      }  
    ]  
  },  
  swcMinify: false,  
  swcLoader: false,  
};  
  
module.exports = nextConfig;  
