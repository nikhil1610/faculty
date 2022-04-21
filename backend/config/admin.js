module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','4a0616a913cbc2ffcaecc9df9fd5343e3fa04c3aa96ea7979a2334183a47dab6'),
  },
});
