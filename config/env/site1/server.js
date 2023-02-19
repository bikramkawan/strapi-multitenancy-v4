module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('HOST_PORT_SITE1', 4338),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
