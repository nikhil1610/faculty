module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["DATABASE_URL", "MY_HEROKU_URL", "NODE_ENV"]),
  },
});
