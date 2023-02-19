module.exports = {
  apps: [
    {
      name: 'site1',
      cwd: '/Users/bikramkawan/Bikram/strapi-multitenancy-v4',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'site1',
        HOST_PORT_SITE1: 4338,
        DOMAIN_URL: 'localhost'
      }
    },
    {
      name: 'site2',
      cwd: '/Users/bikramkawan/Bikram/strapi-multitenancy-v4',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'site2',
        HOST_PORT_SITE2: 4339,
        DOMAIN_URL: 'localhost'
      }
    }
  ]
};
