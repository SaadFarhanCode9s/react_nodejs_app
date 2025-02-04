import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    NEXT_JS_ENV: "development",
    PRODUCT_NAME: "Green Herbals",
    API_URL: "http://localhost:9002",
    SIGNUP_URL: "/auth/signup",
    SIGNIN_URL: "/auth/signin",
  }
};

export default nextConfig;
