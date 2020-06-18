const node_ssh = require('node-ssh')
const ssh = new node_ssh()
const config = require('./config')

const contectAndUpload = () => {
  ssh.connect({
    port: config.sshConfig.port,
    host: config.sshConfig.host,
    username: config.sshConfig.username,
    password: config.sshConfig.password,
  }).then(() => {
    console.info('Start upload files...')
    ssh.putDirectory(config.docConfig.dest, config.sshConfig.path).then(status => {
      if (status) console.info('Upload successed!')
      process.exit(0)
    }).catch(err => {
      console.log('文件传输异常:', err);
      process.exit(0)
    })
  })
}

contectAndUpload()