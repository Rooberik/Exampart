//tealium universal tag - utag.11 ut4.0.202404021445, Copyright 2024 Tealium.com Inc. All Rights Reserved.
if(typeof JSON!=='object'){JSON={};}
(function(){'use strict';var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;function f(n){return n<10?'0'+n:n;}
function this_value(){return this.valueOf();}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}
var gap,indent,meta,rep;function quote(string){rx_escapable.lastIndex=0;return rx_escapable.test(string)?'"'+string.replace(rx_escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}}());try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={"id":id};}catch(e){u=utag.sender[id];}
utag.globals=window.utag.globals||{};u.toBoolean=function(val){val=String(val)||"";return val===true||val.toLowerCase()==="true"||val.toLowerCase()==="on";};u.ev={"all":1};u.do_enrichment=function(){};u.deepCopy=function(input){var key,copy;if(typeof input==="object"&&input!==null){if(utag.ut.typeOf(input)==="array"){copy=[];}else{copy={};}
for(key in input){if(typeof input[key]==="object"){copy[key]=u.deepCopy(input[key]);}else{copy[key]=input[key];}}}else{copy=input;}
return copy;}
u.get_account_profile=function(s){var p;if(u.visitor_service_override||u.tag_config_server.indexOf("tealiumiq.com")===-1){p=[u.tag_config_server.split("//")[1],u.account,u.profile]}else if(u.tag_config_server===u.event_url){p=[s.substring(s.indexOf(u.server_domain)).split("/")[1],u.account,u.profile]}else{p=s.substring(s.indexOf(u.server_domain)).split("/");}
return p;};function infixParameters(url,params){var updated_url,url_parts=url.split("?");if(params){if(url_parts[1]===undefined){updated_url=url+"?"+params;}else if(url_parts[1]===""){updated_url=url+params;}else{updated_url=url_parts[0]+"?"+params+"&"+url_parts[1];}}else{updated_url=url;}
return updated_url;}
u.is_in_sample_group=function(b){var group="100";if(u.tag_config_sampling===""||u.tag_config_sampling==="100"){return true;}
if(b["cp.utag_main_dc_group"]){group=b["cp.utag_main_dc_group"];}else{group=Math.floor(Math.random()*100)+1;utag.loader.SC("utag_main",{"dc_group":group});}
if(parseInt(group)<=parseInt(u.tag_config_sampling)){return true;}else{return false;}};u.get_performance_timing=function(b){var t,timing;var data={};function subtract(val1,val2){var difference=0;if(val1>val2){difference=val1-val2;}
return difference;}
try{timing=localStorage.getItem("tealium_timing");t=window.performance.timing;if(timing!==null&&timing!=="{}"&&typeof b!=="undefined"&&u.performance_timing_count===0){utag.ut.merge(b,utag.ut.flatten({timing:JSON.parse(timing)}),1);}}catch(e){utag.DB(e);return;}
u.performance_timing_count++;for(var k in t){if((k.indexOf("dom")===0||k.indexOf("load")===0)&&t[k]===0&&u.performance_timing_count<20){setTimeout(u.get_performance_timing,1000);}}
data["domain"]=location.hostname+"";data["pathname"]=location.pathname+"";data["query_string"]=(""+location.search).substring(1);data["timestamp"]=(new Date()).getTime();data["dns"]=subtract(t.domainLookupEnd,t.domainLookupStart);data["connect"]=subtract(t.connectEnd,t.connectStart);data["response"]=subtract(t.responseEnd,t.responseStart);data["dom_loading_to_interactive"]=subtract(t.domInteractive,t.domLoading);data["dom_interactive_to_complete"]=subtract(t.domComplete,t.domInteractive);data["load"]=subtract(t.loadEventEnd,t.loadEventStart);data["time_to_first_byte"]=subtract(t.responseStart,t.connectEnd);data["front_end"]=subtract(t.loadEventStart,t.responseEnd);data["fetch_to_response"]=subtract(t.responseStart,t.fetchStart);data["fetch_to_complete"]=subtract(t.domComplete,t.fetchStart);data["fetch_to_interactive"]=subtract(t.domInteractive,t.fetchStart);try{localStorage.setItem("tealium_timing",JSON.stringify(data));}catch(e){utag.DB(e);}};u.validateProtocol=function(address,force_ssl){if(/^https?:\/\//i.test(address)){if(force_ssl){if(/^http:\/\//i.test(address)){address=address.toLowerCase().replace("http","https");}}}else{if(/^\/\//.test(address)){if(force_ssl){address="https:"+address;}else{address=location.protocol+address;}
}else{if(force_ssl){address="https://"+address;}else{address=location.protocol+"//"+address;}}}
return address;}
u.server_domain="tealiumiq.com";u.server_prefix="";u.tag_config_server="";u.tag_config_sampling="100"||"100";if(utag.cfg.utagdb){u.tag_config_sampling="100";}
u.tag_config_region="eu-west-1"||"default";u.region="";u.performance_timing_count=0;u.event_url='//collect.tealiumiq.com/event';u.account=utag.cfg.utid.split("/")[0];u.data_source="cia5ed";u.profile=""||utag.cfg.utid.split("/")[1];u.visitor_service_override='';u.request_increment=1;u.iab_v20_compliance=true;u.tc_string="";u.use_sendBeacon='true';u.use_event_endpoint='false';u.tealium_cookie_domain='';u.tealium_cookie_expiry='';u.data_enrichment="none";u.send_udo_variables="true"||true;u.send_dom_values="true"||true;u.send_cookie_values="true"||true;u.send_meta_values="true"||true;u.send_query_param_values="true"||true;u.send_localstorage_variables="false"||false;u.send_sessionstorage_variables="false"||false;u.profile_specific_vid=0;u.enrichment_polling=1;u.enrichment_polling_delay=500;u.enrichment_enabled={};u.suppress_v_id_generation=false;u.map={};u.extend=[function(a,b){try{if(1){const CollectTagid=11;const PinterestTagid=73;let maxRetries=8;let retryInterval=500;let retries=0;const eventIdPrefix="pinterest_event_id_";let lookup=b['tealium_random'];function check_pinterest_event_id(maxRetries,interval){function check(){let eventIdFound=false;for(const evtId of Object.keys(window.utag.globals[lookup])){if(evtId.indexOf(eventIdPrefix)>-1){eventIdFound=true;}}
if(!eventIdFound&&retries<maxRetries){retries++;window.setTimeout(check,interval);return false;}}
check();}
if(utag.send[PinterestTagid]){check_pinterest_event_id(maxRetries,retryInterval)}}}catch(e){utag.DB(e)}},function(a,b){try{if((typeof b['prodCategory']!='undefined'&&typeof b['prodCategory']!='undefined'&&b['prodCategory']!=''&&typeof b['prodCategory1']!='undefined'&&typeof b['prodCategory1']!='undefined'&&b['prodCategory1']!='')){b["impactCategory"]=[];if(Array.isArray(b["prodCategory1"])&&Array.isArray(b["prodCategory"])&&b["prodCategory1"].length===b["prodCategory"].length){for(var i=0;i<b["prodCategory1"].length;i++){b["impactCategory"][i]=b["prodCategory1"][i]+" - "+b["prodCategory"][i]}}}}catch(e){utag.DB(e)}},function(a,b){try{if(1){if(typeof b!="undefined"){var isDefined=function isDefined(value){return toString.call(value).toLowerCase()!=="[object undefined]";};if(isDefined(b.customer_email)){b.customer_email_fb=b.customer_email_hash=b.customer_email.toLowerCase();}
if(isDefined(b.userCity)){b.userCity_fb=b.userCity.toLowerCase();}
if(isDefined(b.userCountry)){b.userCountry_fb=b.userCountry.toLowerCase();}
if(isDefined(b.userState)){b.userState_fb=b.userState.toLowerCase();}}}}catch(e){utag.DB(e)}},function(a,b){utag.ut.sha256=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);!function(r){var t=utag.ut.sha256,e=t.lib,a=e.WordArray,n=e.Hasher,s=t.algo,o=[],i=[];!function(){function t(t){for(var e=r.sqrt(t),a=2;a<=e;a++)if(!(t%a))return!1;return!0}function e(r){return 4294967296*(r-(0|r))|0}for(var a=2,n=0;n<64;)t(a)&&(n<8&&(o[n]=e(r.pow(a,.5))),i[n]=e(r.pow(a,1/3)),n++),a++}();var h=[],c=s.SHA256=n.extend({_doReset:function(){this._hash=new a.init(o.slice(0))},_doProcessBlock:function(r,t){for(var e=this._hash.words,a=e[0],n=e[1],s=e[2],o=e[3],c=e[4],l=e[5],u=e[6],f=e[7],_=0;_<64;_++){if(_<16)h[_]=0|r[t+_];else{var v=h[_-15],d=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,H=h[_-2],g=(H<<15|H>>>17)^(H<<13|H>>>19)^H>>>10;h[_]=d+h[_-7]+g+h[_-16]}var p=a&n^a&s^n&s,w=(a<<30|a>>>2)^(a<<19|a>>>13)^(a<<10|a>>>22),y=f+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&l^~c&u)+i[_]+h[_];f=u,u=l,l=c,c=o+y|0,o=s,s=n,n=a,a=y+(w+p)|0}e[0]=e[0]+a|0,e[1]=e[1]+n|0,e[2]=e[2]+s|0,e[3]=e[3]+o|0,e[4]=e[4]+c|0,e[5]=e[5]+l|0,e[6]=e[6]+u|0,e[7]=e[7]+f|0},_doFinalize:function(){var t=this._data,e=t.words,a=8*this._nDataBytes,n=8*t.sigBytes;return e[n>>>5]|=128<<24-n%32,e[14+(n+64>>>9<<4)]=r.floor(a/4294967296),e[15+(n+64>>>9<<4)]=a,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var r=n.clone.call(this);return r._hash=this._hash.clone(),r}});t.SHA256=n._createHelper(c),t.HmacSHA256=n._createHmacHelper(c)}(Math);try{if(typeof b['customer_email_fb']!='undefined'&&b['customer_email_fb']!=''){b['customer_email_fb']=utag.ut.sha256.SHA256(b['customer_email_fb']).toString();}}catch(e){};try{if(typeof b['userCity_fb']!='undefined'&&b['userCity_fb']!=''){b['userCity_fb']=utag.ut.sha256.SHA256(b['userCity_fb']).toString();}}catch(e){};try{if(typeof b['userState_fb']!='undefined'&&b['userState_fb']!=''){b['userState_fb']=utag.ut.sha256.SHA256(b['userState_fb']).toString();}}catch(e){};try{if(typeof b['userCountry_fb']!='undefined'&&b['userCountry_fb']!=''){b['userCountry_fb']=utag.ut.sha256.SHA256(b['userCountry_fb']).toString();}}catch(e){}},function(a,b){utag.ut.sha1=function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var e=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var r;return t.prototype=n,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||f).stringify(this)},concat:function(t){var n=this.words,r=t.words,e=this.sigBytes,i=t.sigBytes;if(this.clamp(),e%4)for(var o=0;o<i;o++){var s=r[o>>>2]>>>24-o%4*8&255;n[e+o>>>2]|=s<<24-(e+o)%4*8}else for(o=0;o<i;o+=4)n[e+o>>>2]=r[o>>>2];return this.sigBytes+=i,this},clamp:function(){var n=this.words,r=this.sigBytes;n[r>>>2]&=4294967295<<32-r%4*8,n.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],r=0;r<t;r+=4)n.push(e());return new c.init(n,t)}}),u=o.enc={},f=u.Hex={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e+=2)r[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new c.init(r,n/2)}},h=u.Latin1={stringify:function(t){for(var n=t.words,r=t.sigBytes,e=[],i=0;i<r;i++){var o=n[i>>>2]>>>24-i%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,r=[],e=0;e<n;e++)r[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new c.init(r,n)}},d=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},l=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=d.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var r,e=this._data,i=e.words,o=e.sigBytes,s=this.blockSize,a=o/(4*s),u=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,f=t.min(4*u,o);if(u){for(var h=0;h<u;h+=s)this._doProcessBlock(i,h);r=i.splice(0,u),e.sigBytes-=f}return new c.init(r,f)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=l.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,r){return new t.init(r).finalize(n)}},_createHmacHelper:function(t){return function(n,r){return new p.HMAC.init(t,r).finalize(n)}}}),o.algo={});return o}(Math);!function(){var t=utag.ut.sha1,e=t.lib,s=e.WordArray,a=e.Hasher,r=t.algo,h=[],i=r.SHA1=a.extend({_doReset:function(){this._hash=new s.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var s=this._hash.words,a=s[0],r=s[1],i=s[2],n=s[3],o=s[4],c=0;c<80;c++){if(c<16)h[c]=0|t[e+c];else{var l=h[c-3]^h[c-8]^h[c-14]^h[c-16];h[c]=l<<1|l>>>31}var _=(a<<5|a>>>27)+o+h[c];_+=c<20?1518500249+(r&i|~r&n):c<40?1859775393+(r^i^n):c<60?(r&i|r&n|i&n)-1894007588:(r^i^n)-899497514,o=n,n=i,i=r<<30|r>>>2,r=a,a=_}s[0]=s[0]+a|0,s[1]=s[1]+r|0,s[2]=s[2]+i|0,s[3]=s[3]+n|0,s[4]=s[4]+o|0},_doFinalize:function(){var t=this._data,e=t.words,s=8*this._nDataBytes,a=8*t.sigBytes;return e[a>>>5]|=128<<24-a%32,e[14+(a+64>>>9<<4)]=Math.floor(s/4294967296),e[15+(a+64>>>9<<4)]=s,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=a.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA1=a._createHelper(i),t.HmacSHA1=a._createHmacHelper(i)}();try{if(typeof b['customer_email_hash']!='undefined'&&b['customer_email_hash']!=''){b['customer_email_hash']=utag.ut.sha1.SHA1(b['customer_email_hash']).toString();}}catch(e){}},function(a,b){try{if(1){b['facebook_content_type']='product'}}catch(e){utag.DB(e);}}];u.send=function(a,b){var c,d,i;if(u.ev[a]||typeof u.ev["all"]!=="undefined"){if(a==="remote_api"){utag.DB("Remote API event suppressed.");return;}
if(a==='update_consent_cookie'){utag.DB('Update Consent Cookie event supressed.');return;}
for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:11:EXTENSIONS");utag.DB(b);c=[];Object.keys(utag.loader.GV(u.map)).forEach(function(mapping_key){if(b[mapping_key]!==undefined&&b[mapping_key]!==''){var destinations=u.map[mapping_key].split(',');destinations.forEach(function(parameter){u[parameter]=b[mapping_key];});}});utag.DB("send:11:MAPPINGS");utag.DB(u);u.use_sendBeacon=u.toBoolean(u.use_sendBeacon);u.use_event_endpoint=u.toBoolean(u.use_event_endpoint);u.send_udo_variables=u.toBoolean(u.send_udo_variables);u.send_cookie_values=u.toBoolean(u.send_cookie_values);u.send_dom_values=u.toBoolean(u.send_dom_values);u.send_meta_values=u.toBoolean(u.send_meta_values);u.send_query_param_values=u.toBoolean(u.send_query_param_values);u.send_localstorage_variables=u.toBoolean(u.send_localstorage_variables);u.send_sessionstorage_variables=u.toBoolean(u.send_sessionstorage_variables);if(u.tag_config_server.indexOf("-collect."+u.server_domain)>1){u.server_prefix=u.tag_config_server.split("collect."+u.server_domain)[0];if(u.tag_config_server.indexOf("/i.gif")<0){u.tag_config_server="https://"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server===""){if(u.use_event_endpoint){u.tag_config_server=u.event_url;}else if(u.tag_config_region==="default"){u.tag_config_server="https://"+[u.server_prefix+"collect."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}else{u.tag_config_server="https://"+[u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain,u.account,u.profile,"2","i.gif"].join("/");}}
if(u.tag_config_server.indexOf("-collect-")>-1){u.server_prefix=u.tag_config_server.split("collect-")[0];}
if(u.tag_config_region!=="default"&&u.tag_config_server.indexOf(u.server_prefix+"collect."+u.server_domain)>0){u.tag_config_server=u.tag_config_server.replace(u.server_prefix+"collect."+u.server_domain,u.server_prefix+"collect-"+u.tag_config_region+"."+u.server_domain);u.region=u.tag_config_region;}
var q=u.tag_config_server.indexOf("?");if(q>0&&(q+1)==u.tag_config_server.length){u.tag_config_server=u.tag_config_server.replace("?","");}
u.server_list=u.tag_config_server.split("|");if(u.tealium_cookie_domain){b.tealium_cookie_domain=u.tealium_cookie_domain;}
if(u.tealium_cookie_expiry){b.tealium_cookie_expiry=parseInt(u.tealium_cookie_expiry);}
if(u.iab_v20_compliance===true||u.iab_v20_compliance==="true"){if(typeof __tcfapi==="function"){__tcfapi("getTCData",2,function(tcData,success){if(success){u.tc_string="gdpr=";if(tcData.gdprApplies===true){u.tc_string+="1";}else if(tcData.gdprApplies===false){u.tc_string+="0";}else{u.tc_string+=String(tcData.gdprApplies);}
u.tc_string+="&gdpr_consent="+tcData.tcString;execute_send();}});}else{var frame=window;var cmpFrame;var cmpCallbacks={};while(frame){try{if(frame.frames["__tcfapiLocator"]){cmpFrame=frame;break;}}catch(error){utag.DB(error);}
if(frame===window.top){break;}
frame=frame.parent;}
if(!cmpFrame){execute_send();}else{window.__tcfapi=function(cmd,version,callback,arg){var callId=String(Math.random());var msg={__tcfapiCall:{command:cmd,parameter:arg,version:version,callId:callId}};cmpCallbacks[callId]=callback;cmpFrame.postMessage(msg,"*");};window.tealiumiabPostMessageHandler=function(event){var json={};try{json=typeof event.data==="string"?JSON.parse(event.data):event.data;}catch(error){utag.DB(error);}
var payload=json.__tcfapiReturn;if(payload){if(typeof cmpCallbacks[payload.callId]==="function"){cmpCallbacks[payload.callId](payload.returnValue,payload.success);cmpCallbacks[payload.callId]=null;}}};window.addEventListener("message",tealiumiabPostMessageHandler,false);__tcfapi("getTCData",2,function(tcData,success){if(success){u.tc_string="gdpr=";if(tcData.gdprApplies===true){u.tc_string+="1";}else if(tcData.gdprApplies===false){u.tc_string+="0";}else{u.tc_string+=String(tcData.gdprApplies);}
u.tc_string+="&gdpr_consent="+tcData.tcString;execute_send();}});}}}else{execute_send();}
function execute_send(){if(u.data_source){b.tealium_datasource=u.data_source;}
u.make_enrichment_request=false;if(!u.is_in_sample_group(b)){return false;}
u.get_performance_timing(b);for(i=0;i<u.server_list.length;i++){if(u.server_list[i].toLowerCase().indexOf("http")===-1){u.server_list[i]=u.validateProtocol(u.server_list[i],true);}
if(u.enrichment_enabled[i]!==false){u.enrichment_enabled[u.server_list[i]]=true;}}
if(u.server_list.length>1){u.profile_specific_vid=1;}
u.data=utag.datacloud||{};u.data["loader.cfg"]={};for(d in utag.loader.GV(utag.loader.cfg)){if(utag.loader.cfg[d].load&&utag.loader.cfg[d].send){utag.loader.cfg[d].executed=1;}else{utag.loader.cfg[d].executed=0;}
u.data["loader.cfg"][d]=utag.loader.GV(utag.loader.cfg[d]);}
u.data.data=b;for(d in u.data.data){if((d+'').indexOf("qp.")===0){u.data.data[d]=encodeURIComponent(u.data.data[d]);}else if((d+'').indexOf("va.")===0){delete u.data.data[d];}}
if(!u.suppress_v_id_generation){var consentCookies=utag.gdpr&&typeof utag.gdpr.getCookieValues==='function'&&utag.gdpr.getCookieValues();var consentCookieId=consentCookies&&consentCookies.id;u.visitor_id=u.visitor_id||b.tealium_visitor_id||b["cp.utag_main_v_id"]||consentCookieId||utag.ut.vi((new Date()).getTime());utag.loader.SC("utag_main",{v_id:u.visitor_id});b["cp.utag_main_v_id"]=u.visitor_id;b["ut.visitor_id"]=u.visitor_id;b["tealium_visitor_id"]=u.visitor_id;}
if(!b["cp.utag_main_dc_event"]){b["cp.utag_main_dc_visit"]=(1+(b["cp.utag_main_dc_visit"]?parseInt(b["cp.utag_main_dc_visit"]):0))+"";}
b["cp.utag_main_dc_event"]=(1+(b["cp.utag_main_dc_event"]?parseInt(b["cp.utag_main_dc_event"]):0))+"";utag.loader.SC("utag_main",{"dc_visit":b["cp.utag_main_dc_visit"],"dc_event":b["cp.utag_main_dc_event"]+";exp-session"});utag.data["cp.utag_main_dc_visit"]=b["cp.utag_main_dc_visit"];utag.data["cp.utag_main_dc_event"]=b["cp.utag_main_dc_event"];var dt=new Date();u.data.browser={};try{u.data.browser["height"]=window.innerHeight||document.body.clientHeight;u.data.browser["width"]=window.innerWidth||document.body.clientWidth;u.data.browser["screen_height"]=screen.height;u.data.browser["screen_width"]=screen.width;u.data.browser["timezone_offset"]=dt.getTimezoneOffset();}catch(e){utag.DB(e);}
u.data["event"]=a+'';u.data["post_time"]=dt.getTime();if(u.data_enrichment==="frequent"||u.data_enrichment==="infrequent"){u.visit_num=b["cp.utag_main_dc_visit"];if(parseInt(u.visit_num)>1&&b["cp.utag_main_dc_event"]==="1"){u.enrichment_polling=2;}
try{u.va_update=parseInt(localStorage.getItem("tealium_va_update")||0);}catch(e){utag.DB(e);}
u.visitor_id=u.visitor_id||b.tealium_visitor_id||b["cp.utag_main_v_id"];if(u.data_enrichment==="frequent"||(u.data_enrichment==="infrequent"&&parseInt(u.visit_num)>1&&parseInt(b["cp.utag_main_dc_event"])<=5&&u.visit_num!==u.va_update)){u.make_enrichment_request=true;}
u.visitor_service_request=function(t,server){var s,p=u.get_account_profile(server);if(u.visitor_service_override){s=u.validateProtocol(u.visitor_service_override,true);}else{s=u.validateProtocol(u.server_prefix,true)+"visitor-service"+(u.region?"-"+u.region:"").replace(/[^-A-Za-z0-9+_.]/g,"")+"."+u.server_domain;}
(function(p){var prefix="tealium_va";var key="_"+p[1]+"_"+p[2];utag.ut["writeva"+p[2]]=function(o){utag.DB("Visitor Attributes: "+prefix+key);utag.DB(o);var str=JSON.stringify(o);if(str!=="{}"&&str!==""){try{localStorage.setItem("tealium_va_update",utag.data["cp.utag_main_dc_visit"]);localStorage.setItem(prefix,str);localStorage.setItem(prefix+key,str);}catch(e){utag.DB(e);}
if(typeof tealium_enrichment==="function"){tealium_enrichment(o,prefix+key);}}};}(p.slice(0)));var vid=u.visitor_id;if(u.profile_specific_vid===1){vid+=p[2];}
var srcUrl=s+'/'+p[1]+'/'+p[2]+'/'+vid.replace(/[\?\&]callback=.*/g,'')+'?callback=utag.ut%5B%22writeva'+p[2]+'%22%5D&rnd='+t;if(b.tealium_cookie_domain){srcUrl=srcUrl+'&tealium_cookie_domain='+b.tealium_cookie_domain
if(b.tealium_cookie_expiry){srcUrl=srcUrl+'&tealium_cookie_expiry='+b.tealium_cookie_expiry}}
utag.ut.loader({id:'tealium_visitor_service_11'+p[2]+'_'+u.request_increment++,src:srcUrl});};u.do_enrichment=function(server,enrichment_polling,enrichment_polling_delay){if(typeof utag.ut.loader!="undefined"){for(i=0;i<enrichment_polling;i++){setTimeout(function(){u.visitor_service_request((new Date).getTime(),server);},i*enrichment_polling_delay+1);}}};}
var json_string,regExpReplace=new RegExp(u.visitor_id,"g");if(b.tealium_random&&typeof utag.globals[b.tealium_random]==="object"){for(var downstream_param in utag.globals[b.tealium_random]){u.data.data[downstream_param]=u.deepCopy(utag.globals[b.tealium_random][downstream_param]);}}
function getSendData(useEventData,server){var dataStringify=u.data;var filterObject=u.data.data
if(useEventData){dataStringify=u.data.data;filterObject=u.data.data;u.data.data.tealium_profile=u.profile;}
Object.keys(filterObject).forEach(dataKey=>{if(['cp.trace_id','tealium_account','tealium_profile'].indexOf(dataKey)!==-1){return;}
if(dataKey.indexOf('cp.')===0){!u.send_cookie_values&&delete filterObject[dataKey];return;}
if(dataKey.indexOf('meta.')===0){!u.send_meta_values&&delete filterObject[dataKey];return;}
if(dataKey.indexOf('qp.')===0){!u.send_query_param_values&&delete filterObject[dataKey];return;}
if(dataKey.indexOf('ls.')===0){!u.send_localstorage_variables&&delete filterObject[dataKey];return;}
if(dataKey.indexOf('ss.')===0){!u.send_sessionstorage_variables&&delete filterObject[dataKey];return;}
if(dataKey.indexOf('dom.')===0){!u.send_dom_values&&delete filterObject[dataKey];return;}
if(dataKey.indexOf('dom.')!==0&&dataKey.indexOf('ss.')!==0&&dataKey.indexOf('ls.')!==0&&dataKey.indexOf('qp.')!==0&&dataKey.indexOf('meta.')!==0&&dataKey.indexOf('cp.')!==0){!u.send_udo_variables&&delete filterObject[dataKey];return;}});json_string=JSON.stringify(dataStringify);if(u.profile_specific_vid===1&&u.visitor_id){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
if(useEventData){return json_string;}
var formData=new FormData();formData.append("data",json_string);return formData;}
function postData(server_index,enrichment_polling,enrichment_polling_delay,useEventData){if(server_index+1>u.server_list.length){return;}
var xhr=new XMLHttpRequest();var server=u.validateProtocol(u.server_list[server_index],true);var data=getSendData(useEventData,server);u.region=utag.loader.RC("utag_main")["dc_region"]||u.region||"";if(typeof navigator.sendBeacon==='function'&&u.region!==""&&u.use_sendBeacon){u.server_list.forEach(function(serverItem){var beaconSent=navigator.sendBeacon(infixParameters(serverItem,u.tc_string),data);if(!beaconSent){xhr.open("post",infixParameters(serverItem,u.tc_string),true);xhr.withCredentials=true;xhr.send(data);}
if(u.make_enrichment_request&&u.enrichment_enabled[serverItem]){u.do_enrichment(serverItem,enrichment_polling,enrichment_polling_delay);}});utag.DB("Data sent using sendBeacon");return;}
xhr.addEventListener("readystatechange",function(){if(xhr.readyState===3){try{u.region=xhr.getResponseHeader("X-Region")||u.region||"";}catch(res_error){utag.DB(res_error);u.region=u.region||"";}
if(u.region)utag.loader.SC("utag_main",{"dc_region":u.region+";exp-session"});utag.DB("dc_region:"+u.region);}else if(xhr.readyState===4){postData(server_index+1,enrichment_polling,enrichment_polling_delay,useEventData);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}}});if(u.server_list[server_index].toLowerCase().indexOf("http")!==0){u.server_list[server_index]=u.validateProtocol(u.server_list[server_index],true);}
var serverUrl=infixParameters(u.server_list[server_index],u.tc_string);xhr.open("post",serverUrl,true);xhr.withCredentials=true;xhr.send(data);}
if(u.use_event_endpoint&&(u.tag_config_server===u.event_url||u.tag_config_region!=="default")&&window.FormData){postData(0,u.enrichment_polling,u.enrichment_polling_delay,true);}else if(window.FormData){postData(0,u.enrichment_polling,u.enrichment_polling_delay,false);}else{for(i=0;i<u.server_list.length;i++){(function(i,enrichment_polling,enrichment_polling_delay){var server=u.server_list[i];setTimeout(function(){json_string=JSON.stringify(u.data);if(u.profile_specific_vid==1&&u.visitor_id){json_string=json_string.replace(regExpReplace,u.visitor_id+u.get_account_profile(server)[2]);}
var img=new Image();img.src=server+"?"+(u.tc_string?u.tc_string+"&":"")+"data="+encodeURIComponent(json_string);if(u.make_enrichment_request&&u.enrichment_enabled[server]){u.do_enrichment(server,enrichment_polling,enrichment_polling_delay);}},i*700);}(i,u.enrichment_polling,u.enrichment_polling_delay));}}}}};try{utag.o[loader].loader.LOAD(id);}catch(e){utag.loader.LOAD(id);}})("11","kingfisher.b-and-q-wapp");}catch(e){utag.DB(e);}
