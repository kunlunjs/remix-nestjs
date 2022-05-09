module.exports = {
  apps: [
    {
      name: 'remix-nestjs',
      script: 'node ./build/server.js',
      env: {
        NODE_ENV: 'production'
      }
      // watch: ['app', 'mocks', 'prisma'],
      // ignore_watch: ['build', 'logs', 'public', 'node_modules']
    }
  ],

  deploy: {
    production: {
      'user': 'SSH_USERNAME',
      'host': 'SSH_HOSTMACHINE',
      'ref': 'origin/master',
      'repo': 'GIT_REPOSITORY',
      'path': 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy':
        'pnpm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
