/**
 --- WIDGETS CONTAINS ---
 device.js 0.2.7;
 debouncedresize;
 placeholder v2.0.8;
 imagesLoaded PACKAGED v4.1.0;
 jQuery MultiSelect UI;
 TweetMax VERSION: 1.19.0;
 Slick Slider v. 1.6.0;
 Magnific Popup - v1.1.0 - 2016-02-20;
 jQuery.filer minified;
 jQuery Filtrify v0.2;
 debouncedresize;
 rippleria;
 jQuery Unveil;
 Isotope PACKAGED v3.0.1;
 jquery-match-height master;
 */

/**
 * ! device.js 0.2.7
 * http://matthewhudson.me/projects/device.js/
 * https://github.com/matthewhudson/device.js
 * */
(function(){var a,b,c,d,e,f,g,h,i,j;b=window.device,a={},window.device=a,d=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),a.ios=function(){return a.iphone()||a.ipod()||a.ipad()},a.iphone=function(){return!a.windows()&&e("iphone")},a.ipod=function(){return e("ipod")},a.ipad=function(){return e("ipad")},a.android=function(){return!a.windows()&&e("android")},a.androidPhone=function(){return a.android()&&e("mobile")},a.androidTablet=function(){return a.android()&&!e("mobile")},a.blackberry=function(){return e("blackberry")||e("bb10")||e("rim")},a.blackberryPhone=function(){return a.blackberry()&&!e("tablet")},a.blackberryTablet=function(){return a.blackberry()&&e("tablet")},a.windows=function(){return e("windows")},a.windowsPhone=function(){return a.windows()&&e("phone")},a.windowsTablet=function(){return a.windows()&&e("touch")&&!a.windowsPhone()},a.fxos=function(){return(e("(mobile;")||e("(tablet;"))&&e("; rv:")},a.fxosPhone=function(){return a.fxos()&&e("mobile")},a.fxosTablet=function(){return a.fxos()&&e("tablet")},a.meego=function(){return e("meego")},a.cordova=function(){return window.cordova&&"file:"===location.protocol},a.nodeWebkit=function(){return"object"==typeof window.process},a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()},a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||a.windowsTablet()||a.fxosTablet()},a.desktop=function(){return!a.tablet()&&!a.mobile()},a.television=function(){var a;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],a=0;a<television.length;){if(e(television[a]))return!0;a++}return!1},a.portrait=function(){return window.innerHeight/window.innerWidth>1},a.landscape=function(){return window.innerHeight/window.innerWidth<1},a.noConflict=function(){return window.device=b,this},e=function(a){return-1!==j.indexOf(a)},g=function(a){var b;return b=new RegExp(a,"i"),d.className.match(b)},c=function(a){var b=null;g(a)||(b=d.className.replace(/^\s+|\s+$/g,""),d.className=b+" "+a)},i=function(a){g(a)&&(d.className=d.className.replace(" "+a,""))},a.ios()?a.ipad()?c("ios ipad tablet"):a.iphone()?c("ios iphone mobile"):a.ipod()&&c("ios ipod mobile"):a.android()?c(a.androidTablet()?"android tablet":"android mobile"):a.blackberry()?c(a.blackberryTablet()?"blackberry tablet":"blackberry mobile"):a.windows()?c(a.windowsTablet()?"windows tablet":a.windowsPhone()?"windows mobile":"desktop"):a.fxos()?c(a.fxosTablet()?"fxos tablet":"fxos mobile"):a.meego()?c("meego mobile"):a.nodeWebkit()?c("node-webkit"):a.television()?c("television"):a.desktop()&&c("desktop"),a.cordova()&&c("cordova"),f=function(){a.landscape()?(i("portrait"),c("landscape")):(i("landscape"),c("portrait"))},h=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(h,f,!1):window.attachEvent?window.attachEvent(h,f):window[h]=f,f(),"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?module.exports=a:window.device=a}).call(this);
/**device.js 0.2.7 END*/

/**!
 * debouncedresize
 *
 * special jQuery event that happens once after a window resize
 *
 * latest version and complete README available on Github:
 * https://github.com/louisremi/jquery-smartresize
 *
 * Copyright 2012 @louis_remi
 * Licensed under the MIT license.
 *
 * This saved you an hour of work?
 * Send me music http://www.amazon.co.uk/wishlist/HNTU0468LQON
 */
!function(e){var n,t,i=e.event;n=i.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,r){var o=this,s=arguments,u=function(){e.type="debouncedresize",i.dispatch.apply(o,s)};t&&clearTimeout(t),r?u():t=setTimeout(u,n.threshold)},threshold:150}}(jQuery);(jQuery);
/**debouncedresize END*/

/**
 * placeholder v2.0.8
 *
 *   https://github.com/mathiasbynens/jquery-placeholder, http://mths.be/placeholder v2.0.8
 */
(function(m,g,d){function r(b){var a={},c=/^jQuery\d+$/;d.each(b.attributes,function(b,d){d.specified&&!c.test(d.name)&&(a[d.name]=d.value)});return a}function h(b,a){var c=d(this);if(this.value==c.attr("placeholder")&&c.hasClass("placeholder"))if(c.data("placeholder-password")){c=c.hide().next().show().attr("id",c.removeAttr("id").data("placeholder-id"));if(!0===b)return c[0].value=a;c.focus()}else this.value="",c.removeClass("placeholder"),this==n()&&this.select()}function l(){var b,a=d(this),c= this.id;if(""==this.value){if("password"==this.type){if(!a.data("placeholder-textinput")){try{b=a.clone().attr({type:"text"})}catch(e){b=d("<input>").attr(d.extend(r(this),{type:"text"}))}b.removeAttr("name").data({"placeholder-password":a,"placeholder-id":c}).bind("focus.placeholder",h);a.data({"placeholder-textinput":b,"placeholder-id":c}).before(b)}a=a.removeAttr("id").hide().prev().attr("id",c).show()}a.addClass("placeholder");a[0].value=a.attr("placeholder")}else a.removeClass("placeholder")} function n(){try{return g.activeElement}catch(b){}}var f="[object OperaMini]"==Object.prototype.toString.call(m.operamini),k="placeholder"in g.createElement("input")&&!f,f="placeholder"in g.createElement("textarea")&&!f,e=d.fn,p=d.valHooks,q=d.propHooks;k&&f?(e=e.placeholder=function(){return this},e.input=e.textarea=!0):(e=e.placeholder=function(){this.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":h,"blur.placeholder":l}).data("placeholder-enabled", !0).trigger("blur.placeholder");return this},e.input=k,e.textarea=f,e={get:function(b){var a=d(b),c=a.data("placeholder-password");return c?c[0].value:a.data("placeholder-enabled")&&a.hasClass("placeholder")?"":b.value},set:function(b,a){var c=d(b),e=c.data("placeholder-password");if(e)return e[0].value=a;if(!c.data("placeholder-enabled"))return b.value=a;""==a?(b.value=a,b!=n()&&l.call(b)):c.hasClass("placeholder")?h.call(b,!0,a)||(b.value=a):b.value=a;return c}},k||(p.input=e,q.value=e),f||(p.textarea= e, q.value=e),d(function(){d(g).delegate("form","submit.placeholder",function(){var b=d(".placeholder",this).each(h);setTimeout(function(){b.each(l)},10)})}),d(m).bind("beforeunload.placeholder",function(){d(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
/**Placeholder END*/

/**!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||[];return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/**--- imagesLoaded PACKAGED end ---*/

/**
 * jQuery MultiSelect UI Widget 1.13
 * Copyright (c) 2012 Eric Hynds
 *
 * http://www.erichynds.com/jquery/jquery-ui-multiselect-widget/
 *
 * Depends:
 *   - jQuery 1.4.2+
 *   - jQuery UI 1.8 widget factory
 *
 * Optional:
 *   - jQuery UI effects
 *   - jQuery UI position utility
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */
(function(d){var k=0;d.widget("ech.multiselect",{options:{header:!0,height:175,minWidth:225,classes:"",checkAllText:"Check all",uncheckAllText:"Uncheck all",noneSelectedText:"Select options",selectedText:"# selected",selectedList:0,show:null,hide:null,autoOpen:!1,multiple:!0,position:{}},_create:function(){var a=this.element.hide(),b=this.options;this.speed=d.fx.speeds._default;this._isOpen=!1;a=(this.button=d('<button type="button"><span class="ui-icon ui-icon-triangle-2-n-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(b.classes).attr({title:a.attr("title"),"aria-haspopup":!0,tabIndex:a.attr("tabIndex")}).insertAfter(a);(this.buttonlabel=d("<span />")).html(b.noneSelectedText).appendTo(a);var a=(this.menu=d("<div />")).addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(b.classes).appendTo(document.body),c=(this.header=d("<div />")).addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(a);(this.headerLinkContainer=d("<ul />")).addClass("ui-helper-reset").html(function(){return!0===b.header?'<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>'+b.checkAllText+'</span></a></li><li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>'+b.uncheckAllText+"</span></a></li>":"string"===typeof b.header?"<li>"+b.header+"</li>":""}).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ui-icon-circle-close"></span></a></li>').appendTo(c);(this.checkboxContainer=d("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(a);this._bindEvents();this.refresh(!0);b.multiple||a.addClass("ui-multiselect-single")},_init:function(){!1===this.options.header&&this.header.hide();this.options.multiple||this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide();this.options.autoOpen&&this.open();this.element.is(":disabled")&&this.disable()},refresh:function(a){var b=this.element,c=this.options,f=this.menu,h=this.checkboxContainer,g=[],e="",i=b.attr("id")||k++;b.find("option").each(function(b){d(this);var a=this.parentNode,f=this.innerHTML,h=this.title,k=this.value,b="ui-multiselect-"+(this.id||i+"-option-"+b),l=this.disabled,n=this.selected,m=["ui-corner-all"],o=(l?"ui-multiselect-disabled ":" ")+this.className,j;"OPTGROUP"===a.tagName&&(j=a.getAttribute("label"),-1===d.inArray(j,g)&&(e+='<li class="ui-multiselect-optgroup-label '+a.className+'"><a href="#">'+j+"</a></li>",g.push(j)));l&&m.push("ui-state-disabled");n&&!c.multiple&&m.push("ui-state-active");e+='<li class="'+o+'">';e+='<label for="'+b+'" title="'+h+'" class="'+m.join(" ")+'">';e+='<input id="'+b+'" name="multiselect_'+i+'" type="'+(c.multiple?"checkbox":"radio")+'" value="'+k+'" title="'+f+'"';n&&(e+=' checked="checked"',e+=' aria-selected="true"');l&&(e+=' disabled="disabled"',e+=' aria-disabled="true"');e+=" /><span>"+f+"</span></label></li>"});h.html(e);this.labels=f.find("label");this.inputs=this.labels.children("input");this._setButtonWidth();this._setMenuWidth();this.button[0].defaultValue=this.update();a||this._trigger("refresh")},update:function(){var a=this.options,b=this.inputs,c=b.filter(":checked"),f=c.length,a=0===f?a.noneSelectedText:d.isFunction(a.selectedText)?a.selectedText.call(this,f,b.length,c.get()):/\d/.test(a.selectedList)&&0<a.selectedList&&f<=a.selectedList?c.map(function(){return d(this).next().html()}).get().join(", "):a.selectedText.replace("#",f).replace("#",b.length);this.buttonlabel.html(a);return a},_bindEvents:function(){function a(){b[b._isOpen? "close":"open"]();return!1}var b=this,c=this.button;c.find("span").bind("click.multiselect",a);c.bind({click:a,keypress:function(a){switch(a.which){case 27:case 38:case 37:b.close();break;case 39:case 40:b.open()}},mouseenter:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-hover")},mouseleave:function(){d(this).removeClass("ui-state-hover")},focus:function(){c.hasClass("ui-state-disabled")||d(this).addClass("ui-state-focus")},blur:function(){d(this).removeClass("ui-state-focus")}});this.header.delegate("a","click.multiselect",function(a){if(d(this).hasClass("ui-multiselect-close"))b.close();else b[d(this).hasClass("ui-multiselect-all")?"checkAll":"uncheckAll"]();a.preventDefault()});this.menu.delegate("li.ui-multiselect-optgroup-label a","click.multiselect",function(a){a.preventDefault();var c=d(this),g=c.parent().nextUntil("li.ui-multiselect-optgroup-label").find("input:visible:not(:disabled)"),e=g.get(),c=c.parent().text();!1!==b._trigger("beforeoptgrouptoggle",a,{inputs:e,label:c})&&(b._toggleChecked(g.filter(":checked").length!==g.length,g),b._trigger("optgrouptoggle",a,{inputs:e,label:c,checked:e[0].checked}))}).delegate("label","mouseenter.multiselect",function(){d(this).hasClass("ui-state-disabled")||(b.labels.removeClass("ui-state-hover"),d(this).addClass("ui-state-hover").find("input").focus())}).delegate("label","keydown.multiselect",function(a){a.preventDefault();switch(a.which){case 9:case 27:b.close();break;case 38:case 40:case 37:case 39:b._traverse(a.which,this);break;case 13:d(this).find("input")[0].click()}}).delegate('input[type="checkbox"], input[type="radio"]',"click.multiselect",function(a){var c=d(this),g=this.value,e=this.checked,i=b.element.find("option");this.disabled||!1===b._trigger("click",a,{value:g,text:this.title,checked:e})?a.preventDefault():(c.focus(),c.attr("aria-selected",e),i.each(function(){this.value===g?this.selected=e:b.options.multiple||(this.selected=!1)}),b.options.multiple||(b.labels.removeClass("ui-state-active"),c.closest("label").toggleClass("ui-state-active",e),b.close()),b.element.trigger("change"),setTimeout(d.proxy(b.update,b),10))});d(document).bind("mousedown.multiselect",function(a){b._isOpen&&(!d.contains(b.menu[0],a.target)&&!d.contains(b.button[0],a.target)&&a.target!==b.button[0])&&b.close()});d(this.element[0].form).bind("reset.multiselect",function(){setTimeout(d.proxy(b.refresh,b),10)})},_setButtonWidth:function(){var a=this.element.outerWidth(),b=this.options;/\d/.test(b.minWidth)&&a<b.minWidth&&(a=b.minWidth);this.button.width(a)},_setMenuWidth:function(){var a=this.menu,b=this.button.outerWidth()-parseInt(a.css("padding-left"),10)-parseInt(a.css("padding-right"),10)-parseInt(a.css("border-right-width"),10)-parseInt(a.css("border-left-width"),10);a.width(b||this.button.outerWidth())},_traverse:function(a,b){var c=d(b),f=38===a||37===a,c=c.parent()[f?"prevAll":"nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup-label)")[f?"last":"first"]();c.length?c.find("label").trigger("mouseover"):(c=this.menu.find("ul").last(),this.menu.find("label")[f? "last":"first"]().trigger("mouseover"),c.scrollTop(f?c.height():0))},_toggleState:function(a,b){return function(){this.disabled||(this[a]=b);b?this.setAttribute("aria-selected",!0):this.removeAttribute("aria-selected")}},_toggleChecked:function(a,b){var c=b&&b.length?b:this.inputs,f=this;c.each(this._toggleState("checked",a));c.eq(0).focus();this.update();var h=c.map(function(){return this.value}).get();this.element.find("option").each(function(){!this.disabled&&-1<d.inArray(this.value,h)&&f._toggleState("selected",a).call(this)});c.length&&this.element.trigger("change")},_toggleDisabled:function(a){this.button.attr({disabled:a,"aria-disabled":a})[a?"addClass":"removeClass"]("ui-state-disabled");var b=this.menu.find("input"),b=a?b.filter(":enabled").data("ech-multiselect-disabled",!0):b.filter(function(){return!0===d.data(this,"ech-multiselect-disabled")}).removeData("ech-multiselect-disabled");b.attr({disabled:a,"arial-disabled":a}).parent()[a?"addClass":"removeClass"]("ui-state-disabled");this.element.attr({disabled:a,"aria-disabled":a})},open:function(){var a=this.button,b=this.menu,c=this.speed,f=this.options,h=[];if(!(!1===this._trigger("beforeopen")||a.hasClass("ui-state-disabled")||this._isOpen)){var g=b.find("ul").last(),e=f.show,i=a.offset();d.isArray(f.show)&&(e=f.show[0],c=f.show[1]||this.speed);e&&(h=[e,c]);g.scrollTop(0).height(f.height);d.ui.position&&!d.isEmptyObject(f.position)?(f.position.of=f.position.of||a,b.show().position(f.position).hide()):b.css({top:i.top+a.outerHeight(),left:i.left});d.fn.show.apply(b,h);this.labels.eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus");a.addClass("ui-state-active");this._isOpen=!0;this._trigger("open")}},close:function(){if(!1!==this._trigger("beforeclose")){var a=this.options,b=a.hide,c=this.speed,f=[];d.isArray(a.hide)&&(b=a.hide[0],c=a.hide[1]||this.speed);b&&(f=[b,c]);d.fn.hide.apply(this.menu,f);this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave");this._isOpen=!1;this._trigger("close")}},enable:function(){this._toggleDisabled(!1)},disable:function(){this._toggleDisabled(!0)},checkAll:function(){this._toggleChecked(!0);this._trigger("checkAll")},uncheckAll:function(){this._toggleChecked(!1);this._trigger("uncheckAll")},getChecked:function(){return this.menu.find("input").filter(":checked")},destroy:function(){d.Widget.prototype.destroy.call(this);this.button.remove();this.menu.remove();this.element.show();return this},isOpen:function(){return this._isOpen},widget:function(){return this.menu},getButton:function(){return this.button},_setOption:function(a,b){var c=this.menu;switch(a){case "header":c.find("div.ui-multiselect-header")[b?"show":"hide"]();break;case "checkAllText":c.find("a.ui-multiselect-all span").eq(-1).text(b);break;case "uncheckAllText":c.find("a.ui-multiselect-none span").eq(-1).text(b);break;case "height":c.find("ul").last().height(parseInt(b,10));break;case "minWidth":this.options[a]=parseInt(b,10);this._setButtonWidth();this._setMenuWidth();break;case "selectedText":case "selectedList":case "noneSelectedText":this.options[a]=b;this.update();break;case "classes":c.add(this.button).removeClass(this.options.classes).addClass(b);break;case "multiple":c.toggleClass("ui-multiselect-single",!b),this.options.multiple=b,this.element[0].multiple=b,this.refresh()}d.Widget.prototype._setOption.apply(this,arguments)}})})(jQuery);
/** jQuery MultiSelect END */

/**!
 * TweetMax VERSION: 1.19.0
 * DATE: 2016-07-14
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.19.0",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.0",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.0",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,
	segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.0",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N=document,O=function(a){return N.createElementNS?N.createElementNS("http://www.w3.org/1999/xhtml",a):N.createElement(a)},P=O("div"),Q=O("img"),R=g._internals={_specialProps:i},S=navigator.userAgent,T=function(){var a=S.indexOf("Android"),b=O("a");return m=-1!==S.indexOf("Safari")&&-1===S.indexOf("Chrome")&&(-1===a||Number(S.substr(a+8,1))>3),o=m&&Number(S.substr(S.indexOf("Version/")+8,1))<6,n=-1!==S.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(S)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(S))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),U=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},V=function(a){window.console&&console.log(a)},W="",X="",Y=function(a,b){b=b||P;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(X=3===d?"ms":c[d],W="-"+X.toLowerCase()+"-",X+a):null},Z=N.defaultView?N.defaultView.getComputedStyle:function(){},$=g.getStyle=function(a,b,c,d,e){var f;return T||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||Z(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):U(a)},_=R.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=P.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+$(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||N.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(P),h=parseFloat(P[k?"offsetWidth":"offsetHeight"]),l.removeChild(P),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=_(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},aa=R.calculateOffset=function(a,b,c){if("absolute"!==$(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=$(a,"margin"+d,c);return a["offset"+d]-(_(a,b,parseFloat(e),e.replace(w,""))||0)},ba=function(a,b){var c,d,e,f={};if(b=b||Z(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Ca===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ba===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return T||(f.opacity=U(a)),d=Pa(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ea&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},ca=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:aa(a,g),void 0!==j[g]&&(h=new ra(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},da={width:["Left","Right"],height:["Top","Bottom"]},ea=["marginLeft","marginRight","marginTop","marginBottom"],fa=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||Z(a))[b]||0;if(a.getBBox&&Ma(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=da[b],f=e.length;for(c=c||Z(a,null);--f>-1;)d-=parseFloat($(a,"padding"+e[f],c,!0))||0,d-=parseFloat($(a,"border"+e[f]+"Width",c,!0))||0;return d},ga=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ga(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ha=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ja=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ka={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},la=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ma=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ka[a])c=ka[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=la(g+1/3,d,e),c[1]=la(g,d,e),c[2]=la(g-1/3,d,e);else c=a.match(s)||ka.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ka.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},na=function(a,b){var c,d,e,f=a.match(oa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ma(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},oa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ka)oa+="|"+j+"\\b";oa=new RegExp(oa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];oa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=na(a[0],b),a[1]=na(a[1],b)),oa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var pa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(oa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(oa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},qa=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},ra=(R._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),sa=(R._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new ra(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new ra(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},R.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof sa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ta=function(a,b,c,d,e,f){var g=new sa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},ua=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new sa(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&oa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,oa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ha(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&oa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&T,p=ma(p,C),u=ma(u,C),y=p.length+u.length>6,y&&!T&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(T||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ha(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ha(u[1],p[1]),"%,",!1).appendXtra("",p[2],ha(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),oa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ha(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},va=9;for(j=sa.prototype,j.l=j.pr=0;--va>0;)j["xn"+va]=0,j["xs"+va]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new sa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var wa=function(a,b){b=b||{},this.p=b.prefix?Y(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||pa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},xa=R._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new wa(f[d],b)},ya=R._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";xa(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(V("Error: "+b+" js file not loaded."),f)}})}};j=wa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return ua(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format($(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){xa(a,{parser:function(a,d,e,f,g,h,i){var j=new sa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var za,Aa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ba=Y("transform"),Ca=W+"transform",Da=Y("transformOrigin"),Ea=null!==Y("perspective"),Fa=R.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ea?g.defaultForce3D||"auto":!1},Ga=window.SVGElement,Ha=function(a,b,c){var d,e=N.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ia=N.documentElement,Ja=function(){var a,b,c,d=p||/Android/i.test(S)&&!window.chrome;return N.createElementNS&&!d&&(a=Ha("svg",Ia),b=Ha("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Da]="50% 50%",b.style[Ba]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ea),Ia.removeChild(a)),d}(),Ka=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Oa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),b=ga(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Na&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},La=function(a){try{return a.getBBox()}catch(a){}},Ma=function(a){return!!(Ga&&a.getBBox&&a.getCTM&&La(a)&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},Na=[1,0,0,1,0,0],Oa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Fa,j=1e5,k=a.style;if(Ba?d=$(a,Ca,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ba&&((h="none"===Z(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ia.appendChild(a)),d=$(a,Ca,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Ta(k,"display"),g&&Ia.removeChild(a)),(i.svg||a.getBBox&&Ma(a))&&(c&&-1!==(k[Ba]+"").indexOf("matrix")&&(d=k[Ba],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Na;for(e=(d||"").match(s)||[],va=e.length;--va>-1;)f=Number(e[va]),e[va]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Pa=R.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Fa:new Fa,n=m.scaleX<0,o=2e-5,p=1e5,q=Ea?parseFloat($(a,Da,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getBBox||!Ma(a)),m.svg&&(Ka(a,$(a,Da,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),za=g.useSVGTransformAttr||Ja),f=Oa(a),f!==Na){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Ea||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Ea&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(za&&a.style[Ba]?b.delayedCall(.001,function(){Ta(a.style,Ba)}):!za&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Qa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),va=0;4>va;va++)z=ea[va],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):_(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>va?-d.ieOffsetX:-d.ieOffsetY:2>va?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===va||2===va?1:B)))+"px"}}},Ra=R.set3DTransformRatio=R.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||za&&L||!Ea)return void(B||z.skewX||L?(B*=K,x=z.skewX*K,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x-z.skewY*K),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(s=Math.tan(z.skewY*K),s=Math.sqrt(1+s*s),b*=s,e*=s)),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,I+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,za&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),H+=.01*z.xPercent*p.width,I+=.01*z.yPercent*p.height),p=1e-6,p>H&&H>-p&&(H=0),p>I&&I>-p&&(I=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+H+","+I+")",L&&za?this.t.setAttribute("transform","matrix("+u):A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=K,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*K,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan((z.skewX-z.skewY)*K),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(s=Math.tan(z.skewY*K),s=Math.sqrt(1+s*s),b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[Ba]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*K,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*K,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(H+=d*-o,I+=g*-o,J+=j*-o+o),L&&(H+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,I+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>H&&H>-p&&(H=w),p>I&&I>-p&&(I=w),p>J&&J>-p&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ba]=u};j=Fa.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,xa("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j;"function"==typeof i[c]&&(j=i[c],i[c]=b);var k,l,m,n,o,p,s,t,u,v=a._gsTransform,w=a.style,x=1e-6,y=Aa.length,z=i,A={},B="transformOrigin",C=Pa(a,e,!0,z.parseTransform),D=z.transform&&("function"==typeof z.transform?z.transform(r,q):z.transform);if(d._transform=C,D&&"string"==typeof D&&Ba)l=P.style,l[Ba]=D,l.display="block",l.position="absolute",N.body.appendChild(P),k=Pa(P,null,!1),C.svg&&(p=C.xOrigin,s=C.yOrigin,k.x-=C.xOffset,k.y-=C.yOffset,(z.transformOrigin||z.svgOrigin)&&(D={},Ka(a,ga(z.transformOrigin),D,z.svgOrigin,z.smoothOrigin,!0),p=D.xOrigin,s=D.yOrigin,k.x-=D.xOffset-C.xOffset,k.y-=D.yOffset-C.yOffset),(p||s)&&(t=Oa(P,!0),k.x-=p-(p*t[0]+s*t[2]),k.y-=s-(p*t[1]+s*t[3]))),N.body.removeChild(P),k.perspective||(k.perspective=C.perspective),null!=z.xPercent&&(k.xPercent=ia(z.xPercent,C.xPercent)),null!=z.yPercent&&(k.yPercent=ia(z.yPercent,C.yPercent));else if("object"==typeof z){if(k={scaleX:ia(null!=z.scaleX?z.scaleX:z.scale,C.scaleX),scaleY:ia(null!=z.scaleY?z.scaleY:z.scale,C.scaleY),scaleZ:ia(z.scaleZ,C.scaleZ),x:ia(z.x,C.x),y:ia(z.y,C.y),z:ia(z.z,C.z),xPercent:ia(z.xPercent,C.xPercent),yPercent:ia(z.yPercent,C.yPercent),perspective:ia(z.transformPerspective,C.perspective)},o=z.directionalRotation,null!=o)if("object"==typeof o)for(l in o)z[l]=o[l];else z.rotation=o;"string"==typeof z.x&&-1!==z.x.indexOf("%")&&(k.x=0,k.xPercent=ia(z.x,C.xPercent)),"string"==typeof z.y&&-1!==z.y.indexOf("%")&&(k.y=0,k.yPercent=ia(z.y,C.yPercent)),k.rotation=ja("rotation"in z?z.rotation:"shortRotation"in z?z.shortRotation+"_short":"rotationZ"in z?z.rotationZ:C.rotation-C.skewY,C.rotation-C.skewY,"rotation",A),Ea&&(k.rotationX=ja("rotationX"in z?z.rotationX:"shortRotationX"in z?z.shortRotationX+"_short":C.rotationX||0,C.rotationX,"rotationX",A),k.rotationY=ja("rotationY"in z?z.rotationY:"shortRotationY"in z?z.shortRotationY+"_short":C.rotationY||0,C.rotationY,"rotationY",A)),k.skewX=ja(z.skewX,C.skewX-C.skewY),(k.skewY=ja(z.skewY,C.skewY))&&(k.skewX+=k.skewY,k.rotation+=k.skewY)}for(Ea&&null!=z.force3D&&(C.force3D=z.force3D,n=!0),C.skewType=z.skewType||C.skewType||g.defaultSkewType,m=C.force3D||C.z||C.rotationX||C.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,m||null==z.scale||(k.scaleZ=1);--y>-1;)u=Aa[y],D=k[u]-C[u],(D>x||-x>D||null!=z[u]||null!=M[u])&&(n=!0,
	f=new sa(C,u,C[u],D,f),u in A&&(f.e=A[u]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return D=z.transformOrigin,C.svg&&(D||z.svgOrigin)&&(p=C.xOffset,s=C.yOffset,Ka(a,ga(D),k,z.svgOrigin,z.smoothOrigin),f=ta(C,"xOrigin",(v?C:k).xOrigin,k.xOrigin,f,B),f=ta(C,"yOrigin",(v?C:k).yOrigin,k.yOrigin,f,B),(p!==C.xOffset||s!==C.yOffset)&&(f=ta(C,"xOffset",v?p:C.xOffset,C.xOffset,f,B),f=ta(C,"yOffset",v?s:C.yOffset,C.yOffset,f,B)),D=za?null:"0px 0px"),(D||Ea&&m&&C.zOrigin)&&(Ba?(n=!0,u=Da,D=(D||$(a,u,e,!1,"50% 50%"))+"",f=new sa(w,u,0,0,f,-1,B),f.b=w[u],f.plugin=h,Ea?(l=C.zOrigin,D=D.split(" "),C.zOrigin=(D.length>2&&(0===l||"0px"!==D[2])?parseFloat(D[2]):l)||0,f.xs0=f.e=D[0]+" "+(D[1]||"50%")+" 0px",f=new sa(C,"zOrigin",0,0,f,-1,f.n),f.b=l,f.xs0=f.e=C.zOrigin):f.xs0=f.e=D):ga(D+"",C)),n&&(d._transformType=C.svg&&za||!m&&3!==this._transformType?2:3),j&&(i[c]=j),f},prefix:!0}),xa("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),xa("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Y(y[j])),m=l=$(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=_(a,"borderLeft",o,t),w=_(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=_(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=ua(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:pa("0px 0px 0px 0px",!1,!0)}),xa("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return ua(a.style,c,this.format($(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:pa("0px 0px",!1,!0)}),xa("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||Z(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=$(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),Q.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-Q.width:a.offsetHeight-Q.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ga}),xa("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ga(-1===a.indexOf(" ")?a+" "+a:a)}}),xa("perspective",{defaultValue:"0px",prefix:!0}),xa("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),xa("transformStyle",{prefix:!0}),xa("backfaceVisibility",{prefix:!0}),xa("userSelect",{prefix:!0}),xa("margin",{parser:qa("marginTop,marginRight,marginBottom,marginLeft")}),xa("padding",{parser:qa("paddingTop,paddingRight,paddingBottom,paddingLeft")}),xa("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format($(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),xa("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),xa("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),xa("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=$(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/_(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+$(a,"borderTopStyle",e,!1,"solid")+" "+$(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(oa)||["#000"])[0]}}),xa("borderWidth",{parser:qa("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),xa("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new sa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Sa=function(a){var b,c=this.t,d=c.filter||$(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!$(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};xa("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat($(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===$(a,"visibility",e)&&0!==b&&(h=0),T?f=new sa(i,"opacity",h,b-h,f):(f=new sa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Sa),j&&(f=new sa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Ta=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Ua=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Ta(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};xa("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new sa(a,d,0,0,g,2),g.setRatio=Ua,g.pr=-11,c=!0,g.b=o,k=ba(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=ca(a,k,ba(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Va=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Da:i[c].p),Ta(g,c);e&&(Ta(g,Ba),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(xa("clearProps",{parser:function(a,b,d,e,f){return f=new sa(a,d,0,0,f,2),f.setRatio=Va,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),va=j.length;va--;)ya(j[va]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=Z(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=$(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ba(a,e),A.cssText=t+";"+b,n=ca(a,n,ba(a)).difs,!T&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ba?m&&(l=!0,""===A.zIndex&&(w=$(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new sa(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ba?Ra:Qa,x.data=this._transform||Pa(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=$(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=ma(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=ua(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=ua(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=fa(a,g,e),o="px"):"left"===g||"top"===g?(j=aa(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=_(a,g,j,o),"%"===p?(j/=_(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=_(a,g,1,p):"px"!==p&&(l=_(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new sa(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):V("invalid "+g+" tween value: "+b[g]):(c=new sa(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Pa(this._target,e,!0),this._transformType=this._transform.svg&&za||!a&&3!==this._transformType?2:3};var Wa=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new sa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Wa,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Xa=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Xa(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ba(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Xa(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Xa(a,k,m),i.render(c,!0,!0),Xa(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=ca(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!d.TweenLite){var e,f,g,h,i,j=function(a){var b,c=a.split("."),e=d;for(b=0;b<c.length;b++)e[c[b]]=e=e[c[b]]||{};return e},k=j("com.greensock"),l=1e-10,m=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},n=function(){},o=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),p={},q=function(e,f,g,h){this.sc=p[e]?p[e].sc:[],p[e]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(k){for(var l,m,n,o,r,s=f.length,t=s;--s>-1;)(l=p[f[s]]||new q(f[s],[])).gsClass?(i[s]=l.gsClass,t--):k&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+e).split("."),n=m.pop(),o=j(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(d[n]=c[n]=o,r="undefined"!=typeof module&&module.exports,!r&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+e.split(".").pop(),[],function(){return o});else if(r)if(e===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},r=a._gsDefine=function(a,b,c,d){return new q(a,b,c,d)},s=k._class=function(a,b,c){return b=b||function(){},r(a,[],function(){return b},c),b};r.globals=d;var t=[0,0,1,1],u=s("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?t.concat(b):t},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?s("easing."+f,null,!0):k.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(g=u.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,w(new u(null,null,1,f),g,"easeOut",!0),w(new u(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),w(new u(null,null,3,f),g,"easeInOut");v.linear=k.easing.Linear.easeIn,v.swing=k.easing.Quad.easeInOut;var x=s("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=x.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,j=this._listeners[a],k=0;for(this!==h||i||h.wake(),null==j&&(this._listeners[a]=j=[]),g=j.length;--g>-1;)f=j[g],f.c===b&&f.s===c?j.splice(g,1):0===k&&f.pr<e&&(k=g+1);j.splice(k,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},g.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!y;)y=a[e[f]+"RequestAnimationFrame"],z=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];s("Ticker",function(a,b){var c,d,e,f,g,j=this,k=A(),m=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,h,i=A()-B;i>o&&(k+=i-p),B+=i,j.time=(B-k)/1e3,b=j.time-g,(!c||b>0||a===!0)&&(j.frame++,g+=b+(b>=f?.004:f-b),h=!0),a!==!0&&(e=d(r)),h&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/l,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(m&&z?z(e):clearTimeout(e),d=n,e=null,j===h&&(i=!1))},j.wake=function(a){null!==e?j.sleep():a?k+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?n:m&&y?y:function(a){return setTimeout(a,1e3*(g-j.time)+1|0)},j===h&&(i=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),g=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),m=a,void j.fps(c)):m},j.fps(a),setTimeout(function(){"auto"===m&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),g=k.Ticker.prototype=new k.events.EventDispatcher,g.constructor=k.Ticker;var C=s("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){i||h.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});h=C.ticker=new k.Ticker,g=C.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1;var D=function(){i&&A()-B>2e3&&h.wake(),setTimeout(D,2e3)};D(),g.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},g.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},g.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},g.render=function(a,b,c){},g.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},g.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},g._enabled=function(a,b){return i||h.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},g._kill=function(a,b){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},g._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},g.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=o(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},g.totalTime=function(a,b,c){if(i||h.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},g.progress=g.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||l,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},g.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(i||a||h.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=s("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=E.prototype=new C,g.constructor=E,g.kill()._gc=!1,g._first=g._last=g._recent=null,g._sortChildren=!1,g.add=g.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},g.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},g.rawTime=function(){return i||h.wake(),this._totalTime};var F=s("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&o(b))&&"number"!=typeof b[0])for(this._targets=g=m(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(m(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-l,this.render(Math.min(0,-this._delay)))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType);
},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};g=F.prototype=new C,g.constructor=F,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=g._startAt=null,g._notifyPluginsOfEnabled=g._lazy=!1,F.version="1.19.0",F.defaultEase=g._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=h,F.autoSleep=120,F.lagSmoothing=function(a,b){h.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k,l="get"===c?a[b]:c,m=typeof a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:l,f:"function"===m,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-l||0};return"number"!==m&&("function"===m&&"get"===c&&(k=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),o.s=l=g?a[k](g):a[k]()),"string"==typeof l&&(g||isNaN(l))?(o.fp=g,j=M(l,d,h||F.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):n||(o.s=parseFloat(l),o.c=parseFloat(d)-o.s||0)),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},O=F._internals={isArray:o,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=h.time,U._startTime=h.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((h.time-V._startTime)*V._timeScale,!1,!1),U.render((h.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),h.frame>=W){W=h.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===h._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||h.sleep()}}},h.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+l,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*l>f-b?l:(f+=a.totalDuration()/a._timeScale/e)>b+l?0:f-b-l};g._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)S[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=F.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof u?k:"function"==typeof k?new u(k,g.easeParams):v[k]||F.defaultEase:F.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&F._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},g._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(g in this.vars)if(l=this.vars[g],S[g])l&&(l instanceof Array||l.push&&o(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(P[g]&&(j=new P[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=N.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),i)},g.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===l&&"isPause"!==this.data)&&j!==a&&(c=!0,j>l&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:l);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==l||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:l)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&k>=.5)&&(k=1-k),3===m&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===m?this.ratio=1-k:2===m?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===l&&g!==l&&(this._rawPrevTime=0))}},g._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((o(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},g.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-l,this.render(Math.min(0,-this._delay))),this},g._enabled=function(a,b){if(i||h.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((o(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=s("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(g=aa.prototype,aa.version="1.19.0",aa.API=2,g._firstPT=null,g._addTween=N,g.setRatio=L,g._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},g._mod=g._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},r.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=s("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},e=a._gsQueue){for(f=0;f<e.length;f++)e[f]();for(g in p)p[g].func||a.console.log("GSAP encountered missing dependency: "+g)}i=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/**TweetMax VERSION: 1.19.0 END*/

/**!
 Slick Slider v. 1.6.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues
 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
	d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});
/** Slick Slider v. 1.6.0 END */

/**! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!function(a){
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/**Magnific Popup end*/

/**!
 * jQuery.filer minified
 * Copyright (c) 2016 CreativeDream
 * Website: https://github.com/CreativeDream/jquery.filer
 * Version: 1.3 (14-Sep-2016)
 * Requires: jQuery v1.7.1 or later
 */
!function(a){"use strict";a.fn.filer=function(b){return this.each(function(c,d){var e=a(d),f=".jFiler",g=a(),h=a(),i=a(),j=[],k=a.isFunction(b)?b(e,a.fn.filer.defaults):b,l=k&&a.isPlainObject(k)?a.extend(!0,{},a.fn.filer.defaults,k):a.fn.filer.defaults,m={init:function(){e.wrap('<div class="jFiler"></div>'),m._set("props"),e.prop("jFiler").boxEl=g=e.closest(f),m._changeInput()},_bindInput:function(){l.changeInput&&h.length>0&&h.on("click",m._clickHandler),e.on({focus:function(){h.addClass("focused")},blur:function(){h.removeClass("focused")},change:m._onChange}),l.dragDrop&&(l.dragDrop.dragContainer.on("drag dragstart dragend dragover dragenter dragleave drop",function(a){a.preventDefault(),a.stopPropagation()}),l.dragDrop.dragContainer.on("drop",m._dragDrop.drop),l.dragDrop.dragContainer.on("dragover",m._dragDrop.dragEnter),l.dragDrop.dragContainer.on("dragleave",m._dragDrop.dragLeave)),l.uploadFile&&l.clipBoardPaste&&a(window).on("paste",m._clipboardPaste)},_unbindInput:function(b){l.changeInput&&h.length>0&&h.off("click",m._clickHandler),b&&(e.off("change",m._onChange),l.dragDrop&&(l.dragDrop.dragContainer.off("drop",m._dragDrop.drop),l.dragDrop.dragContainer.off("dragover",m._dragDrop.dragEnter),l.dragDrop.dragContainer.off("dragleave",m._dragDrop.dragLeave)),l.uploadFile&&l.clipBoardPaste&&a(window).off("paste",m._clipboardPaste))},_clickHandler:function(){if(!l.uploadFile&&l.addMore&&0!=e.val().length){m._unbindInput(!0);var b=a('<input type="file" />'),c=e.prop("attributes");a.each(c,function(){"required"!=this.name&&b.attr(this.name,this.value)}),e.after(b),j.push(b),e=b,m._bindInput(),m._set("props")}e.click()},_applyAttrSettings:function(){var a=["name","limit","maxSize","fileMaxSize","extensions","changeInput","showThumbs","appendTo","theme","addMore","excludeName","files","uploadUrl","uploadData","options"];for(var b in a){var c="data-jfiler-"+a[b];if(m._assets.hasAttr(c)){switch(a[b]){case"changeInput":case"showThumbs":case"addMore":l[a[b]]=["true","false"].indexOf(e.attr(c))>-1?"true"==e.attr(c):e.attr(c);break;case"extensions":l[a[b]]=e.attr(c).replace(/ /g,"").split(",");break;case"uploadUrl":l.uploadFile&&(l.uploadFile.url=e.attr(c));break;case"uploadData":l.uploadFile&&(l.uploadFile.data=JSON.parse(e.attr(c)));break;case"files":case"options":l[a[b]]=JSON.parse(e.attr(c));break;default:l[a[b]]=e.attr(c)}e.removeAttr(c)}}},_changeInput:function(){if(m._applyAttrSettings(),null!=l.beforeRender&&"function"==typeof l.beforeRender?l.beforeRender(g,e):null,l.theme&&g.addClass("jFiler-theme-"+l.theme),"input"!=e.get(0).tagName.toLowerCase()&&"file"!=e.get(0).type)h=e,e=a('<input type="file" name="'+l.name+'" />'),e.css({position:"absolute",left:"-9999px",top:"-9999px","z-index":"-9999"}),g.prepend(e),m._isGn=e;else if(l.changeInput){switch(typeof l.changeInput){case"boolean":h=a('<div class="jFiler-input"><div class="jFiler-input-caption"><span>'+l.captions.feedback+'</span></div><div class="jFiler-input-button">'+l.captions.button+'</div></div>"');break;case"string":case"object":h=a(l.changeInput);break;case"function":h=a(l.changeInput(g,e,l))}e.after(h),e.css({position:"absolute",left:"-9999px",top:"-9999px","z-index":"-9999"})}e.prop("jFiler").newInputEl=h,l.dragDrop&&(l.dragDrop.dragContainer=l.dragDrop.dragContainer?a(l.dragDrop.dragContainer):h),(!l.limit||l.limit&&l.limit>=2)&&(e.attr("multiple","multiple"),"[]"!=e.attr("name").slice(-2)?e.attr("name",e.attr("name")+"[]"):null),e.attr("disabled")||l.disabled?(l.disabled=!0,m._unbindInput(!0),g.addClass("jFiler-disabled")):(l.disabled=!1,m._bindInput(),g.removeClass("jFiler-disabled")),l.files&&m._append(!1,{files:l.files}),null!=l.afterRender&&"function"==typeof l.afterRender?l.afterRender(i,g,h,e):null},_clear:function(){m.files=null,e.prop("jFiler").files=null,l.uploadFile||l.addMore||m._reset(),m._set("feedback",m._itFl&&m._itFl.length>0?m._itFl.length+" "+l.captions.feedback2:l.captions.feedback),null!=l.onEmpty&&"function"==typeof l.onEmpty?l.onEmpty(g,h,e):null},_reset:function(b){if(!b){if(!l.uploadFile&&l.addMore){for(var c=0;c<j.length;c++)j[c].remove();j=[],m._unbindInput(!0),e=m._isGn?m._isGn:a(d),m._bindInput()}m._set("input","")}m._itFl=[],m._itFc=null,m._ajFc=0,m._set("props"),e.prop("jFiler").files_list=m._itFl,e.prop("jFiler").current_file=m._itFc,m._itFr=[],g.find("input[name^='jfiler-items-exclude-']:hidden").remove(),i.fadeOut("fast",function(){a(this).remove()}),e.prop("jFiler").listEl=i=a()},_set:function(a,b){switch(a){case"input":e.val(b);break;case"feedback":h.length>0&&h.find(".jFiler-input-caption span").html(b);break;case"props":e.prop("jFiler")||e.prop("jFiler",{options:l,listEl:i,boxEl:g,newInputEl:h,inputEl:e,files:m.files,files_list:m._itFl,current_file:m._itFc,append:function(a){return m._append(!1,{files:[a]})},enable:function(){l.disabled&&(l.disabled=!1,e.removeAttr("disabled"),g.removeClass("jFiler-disabled"),m._bindInput())},disable:function(){l.disabled||(l.disabled=!0,g.addClass("jFiler-disabled"),m._unbindInput(!0))},remove:function(a){return m._remove(null,{binded:!0,data:{id:a}}),!0},reset:function(){return m._reset(),m._clear(),!0},retry:function(a){return m._retryUpload(a)}})}},_filesCheck:function(){var b=0;if(l.limit&&m.files.length+m._itFl.length>l.limit)return l.dialogs.alert(m._assets.textParse(l.captions.errors.filesLimit)),!1;for(var c=0;c<m.files.length;c++){var d=m.files[c],e=d.name.split(".").pop().toLowerCase(),f={name:d.name,size:d.size,size2:m._assets.bytesToSize(d.size),type:d.type,ext:e};if(null!=l.extensions&&a.inArray(e,l.extensions)==-1&&a.inArray(f.type,l.extensions)==-1)return l.dialogs.alert(m._assets.textParse(l.captions.errors.filesType,f)),!1;if(null!=l.maxSize&&m.files[c].size>1048576*l.maxSize||null!=l.fileMaxSize&&m.files[c].size>1048576*l.fileMaxSize)return l.dialogs.alert(m._assets.textParse(l.captions.errors.filesSize,f)),!1;if(4096==d.size&&0==d.type.length)return l.dialogs.alert(m._assets.textParse(l.captions.errors.folderUpload,f)),!1;if(null!=l.onFileCheck&&"function"==typeof l.onFileCheck?l.onFileCheck(f,l,m._assets.textParse)===!1:null)return!1;if((l.uploadFile||l.addMore)&&!l.allowDuplicates){var f=m._itFl.filter(function(a,b){if(a.file.name==d.name&&a.file.size==d.size&&a.file.type==d.type&&(!d.lastModified||a.file.lastModified==d.lastModified))return!0});if(f.length>0){if(1==m.files.length)return!1;d._pendRemove=!0}}b+=m.files[c].size}return!(null!=l.maxSize&&b>=Math.round(1048576*l.maxSize))||(l.dialogs.alert(m._assets.textParse(l.captions.errors.filesSizeAll)),!1)},_thumbCreator:{create:function(b){var c=m.files[b],d=m._itFc?m._itFc.id:b,e=c.name,f=c.size,g=c.file,h=c.type?c.type.split("/",1):"".toString().toLowerCase(),j=e.indexOf(".")!=-1?e.split(".").pop().toLowerCase():"",k=l.uploadFile?'<div class="jFiler-jProgressBar">'+l.templates.progressBar+"</div>":"",n={id:d,name:e,size:f,size2:m._assets.bytesToSize(f),url:g,type:h,extension:j,icon:m._assets.getIcon(j,h),icon2:m._thumbCreator.generateIcon({type:h,extension:j}),image:'<div class="jFiler-item-thumb-image fi-loading"></div>',progressBar:k,_appended:c._appended},o="";return c.opts&&(n=a.extend({},c.opts,n)),o=a(m._thumbCreator.renderContent(n)).attr("data-jfiler-index",d),o.get(0).jfiler_id=d,m._thumbCreator.renderFile(c,o,n),c.forList?o:(m._itFc.html=o,o.hide()[l.templates.itemAppendToEnd?"appendTo":"prependTo"](i.find(l.templates._selectors.list)).show(),void(c._appended||m._onSelect(b)))},renderContent:function(a){return m._assets.textParse(a._appended?l.templates.itemAppend:l.templates.item,a)},renderFile:function(b,c,d){if(0==c.find(".jFiler-item-thumb-image").length)return!1;if(b.file&&"image"==d.type){var e='<img src="'+b.file+'" draggable="false" />',f=c.find(".jFiler-item-thumb-image.fi-loading");return a(e).error(function(){e=m._thumbCreator.generateIcon(d),c.addClass("jFiler-no-thumbnail"),f.removeClass("fi-loading").html(e)}).load(function(){f.removeClass("fi-loading").html(e)}),!0}if(window.File&&window.FileList&&window.FileReader&&"image"==d.type&&d.size<1e7){var g=new FileReader;g.onload=function(a){var b=c.find(".jFiler-item-thumb-image.fi-loading");if(l.templates.canvasImage){var e=document.createElement("canvas"),f=e.getContext("2d"),g=new Image;g.onload=function(){var a=b.height(),c=b.width(),d=g.height/a,h=g.width/c,i=d<h?d:h,j=g.height/i,k=g.width/i,l=Math.ceil(Math.log(g.width/k)/Math.log(2));if(e.height=a,e.width=c,g.width<e.width||g.height<e.height||l<=1){var m=g.width<e.width?e.width/2-g.width/2:g.width>e.width?-(g.width-e.width)/2:0,n=g.height<e.height?e.height/2-g.height/2:0;f.drawImage(g,m,n,g.width,g.height)}else{var o=document.createElement("canvas"),p=o.getContext("2d");o.width=.5*g.width,o.height=.5*g.height,p.fillStyle="#fff",p.fillRect(0,0,o.width,o.height),p.drawImage(g,0,0,o.width,o.height),p.drawImage(o,0,0,.5*o.width,.5*o.height),f.drawImage(o,k>e.width?k-e.width:0,0,.5*o.width,.5*o.height,0,0,k,j)}b.removeClass("fi-loading").html('<img src="'+e.toDataURL("image/png")+'" draggable="false" />')},g.onerror=function(){c.addClass("jFiler-no-thumbnail"),b.removeClass("fi-loading").html(m._thumbCreator.generateIcon(d))},g.src=a.target.result}else b.removeClass("fi-loading").html('<img src="'+a.target.result+'" draggable="false" />')},g.readAsDataURL(b)}else{var e=m._thumbCreator.generateIcon(d),f=c.find(".jFiler-item-thumb-image.fi-loading");c.addClass("jFiler-no-thumbnail"),f.removeClass("fi-loading").html(e)}},generateIcon:function(b){var c=new Array(3);if(b&&b.type&&b.type[0]&&b.extension)switch(b.type[0]){case"image":c[0]="f-image",c[1]='<i class="icon-jfi-file-image"></i>';break;case"video":c[0]="f-video",c[1]='<i class="icon-jfi-file-video"></i>';break;case"audio":c[0]="f-audio",c[1]='<i class="icon-jfi-file-audio"></i>';break;default:c[0]="f-file f-file-ext-"+b.extension,c[1]=b.extension.length>0?"."+b.extension:"",c[2]=1}else c[0]="f-file",c[1]=b.extension&&b.extension.length>0?"."+b.extension:"",c[2]=1;var d='<span class="jFiler-icon-file '+c[0]+'">'+c[1]+"</span>";if(1==c[2]){var e=m._assets.text2Color(b.extension);if(e){var f=a(d).appendTo("body");f.css("background-color",m._assets.text2Color(b.extension)),d=f.prop("outerHTML"),f.remove()}}return d},_box:function(b){if(null!=l.beforeShow&&"function"==typeof l.beforeShow&&!l.beforeShow(m.files,i,g,h,e))return!1;if(i.length<1){if(l.appendTo)var c=a(l.appendTo);else var c=g;c.find(".jFiler-items").remove(),i=a('<div class="jFiler-items jFiler-row"></div>'),e.prop("jFiler").listEl=i,i.append(m._assets.textParse(l.templates.box)).appendTo(c),i.on("click",l.templates._selectors.remove,function(c){c.preventDefault();var d=[b?b.remove.event:c,b?b.remove.el:a(this).closest(l.templates._selectors.item)],e=function(a){m._remove(d[0],d[1])};l.templates.removeConfirmation?l.dialogs.confirm(l.captions.removeConfirmation,e):e()})}for(var d=0;d<m.files.length;d++)m.files[d]._appended||(m.files[d]._choosed=!0),m._addToMemory(d),m._thumbCreator.create(d)}},_upload:function(b){var c=m._itFl[b],d=c.html,f=new FormData;if(f.append(e.attr("name"),c.file,!!c.file.name&&c.file.name),null!=l.uploadFile.data&&a.isPlainObject("function"==typeof l.uploadFile.data?l.uploadFile.data(c.file):l.uploadFile.data))for(var g in l.uploadFile.data)f.append(g,l.uploadFile.data[g]);m._ajax.send(d,f,c)},_ajax:{send:function(b,c,d){return d.ajax=a.ajax({url:l.uploadFile.url,data:c,type:l.uploadFile.type,enctype:l.uploadFile.enctype,xhr:function(){var c=a.ajaxSettings.xhr();return c.upload&&c.upload.addEventListener("progress",function(a){m._ajax.progressHandling(a,b)},!1),c},complete:function(a,b){d.ajax=!1,m._ajFc++,l.uploadFile.synchron&&d.id+1<m._itFl.length&&m._upload(d.id+1),m._ajFc>=m.files.length&&(m._ajFc=0,e.get(0).value="",null!=l.uploadFile.onComplete&&"function"==typeof l.uploadFile.onComplete?l.uploadFile.onComplete(i,g,h,e,a,b):null)},beforeSend:function(a,c){return null==l.uploadFile.beforeSend||"function"!=typeof l.uploadFile.beforeSend||l.uploadFile.beforeSend(b,i,g,h,e,d.id,a,c)},success:function(a,c,f){d.uploaded=!0,null!=l.uploadFile.success&&"function"==typeof l.uploadFile.success?l.uploadFile.success(a,b,i,g,h,e,d.id,c,f):null},error:function(a,c,f){d.uploaded=!1,null!=l.uploadFile.error&&"function"==typeof l.uploadFile.error?l.uploadFile.error(b,i,g,h,e,d.id,a,c,f):null},statusCode:l.uploadFile.statusCode,cache:!1,contentType:!1,processData:!1}),d.ajax},progressHandling:function(a,b){if(a.lengthComputable){var c=Math.round(100*a.loaded/a.total).toString();null!=l.uploadFile.onProgress&&"function"==typeof l.uploadFile.onProgress?l.uploadFile.onProgress(c,b,i,g,h,e):null,b.find(".jFiler-jProgressBar").find(l.templates._selectors.progressBar).css("width",c+"%")}}},_dragDrop:{dragEnter:function(a){clearTimeout(m._dragDrop._drt),l.dragDrop.dragContainer.addClass("dragged"),m._set("feedback",l.captions.drop),null!=l.dragDrop.dragEnter&&"function"==typeof l.dragDrop.dragEnter?l.dragDrop.dragEnter(a,h,e,g):null},dragLeave:function(a){clearTimeout(m._dragDrop._drt),m._dragDrop._drt=setTimeout(function(a){return m._dragDrop._dragLeaveCheck(a)?(l.dragDrop.dragContainer.removeClass("dragged"),m._set("feedback",l.captions.feedback),void(null!=l.dragDrop.dragLeave&&"function"==typeof l.dragDrop.dragLeave?l.dragDrop.dragLeave(a,h,e,g):null)):(m._dragDrop.dragLeave(a),!1)},100,a)},drop:function(a){clearTimeout(m._dragDrop._drt),l.dragDrop.dragContainer.removeClass("dragged"),m._set("feedback",l.captions.feedback),a&&a.originalEvent&&a.originalEvent.dataTransfer&&a.originalEvent.dataTransfer.files&&a.originalEvent.dataTransfer.files.length>0&&m._onChange(a,a.originalEvent.dataTransfer.files),null!=l.dragDrop.drop&&"function"==typeof l.dragDrop.drop?l.dragDrop.drop(a.originalEvent.dataTransfer.files,a,h,e,g):null},_dragLeaveCheck:function(b){var c=a(b.currentTarget),d=0;return!(!c.is(h)&&(d=h.find(c).length,d>0))}},_clipboardPaste:function(a,b){if((b||a.originalEvent.clipboardData||a.originalEvent.clipboardData.items)&&(!b||a.originalEvent.dataTransfer||a.originalEvent.dataTransfer.items)&&!m._clPsePre){var c=b?a.originalEvent.dataTransfer.items:a.originalEvent.clipboardData.items,d=function(a,b,c){b=b||"",c=c||512;for(var d=atob(a),e=[],f=0;f<d.length;f+=c){for(var g=d.slice(f,f+c),h=new Array(g.length),i=0;i<g.length;i++)h[i]=g.charCodeAt(i);var j=new Uint8Array(h);e.push(j)}var k=new Blob(e,{type:b});return k};if(c)for(var e=0;e<c.length;e++)if(c[e].type.indexOf("image")!==-1||c[e].type.indexOf("text/uri-list")!==-1){if(b)try{window.atob(a.originalEvent.dataTransfer.getData("text/uri-list").toString().split(",")[1])}catch(a){return}var f=b?d(a.originalEvent.dataTransfer.getData("text/uri-list").toString().split(",")[1],"image/png"):c[e].getAsFile();f.name=Math.random().toString(36).substring(5),f.name+=f.type.indexOf("/")!=-1?"."+f.type.split("/")[1].toString().toLowerCase():".png",m._onChange(a,[f]),m._clPsePre=setTimeout(function(){delete m._clPsePre},1e3)}}},_onSelect:function(b){l.uploadFile&&!a.isEmptyObject(l.uploadFile)&&(!l.uploadFile.synchron||l.uploadFile.synchron&&0==a.grep(m._itFl,function(a){return a.ajax}).length)&&m._upload(m._itFc.id),m.files[b]._pendRemove&&(m._itFc.html.hide(),m._remove(null,{binded:!0,data:{id:m._itFc.id}})),null!=l.onSelect&&"function"==typeof l.onSelect?l.onSelect(m.files[b],m._itFc.html,i,g,h,e):null,b+1>=m.files.length&&(null!=l.afterShow&&"function"==typeof l.afterShow?l.afterShow(i,g,h,e):null)},_onChange:function(b,c){if(c){if(!c||0==c.length)return m._set("input",""),m._clear(),!1;m.files=c}else{if(!e.get(0).files||"undefined"==typeof e.get(0).files||0==e.get(0).files.length)return l.uploadFile||l.addMore||(m._set("input",""),m._clear()),!1;m.files=e.get(0).files}if(l.uploadFile||l.addMore||m._reset(!0),e.prop("jFiler").files=m.files,!m._filesCheck()||null!=l.beforeSelect&&"function"==typeof l.beforeSelect&&!l.beforeSelect(m.files,i,g,h,e))return m._set("input",""),m._clear(),l.addMore&&j.length>0&&(m._unbindInput(!0),j[j.length-1].remove(),j.splice(j.length-1,1),e=j.length>0?j[j.length-1]:a(d),m._bindInput()),!1;if(m._set("feedback",m.files.length+m._itFl.length+" "+l.captions.feedback2),l.showThumbs)m._thumbCreator._box();else for(var f=0;f<m.files.length;f++)m.files[f]._choosed=!0,m._addToMemory(f),m._onSelect(f)},_append:function(a,b){var c=!!b&&b.files;if(c&&!(c.length<=0)&&(m.files=c,e.prop("jFiler").files=m.files,l.showThumbs)){for(var d=0;d<m.files.length;d++)m.files[d]._appended=!0;m._thumbCreator._box()}},_getList:function(a,b){var c=!!b&&b.files;if(c&&!(c.length<=0)&&(m.files=c,e.prop("jFiler").files=m.files,l.showThumbs)){for(var d=[],f=0;f<m.files.length;f++)m.files[f].forList=!0,d.push(m._thumbCreator.create(f));b.callback&&b.callback(d,i,g,h,e)}},_retryUpload:function(b,c){var d=parseInt("object"==typeof c?c.attr("data-jfiler-index"):c),f=m._itFl.filter(function(a,b){return a.id==d});return f.length>0&&(!l.uploadFile||a.isEmptyObject(l.uploadFile)||f[0].uploaded?void 0:(m._itFc=f[0],e.prop("jFiler").current_file=m._itFc,m._upload(d),!0))},_remove:function(b,d){if(d.binded){if("undefined"!=typeof d.data.id&&(d=i.find(l.templates._selectors.item+"[data-jfiler-index='"+d.data.id+"']"),0==d.length))return!1;d.data.el&&(d=d.data.el)}var f=function(b){var d=g.find("input[name^='jfiler-items-exclude-']:hidden").first();0==d.length&&(d=a('<input type="hidden" name="jfiler-items-exclude-'+(l.excludeName?l.excludeName:("[]"!=e.attr("name").slice(-2)?e.attr("name"):e.attr("name").substring(0,e.attr("name").length-2))+"-"+c)+'">'),d.appendTo(g)),b&&a.isArray(b)&&(b=JSON.stringify(b),d.val(b))},j=function(b,c){var d=m._itFl[c],e=[];if(d.file._choosed||d.file._appended||d.uploaded){m._itFr.push(d);for(var g=m._itFl.filter(function(a){return a.file.name==d.file.name}),h=0;h<m._itFr.length;h++)l.addMore&&m._itFr[h]==d&&g.length>0&&(m._itFr[h].remove_name=g.indexOf(d)+"://"+m._itFr[h].file.name),e.push(m._itFr[h].remove_name?m._itFr[h].remove_name:m._itFr[h].file.name)}f(e),m._itFl.splice(c,1),m._itFl.length<1?(m._reset(),m._clear()):m._set("feedback",m._itFl.length+" "+l.captions.feedback2),b.fadeOut("fast",function(){a(this).remove()})},k=d.get(0).jfiler_id||d.attr("data-jfiler-index"),n=null;for(var o in m._itFl)"length"!==o&&m._itFl.hasOwnProperty(o)&&m._itFl[o].id==k&&(n=o);return!!m._itFl.hasOwnProperty(n)&&(m._itFl[n].ajax?(m._itFl[n].ajax.abort(),void j(d,n)):void(null!=l.onRemove&&"function"==typeof l.onRemove&&l.onRemove(d,m._itFl[n].file,n,i,g,h,e)===!1||j(d,n)))},_addToMemory:function(b){m._itFl.push({id:m._itFl.length,file:m.files[b],html:a(),ajax:!1,uploaded:!1}),(l.addMore||m.files[b]._appended)&&(m._itFl[m._itFl.length-1].input=e),m._itFc=m._itFl[m._itFl.length-1],e.prop("jFiler").files_list=m._itFl,e.prop("jFiler").current_file=m._itFc},_assets:{bytesToSize:function(a){if(0==a)return"0 Byte";var b=1e3,c=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],d=Math.floor(Math.log(a)/Math.log(b));return(a/Math.pow(b,d)).toPrecision(3)+" "+c[d]},hasAttr:function(a,b){var b=b?b:e,c=b.attr(a);return!(!c||"undefined"==typeof c)},getIcon:function(b,c){var d=["audio","image","text","video"];return a.inArray(c,d)>-1?'<i class="icon-jfi-file-'+c+" jfi-file-ext-"+b+'"></i>':'<i class="icon-jfi-file-o jfi-file-type-'+c+" jfi-file-ext-"+b+'"></i>'},textParse:function(b,c){switch(c=a.extend({},{limit:l.limit,maxSize:l.maxSize,fileMaxSize:l.fileMaxSize,extensions:l.extensions?l.extensions.join(","):null},c&&a.isPlainObject(c)?c:{},l.options),typeof b){case"string":return b.replace(/\{\{fi-(.*?)\}\}/g,function(a,b){return b=b.replace(/ /g,""),b.match(/(.*?)\|limitTo\:(\d+)/)?b.replace(/(.*?)\|limitTo\:(\d+)/,function(a,b,d){var b=c[b]?c[b]:"",e=b.substring(0,d);return e=b.length>e.length?e.substring(0,e.length-3)+"...":e}):c[b]?c[b]:""});case"function":return b(c);default:return b}},text2Color:function(a){if(!a||0==a.length)return!1;for(var b=0,c=0;b<a.length;c=a.charCodeAt(b++)+((c<<5)-c));for(var b=0,d="#";b<3;d+=("00"+(c>>2*b++&255).toString(16)).slice(-2));return d}},files:null,_itFl:[],_itFc:null,_itFr:[],_itPl:[],_ajFc:0};return e.on("filer.append",function(a,b){m._append(a,b)}).on("filer.remove",function(a,b){b.binded=!0,m._remove(a,b)}).on("filer.reset",function(a){return m._reset(),m._clear(),!0}).on("filer.generateList",function(a,b){return m._getList(a,b)}).on("filer.retry",function(a,b){return m._retryUpload(a,b)}),m.init(),this})},a.fn.filer.defaults={limit:null,maxSize:null,fileMaxSize:null,extensions:null,changeInput:!0,showThumbs:!1,appendTo:null,theme:"default",templates:{box:'<ul class="jFiler-items-list jFiler-items-default"></ul>',item:'<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info pull-left"><div class="jFiler-item-title" title="{{fi-name}}">{{fi-name | limitTo:30}}</div><div class="jFiler-item-others"><span>size: {{fi-size2}}</span><span>type: {{fi-extension}}</span><span class="jFiler-item-status">{{fi-progressBar}}</span></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',itemAppend:'<li class="jFiler-item"><div class="jFiler-item-container"><div class="jFiler-item-inner"><div class="jFiler-item-icon pull-left">{{fi-icon}}</div><div class="jFiler-item-info pull-left"><div class="jFiler-item-title">{{fi-name | limitTo:35}}</div><div class="jFiler-item-others"><span>size: {{fi-size2}}</span><span>type: {{fi-extension}}</span><span class="jFiler-item-status"></span></div><div class="jFiler-item-assets"><ul class="list-inline"><li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li></ul></div></div></div></div></li>',progressBar:'<div class="bar"></div>',itemAppendToEnd:!1,removeConfirmation:!0,canvasImage:!0,_selectors:{list:".jFiler-items-list",item:".jFiler-item",progressBar:".bar",remove:".jFiler-item-trash-action"}},files:null,uploadFile:null,dragDrop:null,addMore:!1,allowDuplicates:!1,clipBoardPaste:!0,excludeName:null,beforeRender:null,afterRender:null,beforeShow:null,beforeSelect:null,onSelect:null,onFileCheck:null,afterShow:null,onRemove:null,onEmpty:null,options:null,dialogs:{alert:function(a){return alert(a)},confirm:function(a,b){confirm(a)?b():null}},captions:{button:"Choose Files",feedback:"Choose files To Upload",feedback2:"files were chosen",drop:"Drop file here to Upload",removeConfirmation:"Are you sure you want to remove this file?",errors:{filesLimit:"Only {{fi-limit}} files are allowed to be uploaded.",filesType:"Only Images are allowed to be uploaded.",filesSize:"{{fi-name}} is too large! Please upload file up to {{fi-fileMaxSize}} MB.",filesSizeAll:"Files you've choosed are too large! Please upload files up to {{fi-maxSize}} MB.",folderUpload:"You are not allowed to upload folders."}}}}(jQuery);
/**jQuery.filer minified*/

/**
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k)); if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q, u =a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r,margin:a.css("margin")}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h), h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}), a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize", y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);
/**Sticky-kit v1.1.2 END*/

/**
 * equalHeight v1.0.1
 *
 * Compressed code of equalHeight v1.0.1:
 */
!function(t){t.fn.equalHeight=function(e){var e=t.extend({amount:2,useParent:!1,parent:null,resize:!1,ratio:1,item:null},e),r=t(this);if(r.removeAttr("style"),1==e.useParent){if(null==e.parent)var a=t(this).parent().outerWidth();else var a=e.parent.outerWidth();var n=null==e.item?t(this).outerWidth(!0):e.item.outerWidth(!0);e.amount=parseInt(a/n)*e.ratio,newAmount=e.amount}var i=this;return 1==e.resize&&1==e.useParent&&t(window).resize(function(){if(r.removeAttr("style"),1==e.useParent){if(null==e.parent)var a=i.parent().outerWidth();else var a=e.parent.outerWidth();var n=null==e.item?i.outerWidth(!0):e.item.outerWidth(!0);e.amount=parseInt(a/n)*e.ratio}return i.each(function(a){if(a%e.amount===0){for(var n=t(this),i=(n.index(),[]),u=[n],o=1;o<e.amount;o++){var h=t(r[a+o]);u.push(h)}for(var s=0;s<e.amount;s++)i.push(u[s].outerHeight());var m=Math.max.apply(Math,i);t(u).each(function(e){var r=t(this);r.css("height",m)})}})}),this.each(function(a){if(a%e.amount===0){for(var n=t(this),i=(n.index(),[]),u=[n],o=1;o<e.amount;o++){var h=t(r[a+o]);u.push(h)}for(var s=0;s<e.amount;s++)i.push(u[s].outerHeight());var m=Math.max.apply(Math,i);t(u).each(function(e){var r=t(this);r.css("height",m)})}})}}(jQuery);
/**equalHeight END*/

/**
 * debouncedresize
 */
!function(e){var n,t,i=e.event;n=i.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,r){var o=this,s=arguments,u=function(){e.type="debouncedresize",i.dispatch.apply(o,s)};t&&clearTimeout(t),r?u():t=setTimeout(u,n.threshold)},threshold:150}}(jQuery);
/**debouncedresize*/

/**
 * TouchSwipe 1.6
 * https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * */
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{if(typeof module!=="undefined"&&module.exports){a(require("jquery"))}else{a(jQuery)}}}(function(f){var y="1.6.15",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!a,d=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!a,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipe=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipe")}}else{if(F&&typeof H==="object"){F.option.apply(this,arguments)}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}}return G};f.fn.swipe.version=y;f.fn.swipe.defaults=n;f.fn.swipe.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipe.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipe.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipe.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,au){var au=f.extend({},au);var az=(a||d||!au.fallbackToMouseEvents),K=az?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",ax=az?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=az?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=az?(d?"mouseleave":null):"mouseleave",aD=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ag=0,aP=null,a2=null,ac=0,a1=0,aZ=0,H=1,ap=0,aJ=0,N=null;var aR=f(a5);var aa="start";var X=0;var aQ={};var U=0,a3=0,a6=0,ay=0,O=0;var aW=null,af=null;try{aR.bind(K,aN);aR.bind(aD,ba)}catch(aj){f.error("events not supported "+K+","+aD+" on jQuery.swipe")}this.enable=function(){aR.bind(K,aN);aR.bind(aD,ba);return aR};this.disable=function(){aK();return aR};this.destroy=function(){aK();aR.data(C,null);aR=null};this.option=function(bd,bc){if(typeof bd==="object"){au=f.extend(au,bd)}else{if(au[bd]!==undefined){if(bc===undefined){return au[bd]}else{au[bd]=bc}}else{if(!bd){return au}else{f.error("Option "+bd+" does not exist on jQuery.swipe.options")}}}return null};function aN(be){if(aB()){return}if(f(be.target).closest(au.excludedElements,aR).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{if(au.preventDefaultEvents!==false){be.preventDefault()}}ag=0;aP=null;a2=null;aJ=null;ac=0;a1=0;aZ=0;H=1;ap=0;N=ab();S();ai(0,bc);if(!bg||(X===au.fingers||au.fingers===i)||aX()){U=ar();if(X==2){ai(1,bg[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}if(au.swipeStatus||au.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(au.hold){af=setTimeout(f.proxy(function(){aR.trigger("hold",[bf.target]);if(au.hold){bd=au.hold.call(aR,bf,bf.target)}},this),au.longTapThreshold)}an(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||al()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aH(bd);a3=ar();if(bj){X=bj.length}if(au.hold){clearTimeout(af)}aa=k;if(X==2){if(a1==0){ai(1,bj[1]);a1=aZ=at(aQ[0].start,aQ[1].start)}else{aH(bj[1]);aZ=at(aQ[0].end,aQ[1].end);aJ=aq(aQ[0].end,aQ[1].end)}H=a8(a1,aZ);ap=Math.abs(a1-aZ)}if((X===au.fingers||au.fingers===i)||!bj||aX()){aP=aL(bg.start,bg.end);a2=aL(bg.last,bg.end);ak(bf,a2);ag=aS(bg.start,bg.end);ac=aM();aI(aP,ag);be=P(bi,aa);if(!au.triggerOnTouchEnd||au.triggerOnTouchLeave){var bc=true;if(au.triggerOnTouchLeave){var bh=aY(this);bc=F(bg.end,bh)}if(!au.triggerOnTouchEnd&&bc){aa=aC(k)}else{if(au.triggerOnTouchLeave&&!bc){aa=aC(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length&&!al()){G(bd);return true}else{if(be.length&&al()){return true}}}if(al()){X=ay}a3=ar();ac=aM();if(bb()||!am()){aa=q;P(bd,aa)}else{if(au.triggerOnTouchEnd||(au.triggerOnTouchEnd==false&&aa===k)){if(au.preventDefaultEvents!==false){bc.preventDefault()}aa=h;P(bd,aa)}else{if(!au.triggerOnTouchEnd&&a7()){aa=h;aF(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}an(false);return null}function ba(){X=0;a3=0;U=0;a1=0;aZ=0;H=1;S();an(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(au.triggerOnTouchLeave){aa=aC(h);P(bd,aa)}}function aK(){aR.unbind(K,aN);aR.unbind(aD,ba);aR.unbind(ax,a4);aR.unbind(V,M);if(T){aR.unbind(T,L)}an(false)}function aC(bg){var bf=bg;var be=aA();var bd=am();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!au.triggerOnTouchEnd||au.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&au.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if(J()||W()){bd=aF(be,bc,l)}if((Q()||aX())&&bd!==false){bd=aF(be,bc,t)}if(aG()&&bd!==false){bd=aF(be,bc,j)}else{if(ao()&&bd!==false){bd=aF(be,bc,b)}else{if(ah()&&bd!==false){bd=aF(be,bc,B)}}}if(bc===q){if(W()){bd=aF(be,bc,l)}if(aX()){bd=aF(be,bc,t)}ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aF(bf,bc,be){var bd;if(be==l){aR.trigger("swipeStatus",[bc,aP||null,ag||0,ac||0,X,aQ,a2]);if(au.swipeStatus){bd=au.swipeStatus.call(aR,bf,bc,aP||null,ag||0,ac||0,X,aQ,a2);if(bd===false){return false}}if(bc==h&&aV()){clearTimeout(aW);clearTimeout(af);aR.trigger("swipe",[aP,ag,ac,X,aQ,a2]);if(au.swipe){bd=au.swipe.call(aR,bf,aP,ag,ac,X,aQ,a2);if(bd===false){return false}}switch(aP){case p:aR.trigger("swipeLeft",[aP,ag,ac,X,aQ,a2]);if(au.swipeLeft){bd=au.swipeLeft.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case o:aR.trigger("swipeRight",[aP,ag,ac,X,aQ,a2]);if(au.swipeRight){bd=au.swipeRight.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case e:aR.trigger("swipeUp",[aP,ag,ac,X,aQ,a2]);if(au.swipeUp){bd=au.swipeUp.call(aR,bf,aP,ag,ac,X,aQ,a2)}break;case x:aR.trigger("swipeDown",[aP,ag,ac,X,aQ,a2]);if(au.swipeDown){bd=au.swipeDown.call(aR,bf,aP,ag,ac,X,aQ,a2)}break}}}if(be==t){aR.trigger("pinchStatus",[bc,aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchStatus){bd=au.pinchStatus.call(aR,bf,bc,aJ||null,ap||0,ac||0,X,H,aQ);if(bd===false){return false}}if(bc==h&&a9()){switch(aJ){case c:aR.trigger("pinchIn",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchIn){bd=au.pinchIn.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break;case A:aR.trigger("pinchOut",[aJ||null,ap||0,ac||0,X,H,aQ]);if(au.pinchOut){bd=au.pinchOut.call(aR,bf,aJ||null,ap||0,ac||0,X,H,aQ)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);if(Z()&&!I()){O=ar();aW=setTimeout(f.proxy(function(){O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}},this),au.doubleTapThreshold)}else{O=null;aR.trigger("tap",[bf.target]);if(au.tap){bd=au.tap.call(aR,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aW);clearTimeout(af);O=null;aR.trigger("doubletap",[bf.target]);if(au.doubleTap){bd=au.doubleTap.call(aR,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aW);O=null;aR.trigger("longtap",[bf.target]);if(au.longTap){bd=au.longTap.call(aR,bf,bf.target)}}}}}return bd}function am(){var bc=true;if(au.threshold!==null){bc=ag>=au.threshold}return bc}function bb(){var bc=false;if(au.cancelThreshold!==null&&aP!==null){bc=(aT(aP)-ag)>=au.cancelThreshold}return bc}function ae(){if(au.pinchThreshold!==null){return ap>=au.pinchThreshold}return true}function aA(){var bc;if(au.maxTimeThreshold){if(ac>=au.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function ak(bc,bd){if(au.preventDefaultEvents===false){return}if(au.allowPageScroll===m){bc.preventDefault()}else{var be=au.allowPageScroll===s;switch(bd){case p:if((au.swipeLeft&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((au.swipeRight&&be)||(!be&&au.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((au.swipeUp&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((au.swipeDown&&be)||(!be&&au.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aO();var bc=Y();var be=ae();return bd&&bc&&be}function aX(){return !!(au.pinchStatus||au.pinchIn||au.pinchOut)}function Q(){return !!(a9()&&aX())}function aV(){var bf=aA();var bh=am();var be=aO();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(au.swipe||au.swipeStatus||au.swipeLeft||au.swipeRight||au.swipeUp||au.swipeDown)}function J(){return !!(aV()&&W())}function aO(){return((X===au.fingers||au.fingers===i)||!a)}function Y(){return aQ[0].end.x!==0}function a7(){return !!(au.tap)}function Z(){return !!(au.doubleTap)}function aU(){return !!(au.longTap)}function R(){if(O==null){return false}var bc=ar();return(Z()&&((bc-O)<=au.doubleTapThreshold))}function I(){return R()}function aw(){return((X===1||!a)&&(isNaN(ag)||ag<au.threshold))}function a0(){return((ac>au.longTapThreshold)&&(ag<r))}function ah(){return !!(aw()&&a7())}function aG(){return !!(R()&&Z())}function ao(){return !!(a0()&&aU())}function G(bc){a6=ar();ay=bc.touches.length+1}function S(){a6=0;ay=0}function al(){var bc=false;if(a6){var bd=ar()-a6;if(bd<=au.fingerReleaseThreshold){bc=true}}return bc}function aB(){return !!(aR.data(C+"_intouch")===true)}function an(bc){if(!aR){return}if(bc===true){aR.bind(ax,a4);aR.bind(V,M);if(T){aR.bind(T,L)}}else{aR.unbind(ax,a4,false);aR.unbind(V,M,false);if(T){aR.unbind(T,L,false)}}aR.data(C+"_intouch",bc===true)}function ai(be,bc){var bd={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};bd.start.x=bd.last.x=bd.end.x=bc.pageX||bc.clientX;bd.start.y=bd.last.y=bd.end.y=bc.pageY||bc.clientY;aQ[be]=bd;return bd}function aH(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);if(bd===null){bd=ai(be,bc)}bd.last.x=bd.end.x;bd.last.y=bd.end.y;bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bc){return aQ[bc]||null}function aI(bc,bd){bd=Math.max(bd,aT(bc));N[bc].distance=bd}function aT(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=av(p);bc[o]=av(o);bc[e]=av(e);bc[x]=av(x);return bc}function av(bc){return{direction:bc,distance:0}}function aM(){return a3-U}function at(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function aq(){if(H<1){return A}else{return c}}function aS(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aE(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aL(bd,bc){var be=aE(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function ar(){var bc=new Date();return bc.getTime()}function aY(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));
/**TouchSwipe 1.6 end*/

/**
 * rippleria
 * https://github.com/nsept/rippleria
 * */
!function(t,e,i,n){function r(e,i){this.$element=t(e),this.options=t.extend({},r.Defaults,this._getOptionsFromElementAttributes(),i),this._prepare(),this._bind()}r.prototype._bind=function(){var r,o,a,s,p,c=this.$element,l=this.options;s="ontouchend"in e||e.DocumentTouch&&i instanceof DocumentTouch,p=1==s?"touchend.rippleria":"click.rippleria",this.$element.bind(p,function(e){var i=t("<div class='rippleria-ink'/>");c.append(i),l.color!=n&&i.css("background-color",l.color);var p="rippleria "+l.duration/1e3+"s "+l.easing;if(i.css("animation",p),i.css("-webkit-animation",p),setTimeout(function(){i.remove()},parseFloat(l.duration)),i.height()||i.width()||(r=Math.max(c.outerWidth(),c.outerHeight()),i.css({height:r,width:r})),1==s){var h=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];o=h.pageX-c.offset().left-i.width()/2,a=h.pageY-c.offset().top-i.height()/2}else o=e.pageX-c.offset().left-i.width()/2,a=e.pageY-c.offset().top-i.height()/2;i.css({top:a+"px",left:o+"px"})})},r.prototype._prepare=function(){var t=this.$element;if("static"==t.css("position")&&t.css("position","relative"),t.css("overflow","hidden"),t.find("img")[0]!=n&&t.on("dragstart",function(t){t.preventDefault()}),this.options.detectBrightness){var e,i,r,o,a=this.$element.css("background-color");if("transparent"==a){var s=function(t){var e=t.css("background-color");return 0!=t.length&&"transparent"==e?s(t.parent()):e};a=s(this.$element.parent())}a.match(/^rgba/)?(a=a.match(/rgba\(([^)]+)\)/)[1],a=a.split(/ *, */).map(Number),e=a[0],i=a[1],r=a[2]):a.match(/^rgb/)?(a=a.match(/rgb\(([^)]+)\)/)[1],a=a.split(/ *, */).map(Number),e=a[0],i=a[1],r=a[2]):"#"==a[0]&&7==a.length?(e=parseInt(a.slice(1,3),16),i=parseInt(a.slice(3,5),16),r=parseInt(a.slice(5,7),16)):"#"==a[0]&&4==a.length&&(e=parseInt(a[1]+a[1],16),i=parseInt(a[2]+a[2],16),r=parseInt(a[3]+a[3],16)),o=(299*e+587*i+114*r)/1e3,o>150&&this.$element.addClass("rippleria-dark")}},r.prototype._getOptionsFromElementAttributes=function(){var e=this;return attrs={},t.each(r.Defaults,function(t,i){var n=e.$element.attr("data-rippleria-"+t);null!=n&&(attrs[t]=n)}),attrs},r.prototype.changeColor=function(t){this.options.color=t},r.prototype.changeEasing=function(t){this.options.easing=t},r.prototype.changeDuration=function(t){this.options.duration=t},r.Defaults={duration:750,easing:"linear",color:n,detectBrightness:!0},t.fn.rippleria=function(e){var i=Array.prototype.slice.call(arguments,1);return this.each(function(){var n=t(this),o=n.data("rippleria");o||(o=new r(this,"object"==typeof e&&e),n.data("rippleria",o)),"string"==typeof e&&"_"!==e.charAt(0)&&o[e].apply(o,i)})},t(function(){t("[data-rippleria]").rippleria()})}(window.jQuery,window,document);
/**rippleria end*/

//jquery touch events
"use strict";!function(e){function t(){var e=s();e!==r&&(r=e,u.trigger("orientationchange"))}function a(t,a,o,n){var i=o.type;o.type=a,e.event.dispatch.call(t,o,n),o.type=i}e.attrFn=e.attrFn||{};var o=navigator.userAgent.toLowerCase(),n=o.indexOf("chrome")>-1&&(o.indexOf("windows")>-1||o.indexOf("macintosh")>-1||o.indexOf("linux")>-1)&&o.indexOf("mobile")<0&&o.indexOf("android")<0,i={tap_pixel_range:5,swipe_h_threshold:50,swipe_v_threshold:50,taphold_threshold:750,doubletap_int:500,touch_capable:"ontouchstart"in window&&!n,orientation_support:"orientation"in window&&"onorientationchange"in window,startevent:"ontouchstart"in window&&!n?"touchstart":"mousedown",endevent:"ontouchstart"in window&&!n?"touchend":"mouseup",moveevent:"ontouchstart"in window&&!n?"touchmove":"mousemove",tapevent:"ontouchstart"in window&&!n?"tap":"click",scrollevent:"ontouchstart"in window&&!n?"touchmove":"scroll",hold_timer:null,tap_timer:null};e.isTouchCapable=function(){return i.touch_capable},e.getStartEvent=function(){return i.startevent},e.getEndEvent=function(){return i.endevent},e.getMoveEvent=function(){return i.moveevent},e.getTapEvent=function(){return i.tapevent},e.getScrollEvent=function(){return i.scrollevent},e.each(["tapstart","tapend","tapmove","tap","tap2","tap3","tap4","singletap","doubletap","taphold","swipe","swipeup","swiperight","swipedown","swipeleft","swipeend","scrollstart","scrollend","orientationchange"],function(t,a){e.fn[a]=function(e){return e?this.on(a,e):this.trigger(a)},e.attrFn[a]=!0}),e.event.special.tapstart={setup:function(){var t=this,o=e(t);o.on(i.startevent,function n(e){if(o.data("callee",n),e.which&&1!==e.which)return!1;var c=e.originalEvent,s={position:{x:i.touch_capable?c.touches[0].screenX:e.screenX,y:i.touch_capable?c.touches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?c.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?c.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};return a(t,"tapstart",e,s),!0})},remove:function(){e(this).off(i.startevent,e(this).data.callee)}},e.event.special.tapmove={setup:function(){var t=this,o=e(t);o.on(i.moveevent,function n(e){o.data("callee",n);var c=e.originalEvent,s={position:{x:i.touch_capable?c.touches[0].screenX:e.screenX,y:i.touch_capable?c.touches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?c.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?c.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};return a(t,"tapmove",e,s),!0})},remove:function(){e(this).off(i.moveevent,e(this).data.callee)}},e.event.special.tapend={setup:function(){var t=this,o=e(t);o.on(i.endevent,function n(e){o.data("callee",n);var c=e.originalEvent,s={position:{x:i.touch_capable?c.changedTouches[0].screenX:e.screenX,y:i.touch_capable?c.changedTouches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?c.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?c.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};return a(t,"tapend",e,s),!0})},remove:function(){e(this).off(i.endevent,e(this).data.callee)}},e.event.special.taphold={setup:function(){var t,o=this,n=e(o),c={x:0,y:0},s=0,r=0;n.on(i.startevent,function p(e){if(e.which&&1!==e.which)return!1;n.data("tapheld",!1),t=e.target;var h=e.originalEvent,u=Date.now(),l={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},f={x:i.touch_capable?h.touches[0].pageX-h.touches[0].target.offsetLeft:e.offsetX,y:i.touch_capable?h.touches[0].pageY-h.touches[0].target.offsetTop:e.offsetY};return c.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,c.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,s=c.x,r=c.y,i.hold_timer=window.setTimeout(function(){var g=c.x-s,d=c.y-r;if(e.target==t&&(c.x==s&&c.y==r||g>=-i.tap_pixel_range&&g<=i.tap_pixel_range&&d>=-i.tap_pixel_range&&d<=i.tap_pixel_range)){n.data("tapheld",!0);var v=Date.now(),w={x:i.touch_capable?h.touches[0].screenX:e.screenX,y:i.touch_capable?h.touches[0].screenY:e.screenY},_={x:Math.round(i.touch_capable?h.changedTouches[0].pageX-n.offset().left:e.pageX-n.offset().left),y:Math.round(i.touch_capable?h.changedTouches[0].pageY-n.offset().top:e.pageY-n.offset().top)},T=v-u,x={startTime:u,endTime:v,startPosition:l,startOffset:f,endPosition:w,endOffset:_,duration:T,target:e.target};n.data("callee1",p),a(o,"taphold",e,x)}},i.taphold_threshold),!0}).on(i.endevent,function h(){n.data("callee2",h),n.data("tapheld",!1),window.clearTimeout(i.hold_timer)}).on(i.moveevent,function u(e){n.data("callee3",u),s=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,r=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2).off(i.moveevent,e(this).data.callee3)}},e.event.special.doubletap={setup:function(){var t,o,n,c,s=this,r=e(s),p=null,h=!1;r.on(i.startevent,function u(e){return e.which&&1!==e.which?!1:(r.data("doubletapped",!1),t=e.target,r.data("callee1",u),n=e.originalEvent,p||(p={position:{x:i.touch_capable?n.touches[0].screenX:e.screenX,y:i.touch_capable?n.touches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?n.changedTouches[0].pageX-r.offset().left:e.pageX-r.offset().left),y:Math.round(i.touch_capable?n.changedTouches[0].pageY-r.offset().top:e.pageY-r.offset().top)},time:Date.now(),target:e.target}),!0)}).on(i.endevent,function l(e){var u=Date.now(),f=r.data("lastTouch")||u+1,g=u-f;if(window.clearTimeout(o),r.data("callee2",l),g<i.doubletap_int&&e.target==t&&g>100){r.data("doubletapped",!0),window.clearTimeout(i.tap_timer);var d={position:{x:i.touch_capable?e.originalEvent.changedTouches[0].screenX:e.screenX,y:i.touch_capable?e.originalEvent.changedTouches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?n.changedTouches[0].pageX-r.offset().left:e.pageX-r.offset().left),y:Math.round(i.touch_capable?n.changedTouches[0].pageY-r.offset().top:e.pageY-r.offset().top)},time:Date.now(),target:e.target},v={firstTap:p,secondTap:d,interval:d.time-p.time};h||(a(s,"doubletap",e,v),p=null),h=!0,c=window.setTimeout(function(){h=!1},i.doubletap_int)}else r.data("lastTouch",u),o=window.setTimeout(function(){p=null,window.clearTimeout(o)},i.doubletap_int,[e]);r.data("lastTouch",u)})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.singletap={setup:function(){var t=this,o=e(t),n=null,c=null,s={x:0,y:0};o.on(i.startevent,function r(e){return e.which&&1!==e.which?!1:(c=Date.now(),n=e.target,o.data("callee1",r),s.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,s.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,!0)}).on(i.endevent,function p(e){if(o.data("callee2",p),e.target==n){var r=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,h=e.originalEvent.changedTouches?e.originalEvent.changedTouches[0].pageY:e.pageY;i.tap_timer=window.setTimeout(function(){if(!o.data("doubletapped")&&!o.data("tapheld")&&s.x==r&&s.y==h){var n=e.originalEvent,p={position:{x:i.touch_capable?n.changedTouches[0].screenX:e.screenX,y:i.touch_capable?n.changedTouches[0].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?n.changedTouches[0].pageX-o.offset().left:e.pageX-o.offset().left),y:Math.round(i.touch_capable?n.changedTouches[0].pageY-o.offset().top:e.pageY-o.offset().top)},time:Date.now(),target:e.target};p.time-c<i.taphold_threshold&&a(t,"singletap",e,p)}},i.doubletap_int)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.tap={setup:function(){var t,o,n=this,c=e(n),s=!1,r=null,p={x:0,y:0};c.on(i.startevent,function h(e){return c.data("callee1",h),e.which&&1!==e.which?!1:(s=!0,p.x=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageX:e.pageX,p.y=e.originalEvent.targetTouches?e.originalEvent.targetTouches[0].pageY:e.pageY,t=Date.now(),r=e.target,o=e.originalEvent.targetTouches?e.originalEvent.targetTouches:[e],!0)}).on(i.endevent,function u(e){c.data("callee2",u);var h=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageX:e.pageX,l=e.originalEvent.targetTouches?e.originalEvent.changedTouches[0].pageY:e.pageY,f=p.x-h,g=p.y-l;if(r==e.target&&s&&Date.now()-t<i.taphold_threshold&&(p.x==h&&p.y==l||f>=-i.tap_pixel_range&&f<=i.tap_pixel_range&&g>=-i.tap_pixel_range&&g<=i.tap_pixel_range)){for(var d=e.originalEvent,v=[],w=0;w<o.length;w++){var _={position:{x:i.touch_capable?d.changedTouches[w].screenX:e.screenX,y:i.touch_capable?d.changedTouches[w].screenY:e.screenY},offset:{x:Math.round(i.touch_capable?d.changedTouches[w].pageX-c.offset().left:e.pageX-c.offset().left),y:Math.round(i.touch_capable?d.changedTouches[w].pageY-c.offset().top:e.pageY-c.offset().top)},time:Date.now(),target:e.target};v.push(_)}a(n,"tap",e,v)}})},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.endevent,e(this).data.callee2)}},e.event.special.swipe={setup:function(){function t(a){s=e(a.currentTarget),s.data("callee1",t),h.x=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageX:a.pageX,h.y=a.originalEvent.targetTouches?a.originalEvent.targetTouches[0].pageY:a.pageY,u.x=h.x,u.y=h.y,r=!0;var o=a.originalEvent;n={position:{x:i.touch_capable?o.touches[0].screenX:a.screenX,y:i.touch_capable?o.touches[0].screenY:a.screenY},offset:{x:Math.round(i.touch_capable?o.changedTouches[0].pageX-s.offset().left:a.pageX-s.offset().left),y:Math.round(i.touch_capable?o.changedTouches[0].pageY-s.offset().top:a.pageY-s.offset().top)},time:Date.now(),target:a.target}}function a(t){s=e(t.currentTarget),s.data("callee2",a),u.x=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,u.y=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;var o,c=s.parent().data("xthreshold")?s.parent().data("xthreshold"):s.data("xthreshold"),l=s.parent().data("ythreshold")?s.parent().data("ythreshold"):s.data("ythreshold"),f="undefined"!=typeof c&&c!==!1&&parseInt(c)?parseInt(c):i.swipe_h_threshold,g="undefined"!=typeof l&&l!==!1&&parseInt(l)?parseInt(l):i.swipe_v_threshold;if(h.y>u.y&&h.y-u.y>g&&(o="swipeup"),h.x<u.x&&u.x-h.x>f&&(o="swiperight"),h.y<u.y&&u.y-h.y>g&&(o="swipedown"),h.x>u.x&&h.x-u.x>f&&(o="swipeleft"),void 0!=o&&r){h.x=0,h.y=0,u.x=0,u.y=0,r=!1;var d=t.originalEvent,v={position:{x:i.touch_capable?d.touches[0].screenX:t.screenX,y:i.touch_capable?d.touches[0].screenY:t.screenY},offset:{x:Math.round(i.touch_capable?d.changedTouches[0].pageX-s.offset().left:t.pageX-s.offset().left),y:Math.round(i.touch_capable?d.changedTouches[0].pageY-s.offset().top:t.pageY-s.offset().top)},time:Date.now(),target:t.target},w=Math.abs(n.position.x-v.position.x),_=Math.abs(n.position.y-v.position.y),T={startEvnt:n,endEvnt:v,direction:o.replace("swipe",""),xAmount:w,yAmount:_,duration:v.time-n.time};p=!0,s.trigger("swipe",T).trigger(o,T)}}function o(t){s=e(t.currentTarget);var a="";if(s.data("callee3",o),p){var c=s.data("xthreshold"),h=s.data("ythreshold"),u="undefined"!=typeof c&&c!==!1&&parseInt(c)?parseInt(c):i.swipe_h_threshold,l="undefined"!=typeof h&&h!==!1&&parseInt(h)?parseInt(h):i.swipe_v_threshold,f=t.originalEvent,g={position:{x:i.touch_capable?f.changedTouches[0].screenX:t.screenX,y:i.touch_capable?f.changedTouches[0].screenY:t.screenY},offset:{x:Math.round(i.touch_capable?f.changedTouches[0].pageX-s.offset().left:t.pageX-s.offset().left),y:Math.round(i.touch_capable?f.changedTouches[0].pageY-s.offset().top:t.pageY-s.offset().top)},time:Date.now(),target:t.target};n.position.y>g.position.y&&n.position.y-g.position.y>l&&(a="swipeup"),n.position.x<g.position.x&&g.position.x-n.position.x>u&&(a="swiperight"),n.position.y<g.position.y&&g.position.y-n.position.y>l&&(a="swipedown"),n.position.x>g.position.x&&n.position.x-g.position.x>u&&(a="swipeleft");var d=Math.abs(n.position.x-g.position.x),v=Math.abs(n.position.y-g.position.y),w={startEvnt:n,endEvnt:g,direction:a.replace("swipe",""),xAmount:d,yAmount:v,duration:g.time-n.time};s.trigger("swipeend",w)}r=!1,p=!1}var n,c=this,s=e(c),r=!1,p=!1,h={x:0,y:0},u={x:0,y:0};s.on(i.startevent,t),s.on(i.moveevent,a),s.on(i.endevent,o)},remove:function(){e(this).off(i.startevent,e(this).data.callee1).off(i.moveevent,e(this).data.callee2).off(i.endevent,e(this).data.callee3)}},e.event.special.scrollstart={setup:function(){function t(e,t){o=t,a(c,o?"scrollstart":"scrollend",e)}var o,n,c=this,s=e(c);s.on(i.scrollevent,function r(e){s.data("callee",r),o||t(e,!0),clearTimeout(n),n=setTimeout(function(){t(e,!1)},50)})},remove:function(){e(this).off(i.scrollevent,e(this).data.callee)}};var c,s,r,p,h,u=e(window),l={0:!0,180:!0};if(i.orientation_support){var f=window.innerWidth||u.width(),g=window.innerHeight||u.height(),d=50;p=f>g&&f-g>d,h=l[window.orientation],(p&&h||!p&&!h)&&(l={"-90":!0,90:!0})}e.event.special.orientationchange=c={setup:function(){return i.orientation_support?!1:(r=s(),u.on("throttledresize",t),!0)},teardown:function(){return i.orientation_support?!1:(u.off("throttledresize",t),!0)},add:function(e){var t=e.handler;e.handler=function(e){return e.orientation=s(),t.apply(this,arguments)}}},e.event.special.orientationchange.orientation=s=function(){var e=!0,t=document.documentElement;return e=i.orientation_support?l[window.orientation]:t&&t.clientWidth/t.clientHeight<1.1,e?"portrait":"landscape"},e.event.special.throttledresize={setup:function(){e(this).on("resize",x)},teardown:function(){e(this).off("resize",x)}};var v,w,_,T=250,x=function(){w=Date.now(),_=w-y,_>=T?(y=w,e(this).trigger("throttledresize")):(v&&window.clearTimeout(v),v=window.setTimeout(t,T-_))},y=0;e.each({scrollend:"scrollstart",swipeup:"swipe",swiperight:"swipe",swipedown:"swipe",swipeleft:"swipe",swipeend:"swipe",tap2:"tap"},function(t,a){e.event.special[t]={setup:function(){e(this).on(a,e.noop)}}})}(jQuery);

/*
 * Input Mask Core
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 -	Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */
(function (factory) {
	if (typeof define === "function" && define.amd) {
		define("inputmask", ["inputmask.dependencyLib"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("./inputmask.dependencyLib"));
	} else {
		factory(window.dependencyLib || jQuery);
	}
}
(function ($) {
	var ua = navigator.userAgent,
		mobile = /mobile/i.test(ua),
		iemobile = /iemobile/i.test(ua),
		iphone = /iphone/i.test(ua) && !iemobile,
		android = /android/i.test(ua) && !iemobile;

	function Inputmask(alias, options, internal) {
		//allow instanciating without new
		if (!(this instanceof Inputmask)) {
			return new Inputmask(alias, options, internal);
		}

		this.el = undefined;
		this.events = {};
		this.maskset = undefined;
		this.refreshValue = false; //indicate a refresh from the inputvalue is needed (form.reset)

		if (internal !== true) {
			//init options
			if ($.isPlainObject(alias)) {
				options = alias;
			} else {
				options = options || {};
				options.alias = alias;
			}
			this.opts = $.extend(true, {}, this.defaults, options);
			this.noMasksCache = options && options.definitions !== undefined;
			this.userOptions = options || {}; //user passed options
			this.isRTL = this.opts.numericInput;
			resolveAlias(this.opts.alias, options, this.opts);
		}
	}

	Inputmask.prototype = {
		dataAttribute: "data-inputmask", //data attribute prefix used for attribute binding
		//options default
		defaults: {
			placeholder: "_",
			optionalmarker: {
				start: "[",
				end: "]"
			},
			quantifiermarker: {
				start: "{",
				end: "}"
			},
			groupmarker: {
				start: "(",
				end: ")"
			},
			alternatormarker: "|",
			escapeChar: "\\",
			mask: null, //needs tobe null instead of undefined as the extend method does not consider props with the undefined value
			oncomplete: $.noop, //executes when the mask is complete
			onincomplete: $.noop, //executes when the mask is incomplete and focus is lost
			oncleared: $.noop, //executes when the mask is cleared
			repeat: 0, //repetitions of the mask: * ~ forever, otherwise specify an integer
			greedy: true, //true: allocated buffer for the mask and repetitions - false: allocate only if needed
			autoUnmask: false, //automatically unmask when retrieving the value with $.fn.val or value if the browser supports __lookupGetter__ or getOwnPropertyDescriptor
			removeMaskOnSubmit: false, //remove the mask before submitting the form.
			clearMaskOnLostFocus: true,
			insertMode: true, //insert the input or overwrite the input
			clearIncomplete: false, //clear the incomplete input on blur
			alias: null,
			onKeyDown: $.noop, //callback to implement autocomplete on certain keys for example. args => event, buffer, caretPos, opts
			onBeforeMask: null, //executes before masking the initial value to allow preprocessing of the initial value.	args => initialValue, opts => return processedValue
			onBeforePaste: function (pastedValue, opts) {
				return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(pastedValue, opts) : pastedValue;
			}, //executes before masking the pasted value to allow preprocessing of the pasted value.	args => pastedValue, opts => return processedValue
			onBeforeWrite: null, //executes before writing to the masked element. args => event, opts
			onUnMask: null, //executes after unmasking to allow postprocessing of the unmaskedvalue.	args => maskedValue, unmaskedValue, opts
			showMaskOnFocus: true, //show the mask-placeholder when the input has focus
			showMaskOnHover: true, //show the mask-placeholder when hovering the empty input
			onKeyValidation: $.noop, //executes on every key-press with the result of isValid. Params: key, result, opts
			skipOptionalPartCharacter: " ", //a character which can be used to skip an optional part of a mask
			numericInput: false, //numericInput input direction style (input shifts to the left while holding the caret position)
			rightAlign: false, //align to the right
			undoOnEscape: true, //pressing escape reverts the value to the value before focus
			//numeric basic properties
			radixPoint: "", //".", // | ","
			radixPointDefinitionSymbol: undefined, //set the radixPoint definitionSymbol ~ used for awareness of the radixpoint
			groupSeparator: "", //",", // | "."
			//numeric basic properties
			keepStatic: null, //try to keep the mask static while typing. Decisions to alter the mask will be posponed if possible - null see auto selection for multi masks
			positionCaretOnTab: true, //when enabled the caret position is set after the latest valid position on TAB
			tabThrough: false, //allows for tabbing through the different parts of the masked field
			supportsInputType: ["text", "tel", "password"], //list with the supported input types
			//specify keyCodes which should not be considered in the keypress event, otherwise the preventDefault will stop their default behavior especially in FF
			ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229],
			isComplete: null, //override for isComplete - args => buffer, opts - return true || false
			canClearPosition: $.noop, //hook to alter the clear behavior in the stripValidPositions args => maskset, position, lastValidPosition, opts => return true|false
			postValidation: null, //hook to postValidate the result from isValid.	Usefull for validating the entry as a whole.	args => buffer, currentResult, opts => return true/false
			staticDefinitionSymbol: undefined, //specify a definitionSymbol for static content, used to make matches for alternators
			jitMasking: false, //just in time masking ~ only mask while typing, can n (number), true or false
			nullable: true, //return nothing instead of the buffertemplate when the user hasn't entered anything.
			inputEventOnly: false, //dev option - testing inputfallback behavior
			noValuePatching: false, //dev option - disable value property patching
			positionCaretOnClick: "lvp", //none, lvp (based on the last valid position (default), radixFocus (position caret to radixpoint on initial click)
			casing: null, //mask-level casing. Options: null, "upper", "lower" or "title"
			inputmode: "verbatim", //specify the inputmode  - already in place for when browsers will support it
			colorMask: false, //enable css styleable mask
			androidHack: false //see README_android.md
		},
		definitions: {
			"9": {
				validator: "[0-9]",
				cardinality: 1,
				definitionSymbol: "*"
			},
			"a": {
				validator: "[A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
				cardinality: 1,
				definitionSymbol: "*"
			},
			"*": {
				validator: "[0-9A-Za-z\u0410-\u044F\u0401\u0451\u00C0-\u00FF\u00B5]",
				cardinality: 1
			}
		},
		aliases: {}, //aliases definitions => see jquery.inputmask.extensions.js
		masksCache: {},
		mask: function (elems) {
			var that = this;

			function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
				var attrOptions = npt.getAttribute(dataAttribute),
					option, dataoptions, optionData, p;

				function importOption(option, optionData) {
					optionData = optionData !== undefined ? optionData : npt.getAttribute(dataAttribute + "-" + option);
					if (optionData !== null) {
						if (typeof optionData === "string") {
							if (option.indexOf("on") === 0) optionData = window[optionData]; //get function definition
							else if (optionData === "false") optionData = false;
							else if (optionData === "true") optionData = true;
						}
						userOptions[option] = optionData;
					}
				}

				if (attrOptions && attrOptions !== "") {
					attrOptions = attrOptions.replace(new RegExp("'", "g"), '"');
					dataoptions = JSON.parse("{" + attrOptions + "}");
				}

				//resolve aliases
				if (dataoptions) { //pickup alias from dataAttribute
					optionData = undefined;
					for (p in dataoptions) {
						if (p.toLowerCase() === "alias") {
							optionData = dataoptions[p];
							break;
						}
					}
				}
				importOption("alias", optionData); //pickup alias from dataAttribute-alias
				if (userOptions.alias) {
					resolveAlias(userOptions.alias, userOptions, opts);
				}

				for (option in opts) {
					if (dataoptions) {
						optionData = undefined;
						for (p in dataoptions) {
							if (p.toLowerCase() === option.toLowerCase()) {
								optionData = dataoptions[p];
								break;
							}
						}
					}
					importOption(option, optionData);
				}

				$.extend(true, opts, userOptions);
				return opts;
			}

			if (typeof elems === "string") {
				elems = document.getElementById(elems) || document.querySelectorAll(elems);
			}
			elems = elems.nodeName ? [elems] : elems;
			$.each(elems, function (ndx, el) {
				var scopedOpts = $.extend(true, {}, that.opts);
				importAttributeOptions(el, scopedOpts, $.extend(true, {}, that.userOptions), that.dataAttribute);
				var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
				if (maskset !== undefined) {
					if (el.inputmask !== undefined) {
						el.inputmask.remove();
					}
					//store inputmask instance on the input with element reference
					el.inputmask = new Inputmask(undefined, undefined, true);
					el.inputmask.opts = scopedOpts;
					el.inputmask.noMasksCache = that.noMasksCache;
					el.inputmask.userOptions = $.extend(true, {}, that.userOptions);
					el.inputmask.isRTL = that.isRTL;
					el.inputmask.el = el;
					el.inputmask.maskset = maskset;

					$.data(el, "_inputmask_opts", scopedOpts);

					maskScope.call(el.inputmask, {
						"action": "mask"
					});
				}
			});
			return elems && elems[0] ? (elems[0].inputmask || this) : this;
		},
		option: function (options, noremask) { //set extra options || retrieve value of a current option
			if (typeof options === "string") {
				return this.opts[options];
			} else if (typeof options === "object") {
				$.extend(this.userOptions, options); //user passed options
				//remask
				if (this.el && noremask !== true) {
					this.mask(this.el);
				}
				return this;
			}
		},
		unmaskedvalue: function (value) {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "unmaskedvalue",
				"value": value
			});
		},
		remove: function () {
			return maskScope.call(this, {
				"action": "remove"
			});
		},
		getemptymask: function () { //return the default (empty) mask value, usefull for setting the default value in validation
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "getemptymask"
			});
		},
		hasMaskedValue: function () { //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
			return !this.opts.autoUnmask;
		},
		isComplete: function () {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "isComplete"
			});
		},
		getmetadata: function () { //return mask metadata if exists
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "getmetadata"
			});
		},
		isValid: function (value) {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "isValid",
				"value": value
			});
		},
		format: function (value, metadata) {
			this.maskset = this.maskset || generateMaskSet(this.opts, this.noMasksCache);
			return maskScope.call(this, {
				"action": "format",
				"value": value,
				"metadata": metadata //true/false getmetadata
			});
		},
		analyseMask: function (mask, opts) {
			var tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
				escaped = false,
				currentToken = new MaskToken(),
				match,
				m,
				openenings = [],
				maskTokens = [],
				openingToken,
				currentOpeningToken,
				alternator,
				lastMatch,
				groupToken;

			function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
				this.matches = [];
				this.openGroup = isGroup || false;
				this.isGroup = isGroup || false;
				this.isOptional = isOptional || false;
				this.isQuantifier = isQuantifier || false;
				this.isAlternator = isAlternator || false;
				this.quantifier = {
					min: 1,
					max: 1
				};
			}

			//test definition => {fn: RegExp/function, cardinality: int, optionality: bool, newBlockMarker: bool, casing: null/upper/lower, def: definitionSymbol, placeholder: placeholder, mask: real maskDefinition}
			function insertTestDefinition(mtoken, element, position) {
				var maskdef = (opts.definitions ? opts.definitions[element] : undefined) || Inputmask.prototype.definitions[element];
				position = position !== undefined ? position : mtoken.matches.length;
				var prevMatch = mtoken.matches[position - 1];
				if (maskdef && !escaped) {
					var prevalidators = maskdef.prevalidator,
						prevalidatorsL = prevalidators ? prevalidators.length : 0;
					//handle prevalidators
					for (var i = 1; i < maskdef.cardinality; i++) {
						var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
							validator = prevalidator.validator,
							cardinality = prevalidator.cardinality;
						mtoken.matches.splice(position++, 0, {
							fn: validator ? typeof validator === "string" ? new RegExp(validator) : new function () {
										this.test = validator;
									} : new RegExp("."),
							cardinality: cardinality ? cardinality : 1,
							optionality: mtoken.isOptional,
							newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
							casing: maskdef.casing,
							def: maskdef.definitionSymbol || element,
							placeholder: maskdef.placeholder,
							nativeDef: element
						});
						prevMatch = mtoken.matches[position - 1];
					}
					mtoken.matches.splice(position++, 0, {
						fn: maskdef.validator ? typeof maskdef.validator == "string" ? new RegExp(maskdef.validator) : new function () {
									this.test = maskdef.validator;
								} : new RegExp("."),
						cardinality: maskdef.cardinality,
						optionality: mtoken.isOptional,
						newBlockMarker: prevMatch === undefined || prevMatch.def !== (maskdef.definitionSymbol || element),
						casing: maskdef.casing,
						def: maskdef.definitionSymbol || element,
						placeholder: maskdef.placeholder,
						nativeDef: element
					});
				} else {
					mtoken.matches.splice(position++, 0, {
						fn: null,
						cardinality: 0,
						optionality: mtoken.isOptional,
						newBlockMarker: prevMatch === undefined || prevMatch.def !== element,
						casing: null,
						def: opts.staticDefinitionSymbol || element,
						placeholder: opts.staticDefinitionSymbol !== undefined ? element : undefined,
						nativeDef: element
					});
					escaped = false;
				}
			}

			function verifyGroupMarker(maskToken) {
				if (maskToken && maskToken.matches) {
					$.each(maskToken.matches, function (ndx, token) {
							var nextToken = maskToken.matches[ndx + 1];
							if ((nextToken === undefined || (nextToken.matches === undefined || nextToken.isQuantifier === false)) && token && token.isGroup) { //this is not a group but a normal mask => convert
								token.isGroup = false;
								insertTestDefinition(token, opts.groupmarker.start, 0);
								if (token.openGroup !== true) {
									insertTestDefinition(token, opts.groupmarker.end);
								}
							}
							verifyGroupMarker(token);
						}
					);
				}
			}

			function defaultCase() {
				if (openenings.length > 0) {
					currentOpeningToken = openenings[openenings.length - 1];
					insertTestDefinition(currentOpeningToken, m);
					if (currentOpeningToken.isAlternator) { //handle alternator a | b case
						alternator = openenings.pop();
						for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
							alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
						}
						if (openenings.length > 0) {
							currentOpeningToken = openenings[openenings.length - 1];
							currentOpeningToken.matches.push(alternator);
						} else {
							currentToken.matches.push(alternator);
						}
					}
				} else {
					insertTestDefinition(currentToken, m);
				}
			}

			function reverseTokens(maskToken) {
				function reverseStatic(st) {
					if (st === opts.optionalmarker.start) st = opts.optionalmarker.end;
					else if (st === opts.optionalmarker.end) st = opts.optionalmarker.start;
					else if (st === opts.groupmarker.start) st = opts.groupmarker.end;
					else if (st === opts.groupmarker.end) st = opts.groupmarker.start;

					return st;
				}

				maskToken.matches = maskToken.matches.reverse();
				for (var match in maskToken.matches) {
					if (maskToken.matches.hasOwnProperty(match)) {
						var intMatch = parseInt(match);
						if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) { //reposition quantifier
							var qt = maskToken.matches[match];
							maskToken.matches.splice(match, 1);
							maskToken.matches.splice(intMatch + 1, 0, qt);
						}
						if (maskToken.matches[match].matches !== undefined) {
							maskToken.matches[match] = reverseTokens(maskToken.matches[match]);
						} else {
							maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
						}
					}
				}

				return maskToken;
			}

			while (match = tokenizer.exec(mask)) {
				m = match[0];

				if (escaped) {
					defaultCase();
					continue;
				}
				switch (m.charAt(0)) {
					case opts.escapeChar:
						escaped = true;
						break;
					case opts.optionalmarker.end:
					// optional closing
					case opts.groupmarker.end:
						// Group closing
						openingToken = openenings.pop();
						openingToken.openGroup = false; //mark group as complete
						if (openingToken !== undefined) {
							if (openenings.length > 0) {
								currentOpeningToken = openenings[openenings.length - 1];
								currentOpeningToken.matches.push(openingToken);
								if (currentOpeningToken.isAlternator) { //handle alternator (a) | (b) case
									alternator = openenings.pop();
									for (var mndx = 0; mndx < alternator.matches.length; mndx++) {
										alternator.matches[mndx].isGroup = false; //don't mark alternate groups as group
									}
									if (openenings.length > 0) {
										currentOpeningToken = openenings[openenings.length - 1];
										currentOpeningToken.matches.push(alternator);
									} else {
										currentToken.matches.push(alternator);
									}
								}
							} else {
								currentToken.matches.push(openingToken);
							}
						} else defaultCase();
						break;
					case opts.optionalmarker.start:
						// optional opening
						openenings.push(new MaskToken(false, true));
						break;
					case opts.groupmarker.start:
						// Group opening
						openenings.push(new MaskToken(true));
						break;
					case opts.quantifiermarker.start:
						//Quantifier
						var quantifier = new MaskToken(false, false, true);

						m = m.replace(/[{}]/g, "");
						var mq = m.split(","),
							mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
							mq1 = mq.length === 1 ? mq0 : (isNaN(mq[1]) ? mq[1] : parseInt(mq[1]));
						if (mq1 === "*" || mq1 === "+") {
							mq0 = mq1 === "*" ? 0 : 1;
						}
						quantifier.quantifier = {
							min: mq0,
							max: mq1
						};
						if (openenings.length > 0) {
							var matches = openenings[openenings.length - 1].matches;
							match = matches.pop();
							if (!match.isGroup) {
								groupToken = new MaskToken(true);
								groupToken.matches.push(match);
								match = groupToken;
							}
							matches.push(match);
							matches.push(quantifier);
						} else {
							match = currentToken.matches.pop();
							if (!match.isGroup) {
								groupToken = new MaskToken(true);
								groupToken.matches.push(match);
								match = groupToken;
							}
							currentToken.matches.push(match);
							currentToken.matches.push(quantifier);
						}
						break;
					case
					opts.alternatormarker:
						if (openenings.length > 0) {
							currentOpeningToken = openenings[openenings.length - 1];
							lastMatch = currentOpeningToken.matches.pop();
						} else {
							lastMatch = currentToken.matches.pop();
						}
						if (lastMatch.isAlternator) {
							openenings.push(lastMatch);
						} else {
							alternator = new MaskToken(false, false, false, true);
							alternator.matches.push(lastMatch);
							openenings.push(alternator);
						}
						break;
					default:
						defaultCase();
				}
			}

			while (openenings.length > 0) {
				openingToken = openenings.pop();
				currentToken.matches.push(openingToken);
			}
			if (currentToken.matches.length > 0) {
				verifyGroupMarker(currentToken);
				maskTokens.push(currentToken);
			}

			if (opts.numericInput) {
				reverseTokens(maskTokens[0]);
			}
			// console.log(JSON.stringify(maskTokens));
			return maskTokens;
		}
	};

	//apply defaults, definitions, aliases
	Inputmask.extendDefaults = function (options) {
		$.extend(true, Inputmask.prototype.defaults, options);
	};
	Inputmask.extendDefinitions = function (definition) {
		$.extend(true, Inputmask.prototype.definitions, definition);
	};
	Inputmask.extendAliases = function (alias) {
		$.extend(true, Inputmask.prototype.aliases, alias);
	};
	//static fn on inputmask
	Inputmask.format = function (value, options, metadata) {
		return Inputmask(options).format(value, metadata);
	};
	Inputmask.unmask = function (value, options) {
		return Inputmask(options).unmaskedvalue(value);
	};
	Inputmask.isValid = function (value, options) {
		return Inputmask(options).isValid(value);
	};
	Inputmask.remove = function (elems) {
		$.each(elems, function (ndx, el) {
			if (el.inputmask) el.inputmask.remove();
		});
	};
	Inputmask.escapeRegex = function (str) {
		var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
		return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
	};
	Inputmask.keyCode = {
		ALT: 18,
		BACKSPACE: 8,
		BACKSPACE_SAFARI: 127,
		CAPS_LOCK: 20,
		COMMA: 188,
		COMMAND: 91,
		COMMAND_LEFT: 91,
		COMMAND_RIGHT: 93,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		INSERT: 45,
		LEFT: 37,
		MENU: 93,
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38,
		WINDOWS: 91,
		X: 88
	};

	function resolveAlias(aliasStr, options, opts) {
		var aliasDefinition = Inputmask.prototype.aliases[aliasStr];
		if (aliasDefinition) {
			if (aliasDefinition.alias) resolveAlias(aliasDefinition.alias, undefined, opts); //alias is another alias
			$.extend(true, opts, aliasDefinition); //merge alias definition in the options
			$.extend(true, opts, options); //reapply extra given options
			return true;
		} else //alias not found - try as mask
		if (opts.mask === null) {
			opts.mask = aliasStr;
		}

		return false;
	}

	function generateMaskSet(opts, nocache) {
		function generateMask(mask, metadata, opts) {
			if (mask === null || mask === "") {
				return undefined;
			} else {
				if (mask.length === 1 && opts.greedy === false && opts.repeat !== 0) {
					opts.placeholder = "";
				} //hide placeholder with single non-greedy mask
				if (opts.repeat > 0 || opts.repeat === "*" || opts.repeat === "+") {
					var repeatStart = opts.repeat === "*" ? 0 : (opts.repeat === "+" ? 1 : opts.repeat);
					mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
				}

				// console.log(mask);
				var masksetDefinition;
				if (Inputmask.prototype.masksCache[mask] === undefined || nocache === true) {
					masksetDefinition = {
						"mask": mask,
						"maskToken": Inputmask.prototype.analyseMask(mask, opts),
						"validPositions": {},
						"_buffer": undefined,
						"buffer": undefined,
						"tests": {},
						"metadata": metadata,
						maskLength: undefined
					};
					if (nocache !== true) {
						Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask] = masksetDefinition;
						masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]);
					}
				} else masksetDefinition = $.extend(true, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]);

				return masksetDefinition;
			}
		}

		var ms;

		if ($.isFunction(opts.mask)) { //allow mask to be a preprocessing fn - should return a valid mask
			opts.mask = opts.mask(opts);
		}
		if ($.isArray(opts.mask)) {
			if (opts.mask.length > 1) {
				opts.keepStatic = opts.keepStatic === null ? true : opts.keepStatic; //enable by default when passing multiple masks when the option is not explicitly specified
				var altMask = opts.groupmarker.start;
				$.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function (ndx, msk) {
					if (altMask.length > 1) {
						altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start;
					}
					if (msk.mask !== undefined && !$.isFunction(msk.mask)) {
						altMask += msk.mask;
					} else {
						altMask += msk;
					}
				});
				altMask += opts.groupmarker.end;
				// console.log(altMask);
				return generateMask(altMask, opts.mask, opts);
			} else opts.mask = opts.mask.pop();
		}

		if (opts.mask) {
			if (opts.mask.mask !== undefined && !$.isFunction(opts.mask.mask)) {
				ms = generateMask(opts.mask.mask, opts.mask, opts);
			} else {
				ms = generateMask(opts.mask, opts.mask, opts);
			}
		}

		return ms;
	};


	//masking scope
	//actionObj definition see below
	function maskScope(actionObj, maskset, opts) {
		maskset = maskset || this.maskset;
		opts = opts || this.opts;
		var el = this.el,
			isRTL = this.isRTL,
			undoValue,
			$el,
			skipKeyPressEvent = false, //Safari 5.1.x - modal dialog fires keypress twice workaround
			skipInputEvent = false, //skip when triggered from within inputmask
			ignorable = false,
			maxLength,
			mouseEnter = false,
			colorMask;

		//maskset helperfunctions
		function getMaskTemplate(baseOnInput, minimalPos, includeMode) {
			//includeMode true => input, undefined => placeholder, false => mask
			minimalPos = minimalPos || 0;
			var maskTemplate = [],
				ndxIntlzr, pos = 0,
				test, testPos, lvp = getLastValidPosition();
			maxLength = el !== undefined ? el.maxLength : undefined;
			if (maxLength === -1) maxLength = undefined;
			do {
				if (baseOnInput === true && getMaskSet().validPositions[pos]) {
					testPos = getMaskSet().validPositions[pos];
					test = testPos.match;
					ndxIntlzr = testPos.locator.slice();
					maskTemplate.push(includeMode === true ? testPos.input : includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
				} else {
					testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
					test = testPos.match;
					ndxIntlzr = testPos.locator.slice();
					if (opts.jitMasking === false || pos < lvp || (typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
						maskTemplate.push(includeMode === false ? test.nativeDef : getPlaceholder(pos, test));
					}
				}
				pos++;
			} while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || minimalPos > pos);
			if (maskTemplate[maskTemplate.length - 1] === "") {
				maskTemplate.pop(); //drop the last one which is empty
			}

			getMaskSet().maskLength = pos + 1;
			return maskTemplate;
		}

		function getMaskSet() {
			return maskset;
		}

		function resetMaskSet(soft) {
			var maskset = getMaskSet();
			maskset.buffer = undefined;
			if (soft !== true) {
				maskset._buffer = undefined;
				maskset.validPositions = {};
				maskset.p = 0;
			}
		}

		function getLastValidPosition(closestTo, strict, validPositions) {
			var before = -1,
				after = -1,
				valids = validPositions || getMaskSet().validPositions; //for use in valhook ~ context switch
			if (closestTo === undefined) closestTo = -1;
			for (var posNdx in valids) {
				var psNdx = parseInt(posNdx);
				if (valids[psNdx] && (strict || valids[psNdx].generatedInput !== true)) {
					if (psNdx <= closestTo) before = psNdx;
					if (psNdx >= closestTo) after = psNdx;
				}
			}
			return (before !== -1 && (closestTo - before) > 1) || after < closestTo ? before : after;
		}


		function stripValidPositions(start, end, nocheck, strict) {
			function IsEnclosedStatic(pos) {
				var posMatch = getMaskSet().validPositions[pos];
				if (posMatch !== undefined && posMatch.match.fn === null) {
					var prevMatch = getMaskSet().validPositions[pos - 1],
						nextMatch = getMaskSet().validPositions[pos + 1];
					return prevMatch !== undefined && nextMatch !== undefined;
				}
				return false;
			}

			var i, startPos = start,
				positionsClone = $.extend(true, {}, getMaskSet().validPositions), needsValidation = false;
			getMaskSet().p = start; //needed for alternated position after overtype selection

			for (i = end - 1; i >= startPos; i--) { //clear selection
				if (getMaskSet().validPositions[i] !== undefined) {
					if (nocheck === true ||
						((getMaskSet().validPositions[i].match.optionality || !IsEnclosedStatic(i)) && opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) !== false)) {
						delete getMaskSet().validPositions[i];
					}
				}
			}

			//clear buffer
			resetMaskSet(true);
			for (i = startPos + 1; i <= getLastValidPosition();) {
				while (getMaskSet().validPositions[startPos] !== undefined) startPos++;
				if (i < startPos) i = startPos + 1;
				if (getMaskSet().validPositions[i] !== undefined || !isMask(i)) {
					var t = getTestTemplate(i);
					if (needsValidation === false && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def) { //obvious match
						getMaskSet().validPositions[startPos] = $.extend(true, {}, positionsClone[startPos]);
						getMaskSet().validPositions[startPos].input = t.input;
						delete getMaskSet().validPositions[i];
						i++;
					} else if (positionCanMatchDefinition(startPos, t.match.def)) {
						if (isValid(startPos, t.input || getPlaceholder(i), true) !== false) {
							delete getMaskSet().validPositions[i];
							i++;
							needsValidation = true;
						}
					} else if (!isMask(i)) {
						i++;
						startPos--;
					}
					startPos++;
				} else i++;
			}

			resetMaskSet(true);
		}

		function determineTestTemplate(tests, guessNextBest) {
			var testPos,
				testPositions = tests,
				lvp = getLastValidPosition(),
				lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0],
				lvTestAltArr = (lvTest.alternation !== undefined) ? lvTest.locator[lvTest.alternation].toString().split(",") : [];
			for (var ndx = 0; ndx < testPositions.length; ndx++) {
				testPos = testPositions[ndx];

				if (testPos.match &&
					(((opts.greedy && testPos.match.optionalQuantifier !== true) || (testPos.match.optionality === false || testPos.match.newBlockMarker === false) && testPos.match.optionalQuantifier !== true) &&
					((lvTest.alternation === undefined || lvTest.alternation !== testPos.alternation) ||
					(testPos.locator[lvTest.alternation] !== undefined && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))))) {

					if (guessNextBest !== true || (testPos.match.fn === null && !/[0-9a-bA-Z]/.test(testPos.match.def)))
						break;
				}
			}

			return testPos;
		}

		function getTestTemplate(pos, ndxIntlzr, tstPs) {
			return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
		}

		function getTest(pos) {
			if (getMaskSet().validPositions[pos]) {
				return getMaskSet().validPositions[pos];
			}
			return getTests(pos)[0];
		}

		function positionCanMatchDefinition(pos, def) {
			var valid = false,
				tests = getTests(pos);
			for (var tndx = 0; tndx < tests.length; tndx++) {
				if (tests[tndx].match && tests[tndx].match.def === def) {
					valid = true;
					break;
				}
			}
			return valid;
		}


		function getTests(pos, ndxIntlzr, tstPs) {
			var maskTokens = getMaskSet().maskToken,
				testPos = ndxIntlzr ? tstPs : 0,
				ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
				matches = [],
				insertStop = false,
				latestMatch,
				cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";

			function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) { //ndxInitializer contains a set of indexes to speedup searches in the mtokens
				function handleMatch(match, loopNdx, quantifierRecurse) {
					function isFirstMatch(latestMatch, tokenGroup) {
						var firstMatch = $.inArray(latestMatch, tokenGroup.matches) === 0;
						if (!firstMatch) {
							$.each(tokenGroup.matches, function (ndx, match) {
								if (match.isQuantifier === true) {
									firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]);
									if (firstMatch) return false;
								}
							});
						}
						return firstMatch;
					}

					function resolveNdxInitializer(pos, alternateNdx, targetAlternation) {
						var bestMatch, indexPos;
						if (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) {
							$.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function (ndx, lmnt) {
								var alternation = targetAlternation !== undefined ? targetAlternation : lmnt.alternation,
									ndxPos = lmnt.locator[alternation] !== undefined ? lmnt.locator[alternation].toString().indexOf(alternateNdx) : -1;
								if ((indexPos === undefined || ndxPos < indexPos) && ndxPos !== -1) {
									bestMatch = lmnt;
									indexPos = ndxPos;
								}
							});
						}
						return bestMatch ?
							bestMatch.locator.slice((targetAlternation !== undefined ? targetAlternation : bestMatch.alternation) + 1) :
							targetAlternation !== undefined ? resolveNdxInitializer(pos, alternateNdx) : undefined;
					}

					function staticCanMatchDefinition(source, target) {
						if (source.match.fn === null && target.match.fn !== null) {
							return target.match.fn.test(source.match.def, getMaskSet(), pos, false, opts, false);
						}
						return false;
					}

					if (testPos > 10000) {
						throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
					}
					if (testPos === pos && match.matches === undefined) {
						matches.push({
							"match": match,
							"locator": loopNdx.reverse(),
							"cd": cacheDependency
						});
						return true;
					} else if (match.matches !== undefined) {
						if (match.isGroup && quantifierRecurse !== match) { //when a group pass along to the quantifier
							match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx);
							if (match) return true;
						} else if (match.isOptional) {
							var optionalToken = match;
							match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
							if (match) {
								latestMatch = matches[matches.length - 1].match;
								if (isFirstMatch(latestMatch, optionalToken)) {
									insertStop = true; //insert a stop
									testPos = pos; //match the position after the group
								} else return true;
							}
						} else if (match.isAlternator) {
							var alternateToken = match,
								malternateMatches = [],
								maltMatches,
								currentMatches = matches.slice(),
								loopNdxCnt = loopNdx.length;
							var altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
							if (altIndex === -1 || typeof altIndex === "string") {
								var currentPos = testPos,
									ndxInitializerClone = ndxInitializer.slice(),
									altIndexArr = [],
									amndx;
								if (typeof altIndex == "string") {
									altIndexArr = altIndex.split(",");
								} else {
									for (amndx = 0; amndx < alternateToken.matches.length; amndx++) {
										altIndexArr.push(amndx);
									}
								}
								for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
									amndx = parseInt(altIndexArr[ndx]);
									matches = [];
									//set the correct ndxInitializer
									ndxInitializer = resolveNdxInitializer(testPos, amndx, loopNdxCnt) || ndxInitializerClone.slice();
									match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match;
									if (match !== true && match !== undefined && (altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length)) { //no match in the alternations (length mismatch) => look further
										var ntndx = $.inArray(match, maskToken.matches) + 1;
										if (maskToken.matches.length > ntndx) {
											match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse);
											if (match) {
												altIndexArr.push(ntndx.toString());
												$.each(matches, function (ndx, lmnt) {
													lmnt.alternation = loopNdx.length - 1;
												});
											}
										}
									}
									maltMatches = matches.slice();
									testPos = currentPos;
									matches = [];

									//fuzzy merge matches
									for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
										var altMatch = maltMatches[ndx1], hasMatch = false;
										altMatch.alternation = altMatch.alternation || loopNdxCnt;
										for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
											var altMatch2 = malternateMatches[ndx2];
											//verify equality
											if (typeof altIndex !== "string" || $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) {
												if (altMatch.match.def === altMatch2.match.def || staticCanMatchDefinition(altMatch, altMatch2)) {
													hasMatch = altMatch.match.nativeDef === altMatch2.match.nativeDef;
													// if (altMatch.alternation != altMatch2.alternation) {
													// 	console.log("alternation mismatch");
													// }
													if (altMatch.alternation == altMatch2.alternation && //can we merge if the alternation is different??  TODO TOCHECK INVESTIGATE
														altMatch2.locator[altMatch2.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1) {
														altMatch2.locator[altMatch2.alternation] = altMatch2.locator[altMatch2.alternation] + "," + altMatch.locator[altMatch.alternation];
														altMatch2.alternation = altMatch.alternation; //we pass the alternation index => used in determineLastRequiredPosition
														if (altMatch.match.fn == null) { //staticCanMatchDefinition => set no alternate on match
															altMatch2.na = altMatch2.na || altMatch.locator[altMatch.alternation].toString();
															if (altMatch2.na.indexOf(altMatch.locator[altMatch.alternation]) === -1)
																altMatch2.na = altMatch2.na + "," + altMatch.locator[altMatch.alternation];
														}
													}
													break;
												}
											}
										}
										if (!hasMatch) {
											malternateMatches.push(altMatch);
										}
									}
								}
								if (typeof altIndex == "string") { //filter matches
									malternateMatches = $.map(malternateMatches, function (lmnt, ndx) {
										if (isFinite(ndx)) {
											var mamatch,
												alternation = lmnt.alternation,
												altLocArr = lmnt.locator[alternation].toString().split(",");
											lmnt.locator[alternation] = undefined;
											lmnt.alternation = undefined;

											for (var alndx = 0; alndx < altLocArr.length; alndx++) {
												mamatch = $.inArray(altLocArr[alndx], altIndexArr) !== -1;
												if (mamatch) { //rebuild the locator with valid entries
													if (lmnt.locator[alternation] !== undefined) {
														lmnt.locator[alternation] += ",";
														lmnt.locator[alternation] += altLocArr[alndx];
													} else lmnt.locator[alternation] = parseInt(altLocArr[alndx]);

													lmnt.alternation = alternation;
												}
											}

											if (lmnt.locator[alternation] !== undefined) return lmnt;
										}
									});
								}

								matches = currentMatches.concat(malternateMatches);
								testPos = pos;
								insertStop = matches.length > 0; //insert a stopelemnt when there is an alternate - needed for non-greedy option

								//cloneback
								ndxInitializer = ndxInitializerClone.slice();
							} else {
								// if (alternateToken.matches[altIndex]) { //if not in the initial alternation => look further
								match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
								// } else match = false;
							}
							if (match) return true;
						} else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1]) {
							var qt = match;
							for (var qndx = (ndxInitializer.length > 0) ? ndxInitializer.shift() : 0; (qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max)) && testPos <= pos; qndx++) {
								var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
								match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup); //set the tokenGroup as quantifierRecurse marker
								if (match) {
									//get latest match
									latestMatch = matches[matches.length - 1].match;
									latestMatch.optionalQuantifier = qndx > (qt.quantifier.min - 1);
									if (isFirstMatch(latestMatch, tokenGroup)) { //search for next possible match
										if (qndx > (qt.quantifier.min - 1)) {
											insertStop = true;
											testPos = pos; //match the position after the group
											break; //stop quantifierloop
										} else return true;
									} else {
										return true;
									}
								}
							}
						} else {
							match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse);
							if (match) return true;
						}
					}

					else
						testPos++;
				}

				for (var tndx = (ndxInitializer.length > 0 ? ndxInitializer.shift() : 0); tndx < maskToken.matches.length; tndx++) {
					if (maskToken.matches[tndx].isQuantifier !== true) {
						var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
						if (match && testPos === pos) {
							return match;
						} else if (testPos > pos) {
							break;
						}
					}
				}
			}

			function mergeLocators(tests) {
				var locator = [];
				if (!$.isArray(tests)) tests = [tests];
				if (tests.length > 0) {
					if (tests[0].alternation === undefined) {
						locator = determineTestTemplate(tests.slice()).locator.slice();
						if (locator.length === 0) locator = tests[0].locator.slice();
					}
					else {
						$.each(tests, function (ndx, tst) {
							if (tst.def !== "") {
								if (locator.length === 0) locator = tst.locator.slice();
								else {
									for (var i = 0; i < locator.length; i++) {
										if (tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1) {
											locator[i] += "," + tst.locator[i];
										}
									}
								}
							}
						});
					}
				}
				return locator;
			}

			function filterTests(tests) {
				if (opts.keepStatic && pos > 0) {
					if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
						if (tests[0].match.optionality !== true &&
							tests[0].match.optionalQuantifier !== true &&
							tests[0].match.fn === null && !/[0-9a-bA-Z]/.test(tests[0].match.def)) {
							return [determineTestTemplate(tests)];
						}
					}
				}

				return tests;
			}

			if (pos > -1) {
				if (ndxIntlzr === undefined) { //determine index initializer
					var previousPos = pos - 1,
						test;
					while ((test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) === undefined && previousPos > -1) {
						previousPos--;
					}
					if (test !== undefined && previousPos > -1) {
						ndxInitializer = mergeLocators(test);
						cacheDependency = ndxInitializer.join("");
						testPos = previousPos;
					}
				}
				if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) { //cacheDependency is set on all tests, just check on the first
					//console.log("cache hit " + pos + " - " + ndxIntlzr);
					return filterTests(getMaskSet().tests[pos]);
				}
				for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
					var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
					if ((match && testPos === pos) || testPos > pos) {
						break;
					}
				}
			}
			if (matches.length === 0 || insertStop) {
				matches.push({
					match: {
						fn: null,
						cardinality: 0,
						optionality: true,
						casing: null,
						def: "",
						placeholder: ""
					},
					locator: [],
					cd: cacheDependency
				});
			}

			if (ndxIntlzr !== undefined && getMaskSet().tests[pos]) { //prioritize full tests for caching
				return filterTests($.extend(true, [], matches));
			}
			getMaskSet().tests[pos] = $.extend(true, [], matches); //set a clone to prevent overwriting some props
			// console.log(pos + " - " + JSON.stringify(matches));
			return filterTests(getMaskSet().tests[pos]);
		}

		function getBufferTemplate() {
			if (getMaskSet()._buffer === undefined) {
				//generate template
				getMaskSet()._buffer = getMaskTemplate(false, 1);
				if (getMaskSet().buffer === undefined) {
					getMaskSet()._buffer.slice();
				}
			}
			return getMaskSet()._buffer;
		}

		function getBuffer(noCache) {
			if (getMaskSet().buffer === undefined || noCache === true) {
				getMaskSet().buffer = getMaskTemplate(true, getLastValidPosition(), true);
			}
			return getMaskSet().buffer;
		}

		function refreshFromBuffer(start, end, buffer) {
			var i;
			if (start === true) {
				resetMaskSet();
				start = 0;
				end = buffer.length;
			} else {
				for (i = start; i < end; i++) {
					delete getMaskSet().validPositions[i];
				}
			}
			for (i = start; i < end; i++) {
				resetMaskSet(true); //prevents clobber from the buffer
				if (buffer[i] !== opts.skipOptionalPartCharacter) {
					isValid(i, buffer[i], true, true);
				}
			}
		}

		function casing(elem, test, pos) {
			switch (opts.casing || test.casing) {
				case "upper":
					elem = elem.toUpperCase();
					break;
				case "lower":
					elem = elem.toLowerCase();
					break;
				case "title":
					var posBefore = getMaskSet().validPositions[pos - 1];
					if (pos === 0 || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE)) {
						elem = elem.toUpperCase();
					} else {
						elem = elem.toLowerCase();
					}
					break;
			}

			return elem;
		}

		function checkAlternationMatch(altArr1, altArr2, na) {
			var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1),
				isMatch = false, naArr = na !== undefined ? na.split(",") : [],
				naNdx;

			//remove no alternate indexes from alternation array
			for (var i = 0; i < naArr.length; i++) {
				if ((naNdx = altArr1.indexOf(naArr[i])) !== -1)
					altArr1.splice(naNdx, 1);
			}

			for (var alndx = 0; alndx < altArr1.length; alndx++) {
				if ($.inArray(altArr1[alndx], altArrC) !== -1) {
					isMatch = true;
					break;
				}
			}
			return isMatch;
		}

		function isValid(pos, c, strict, fromSetValid, fromAlternate) { //strict true ~ no correction or autofill
			function isSelection(posObj) {
				var selection = isRTL ? (posObj.begin - posObj.end) > 1 || ((posObj.begin - posObj.end) === 1 && opts.insertMode) :
					(posObj.end - posObj.begin) > 1 || ((posObj.end - posObj.begin) === 1 && opts.insertMode);

				return selection && posObj.begin === 0 && posObj.end === getMaskSet().maskLength ? "full" : selection;
			}

			strict = strict === true; //always set a value to strict to prevent possible strange behavior in the extensions

			var maskPos = pos;
			if (pos.begin !== undefined) { //position was a position object - used to handle a delete by typing over a selection
				maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin;
			}

			function _isValid(position, c, strict) {
				var rslt = false;
				$.each(getTests(position), function (ndx, tst) {
						var test = tst.match,
							loopend = c ? 1 : 0,
							chrs = "";
						for (var i = test.cardinality; i > loopend; i--) {
							chrs += getBufferElement(position - (i - 1));
						}
						if (c) {
							chrs += c;
						}

						//make sure the buffer is set and correct
						getBuffer(true);
						//return is false or a json object => { pos: ??, c: ??} or true
						rslt = test.fn != null ?
							test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && test.def !== "" ? //non mask
								{
									c: getPlaceholder(position, test, true) || test.def,
									pos: position
								} : false;

						if (rslt !== false) {
							var elem = rslt.c !== undefined ? rslt.c : c;
							elem = (elem === opts.skipOptionalPartCharacter && test.fn === null) ?
								(getPlaceholder(position, test, true) || test.def) : elem;

							var validatedPos = position,
								possibleModifiedBuffer = getBuffer();

							if (rslt.remove !== undefined) { //remove position(s)
								if (!$.isArray(rslt.remove)) rslt.remove = [rslt.remove];
								$.each(rslt.remove.sort(function (a, b) {
									return b - a;
								}), function (ndx, lmnt) {
									stripValidPositions(lmnt, lmnt + 1, true);
								});
							}
							if (rslt.insert !== undefined) { //insert position(s)
								if (!$.isArray(rslt.insert)) rslt.insert = [rslt.insert];
								$.each(rslt.insert.sort(function (a, b) {
									return a - b;
								}), function (ndx, lmnt) {
									isValid(lmnt.pos, lmnt.c, true, fromSetValid);
								});
							}

							if (rslt.refreshFromBuffer) {
								var refresh = rslt.refreshFromBuffer;
								strict = true;
								refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, possibleModifiedBuffer);
								if (rslt.pos === undefined && rslt.c === undefined) {
									rslt.pos = getLastValidPosition();
									return false; //breakout if refreshFromBuffer && nothing to insert
								}
								validatedPos = rslt.pos !== undefined ? rslt.pos : position;
								if (validatedPos !== position) {
									rslt = $.extend(rslt, isValid(validatedPos, elem, true, fromSetValid)); //revalidate new position strict
									return false;
								}

							} else if (rslt !== true && rslt.pos !== undefined && rslt.pos !== position) { //their is a position offset
								validatedPos = rslt.pos;
								refreshFromBuffer(position, validatedPos, getBuffer().slice());
								if (validatedPos !== position) {
									rslt = $.extend(rslt, isValid(validatedPos, elem, true)); //revalidate new position strict
									return false;
								}
							}

							if (rslt !== true && rslt.pos === undefined && rslt.c === undefined) {
								return false; //breakout if nothing to insert
							}

							if (ndx > 0) {
								resetMaskSet(true);
							}

							if (!setValidPosition(validatedPos, $.extend({}, tst, {
									"input": casing(elem, test, validatedPos)
								}), fromSetValid, isSelection(pos))) {
								rslt = false;
							}
							return false; //break from $.each
						}
					}
				);
				return rslt;
			}

			function alternate(pos, c, strict) {
				var validPsClone = $.extend(true, {}, getMaskSet().validPositions),
					lastAlt,
					alternation,
					isValidRslt = false,
					altPos, prevAltPos, i, validPos, lAltPos = getLastValidPosition(), altNdxs, decisionPos;
				//find last modified alternation
				prevAltPos = getMaskSet().validPositions[lAltPos];
				for (; lAltPos >= 0; lAltPos--) {
					altPos = getMaskSet().validPositions[lAltPos];
					if (altPos && altPos.alternation !== undefined) {
						lastAlt = lAltPos;
						alternation = getMaskSet().validPositions[lastAlt].alternation;
						if (prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) {
							break;
						}
						prevAltPos = altPos;
					}
				}
				if (alternation !== undefined) {
					decisionPos = parseInt(lastAlt);
					var decisionTaker = prevAltPos.locator[prevAltPos.alternation || alternation] !== undefined ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0]; //no match in the alternations (length mismatch)
					if (decisionTaker.length > 0) { //no decision taken ~ take first one as decider
						decisionTaker = decisionTaker.split(",")[0];
					}
					var possibilityPos = getMaskSet().validPositions[decisionPos], prevPos = getMaskSet().validPositions[decisionPos - 1];
					$.each(getTests(decisionPos, prevPos ? prevPos.locator : undefined, decisionPos - 1), function (ndx, test) {
						altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
						for (var mndx = 0; mndx < altNdxs.length; mndx++) {
							var validInputs = [],
								staticInputsBeforePos = 0,
								staticInputsBeforePosAlternate = 0,
								verifyValidInput = false;
							if (decisionTaker < altNdxs[mndx] && (test.na === undefined || $.inArray(altNdxs[mndx], test.na.split(",")) === -1)) {
								getMaskSet().validPositions[decisionPos] = $.extend(true, {}, test);
								var possibilities = getMaskSet().validPositions[decisionPos].locator;
								getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]); //set forced decision
								if (test.match.fn == null) {
									if (possibilityPos.input !== test.match.def) {
										verifyValidInput = true; //verify that the new definition matches the input
										if (possibilityPos.generatedInput !== true) {
											validInputs.push(possibilityPos.input);
										}
									}
									staticInputsBeforePosAlternate++;
									getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def);
									getMaskSet().validPositions[decisionPos].input = test.match.def;
								} else {
									getMaskSet().validPositions[decisionPos].input = possibilityPos.input;
								}
								for (i = decisionPos + 1; i < getLastValidPosition(undefined, true) + 1; i++) {
									validPos = getMaskSet().validPositions[i];
									if (validPos && validPos.generatedInput !== true && /[0-9a-bA-Z]/.test(validPos.input)) {
										validInputs.push(validPos.input);
									} else if (i < pos) staticInputsBeforePos++;
									delete getMaskSet().validPositions[i];
								}
								if (verifyValidInput && validInputs[0] === test.match.def) {
									validInputs.shift();
								}
								resetMaskSet(true); //clear getbuffer
								isValidRslt = true;
								while (validInputs.length > 0) {
									var input = validInputs.shift();
									if (input !== opts.skipOptionalPartCharacter) {
										if (!(isValidRslt = isValid(getLastValidPosition(undefined, true) + 1, input, false, fromSetValid, true))) {
											break;
										}
									}
								}

								if (isValidRslt) {
									getMaskSet().validPositions[decisionPos].locator = possibilities; //reset forceddecision ~ needed for proper delete
									var targetLvp = getLastValidPosition(pos) + 1;
									for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) {
										validPos = getMaskSet().validPositions[i];
										if ((validPos === undefined || validPos.match.fn == null) && i < (pos + (staticInputsBeforePosAlternate - staticInputsBeforePos))) {
											staticInputsBeforePosAlternate++;
										}
									}
									pos = pos + (staticInputsBeforePosAlternate - staticInputsBeforePos);
									isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, true);
								}
								if (!isValidRslt) {
									resetMaskSet();
									getMaskSet().validPositions = $.extend(true, {}, validPsClone);
								} else return false; //exit $.each
							}
						}
					});
				}

				return isValidRslt;
			}

			//set alternator choice on previous skipped placeholder positions
			function trackbackAlternations(originalPos, newPos) {
				var vp = getMaskSet().validPositions[newPos];
				if (vp) {
					var targetLocator = vp.locator,
						tll = targetLocator.length;

					for (var ps = originalPos; ps < newPos; ps++) {
						if (getMaskSet().validPositions[ps] === undefined && !isMask(ps, true)) {
							var tests = getTests(ps).slice(),
								bestMatch = determineTestTemplate(tests, true),
								equality = -1;
							if (tests[tests.length - 1].match.def === "") tests.pop();
							$.each(tests, function (ndx, tst) { //find best matching
								for (var i = 0; i < tll; i++) {
									if (tst.locator[i] !== undefined && checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","), tst.na)) {
										if (equality < i) {
											equality = i;
											bestMatch = tst;
										}
									} else {
										//check if alternationIndex is closer then the current bestmatch
										var targetAI = targetLocator[i],
											bestMatchAI = bestMatch.locator[i],
											tstAI = tst.locator[i];
										if ((targetAI - bestMatchAI) > Math.abs(targetAI - tstAI)) {
											bestMatch = tst;
										}
										break;
									}
								}
							});
							bestMatch = $.extend({}, bestMatch, {
								"input": getPlaceholder(ps, bestMatch.match, true) || bestMatch.match.def
							});
							bestMatch.generatedInput = true;
							setValidPosition(ps, bestMatch, true);
							//revalidate the new position to update the locator value
							getMaskSet().validPositions[newPos] = undefined;
							_isValid(newPos, vp.input, true);
						}
					}
				}
			}

			function setValidPosition(pos, validTest, fromSetValid, isSelection) {
				if (isSelection || (opts.insertMode && getMaskSet().validPositions[pos] !== undefined && fromSetValid === undefined)) {
					//reposition & revalidate others
					var positionsClone = $.extend(true, {}, getMaskSet().validPositions),
						lvp = getLastValidPosition(undefined, true),
						i;
					for (i = pos; i <= lvp; i++) { //clear selection
						delete getMaskSet().validPositions[i];
					}
					getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
					var valid = true,
						j, vps = getMaskSet().validPositions, needsValidation = false,
						initialLength = getMaskSet().maskLength;
					for (i = (j = pos); i <= lvp; i++) {
						var t = positionsClone[i];
						if (t !== undefined /*&& (t.generatedInput !== true || t.match.fn === null)*/) {
							var posMatch = j;
							while (posMatch < getMaskSet().maskLength && ((t.match.fn === null && vps[i] && (vps[i].match.optionalQuantifier === true || vps[i].match.optionality === true)) || t.match.fn != null)) {
								posMatch++;
								if (needsValidation === false && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) { //obvious match
									getMaskSet().validPositions[posMatch] = $.extend(true, {}, positionsClone[posMatch]);
									getMaskSet().validPositions[posMatch].input = t.input;
									fillMissingNonMask(posMatch);
									j = posMatch;
									valid = true;
								} else if (positionCanMatchDefinition(posMatch, t.match.def)) { //validated match
									var result = isValid(posMatch, t.input, true, true);
									valid = result !== false;
									j = (result.caret || result.insert) ? getLastValidPosition() : posMatch;
									needsValidation = true;
								} else {
									valid = t.generatedInput === true;
									if (!valid && posMatch >= getMaskSet().maskLength - 1) break;
								}
								if (getMaskSet().maskLength < initialLength) getMaskSet().maskLength = initialLength; //a bit hacky but the masklength is corrected later on
								if (valid) break;
							}
						}
						if (!valid) break;
					}

					if (!valid) {
						getMaskSet().validPositions = $.extend(true, {}, positionsClone);
						resetMaskSet(true);
						return false;
					}
				}

				else
					getMaskSet().validPositions[pos] = $.extend(true, {}, validTest);
				;

				resetMaskSet(true);
				return true;
			}

			function fillMissingNonMask(maskPos) {
				//Check for a nonmask before the pos
				//find previous valid
				for (var pndx = maskPos - 1; pndx > -1; pndx--) {
					if (getMaskSet().validPositions[pndx]) break;
				}
				////fill missing nonmask and valid placeholders
				var testTemplate, testsFromPos;
				for (pndx++; pndx < maskPos; pndx++) {
					if (getMaskSet().validPositions[pndx] === undefined && (opts.jitMasking === false || opts.jitMasking > pndx)) {
						testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice();
						if (testsFromPos[testsFromPos.length - 1].match.def === "") testsFromPos.pop();
						testTemplate = determineTestTemplate(testsFromPos);
						if (testTemplate && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, true) ||
							($.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, false, opts)))) {
							result = _isValid(pndx, getPlaceholder(pndx, testTemplate.match, true) || (testTemplate.match.fn == null ? testTemplate.match.def : (getPlaceholder(pndx) !== "" ? getPlaceholder(pndx) : getBuffer()[pndx])), true);
							if (result !== false) {
								getMaskSet().validPositions[result.pos || pndx].generatedInput = true;
							}
						}
					}
				}
			}

			var result = false,
				positionsClone = $.extend(true, {}, getMaskSet().validPositions); //clone the currentPositions

			fillMissingNonMask(maskPos);

			if (isSelection(pos)) {
				handleRemove(undefined, Inputmask.keyCode.DELETE, pos);
				maskPos = getMaskSet().p;
			}

			if (maskPos < getMaskSet().maskLength) {
				result = _isValid(maskPos, c, strict);
				if ((!strict || fromSetValid === true) && result === false) {
					var currentPosValid = getMaskSet().validPositions[maskPos];
					if (currentPosValid && currentPosValid.match.fn === null && (currentPosValid.match.def === c || c === opts.skipOptionalPartCharacter)) {
						result = {
							"caret": seekNext(maskPos)
						};
					} else if ((opts.insertMode || getMaskSet().validPositions[seekNext(maskPos)] === undefined) && !isMask(maskPos, true)) { //does the input match on a further position?
						for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++) {
							result = _isValid(nPos, c, strict);
							if (result !== false) {
								trackbackAlternations(maskPos, result.pos !== undefined ? result.pos : nPos);
								maskPos = nPos;
								break;
							}
						}
					}
				}
			}
			if (result === false && opts.keepStatic && !strict && fromAlternate !== true) { //try fuzzy alternator logic
				result = alternate(maskPos, c, strict);
			}
			if (result === true) {
				result = {
					"pos": maskPos
				};
			}
			if ($.isFunction(opts.postValidation) && result !== false && !strict && fromSetValid !== true) {
				result = opts.postValidation(getBuffer(true), result, opts) ? result : false;
			}

			if (result.pos === undefined) {
				result.pos = maskPos;
			}

			if (result === false) {
				resetMaskSet(true);
				getMaskSet().validPositions = $.extend(true, {}, positionsClone); //revert validation changes
			}

			return result;
		}

		function isMask(pos, strict) {
			var test;
			if (strict) {
				test = getTestTemplate(pos).match;
				if (test.def === "") test = getTest(pos).match;
			} else test = getTest(pos).match;

			if (test.fn != null) {
				return test.fn;
			} else if (strict !== true && pos > -1) {
				var tests = getTests(pos);
				return tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0);
			}
			return false;
		}

		function seekNext(pos, newBlock) {
			var maskL = getMaskSet().maskLength;
			if (pos >= maskL) return maskL;
			var position = pos;
			while (++position < maskL &&
			((newBlock === true && (getTest(position).match.newBlockMarker !== true || !isMask(position))) ||
			(newBlock !== true && !isMask(position)))) {
			}
			return position;
		}

		function seekPrevious(pos, newBlock) {
			var position = pos, tests;
			if (position <= 0) return 0;

			while (--position > 0 &&
			((newBlock === true && getTest(position).match.newBlockMarker !== true) ||
			(newBlock !== true && !isMask(position) &&
			(tests = getTests(position), tests.length < 2 || (tests.length === 2 && tests[1].match.def === ""))))) {
			}

			return position;
		}

		function getBufferElement(position) {
			return getMaskSet().validPositions[position] === undefined ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
		}

		function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
			if (event && $.isFunction(opts.onBeforeWrite)) {
				var result = opts.onBeforeWrite(event, buffer, caretPos, opts);
				if (result) {
					if (result.refreshFromBuffer) {
						var refresh = result.refreshFromBuffer;
						refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer || buffer);
						buffer = getBuffer(true);
					}
					//only alter when intented !== undefined
					if (caretPos !== undefined) caretPos = result.caret !== undefined ? result.caret : caretPos;
				}
			}
			input.inputmask._valueSet(buffer.join(""));
			if (caretPos !== undefined && (event === undefined || event.type !== "blur")) {
				caret(input, caretPos);
			} else renderColorMask(input, buffer, caretPos);
			if (triggerInputEvent === true) {
				skipInputEvent = true;
				$(input).trigger("input");
			}
		}

		function getPlaceholder(pos, test, returnPL) {
			test = test || getTest(pos).match;
			if (test.placeholder !== undefined || returnPL === true) {
				return $.isFunction(test.placeholder) ? test.placeholder(opts) : test.placeholder;
			} else if (test.fn === null) {
				if (pos > -1 && getMaskSet().validPositions[pos] === undefined) {
					var tests = getTests(pos),
						staticAlternations = [],
						prevTest;
					if (tests.length > 1 + (tests[tests.length - 1].match.def === "" ? 1 : 0)) {
						for (var i = 0; i < tests.length; i++) {
							if (tests[i].match.optionality !== true && tests[i].match.optionalQuantifier !== true &&
								(tests[i].match.fn === null || (prevTest === undefined || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, true, opts) !== false))) {
								staticAlternations.push(tests[i]);
								if (tests[i].match.fn === null) prevTest = tests[i];
								if (staticAlternations.length > 1) {
									if (/[0-9a-bA-Z]/.test(staticAlternations[0].match.def)) {
										return opts.placeholder.charAt(pos % opts.placeholder.length);
									}
								}
							}
						}
					}
				}
				return test.def;
			}

			return opts.placeholder.charAt(pos % opts.placeholder.length);
		}

		function checkVal(input, writeOut, strict, nptvl, initiatingEvent, stickyCaret) {
			var inputValue = nptvl.slice(),
				charCodes = "",
				initialNdx = 0, result = undefined;

			function isTemplateMatch() {
				var isMatch = false;
				var charCodeNdx = getBufferTemplate().slice(initialNdx, seekNext(initialNdx)).join("").indexOf(charCodes);
				if (charCodeNdx !== -1 && !isMask(initialNdx)) {
					isMatch = true;
					var bufferTemplateArr = getBufferTemplate().slice(initialNdx, initialNdx + charCodeNdx);
					for (var i = 0; i < bufferTemplateArr.length; i++) {
						if (bufferTemplateArr[i] !== " ") {
							isMatch = false;
							break;
						}
					}
				}

				return isMatch;
			}

			resetMaskSet();
			getMaskSet().p = seekNext(-1);
			// if (writeOut) input.inputmask._valueSet(""); //initial clear

			if (!strict) {
				if (opts.autoUnmask !== true) {
					var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
						matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
					if (matches && matches.length > 0) {
						inputValue.splice(0, matches.length * staticInput.length);
						initialNdx = seekNext(initialNdx);
					}
				} else {
					initialNdx = seekNext(initialNdx);
				}
			}


			$.each(inputValue, function (ndx, charCode) {
				if (charCode !== undefined) { //inputfallback strips some elements out of the inputarray.  $.each logically presents them as undefined
					var keypress = new $.Event("keypress");
					keypress.which = charCode.charCodeAt(0);
					charCodes += charCode;
					var lvp = getLastValidPosition(undefined, true),
						lvTest = getMaskSet().validPositions[lvp],
						nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : undefined, lvp);
					if (!isTemplateMatch() || strict || opts.autoUnmask) {
						var pos = strict ? ndx : (nextTest.match.fn == null && nextTest.match.optionality && (lvp + 1) < getMaskSet().p ? lvp + 1 : getMaskSet().p);
						result = EventHandlers.keypressEvent.call(input, keypress, true, false, strict, pos);
						initialNdx = pos + 1;
						charCodes = "";
					} else {
						result = EventHandlers.keypressEvent.call(input, keypress, true, false, true, lvp + 1);
					}
					if (!strict && $.isFunction(opts.onBeforeWrite)) {
						result = opts.onBeforeWrite(keypress, getBuffer(), result.forwardPosition, opts);
						if (result && result.refreshFromBuffer) {
							var refresh = result.refreshFromBuffer;
							refreshFromBuffer(refresh === true ? refresh : refresh.start, refresh.end, result.buffer);
							resetMaskSet(true);
							if (result.caret) {
								getMaskSet().p = result.caret;
							}
						}
					}
				}
			});
			if (writeOut) {
				var caretPos = undefined, lvp = getLastValidPosition();
				if (document.activeElement === input && (initiatingEvent || result)) {
					caretPos = caret(input).begin;
					if (initiatingEvent && result === false) caretPos = seekNext(getLastValidPosition(caretPos));
					if (result && stickyCaret !== true && (caretPos < lvp + 1 || lvp === -1))
						caretPos = (opts.numericInput && result.caret === undefined) ? seekPrevious(result.forwardPosition) : result.forwardPosition;
				}
				writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"));
			}
		}

		function unmaskedvalue(input) {
			if (input) {
				if (input.inputmask === undefined) {
					return input.value;
				}
				if (input.inputmask && input.inputmask.refreshValue) { //forced refresh from the value form.reset
					EventHandlers.setValueEvent.call(input);
				}
			}
			var umValue = [],
				vps = getMaskSet().validPositions;
			for (var pndx in vps) {
				if (vps[pndx].match && vps[pndx].match.fn != null) {
					umValue.push(vps[pndx].input);
				}
			}
			var unmaskedValue = umValue.length === 0 ? "" : (isRTL ? umValue.reverse() : umValue).join("");
			if ($.isFunction(opts.onUnMask)) {
				var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
				unmaskedValue = (opts.onUnMask(bufferValue, unmaskedValue, opts) || unmaskedValue);
			}
			return unmaskedValue;
		}

		function caret(input, begin, end, notranslate) {
			function translatePosition(pos) {
				if (notranslate !== true && isRTL && typeof pos === "number" && (!opts.greedy || opts.placeholder !== "")) {
					var bffrLght = getBuffer().join("").length; //join is needed because sometimes we get an empty buffer element which must not be counted for the caret position (numeric alias)
					pos = bffrLght - pos;
				}
				return pos;
			}

			var range;
			if (typeof begin === "number") {
				begin = translatePosition(begin);
				end = translatePosition(end);
				end = (typeof end == "number") ? end : begin;
				// if (!$(input).is(":visible")) {
				// 	return;
				// }

				var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
				input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0;

				if (!mobile && opts.insertMode === false && begin === end) end++; //set visualization for insert/overwrite mode
				if (input.setSelectionRange) {
					input.selectionStart = begin;
					input.selectionEnd = end;
				} else if (window.getSelection) {
					range = document.createRange();
					if (input.firstChild === undefined || input.firstChild === null) {
						var textNode = document.createTextNode("");
						input.appendChild(textNode);
					}
					range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length);
					range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length);
					range.collapse(true);
					var sel = window.getSelection();
					sel.removeAllRanges();
					sel.addRange(range);
					//input.focus();
				} else if (input.createTextRange) {
					range = input.createTextRange();
					range.collapse(true);
					range.moveEnd("character", end);
					range.moveStart("character", begin);
					range.select();

				}
				renderColorMask(input, undefined, {begin: begin, end: end});
			} else {
				if (input.setSelectionRange) {
					begin = input.selectionStart;
					end = input.selectionEnd;
				} else if (window.getSelection) {
					range = window.getSelection().getRangeAt(0);
					if (range.commonAncestorContainer.parentNode === input || range.commonAncestorContainer === input) {
						begin = range.startOffset;
						end = range.endOffset;
					}
				} else if (document.selection && document.selection.createRange) {
					range = document.selection.createRange();
					begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length);
					end = begin + range.text.length;
				}
				/*eslint-disable consistent-return */
				return {
					"begin": translatePosition(begin),
					"end": translatePosition(end)
				};
				/*eslint-enable consistent-return */
			}
		}

		function determineLastRequiredPosition(returnDefinition) {
			var buffer = getBuffer(),
				bl = buffer.length,
				pos, lvp = getLastValidPosition(),
				positions = {},
				lvTest = getMaskSet().validPositions[lvp],
				ndxIntlzr = lvTest !== undefined ? lvTest.locator.slice() : undefined,
				testPos;
			for (pos = lvp + 1; pos < buffer.length; pos++) {
				testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
				ndxIntlzr = testPos.locator.slice();
				positions[pos] = $.extend(true, {}, testPos);
			}

			var lvTestAlt = lvTest && lvTest.alternation !== undefined ? lvTest.locator[lvTest.alternation] : undefined;
			for (pos = bl - 1; pos > lvp; pos--) {
				testPos = positions[pos];
				if ((testPos.match.optionality ||
					testPos.match.optionalQuantifier ||
					(lvTestAlt &&
					((lvTestAlt !== positions[pos].locator[lvTest.alternation] && testPos.match.fn != null) ||
					(testPos.match.fn === null && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && getTests(pos)[0].def !== "")))) &&
					buffer[pos] === getPlaceholder(pos, testPos.match)) {
					bl--;
				} else break;
			}
			return returnDefinition ? {
					"l": bl,
					"def": positions[bl] ? positions[bl].match : undefined
				} : bl;
		}

		function clearOptionalTail(buffer) {
			var rl = determineLastRequiredPosition(),
				validPos, bl = buffer.length;

			while (rl < bl && !isMask(rl + 1) && (validPos = getTest(rl + 1)) && validPos.match.optionality !== true && validPos.match.optionalQuantifier !== true) {
				rl++;
			}

			while ((validPos = getTest(rl - 1)) && validPos.match.optionality && validPos.input === opts.skipOptionalPartCharacter) {
				rl--;
			}
			buffer.splice(rl);
			return buffer;
		}

		function isComplete(buffer) { //return true / false / undefined (repeat *)
			if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
			if (opts.repeat === "*") return undefined;
			var complete = false,
				lrp = determineLastRequiredPosition(true),
				aml = seekPrevious(lrp.l);

			if (lrp.def === undefined || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
				complete = true;
				for (var i = 0; i <= aml; i++) {
					var test = getTestTemplate(i).match;
					if ((test.fn !== null && getMaskSet().validPositions[i] === undefined && test.optionality !== true && test.optionalQuantifier !== true) || (test.fn === null && buffer[i] !== getPlaceholder(i, test))) {
						complete = false;
						break;
					}
				}
			}
			return complete;
		}


		function handleRemove(input, k, pos, strict) {
			function generalize() {
				if (opts.keepStatic) {
					var validInputs = [],
						lastAlt = getLastValidPosition(-1, true), positionsClone = $.extend(true, {}, getMaskSet().validPositions),
						prevAltPos = getMaskSet().validPositions[lastAlt];
					//find last alternation
					for (; lastAlt >= 0; lastAlt--) {
						var altPos = getMaskSet().validPositions[lastAlt];
						if (altPos) {
							if (altPos.generatedInput !== true && /[0-9a-bA-Z]/.test(altPos.input)) {
								validInputs.push(altPos.input);
							}
							delete getMaskSet().validPositions[lastAlt];
							if (altPos.alternation !== undefined && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) {
								break;
							}
							prevAltPos = altPos;
						}
					}

					if (lastAlt > -1) {
						getMaskSet().p = seekNext(getLastValidPosition(-1, true));
						while (validInputs.length > 0) {
							var keypress = new $.Event("keypress");
							keypress.which = validInputs.pop().charCodeAt(0);
							EventHandlers.keypressEvent.call(input, keypress, true, false, false, getMaskSet().p);
						}
					} else getMaskSet().validPositions = $.extend(true, {}, positionsClone); //restore original positions
				}
			}

			if (opts.numericInput || isRTL) {
				if (k === Inputmask.keyCode.BACKSPACE) {
					k = Inputmask.keyCode.DELETE;
				} else if (k === Inputmask.keyCode.DELETE) {
					k = Inputmask.keyCode.BACKSPACE;
				}

				if (isRTL) {
					var pend = pos.end;
					pos.end = pos.begin;
					pos.begin = pend;
				}
			}

			if (k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || opts.insertMode === false)) {
				pos.begin = seekPrevious(pos.begin);
				if (getMaskSet().validPositions[pos.begin] !== undefined && (getMaskSet().validPositions[pos.begin].input === opts.groupSeparator || getMaskSet().validPositions[pos.begin].input === opts.radixPoint)) {
					pos.begin--;
				}
			} else if (k === Inputmask.keyCode.DELETE && pos.begin === pos.end) {
				pos.end = isMask(pos.end, true) ? pos.end + 1 : seekNext(pos.end) + 1;
				if (getMaskSet().validPositions[pos.begin] !== undefined && (getMaskSet().validPositions[pos.begin].input === opts.groupSeparator || getMaskSet().validPositions[pos.begin].input === opts.radixPoint)) {
					pos.end++;
				}
			}

			stripValidPositions(pos.begin, pos.end, false, strict);
			if (strict !== true) {
				generalize(); //revert the alternation
			}
			var lvp = getLastValidPosition(pos.begin, true);
			if (lvp < pos.begin) {
				//if (lvp === -1) resetMaskSet();
				getMaskSet().p = seekNext(lvp);
			} else if (strict !== true) {
				getMaskSet().p = pos.begin;
			}
		}

		var EventRuler = {
			on: function (input, eventName, eventHandler) {
				var ev = function (e) {
					// console.log("triggered " + e.type);

					if (this.inputmask === undefined && this.nodeName !== "FORM") { //happens when cloning an object with jquery.clone
						var imOpts = $.data(this, "_inputmask_opts");
						if (imOpts) (new Inputmask(imOpts)).mask(this);
						else EventRuler.off(this);
					} else if (e.type !== "setvalue" && this.nodeName !== "FORM" && (this.disabled || (this.readOnly && !(e.type === "keydown" && (e.ctrlKey && e.keyCode === 67) || (opts.tabThrough === false && e.keyCode === Inputmask.keyCode.TAB))))) {
						e.preventDefault();
					} else {
						switch (e.type) {
							case "input":
								if (skipInputEvent === true) {
									skipInputEvent = false;
									return e.preventDefault();
								}
								break;
							case "keydown":
								//Safari 5.1.x - modal dialog fires keypress twice workaround
								skipKeyPressEvent = false;
								skipInputEvent = false;
								break;
							case "keypress":
								if (skipKeyPressEvent === true) {
									return e.preventDefault();
								}
								skipKeyPressEvent = true;
								break;
							case "click":
								if (iemobile || iphone) {
									var that = this, args = arguments;
									setTimeout(function () {
										eventHandler.apply(that, args);
									}, 0);
									return false;
								}
								break;
						}
						// console.log("executed " + e.type);
						var returnVal = eventHandler.apply(this, arguments);
						if (returnVal === false) {
							e.preventDefault();
							e.stopPropagation();
						}
						return returnVal;
					}
				};
				//keep instance of the event
				input.inputmask.events[eventName] = input.inputmask.events[eventName] || [];
				input.inputmask.events[eventName].push(ev);

				if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
					if (input.form != null) $(input.form).on(eventName, ev);
				} else {
					$(input).on(eventName, ev);
				}
			},
			off: function (input, event) {
				if (input.inputmask && input.inputmask.events) {
					var events;
					if (event) {
						events = [];
						events[event] = input.inputmask.events[event];
					} else {
						events = input.inputmask.events;
					}
					$.each(events, function (eventName, evArr) {
						while (evArr.length > 0) {
							var ev = evArr.pop();
							if ($.inArray(eventName, ["submit", "reset"]) !== -1) {
								if (input.form != null) $(input.form).off(eventName, ev);
							} else {
								$(input).off(eventName, ev);
							}
						}
						delete input.inputmask.events[eventName];
					});
				}
			}
		};
		var EventHandlers = {
			keydownEvent: function (e) {
				function isInputEventSupported(eventName) {
					var el = document.createElement("input"),
						evName = "on" + eventName,
						isSupported = (evName in el);
					if (!isSupported) {
						el.setAttribute(evName, "return;");
						isSupported = typeof el[evName] == "function";
					}
					el = null;
					return isSupported;
				}

				var input = this,
					$input = $(input),
					k = e.keyCode,
					pos = caret(input);

				//backspace, delete, and escape get special treatment
				if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || (iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI) || (e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut"))) { //backspace/delete
					e.preventDefault(); //stop default action but allow propagation
					handleRemove(input, k, pos);
					writeBuffer(input, getBuffer(true), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join(""));
					if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
						$input.trigger("cleared");
					} else if (isComplete(getBuffer()) === true) {
						$input.trigger("complete");
					}
				} else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) { //when END or PAGE_DOWN pressed set position at lastmatch
					e.preventDefault();
					var caretPos = seekNext(getLastValidPosition());
					if (!opts.insertMode && caretPos === getMaskSet().maskLength && !e.shiftKey) caretPos--;
					caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, true);
				} else if ((k === Inputmask.keyCode.HOME && !e.shiftKey) || k === Inputmask.keyCode.PAGE_UP) { //Home or page_up
					e.preventDefault();
					caret(input, 0, e.shiftKey ? pos.begin : 0, true);
				} else if (((opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE) || (k === 90 && e.ctrlKey)) && e.altKey !== true) { //escape && undo && #762
					checkVal(input, true, false, undoValue.split(""));
					$input.trigger("click");
				} else if (k === Inputmask.keyCode.INSERT && !(e.shiftKey || e.ctrlKey)) { //insert
					opts.insertMode = !opts.insertMode;
					caret(input, !opts.insertMode && pos.begin === getMaskSet().maskLength ? pos.begin - 1 : pos.begin);
				} else if (opts.tabThrough === true && k === Inputmask.keyCode.TAB) {
					if (e.shiftKey === true) {
						if (getTest(pos.begin).match.fn === null) {
							pos.begin = seekNext(pos.begin);
						}
						pos.end = seekPrevious(pos.begin, true);
						pos.begin = seekPrevious(pos.end, true);
					} else {
						pos.begin = seekNext(pos.begin, true);
						pos.end = seekNext(pos.begin, true);
						if (pos.end < getMaskSet().maskLength) pos.end--;
					}
					if (pos.begin < getMaskSet().maskLength) {
						e.preventDefault();
						caret(input, pos.begin, pos.end);
					}
				} else if (!e.shiftKey) {
					if (opts.insertMode === false) {
						if (k === Inputmask.keyCode.RIGHT) {
							setTimeout(function () {
								var caretPos = caret(input);
								caret(input, caretPos.begin);
							}, 0);
						} else if (k === Inputmask.keyCode.LEFT) {
							setTimeout(function () {
								var caretPos = caret(input);
								caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
							}, 0);
						}
					}
				}
				opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts);
				ignorable = $.inArray(k, opts.ignorables) !== -1;
			},
			keypressEvent: function (e, checkval, writeOut, strict, ndx) {
				var input = this,
					$input = $(input),
					k = e.which || e.charCode || e.keyCode;

				if (checkval !== true && (!(e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable))) {
					if (k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("")) {
						undoValue = getBuffer().join("");
						// e.preventDefault();
						setTimeout(function () {
							$input.trigger("change");
						}, 0);
					}
					return true;
				} else {
					if (k) {
						//special treat the decimal separator
						if (k === 46 && e.shiftKey === false && opts.radixPoint !== "") k = opts.radixPoint.charCodeAt(0);
						var pos = checkval ? {
									begin: ndx,
									end: ndx
								} : caret(input),
							forwardPosition, c = String.fromCharCode(k);

						getMaskSet().writeOutBuffer = true;
						var valResult = isValid(pos, c, strict);
						if (valResult !== false) {
							resetMaskSet(true);
							forwardPosition = valResult.caret !== undefined ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos);
							getMaskSet().p = forwardPosition; //needed for checkval
						}

						if (writeOut !== false) {
							var self = this;
							setTimeout(function () {
								opts.onKeyValidation.call(self, k, valResult, opts);
							}, 0);
							if (getMaskSet().writeOutBuffer && valResult !== false) {
								var buffer = getBuffer();
								writeBuffer(input, buffer, (opts.numericInput && valResult.caret === undefined) ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== true);
								if (checkval !== true) {
									setTimeout(function () { //timeout needed for IE
										if (isComplete(buffer) === true) $input.trigger("complete");
									}, 0);
								}
							}
						}

						e.preventDefault();

						if (checkval) {
							valResult.forwardPosition = forwardPosition;
							return valResult;
						}
					}
				}
			},
			pasteEvent: function (e) {
				var input = this,
					ev = e.originalEvent || e,
					$input = $(input),
					inputValue = input.inputmask._valueGet(true),
					caretPos = caret(input),
					tempValue;

				if (isRTL) {
					tempValue = caretPos.end;
					caretPos.end = caretPos.begin;
					caretPos.begin = tempValue;
				}

				var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
					valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);

				if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("")) valueBeforeCaret = "";
				if (valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("")) valueAfterCaret = "";
				if (isRTL) {
					tempValue = valueBeforeCaret;
					valueBeforeCaret = valueAfterCaret;
					valueAfterCaret = tempValue;
				}

				if (window.clipboardData && window.clipboardData.getData) { // IE
					inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
				} else if (ev.clipboardData && ev.clipboardData.getData) {
					inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
				} else return true; //allow native paste event as fallback ~ masking will continue by inputfallback

				var pasteValue = inputValue;
				if ($.isFunction(opts.onBeforePaste)) {
					pasteValue = opts.onBeforePaste(inputValue, opts);
					if (pasteValue === false) {
						return e.preventDefault();
					}
					if (!pasteValue) {
						pasteValue = inputValue;
					}
				}
				checkVal(input, false, false, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split(""));
				writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join(""));
				if (isComplete(getBuffer()) === true) {
					$input.trigger("complete");
				}

				return e.preventDefault();
			},
			inputFallBackEvent: function (e) { //fallback when keypress fails
				var input = this,
					inputValue = input.inputmask._valueGet();

				//console.log(inputValue);
				if (getBuffer().join("") !== inputValue) {
					var caretPos = caret(input);
					inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), "");

					if (iemobile) { //iemobile just set the character at the end althought the caret position is correctly set
						var inputChar = inputValue.replace(getBuffer().join(""), "");
						if (inputChar.length === 1) {
							var keypress = new $.Event("keypress");
							keypress.which = inputChar.charCodeAt(0);
							EventHandlers.keypressEvent.call(input, keypress, true, true, false, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1);
							return false;
						}
					}

					if (caretPos.begin > inputValue.length) {
						caret(input, inputValue.length);
						caretPos = caret(input);
					}
					//detect & treat possible backspace before static
					if ((getBuffer().length - inputValue.length) === 1 && inputValue.charAt(caretPos.begin) !== getBuffer()[caretPos.begin] && inputValue.charAt(caretPos.begin + 1) !== getBuffer()[caretPos.begin] && !isMask(caretPos.begin)) {
						e.keyCode = Inputmask.keyCode.BACKSPACE;
						EventHandlers.keydownEvent.call(input, e);
					} else {
						var lvp = getLastValidPosition() + 1;
						var bufferTemplate = getBufferTemplate().join(""); //getBuffer().slice(lvp).join('');
						while (inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$") === null) {
							bufferTemplate = bufferTemplate.slice(1);
						}
						inputValue = inputValue.replace(bufferTemplate, "");
						inputValue = inputValue.split("");
						checkVal(input, true, false, inputValue, e, caretPos.begin < lvp);

						if (isComplete(getBuffer()) === true) {
							$(input).trigger("complete");
						}
					}
					e.preventDefault();
				}
			},
			setValueEvent: function (e) {
				this.inputmask.refreshValue = false;
				var input = this,
					value = input.inputmask._valueGet();
				checkVal(input, true, false, ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(value, opts) || value) : value).split(""));
				undoValue = getBuffer().join("");
				if ((opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("")) {
					input.inputmask._valueSet("");
				}
			},
			focusEvent: function (e) {
				var input = this,
					nptValue = input.inputmask._valueGet();
				if (opts.showMaskOnFocus && (!opts.showMaskOnHover || (opts.showMaskOnHover && nptValue === ""))) {
					if (input.inputmask._valueGet() !== getBuffer().join("")) {
						writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()));
					} else if (mouseEnter === false) { //only executed on focus without mouseenter
						caret(input, seekNext(getLastValidPosition()));
					}
				}
				if (opts.positionCaretOnTab === true) {
					EventHandlers.clickEvent.apply(input, [e, true]);
				}
				undoValue = getBuffer().join("");
			},
			mouseleaveEvent: function (e) {
				var input = this;
				mouseEnter = false;
				if (opts.clearMaskOnLostFocus && document.activeElement !== input) {
					var buffer = getBuffer().slice(),
						nptValue = input.inputmask._valueGet();
					if (nptValue !== input.getAttribute("placeholder") && nptValue !== "") {
						if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
							buffer = [];
						} else { //clearout optional tail of the mask
							clearOptionalTail(buffer);
						}
						writeBuffer(input, buffer);
					}
				}
			},
			clickEvent: function (e, tabbed) {
				function doRadixFocus(clickPos) {
					if (opts.radixPoint !== "") {
						var vps = getMaskSet().validPositions;
						if (vps[clickPos] === undefined || (vps[clickPos].input === getPlaceholder(clickPos))) {
							if (clickPos < seekNext(-1)) return true;
							var radixPos = $.inArray(opts.radixPoint, getBuffer());
							if (radixPos !== -1) {
								for (var vp in vps) {
									if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) {
										return false;
									}
								}
								return true;
							}
						}
					}
					return false;
				}

				var input = this;
				setTimeout(function () { //needed for Chrome ~ initial selection clears after the clickevent
					if (document.activeElement === input) {
						var selectedCaret = caret(input);
						if (tabbed) selectedCaret.begin = selectedCaret.end;
						if (selectedCaret.begin === selectedCaret.end) {
							switch (opts.positionCaretOnClick) {
								case "none":
									break;
								case "radixFocus":
									if (doRadixFocus(selectedCaret.begin)) {
										var radixPos = $.inArray(opts.radixPoint, getBuffer().join(""));
										caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
										break;
									}
								default: //lvp:
									var clickPosition = selectedCaret.begin,
										lvclickPosition = getLastValidPosition(clickPosition, true),
										lastPosition = seekNext(lvclickPosition);

									if (clickPosition < lastPosition) {
										caret(input, !isMask(clickPosition) && !isMask(clickPosition - 1) ? seekNext(clickPosition) : clickPosition);
									} else {
										var placeholder = getPlaceholder(lastPosition);
										if ((placeholder !== "" && getBuffer()[lastPosition] !== placeholder && getTest(lastPosition).match.optionalQuantifier !== true) || (!isMask(lastPosition) && getTest(lastPosition).match.def === placeholder)) {
											lastPosition = seekNext(lastPosition);
										}
										caret(input, lastPosition);
									}
									break;
							}
						}
					}
				}, 0);
			},
			dblclickEvent: function (e) {
				var input = this;
				setTimeout(function () {
					caret(input, 0, seekNext(getLastValidPosition()));
				}, 0);
			},
			cutEvent: function (e) {
				var input = this,
					$input = $(input),
					pos = caret(input),
					ev = e.originalEvent || e;

				//correct clipboardData
				var clipboardData = window.clipboardData || ev.clipboardData,
					clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
				clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join(""));
				if (document.execCommand) document.execCommand("copy"); // copy selected content to system clipbaord

				handleRemove(input, Inputmask.keyCode.DELETE, pos);
				writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join(""));

				if (input.inputmask._valueGet() === getBufferTemplate().join("")) {
					$input.trigger("cleared");
				}
			},
			blurEvent: function (e) {
				var $input = $(this),
					input = this;
				if (input.inputmask) {
					var nptValue = input.inputmask._valueGet(),
						buffer = getBuffer().slice();
					if (undoValue !== buffer.join("")) {
						setTimeout(function () { //change event should be triggered after the other buffer manipulations on blur
							$input.trigger("change");
							undoValue = buffer.join("");
						}, 0);
					}
					if (nptValue !== "") {
						if (opts.clearMaskOnLostFocus) {
							if (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("")) {
								buffer = [];
							} else { //clearout optional tail of the mask
								clearOptionalTail(buffer);
							}
						}
						if (isComplete(buffer) === false) {
							setTimeout(function () {
								$input.trigger("incomplete");
							}, 0);
							if (opts.clearIncomplete) {
								resetMaskSet();
								if (opts.clearMaskOnLostFocus) {
									buffer = [];
								} else {
									buffer = getBufferTemplate().slice();
								}
							}
						}

						writeBuffer(input, buffer, undefined, e);
					}
				}
			},
			mouseenterEvent: function (e) {
				var input = this;
				mouseEnter = true;
				if (document.activeElement !== input && opts.showMaskOnHover) {
					if (input.inputmask._valueGet() !== getBuffer().join("")) {
						writeBuffer(input, getBuffer());
					}
				}
			},
			submitEvent: function (e) { //trigger change on submit if any
				if (undoValue !== getBuffer().join("")) {
					$el.trigger("change");
				}
				if (opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("")) {
					el.inputmask._valueSet(""); //clear masktemplete on submit and still has focus
				}
				if (opts.removeMaskOnSubmit) {
					el.inputmask._valueSet(el.inputmask.unmaskedvalue(), true);
					setTimeout(function () {
						writeBuffer(el, getBuffer());
					}, 0);
				}
			},
			resetEvent: function (e) {
				el.inputmask.refreshValue = true; //indicate a forced refresh when there is a call to the value before leaving the triggering event fn
				setTimeout(function () {
					$el.trigger("setvalue");
				}, 0);
			}
		};


		function initializeColorMask(input) {
			function findCaretPos(clientx) {
				//calculate text width
				var e = document.createElement('span'), caretPos;
				for (var style in computedStyle) { //clone styles
					if (isNaN(style) && style.indexOf("font") !== -1) {
						e.style[style] = computedStyle[style];
					}
				}
				e.style.textTransform = computedStyle.textTransform;
				e.style.letterSpacing = computedStyle.letterSpacing;
				e.style.position = "absolute";
				e.style.height = "auto";
				e.style.width = "auto";
				e.style.visibility = "hidden";
				e.style.whiteSpace = "nowrap";

				document.body.appendChild(e);
				var inputText = input.inputmask._valueGet(), previousWidth = 0, itl;
				for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
					e.innerHTML += inputText.charAt(caretPos) || "_";
					if (e.offsetWidth >= clientx) {
						var offset1 = (clientx - previousWidth);
						var offset2 = e.offsetWidth - clientx;
						e.innerHTML = inputText.charAt(caretPos);
						offset1 -= (e.offsetWidth / 3);
						caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
						break;
					}
					previousWidth = e.offsetWidth;
				}
				document.body.removeChild(e);
				return caretPos;
			}

			function position() {
				colorMask.style.position = "absolute";
				colorMask.style.top = offset.top + "px";
				colorMask.style.left = offset.left + "px";
				colorMask.style.width = parseInt(input.offsetWidth) - parseInt(computedStyle.paddingLeft) - parseInt(computedStyle.paddingRight) - parseInt(computedStyle.borderLeftWidth) - parseInt(computedStyle.borderRightWidth) + "px";
				colorMask.style.height = parseInt(input.offsetHeight) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.borderTopWidth) - parseInt(computedStyle.borderBottomWidth) + "px";

				colorMask.style.lineHeight = colorMask.style.height;
				colorMask.style.zIndex = isNaN(computedStyle.zIndex) ? -1 : computedStyle.zIndex - 1;
				colorMask.style.webkitAppearance = "textfield";
				colorMask.style.mozAppearance = "textfield";
				colorMask.style.Appearance = "textfield";

			}

			var offset = $(input).position(),
				computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
				parentNode = input.parentNode;

			colorMask = document.createElement("div");
			document.body.appendChild(colorMask); //insert at body to prevent css clash :last-child for example
			for (var style in computedStyle) { //clone styles
				if (isNaN(style) && style !== "cssText" && style.indexOf("webkit") == -1) {
					colorMask.style[style] = computedStyle[style];
				}
			}

			//restyle input
			input.style.backgroundColor = "transparent";
			input.style.color = "transparent";
			input.style.webkitAppearance = "caret";
			input.style.mozAppearance = "caret";
			input.style.Appearance = "caret";

			position();

			//event passthrough
			$(window).on("resize", function (e) {
				offset = $(input).position();
				computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
				position();
			});
			$(input).on("click", function (e) {
				caret(input, findCaretPos(e.clientX));
				return EventHandlers.clickEvent.call(this, [e]);
			});
			$(input).on("keydown", function (e) {
				if (!e.shiftKey && opts.insertMode !== false) {
					setTimeout(function () {
						renderColorMask(input);
					}, 0);
				}
			});
		}

		function renderColorMask(input, buffer, caretPos) {
			function handleStatic() {
				if (!isStatic && (test.fn === null || testPos.input === undefined)) {
					isStatic = true;
					maskTemplate += "<span class='im-static''>"
				} else if (isStatic && (test.fn !== null && testPos.input !== undefined)) {
					isStatic = false;
					maskTemplate += "</span>"
				}
			}

			if (colorMask !== undefined) {
				buffer = buffer || getBuffer();
				if (caretPos === undefined) {
					caretPos = caret(input);
				} else if (caretPos.begin === undefined) {
					caretPos = {begin: caretPos, end: caretPos};
				}

				var maskTemplate = "", isStatic = false;
				if (buffer != "") {
					var ndxIntlzr, pos = 0,
						test, testPos, lvp = getLastValidPosition();
					do {
						if (pos === caretPos.begin && document.activeElement === input) {
							maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>";
						}
						if (getMaskSet().validPositions[pos]) {
							testPos = getMaskSet().validPositions[pos];
							test = testPos.match;
							ndxIntlzr = testPos.locator.slice();
							handleStatic();
							maskTemplate += testPos.input;
						} else {
							testPos = getTestTemplate(pos, ndxIntlzr, pos - 1);
							test = testPos.match;
							ndxIntlzr = testPos.locator.slice();
							if (opts.jitMasking === false || pos < lvp || (typeof opts.jitMasking === "number" && isFinite(opts.jitMasking) && opts.jitMasking > pos)) {
								handleStatic();
								maskTemplate += getPlaceholder(pos, test);
							}
						}
						pos++;
					} while ((maxLength === undefined || pos < maxLength) && (test.fn !== null || test.def !== "") || lvp > pos);
				}
				colorMask.innerHTML = maskTemplate;
			}
		}

		function mask(elem) {
			function isElementTypeSupported(input, opts) {
				function patchValueProperty(npt) {
					var valueGet;
					var valueSet;

					function patchValhook(type) {
						if ($.valHooks && ($.valHooks[type] === undefined || $.valHooks[type].inputmaskpatch !== true)) {
							var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function (elem) {
									return elem.value;
								};
							var valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function (elem, value) {
									elem.value = value;
									return elem;
								};

							$.valHooks[type] = {
								get: function (elem) {
									if (elem.inputmask) {
										if (elem.inputmask.opts.autoUnmask) {
											return elem.inputmask.unmaskedvalue();
										} else {
											var result = valhookGet(elem);
											return getLastValidPosition(undefined, undefined, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== true ? result : "";
										}
									} else return valhookGet(elem);
								},
								set: function (elem, value) {
									var $elem = $(elem),
										result;
									result = valhookSet(elem, value);
									if (elem.inputmask) {
										$elem.trigger("setvalue");
									}
									return result;
								},
								inputmaskpatch: true
							};
						}
					}

					function getter() {
						if (this.inputmask) {
							return this.inputmask.opts.autoUnmask ?
								this.inputmask.unmaskedvalue() :
								(getLastValidPosition() !== -1 || opts.nullable !== true ?
									(document.activeElement === this && opts.clearMaskOnLostFocus ?
										(isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") :
										valueGet.call(this)) :
									"");
						} else return valueGet.call(this);
					}

					function setter(value) {
						valueSet.call(this, value);
						if (this.inputmask) {
							$(this).trigger("setvalue");
						}
					}

					function installNativeValueSetFallback(npt) {
						EventRuler.on(npt, "mouseenter", function (event) {
							var $input = $(this),
								input = this,
								value = input.inputmask._valueGet();
							if (value !== getBuffer().join("") /*&& getLastValidPosition() > 0*/) {
								$input.trigger("setvalue");
							}
						});
					}

					if (!npt.inputmask.__valueGet) {
						if (opts.noValuePatching !== true) {
							if (Object.getOwnPropertyDescriptor) {
								if (typeof Object.getPrototypeOf !== "function") {
									Object.getPrototypeOf = typeof "test".__proto__ === "object" ? function (object) {
											return object.__proto__;
										} : function (object) {
											return object.constructor.prototype;
										};
								}

								var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : undefined;
								if (valueProperty && valueProperty.get && valueProperty.set) {
									valueGet = valueProperty.get;
									valueSet = valueProperty.set;
									Object.defineProperty(npt, "value", {
										get: getter,
										set: setter,
										configurable: true
									});
								} else if (npt.tagName !== "INPUT") {
									valueGet = function () {
										return this.textContent;
									};
									valueSet = function (value) {
										this.textContent = value;
									};
									Object.defineProperty(npt, "value", {
										get: getter,
										set: setter,
										configurable: true
									});
								}
							} else if (document.__lookupGetter__ && npt.__lookupGetter__("value")) {
								valueGet = npt.__lookupGetter__("value");
								valueSet = npt.__lookupSetter__("value");

								npt.__defineGetter__("value", getter);
								npt.__defineSetter__("value", setter);
							}
							npt.inputmask.__valueGet = valueGet; //store native property getter
							npt.inputmask.__valueSet = valueSet; //store native property setter
						}
						npt.inputmask._valueGet = function (overruleRTL) {
							return isRTL && overruleRTL !== true ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
						};
						npt.inputmask._valueSet = function (value, overruleRTL) { //null check is needed for IE8 => otherwise converts to "null"
							valueSet.call(this.el, (value === null || value === undefined) ? "" : ((overruleRTL !== true && isRTL) ? value.split("").reverse().join("") : value));
						};

						if (valueGet === undefined) { //jquery.val fallback
							valueGet = function () {
								return this.value;
							};
							valueSet = function (value) {
								this.value = value;
							};
							patchValhook(npt.type);
							installNativeValueSetFallback(npt);
						}
					}
				}

				var elementType = input.getAttribute("type");
				var isSupported = (input.tagName === "INPUT" && $.inArray(elementType, opts.supportsInputType) !== -1) || input.isContentEditable || input.tagName === "TEXTAREA";
				if (!isSupported) {
					if (input.tagName === "INPUT") {
						var el = document.createElement("input");
						el.setAttribute("type", elementType);
						isSupported = el.type === "text"; //apply mask only if the type is not natively supported
						el = null;
					} else isSupported = "partial";
				}
				if (isSupported !== false) {
					patchValueProperty(input);
				}
				return isSupported;
			}

			var isSupported = isElementTypeSupported(elem, opts);
			if (isSupported !== false) {
				el = elem;
				$el = $(el);

				if (el.dir === "rtl" || opts.rightAlign) {
					el.style.textAlign = "right";
				}

				if (el.dir === "rtl" || opts.numericInput) {
					el.dir = "ltr";
					el.removeAttribute("dir");
					el.inputmask.isRTL = true;
					isRTL = true;
				}

				if (opts.colorMask === true) {
					initializeColorMask(el);
				}

				if (android) {
					if (el.hasOwnProperty("inputmode")) {
						el.inputmode = opts.inputmode;
						el.setAttribute("inputmode", opts.inputmode);
					}
					if (opts.androidHack === "rtfm") {
						if (opts.colorMask !== true) {
							initializeColorMask(el);
						}
						el.type = "password";
					}
				}

				//unbind all events - to make sure that no other mask will interfere when re-masking
				EventRuler.off(el);
				if (isSupported === true) {
					//bind events
					EventRuler.on(el, "submit", EventHandlers.submitEvent);
					EventRuler.on(el, "reset", EventHandlers.resetEvent);

					EventRuler.on(el, "mouseenter", EventHandlers.mouseenterEvent);
					EventRuler.on(el, "blur", EventHandlers.blurEvent);
					EventRuler.on(el, "focus", EventHandlers.focusEvent);
					EventRuler.on(el, "mouseleave", EventHandlers.mouseleaveEvent);
					if (opts.colorMask !== true)
						EventRuler.on(el, "click", EventHandlers.clickEvent);
					EventRuler.on(el, "dblclick", EventHandlers.dblclickEvent);
					EventRuler.on(el, "paste", EventHandlers.pasteEvent);
					EventRuler.on(el, "dragdrop", EventHandlers.pasteEvent);
					EventRuler.on(el, "drop", EventHandlers.pasteEvent);
					EventRuler.on(el, "cut", EventHandlers.cutEvent);
					EventRuler.on(el, "complete", opts.oncomplete);
					EventRuler.on(el, "incomplete", opts.onincomplete);
					EventRuler.on(el, "cleared", opts.oncleared);
					if (!android || opts.inputEventOnly !== true) {
						EventRuler.on(el, "keydown", EventHandlers.keydownEvent);
						EventRuler.on(el, "keypress", EventHandlers.keypressEvent);
					}
					EventRuler.on(el, "compositionstart", $.noop);
					EventRuler.on(el, "compositionupdate", $.noop);
					EventRuler.on(el, "compositionend", $.noop);
					EventRuler.on(el, "keyup", $.noop);
					EventRuler.on(el, "input", EventHandlers.inputFallBackEvent);
					EventRuler.on(el, "beforeinput", $.noop); //https://github.com/w3c/input-events - to implement
				}
				EventRuler.on(el, "setvalue", EventHandlers.setValueEvent);

				//apply mask
				getBufferTemplate(); //initialize the buffer and getmasklength
				if (el.inputmask._valueGet() !== "" || opts.clearMaskOnLostFocus === false || document.activeElement === el) {
					var initialValue = $.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(el.inputmask._valueGet(), opts) || el.inputmask._valueGet()) : el.inputmask._valueGet();
					checkVal(el, true, false, initialValue.split(""));
					var buffer = getBuffer().slice();
					undoValue = buffer.join("");
					// Wrap document.activeElement in a try/catch block since IE9 throw "Unspecified error" if document.activeElement is undefined when we are in an IFrame.
					if (isComplete(buffer) === false) {
						if (opts.clearIncomplete) {
							resetMaskSet();
						}
					}
					if (opts.clearMaskOnLostFocus && document.activeElement !== el) {
						if (getLastValidPosition() === -1) {
							buffer = [];
						} else {
							clearOptionalTail(buffer);
						}
					}
					writeBuffer(el, buffer);
					if (document.activeElement === el) { //position the caret when in focus
						caret(el, seekNext(getLastValidPosition()));
					}
				}
			}
		}

//action object
		var valueBuffer;
		if (actionObj !== undefined) {
			switch (actionObj.action) {
				case "isComplete":
					el = actionObj.el;
					return isComplete(getBuffer());
				case "unmaskedvalue":
					if (el === undefined || actionObj.value !== undefined) {
						valueBuffer = actionObj.value;
						valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(valueBuffer, opts) || valueBuffer) : valueBuffer).split("");
						checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
						if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);
					}
					return unmaskedvalue(el);
				case "mask":
					mask(el);
					break;
				case "format":
					valueBuffer = ($.isFunction(opts.onBeforeMask) ? (opts.onBeforeMask(actionObj.value, opts) || actionObj.value) : actionObj.value).split("");
					checkVal(undefined, false, false, isRTL ? valueBuffer.reverse() : valueBuffer);
					if ($.isFunction(opts.onBeforeWrite)) opts.onBeforeWrite(undefined, getBuffer(), 0, opts);

					if (actionObj.metadata) {
						return {
							value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
							metadata: maskScope.call(this, {
								"action": "getmetadata"
							}, maskset, opts)
						};
					}

					return isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");
				case "isValid":
					if (actionObj.value) {
						valueBuffer = actionObj.value.split("");
						checkVal(undefined, false, true, isRTL ? valueBuffer.reverse() : valueBuffer);
					} else {
						actionObj.value = getBuffer().join("");
					}
					var buffer = getBuffer();
					var rl = determineLastRequiredPosition(),
						lmib = buffer.length - 1;
					for (; lmib > rl; lmib--) {
						if (isMask(lmib)) break;
					}
					buffer.splice(rl, lmib + 1 - rl);

					return isComplete(buffer) && actionObj.value === getBuffer().join("");
				case "getemptymask":
					return getBufferTemplate().join("");
				case "remove":
					if (el) {
						$el = $(el);
						//writeout the unmaskedvalue
						el.inputmask._valueSet(unmaskedvalue(el));
						//unbind all events
						EventRuler.off(el);
						//restore the value property
						var valueProperty;
						if (Object.getOwnPropertyDescriptor && Object.getPrototypeOf) {
							valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value");
							if (valueProperty) {
								if (el.inputmask.__valueGet) {
									Object.defineProperty(el, "value", {
										get: el.inputmask.__valueGet,
										set: el.inputmask.__valueSet,
										configurable: true
									});
								}
							}
						} else if (document.__lookupGetter__ && el.__lookupGetter__("value")) {
							if (el.inputmask.__valueGet) {
								el.__defineGetter__("value", el.inputmask.__valueGet);
								el.__defineSetter__("value", el.inputmask.__valueSet);
							}
						}
						//clear data
						el.inputmask = undefined;
					}
					return el;
					break;
				case "getmetadata":
					if ($.isArray(maskset.metadata)) {
						var maskTarget = getMaskTemplate(true, 0, false).join("");
						$.each(maskset.metadata, function (ndx, mtdt) {
							if (mtdt.mask === maskTarget) {
								maskTarget = mtdt;
								return false;
							}
						});
						return maskTarget;
					}

					return maskset.metadata;
			}
		}
	}

//make inputmask available
	window.Inputmask = Inputmask;
	return Inputmask;
}));
/*
 * Input Mask plugin for jquery
 * http://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 -	Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 0.0.0-dev
 */

(function (factory) {
	if (typeof define === "function" && define.amd) {
		define(["jquery", "inputmask"], factory);
	} else if (typeof exports === "object") {
		module.exports = factory(require("jquery"), require("./inputmask"));
	} else {
		factory(jQuery, window.Inputmask);
	}
}
(function ($, Inputmask) {
	if ($.fn.inputmask === undefined) {
		//jquery plugin
		$.fn.inputmask = function (fn, options) {
			var nptmask, input = this[0];
			if (options === undefined) options = {};
			if (typeof fn === "string") {
				switch (fn) {
					case "unmaskedvalue":
						return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();
					case "remove":
						return this.each(function () {
							if (this.inputmask) this.inputmask.remove();
						});
					case "getemptymask":
						return input && input.inputmask ? input.inputmask.getemptymask() : "";
					case "hasMaskedValue": //check wheter the returned value is masked or not; currently only works reliable when using jquery.val fn to retrieve the value
						return input && input.inputmask ? input.inputmask.hasMaskedValue() : false;
					case "isComplete":
						return input && input.inputmask ? input.inputmask.isComplete() : true;
					case "getmetadata": //return mask metadata if exists
						return input && input.inputmask ? input.inputmask.getmetadata() : undefined;
					case "setvalue":
						$(input).val(options);
						if (input && input.inputmask === undefined) { //reactivate jquery.clone
							$(input).triggerHandler("setvalue");
						}
						break;
					case "option":
						if (typeof options === "string") {
							if (input && input.inputmask !== undefined) {
								return input.inputmask.option(options);
							}
						} else {
							return this.each(function () {
								if (this.inputmask !== undefined) {
									return this.inputmask.option(options);
								}
							});
						}
						break;
					default:
						options.alias = fn;
						nptmask = new Inputmask(options);
						return this.each(function () {
							nptmask.mask(this);
						});
				}
			} else if (typeof fn == "object") {
				nptmask = new Inputmask(fn);
				if (fn.mask === undefined && fn.alias === undefined) {
					return this.each(function () {
						if (this.inputmask !== undefined) {
							return this.inputmask.option(fn);
						} else nptmask.mask(this);
					});
				} else {
					return this.each(function () {
						nptmask.mask(this);
					});
				}
			} else if (fn === undefined) {
				//look for data-inputmask atributes
				return this.each(function () {
					nptmask = new Inputmask(options);
					nptmask.mask(this);
				});
			}
		};
	}
	return $.fn.inputmask;
}));

/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});

/**
 * jQuery Unveil
 * A very lightweight jQuery plugin to lazy load images
 * http://luis-almeida.github.com/unveil
 *
 * Licensed under the MIT license.
 * Copyright 2013 Luís Almeida
 * https://github.com/luis-almeida
 */

;(function($) {

	$.fn.unveil = function(threshold, callback) {

		var $w = $(window),
			$scroll = $('.main'), // my code
			th = threshold || 0,
			retina = window.devicePixelRatio > 1,
			attrib = retina? "data-src-retina" : "data-src",
			images = this,
			loaded;

		this.one("unveil", function() {
			var source = this.getAttribute(attrib);
			source = source || this.getAttribute("data-src");
			if (source) {
				this.setAttribute("src", source);
				if (typeof callback === "function") callback.call(this);
			}
		});

		function unveil() {
			var inview = images.filter(function() {
				var $e = $(this);
				if ($e.is(":hidden")) return;

				var wt = $w.scrollTop(),
					wb = wt + $w.height(),
					et = $e.offset().top,
					eb = et + $e.height();

				return eb >= wt - th && et <= wb + th;
			});

			loaded = inview.trigger("unveil");
			images = images.not(loaded);
		}

		$w.on("scroll.unveil resize.unveil lookup.unveil", unveil);

		/*my code*/
		$scroll.on("scroll.unveil resize.unveil lookup.unveil changeSize", unveil);
		//! changeSize event if change size of the main container

		unveil();

		return this;

	};

})(window.jQuery || window.Zepto);
/**jQuery Unveil end*/

/**
 *! Isotope PACKAGED v3.0.1
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function u(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,u){var h=a.data(u,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var d=h[e];if(!d||"_"==e.charAt(0))return void r(s+" is not a valid method");var l=d.apply(h,n);o=void 0===o?l:o}),void 0!==o?o:t}function h(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return u(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;h>e;e++){var i=u[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==s.boxSizing,l=0;h>l;l++){var f=u[l],c=s[f],m=parseFloat(c);a[f]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,y=a.paddingTop+a.paddingBottom,g=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,I=a.borderTopWidth+a.borderBottomWidth,z=d&&r,x=t(s.width);x!==!1&&(a.width=x+(z?0:p+_));var S=t(s.height);return S!==!1&&(a.height=S+(z?0:y+I)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(y+I),a.outerWidth=a.width+g,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},u=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=u.length,d=!1;return s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),u=document.querySelectorAll(".js-"+s),h=i.makeArray(a).concat(i.makeArray(u)),d=r+"-options",l=t.jQuery;h.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(d);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var u=new e(t,i);l&&l.data(t,o,u)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",u={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],h={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=h[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var u=n?"paddingTop":"paddingBottom",h=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,u=e-n,h={};h.transform=this.getTranslate(a,u),this.transition({to:h,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(u,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(u,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var c={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(c)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(u&&u.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var u=t.console,h=t.jQuery,d=function(){},l=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=s.prototype;n.extend(c,e.prototype),c.option=function(t){n.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},c._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=i(this.element)},c._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},c._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},c._getContainerSize=d,c._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},c._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},c.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h)if(this.$element=this.$element||h(this.element),e){var o=h.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=d,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},c.handleEvent=n.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},c.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},c.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),n=i._create;i._create=function(){this.id=this.layout.itemGUID++,n.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var n=e[i];this.sortData[i]=n(this.element,this)}}};var o=i.destroy;return i.destroy=function(){o.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(t,e){"use strict";function i(t){this.isotope=t,t&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=i.prototype,o=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return o.forEach(function(t){n[t]=function(){return e.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var e=t(this.isotope.element),i=this.isotope.size&&e;return i&&e.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i=t+e,n="outer"+e;if(this._getMeasurement(i,n),!this[i]){var o=this.getFirstItemSize();this[i]=o&&o[n]||this.isotope.size["inner"+e]}},n.getFirstItemSize=function(){var e=this.isotope.filteredItems[0];return e&&e.element&&t(e.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},i.modes={},i.create=function(t,e){function o(){i.apply(this,arguments)}return o.prototype=Object.create(n),o.prototype.constructor=o,e&&(o.options=e),o.prototype.namespace=t,i.modes[t]=o,o},i}),function(t,e){"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");return i.compatOptions.fitWidth="isFitWidth",i.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0},i.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,s=o/n,r=n-o%n,a=r&&1>r?"round":"floor";s=Math[a](s),this.cols=Math.max(s,1)},i.prototype.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},i.prototype._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this._getColGroup(n),s=Math.min.apply(Math,o),r=o.indexOf(s),a={x:this.columnWidth*r,y:s},u=s+t.size.outerHeight,h=this.cols+1-o.length,d=0;h>d;d++)this.colYs[r+d]=u;return a},i.prototype._getColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++){var o=this.colYs.slice(n,n+t);e[n]=Math.max.apply(Math,o)}return e},i.prototype._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),s=o?n.left:n.right,r=s+i.outerWidth,a=Math.floor(s/this.columnWidth);a=Math.max(0,a);var u=Math.floor(r/this.columnWidth);u-=r%this.columnWidth?0:1,u=Math.min(this.cols-1,u);for(var h=this._getOption("originTop"),d=(h?n.top:n.bottom)+i.outerHeight,l=a;u>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},i.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i.prototype._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.prototype.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),n=i.prototype,o={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)o[s]||(n[s]=e.prototype[s]);var r=n.measureColumns;n.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=n._getOption;return n._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var n={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,n},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(i,n,o,s,r,a){return e(t,i,n,o,s,r,a)}):"object"==typeof module&&module.exports?module.exports=e(t,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope/js/item"),require("isotope/js/layout-mode"),require("isotope/js/layout-modes/masonry"),require("isotope/js/layout-modes/fit-rows"),require("isotope/js/layout-modes/vertical")):t.Isotope=e(t,t.Outlayer,t.getSize,t.matchesSelector,t.fizzyUIUtils,t.Isotope.Item,t.Isotope.LayoutMode)}(window,function(t,e,i,n,o,s,r){function a(t,e){return function(i,n){for(var o=0;o<t.length;o++){var s=t[o],r=i.sortData[s],a=n.sortData[s];if(r>a||a>r){var u=void 0!==e[s]?e[s]:e,h=u?1:-1;return(r>a?1:-1)*h}}return 0}}var u=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=e.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=s,d.LayoutMode=r;var l=d.prototype;l._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),e.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var t in r.modes)this._initLayoutMode(t)},l.reloadItems=function(){this.itemGUID=0,e.prototype.reloadItems.call(this)},l._itemize=function(){for(var t=e.prototype._itemize.apply(this,arguments),i=0;i<t.length;i++){var n=t[i];n.id=this.itemGUID++}return this._updateItemsSortData(t),t},l._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?o.extend(e.options,i):i,this.modes[t]=new e(this)},l.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},l._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},l.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},l._init=l.arrange,l._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},l._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e,e},l._bindArrangeComplete=function(){function t(){e&&i&&n&&o.dispatchEvent("arrangeComplete",null,[o.filteredItems])}var e,i,n,o=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){n=!0,t()})},l._filter=function(t){var e=this.options.filter;e=e||"*";for(var i=[],n=[],o=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a=t[r];if(!a.isIgnored){var u=s(a);u&&i.push(a),u&&a.isHidden?n.push(a):u||a.isHidden||o.push(a)}}return{matches:i,needReveal:n,needHide:o}},l._getFilterTest=function(t){return u&&this.options.isJQueryFiltering?function(e){return u(e.element).is(t)}:"function"==typeof t?function(e){return t(e.element)}:function(e){return n(e.element,t)}},l.updateSortData=function(t){var e;t?(t=o.makeArray(t),e=this.getItems(t)):e=this.items,this._getSorters(),this._updateItemsSortData(e)},l._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=f(i)}},l._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&e>i;i++){var n=t[i];n.updateSortData()}};var f=function(){function t(t){if("string"!=typeof t)return t;var i=h(t).split(" "),n=i[0],o=n.match(/^\[(.+)\]$/),s=o&&o[1],r=e(s,n),a=d.sortDataParsers[i[1]];
	return t=a?function(t){return t&&a(r(t))}:function(t){return t&&r(t)}}function e(t,e){return t?function(e){return e.getAttribute(t)}:function(t){var i=t.querySelector(e);return i&&i.textContent}}return t}();d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},l._sort=function(){var t=this.options.sortBy;if(t){var e=[].concat.apply(t,this.sortHistory),i=a(e,this.options.sortAscending);this.filteredItems.sort(i),t!=this.sortHistory[0]&&this.sortHistory.unshift(t)}},l._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},l._resetLayout=function(){e.prototype._resetLayout.call(this),this._mode()._resetLayout()},l._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},l._manageStamp=function(t){this._mode()._manageStamp(t)},l._getContainerSize=function(){return this._mode()._getContainerSize()},l.needsResizeLayout=function(){return this._mode().needsResizeLayout()},l.appended=function(t){var e=this.addItems(t);if(e.length){var i=this._filterRevealAdded(e);this.filteredItems=this.filteredItems.concat(i)}},l.prepended=function(t){var e=this._itemize(t);if(e.length){this._resetLayout(),this._manageStamps();var i=this._filterRevealAdded(e);this.layoutItems(this.filteredItems),this.filteredItems=i.concat(this.filteredItems),this.items=e.concat(this.items)}},l._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},l.insert=function(t){var e=this.addItems(t);if(e.length){var i,n,o=e.length;for(i=0;o>i;i++)n=e[i],this.element.appendChild(n.element);var s=this._filter(e).matches;for(i=0;o>i;i++)e[i].isLayoutInstant=!0;for(this.arrange(),i=0;o>i;i++)delete e[i].isLayoutInstant;this.reveal(s)}};var c=l.remove;return l.remove=function(t){t=o.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,n=0;i&&i>n;n++){var s=e[n];o.removeFrom(this.filteredItems,s)}},l.shuffle=function(){for(var t=0;t<this.items.length;t++){var e=this.items[t];e.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},l._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var n=t.apply(this,e);return this.options.transitionDuration=i,n},l.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});
/*Isotope end*/

/**
 * jquery-match-height master
 * by @liabru
 * http://brm.io/jquery-match-height/
 * License: MIT
 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,a=function(t){return parseFloat(t)||0},i=function(e){var o=1,i=t(e),n=null,r=[];return i.each(function(){var e=t(this),i=e.offset().top-a(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-i))<=o?r[r.length-1]=s.add(e):r.push(e),n=i}),r},n=function(e){var o={byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var a=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(a)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,r._afterUpdate=null,r._rows=i,r._parse=a,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=i(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var i=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var e=t(this),o=e.attr("style"),a=e.css("display");"inline-block"!==a&&"flex"!==a&&"inline-flex"!==a&&(a="block");var i={display:a};i[s.property]="",e.css(i),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}i.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=a(e.css("border-top-width"))+a(e.css("border-bottom-width")),o+=a(e.css("padding-top"))+a(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),a=o.attr("data-mh")||o.attr("data-match-height");a in e?e[a]=e[a].add(o):e[a]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(a,i){if(i&&"resize"===i.type){var n=t(window).width();if(n===e)return;e=n}a?-1===o&&(o=setTimeout(function(){s(i),o=-1},r._throttle)):s(i)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});
/**jquery-match-height master end*/