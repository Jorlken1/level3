// 数据持久化(刷新时从本地存储获取数据)
let userInfo = localStorage.getItem('userInfo');
try{
    userInfo = JSON.parse(userInfo) || {}
}catch(err){
    userInfo = {}
}

export default {
    namespaced:true,
    state:{
        userInfo
    },
    getters:{
        isLogin(state){
            // 使用模块后, getter中的state为当前模块的state
            return Boolean(state.userInfo.authorization)
        },
    },
    mutations:{
        // 登录
        login(state,payload){
            state.userInfo = payload;
            localStorage.setItem('userInfo',JSON.stringify(payload))
        },
        logout(state){
            state.userInfo = {};
            localStorage.removeItem('userInfo')
        },
    },
    actions:{
        
    }
}