import img from './QQ20191129-2.jpg'
import './style.less'

console.log('123')
var img2 = new Image(200, 200) // 2. 使用图片
img2.src = img
document.body.appendChild(img2)
