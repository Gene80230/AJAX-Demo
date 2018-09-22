myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('get','http://pqy.com:8002/xxx')     //配置这个对象 
    request.send()                                    //发送这个对象
    request.onreadystatechange = ()=>{                //监听对象  readyState 的变化
        if(request.readyState === 4){
            console.log('请求响应都已经完成了')
            console.log(request.status)
            if(request.status >=200 && request.status <300){
                console.log('请求成功')
                console.log(request.responseText)           
                let string = request.responseText           
                let object = window.JSON.parse(string)    //把响应内容转换成JS格式
            }else if(request.status >=400){
                console.log('请求失败')
            }
        }
    }
    
})


