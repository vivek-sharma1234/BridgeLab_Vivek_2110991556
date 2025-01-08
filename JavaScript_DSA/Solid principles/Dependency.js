const http= (url,setState)=>{
    http.get(url,(res)=>setState.setValue(res))
};

const setState={
    setValue:(res)=>{
        this.setState({
            key1:res.value1,
            key2:res.value2,
            key3:res.value3,
        })
    }
}

http("http://address/api/example", setState);