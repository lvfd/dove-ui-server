/*! For license information please see dom4.max.js.LICENSE.txt */
!function(e){"use strict";function t(){return h.createDocumentFragment()}function n(e){return h.createElement(e)}function r(e,t){if(!e)throw new Error("Failed to construct "+t+": 1 argument required, but only 0 present.")}function i(e){if(1===e.length)return o(e[0]);for(var n=t(),r=O.call(e),i=0;i<e.length;i++)n.appendChild(o(r[i]));return n}function o(e){return"object"==typeof e?e:h.createTextNode(e)}for(var a,c,l,s,u,h=e.document,p=Object.prototype.hasOwnProperty,f=Object.defineProperty||function(e,t,n){return p.call(n,"value")?e[t]=n.value:(p.call(n,"get")&&e.__defineGetter__(t,n.get),p.call(n,"set")&&e.__defineSetter__(t,n.set)),e},v=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},d=function(e){var t=void 0===e.className,n=t?e.getAttribute("class")||"":e.className,r=t||"object"==typeof n,i=(r?t?n:n.baseVal:n).replace(m,"");i.length&&q.push.apply(this,i.split(E)),this._isSVG=r,this._=e},y={get:function(){return new d(this)},set:function(){}},m=/^\s+|\s+$/g,E=/\s+/,b="classList",g=function(e,t){return this.contains(e)?t||this.remove(e):(void 0===t||t)&&(t=!0,this.add(e)),!!t},_=e.DocumentFragment&&DocumentFragment.prototype,w=e.Node,K=(w||Element).prototype,A=e.CharacterData||w,C=A&&A.prototype,S=e.DocumentType,M=S&&S.prototype,k=(e.Element||w||e.HTMLElement).prototype,L=e.HTMLSelectElement||n("select").constructor,T=L.prototype.remove,N=e.SVGElement,q=["matches",k.matchesSelector||k.webkitMatchesSelector||k.khtmlMatchesSelector||k.mozMatchesSelector||k.msMatchesSelector||k.oMatchesSelector||function(e){var t=this.parentNode;return!!t&&-1<v.call(t.querySelectorAll(e),this)},"closest",function(e){for(var t,n=this;(t=n&&n.matches)&&!n.matches(e);)n=n.parentNode;return t?n:null},"prepend",function(){var e=this.firstChild,t=i(arguments);e?this.insertBefore(t,e):this.appendChild(t)},"append",function(){this.appendChild(i(arguments))},"before",function(){var e=this.parentNode;e&&e.insertBefore(i(arguments),this)},"after",function(){var e=this.parentNode,t=this.nextSibling,n=i(arguments);e&&(t?e.insertBefore(n,t):e.appendChild(n))},"toggleAttribute",function(e,t){var n=this.hasAttribute(e);return 1<arguments.length?n&&!t?this.removeAttribute(e):t&&!n&&this.setAttribute(e,""):n?this.removeAttribute(e):this.setAttribute(e,""),this.hasAttribute(e)},"replace",function(){this.replaceWith.apply(this,arguments)},"replaceWith",function(){var e=this.parentNode;e&&e.replaceChild(i(arguments),this)},"remove",function(){var e=this.parentNode;e&&e.removeChild(this)}],O=q.slice,D=q.length;D;D-=2)if((c=q[D-2])in k||(k[c]=q[D-1]),"remove"!==c||T._dom4||((L.prototype[c]=function(){return 0<arguments.length?T.apply(this,arguments):k.remove.call(this)})._dom4=!0),/^(?:before|after|replace|replaceWith|remove)$/.test(c)&&(A&&!(c in C)&&(C[c]=q[D-1]),S&&!(c in M)&&(M[c]=q[D-1])),/^(?:append|prepend)$/.test(c))if(_)c in _||(_[c]=q[D-1]);else try{t().constructor.prototype[c]=q[D-1]}catch(e){}var F;n("a").matches("a")||(k[c]=(F=k[c],function(e){return F.call(this.parentNode?this:t().appendChild(this),e)})),d.prototype={length:0,add:function(){for(var e,t=0;t<arguments.length;t++)e=arguments[t],this.contains(e)||q.push.call(this,c);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},contains:function(e){return function(t){return D=e.call(this,c=function(e){if(!e)throw"SyntaxError";if(E.test(e))throw"InvalidCharacterError";return e}(t)),-1<D}}([].indexOf||function(e){for(D=this.length;D--&&this[D]!==e;);return D}),item:function(e){return this[e]||null},remove:function(){for(var e,t=0;t<arguments.length;t++)e=arguments[t],this.contains(e)&&q.splice.call(this,D,1);this._isSVG?this._.setAttribute("class",""+this):this._.className=""+this},toggle:g,toString:function(){return q.join.call(this," ")}},N&&!(b in N.prototype)&&f(N.prototype,b,y),b in h.documentElement?((s=n("div")[b]).add("a","b","a"),"a b"!=s&&("add"in(l=s.constructor.prototype)||(l=e.TemporaryTokenList.prototype),u=function(e){return function(){for(var t=0;t<arguments.length;)e.call(this,arguments[t++])}},l.add=u(l.add),l.remove=u(l.remove),l.toggle=g)):f(k,b,y),"contains"in K||f(K,"contains",{value:function(e){for(;e&&e!==this;)e=e.parentNode;return this===e}}),"head"in h||f(h,"head",{get:function(){return a||(a=h.getElementsByTagName("head")[0])}}),function(){for(var t,n=e.requestAnimationFrame,r=e.cancelAnimationFrame,i=["o","ms","moz","webkit"],o=i.length;!r&&o--;)n=n||e[i[o]+"RequestAnimationFrame"],r=e[i[o]+"CancelAnimationFrame"]||e[i[o]+"CancelRequestAnimationFrame"];r||(n?(t=n,n=function(e){var n=!0;return t((function(){n&&e.apply(this,arguments)})),function(){n=!1}},r=function(e){e()}):(n=function(e){return setTimeout(e,15,15)},r=function(e){clearTimeout(e)})),e.requestAnimationFrame=n,e.cancelAnimationFrame=r}();try{new e.CustomEvent("?")}catch(t){e.CustomEvent=function(e,t){function n(e,t,n,r){this.initEvent(e,t,n),this.detail=r}return function(r,i){var o=h.createEvent(e);if("string"!=typeof r)throw new Error("An event name must be provided");return"Event"==e&&(o.initCustomEvent=n),null==i&&(i=t),o.initCustomEvent(r,i.bubbles,i.cancelable,i.detail),o}}(e.CustomEvent?"CustomEvent":"Event",{bubbles:!1,cancelable:!1,detail:null})}try{new Event("_")}catch(t){t=function(e){function t(e,t){r(arguments.length,"Event");var n=h.createEvent("Event");return t||(t={}),n.initEvent(e,!!t.bubbles,!!t.cancelable),n}return t.prototype=e.prototype,t}(e.Event||function(){}),f(e,"Event",{value:t}),Event!==t&&(Event=t)}try{new KeyboardEvent("_",{})}catch(t){t=function(t){var n,i=0,o={char:"",key:"",location:0,ctrlKey:!1,shiftKey:!1,altKey:!1,metaKey:!1,altGraphKey:!1,repeat:!1,locale:navigator.language,detail:0,bubbles:!1,cancelable:!1,keyCode:0,charCode:0,which:0};try{var a=h.createEvent("KeyboardEvent");a.initKeyboardEvent("keyup",!1,!1,e,"+",3,!0,!1,!0,!1,!1),i="+"==(a.keyIdentifier||a.key)&&3==(a.keyLocation||a.location)&&(a.ctrlKey?a.altKey?1:3:a.shiftKey?2:4)||9}catch(e){}function c(e,t,n){try{t[e]=n[e]}catch(e){}}function l(t,a){r(arguments.length,"KeyboardEvent"),a=function(e,t){for(var n in t)t.hasOwnProperty(n)&&!t.hasOwnProperty.call(e,n)&&(e[n]=t[n]);return e}(a||{},o);var l,s=h.createEvent(n),u=a.ctrlKey,p=a.shiftKey,f=a.altKey,v=a.metaKey,d=a.altGraphKey,y=i>3?function(e){for(var t=[],n=["ctrlKey","Control","shiftKey","Shift","altKey","Alt","metaKey","Meta","altGraphKey","AltGraph"],r=0;r<n.length;r+=2)e[n[r]]&&t.push(n[r+1]);return t.join(" ")}(a):null,m=String(a.key),E=String(a.char),b=a.location,g=a.keyCode||(a.keyCode=m)&&m.charCodeAt(0)||0,_=a.charCode||(a.charCode=E)&&E.charCodeAt(0)||0,w=a.bubbles,K=a.cancelable,A=a.repeat,C=a.locale,S=a.view||e;if(a.which||(a.which=a.keyCode),"initKeyEvent"in s)s.initKeyEvent(t,w,K,S,u,f,p,v,g,_);else if(0<i&&"initKeyboardEvent"in s){switch(l=[t,w,K,S],i){case 1:l.push(m,b,u,p,f,v,d);break;case 2:l.push(u,f,p,v,g,_);break;case 3:l.push(m,b,u,f,p,v,d);break;case 4:l.push(m,b,y,A,C);break;default:l.push(char,m,b,y,A,C)}s.initKeyboardEvent.apply(s,l)}else s.initEvent(t,w,K);for(m in s)o.hasOwnProperty(m)&&s[m]!==a[m]&&c(m,s,a);return s}return n=0<i?"KeyboardEvent":"Event",l.prototype=t.prototype,l}(e.KeyboardEvent||function(){}),f(e,"KeyboardEvent",{value:t}),KeyboardEvent!==t&&(KeyboardEvent=t)}try{new MouseEvent("_",{})}catch(t){t=function(t){function n(t,n){r(arguments.length,"MouseEvent");var i=h.createEvent("MouseEvent");return n||(n={}),i.initMouseEvent(t,!!n.bubbles,!!n.cancelable,n.view||e,n.detail||1,n.screenX||0,n.screenY||0,n.clientX||0,n.clientY||0,!!n.ctrlKey,!!n.altKey,!!n.shiftKey,!!n.metaKey,n.button||0,n.relatedTarget||null),i}return n.prototype=t.prototype,n}(e.MouseEvent||function(){}),f(e,"MouseEvent",{value:t}),MouseEvent!==t&&(MouseEvent=t)}h.querySelectorAll("*").forEach||function(){function e(e){var t=e.querySelectorAll;e.querySelectorAll=function(e){var n=t.call(this,e);return n.forEach=Array.prototype.forEach,n}}e(h),e(Element.prototype)}();try{h.querySelector(":scope *")}catch(e){!function(){var e="data-scope-"+(1e9*Math.random()>>>0),t=Element.prototype,n=t.querySelector,r=t.querySelectorAll;function i(t,n,r){if(t.type!=h.ELEMENT_NODE)return n.call(t,r);t.setAttribute(e,null);var i=n.call(t,String(r).replace(/(^|,\s*)(:scope([ >]|$))/g,(function(t,n,r,i){return n+"["+e+"]"+(i||" ")})));return t.removeAttribute(e),i}t.querySelector=function(e){return i(this,n,e)},t.querySelectorAll=function(e){return i(this,r,e)}}()}}(window),function(e){"use strict";var t=e.WeakMap||function(){var e,t=0,n=!1,r=!1;function i(t,i,o){r=o,n=!1,e=void 0,t.dispatchEvent(i)}function o(e){this.value=e}function c(){t++,this.__ce__=new a("@DOMMap:"+t+Math.random())}return o.prototype.handleEvent=function(t){n=!0,r?t.currentTarget.removeEventListener(t.type,this,!1):e=this.value},c.prototype={constructor:c,delete:function(e){return i(e,this.__ce__,!0),n},get:function(t){i(t,this.__ce__,!1);var n=e;return e=void 0,n},has:function(e){return i(e,this.__ce__,!1),n},set:function(e,t){return i(e,this.__ce__,!0),e.addEventListener(this.__ce__.type,new o(t),!1),this}},c}();function n(){}function r(e,t,n){function i(e){i.once&&(e.currentTarget.removeEventListener(e.type,t,i),i.removed=!0),i.passive&&(e.preventDefault=r.preventDefault),"function"==typeof i.callback?i.callback.call(this,e):i.callback&&i.callback.handleEvent(e),i.passive&&delete e.preventDefault}return i.type=e,i.callback=t,i.capture=!!n.capture,i.passive=!!n.passive,i.once=!!n.once,i.removed=!1,i}n.prototype=(Object.create||Object)(null),r.preventDefault=function(){};var i,o,a=e.CustomEvent,c=e.dispatchEvent,l=e.addEventListener,s=e.removeEventListener,u=0,h=function(){u++},p=[].indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},f=function(e){return"".concat(e.capture?"1":"0",e.passive?"1":"0",e.once?"1":"0")};try{l("_",h,{once:!0}),c(new a("_")),c(new a("_")),s("_",h,{once:!0})}catch(e){}1!==u&&(o=new t,i=function(e){if(e){var t=e.prototype;t.addEventListener=function(e){return function(t,i,a){if(a&&"boolean"!=typeof a){var c,l,s,u=o.get(this),h=f(a);u||o.set(this,u=new n),t in u||(u[t]={handler:[],wrap:[]}),l=u[t],(c=p.call(l.handler,i))<0?(c=l.handler.push(i)-1,l.wrap[c]=s=new n):s=l.wrap[c],h in s||(s[h]=r(t,i,a),e.call(this,t,s[h],s[h].capture))}else e.call(this,t,i,a)}}(t.addEventListener),t.removeEventListener=function(e){return function(t,n,r){if(r&&"boolean"!=typeof r){var i,a,c,l,s=o.get(this);if(s&&t in s&&(c=s[t],-1<(a=p.call(c.handler,n))&&(i=f(r))in(l=c.wrap[a]))){for(i in e.call(this,t,l[i],l[i].capture),delete l[i],l)return;c.handler.splice(a,1),c.wrap.splice(a,1),0===c.handler.length&&delete s[t]}}else e.call(this,t,n,r)}}(t.removeEventListener)}},e.EventTarget?i(EventTarget):(i(e.Text),i(e.Element||e.HTMLElement),i(e.HTMLDocument),i(e.Window||{prototype:e}),i(e.XMLHttpRequest)))}(self);