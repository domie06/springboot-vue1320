const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanshiwu/",
            name: "xiaoyuanshiwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanshiwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园失物招领网站"
        } 
    }
}
export default base
