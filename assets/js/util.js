!function(r){r.fn.navList=function(){var e=r(this);return $a=e.find("a"),b=[],$a.each(function(){var e=r(this),t=Math.max(0,e.parents("li").length-1),a=e.attr("href"),l=e.attr("target");b.push('<a class="link depth-'+t+'"'+(void 0!==l&&""!=l?' target="'+l+'"':"")+(void 0!==a&&""!=a?' href="'+a+'"':"")+'><span class="indent-'+t+'"></span>'+e.text()+"</a>")}),b.join("")},r.fn.panel=function(e){if(0==this.length)return c;if(1<this.length){for(var t=0;t<this.length;t++)r(this[t]).panel(e);return c}var s,c=r(this),a=r("body"),l=r(window),i=c.attr("id");return"jQuery"!=typeof(s=r.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:c,visibleClass:"visible"},e)).target&&(s.target=r(s.target)),c._hide=function(e){s.target.hasClass(s.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),s.target.removeClass(s.visibleClass),window.setTimeout(function(){s.resetScroll&&c.scrollTop(0),s.resetForms&&c.find("form").each(function(){this.reset()})},s.delay))},c.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),s.hideOnClick&&(c.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),c.on("click","a",function(e){var t=r(this),a=t.attr("href"),l=t.attr("target");a&&"#"!=a&&""!=a&&a!="#"+i&&(e.preventDefault(),e.stopPropagation(),c._hide(),window.setTimeout(function(){"_blank"==l?window.open(a):window.location.href=a},s.delay+10))})),c.on("touchstart",function(e){c.touchPosX=e.originalEvent.touches[0].pageX,c.touchPosY=e.originalEvent.touches[0].pageY}),c.on("touchmove",function(e){if(null!==c.touchPosX&&null!==c.touchPosY){var t=c.touchPosX-e.originalEvent.touches[0].pageX,a=c.touchPosY-e.originalEvent.touches[0].pageY,l=c.outerHeight(),i=c.get(0).scrollHeight-c.scrollTop();if(s.hideOnSwipe){var r=!1,n=20,o=50;switch(s.side){case"left":r=a<n&&-1*n<a&&o<t;break;case"right":r=a<n&&-1*n<a&&t<-1*o;break;case"top":r=t<n&&-1*n<t&&o<a;break;case"bottom":r=t<n&&-1*n<t&&a<-1*o}if(r)return c.touchPosX=null,c.touchPosY=null,c._hide(),!1}(c.scrollTop()<0&&a<0||l-2<i&&i<l+2&&0<a)&&(e.preventDefault(),e.stopPropagation())}}),c.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),c.on("click",'a[href="#'+i+'"]',function(e){e.preventDefault(),e.stopPropagation(),s.target.removeClass(s.visibleClass)}),a.on("click touchend",function(e){c._hide(e)}),a.on("click",'a[href="#'+i+'"]',function(e){e.preventDefault(),e.stopPropagation(),s.target.toggleClass(s.visibleClass)}),s.hideOnEscape&&l.on("keydown",function(e){27==e.keyCode&&c._hide(e)}),c},r.fn.placeholder=function(){if("undefined"!=typeof document.createElement("input").placeholder)return r(this);if(0==this.length)return t;if(1<this.length){for(var e=0;e<this.length;e++)r(this[e]).placeholder();return t}var t=r(this);return t.find("input[type=text],textarea").each(function(){var e=r(this);""!=e.val()&&e.val()!=e.attr("placeholder")||e.addClass("polyfill-placeholder").val(e.attr("placeholder"))}).on("blur",function(){var e=r(this);e.attr("name").match(/-polyfill-field$/)||""==e.val()&&e.addClass("polyfill-placeholder").val(e.attr("placeholder"))}).on("focus",function(){var e=r(this);e.attr("name").match(/-polyfill-field$/)||e.val()==e.attr("placeholder")&&e.removeClass("polyfill-placeholder").val("")}),t.find("input[type=password]").each(function(){var a=r(this),l=r(r("<div>").append(a.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=a.attr("id")&&l.attr("id",a.attr("id")+"-polyfill-field"),""!=a.attr("name")&&l.attr("name",a.attr("name")+"-polyfill-field"),l.addClass("polyfill-placeholder").val(l.attr("placeholder")).insertAfter(a),""==a.val()?a.hide():l.hide(),a.on("blur",function(e){e.preventDefault();var t=a.parent().find("input[name="+a.attr("name")+"-polyfill-field]");""==a.val()&&(a.hide(),t.show())}),l.on("focus",function(e){e.preventDefault();var t=l.parent().find("input[name="+l.attr("name").replace("-polyfill-field","")+"]");l.hide(),t.show().focus()}).on("keypress",function(e){e.preventDefault(),l.val("")})}),t.on("submit",function(){t.find("input[type=text],input[type=password],textarea").each(function(){var e=r(this);e.attr("name").match(/-polyfill-field$/)&&e.attr("name",""),e.val()==e.attr("placeholder")&&(e.removeClass("polyfill-placeholder"),e.val(""))})}).on("reset",function(e){e.preventDefault(),t.find("select").val(r("option:first").val()),t.find("input,textarea").each(function(){var e,t=r(this);switch(t.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":t.val(t.attr("defaultValue")),e=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]"),""==t.val()?(t.hide(),e.show()):(t.show(),e.hide());break;case"checkbox":case"radio":t.attr("checked",t.attr("defaultValue"));break;case"text":case"textarea":t.val(t.attr("defaultValue")),""==t.val()&&(t.addClass("polyfill-placeholder"),t.val(t.attr("placeholder")));break;default:t.val(t.attr("defaultValue"))}})}),t},r.prioritize=function(e,l){var i="__prioritize";"jQuery"!=typeof e&&(e=r(e)),e.each(function(){var e,t=r(this),a=t.parent();if(0!=a.length)if(t.data(i)){if(l)return;e=t.data(i),t.insertAfter(e),t.removeData(i)}else{if(!l)return;if(0==(e=t.prev()).length)return;t.prependTo(a),t.data(i,e)}})}}(jQuery);