export default function fetchdata(url, config) {
    let fetchConfig = {
        credentials: 'same-orgin'//此属性配置是为了携带同源cookie，还有其他两个值
    }//配置fetch要球的第二个参数，自定义请求的参数
    config = config || {};
    if ((config.method === 'get' || config.method === 'GET' || !config.method) && config.data) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + Object.keys(config.data).map(key => {
            return key + '=' + config.data[key]// 如果有信息保密需求的，最好把数据解析成和后端商议好的进制模式
        })
    } else if (config.method === 'POST' || config.method === 'post') {
        fetchConfig = Object.assign(fetchConfig, {
            method: 'POST',
            hearders: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(config.data)
        })
    }
    return fetch(url, fetchConfig).then(responseText => {
        return responseText.json()//json() - 生成JSON.parse(responseText)的结果
    }).then(json => {
        return json
    }, error => {
        return Promise.reject(error)
    });
}