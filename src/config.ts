const dev = process.env.NODE_ENV === "development";
const baseUrl = dev ? "http://localhost:2222" : "";

export {
  dev,
  baseUrl
};