!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e.slice(0,-u.length)}function i(){return document.currentScript||document.querySelectorAll("script[src$='"+u+"']")[0]}function o(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.right>=0&&t.top<=(window.innerHeight||document.documentElement.clientHeight)&&t.left<=(window.innerWidth||document.documentElement.clientWidth)}function c(e){var t=parseInt(e.getAttribute("data-height"));return isNaN(t)&&(t=l.HEIGHT),t}function a(e){var t,n=document.createElement("iframe"),r=c(e),i=parseInt(e.getAttribute("data-preview-width")),o=e.getAttribute("data-p5-version"),a=e.hasAttribute("data-autoplay"),d=["sketch="+encodeURIComponent(e.textContent)],s=h.slice();!isNaN(i)&&i>=0&&d.push("previewWidth="+i),o&&d.push("p5version="+encodeURIComponent(o)),a&&d.push("autoplay=on"),s.push("min-height: "+r+"px"),t=w+p+"?"+d.join("&"),n.setAttribute("src",t),n.setAttribute("style",s.join("; ")),e.parentNode.replaceChild(n,e)}function d(e,t){function n(){o(e)&&(clearInterval(r),window.removeEventListener("scroll",n,!1),window.removeEventListener("resize",n,!1),t(e))}var r;r=setInterval(n,1e3),window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1),n()}function s(){var e=document.querySelectorAll("script[type='text/p5']");[].slice.call(e).forEach(function(e){var t=c(e);e.style.display="block",e.style.fontSize="0",e.style.width="100%",e.style.minHeight=t+"px",e.style.background="#f0f0f0",d(e,a)})}var l=n(1),u="p5-widget.js",p="p5-widget.html",h=["width: 100%","border: 1px solid #ec245e","box-sizing: border-box"],m=i(),w=r(m.src),f=!m.hasAttribute("data-manual");f&&("complete"===document.readyState?s():window.addEventListener("load",s,!1)),window.p5Widget={baseURL:w,url:w+u,replaceScript:a,replaceAll:s,defaults:l}},function(e,t){"use strict";t.P5_VERSION="0.4.23",t.PREVIEW_WIDTH=150,t.HEIGHT=300}]);
//# sourceMappingURL=p5-widget.js.map