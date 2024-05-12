//tealium universal tag - utag.77 ut4.0.202404021445, Copyright 2024 Tealium.com Inc. All Rights Reserved.
window["br_data"]=window["br_data"]||{};try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1,"link":1};u.initialized=false;u.scriptrequested=false;u.queue=[];u.map_func=function(arr,obj,item){var i=arr.shift();obj[i]=obj[i]||{};if(arr.length>0){u.map_func(arr,obj[i],item);}else{obj[i]=item;}};u.clearEmptyKeys=function(object){for(var key in object){if(object[key]===""||object[key]===undefined){delete object[key];}}
return object;};u.generatePageDataObject=function(obj){if(u.data.clear_br_data==="yes"){obj={};}
obj.acct_id=u.data.account_id;obj.ptype=u.data.ptype||"other";obj.title=u.data.title;obj.domain_key=u.data.domain_key;obj.user_id=u.data.user_id;obj.view_id=u.data.view_id;obj.tms=(u.data.track_tms==="yes")?u.data.tms:"";obj.currency=u.data.currency;obj.cat_id=u.data.category_id;obj.cat=u.data.category_name;obj.search_term=u.data.search_term;obj.catalogs=u.data.catalogs;obj.item_id=u.data.item_id;obj.item_name=u.data.item_name;obj.wrid=u.data.wrid;obj.wq=u.data.wq;obj.wid=u.data.wid;obj.wty=u.data.wty;obj.sku=u.data.sku;obj.customer_tier=u.data.customer_tier;obj.customer_country=u.data.customer_country;obj.customer_geo=u.data.customer_geo;obj.customer_profile=u.data.customer_profile;if(u.data.order_id){var basket_items=[];for(var i=0;i<u.data.product_id.length;i++){basket_items.push({"prod_id":u.data.product_id[i],"sku":u.data.product_sku[i],"name":u.data.product_name[i],"quantity":u.data.product_quantity[i],"price":u.data.product_unit_price[i]});}
obj.basket={"items":basket_items};obj.is_conversion=1;obj.order_id=u.data.order_id;obj.basket_value=u.data.order_total;}else{obj.prod_id=(u.data.product_id.length>0)?u.data.product_id:"";obj.prod_name=(u.data.product_name.length>0)?u.data.product_name:"";obj.sku=(u.data.product_sku.length>0)?u.data.product_sku:u.data.sku;obj.price=(u.data.product_unit_price.length>0)?u.data.product_unit_price:"";obj.quantity=(u.data.product_quantity.length>0)?u.data.product_quantity:"";obj.is_conversion=u.data.is_conversion||"";}
if(typeof utag.ut.merge==="function"){utag.ut.merge(obj,u.data.custom_br_data,1);}else{utag.DB(u.id+": Custom variables not merged into br_data. Requires version 4.26 or later of the utag.js file.");}
return u.clearEmptyKeys(obj);};u.loader_cb=function(){utag.DB("send:77:CALLBACK");u.initialized=true;if(u.data.event){if(u.data.event==="virtual_page_view"){br_data=u.generatePageDataObject(br_data);br_data.orig_ref_url=u.data.orig_ref_url||window.location.href;BrTrk.getTracker().updateBrData(u.clearEmptyKeys(br_data));BrTrk.getTracker().logPageView();}else{var event_data=u.data[u.data.event]||{};event_data.prod_id=event_data.prod_id||((u.typeOf(u.data.product_id)==="array"&&u.data.product_id.length>0)?u.data.product_id[0]:"");event_data.sku=event_data.sku||((u.typeOf(u.data.product_sku)==="array"&&u.data.product_sku.length>0)?u.data.product_sku[0]:"");event_data.prod_name=event_data.prod_name||((u.typeOf(u.data.product_name)==="array"&&u.data.product_name.length>0)?u.data.product_name[0]:"");event_data.q=event_data.q||u.data.q||"";event_data.aq=event_data.aq||u.data.aq||"";event_data.price=event_data.price||((u.typeOf(u.data.product_unit_price)==="array"&&u.data.product_unit_price.length>0)?u.data.product_unit_price[0]:"");event_data.quantity=event_data.quantity||((u.typeOf(u.data.product_quantity)==="array"&&u.data.product_quantity.length>0)?u.data.product_quantity[0]:"");if(u.data.event==="cart"||u.data.event==="cart_add"){u.data.event_group=u.data.event_group||"cart";u.data.event_type=u.data.event_type||"click-add";}else if(u.data.event==="search suggest"||u.data.event==="suggest"){u.data.event_group=u.data.event_group||"suggest";if(event_data.aq){u.data.event_type=u.data.event_type||"click";}else{u.data.event_type=u.data.event_type||"submit";}}else if(u.data.event==="quickview"||u.data.event==="quick_view"){u.data.event_group=u.data.event_group||"product";u.data.event_type=u.data.event_type||"quickview";}else if(u.data.event==="widget-click"||u.data.event==="widget-view"){u.data.event_group=u.data.event_group||"widget";u.data.event_type=u.data.event;}
BrTrk.getTracker().logEvent(u.data.event_group,u.data.event_type,u.clearEmptyKeys(event_data),{},u.data.deferred);}}
utag.DB("send:77:CALLBACK:COMPLETE");};u.map={"_csku":"product_id","searchTerm":"search_term,suggest.q","eventAction":"action","basicPageType:Home:ptype":"homepage","basicPageType:Lister:ptype":"category","basicPageType:Search Results:ptype":"search","basicPageType:Product:ptype":"product","basicPageType:category:ptype":"category","basicPageType:view":"suggest","basicPageType:lister:ptype":"category","basicPageType:Category Page:ptype":"category","basicPageType:Category Page":"virtual_page_view","basicPageType:Lister":"virtual_page_view","basicPageType:Home":"virtual_page_view","basicPageType:Product":"virtual_page_view","basicPageType:Search Results":"virtual_page_view","basicPageType:Landing Page":"virtual_page_view","basicPageType:Checkout":"virtual_page_view","event_name:virtual_page_view":"virtual_page_view","categoryName":"category_name","eventName:add":"cart","prodCategoryId":"product_category","prodPrice":"product_unit_price","transactionTotalDiscountIncVat":"order_total","transactionId":"order_id","categoryIdPage":"category_id","bloomreach_page_type:category:ptype":"category","tealium_event:spa_search":"suggest","tealium_event:autosuggest":"suggest","bloomreach_deferred":"deferred","originalSearch":"suggest.aq","br_is_conversion":"is_conversion","ut.event:view":"virtual_page_view"};u.extend=[function(a,b){try{if(1){if(b["ut.event"]&&b["ut.event"]==="view"&&!b["basicPreviousPageURL"]&&document.referrer&&!document.referrer.match(/^https:\/\/www\.diy\.(com|ie)/gi)){u.data.orig_ref_url=document.referrer;}}}catch(e){utag.DB(e)}},function(a,b){try{if(typeof b['transactionId']!='undefined'){b['br_is_conversion']='1'}}catch(e){utag.DB(e);}},function(a,b,c,d,e,f,g){if(1){d=b['basicPageType'];if(typeof d=='undefined')return;c=[{'Home':'homepage'},{'Lister':'category'},{'Search Results':'search'},{'Product':'product'},{'category':'category'},{'Category Page':'category'},{'Category Lister Page':'category'},{'Content Category Page':'category'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d==f){b['bloomreach_page_type']=c[e][f];m=true};};if(m)break};if(!m)b['bloomreach_page_type']='other';}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:77");utag.DB(b);var c,d,e,f,h;u.data={"base_url":"//cdn"+((location.protocol==="https:")?"s.brsrvr":".brcdn")+".com/v1/br-trk-##utag_account_id##.js","account_id":"5374","view_id":"","domain_key":"diy_com","user_id":"","track_tms":"no","tms":"tlm","clear_br_data":"yes","ptype":"","orig_ref_url":"","title":"","currency":"","product_id":[],"product_name":[],"product_sku":[],"product_category":[],"product_quantity":[],"product_unit_price":[],"is_conversion":0,"order_id":"","order_total":"","search_term":"","q":"","aq":"","deferred":false,"category_id":"","category_name":"","event":"","event_type":"","event_group":"","custom_br_data":{},"catalogs":[],"item_id":"","item_name":"","wrid":"","wq":"","wid":"","wty":"","sku":"","customer_tier":"","customer_country":"","customer_geo":"","customer_profile":""};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:77:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.map_func(e[f].split("."),u.data,b[d]);if(e[f].indexOf("br_data.")===0){u.data.custom_br_data[e[f].substr(8)]=b[d];}}}else{h=d.split(":");if(h.length===2&&b[h[0]]===h[1]){if(u.map[d]){u.data.event=u.map[d];}
}else if(h.length===3&&b[h[0]]===h[1]){if(u.map[d]){u.data.ptype=u.map[d];}}}}
utag.DB("send:77:MAPPINGS");utag.DB(u.data);u.data.order_id=u.data.order_id||b._corder||"";u.data.order_total=u.data.order_total||b._ctotal||"";u.data.user_id=u.data.user_id||b._ccustid||"";if(u.data.product_id.length===0&&b._cprod!==undefined){u.data.product_id=b._cprod.slice(0);}
if(u.data.product_name.length===0&&b._cprodname!==undefined){u.data.product_name=b._cprodname.slice(0);}
if(u.data.product_sku.length===0&&b._csku!==undefined){u.data.product_sku=b._csku.slice(0);}
if(u.data.product_category.length===0&&b._ccat!==undefined){u.data.product_category=b._ccat.slice(0);}
if(u.data.product_quantity.length===0&&b._cquan!==undefined){u.data.product_quantity=b._cquan.slice(0);}
if(u.data.product_unit_price.length===0&&b._cprice!==undefined){u.data.product_unit_price=b._cprice.slice(0);}
if(u.data.deferred==="true"){u.data.deferred=true;}else if(u.data.deferred==="false"){u.data.deferred=false;}
br_data=u.generatePageDataObject(br_data);if(!u.data.account_id){utag.DB(u.id+": Tag not fired: Required attribute account_id is not populated");return;}
if(u.initialized){u.loader_cb();}else{u.queue.push({"data":u.data,"a":a,"b":b});if(!u.scriptrequested){u.scriptrequested=true;u.data.base_url=u.data.base_url.replace("##utag_account_id##",u.data.account_id);utag.ut.loader({'type':'script','src':u.data.base_url,'cb':u.loader_cb,'loc':'script','id':'utag_77','attrs':{}});}}
utag.DB("send:77:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("77","kingfisher.b-and-q-wapp"));}catch(error){utag.DB(error);}
