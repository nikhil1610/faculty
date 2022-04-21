module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["4a0616a913cbc2ffcaecc9df9fd5343e3fa04c3aa96ea7979a2334183a47dab6", "oagguajguktosk"]),
  },
});
