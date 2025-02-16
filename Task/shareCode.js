/*
**由于原脚本经常超时，重构了代码，以便更好的支持互助码提交
**京东互助码多账号提交，脚本兼容: QuantumultX, Surge, Loon，小火箭
1.Author: Cuttlefish 需要将本脚本下载至本地进行编辑
由于tg作者服务器资源有限，提交时经常会无响应，故手动执行，看日志内容
2.助力码请自行订阅本库boxjs订阅，在京东云助力中进行设置，目前只写了3个账号的助力码提交。
3.状态码200为成功，出现其他状态码，请手工再执行一次，以免漏提交

=================================Quantumultx=========================
[task_local]
#互助码提交
15,20 10 1,10,20 * * https://raw.githubusercontent.com/photonmang/quantumultX/master/cache/shareCode.js, tag=互助码提交

*/


const jsname = '互助码提交'
const $ = Env(jsname)
const notify = $.isNode() ? require("../sendNotify") : "";

let K = 0;
let tz = '';
const dd = 1//单次任务延迟,默认1秒

const CodeArr = [
    {
        zd: 'qlnvpggfan6gr56h4a764rocbe',
        nc: 'f516b303c2f24589b278552398c2cd59',
        mc: 'MTE1NDUyMjEwMDAwMDAwMzQxMDE3MjE=',
        dd: 'P04z54XCjVWnYaS5mpQWjWx',
        jx: 'Vg_-e5pPUaU3YhvHVn0P9Q==',
        zz: 'S4aUhFVc',
        joy: 'S38h9wCdqKI='
    }
];

let dd_shareCodeVal = "";
let jx_shareCodeVal = "";
let zd_shareCodeVal = "";
let nc_shareCodeVal = "";
let mc_shareCodeVal = "";
let zz_shareCodeVal = "";
let joy_shareCodeVal = "";


all();

function all() {
    dd_shareCodeVal = CodeArr[K].dd;
    jx_shareCodeVal = CodeArr[K].jx;
    zd_shareCodeVal = CodeArr[K].zd;
    nc_shareCodeVal = CodeArr[K].nc;
    mc_shareCodeVal = CodeArr[K].mc;
    zz_shareCodeVal = CodeArr[K].zz;
    joy_shareCodeVal = CodeArr[K].joy;
    for (let i = 0; i < 8; i++) {
        (function (i) {
            setTimeout(
                function () {
                    if (i == 0) {
                        execdd_shareCode(); // 东东工厂
                        if (i == 1)
                            execjx_shareCode(); // 京喜工厂
                        if (i == 2)
                            execzd_shareCode(); //种豆得豆
                        if (i == 3)
                            execnc_shareCode(); //京东农场
                        if (i == 4)
                            execmc_shareCode(); //京东萌宠
                        if (i == 5)
                            execzz_shareCode(); //京东赚赚
                        if (i == 6)
                            execjoy_shareCode();//京东CrazyJoy任务
                    } else if (i == 7) {
                        if (K < CodeArr.length - 1) {
                            K += 1;
                            all();
                        } else if (K == CodeArr.length - 1) {
                            showmsg(); // 通知
                            $.done();
                        }
                    }
                },
                (i + 1) * dd * 1000
            );
        })(i);
    }
}

function execdd_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'http://api.turinglabs.net/api/v1/jd/ddfactory/create/' + dd_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'}
        }
        $.get(url, (err, resp, data) => {
            try {
                $.dd_shareCodeBody = data
                tz += `东东工厂:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}


function execjx_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'http://api.turinglabs.net/api/v1/jd/jxfactory/create/' + jx_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},
        }
        $.get(url, (err, resp, data) => {
            try {
                $.jx_shareCodeBody = data
                tz += `京喜工厂:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}


function execzd_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'http://api.turinglabs.net/api/v1/jd/bean/create/' + zd_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},
        }
        $.get(url, (err, resp, data) => {
            try {
                $.zd_shareCodeBody = data
                tz += `种豆得豆:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}


function execnc_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'http://api.turinglabs.net/api/v1/jd/farm/create/' + nc_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},
        }
        $.get(url, (err, resp, data) => {
            try {
                $.nc_shareCodeBody = data
                tz += `京东农场:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}


function execmc_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'http://api.turinglabs.net/api/v1/jd/pet/create/' + mc_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},
        }
        $.get(url, (err, resp, data) => {
            try {
                $.mc_shareCodeBody = data
                tz += `京东萌宠:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}

function execzz_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'https://code.chiang.fun/api/v1/jd/jdzz/create/' + zz_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},
        }
        $.get(url, (err, resp, data) => {
            try {
                $.zz_shareCodeBody = data
                tz += `京东赚赚:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}

function execjoy_shareCode() {
    return new Promise((resolve) => {
        const url = {
            url: 'https://code.chiang.fun/api/v1/jd/jdcrazyjoy/create/' + joy_shareCodeVal,
            headers: {'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'},
        }
        $.get(url, (err, resp, data) => {
            try {
                $.joy_shareCodeBody = data
                tz += `京东CrazyJoy:` + resp.statusCode + `\n`
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve()
            }
        })
    })
}

function showmsg() {
    tz += `\n\n========= 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime()).toLocaleString()} \n\n`;
    $.msg(jsname, "", tz);
    // notify.sendNotify(jsname, tz);
    tz = ''
}


// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
