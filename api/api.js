import axios from 'axios'

let host = 'http://127.0.0.1:8000';
// let host = 'http://118.190.217.4'
// let host = 'http://www.moter.top'

// 获取摄影机构信息
export const getPublishers = params => {
    if ('id' in params) {
        return axios.get(`${host}/publishers/` + params.id + '/')
    } else {
        return axios.get(`${host}/publishers/`, params)
    }
}

// 获取模特信息
export const getMoters = params => {
    if ('id' in params) {
        return axios.get(`${host}/moters/` + params.id + '/')
    } else {
        return axios.get(`${host}/moters/`, params)
    }
}

// 获取专辑列表或专辑详情
export const getAlbums = params => {
    if ('id' in params) {
        return axios.get(`${host}/albums/` + params.id + '/')
    } else {
        return axios.get(`${host}/albums/`, params)
    }
}

// 获取 专辑详情 或 图像列表
export const getImages = params => {
    if ('id' in params) {
        return axios.get(`${host}/images/` + params.id + '/')
    } else {
        return axios.get(`${host}/images/`, params)
    }
}

// // 登录
// export const login = params => { return axios.post(`${host}/login/`, params) }
//
// // 验证码
// export const getVerifyCode = parmas => { return axios.post(`${host}/codes/`, parmas) }
//
// // 注册
// export const registUser = parmas => { return axios.post(`${host}/regist/`, parmas) }
//
// // 获取当前登录用户的详情
// export const getUserDetail = parmas => { return axios.get(`${host}/users/` + parmas.username + '/') }
//
// // 修改用户信息
// export const updateUserInfo = params => { return axios.patch(`${host}/users/1/`, params) }
//
// // 获取一级分类类别信息
// export const getFirstCategories = params => {
//   if ('id' in params) {
//     return axios.get(`${host}/categories1/` + params.id + '/')
//   } else {
//     return axios.get(`${host}/categories1/`, params)
//   }
// }
//
// // 获取二级分类类别信息
// export const getSecondCategories = params => {
//   if ('id' in params) {
//     return axios.get(`${host}/categories2/` + params.id + '/')
//   } else {
//     return axios.get(`${host}/categories2/`, params)
//   }
// }
//
// // 获取分类标签信息
// export const getTags = params => {
//   if ('id' in params) {
//     return axios.get(`${host}/tags/` + params.id + '/')
//   } else {
//     return axios.get(`${host}/tags/`, params)
//   }
// }
//
// // 获取专辑列表或专辑详情
// export const getAlbums = params => {
//   if ('id' in params) {
//     return axios.get(`${host}/albums/` + params.id + '/')
//   } else {
//     return axios.get(`${host}/albums/`, params)
//   }
// }
//
// // 创建 Album
// export const createAlbum = params => { return axios.post(`${host}/albumcreate/`, params, {headers:{ 'Content-Type': 'multipart/form-data' }})}
// // export const createAlbum = params => { return axios.post(`${host}/albumcreate/`, params) }
//
//
// // 获取文章列表或文章详情
// export const getArticles = params => {
//   if ('id' in params) {
//     return axios.get(`${host}/articles/` + params.id + '/')
//   } else {
//     return axios.get(`${host}/articles/`, params)
//   }
// }
//
// // 创建 Article
// export const createArticle = params => { return axios.post(`${host}/articlecreate/`, params, {headers:{ 'Content-Type': 'multipart/form-data' }})}
//
// // 添加收藏
// export const addFavor = params => { return axios.post(`${host}/userfavor/`, params) }
//
// //取消收藏
// export const delFavor = articleId => { return axios.delete(`${host}/userfavor/`+articleId+'/') }
//
// // 获取收藏列表
// export const getAllArticleFavors = () => { return axios.get(`${host}/userfavor/`) }
//
// //判断是否收藏
// export const getFavor = articleId => { return axios.get(`${host}/userfavor/`+articleId+'/') }
//
// // 添加专辑收藏
// export const addAlbumFavor = params => { return axios.post(`${host}/albumfavor/`, params) }
//
// //取消专辑收藏
// export const delAlbumFavor = albumId => { return axios.delete(`${host}/albumfavor/`+albumId+'/') }
//
// // 获取专辑收藏列表
// export const getAllAlbumFavors = () => { return axios.get(`${host}/albumfavor/`) }
//
// //判断专辑是否收藏
// export const getAlbumFavor = albumId => { return axios.get(`${host}/albumfavor/`+albumId+'/') }
//
// // 添加消息
// export const addUserMessage = params => { return axios.post(`${host}/usermessage/`, params) }
//
// // 删除消息
// export const delUserMessage = params => {
//   if ('reciever' in params) {
//     return axios.delete(`${host}/usermessage/`+params.messageId+`/?reciever=${params.reciever}`)
//   } else {
//     return axios.delete(`${host}/usermessage/`+params.messageId+'/')
//   }
// }
//
// // 获取消息列表
// export const getUserAllMessage = params => { return axios.get(`${host}/usermessage/`, params) }
