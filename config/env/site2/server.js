module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('HOST_PORT_SITE2', 4339),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
