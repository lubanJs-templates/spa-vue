// 该文件用于开发阶段，前后端分离模式下api接口的调试，建议添加到.gitignore里
// 假设你主机名为 localhost:8080 , 请求 API 的 url 是 http://your_api_server.com/user/list
// '/proxy'：如果点击某个按钮，触发请求 API 事件，这时请求 url 是 http://localhost:8080/proxy/user/list。
// changeOrigin：如果 true ，那么 http://localhost:8080/proxy/user/list 变为 http://your_api_server.com/proxy/user/list。
// pathRewrite：重写路径。匹配 /proxy ，然后变为'' ，那么 url 最终为 http://your_api_server.com/user/list。
module.exports = {
  // '/api': {
  //   target: 'http://192.168.20.54:8083',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     '^/api': '/api'
  //   }
  // }
}