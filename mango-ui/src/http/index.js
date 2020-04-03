//将axios封装成插件 导入所有接口
import api from './api'

const install = Vue =>{
  if(install.installed)
    return;
  
  install.installed=true;

  Object.defineProperties(Vue.prototype, {
    //此处挂载在Vue原型的$api对象上
    $api:{
      get(){
        return api
      }
    }
  })
}

export default install