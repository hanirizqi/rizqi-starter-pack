# Example Project
Aplikasi Reservasi Asrama Ditjen PHU Kemenag

## Build Setup

# install dependencies
$ npm install

# serve with hot reload at localhost:5000
$ npm run dev

# generate static project
$ npm run generate

# build for production and launch server
$ npm run build
$ npm run start
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Deploy to Server

```bash
1. [On Local] npm run build # to build for production
2. [On Local] Push to git
3. [On Server] Pull from git
4. [On Server] use filezilla or its kind, and upload folder .nuxt/dist from local to server in the same directory
5. [On Server] pm2 start