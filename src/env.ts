const env = {
  siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? '',
  domain: process.env.NEXT_PUBLIC_DOMAIN_NAME ?? '',
  rootUrl: process.env.NEXT_PUBLIC_ROOT_URL ?? '',
  api: {
    baseUrl: {
      service: process.env.NEXT_PUBLIC_SERVICE_BASE_URL ?? '',
      backend: process.env.NEXT_PUBLIC_DOMAIN_BACKEND_URL ?? '',
    },
  },
  cookie: {
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN ?? '',
  },
};

export default env;
