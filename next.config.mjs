/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"],
  },
};

export default nextConfig;

// @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "dummyimage.com",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.dummyjson.com",
//       },
//       {
//         protocol: "https",
//         hostname: "lh3.googleusercontent.com",
//       },
//       {
//         protocol: "https",
//         hostname: "s.gravatar.com",
//       },
//       {
//         protocol: "https",
//         hostname: "j73ljrhvhzqyjupl.public.blob.vercel-storage.com",
//       },
//     ],
//   },
// };

// export default nextConfig;
