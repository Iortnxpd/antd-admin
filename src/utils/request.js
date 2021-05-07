import Ajax from 'robe-ajax'

export default function request (url, options) {
  const cloneData = url === 'http://docking.work:8888/v1/login' ?  JSON.stringify(options.data) : '';

  if (options.cross) {
    return Ajax.getJSON('http://query.yahooapis.com/v1/public/yql', {
      q: "select * from json where url='" + url + '?' + Ajax.param(options.data) + "'",
      format: 'json'
    })
  } else {
    return Ajax.ajax({
      url: url,
      method: options.method || 'get',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Accept' : localStorage.getItem('token') || ''
      },
      data: cloneData || 'limit=50&offset=1',
    }).done((data) => {
        if(data.Code === '0'){
            localStorage.setItem('token', data['Data']['AccessToken'])
        }
      return data
    })
  }
}
