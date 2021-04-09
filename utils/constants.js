/**
 * Environment variables
 */
export const env = {
  imageUrl: process.env.NEXT_PUBLIC_PROFILE_IMAGE_URL,

  apiUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/`,

  contentful: {
    spaceId: process.env.NEXT_PUBLIC_API_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_API_CONTENTFUL_ACCESS_TOKEN,
  },

  github: {
    url: `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/`,
    user: process.env.NEXT_PUBLIC_GITHUB_USER,
  },
};

/**
 * URLs to external scripts
 */
export const scriptUrls = {
  ioniconsUrl: "https://unpkg.com/ionicons@5.2.3/dist/ionicons.js",
};
