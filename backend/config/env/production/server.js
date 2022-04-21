module.exports = ({ env }) => ({
    proxy: true,
    url: env('MY_HEROKU_URL'),
    app: { 
      keys: env.array('APP_KEYS', ["4a0616a913cbc2ffcaecc9df9fd5343e3fa04c3aa96ea7979a2334183a47dab6", "oagguajguktosk"])
    },
  })
