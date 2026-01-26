import fetch from "node-fetch";

export const getUnsplashImage = async (query) => {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const data = await res.json();
  return data.urls.regular;
};