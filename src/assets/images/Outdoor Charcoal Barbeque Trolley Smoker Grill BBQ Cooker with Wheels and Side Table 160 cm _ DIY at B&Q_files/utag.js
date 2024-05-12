//tealium universal tag - utag.loader ut4.0.202404021445, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var utag_condload=false;try{(function(){function ul(src,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;a.getElementsByTagName('head')[0].appendChild(b)};var match=(""+document.cookie).match("(^|;\\s)utag_env_kingfisher_b-and-q-wapp=(\/\/tags\.tiqcdn\.com\/utag\/kingfisher\/[a-z0-9\\.-]{1,30}\\/[^\\s;]*)");if(match){if(match[2].indexOf("/prod/")===-1){var s=match[2];while(s.indexOf("%")!=-1){s=decodeURIComponent(s);}s=s.replace(/\.\./g,"");ul(s);utag_condload=true;__tealium_default_path='//tags.tiqcdn.com/utag/kingfisher/b-and-q-wapp/prod/';}}})();}catch(e){};try{try{window.dataLayer=window.dataLayer||{};if(typeof dataLayer.push==='function'){window.old_datalayer_push=dataLayer.push.bind(dataLayer);dataLayer.push=function(eventObj){if(eventObj.event==="useractioncomplete"){utag.link({"event_name":"cookie_prefs_set"});console.log("Cookie consent complete");}
window.old_datalayer_push(eventObj);}}
else{window.dataLayer.push=function(eventObj){if(eventObj.event==="useractioncomplete"){utag.link({"event_name":"cookie_prefs_set"});console.log("Cookie consent complete");}}}}catch(e){console.log(e)}}catch(e){console.log(e);}
if(!utag_condload){try{try{(function(w){w.kfAnalytics=window.kfAnalytics||{};w.kfAnalytics.ut=window.kfAnalytics.ut||{};if(typeof w.kfAnalytics.ut.clean==="function"){return false;}
var regexToMatch=/(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ig;
    var regexForURLPath = /\/.*\.[\w:]+/;
    var allowedKeys = ["customer_email"];
    var replaceText = "<<omitted>>";
   
    var isNull = function isNull(value) {
        return toString.call(value).toLowerCase() === "[object null]";
    };

    var isDefined = function isDefined(value) {
        return toString.call(value).toLowerCase() !== "[object undefined]";
    };

    var isNotDefined = function isNotDefined(value) {
        return toString.call(value).toLowerCase() === "[object undefined]";
    };

    var isFunction = function isFunction(value) {
        return toString.call(value).toLowerCase() === "[object function]";
    };

    var isObject = function isObject(value) {
        return toString.call(value).toLowerCase() === "[object object]";
    };

    var isNotObject = function isNotObject(value) {
        return toString.call(value).toLowerCase() !== "[object object]";
    };

    var isEmpty = function isEmpty(value) {
        return value === "";
    };

    var isString = function isString(value) {
        return toString.call(value).toLowerCase() === "[object string]";
    };

    var isNotString = function isString(value) {
        return toString.call(value).toLowerCase() !== "[object string]";
    };

    var isArray = function isArray(value) {
        return toString.call(value).toLowerCase() === "[object array]";
    };

    var isURL = function isURL(value) {
        try {
            var url = new URL(value);
            return true;
        } catch(error) {
            return false;
        }
    };
    
    var replaceEmailAddress = function replaceEmailAddress(value) {
        if(isNotDefined(value) || isNull(value) || isNotString(value) || isEmpty(value)) return value;

        value = decodeURIComponent(value);
        if(regexToMatch.test(value)) {
            value = value.replace(regexToMatch, replaceText);
        }
        return value;
    };

    var detectURLPathInValue = function detectURLPathInValue(value) {
        if(isNotDefined(value) || isNull(value) || isNotString(value) || isEmpty(value)) return value;
        return regexForURLPath.test(value);
    };

    var cleanQueryString = function cleanQueryString(queryString) {
        var temp;
        var tempArr = [];
        queryString = queryString.replace(/^\?/, "");
        temp = queryString.split(/\&|\;/);
        temp.forEach(function (keyValuePair) {
            var qspKey = keyValuePair.split("=");
            if (qspKey.length > 1 && typeof qspKey[1] == "string") {
                qspKey[1] = decodeURIComponent(qspKey[1]).replace(regexToMatch, replaceText);
            }
            tempArr.push(qspKey.join("="));
        });
        return tempArr.join("&");
    };

    var cleanURL = function cleanURL(url) {
        if(isNotDefined(url) || isNull(url)) {
            return "";
        }
        var retVal = "";
        var temp;
        temp = new URL(url);
        retVal = temp.protocol + "//";
        retVal = retVal + temp.hostname;
        retVal = retVal + temp.pathname;
        if(temp.search.length > 0) {
            retVal = retVal + "?" + cleanQueryString(temp.search);
        }
        if(temp.hash.length > 0) {
            retVal = retVal + temp.hash;
        }
        return retVal;
    };

    var clean = function clean(obj) {
        try {
            if(isNotObject(obj)) return obj;
            var keys = Object.keys(obj) || [];
            keys.forEach(function(key) {
                if(isNotDefined(obj[key]) || isNull(obj[key]) || allowedKeys.indexOf(key) > -1) return false;
                switch(true) {
                    case isURL(obj[key]):
                        obj[key] = cleanURL(obj[key]);
                        break;
                    case detectURLPathInValue(obj[key]):
                        obj[key] = decodeURIComponent(obj[key]);
                        try {
                            if(isString(obj[key]) && obj[key].indexOf("?") == -1) {
                                break;
                            } else {
                                var temp = obj[key].split("?");
                                temp.forEach(function(slot, ind) {
                                    if(detectURLPathInValue(slot) === false) {
                                        temp[ind] = cleanQueryString(temp[ind]);
                                    }
                                });
                                obj[key] = temp.join("?");
                            }
                        } catch(err) {}
                        break;
                    case isString(obj[key]):
                        obj[key] = replaceEmailAddress(obj[key]);
                        break;
                    case isObject(obj[key]):
                        clean(obj[key]);
                        break;
                    case isArray(obj[key]):
                        obj[key].forEach(function (valueInArr, index) {
                            if (isString(valueInArr)) {
                               obj[key][index] = valueInArr.replace(regexToMatch, replaceText);
                            } else if(isObject(valueInArr)) {
                                clean(valueInArr);
                            }
                        });
                        break;
                    default:
                        break;
                }
            });
        } catch(err) {
            if (isDefined(utag) && isFunction(utag.DB)) {
                utag.DB("Error Occurred trying to clean the data layer", err);
            }
        }
    };
    w.kfAnalytics.ut.clean = clean;
})(window);
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
/* These are the modifications: */
history.pushState = ( f => function pushState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
    var ret = f.apply(this, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
    return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
    window.dispatchEvent(new Event('locationchange'))
});

window.addEventListener('locationchange', function(){
    if(document.location.href.indexOf('search?term') > -1) {
        if(!window.brSearchBlock) {
            var sterm = document.location.href.split("term=")[1],
                regex = /(^|\w|)\+($|\w|)/g,
                clean = sterm.replace(regex, function(match, p1, p2){
                    return p1 + " " + p2;
                }).trim();
        	utag.link({ "tealium_event": "spa_search", "searchRaw": sterm, "searchTerm": clean, "bloomreach_deferred": "true" })

//damian 14-03-2024 added this to track a redirect hit on searchterm wrapped inside a dev environment.       	
        	//if(utag.data["ut.env"]="dev")
        	//{
        	    sessionStorage.setItem("redirect_search_term_hit", clean);
        	//}

        }
    }
})
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if(!utag_condload){try{ try{
var referrer = document.referrer;

// Function to parse query parameters from a URL
function getQueryParam(url, name) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ''));
}
} catch(e){ console.log(e) } }catch(e){console.log(e);}}

if (typeof utag == "undefined" && !utag_condload) {
  var utag = {
    id:"kingfisher.b-and-q-wapp",
    o:{},
    sender: {},
    send: {},
    rpt: {
      ts: {
        a: new Date()
      }
    },
    dbi: [],
    db_log : [],
    loader: {
      q: [],
      lc: 0,
      f: {},
      p: 0,
      ol: 0,
      wq: [],
      lq: [],
      bq: {},
      bk: {},
      rf: 0,
      ri: 0,
      rp: 0,
      rq: [],
      ready_q : [],
      sendq :{"pending":0},
      run_ready_q : function(){
        for(var i=0;i<utag.loader.ready_q.length;i++){
          utag.DB("READY_Q:"+i);
          try{utag.loader.ready_q[i]()}catch(e){utag.DB(e)};
        }
      },
      lh: function(a, b, c) {
        a = "" + location.hostname;
        b = a.split(".");
        c = (/\.co\.|\.com\.|\.org\.|\.edu\.|\.net\.|\.asn\.|\...\.jp$/.test(a)) ? 3 : 2;
        return b.splice(b.length - c, c).join(".");
      },
      WQ: function(a, b, c, d, g) {
        utag.DB('WQ:' + utag.loader.wq.length);
        try {
          // this picks up a utag_data items added after utag.js was loaded
          // Gotcha: Data layer set after utag.js will not overwrite something already set via an extension.  Only "new" values are copied from utag_data
          // for case where utag_data is set after utag.js is loaded
          if(utag.udoname && utag.udoname.indexOf(".")<0){
            utag.ut.merge(utag.data,window[utag.udoname],0);
          }

          // TBD: utag.handler.RE('view',utag.data,"bwq");
          // process load rules again if this flag is set
          if(utag.cfg.load_rules_at_wait){
            utag.handler.LR(utag.data);
          }
        } catch (e) {utag.DB(e)};

        d=0;
        g=[];
        for (a = 0; a < utag.loader.wq.length; a++) {
          b = utag.loader.wq[a];
          b.load = utag.loader.cfg[b.id].load;
          if (b.load == 4){
            //LOAD the bundled tag set to wait here
            this.f[b.id]=0;
            utag.loader.LOAD(b.id)
          }else if (b.load > 0) {
            g.push(b);
            //utag.loader.AS(b); // moved: defer loading until flags cleared
            d++;
          }else{
            // clear flag for those set to wait that were not actually loaded
            this.f[b.id]=1;
          }
        }
        for (a = 0; a < g.length; a++) {
          utag.loader.AS(g[a]);
        }

        if(d==0){
          utag.loader.END();
        }
      },
      AS: function(a, b, c, d) {
        utag.send[a.id] = a;
        if (typeof a.src == 'undefined' || !utag.ut.hasOwn(a,'src')) {
          a.src = utag.cfg.path + ((typeof a.name != 'undefined') ? a.name : 'ut' + 'ag.' + a.id + '.js')
        }
        a.src += (a.src.indexOf('?') > 0 ? '&' : '?') + 'utv=' + (a.v?utag.cfg.template+a.v:utag.cfg.v);
        utag.rpt['l_' + a.id] = a.src;
        b = document;
        this.f[a.id]=0;
        if (a.load == 2) {
          utag.DB("Attach sync: "+a.src);
          a.uid=a.id;
          b.write('<script id="utag_' + a.id + '"src="' + a.src + '"></scr' + 'ipt>')
          if(typeof a.cb!='undefined')a.cb();
        } else if(a.load==1 || a.load==3) {
          if (b.createElement) {
            c = 'utag_kingfisher.b-and-q-wapp_'+a.id;
            if (!b.getElementById(c)) {
              d = {
                src:a.src,
                id:c,
                uid:a.id,
                loc:a.loc
              }
              if(a.load == 3){d.type="iframe"};
              if(typeof a.cb!='undefined')d.cb=a.cb;
              utag.ut.loader(d);
            }
          }
        }
      },
      GV: function(a, b, c) {
        b = {};
        for (c in a) {
          if (a.hasOwnProperty(c) && typeof a[c] != "function") b[c] = a[c];
        }
        return b
      },
      OU: function(tid, tcat, a, b, c, d, f, g) {
        g = {};
        utag.loader.RDcp(g);
        try {
          if (typeof g['cp.OPTOUTMULTI'] != 'undefined') {
            c = utag.loader.cfg;
            a = utag.ut.decode(g['cp.OPTOUTMULTI']).split('|');
            for (d = 0; d < a.length; d++) {
              b = a[d].split(':');
              if (b[1] * 1 !== 0) {
                if (b[0].indexOf('c') == 0) {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tcat == b[0].substring(1)) c[f].load = 0;
                    // if we know the tid but don't know the category and this is a category opt out...
                    if (c[f].tid == tid && c[f].tcat == b[0].substring(1)) return true;
                  }
                  if (tcat == b[0].substring(1)) return true;
                } else if (b[0] * 1 == 0) {
                  utag.cfg.nocookie = true
                } else {
                  for (f in utag.loader.GV(c)) {
                    if (c[f].tid == b[0]) c[f].load = 0
                  }
                  if (tid == b[0]) return true;
                }
              }
            }
          }
        } catch (e) {utag.DB(e)}
        return false;
      },
      RDdom: function(o){
        var d = document || {}, l = location || {};
        o["dom.referrer"] = d.referrer;
        o["dom.title"] = "" + d.title;
        o["dom.domain"] = "" + l.hostname;
        o["dom.query_string"] = ("" + l.search).substring(1);
        o["dom.hash"] = ("" + l.hash).substring(1);
        o["dom.url"] = "" + d.URL;
        o["dom.pathname"] = "" + l.pathname;
        o["dom.viewport_height"] = window.innerHeight || (d.documentElement?d.documentElement.clientHeight:960);
        o["dom.viewport_width"] = window.innerWidth || (d.documentElement?d.documentElement.clientWidth:960);
      },
      RDcp: function(o, b, c, d){
        b = utag.loader.RC();

        for (d in b) {
          if (d.match(/utag_(.*)/)){for(c in utag.loader.GV(b[d])){o["cp.utag_"+RegExp.$1+"_"+c]=b[d][c];}}}
for(c in utag.loader.GV((utag.cl&&!utag.cl['_all_'])?utag.cl:b)){if(c.indexOf("utag_")<0&&typeof b[c]!="undefined")o["cp."+c]=b[c];}},hasSplitUtagMainCookie:function(){return document.cookie.match(/([\s\S]*)utag_main_([\s\S]*)=([\s\S]*)/g);},hasUtagMainCookie:function(){return document.cookie.includes("utag_main=");},convertingToSplitCookies:function(){return utag.cfg.split_cookie&&utag.loader.hasUtagMainCookie();},revertingSplitCookies:function(){return!utag.cfg.split_cookie&&utag.loader.hasSplitUtagMainCookie();},readIndividualCookies:function(){if(!document.cookie||document.cookie===""){return{};}
var cookies=document.cookie.split("; ");return cookies.reduce(function(result,cookie){var kv=cookie.split("=");if(kv[0].startsWith("utag_")){var cookieName=kv[0].split("_")[1];var cookieNameWithTag="utag_"+cookieName;if(!result[cookieNameWithTag]){result[cookieNameWithTag]={};}
var nameTrimmed=kv[0].replace(cookieNameWithTag+"_","");result[cookieNameWithTag][nameTrimmed]=String(kv[1]).replace(/%3B/g,';')}
return result;},{});},RDqp:function(o,a,b,c){a=location.search+(location.hash+'').replace("#","&");if(utag.cfg.lowerqp){a=a.toLowerCase()};if(a.length>1){b=a.substring(1).split('&');for(a=0;a<b.length;a++){c=b[a].split("=");if(c.length>1){o["qp."+c[0]]=utag.ut.decode(c[1])}}}},RDmeta:function(o,a,b,h){a=document.getElementsByTagName("meta");for(b=0;b<a.length;b++){try{h=a[b].name||a[b].getAttribute("property")||"";}catch(e){h="";utag.DB(e)};if(utag.cfg.lowermeta){h=h.toLowerCase()};if(h!=""){o["meta."+h]=a[b].content}}},RDva:function(o){var readAttr=function(o,l){var a="",b;a=localStorage.getItem(l);if(!a||a=="{}")return;b=utag.ut.flatten({va:JSON.parse(a)});utag.ut.merge(o,b,1);}
try{readAttr(o,"tealium_va");readAttr(o,"tealium_va_"+o["ut.account"]+"_"+o["ut.profile"]);}catch(e){utag.DB(e)}},RDut:function(o,a){var t={};var d=new Date();var m=(utag.ut.typeOf(d.toISOString)=="function");o["ut.domain"]=utag.cfg.domain;o["ut.version"]=utag.cfg.v;t["tealium_event"]=o["ut.event"]=a||"view";t["tealium_visitor_id"]=o["ut.visitor_id"]=o["cp.utag_main_v_id"];t["tealium_session_id"]=o["ut.session_id"]=o["cp.utag_main_ses_id"];t["tealium_session_number"]=o["cp.utag_main__sn"];t["tealium_session_event_number"]=o["cp.utag_main__se"];try{t["tealium_datasource"]=utag.cfg.datasource;t["tealium_account"]=o["ut.account"]=utag.cfg.utid.split("/")[0];t["tealium_profile"]=o["ut.profile"]=utag.cfg.utid.split("/")[1];t["tealium_environment"]=o["ut.env"]="prod";}catch(e){utag.DB(e)}
t["tealium_random"]=Math.random().toFixed(16).substring(2);t["tealium_library_name"]="ut"+"ag.js";t["tealium_library_version"]=(utag.cfg.template+"0").substring(2);t["tealium_timestamp_epoch"]=Math.floor(d.getTime()/1000);t["tealium_timestamp_utc"]=(m?d.toISOString():"");d.setHours(d.getHours()-(d.getTimezoneOffset()/60));t["tealium_timestamp_local"]=(m?d.toISOString().replace("Z",""):"");utag.ut.merge(o,t,0);},RDses:function(o,a,c){a=(new Date()).getTime();c=(a+parseInt(utag.cfg.session_timeout))+"";if(!o["cp.utag_main_ses_id"]){o["cp.utag_main_ses_id"]=a+"";o["cp.utag_main__ss"]="1";o["cp.utag_main__se"]="1";o["cp.utag_main__sn"]=(1+parseInt(o["cp.utag_main__sn"]||0))+"";}else{o["cp.utag_main__ss"]="0";o["cp.utag_main__se"]=(1+parseInt(o["cp.utag_main__se"]||0))+"";}
o["cp.utag_main__pn"]=o["cp.utag_main__pn"]||"1";o["cp.utag_main__st"]=c;var ses_id=utag.loader.addExpSessionFlag(o["cp.utag_main_ses_id"]||a);var pn=utag.loader.addExpSessionFlag(o["cp.utag_main__pn"]);var ss=utag.loader.addExpSessionFlag(o["cp.utag_main__ss"]);var st=utag.loader.addExpSessionFlag(c);var se=utag.loader.addExpSessionFlag(o["cp.utag_main__se"]);utag.loader.SC("utag_main",{_sn:(o["cp.utag_main__sn"]||1),_se:se,_ss:ss,_st:st,ses_id:ses_id,_pn:pn});},containsExpSessionFlag:function(v){return String(v).replace(/%3B/g,';').includes(";exp-session");},addExpSessionFlag:function(v){return utag.loader.containsExpSessionFlag(v)?v:v+";exp-session";},containsExpFlag:function(v){return String(v).replace(/%3B/g,';').includes(";exp-");},addExpFlag:function(v,x){return utag.loader.containsExpFlag(v)?v:v+";exp-"+String(x);},RDpv:function(o){if(typeof utag.pagevars=="function"){utag.DB("Read page variables");utag.pagevars(o);}},RDlocalStorage:function(o){if(utag.cfg.ignoreLocalStorage){return;}
Object.keys(window.localStorage).forEach(function(localStorageKey){o["ls."+localStorageKey]=window.localStorage[localStorageKey];});},RDsessionStorage:function(o){if(utag.cfg.ignoreSessionStorage){return;}
Object.keys(window.sessionStorage).forEach(function(sessionStorageKey){o["ss."+sessionStorageKey]=window.sessionStorage[sessionStorageKey];});},convertCustomMultiCookies:function(){var cookiesToConvert={}
if(utag.loader.convertingToSplitCookies()){utag.loader.mapUtagCookies(function(parentCookie){cookiesToConvert[parentCookie.key]=cookiesToConvert[parentCookie.key]||{}
parentCookie.value.split('$').forEach(function(subCookie){var key=subCookie.split(':')[0]
var value=subCookie.split(':')[1]
cookiesToConvert[parentCookie.key][key]=(String(value).indexOf('%3Bexp-')!==-1&&String(value).indexOf('%3Bexp-session')===-1)?String(value).replace(/%3B/g,';')+'u':String(value).replace(/%3B/g,';');})})}else if(utag.loader.revertingSplitCookies()){utag.loader.mapUtagCookies(function(splitCookie){var parentCookieName=splitCookie.key.match(/^utag_[^_]*/)[0];var subCookieName=splitCookie.key.split(parentCookieName+'_')[1];cookiesToConvert[parentCookieName]=cookiesToConvert[parentCookieName]||{};cookiesToConvert[parentCookieName][subCookieName]=(String(splitCookie.value).indexOf('%3Bexp-')!==-1&&String(splitCookie.value).indexOf('%3Bexp-session'))===-1?String(splitCookie.value).replace(/%3B/g,';')+'u':String(splitCookie.value).replace(/%3B/g,';');})}
if(utag.loader.convertingToSplitCookies()){utag.loader.getUtagCookies().forEach(function(cookie){utag.loader.deleteCookie(cookie.key);});}else if(utag.loader.revertingSplitCookies()){utag.loader.deleteIndividualCookies();}
Object.keys(cookiesToConvert).forEach(function(key){utag.loader.SC(key,cookiesToConvert[key]);});},RD:function(o,a){utag.DB("utag.loader.RD");utag.DB(o);utag.loader.RDcp(o);if(utag.cfg.split_cookie){utag.loader.checkCookiesAgainstWhitelist();}
if(utag.loader.convertingToSplitCookies()||utag.loader.revertingSplitCookies()){utag.loader.convertCustomMultiCookies();}
if(!utag.loader.rd_flag){utag.loader.rd_flag=1;o["cp.utag_main__pn"]=(1+parseInt(o["cp.utag_main__pn"]||0))+"";var setVId=window.utag_cfg_ovrd&&window.utag_cfg_ovrd.always_set_v_id||false;if(setVId){o["cp.utag_main_v_id"]=o["cp.utag_main_v_id"]||utag.ut.vi((new Date()).getTime());utag.loader.SC("utag_main",{"v_id":o["cp.utag_main_v_id"]});}
utag.loader.RDses(o);}
if(a&&!utag.cfg.noview)utag.loader.RDses(o);utag.loader.RDqp(o);utag.loader.RDmeta(o);utag.loader.RDdom(o);utag.loader.RDut(o,a||"view");utag.loader.RDpv(o);utag.loader.RDva(o);utag.loader.RDlocalStorage(o);utag.loader.RDsessionStorage(o);},whitelistDefined:function(){return utag.cfg.split_cookie_allowlist&&Array.isArray(utag.cfg.split_cookie_allowlist);},cookieIsAllowed:function(key){return!utag.loader.whitelistDefined()||utag.cfg.split_cookie_allowlist.includes(key);},checkCookiesAgainstWhitelist:function(){if(!utag.loader.whitelistDefined()){return;}
utag.loader.mapUtagCookies(function(cookie){if(!utag.loader.cookieIsAllowed(cookie.key.replace("utag_main_",""))){utag.loader.deleteCookie(cookie.key);}},true);},deleteIndividualCookies:function(){utag.loader.mapUtagCookies(function(cookie){utag.loader.deleteCookie(cookie.key);});},deleteCookie:function(key){document.cookie=key+"=; path=/;domain="+utag.cfg.domain+";max-age=0;";},getUtagCookies:function(onlyUtagMain=false){var cookies=document.cookie.split("; ");var result=[];for(var i=0;i<cookies.length;i++){var cookie=cookies[i];if(cookie.startsWith(onlyUtagMain?"utag_main_":"utag_")){var kv=cookie.split("=");result.push({key:kv[0],value:kv[1]});}}
return result;},mapUtagCookies:function(mapFunction,onlyUtagMain=false){var cookies=utag.loader.getUtagCookies(onlyUtagMain);for(var i=0;i<cookies.length;i++){var cookie=cookies[i];mapFunction(cookie);}},filterArray:function(array,predicate){var y=0;for(var x=0;x<array.length;x++){if(predicate(array[x])){array[y]=array[x];y++;}}
array.length=y;},RC:function(a,x,b,c,d,e,f,g,h,i,j,k,l,m,n,o,v,ck,cv,r,s,t){o={};b=(""+document.cookie!="")?(document.cookie).split("; "):[];r=/^(.*?)=(.*)$/;s=/^(.*);exp-(.*)$/;t=(new Date()).getTime();var newMultiCookies;if(utag.loader.hasSplitUtagMainCookie()){newMultiCookies=utag.loader.readIndividualCookies();utag.loader.filterArray(b,function(cookie){return!cookie.startsWith("utag_")});}
for(c=0;c<b.length;c++){if(b[c].match(r)){ck=RegExp.$1;cv=RegExp.$2;}
e=utag.ut.decode(cv);if(typeof ck!="undefined"){if(ck.indexOf("ulog")==0||ck.indexOf("utag_")==0){e=cv.split("$");g=[];j={};for(f=0;f<e.length;f++){try{g=e[f].split(":");if(g.length>2){g[1]=g.slice(1).join(":");}
v="";if((""+g[1]).indexOf("~")==0){h=g[1].substring(1).split("|");for(i=0;i<h.length;i++)h[i]=utag.ut.decode(h[i]);v=h}else v=utag.ut.decode(g[1]);j[g[0]]=v;}catch(er){utag.DB(er)};}
o[ck]={};for(f in utag.loader.GV(j)){if(utag.ut.typeOf(j[f])=="array"){n=[];for(m=0;m<j[f].length;m++){if(j[f][m].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);if(k>t)n[m]=(x==0)?j[f][m]:RegExp.$1;}}
j[f]=n.join("|");}else{j[f]=""+j[f];if(j[f].match(s)){k=(RegExp.$2=="session")?(typeof j._st!="undefined"?j._st:t-1):parseInt(RegExp.$2);j[f]=(k<t)?null:(x==0?j[f]:RegExp.$1);}}
if(j[f])o[ck][f]=j[f];}}else if(utag.cl[ck]||utag.cl['_all_']){o[ck]=e}}}
if(newMultiCookies){Object.keys(newMultiCookies).forEach(function(tag){o[tag]={};Object.keys(newMultiCookies[tag]).forEach(function(key){o[tag][key]=newMultiCookies[tag][key].split(';exp-')[0]})});}
return(a)?(o[a]?o[a]:{}):o;},SC:function(a,b,c,d,e,f,g,h,i,j,k,x,v){if(!a)return 0;if(a=="utag_main"&&utag.cfg.nocookie)return 0;v="";var date=new Date();var exp=new Date();var data;exp.setTime(date.getTime()+(365*24*60*60*1000));x=exp.toGMTString();if(c&&c==="da"||(utag.cfg.split_cookie&&c==='d')){x="Thu, 31 Dec 2009 00:00:00 GMT";data=utag.loader.GV(b);}else if(a.indexOf("utag_")!=0&&a.indexOf("ulog")!=0){if(typeof b!="object"){v=b}}else{if(utag.cfg.split_cookie){d=utag.loader.readIndividualCookies()[a]||{};data=utag.loader.GV(b);}else{d=utag.loader.RC(a,0);}
for(e in utag.loader.GV(b)){f=""+b[e];if(f.match(/^(.*);exp-(\d+)(\w)$/)){g=date.getTime()+parseInt(RegExp.$2)*((RegExp.$3=="h")?3600000:86400000);if(RegExp.$3=="u")g=parseInt(RegExp.$2);f=RegExp.$1+";exp-"+g;}
if(c=="i"){if(d[e]==null)d[e]=f;}else if(c=="d")delete d[e];else if(c=="a")d[e]=(d[e]!=null)?(f-0)+(d[e]-0):f;else if(c=="ap"||c=="au"){if(d[e]==null)d[e]=f;else{if(d[e].indexOf("|")>0){d[e]=d[e].split("|")}
g=(utag.ut.typeOf(d[e])=="array")?d[e]:[d[e]];g.push(f);if(c=="au"){h={};k={};for(i=0;i<g.length;i++){if(g[i].match(/^(.*);exp-(.*)$/)){j=RegExp.$1;}
if(typeof k[j]=="undefined"){k[j]=1;h[g[i]]=1;}}
g=[];for(i in utag.loader.GV(h)){g.push(i);}}
d[e]=g}}else d[e]=f;}
if(utag.loader.convertingToSplitCookies()===true){delete d[a];}
data=utag.loader.GV(d);h=new Array();for(g in data){if(utag.ut.typeOf(d[g])=="array"){for(c=0;c<d[g].length;c++){d[g][c]=encodeURIComponent(d[g][c])}
h.push(g+":~"+d[g].join("|"))}else h.push((g+":").replace(/[\,\$\;\?]/g,"")+encodeURIComponent(d[g]))}
if(h.length==0){h.push("");x=""}
v=(h.join("$"));}
if(utag.cfg.split_cookie&&c!=='da'&&c!=='d'){utag.loader.prepareAndWriteCookies(a,data,x);}else if(utag.cfg.split_cookie){utag.loader.mapUtagCookies(function(cookieInfo){var cookiesToDelete=Object.keys(data||{}).map(function(key){return a+'_'+key});if((c==='da'&&cookieInfo.key.startsWith(a))||(c==='d'&&cookiesToDelete.indexOf(cookieInfo.key)!==-1)){document.cookie=cookieInfo.key+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x+(utag.cfg.secure_cookie?";secure":"");}})}else{document.cookie=a+"="+v+";path=/;domain="+utag.cfg.domain+";expires="+x+(utag.cfg.secure_cookie?";secure":"");}
return 1},prepareAndWriteCookies:function(tag,data,expiration){var defaultSessionExpirationCookies=["_pn","_ss","_st","_ses_id","_se"];var originalExpiration=expiration;if(Object.keys(data).length>0){for(var key in data){expiration=originalExpiration;if(!utag.loader.cookieIsAllowed(key)){continue;}
var value=String(data[key]);if(defaultSessionExpirationCookies.includes(key)){value=utag.loader.addExpSessionFlag(value);}
if(value.match(/exp-(\d+|session)$/)){var expValue=RegExp.$1;if(expValue==="session"&&!!utag.cfg.session_timeout){value=utag.loader.addExpSessionFlag(value);expiration=new Date();expiration.setTime(expiration.getTime()+parseInt(utag.cfg.session_timeout));expiration=expiration.toGMTString();}else{var expInt=parseInt(expValue);if(!!expInt){value=utag.loader.addExpFlag(value,expInt);expiration=new Date(expInt);expiration=expiration.toGMTString();}}}
utag.loader.writeCookie(tag+"_"+key,value,expiration);}
utag.loader.deleteCookie(tag);}},writeCookie:function(key,value,expiration){if(value.includes(";")){value=value.replace(/;/g,encodeURIComponent(";"));}
document.cookie=key+"="+value+";path=/;domain="+utag.cfg.domain+";expires="+expiration+(utag.cfg.secure_cookie?";secure":"");},LOAD:function(a,b,c,d){if(!utag.loader.cfg){return}
if(this.ol==0){if(utag.loader.cfg[a].block&&utag.loader.cfg[a].cbf){this.f[a]=1;delete utag.loader.bq[a];}
for(b in utag.loader.GV(utag.loader.bq)){if(utag.loader.cfg[a].load==4&&utag.loader.cfg[a].wait==0){utag.loader.bk[a]=1;utag.DB("blocked: "+a);}
utag.DB("blocking: "+b);return;}
utag.loader.INIT();return;}
utag.DB('utag.loader.LOAD:'+a);if(this.f[a]==0){this.f[a]=1;if(utag.cfg.noview!=true){if(utag.loader.cfg[a].send){utag.DB("SENDING: "+a);try{if(utag.loader.sendq.pending>0&&utag.loader.sendq[a]){utag.DB("utag.loader.LOAD:sendq: "+a);while(d=utag.loader.sendq[a].shift()){utag.DB(d);utag.sender[a].send(d.event,utag.handler.C(d.data));utag.loader.sendq.pending--;}}else{utag.sender[a].send('view',utag.handler.C(utag.data));}
utag.rpt['s_'+a]=0;}catch(e){utag.DB(e);utag.rpt['s_'+a]=1;}}}
if(utag.loader.rf==0)return;for(b in utag.loader.GV(this.f)){if(this.f[b]==0||this.f[b]==2)return}
utag.loader.END();}},EV:function(a,b,c,d){if(b=="ready"){if(!utag.data){try{utag.cl={'_all_':1};utag.loader.initdata();utag.loader.RD(utag.data);}catch(e){utag.DB(e)};}
if((document.attachEvent||utag.cfg.dom_complete)?document.readyState==="complete":document.readyState!=="loading")setTimeout(c,1);else{utag.loader.ready_q.push(c);var RH;if(utag.loader.ready_q.length<=1){if(document.addEventListener){RH=function(){document.removeEventListener("DOMContentLoaded",RH,false);utag.loader.run_ready_q()};if(!utag.cfg.dom_complete)document.addEventListener("DOMContentLoaded",RH,false);window.addEventListener("load",utag.loader.run_ready_q,false);}else if(document.attachEvent){RH=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",RH);utag.loader.run_ready_q()}};document.attachEvent("onreadystatechange",RH);window.attachEvent("onload",utag.loader.run_ready_q);}}}}else{if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){a.attachEvent(((d==1)?"":"on")+b,c)}}},END:function(b,c,d,e,v,w){if(this.ended){return};this.ended=1;utag.DB("loader.END");b=utag.data;if(utag.handler.base&&utag.handler.base!='*'){e=utag.handler.base.split(",");for(d=0;d<e.length;d++){if(typeof b[e[d]]!="undefined")utag.handler.df[e[d]]=b[e[d]]}}else if(utag.handler.base=='*'){utag.ut.merge(utag.handler.df,b,1);}
utag.rpt['r_0']="t";for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}
utag.rpt.ts['s']=new Date();v=utag.cfg.path;w=v.indexOf(".tiqcdn.");if(w>0&&b["cp.utag_main__ss"]==1&&!utag.cfg.no_session_count)utag.ut.loader({src:v.substring(0,v.indexOf("/ut"+"ag/")+6)+"tiqapp/ut"+"ag.v.js?a="+utag.cfg.utid+(utag.cfg.nocookie?"&nocookie=1":"&cb="+(new Date).getTime()),id:"tiqapp"})
if(utag.cfg.noview!=true)utag.handler.RE('view',b,"end");utag.handler.INIT();}},DB:function(a,b){if(utag.cfg.utagdb===false){return;}else if(typeof utag.cfg.utagdb=="undefined"){b=document.cookie+'';utag.cfg.utagdb=((b.indexOf('utagdb=true')>=0)?true:false);}
if(utag.cfg.utagdb===true){var t;if(utag.ut.typeOf(a)=="object"){t=utag.handler.C(a)}else{t=a}
utag.db_log.push(t);try{if(!utag.cfg.noconsole)console.log(t)}catch(e){}}},RP:function(a,b,c){if(typeof a!='undefined'&&typeof a.src!='undefined'&&a.src!=''){b=[];for(c in utag.loader.GV(a)){if(c!='src')b.push(c+'='+escape(a[c]))}
this.dbi.push((new Image()).src=a.src+'?utv='+utag.cfg.v+'&utid='+utag.cfg.utid+'&'+(b.join('&')))}},view:function(a,c,d){return this.track({event:'view',data:a||{},cfg:{cb:c,uids:d}})},link:function(a,c,d){return this.track({event:'link',data:a||{},cfg:{cb:c,uids:d}})},track:function(a,b,c,d,e){a=a||{};if(typeof a=="string"){a={event:a,data:b||{},cfg:{cb:c,uids:d}}}
for(e in utag.loader.GV(utag.o)){utag.o[e].handler.trigger(a.event||"view",a.data||a,a.cfg||{cb:b,uids:c})}
a.cfg=a.cfg||{cb:b};if(typeof a.cfg.cb=="function")a.cfg.cb();return true},handler:{base:"",df:{},o:{},send:{},iflag:0,INIT:function(a,b,c){utag.DB('utag.handler.INIT');if(utag.initcatch){utag.initcatch=0;return}
this.iflag=1;a=utag.loader.q.length;if(a>0){utag.DB("Loader queue");for(b=0;b<a;b++){c=utag.loader.q[b];utag.handler.trigger(c.a,c.b,c.c)}}
},test:function(){return 1},LR:function(b){utag.DB("Load Rules");for(var d in utag.loader.GV(utag.cond)){utag.cond[d]=false;}
utag.DB(b);utag.loader.loadrules(b);utag.DB(utag.cond);utag.loader.initcfg();utag.loader.OU();for(var r in utag.loader.GV(utag.cond)){utag.rpt['r_'+r]=(utag.cond[r])?"t":"f";}},RE:function(a,b,c,d,e,f,g){if(c!="alr"&&!this.cfg_extend){return 0;}
utag.DB("RE: "+c);if(c=="alr")utag.DB("All Tags EXTENSIONS");utag.DB(b);if(typeof this.extend!="undefined"){g=0;for(d=0;d<this.extend.length;d++){try{e=0;if(typeof this.cfg_extend!="undefined"){f=this.cfg_extend[d];if(typeof f.count=="undefined")f.count=0;if(f[a]==0||(f.once==1&&f.count>0)||f[c]==0){e=1}else{if(f[c]==1){g=1};f.count++}}
if(e!=1){this.extend[d](a,b);utag.rpt['ex_'+d]=0}}catch(er){utag.DB(er);utag.rpt['ex_'+d]=1;utag.ut.error({e:er.message,s:utag.cfg.path+'utag.js',l:d,t:'ge'});}}
utag.DB(b);return g;}},trigger:function(a,b,c,d,e,f){utag.DB('trigger:'+a+(c&&c.uids?":"+c.uids.join(","):""));b=b||{};utag.DB(b);if(!this.iflag){utag.DB("trigger:called before tags loaded");for(d in utag.loader.f){if(!(utag.loader.f[d]===1))utag.DB('Tag '+d+' did not LOAD')}
utag.loader.q.push({a:a,b:utag.handler.C(b),c:c});return;}
utag.ut.merge(b,this.df,0);utag.loader.RD(b,a);utag.cfg.noview=false;function sendTag(a,b,d){try{if(typeof utag.sender[d]!="undefined"){utag.DB("SENDING: "+d);utag.sender[d].send(a,utag.handler.C(b));utag.rpt['s_'+d]=0;}else if(utag.loader.cfg[d].load!=2){utag.loader.sendq[d]=utag.loader.sendq[d]||[];utag.loader.sendq[d].push({"event":a,"data":utag.handler.C(b)});utag.loader.sendq.pending++;utag.loader.AS({id:d,load:1});}}catch(e){utag.DB(e)}}
if(c&&c.uids){this.RE(a,b,"alr");for(f=0;f<c.uids.length;f++){d=c.uids[f];if(!utag.loader.OU(utag.loader.cfg[d].tid)){sendTag(a,b,d);}}}else if(utag.cfg.load_rules_ajax){this.RE(a,b,"blr");this.LR(b);this.RE(a,b,"alr");for(f=0;f<utag.loader.cfgsort.length;f++){d=utag.loader.cfgsort[f];if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){sendTag(a,b,d);}}}else{this.RE(a,b,"alr");for(d in utag.loader.GV(utag.sender)){sendTag(a,b,d);}}
this.RE(a,b,"end");},C:function(a,b,c){b={};for(c in utag.loader.GV(a)){if(utag.ut.typeOf(a[c])=="array"){b[c]=a[c].slice(0)}else{b[c]=a[c]}}
return b}},ut:{pad:function(a,b,c,d){a=""+((a-0).toString(16));d='';if(b>a.length){for(c=0;c<(b-a.length);c++){d+='0'}}return""+d+a},vi:function(t,a,b){if(!utag.v_id){a=this.pad(t,12);b=""+Math.random();a+=this.pad(b.substring(2,b.length),16);try{a+=this.pad((navigator.plugins.length?navigator.plugins.length:0),2);a+=this.pad(navigator.userAgent.length,3);a+=this.pad(document.URL.length,4);a+=this.pad(navigator.appVersion.length,3);a+=this.pad(screen.width+screen.height+parseInt((screen.colorDepth)?screen.colorDepth:screen.pixelDepth),5)}catch(e){utag.DB(e);a+="12345"};utag.v_id=a;}
return utag.v_id},hasOwn:function(o,a){return o!=null&&Object.prototype.hasOwnProperty.call(o,a)},isEmptyObject:function(o,a){for(a in o){if(utag.ut.hasOwn(o,a))return false}
return true},isEmpty:function(o){var t=utag.ut.typeOf(o);if(t=="number"){return isNaN(o)}else if(t=="boolean"){return false}else if(t=="string"){return o.length===0}else return utag.ut.isEmptyObject(o)},typeOf:function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();},flatten:function(o){var a={};function r(c,p){if(Object(c)!==c||utag.ut.typeOf(c)=="array"){a[p]=c;}else{if(utag.ut.isEmptyObject(c)){}else{for(var d in c){r(c[d],p?p+"."+d:d);}}}}
r(o,"");return a;},merge:function(a,b,c,d){if(c){for(d in utag.loader.GV(b)){a[d]=b[d]}}else{for(d in utag.loader.GV(b)){if(typeof a[d]=="undefined")a[d]=b[d]}}},decode:function(a,b){b="";try{b=decodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=unescape(a)};return b},encode:function(a,b){b="";try{b=encodeURIComponent(a)}catch(e){utag.DB(e)};if(b==""){b=escape(a)};return b},error:function(a,b,c){if(typeof utag_err!="undefined"){utag_err.push(a)}},loader:function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){m.parentNode.removeChild(m);}
b=a.createElement("iframe");o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}
if(o.id){b.id=o.id};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l])}
b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}
if(typeof o.error=="function"){utag.loader.EV(b,"error",o.error);}
if(o.type!="img"){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}}};utag.o['kingfisher.b-and-q-wapp']=utag;utag.cfg={template:"ut4.51.",load_rules_ajax:true,load_rules_at_wait:false,lowerqp:false,noconsole:false,session_timeout:1800000,readywait:0,noload:0,domain:utag.loader.lh(),datasource:"##UTDATASOURCE##".replace("##"+"UTDATASOURCE##",""),secure_cookie:("##UTSECURECOOKIE##".replace("##"+"UTSECURECOOKIE##","")==="true")?true:false,path:"//tags.tiqcdn.com/utag/kingfisher/b-and-q-wapp/prod/",utid:"kingfisher/b-and-q-wapp/202404021445",ignoreSessionStorage:false,ignoreLocalStorage:false,split_cookie:true};utag.cfg.v=utag.cfg.template+"202404021445";utag.cond={102:0,103:0,104:0,105:0,107:0,108:0,112:0,272:0,322:0,323:0,324:0,326:0,339:0,375:0,376:0,392:0,66:0,85:0,96:0};utag.loader.initdata=function(){try{utag.data=(typeof utag_data!='undefined')?utag_data:{};utag.udoname='utag_data';}catch(e){utag.data={};utag.DB('idf:'+e);}};utag.loader.loadrules=function(_pd,_pc){var d=_pd||utag.data;var c=_pc||utag.cond;for(var l in utag.loader.GV(c)){switch(l){case'102':try{c[102]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',5'.toLowerCase())>-1&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('facebook.com:0'.toLowerCase())<0)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['gdprswitch']!='undefined'&&d['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'103':try{c[103]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',5'.toLowerCase())>-1&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('dwin1.com:0'.toLowerCase())<0)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['gdprswitch']!='undefined'&&d['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'104':try{c[104]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',5'.toLowerCase())>-1&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('bing.com:0'.toLowerCase())<0)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['gdprswitch']!='undefined'&&d['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'105':try{c[105]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',5'.toLowerCase())>-1&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('pinterest.com:0'.toLowerCase())<0)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['gdprswitch']!='undefined'&&d['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'107':try{c[107]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',5'.toLowerCase())>-1&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('ads.google.com:0'.toLowerCase())<0)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['gdprswitch']!='undefined'&&d['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'108':try{c[108]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',3'.toLowerCase())>-1)||(typeof d['cp.notice_gdpr_prefs']!='undefined'&&d['cp.notice_gdpr_prefs'].toString().toLowerCase().indexOf(',2'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'112':try{c[112]|=(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',5'.toLowerCase())>-1&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('ads-twitter.com:0'.toLowerCase())<0)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['gdprswitch']!='undefined'&&d['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'272':try{c[272]|=(typeof d['cp._preferenceCookie']!='undefined'&&d['cp._preferenceCookie'].toString().toLowerCase().indexOf('all-cookies:true'.toLowerCase())>-1)||(typeof d['cp._preferenceCookie']!='undefined'&&d['cp._preferenceCookie'].toString().toLowerCase().indexOf('perfAndAnalytics:true'.toLowerCase())>-1)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',3'.toLowerCase())>-1)||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1)||(typeof d['cp.notice_gdpr_prefs']!='undefined'&&d['cp.notice_gdpr_prefs'].toString().indexOf(',2')>-1)}catch(e){utag.DB(e)};break;case'322':try{c[322]|=(typeof d['contentsquare_web_enabled']!='undefined'&&d['contentsquare_web_enabled'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'323':try{c[323]|=(typeof d['floodlight_enabled']!='undefined'&&d['floodlight_enabled'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'324':try{c[324]|=(typeof d['cp._gdprCookie']!='undefined'&&/AcceptAll|,2/.test(d['cp._gdprCookie'])&&d['cp._gdprCookie'].toString().indexOf('.confirmit.com:0')<0)}catch(e){utag.DB(e)};break;case'326':try{c[326]|=(typeof d['cp._preferenceCookie']!='undefined'&&d['cp._preferenceCookie'].toString().toLowerCase().indexOf('all-cookies:true'.toLowerCase())>-1&&typeof d['google_consent_mode_enabled']=='undefined')||(typeof d['cp._preferenceCookie']!='undefined'&&d['cp._preferenceCookie'].toString().toLowerCase().indexOf('perfAndAnalytics:true'.toLowerCase())>-1&&typeof d['google_consent_mode_enabled']=='undefined')||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1&&typeof d['google_consent_mode_enabled']=='undefined')||(typeof d['cp._gdprCookie']!='undefined'&&d['cp._gdprCookie'].toString().toLowerCase().indexOf(',3'.toLowerCase())>-1&&typeof d['google_consent_mode_enabled']=='undefined')||(typeof d['cp.notice_gdpr_prefs']!='undefined'&&d['cp.notice_gdpr_prefs'].toString().toLowerCase().indexOf(',2'.toLowerCase())>-1&&typeof d['google_consent_mode_enabled']=='undefined')||(typeof d['google_consent_mode_enabled']!='undefined'&&d['google_consent_mode_enabled'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'339':try{c[339]|=(typeof d['tealium_collect_enabled']!='undefined'&&d['tealium_collect_enabled'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'375':try{c[375]|=(typeof d['google_consent_mode_enabled']!='undefined'&&d['google_consent_mode_enabled'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'376':try{c[376]|=(typeof d['google_consent_mode_enabled']!='undefined'&&d['google_consent_mode_enabled'].toString().toLowerCase().indexOf('true'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'392':try{c[392]|=(typeof d['ut.event']!='undefined'&&d['ut.event'].toString().toLowerCase().indexOf('view'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'66':try{c[66]|=(typeof d['basicPageName']!='undefined'&&d['basicPageName'].toString().toLowerCase().indexOf('Checkout_Order_Confirmation_Page'.toLowerCase())>-1)}catch(e){utag.DB(e)};break;case'85':try{c[85]|=(typeof d['basicPageName']!='undefined'&&d['basicPageName'].toString().indexOf('D_DIY_Checkout_Order_Confirmation_Page')>-1&&typeof d['transactionStatus']!='undefined'&&d['transactionStatus'].toString().indexOf('1')>-1&&typeof d['ut.event']!='undefined'&&d['ut.event'].toString().indexOf('view')>-1)}catch(e){utag.DB(e)};break;case'96':try{c[96]|=(typeof d['tealium_event']!='undefined'&&d['tealium_event'].toString().toLowerCase()=='view'.toLowerCase())||(typeof d['tealium_event']!='undefined'&&d['tealium_event'].toString().toLowerCase().indexOf('spa_search'.toLowerCase())>-1)||(typeof d['tealium_event']!='undefined'&&d['tealium_event'].toString().toLowerCase().indexOf('autosuggest'.toLowerCase())>-1)||(typeof d['tealium_event']!='undefined'&&d['tealium_event'].toString().toLowerCase()=='add to basket'.toLowerCase()&&typeof d['eventName']!='undefined'&&d['eventName'].toString().toLowerCase()=='add'.toLowerCase())}catch(e){utag.DB(e)};break;}}};utag.pre=function(){utag.loader.initdata();try{utag.loader.RD(utag.data)}catch(e){utag.DB(e)};utag.loader.loadrules();};utag.loader.GET=function(){utag.cl={'_all_':1};utag.pre();utag.handler.extend=[function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[1250]=='undefined'){utag.runonce.ext[1250]=1;if(1){try{var utagCookies=utag.loader.getUtagCookies();for(var i in utagCookies){var cName=utagCookies[i].key;if(typeof cName!=='undefined'&&(utagCookies[i].value.indexOf('undefined')>-1||utagCookies[i].key.indexOf('undefined')>-1)){utag.loader.deleteCookie(cName);}}}catch(e){utag.DB('utagCookie Before Load Rules extension errored');}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var tealium_profile=b["ut.profile"]
var tealium_profile_lookup={"b-and-q-ie-wapp":"bq_ie","b-and-q-wapp":"bq_uk","castofr-wapp":"cafr","castopl-wapp":"capl","tradepoint-wapp":"tradepoint",}
if(tealium_profile_lookup[tealium_profile]){b["banner"]=tealium_profile_lookup[tealium_profile];}}}catch(e){utag.DB(e)}},function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[1246]=='undefined'){utag.runonce.ext[1246]=1;if(1){if(a==="view"){window.tealiumDataLayer=window.tealiumDataLayer||[];function gtag(){tealiumDataLayer.push(arguments);}
gtag('consent','default',{'ad_personalization':'denied','ad_storage':'denied','ad_user_data':'denied','analytics_storage':'denied',});}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(b["event_name"]&&b["event_name"]==="cookie_prefs_set"||b["cp.notice_gdpr_prefs"]&&!localStorage.getItem("has_opt_out_vendors_check_run")){var is_trustarc_available=Boolean(typeof truste!=="undefined"&&truste.cma&&truste.cma.callApi);var get_consent_categories=is_trustarc_available?truste.cma.callApi('getConsentCategories','screwfix.de.ae.redboxcloud.com')["categories"]:"no categories";function find_parameters_with_zero(input_string){const regex=/"([^"]+)":"0"/g;const matches=[...input_string.matchAll(regex)];const parameters_with_zero=[];for(const match of matches){parameters_with_zero.push(match[1]+":0");}
return parameters_with_zero;}
if(get_consent_categories&&get_consent_categories!=="no categories"&&typeof window.__tcfapi==="undefined"){var vendor_string=JSON.stringify(get_consent_categories);var vendor_array=find_parameters_with_zero(vendor_string);var index_to_remove=vendor_array.indexOf("value:0");vendor_array.splice(index_to_remove,1);localStorage.setItem("opt_out_vendors",vendor_array)}
localStorage.setItem("has_opt_out_vendors_check_run","true")}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var google_consent_mode_mapping={"b-and-q-ie-wapp":true,"b-and-q-wapp":true,"castofr-wapp":false,"castopl-wapp":true,"tradepoint-wapp":true,}
if(google_consent_mode_mapping[b["ut.profile"]]){b["google_consent_mode_enabled"]="true";}
if(b["ut.event"]==="view"&&b["cp.notice_gdpr_prefs"]){var is_analytics_opted_in=Boolean(b["cp.notice_gdpr_prefs"]&&b["cp.notice_gdpr_prefs"].indexOf("2")>-1);var is_ad_storage_opted_in=Boolean(b["cp.notice_gdpr_prefs"]&&b["cp.notice_gdpr_prefs"].indexOf("4")>-1);if(b["cp._gdprCookie"]){if(b["cp._gdprCookie"].indexOf("doubleclick.net")>-1){is_ad_storage_opted_in=false;}
if(b["cp._gdprCookie"].indexOf("google-analytics.com")>-1){is_analytics_opted_in=false;}}
if(b["cp.tcf_vendor_opt_ins"]){if(!b["cp.tcf_vendor_opt_ins"].match(/accept_all|^755(,|$)|,755(,|$)/gi)){is_ad_storage_opted_in=false;}}
b["google_consent_mode_analytics_storage"]=is_analytics_opted_in?"granted":"denied";b["google_consent_mode_ad_storage"]=is_ad_storage_opted_in?"granted":"denied";function gtag(){tealiumDataLayer.push(arguments);}
gtag('consent','update',{'ad_personalization':b["google_consent_mode_ad_storage"],'ad_storage':b["google_consent_mode_ad_storage"],'ad_user_data':b["google_consent_mode_ad_storage"],'analytics_storage':b["google_consent_mode_analytics_storage"],});if(b["google_consent_mode_ad_storage"]==="denied"){gtag('set','ads_data_redaction',true);}}}}catch(e){utag.DB(e)}},function(a,b){try{if(/Yes|true|Assumed|1/.test(b['basicLoggedIn'])){b['userIdLoggedOnly']=b['userId']}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['userId']!='undefined'&&b['userId'].toString().indexOf('null')<0&&typeof b['basicLoggedIn']!='undefined'&&/yes|true|1|assumed/i.test(b['basicLoggedIn']))||(typeof b['userId']!='undefined'&&typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().toLowerCase().indexOf('user_register'.toLowerCase())>-1&&typeof b['eventAction']!='undefined'&&b['eventAction'].toString().toLowerCase().indexOf('Creation'.toLowerCase())>-1&&typeof b['eventLabel']!='undefined'&&b['eventLabel'].toString().toLowerCase().indexOf('Confirmation Page'.toLowerCase())>-1)){utag.loader.SC('utag_main',{'user_id':b['userId']+';exp-session'});b['cp.utag_main_user_id']=b['userId'];}}catch(e){utag.DB(e);}},function(a,b){try{if(1){var vat_rate_mapping={"b-and-q-ie-wapp":0.23,"b-and-q-wapp":0.2,"castofr-wapp":0.2,"castopl-wapp":0.23,"tradepoint-wapp":0.2,}
var vat_rate=vat_rate_mapping[b["tealium_profile"]];if(vat_rate){var transaction_data_layer_variables={"transactionTotalDiscountIncVat":"transactionTotalDiscountExVat","transactionCCTotalIncVat":"transactionCCTotalExVat","transactionDeliveryTotalIncVat":"transactionDeliveryTotalExVat","transactionTotalIncVat":"transactionTotalExVat","transactionTotalDiscountAmount":"transactionTotalDiscountAmountExVat","transactionDiscountAmount":"transactionDiscountAmountExVat",}
for(var property in transaction_data_layer_variables){if(b[property]){var new_property=transaction_data_layer_variables[property];var property_excluding_vat_float=+(b[property])/(1+vat_rate);b[new_property]=property_excluding_vat_float.toFixed(2);}}
if(b["transactionTotalDiscountExVat"]){b["transactionTotalDiscount"]=b["transactionTotalDiscountExVat"]}}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['cp.utag_main_user_id']!='undefined'&&typeof b['cp.utag_main_user_id']!='undefined'&&b['cp.utag_main_user_id']!='')){b['userId']=b['cp.utag_main_user_id']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){var pii_data=["cff-first_name","cff-last_name","cff-email_address","cff-contact_number","contact-details-first-name","contact-details-last-name","pan","email","password","expirymonth","expiryyear","card-security","cardholdername","postcode-qas","contact-details-contact-number","house-number-qas","contact-address-house-number","contact-address-house-name","contact-address-address2","contact-address-address3","contact-address-city","contact-address-county","contact-address-postcode","contact-address-first-name","contact-address-last-name","first-name","last-name","mobile-number","contact-number","contact-details-contact-number","cff-how_can_we_help_you_today","cff-contact_number","cff-contact-number","cff-email_address","cff-first_name","cff-last_name","number","expiry.month","cvv","expliry.year","name","title","lastName","contactNumber","postalCodeToLookup","companyName","houseName","houseNumber","addressLine1","addressLine2","city","postalCode","county","Title","Name","Expiry.year","Number","Expiry.month","verificationEmail"];var query_params=b["dom.query_string"].split(/&|;/);var clean_query=[];function validate(field){for(var i=0;i<pii_data.length;i++){var regexp=new RegExp("^"+pii_data[i]+"=");if(regexp.test(field)){return false;}}
return true;}
for(var i=0;i<query_params.length;i++){var field=query_params[i];if(validate(field)){clean_query.push(field);}}
var path=(b.PathVpv||"").split("?")[0]||b["dom.pathname"];b.clean_url=path+"?"+clean_query.join("&");b.clean_url_full=b["dom.domain"]+path+"?"+clean_query.join("&");}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['dom.pathname']=b['clean_url'];b['dom.url']=b['clean_url_full'];b['PathVpv']=b['clean_url']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(b["cp.notice_gdpr_prefs"]){var preference_cookie=b["cp.notice_gdpr_prefs"];if(preference_cookie){var preference_groups=preference_cookie.split(":")[0].split(",");var add_one=preference_groups.map(function(index){return(parseInt(index)+1).toString();})
var all_groups=add_one.join(",");cookie_groups=all_groups==="1,2,3,4,5"?"AcceptAll":"permit "+all_groups;}
b["opt_out_vendors"]=localStorage.getItem("opt_out_vendors")||"";var granular_consent=cookie_groups==="permit 1"?"":b["opt_out_vendors"];var consent_preferences=cookie_groups+","+granular_consent;if(consent_preferences){localStorage.setItem("cookie_consent_preferences",consent_preferences);utag.data["cookie_consent_preferences"]=b["cookie_consent_preferences"]=localStorage.getItem("cookie_consent_preferences");}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof window.kfAnalytics!="undefined"&&typeof window.kfAnalytics.ut.clean==="function"&&typeof b!="undefined"){window.kfAnalytics.ut.clean(b);if(typeof utag!="undefined"&&typeof utag.DB!="undefined"){utag.DB("Cleaned up Data Layer:");utag.DB(b);}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b['prodFulfilmentType']=b['prodFulfillmentType']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(b["tmsCategory"]&&b["tmsAction"]&&b["tmsLabel"]){if(b["tmsCategory"].match(/appointment booking/gi)&&b["tmsAction"].match(/confirmation/gi)){if(b["tmsLabel"].match(/kitchen bo(o|e)king/gi)){b["custom_event_name"]="kitchen_consultation_confirmation";}
if(b["tmsLabel"].match(/(online|in-store) bathroom/gi)){b["custom_event_name"]="bathroom_consultation_confirmation";}}
if(b["tmsCategory"].match(/appointment booking/gi)&&b["tmsAction"].match(/select service/gi)&&b["tmsLabel"].match(/online bathroom/gi)){b["custom_event_name"]="bathroom_consultation_started_online";}
if(b["tmsCategory"].match(/appointment booking/gi)&&b["tmsAction"].match(/select service/gi)&&b["tmsLabel"].match(/in-store bathroom/gi)){b["custom_event_name"]="bathroom_consultation_started_in_store";}}
if(b["tmsAction"]&&b["tmsAction"].match(/confirmation/gi)&&b["tmsLabel"]&&b["tmsLabel"].match(/energy saving service booking/gi)){b["custom_event_name"]="energy_saving_service_booking";}
if(b["customer_email"]&&b["transactionId"]&&b["transactionStatus"]&&b["transactionStatus"]==="1"&&b["ut.event"]==="link"){b["custom_event_name"]="transaction_link";}
if(a==="view"&&b["basicPageName"]&&window.location.pathname.match(/^\/bandqclub/gi)){b["custom_page_name"]="join_bq_club";}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['prodPriceIncVat']!='undefined'){var productPrice=b['prodPrice'];var productPriceIncVat=b['prodPriceIncVat'];try{if(productPrice!==undefined){for(var i=0;i<productPrice.length;i++){if(parseFloat(productPrice[i])===0&&productPriceIncVat[i]!==undefined){productPrice[i]=(parseFloat(productPriceIncVat[i])/1.2).toFixed(2).toString();}}}else{productPrice=JSON.parse(JSON.stringify(productPriceIncVat));for(var i=0;i<productPrice.length;i++){productPrice[i]=(parseFloat(productPriceIncVat[i])/1.2).toFixed(2).toString();}}
b['prodPrice']=productPrice;}catch(e){}}}catch(e){utag.DB(e)}},function(a,b,c,d){b._ccity=(typeof b['userCity']!='undefined')?b['userCity']:'';b._ccountry=(typeof b['userCountry']!='undefined')?b['userCountry']:'';b._ccurrency=(typeof b['transactionCurrency']!='undefined')?b['transactionCurrency']:'';b._ccustid=(typeof b['userIdLoggedOnly']!='undefined')?b['userIdLoggedOnly']:'';b._corder=(typeof b['transactionId']!='undefined')?b['transactionId']:'';b._cpromo=(typeof b['transactionDiscountCodeOrder']!='undefined')?b['transactionDiscountCodeOrder']:'';b._cship=(typeof b['transactionShipping']!='undefined')?b['transactionShipping']:'';b._cstate=(typeof b['userState']!='undefined')?b['userState']:'';b._cstore=(typeof b['basicStoreSelected']!='undefined')?b['basicStoreSelected']:'web';b._csubtotal=(typeof b['transactionTotalDiscountExVat']!='undefined')?b['transactionTotalDiscountExVat']:'';b._ctax=(typeof b['transactionTax']!='undefined')?b['transactionTax']:'';b._ctotal=(typeof b['transactionTotalDiscountExVat']!='undefined')?b['transactionTotalDiscountExVat']:'';b._ctype=(typeof b['transactionFullfilmentType']!='undefined')?b['transactionFullfilmentType']:'';b._czip=(typeof b['userPostCodeFull']!='undefined')?b['userPostCodeFull']:'';b._cprod=(typeof b['prodEan']!='undefined'&&b['prodEan'].length>0)?b['prodEan']:[];b._cprodname=(typeof b['prodName']!='undefined'&&b['prodName'].length>0)?b['prodName']:[];b._cbrand=(typeof b['prodBrand']!='undefined'&&b['prodBrand'].length>0)?b['prodBrand']:[];b._ccat=(typeof b['prodCategory']!='undefined'&&b['prodCategory'].length>0)?b['prodCategory']:[];b._ccat2=(typeof b['prodCategoryID']!='undefined'&&b['prodCategoryID'].length>0)?b['prodCategoryID']:[];b._cquan=(typeof b['prodQuantity']!='undefined'&&b['prodQuantity'].length>0)?b['prodQuantity']:[];b._cprice=(typeof b['prodPrice']!='undefined'&&b['prodPrice'].length>0)?b['prodPrice']:[];b._csku=(typeof b['prodSku']!='undefined'&&b['prodSku'].length>0)?b['prodSku']:[];b._cpdisc=(typeof b['prodDiscount']!='undefined'&&b['prodDiscount'].length>0)?b['prodDiscount']:[];if(b._cprod.length==0){b._cprod=b._csku.slice()};if(b._cprodname.length==0){b._cprodname=b._csku.slice()};function tf(a){if(a==''||isNaN(parseFloat(a))){return a}else{return(parseFloat(a)).toFixed(2)}};b._ctotal=tf(b._ctotal);b._csubtotal=tf(b._csubtotal);b._ctax=tf(b._ctax);b._cship=tf(b._cship);for(c=0;c<b._cprice.length;c++){b._cprice[c]=tf(b._cprice[c])};for(c=0;c<b._cpdisc.length;c++){b._cpdisc[c]=tf(b._cpdisc[c])};},function(a,b){try{if((typeof b['basicPageName']!='undefined'&&b['basicPageName'].toString().toLowerCase()=='D_DIY_Checkout_Order_Confirmation_Page'.toLowerCase())){var newCommissionGroupArr=[];b.awinCommissionGroup=[];for(var i=0,len=b.prodPriceIncVat.length;i<len;i++){newCommissionGroupArr.push(b.prodCategoryId[i]);}
b.awinCommissionGroup=newCommissionGroupArr;}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['searchTerm']!='undefined'&&/^\/departments\/.*\.cat.*$/.test(b['clean_url'])&&b['searchTerm'].toString().toLowerCase()!='null'.toLowerCase())){b['bloomreach_page_type']='category';b['bloomReach_suggest']='category'}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['basicPDPType']!='undefined'&&b['basicPageType'].toString().toLowerCase()=='Product'.toLowerCase())){utag.data.basicPDPType=b.basicPDPType;}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['cp.basicPageType']!='undefined'&&b['cp.basicPageType'].toString().toLowerCase()=='Product'.toLowerCase()&&typeof b['prodReviews']!='undefined'&&parseFloat(b['prodReviews'])>=parseFloat(1))){BV.pixel.trackPageView({"productId":b.prodEan,"type":b.basicPageType,"categoryId":b.prodCategoryId,"numReviews":b.prodReviews,"avgRating":b.prodRating});}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['dom.domain'];if(typeof d=='undefined')return;c=[{'stable.diy.com':'G-8CD23NE4ZD'},{'www.diy.com':'G-MMVVTP12GM'},{'ng-app-bquk-internal-ngti-stable.k8s.an.digikfplc.com':'G-8CD23NE4ZD'},{'ng-app-bquk-internal-ngti-test.k8s.an.digikfplc.com':'G-0KV63TQGD3'},{'ng-app-bquk-ngti-test-external.web.an.digikfplc.com':'G-0KV63TQGD3'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['gaMeasurementId']=c[e][f];m=true};};if(m)break};if(!m)b['gaMeasurementId']='G-MMVVTP12GM';}},function(a,b){try{if(/qa/.test(b['ut.env'])){b['gaMeasurementId']='G-8CD23NE4ZD'}}catch(e){utag.DB(e);}},function(a,b){try{if(/dev/.test(b['ut.env'])){b['gaMeasurementId']='G-0KV63TQGD3'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(a==="view"&&!b["cp.notice_gdpr_prefs"]){utag.ut.merge(b,utag.data,0);utag.ut.merge(utag.data,b,1);}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['eventName']!='undefined'&&b['eventName'].toString().toLowerCase().indexOf('No FBT Recs'.toLowerCase())>-1)){b['eventCategory']='Frequently Bought Together';b['eventAction']='FBT Recommendations Check';b['eventLabel']=b['eventName'];b['non_interaction_hit']='1'}}catch(e){utag.DB(e);}},function(a,b){try{if(typeof b['productCount']!='undefined'){b['productCount']=b['productCount'].toString()}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(window.localStorage&&window.localStorage.getItem("nmg_group")!==null){b.nmgState=window.localStorage.getItem("nmg_group");}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var is_opted_in=b["cp.notice_gdpr_prefs"]&&b["cp.notice_gdpr_prefs"].indexOf("2")>-1||b["cp._gdprCookie"]&&((b["cp._gdprCookie"].match(/,3|AcceptAll/gi)&&b["cp._gdprCookie"].indexOf("contentsquare.net:0")===-1)||b["cp._gdprCookie"].indexOf("contentsquare.net:1")>-1);var is_web_view=Boolean(b["meta.web-view-source"]&&b["meta.web-view-source"]==="native");if(!is_web_view&&is_opted_in){b["contentsquare_web_enabled"]="true";}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var is_production=true;var hostname=window.location.hostname;var non_production_regex=[/^ng\-app\-bquk\-internal\-ngti\-test\.k8s\.an\.digikfplc\.com$/,/^ng\-app\-bquk\-internal\-ngti\-stable\.k8s\.an\.digikfplc\.com$/,/^bquk\-mobile\-web\-bbm\-test\-external\.web\.gapinp\.kd\.kfplc\.com$/,/^bquk\-mobile\-web\-internal\-bbm\-test\.k8s\.gapinp\.kd\.kfplc\.com$/,/^ng\-app\-bqie\-internal\-ngti\-test\.k8s\.an\.digikfplc\.com$/,/^ng\-app\-bqie\-ngti\-test\-external\.web\.an\.digikfplc\.com$/,/^ng\-app\-bqie\-internal\-ngti\-stable\.k8s\.an\.digikfplc\.com$/,/^ng\-app\-bqie\-ngti\-stable\-external\.web\.an\.digikfplc\.com$/,/^tpuk\-mobile\-web\-internal\-bbm\-test\.k8s\.gapinp\.kd\.kfplc\.com$/,/^tpuk\-mobile\-web\-bbm\-test\-external\.web\.gapinp\.kd\.kfplc\.com$/,/^www\.stable\.trade\-point\.co\.uk$/,/^tpuk\-mobile\-web\-bbm\-stable\-external\.web\.gapinp\.kd\.kfplc\.com$/,/^tpuk\-mobile\-web\-internal\-bbm\-stable\.k8s\.gapinp\.kd\.kfplc\.com$/,/^ng\-app\-tpuk\-internal\-ngti\-test\.k8s\.an\.digikfplc\.com$/,/^ng\-app\-tpuk\-ngti\-test\-external\.web\.an\.digikfplc\.com$/,/^cafr\-mobile\-web\-bbm\-stable\-external\.web\.gapinp\.kd\.kfplc\.com$/,/^www\.stable\.castorama\.fr$/,/^www\.pft\-storefront\.castorama\.fr$/,/^cafr\-mobile\-web\-bbm\-demo\-external\.web\.gapi\.kd\.kfplc\.com$/,/^cafr\-mobile\-web\-internal\-bbm\-test\.k8s\.gapinp\.kd\.kfplc\.com$/,/^cafr\-mobile\-web\-internal\-bbm\-stable\.k8s\.gapinp\.kd\.kfplc\.com$/,/^ng\-app\-cafr\-internal\-ngti\-test\.k8s\.an\.digikfplc\.com$/,/^ng\-app\-cafr\-ngti\-test\-external\.web\.an\.digikfplc\.com$/,/^www\.stable\.castorama\.pl$/,]
is_production=!non_production_regex.some(function(regex){return hostname.match(regex)})
var contentsquare_id={"bq_ie":is_production?"e6257335f20f7":"e4b9844ffc1ef","bq_uk":is_production?"3ea0a8165d0e5":"60a02fb7b8699","cafr":is_production?"4ff8ebff449bc":"5dc68d0875c8a","capl":is_production?"843ad0c44b12a":"80319eb9825f1","tradepoint":is_production?"e20f774d3a0c2":"3d994325b5bbf",}
if(b["banner"]&&contentsquare_id[b["banner"]]){b["contentsquare_id"]=contentsquare_id[b["banner"]];}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b["contentsquare_send_audiences"]=b["banner"]&&b["banner"]==="bq_uk"?"true":"false";if(b["eventCategory"]&&b["eventCategory"]==="AB Tasty"){b["ABTcampaignId"]=b["eventAction"];b["ABTvariationId"]=b["eventLabel"];}
var additional_event_name={"alternative add to cart":"Alternative - add to cart","alternative clickthrough to pdp":"Alternative - clickthrough to PDP","alternative product impression":"Alternative - impression",}
if(b["eventName"]){var event_name=b["eventName"].toLowerCase()
if(additional_event_name[event_name]){b["event_nameCS"]=additional_event_name[event_name];}}
if(b["prodBrand"]){if(Array.isArray(b["prodBrand"])&&b["prodBrand"].join().match(/^(,)+$/)){b["contentsquare_brand"]=[];}
else{b["contentsquare_brand"]=b["prodBrand"];}}
var price_without_vat_banner=Boolean(b["tealium_profile"]&&b["tealium_profile"].match(/b-and-q-wapp|b-and-q-ie-wapp|castopl-wapp/gi));var price_with_vat_banner=Boolean(b["tealium_profile"]&&b["tealium_profile"].match(/castofr-wapp|tradepoint-wapp/gi));if(price_without_vat_banner&&b["prodPrice"]){b["contentsquare_product_unit_price"]=b["prodPrice"];}
if(price_with_vat_banner&&b["prodPriceIncVat"]){b["contentsquare_product_unit_price"]=b["prodPriceIncVat"];}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){b["is_new_floodlight"]="true";var is_opted_in=Boolean(b["google_consent_mode_enabled"]&&b["google_consent_mode_enabled"]==="true"||(b["cp._gdprCookie"]&&b["cp._gdprCookie"].match(/,5|AcceptAll/gi)&&b["cp._gdprCookie"].indexOf("doubleclick.net:0")===-1));if(is_opted_in){var floodlight={category_id:{DIY763544:{activity_group:["remar0","remar0"],activity:["bq-pa007","categ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},DIY763595:{activity_group:["remar0","remar0"],activity:["bq-pa008","categ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},DIY779965:{activity_group:["remar0","remar0"],activity:["bq-pa00a","categ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},DIY765609:{activity_group:["remar0","remar0"],activity:["bq-ca0","categ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},DIY780276:{activity_group:["remar0","remar0"],activity:["bq-pa00b","categ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},DIY779463:{activity_group:["remar0","remar0"],activity:["bq-pa00e","categ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},},page_name:{D_DIY_Basket:{activity_group:["purch0","purch0"],activity:["bq-pu0","mybas0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},D_DIY_Checkout_Details_Page:{activity_group:["purch0"],activity:["bq-pu00"],advertiser_id:["DC-6017306"],counting_method:["standard"],},D_DIY_Checkout_Delivery_Page:{activity_group:["purch0"],activity:["bq-pu000"],advertiser_id:["DC-6017306"],counting_method:["standard"],},D_DIY_Checkout_Payment_Details_Page:{activity_group:["purch0"],activity:["bq-pu001"],advertiser_id:["DC-6017306"],counting_method:["standard"],},D_DIY_Checkout_Order_Review_Page:{activity_group:["purch0"],activity:["bq-pu002"],advertiser_id:["DC-6017306"],counting_method:["standard"],},D_DIY_Checkout_Order_Confirmation_Page:{activity_group:["sales0"],activity:["sales0"],advertiser_id:["DC-12173950"],counting_method:["transactions"],},},custom_page_name:{"join_bq_club":{activity_group:["bqclub0"],activity:["cb-start"],advertiser_id:["DC-6017306"],counting_method:["standard"],},},page_type:{"Category Page":{activity_group:["remar0"],activity:["categ0"],advertiser_id:["DC-6017306"],counting_method:["standard"],},Product:{activity_group:["remar0","remar0"],activity:["bq-pr0","produ0"],advertiser_id:["DC-6017306","DC-6017306"],counting_method:["standard","standard"],},},custom_event_name:{bathroom_consultation_confirmation:{activity_group:["bqbat0","consu0","kitch0"],activity:["bq-ba0","consu0","bq-ki01"],advertiser_id:["DC-6017306","DC-12173950","DC-6017306"],counting_method:["standard","standard","standard"],enhanced_conversion_activity_id:["13340975"],},bathroom_consultation_started_in_store:{activity_group:["bqbat0"],activity:["bq-st0"],advertiser_id:["DC-6017306"],counting_method:["standard"],},bathroom_consultation_started_online:{activity_group:["bqbat0"],activity:["bq-st00"],advertiser_id:["DC-6017306"],counting_method:["standard"],},energy_saving_service_booking:{activity_group:["bqener0","remar0","consu0","kitch0"],activity:["energ0","homee0","consu0","bq-ki01"],advertiser_id:["DC-6017306","DC-6017306","DC-12173950","DC-6017306"],counting_method:["standard","standard","standard","standard"],enhanced_conversion_activity_id:["14504129"],},kitchen_consultation_confirmation:{activity_group:["remar0","consu0","kitch0"],activity:["kitch0","consu0","bq-ki01"],advertiser_id:["DC-6017306","DC-12173950","DC-6017306"],counting_method:["standard","standard","standard"],enhanced_conversion_activity_id:["13921924"],},transaction_link:{activity_group:["check0"],activity:["bq-tr0"],advertiser_id:["DC-6017306"],counting_method:["transactions"],enhanced_conversion_activity_id:["3862486"],},},event_name:{"user_login":{activity_group:["remar0"],activity:["login0"],advertiser_id:["DC-6017306"],counting_method:["standard"],},"Registered Success not Active":{activity_group:["remar0"],activity:["creat0"],advertiser_id:["DC-6017306"],counting_method:["standard"],},"Registered Success Active":{activity_group:["bqclub0"],activity:["cb-conf"],advertiser_id:["DC-6017306"],counting_method:["standard"],},},}
if(b["ut.event"]==="view"){var view_match=floodlight["category_id"][b["categoryIdPage"]]||floodlight["page_name"][b["basicPageName"]]||floodlight["page_type"][b["basicPageType"]]||floodlight["custom_page_name"][b["custom_page_name"]];}
if(b["ut.event"]==="link"){var link_match=floodlight["custom_event_name"][b["custom_event_name"]]||floodlight["event_name"][b["tealium_event"]]||floodlight["event_name"][b["eventName"]];}
var event_match=view_match||link_match;if(event_match&&b["ut.event"]==="link"){b["floodlight_enabled"]=true;b["floodlight_counting_method"]=event_match.counting_method;b["floodlight_activity_group"]=event_match.activity_group;b["floodlight_activity"]=event_match.activity;b["floodlight_advertiser_id"]=event_match.advertiser_id
b["floodlight_event_type"]=b["custom_event_name"]&&b["custom_event_name"]==="transaction_link"?"purchase":"conversion";}
if(b["ut.event"]==="view"){b["floodlight_enabled"]=true;b["floodlight_advertiser_id"]=["DC-6017306","DC-12173950"];b["floodlight_activity_group"]=["remar0","allpa0"];b["floodlight_activity"]=["bq-al0","allpa0"];b["floodlight_counting_method"]=["unique","per_session"];b["floodlight_event_type"]="conversion";if(event_match){b["floodlight_advertiser_id"]=b["floodlight_advertiser_id"].concat(event_match.advertiser_id);b["floodlight_activity_group"]=b["floodlight_activity_group"].concat(event_match.activity_group);b["floodlight_activity"]=b["floodlight_activity"].concat(event_match.activity);b["floodlight_counting_method"]=b["floodlight_counting_method"].concat(event_match.counting_method);b["floodlight_event_type"]=b["transactionId"]&&b["transactionStatus"]&&b["transactionStatus"]==="1"?"purchase":"conversion";}}
if(event_match&&event_match.enhanced_conversion_activity_id){if(b["customer_email"]){b["is_enhanced_conversion"]="true";b["sa360_activity"]=event_match.activity[0];b["sa360_activity_group"]=event_match.activity_group[0];b["sa360_advertiser_id"]=event_match.advertiser_id[0].split("DC-")[1];b["sa360_activity_id"]=event_match.enhanced_conversion_activity_id[0];b["sa360_conversion_id"]=b["transactionId"]||b["tealium_random"];b["sa360_user_data"]=b["customer_email"];if(b["sa360_activity"]!=="bq-tr0"){b["cartItemsQuantity"]=b["transactionTotalDiscount"]="1";};}}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof BrTrk!=="undefined"&&BrTrk.getTracker&&BrTrk.getTracker().logEvent){var recommendation_event=b["eventName"]&&b["eventName"]==="select_item"&&b["prodListName"]&&b["prodListName"].match(/cross_sell/gi);if(a==="link"&&recommendation_event&&b["prodSku"]){var product_id=b["prodSku"][0];var widget_data={}
widget_data.wrid='br_ext';widget_data.wid='br_ext';widget_data.wty='br_ext';widget_data.item_id=product_id;BrTrk.getTracker().logEvent('widget','widget-click',widget_data,true)}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(b["ut.event"]&&b["ut.event"]==="view"&&!b["basicBreadcrumb"]){b["basicBreadcrumb"]=(function(){var breadcrumb_container=document.querySelector("[data-test-id='breadcrumbs']")||document.querySelector("[data-test-id='bread-crumbs']");if(breadcrumb_container){var breadcrumb_using_div=breadcrumb_container.querySelectorAll("div");var breadcrumb_using_li=breadcrumb_container.querySelectorAll("li");var breadcrumb_items=breadcrumb_using_div.length>0?breadcrumb_using_div:breadcrumb_using_li.length>0?breadcrumb_using_li:null;if(breadcrumb_items){var breadcrumb_array=[];breadcrumb_items.forEach(function(breadcrumb_item){var breadcrumb_link_text=breadcrumb_item.firstChild.textContent;breadcrumb_array.push(breadcrumb_link_text)})
if(breadcrumb_array.length>0){var breadcrumb_string=breadcrumb_array.join(" > ");return breadcrumb_string;}}}
else{return null}})();}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){var is_opted_in=Boolean(b["cp.notice_gdpr_prefs"]&&b["cp.notice_gdpr_prefs"].match(/,2/gi)||b["consentCS"]&&(b["consentCS"]==="true"||b["consentCS"]===true||b["consentCS"]===1||b["consentCS"]==="1"));if(is_opted_in){if(a==="link"&&b["transactionStatus"]&&b["transactionStatus"]==="1"&&b["transactionId"]){b["tealium_collect_custom_event"]="transaction_link";}
if(b["tmsCategory"]&&b["tmsAction"]&&b["tmsCategory"].match(/appointment booking/gi)&&b["tmsAction"].match(/confirmation/gi)){b["tealium_collect_custom_event"]="appointment_booking";}
if(b["wishlistAction"]&&b["wishlistAction"].match(/click on add to wishlist CTA/gi)){b["tealium_collect_custom_event"]="add_to_wishlist";}
var event_properties=[b["tealium_collect_custom_event"],b["tealium_event"],b["event"],b["eventName"],b["event_name"],];var event_whitelist={"Registered Active with userId":true,"Registered Success Active":true,"add to basket":true,"add_to_wishlist":true,"appointment_booking":true,"companyDetailsSubmitted":true,"registrationNewAccount":true,"remove":true,"transaction_link":true,"user_register":true,"user_register_with_club_card":true,"add":true,}
var event_match;for(var i=0;i<event_properties.length;i++){if(event_properties[i]&&event_whitelist[event_properties[i]]){event_match=event_properties[i]
break;}}
var is_view_event=Boolean(a==="view"||b["tealium_event_type"]&&b["tealium_event_type"]==="view");var is_link_event=Boolean(a==="link"||b["tealium_event_type"]&&b["tealium_event_type"]==="event");if((is_view_event&&!b["facetNumberRefinements"])||(is_link_event&&event_match)){b["tealium_collect_enabled"]="true";if(is_link_event){b["tealium_collect_link_event"]=event_match;}}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(b["userId"]&&typeof b["userId"]==="string"&&b["userId"].match(/^[0-9]+$/gi)){if((b["basicLoggedIn"]&&(b["basicLoggedIn"]==="Yes"||b["basicLoggedIn"]==="True")||b["tealium_event"]&&b["tealium_event"]==="user_register"&&b["eventLabel"]&&b["eventLabel"]==="Confirmation Page"&&b["eventAction"]&&b["eventAction"]==="Creation")){b["logged_in_user_id"]=b["userId"]}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(b["cp.tcf_vendor_opt_ins"]){var vendor_opt_in_mapping={"755":"tcf_google_ads_opt_in","1126":"tcf_microsoft_ads_opt_in","21":"tcf_the_trade_desk_opt_in","25":"tcf_yahoo_dot_opt_in","91":"tcf_criteo_opt_in","32":"tcf_xandr_opt_in","907":"tcf_awin_opt_in","215":"tcf_armis_opt_in","42":"tcf_taboola_opt_in","16":"tcf_rtb_house_opt_in","314":"tcf_keymantics_opt_in","210":"tcf_zemanta_opt_in","31":"tcf_ogury_opt_in",};var opt_ins=b["cp.tcf_vendor_opt_ins"];for(var vendor_id of Object.keys(vendor_opt_in_mapping)){var opt_in_flag=vendor_opt_in_mapping[vendor_id];var vendor_match_regex_string="accept_all|^"+vendor_id+"$|^"+vendor_id+",|,"+vendor_id+",|,"+vendor_id+"$";if(opt_ins.match(new RegExp(vendor_match_regex_string,"gi"))){b[opt_in_flag]="true";}
else{b[opt_in_flag]="false"}}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(a==="view"&&b["basicPageType"]&&b["basicPageType"]==="Product"){b["bazaarvoice_loaded"]=b["prodReviews"]?"true":"false";}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(b["event_name"]&&b["event_name"]==="cookie_prefs_set"){var d=new Date();var t=d.getTime();var expiry_date_epoch=t+31556926000;var expiry_date=new Date(expiry_date_epoch).toUTCString();var test_environment_domain_regex=/\.digikfplc\.com$/gi
var top_level_domain_regex=/^www\.stable\.|^www\.diy\.com$|^www\.diy\.ie$|^www\.trade-point\.co.uk$|^www\.castorama\.fr$|^www\.castorama\.pl$/gi
var is_test_domain=Boolean(window.location.hostname.match(test_environment_domain_regex));var is_top_level_domain=Boolean(window.location.hostname.match(top_level_domain_regex));var is_tealium_production=Boolean(b["ut.env"]&&b["ut.env"]==="prod");var set_cookie_on_top_level_domain=is_top_level_domain||!is_test_domain&&is_tealium_production;var cookie_domain_mapping={"b-and-q-ie-wapp":set_cookie_on_top_level_domain?".diy.ie":window.location.hostname,"b-and-q-wapp":set_cookie_on_top_level_domain?".diy.com":window.location.hostname,"castofr-wapp":set_cookie_on_top_level_domain?".castorama.fr":window.location.hostname,"castopl-wapp":set_cookie_on_top_level_domain?".castorama.pl":window.location.hostname,"tradepoint-wapp":set_cookie_on_top_level_domain?".trade-point.co.uk":window.location.hostname,}
var cookie_domain=cookie_domain_mapping[b["ut.profile"]];var cookie_static_values=";domain="+cookie_domain+";path=/;expires="+expiry_date;var consent_preferences=utag.data["cookie_consent_preferences"];if(consent_preferences){document.cookie="_gdprCookie="+consent_preferences+cookie_static_values;if(b["ut.env"]!=="prod"){console.log("GDPR Cookie:","_gdprCookie="+consent_preferences+cookie_static_values)}
setTimeout(function(){utag.view(utag.data)},250)}}}}catch(e){utag.DB(e)}},function(a,b,c,d,e,f,g){if(1){d=b['DSCategory'];if(typeof d=='undefined')return;c=[{'sheds_storage':'sheds'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['DSCategory']=c[e][f];m=true};};if(m)break};}},function(a,b){try{if(typeof b['basicPageType']=='undefined'||(typeof b['tealium_event']!='undefined'&&b['tealium_event'].toString().indexOf('bloomreach')<0&&typeof b['searchTerm']!='undefined')||(typeof b['basicPageType']!='undefined'&&b['basicPageType'].toString().toLowerCase().indexOf('search'.toLowerCase())>-1&&typeof b['searchTerm']!='undefined')||(typeof b['basicPageType']!='undefined'&&b['basicPageType'].toString().toLowerCase().indexOf('category'.toLowerCase())>-1&&typeof b['searchTerm']!='undefined')){window.bloomReachCurrent=window.bloomReachCurrent||"";if(typeof(b.searchTerm)!='undefined'&&b.searchTerm!==''&&b.searchTerm!==null){if(b["ut.event"]=="view"&&b.tealium_event!=="bloomreach"&&bloomReachCurrent!==b.searchTerm&&window.bloomReachInitPageViewFired!==undefined){bloomReachCurrent=b.searchTerm;window.bloomReachSearchPageViewFired=function(){if(typeof(b.searchTerm)!='undefined'&&b.searchTerm!==''&&b.searchTerm!==null){utag.view({'tealium_event':'bloomreach','basicPageType':'view','searchTerm':b.searchTerm},null,[26]);}}
setTimeout(bloomReachSearchPageViewFired,250);}}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['listerPage']!='undefined'&&parseFloat(b['listerPage'])>=parseFloat(1)&&typeof b['cp.basicPageType']!='undefined'&&/[(category|Category Page)]/.test(b['basicPageType']))){b['basicPageType']='Category Lister Page'}}catch(e){utag.DB(e);}},function(a,b){try{if(1){if(b['searchCount']===0){b['searchCount']=b['searchCount'].toString()}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.rpid']!='undefined'){b['rpid']=b['qp.rpid']}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['PathVpv']!='undefined'&&b['PathVpv'].toString().toLowerCase().indexOf('/checkout/confirmation'.toLowerCase())>-1)){var pii_element=document.querySelectorAll("p.fc7d4395");for(var i=0;i<pii_element.length;i++){pii_element[i].setAttribute('data-cs-mask','');}}}catch(e){utag.DB(e)}},function(a,b){try{if(b['PathVpv'].toString().indexOf('/checkout/confirmation')>-1){window.bvCallback=function(BV){BV.pixel.trackTransaction({"currency":"EUR","orderId":b._corder,"total":b.transactionTotalDiscountIncVat,"items":[{"price":b.prodPriceIncVat,"quantity":b._cquan,"productId":b.prodEan,}]});};}}catch(e){utag.DB(e)}},function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[254]=='undefined'){utag.runonce.ext[254]=1;if((typeof b['cp._gdprCookie']!='undefined'&&b['cp._gdprCookie'].toString().toLowerCase()=='AcceptAll'.toLowerCase()&&typeof b['prodReviews']!='undefined'&&parseFloat(b['prodReviews'])>=parseFloat(1))||(typeof b['cp._gdprCookie']!='undefined'&&b['cp._gdprCookie'].toString().toLowerCase().indexOf(',3'.toLowerCase())>-1&&typeof b['prodReviews']!='undefined'&&parseFloat(b['prodReviews'])>=parseFloat(1))||(typeof b['cp.notice_gdpr_prefs']!='undefined'&&b['cp.notice_gdpr_prefs'].toString().toLowerCase().indexOf(',2'.toLowerCase())>-1&&typeof b['prodReviews']!='undefined'&&parseFloat(b['prodReviews'])>=parseFloat(1))){try{setTimeout(function(){utag.link({'eventCategory':'Bazaarvoice Content Loaded','eventAction':'Bazaarvoice : RatingsAndReviews : ProductPageView','eventLabel':b['PathVpv'],'non_interaction_hit':1},null,[83])},400);}catch(err){console.log(err);}}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['rpid']!='undefined'){b['_ccustid']=b['rpid']}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventName']!='undefined'&&/Add (Billing|Contact|Delivery) Manual/.test(b['eventName']))){b['eventCategory']='UX';b['eventAction']='checkout';b['eventLabel']=b['eventName']}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['prodCategoryId']!='undefined'&&b['basicPageType'].toString().toLowerCase()=='checkout'.toLowerCase())){document.cookie="prodCategoryId="+b['prodCategoryId']+";path=/;domain="+utag.cfg.domain+";expires=";b['cp.prodCategoryId']=b['prodCategoryId'];}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['eventName']!='undefined'&&/Add to Apple Wallet|Add to Google Pay/.test(b['eventName']))){b['eventCategory']='Customer Account';b['eventAction']='B&Q Club';b['eventLabel']=b['eventName']}}catch(e){utag.DB(e);}},function(a,b){try{if(1){try{b['basicClientId']=function grabCookie(){try{var px_ua_cookie_components;px_ua_cookie_components=b['cp._ga'].split(".");return px_ua_cookie_components[2]+"."+px_ua_cookie_components[3];}catch(e){}}();}catch(e){};b['cookie_expire_value']='34190000'}}catch(e){utag.DB(e);}},function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[1054]=='undefined'){utag.runonce.ext[1054]=1;if(1){var sendMonetatePayload=function(eventLabel,eventAction){utag.link({eventCategory:'Monetate Interaction',eventAction:eventAction,eventLabel:eventLabel,});}
tealium.ext.waitForElements(function(elements){elements.forEach(function(element){element.addEventListener('click',function(){if(element.tagName==='BUTTON'){var prodSku=element.parentNode.parentNode.getAttribute('data-pid');sendMonetatePayload(prodSku,'Add to Basket');}else{var prodSku=element.parentNode.getAttribute('data-pid');sendMonetatePayload(prodSku,'View Product');}})})},'.mt-img, .mt-product-info, .mt-merch-item .tocart');}}}catch(e){utag.DB(e)}},function(a,b){try{utag.runonce=utag.runonce||{};utag.runonce.ext=utag.runonce.ext||{};if(typeof utag.runonce.ext[1055]=='undefined'){utag.runonce.ext[1055]=1;if(/^(Home|Product|Basket)$/.test(b['basicPageType'])){!function(){'use strict';function waitForElement(elem){if(typeof elem=='string'){return new Promise(function(resolve){var checkElement=function(){if(null!==document.querySelector(elem)){resolve(document.querySelector(elem))}else{window.requestAnimationFrame(checkElement)}}
checkElement()})}}
waitForElement('div.mt-slider-wrapper').then(function(elem){var recs=[].slice.call(elem.querySelectorAll('[data-slide]'))
recs.forEach((rec,index)=>{rec.querySelector('a.mt-product-link').addEventListener('click',function(){utag.link({'eventCategory':'Monetate Interaction','eventAction':rec.querySelector('div.mt-merch-item').dataset.pid,'eventLabel':(window.location.pathname=='/checkout/cart/')?'Cart':b['basicPageId'],'mtRecommendationClickPosition':parseInt(rec.dataset.slide)+1})})})});}();}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.irclickid']!='undefined'){document.cookie="irclickid="+b['qp.irclickid']+";path=/;domain="+utag.cfg.domain+";expires=";b['cp.irclickid']=b['qp.irclickid'];}}catch(e){utag.DB(e);}},function(a,b){try{if((typeof b['cp._gdprCookie']!='undefined'&&b['cp._gdprCookie'].toString().toLowerCase().indexOf(',2'.toLowerCase())>-1&&b['tealium_event'].toString().toLowerCase()=='view'.toLowerCase())||(typeof b['cp._gdprCookie']!='undefined'&&b['cp._gdprCookie'].toString().toLowerCase().indexOf('AcceptAll'.toLowerCase())>-1&&b['tealium_event'].toString().toLowerCase()=='view'.toLowerCase())||(typeof b['gdprswitch']!='undefined'&&b['gdprswitch'].toString().toLowerCase().indexOf('off'.toLowerCase())>-1&&b['tealium_event'].toString().toLowerCase()=='view'.toLowerCase())||(typeof b['cp.notice_gdpr_prefs']!='undefined'&&b['cp.notice_gdpr_prefs'].toString().toLowerCase().indexOf(',1'.toLowerCase())>-1&&b['tealium_event'].toString().toLowerCase()=='view'.toLowerCase())){var namogooScript=document.createElement('script');namogooScript.src="https://gs.nmgassets.com/BQVAWY428.js";document.head.appendChild(namogooScript);}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['qp.Customer_id']!='undefined'){b['Customer_id']=b['qp.Customer_id']}}catch(e){utag.DB(e);}},function(a,b){try{if((/Yes|true|Assumed|1/.test(b['basicLoggedIn'])&&typeof b['userId']!='undefined')||(b['tealium_event'].toString().toLowerCase().indexOf('user_register'.toLowerCase())>-1&&b['eventAction'].toString().toLowerCase()=='Creation'.toLowerCase()&&b['eventLabel'].toString().toLowerCase()=='Confirmation Page'.toLowerCase()&&typeof b['userId']!='undefined')){b['ES_userloggedOnly']=b['userId']}}catch(e){utag.DB(e);}},function(a,b){try{if(b['dom.pathname'].toString().toLowerCase().indexOf('/search?term='.toLowerCase())<0){function checkItemExists(key){return sessionStorage.getItem(key)!==null;}
if(referrer&&getQueryParam(referrer,'term')){const key='redirect_search_term_hit';if(checkItemExists(key)){console.log(`Item with key"${key}"exists in session storage.`);if(sessionStorage.getItem("redirect_search_term_hit_fired")!==null)
{sessionStorage.removeItem("redirect_search_term_hit_fired")}else{utag.data['searchTerm']=sessionStorage.getItem(key);b['searchTerm']=sessionStorage.getItem(key);sessionStorage.removeItem(key)}}else{}}else{}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['searchTerm']!='undefined'&&typeof b['searchTerm']!='undefined'&&b['searchTerm']!='')){if(b["searchTerm"]!='undefined'&&b["searchTerm"]!==''&&b["searchTerm"]!==null)
{b["basicPageType"]="Search Results";}}}catch(e){utag.DB(e)}},function(a,b){try{if(/^\/search\?term=/i.test(b['dom.pathname'])){if(typeof br_data==='object'&&br_data!==null){console.log("The object exists.");if(br_data.ptype=="search"&&br_data.search_term!==null){sessionStorage.setItem("redirect_search_term_hit_fired","1")}
}else{console.log("The object does not exist or is null.");}
window.addEventListener('beforeunload',function(event){sessionStorage.removeItem("redirect_search_term_hit_fired")
return undefined;});}}catch(e){utag.DB(e)}}];utag.handler.cfg_extend=[{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1250"},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1116"},{"end":0,"id":"1246","alr":0,"bwq":0,"blr":1},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1209"},{"bwq":0,"blr":1,"alr":0,"id":"1247","end":0},{"id":"996","blr":1,"bwq":0,"alr":0,"end":0},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1125"},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1263"},{"id":"1249","blr":1,"bwq":0,"alr":0,"end":0},{"bwq":0,"blr":1,"alr":0,"id":"135","end":0},{"end":0,"id":"136","alr":0,"bwq":0,"blr":1},{"end":0,"id":"1210","alr":0,"bwq":0,"blr":1},{"end":0,"id":"1042","alr":0,"bwq":0,"blr":1},{"id":"106","blr":1,"bwq":0,"alr":0,"end":0},{"bwq":0,"blr":1,"alr":0,"id":"1130","end":0},{"end":0,"id":"878","alr":0,"bwq":0,"blr":1},{"id":"9","blr":1,"bwq":0,"alr":0,"end":0},{"end":0,"id":"196","alr":0,"bwq":0,"blr":1},{"bwq":0,"blr":1,"alr":0,"id":"157","end":0},{"bwq":0,"blr":1,"alr":0,"id":"219","end":0},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"246"},{"id":"292","blr":1,"bwq":0,"alr":0,"end":0},{"bwq":0,"blr":1,"alr":0,"id":"290","end":0},{"end":0,"id":"892","alr":0,"bwq":0,"blr":1},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"322"},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1044"},{"bwq":0,"blr":1,"alr":0,"id":"1046","end":0},{"bwq":0,"blr":1,"alr":0,"id":"1089","end":0},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1117"},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1118"},{"end":0,"bwq":0,"alr":0,"blr":1,"id":"1119"},{"id":"1129","blr":1,"bwq":0,"alr":0,"end":0},{"end":0,"id":"1128","alr":0,"bwq":0,"blr":1},{"end":0,"id":"1186","alr":0,"bwq":0,"blr":1},{"bwq":0,"blr":1,"alr":0,"id":"1220","end":0},{"bwq":0,"blr":1,"alr":0,"id":"1248","end":0},{"id":"1254","blr":1,"bwq":0,"alr":0,"end":0},{"bwq":0,"blr":1,"alr":0,"id":"1276","end":0},{"end":0,"id":"1211","alr":1,"bwq":0,"blr":0},{"end":0,"id":"125","alr":1,"bwq":0,"blr":0},{"id":"178","blr":0,"bwq":0,"alr":1,"end":0},{"end":0,"id":"191","alr":1,"bwq":0,"blr":0},{"bwq":0,"blr":0,"alr":1,"id":"192","end":0},{"end":0,"bwq":0,"alr":1,"blr":0,"id":"237"},{"id":"244","blr":0,"bwq":0,"alr":1,"end":0},{"end":0,"id":"245","alr":1,"bwq":0,"blr":0},{"bwq":0,"blr":0,"alr":1,"id":"254","end":0},{"end":0,"bwq":0,"alr":1,"blr":0,"id":"263"},{"bwq":0,"blr":0,"alr":1,"id":"306","end":0},{"id":"317","blr":0,"bwq":0,"alr":1,"end":0},{"bwq":0,"blr":0,"alr":1,"id":"895","end":0},{"end":0,"bwq":0,"alr":1,"blr":0,"id":"995"},{"end":0,"bwq":0,"alr":1,"blr":0,"id":"1054"},{"end":0,"id":"1055","alr":1,"bwq":0,"blr":0},{"end":0,"id":"1079","alr":1,"bwq":0,"blr":0},{"end":0,"id":"1085","alr":1,"bwq":0,"blr":0},{"end":0,"id":"1132","alr":1,"bwq":0,"blr":0},{"end":0,"bwq":0,"alr":1,"blr":0,"id":"1131"},{"end":0,"id":"1261","alr":1,"bwq":0,"blr":0},{"end":0,"id":"1232","alr":1,"bwq":0,"blr":0},{"end":0,"id":"1264","alr":1,"bwq":0,"blr":0}];utag.loader.initcfg=function(){utag.loader.cfg={"85":{load:utag.cond[102],send:1,v:202401291131,wait:1,tid:6037},"73":{load:((utag.cond[105])),send:1,v:202401291131,wait:1,tid:16044},"34":{load:(((utag.cond[107]||utag.cond[375])&&(utag.cond[392]))),send:1,v:202403211552,wait:1,tid:7132},"36":{load:(((utag.cond[85])&&(utag.cond[375]||utag.cond[107]))),send:1,v:202403211552,wait:1,tid:7132},"77":{load:((utag.cond[96])),send:1,v:202401291131,wait:1,tid:2059},"86":{load:(utag.cond[108]&&utag.cond[66]),send:1,v:202310261028,wait:1,tid:20067},"96":{load:utag.cond[103],send:1,v:202312110857,wait:1,tid:1215},"134":{load:((utag.cond[324])),send:1,v:202308210841,wait:1,tid:3166},"161":{load:((utag.cond[272]||utag.cond[376])),send:1,v:202403251328,wait:1,tid:7133},"185":{load:1,send:1,v:202307031007,wait:1,tid:13116},"205":{load:((utag.cond[326])),send:1,v:202404021445,wait:1,tid:7142},"210":{load:((utag.cond[322])),send:1,v:202402201120,wait:1,tid:3131},"211":{load:((utag.cond[323])),send:1,v:202401291131,wait:1,tid:4049},"11":{load:((utag.cond[339])),send:1,v:202401291106,wait:1,tid:20064},"224":{load:((utag.cond[104])),send:1,v:202402071003,wait:1,tid:2063},"226":{load:((utag.cond[112])),send:1,v:202402071003,wait:1,tid:20200}};utag.loader.cfgsort=["85","73","34","36","77","86","96","134","161","185","205","210","211","11","224","226"];}
utag.loader.initcfg();}
if(typeof utag_cfg_ovrd!='undefined'){for(utag._i in utag.loader.GV(utag_cfg_ovrd))utag.cfg[utag._i]=utag_cfg_ovrd[utag._i]};utag.loader.PINIT=function(a,b,c){utag.DB("Pre-INIT");if(utag.cfg.noload){return;}
try{this.GET();if(utag.handler.RE('view',utag.data,"blr")){utag.handler.LR(utag.data);}}catch(e){utag.DB(e)};a=this.cfg;c=0;for(b in this.GV(a)){if(a[b].block==1||(a[b].load>0&&(typeof a[b].src!='undefined'&&a[b].src!=''))){a[b].block=1;c=1;this.bq[b]=1;}}
if(c==1){for(b in this.GV(a)){if(a[b].block){a[b].id=b;if(a[b].load==4)a[b].load=1;a[b].cb=function(){var d=this.uid;utag.loader.cfg[d].cbf=1;utag.loader.LOAD(d)};this.AS(a[b]);}}}
if(c==0)this.INIT();};utag.loader.INIT=function(a,b,c,d,e){utag.DB('utag.loader.INIT');if(this.ol==1)return-1;else this.ol=1;if(utag.cfg.noview!=true)utag.handler.RE('view',utag.data,"alr");utag.rpt.ts['i']=new Date();d=this.cfgsort;for(a=0;a<d.length;a++){e=d[a];b=this.cfg[e];b.id=e;if(b.block!=1){if(utag.loader.bk[b.id]||((utag.cfg.readywait||utag.cfg.noview)&&b.load==4)){this.f[b.id]=0;utag.loader.LOAD(b.id)}else if(b.wait==1&&utag.loader.rf==0){utag.DB('utag.loader.INIT: waiting '+b.id);this.wq.push(b)
this.f[b.id]=2;}else if(b.load>0){utag.DB('utag.loader.INIT: loading '+b.id);this.lq.push(b);this.AS(b);}}}
if(this.wq.length>0)utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.DB('READY:utag.loader.wq');utag.loader.rf=1;utag.loader.WQ();}});else if(this.lq.length>0)utag.loader.rf=1;else if(this.lq.length==0)utag.loader.END();return 1};utag.loader.EV('','ready',function(a){if(utag.loader.efr!=1){utag.loader.efr=1;try{try{if(1){document.body.addEventListener("click",function(e){var url=e.target.href;if(url){if(e.target.host!=document.location.host){try{utag.link({'eventName':'External Link Click','anchor_href':url})}catch(err){console.log(err);}}}})}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){$("a[href$='pdf']").click(function(){try{utag.link({'eventName':'PDF Link Click','anchor_href':$(this).attr('href')})}catch(e){console.log(e);}});}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{try{if(1){jQuery(window).on("load",function()
{jQuery(document.body).on('mousedown','#search-suggestions-root-id a',function(e)
{window.brSearchBlock=true;utag.link({"tealium_event":'autosuggest',"searchTerm":jQuery(this).text(),"originalSearch":jQuery('input[type="search"]').val(),"bloomreach_deferred":"true"})
setTimeout(function(){window.brSearchBlock=false;delete window.brSearchBlock;},500);});});}}catch(e){utag.DB(e)}}catch(e){utag.DB(e)};try{if(typeof utag.linkHandler=='undefined'){utag.linkHandler=function(a,b,c,d,e){if(!a)a=window.event;if(a.target)b=a.target;else if(a.srcElement)b=a.srcElement;if(b.nodeType==3)b=b.parentNode;if(typeof b=='undefined'||typeof b.tagName=='undefined')return;c=b.tagName.toLowerCase();if(c=='body')return;if(c!='a'){for(d=0;d<5;d++){if(typeof b!='undefined'&&b.parentNode)b=b.parentNode;c=(b!=null&&b.tagName)?b.tagName.toLowerCase():'';if(c=='a')break;else if(c=='body')return;}}
if(c!='a')return;var lt=b.text?b.text:b.innerText?b.innerText:'';if((lt==''||/^\s+$/.test(lt))&&typeof b.innerHTML!='undefined'){lt=b.innerHTML.toLowerCase();if(lt.indexOf('<img ')>-1){d=lt.indexOf('alt="');if(d>-1){e=lt.indexOf('"',d+5);lt=lt.substring(d+5,e);}else{d=lt.indexOf('src="');if(d>-1){e=lt.indexOf('"',d+5);lt=lt.substring(d+5,e);}}}}
var hr=b.href,hrnq=(b.href.split('?'))[0];var obj={link_obj:b,link_text:lt,link_url:hr,link_type:'exit link',event_name:'external_link_click'};c=('exe,zip,wav,mp3,mov,mpg,avi,wmv,doc,pdf,xls').split(',');for(d=0;d<c.length;d++){e=new RegExp(c[d]+'$');if(e.test(hrnq)){obj.link_type='download link';break;}};try{var link=b;(function(){if(!/diy.com/ig.test(obj.link_url)){window.utag.link({"eventName":"external_link_click","linkClickText":obj.link_text,"linkClickCategory":"Outbound links","linkClickUrl":obj.link_url});}else if(obj.link_type==="download link"){window.utag.link({"eventName":"external_link_click","linkClickText":obj.link_text,"linkClickCategory":"Downloads","linkClickUrl":obj.link_url});}}());}catch(e){};if(obj['link_url']=='DONOTTRACK')utag.link(obj);}
utag.loader.EV(document,'mousedown',utag.linkHandler);}}catch(e){utag.DB(e)};}})
if(utag.cfg.readywait||utag.cfg.waittimer){utag.loader.EV('','ready',function(a){if(utag.loader.rf==0){utag.loader.rf=1;utag.cfg.readywait=1;utag.DB('READY:utag.cfg.readywait');setTimeout(function(){utag.loader.PINIT()},utag.cfg.waittimer||1);}})}else{utag.loader.PINIT()}}