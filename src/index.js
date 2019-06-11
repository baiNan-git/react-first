import axios from 'axios'
import '@/main.less'
axios.get('/api/index.php?r=index/ajaxnew&page=1').then(res => {
  console.log(res.data.data)
})  
console.log('hello')