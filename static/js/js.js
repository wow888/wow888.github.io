// var host = 'http://127.0.0.1:8000';
// var host = 'https://118.190.217.4';
var host = 'https://www.moter.top';

/**
 * 获取指定的URL参数值
 * URL:http://www.quwan.com/index?name=tyler
 * 参数：paramName URL参数
 * 调用方法:getParam("name")
 * 返回值:tyler
 */
function getParam(paramName) {
    paramValue = "", isFound = !1;
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0;
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++
    }
    return paramValue == "" && (paramValue = null), paramValue
}

function getAlbums(params) {
    if ('id' in params) {
        return axios.get(`${host}/albums/` + params.id + '/')
    } else {
        return axios.get(`${host}/albums/`, params)
    }
}

function getMoters(params) {
    if ('id' in params) {
        return axios.get(`${host}/motersp/` + params.id + '/')
    } else {
        return axios.get(`${host}/motersp/`, params)
    }
}

function getPublishers(params) {
    if ('id' in params) {
        return axios.get(`${host}/publishers/` + params.id + '/')
    } else {
        return axios.get(`${host}/publishers/`, params)
    }
}

function getImages(params) {
    if ('id' in params) {
        return axios.get(`${host}/images/` + params.id + '/')
    } else {
        return axios.get(`${host}/images/`, params)
    }
}

function getAreas(params) {
    if ('id' in params) {
        return axios.get(`${host}/areas/` + params.id + '/')
    } else {
        return axios.get(`${host}/areas/`, params)
    }
}


document.write('<script charset="utf-8" src="./jquery.lazyload.js" type="text/javascript"><\/script>');
$(function () {
    $(document).ready(function () {
        $(".hezi").find("img").lazyload({effect: "fadeIn", placeholder: "../imgs/loading.gif"});
        $(".hezi_t").find("img").lazyload({effect: "fadeIn", placeholder: "../imgs/loading.gif"});
        $(".content").find("img").lazyload({effect: "fadeIn", placeholder: "../imgs/loading.gif"});
        $(".content img").attr({title: "鐐瑰嚮鏌ョ湅瓒呴珮娓呭浘鐗�"});
    });
    $(".tupian_img").click(function () {
            window.open("https://www.meituri.com/bigimg.html?img=" + this.src + "")
        }
    );
})

function uaredirect(f) {
    try {
        if (document.getElementById("bdmark") != null) {
            return
        }
        var b = false;
        if (arguments[1]) {
            var e = window.location.host;
            var a = window.location.href;
            if (isSubdomain(arguments[1], e) == 1) {
                f = f + "/#m/" + a;
                b = true
            } else {
                if (isSubdomain(arguments[1], e) == 2) {
                    f = f + "/#m/" + a;
                    b = true
                } else {
                    f = a;
                    b = false
                }
            }
        } else {
            b = true
        }
        if (b) {
            var c = window.location.hash;
            if (!c.match("fromapp")) {
                if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
                    location.replace(f)
                }
            }
        }
    } catch (d) {
    }
}

function isSubdomain(c, d) {
    this.getdomain = function (f) {
        var e = f.indexOf("://");
        if (e > 0) {
            var h = f.substr(e + 3)
        } else {
            var h = f
        }
        var g = /^www\./;
        if (g.test(h)) {
            h = h.substr(4)
        }
        return h
    };
    if (c == d) {
        return 1
    } else {
        var c = this.getdomain(c);
        var b = this.getdomain(d);
        if (c == b) {
            return 1
        } else {
            c = c.replace(".", "\\.");
            var a = new RegExp("\\." + c + "$");
            if (b.match(a)) {
                return 2
            } else {
                return 0
            }
        }
    }
};

uaredirect(location.href.replace('https://www.', 'https://m.'));
