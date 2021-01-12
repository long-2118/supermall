import axios from 'axios'
// 写法1
// export function request(config,success,failure) {//success 和 failure参数的实参是回调函数
//   // 1.创建axios的一个实例（配置这个实例默认的一些配置）
//   const instance = axios.create({
//     baseURL:'http://152.136.185.210:7878/api/m5',
//     timeout:5000
//   })
//   // 创建实例的请求
//   // 发送真正的网络请求
//   instance(config)
//   .then(res =>{
//     // console.log(res);
//     success(res);// 通过回调函数把res传递出去
//   })
//   .catch(err =>{
//    // console.log(err);
//     failure(err);// 通过回调函数把err传递出去
//   })
// }
//写法2
// export function request(config) {//这里的config包含了url,它还包含了两人回调函数
//   // 1.创建axios的一个实例（配置这个实例默认的一些配置）
//   const instance = axios.create({
//     baseURL:'http://152.136.185.210:7878/api/m5',
//     timeout:5000
//   })
//   // 创建实例的请求
//   // 发送真正的网络请求
//   instance(config.baseConfig)
//   .then(res =>{
//     // console.log(res);
//     config.success(res);// 通过回调函数把res传递出去
//   })
//   .catch(err =>{
//     // console.log(err);
//     config.failure(err);// 通过回调函数把err传递出去
//   })
// }

//最佳写法3（模块中使用了promise）
export function request(config) {
  //1.创建实例
  const instance = axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })

  //2.axios的拦截器 
  //2.1 请求拦截  
  // instance.interceptors.request.use(参数1，参数2)，这里的参数都是一个回调函数，第一个回调函数表示发送请求成功，第二个回调函数表示发送请求失败

  instance.interceptors.request.use(config =>{
   // console.log(config);//表示发送请求成功

    //###2.1.1请求拦截的作用
    //我们设置拦截器的目的是于此**
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送请求网络请求时，都希望在界面中显示一个请求图标
    //3.某些请求，(比如登录(token))必须携带一些特殊的信息

    // 注意，这里需要return config，否则当内部真正发生请求的时候，它是拿不到config的，也就拿不到数据
    return config

  },err =>{
    console.log(err);//表示发送请求失败
  });
  //2.2 响应拦截  
  // instance.interceptors.response.use(参数1，参数2)，这里的参数都是一个回调函数，第一个回调函数表示响应成功，第二个回调函数表示响应失败
  instance.interceptors.response.use(res =>{
   // console.log(res);//表示响应成功
    // 注意，这里需要return res.data，否则，外边调用request就拿不到数据，我们只需要返回data就可以了，不需要返回res
    return res.data
  },err =>{
    console.log(err);//表示响应失败
  })

   // 3.创建实例的请求
   // 发送真正的网络请求
  // return new Promise((resolve,reject)=>{
  //   instance(config)
  //   .then(res =>{    //这里的then和catch，是axios的实例对象instance的，通过return出去，request方法后的then才是promise的then，这样就可以不用回调函数，也能在组件中拿到数据
  //     resolve(res)
  //   }).catch(err =>{
  //     reject(err)
  //   })
  // })

  // 因为instance本身返回的就是一个Promise，所以可以直接这样写
  return instance(config)

}