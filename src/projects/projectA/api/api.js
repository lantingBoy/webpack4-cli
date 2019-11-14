
import axios from 'axios'

class API {
  // get
  get(msg) {
    msg.type = 'GET'
    return new Promise((resolve, reject) => {
      this.http(msg)
        .then(res => {
          if (!res.data.successed) {
            this.codeHandle(res);
            reject(res.data)
          } else {
            resolve(res.data.returnValue)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  post(msg) {
    msg.type = 'POST'
    return new Promise((resolve, reject) => {
      this.http(msg)
        .then(res => {
          if (!res.data.successed) {
            this.codeHandle(res);
            reject(res.data)
          } else {
            resolve(res.data.returnValue)
          }
        })
        .catch(error => {
          console.log(error)
          reject(error)
        })
    })
  }

  putB(msg) {
    msg.type = 'PUT'
    return new Promise((resolve, reject) => {
      this.http(msg)
        .then(res => {
          resolve(res.data)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  http(msg) {
   
   
    let _headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Accept: 'application/json; charset=utf-8',
      token: localStorage.getItem('token')

    }
    if (msg.tologin) {
      delete _headers.t
      delete _headers.u
      delete _headers.key
    }
    Object.assign(_headers, msg.headers)

    //let baseURL = msg.baseUrl || apiUrl
    return axios({
      method: msg.type,
      // baseURL: baseURL,
      url: msg.url,
      params: msg.type === 'GET' || msg.type === 'DELETE' ? msg.params : null,
      data: msg.type !== 'GET' && msg.type !== 'DELETE' ? msg.params : null,
      timeout: 600000,
      headers: _headers
    })
  }
  codeHandle(res) { //错误码统一处理
    if (res.data.errorCode == 404001) {
    
    }
   
    
  };
}

const api = new API()
export default api
