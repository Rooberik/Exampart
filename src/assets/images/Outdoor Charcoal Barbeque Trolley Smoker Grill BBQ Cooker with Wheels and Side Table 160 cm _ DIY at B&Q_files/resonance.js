//resxclsx.js v5.10 Copyright 2004-2019 Certona Corporation www.certona.com. All rights reserved.
//www.diy.com
var certonaResx=function(){"use strict";var e,n="certonaResx.showResponse",r="",t,i,s=false,c,o,f,a,l,u,d;function x(e){try{return parseInt(e,10)}catch(n){}}function p(e){try{var n;if(e!==undefined&&e!==null&&e!=="null"&&e!==""){n=true;return n}}catch(r){}return false}function m(){try{return resx.rrelem}catch(e){}return""}function h(e){try{var n=null,r,t;if(p(e)){n=[];if(p(document.getElementById(e))){n[0]=e}else{t=e.replace(/[,;]/g,".").split(".");for(r=0;r<t.length;r+=1){if(t[r]!==""&&p(document.getElementById(t[r]))){n[r]=t[r]}else{n[r]=""}}}}return n}catch(i){}return null}function g(){try{var e,n,r;if(resx.rrelem!==undefined){r=h(m());if(r!==undefined&&r!==null){for(e=0;e<r.length;e+=1){if(r[e]!==""){n=document.getElementById(r[e])}else{n=null}if(p(n)){n.style.visibility="visible"}}}}}catch(t){}}function y(e,n){try{if(!s){s=true;r=e+"|"+(n.number!==undefined?n.number:"undefined")+"|"+(n.name!==undefined?n.name:"undefined")+"|"+(n.description!==undefined?n.description:"undefined")}}catch(t){}finally{g()}}function R(e){try{var n,r,t;if(document.cookie.length>0){n=document.cookie;r=n.indexOf(e+"=");if(r!==-1){r+=e.length+1;t=n.indexOf(";",r);if(t===-1){t=n.length}return decodeURIComponent(n.slice(r,t))}}}catch(i){y("",i)}return null}function v(e,n,r,t){try{var i=new Date;if(r!==null){i.setTime(i.getTime()+r*3600*1e3)}document.cookie=e+"="+encodeURIComponent(n)+(r!==null?"; expires="+i.toGMTString():"")+"; path=/"+(p(t)?"; domain="+t:"")}catch(s){y("",s)}}function w(){try{var e,n,r,t,o;n=resx.rrec!==undefined&&(resx.rrec===true||resx.rrec==="true")&&(l==="1"||c)&&resx.rrelem!==undefined&&resx.rrelem!==null&&!s;if(n){if(!i){n=false;o=h(m());if(o!==undefined&&o!==null){for(e=0;e<o.length;e+=1){if(p(o[e])){n=true;break}}}}if(n){if(!p(resx.useitems)){n=false;if(resx.rrnum!==undefined){r=resx.rrnum;r+="";r=r.replace(/,/g,";");t=r.split(";");for(e=0;e<t.length;e+=1){if(!isNaN(t[e])&&x(t[e])>0){n=true;break}}}}}}return n}catch(f){}return false}function k(e){try{var n,r="";e+="";for(n=e.length-1;n>=0;n-=1){r+=e.charAt(n)}return r}catch(t){}return""}function N(){try{var e,n,r,t,i;if(navigator.userAgent.toLowerCase().indexOf("mac")===-1){i=Math.floor(Math.random()*1e15);i+=""}else{r=Math.floor(Math.random()*1e6);e=new Date;n=e.getTime();n+="";t=k(n);r+="";i=r+t.slice(0,11)}return i}catch(s){y("guid",s)}return""}function b(e){try{t=true;var n,r,s,c;if(!i){for(n=0;n<e.Resonance.Response.length;n+=1){r=false;s=e.Resonance.Response[n].scheme;if(e.Resonance.Response[n].display==="yes"){r=true;c=document.getElementById(s);if(p(c)){c.innerHTML=e.Resonance.Response[n].output}}if(typeof resonanceResponseLoaded==="function"){resonanceResponseLoaded(s,r)}}if(typeof resonanceResponseLoadedAll==="function"){resonanceResponseLoadedAll()}}}catch(o){}finally{g()}}function I(){try{if(!t&&!i){if(e<2e3){e=e+10;window.setTimeout(certonaResx.checkCallback,10)}else{i=true;g()}}}catch(n){g()}}function C(e){try{var r="",t="",i;if(typeof e==="boolean"&&e===true){if(p(resx.rrcall)){r=resx.rrcall}else{r=n}}else if(typeof e==="string"){r=e}if(r.length>0){if(r===n){t="&cb="}else{t="&ccb="}t+=r}i=(p(resx.useitems)?"&ui="+resx.useitems:"&no="+resx.rrnum)+(p(resx.exitemid)?"&ex="+resx.exitemid:"")+(p(resx.rrqs)?"&"+resx.rrqs:"")+t;return i}catch(s){}return""}function S(){try{var e,n,r=window.location.hostname;if(p(r)){if(!r.match(/(\d{1,3}\.){3}\d{1,3}/)){e=r.split(".");if(e.length>1){r="."+e[e.length-2]+"."+e[e.length-1];n=/\.co\.\w{2}$|\.com\.\w{2}$|\.\w{2}\.com$/;if(r.toLowerCase().match(n)&&e.length>2){r="."+e[e.length-3]+r}}}return r}}catch(t){y("gsd",t)}return null}function E(e){try{return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+encodeURI(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))}catch(n){}return null}function L(){try{var e,n="",r;for(e=0;e<51;e+=1){if(resx["cv"+e]!==undefined){r=resx["cv"+e];r+="";r=r.replace(/\+/g,"%2B");n+="&cv"+e+"="+encodeURIComponent(r)}}return n}catch(t){y("gcv",t)}return""}function T(m){try{var h={callback:false},k,b,I,C,L,T,U,B,M,$,q,A;if(m===undefined){m=h}else{for(C=0;C<h.length;C+=1){if(m[C]===undefined){m[C]=h[C]}}}s=false;r="";d="";u="";l="";f="";a="";c=false;o=false;t=false;i=false;e=0;k=S();U="RES_TRACKINGID";T="RES_SESSIONID";L="ResonanceSegment";d=E("resxtrack");if(p(d)){resx.sessionid="";resx.segment="";v(T,"",-1,k)}else if(p(resx.trackingid)){d=String(resx.trackingid)}else{d=R(U);if(!p(d)){d=N()}}u=p(resx.sessionid)?String(resx.sessionid):"";if(!p(u)){u=R(T);if(!p(u)){u=N()}}l=p(resx.segment)?String(resx.segment):"";if(!p(l)){A=x(d);if(!isNaN(A)&&A>0){A=String(A);A=A.slice(1,6);A=x(A);B=x(resx.top1);M=x(resx.top2);$=x(resx.top3);q=1e5;if(!(isNaN(B)&&isNaN(M)&&isNaN($))){if(isNaN(B)){B=0}if(isNaN(M)){M=B}if(isNaN($)){$=M}if(A<B){l="1"}else if(A<M){l="2"}else if(A<$){l="3"}else if(A<q){l="4"}}}}else{c=true}if(!p(l)){l=R(L)}if(!c&&isNaN(x(l))){l="1"}v(U,d,9490,k);if(!p(R(U))){v(U,d,null,k)}v(T,u,.5,k);if(!p(R(T))){v(T,u,null,k)}v(L,l,1440,k);if(!p(R(L))){v(L,l,null,k)}if(p(resx.pageid)){f=resx.pageid}else{f=N()}b=resx.links!==undefined?String(resx.links):"";if(p(b)){I=b.replace(/\,/g,";").replace(/\|/g,"%7C").split(";",50);for(C=0;C<I.length;C+=1){a+=I[C]+";"}}if(typeof m.callback==="string"&&m.callback!==n||m.callback===false||p(resx.rrcall)&&resx.rrcall!==n){i=true}o=w()&&p(d)&&p(f);if(!o){g()}}catch(D){y("pv",D)}}function U(e){try{var n,t,i,x,h,g,y,R="5.10x";if(l==="1"||l==="2"||l==="3"||c){if(o){window.setTimeout(certonaResx.checkCallback,50)}t=window.location.protocol.toLowerCase()==="https:"?"https://":"http://";h="www.res-x.com";if(p(resx.host)){h=resx.host}i="appid="+(resx.appid!==undefined?resx.appid:"")+"&tk="+(p(d)?d:"")+"&ss="+(p(u)?u:"")+"&sg="+(p(l)?l:"")+"&pg="+(p(f)?f:"")+"&vr="+R+"&bx="+o;y="";if(resx.rrelem!==undefined&&resx.rrelem!==null){g=m().replace(/[,;]/g,".").split(".");if(g!==null){for(n=0;n<g.length;n+=1){y+="&sc="+g[n]}}}i+=y+(resx.event!==undefined?"&ev="+resx.event:"")+(resx.itemid!==undefined?"&ei="+resx.itemid:"")+(resx.qty!==undefined?"&qty="+resx.qty:"")+(resx.price!==undefined?"&pr="+resx.price:"")+(resx.shipping!==undefined?"&sh="+resx.shipping:"")+(resx.total!==undefined?"&tt="+resx.total:"")+(resx.currencycode!==undefined?"&cc="+resx.currencycode:"")+(resx.customerid!==undefined?"&cu="+resx.customerid:"")+(resx.transactionid!==undefined?"&tr="+resx.transactionid:"");i+=(o?C(e):"")+L()+"&ur="+encodeURIComponent(window.location.href.slice(0,400))+"&plk="+(p(a)?a:"")+"&rf="+encodeURIComponent(document.referrer)+(s===true?"&er="+s+"&em="+encodeURIComponent(r):"");x=t+h+"/ws/r2/Resonance.aspx"+"?"+i;return x.slice(0,2013)}}catch(v){}return""}function B(e){try{if(e!==""){var n=document.createElement("script"),r=document.getElementsByTagName("script")[0];n.type="text/javascript";n.async=true;n.src=e;r.parentNode.insertBefore(n,r)}}catch(t){}}function M(e){var n={callback:false},r;if(e===undefined){e=n}else{for(r=0;r<n.length;r+=1){if(e[r]===undefined){e[r]=n[r]}}}return U(e.callback)}function $(){T({callback:true});var e=U(true);B(e)}return{checkCallback:function(){I()},showResponse:function(e){b(e)},getURL:function(e){T(e);return M(e)},run:function(){$()}}}();
(function(e){"use strict";var r={home:"home1_rr",product:"fbt1_rr;fbt2_rr;product1_rr",categorylanding:"category1_rr",search:"search1_rr",cart:"cart1_rr",addtocart_op:"interstitial1_rr",addtocart_opr:"interstitial1_rr"};window.callCertona=function(){try{window.resx={appid:"bandq05",rrec:false,rrnum:20,itemid:"",event:"",rrelem:""};var r=o(i("pagetype"));c({pageType:r,isRec:i("recommendations")});switch(r){case"home":break;case"product":t({event:"product",itemid:i("itemid")});break;case"category":break;case"cart":t({event:"viewcart",itemid:i("itemid")});resx.customerid=i("customerid");break;case"search":break;case"purchase":t({event:"purchase",itemid:i("itemid")});resx.customerid=i("customerid");resx.transactionid=i("transactionid");resx.qty=i("qty");resx.price=i("price");resx.total=i("total");break;case"orderhistory":resx.customerid=i("customerid");break;case"orderhistorydetail":resx.customerid=i("customerid");break;case"account":resx.customerid=i("customerid");break;case"addtocart_op":t({event:"addtocart_op",itemid:i("itemid")});break;case"addtocart_opr":t({event:"addtocart_opr",itemid:i("itemid")});break;case"cartremove_op":t({event:"cartremove_op",itemid:i("itemid")});break;default:break}e.run()}catch(a){}};function t(e){try{var r=RegExp(".*_op");var t=r.test(e.event);if(location.href.indexOf("rrec=true")>=0&&!t){resx.event=e.event+"_r"}else{resx.event=e.event}resx.itemid=e.itemid}catch(c){}}function c(e){try{if(!e.isRec===true||!e.isRec==="true"){return}resx.rrec=!!e.isRec;resx.rrcall=i("callback")||"certonaRecommendations";var t=o(i("devicetype"));var c=e.pageType;if(r[c]!==undefined&&r[c][t]!==undefined){resx.rrelem=r[c][t]}else if(r[c]!==undefined){resx.rrelem=r[c]}i("filter")&&a()}catch(n){}}function a(){try{var e=certona.filter;var r="";Object.keys(e).forEach(function(t,c){var a=c!==0?"&":"";r+=a+t+"="+encodeURIComponent(e[t])});resx.rrqs=r}catch(t){}}function i(e,r){try{var t=r!==undefined?r:"";if(typeof certona!=="undefined"&&Object.prototype.toString.call(certona)==="[object Object]"){return certona[e]||t}}catch(c){}}function o(e){try{return typeof e!==undefined&&Object.prototype.toString.call(e)==="[object String]"?e.toLowerCase():e}catch(r){}}})(certonaResx);