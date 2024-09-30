import{b as Ye}from"./index.6959b9b0.js";function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:ae}=Object,$=(e=>t=>{const n=et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>$(t)===e),J=e=>t=>typeof t===e,{isArray:L}=Array,D=J("undefined");function tt(e){return e!==null&&!D(e)&&e.constructor!==null&&!D(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ne=A("ArrayBuffer");function nt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ne(e.buffer),t}const rt=J("string"),S=J("function"),Fe=J("number"),V=e=>e!==null&&typeof e=="object",st=e=>e===!0||e===!1,j=e=>{if($(e)!=="object")return!1;const t=ae(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ot=A("Date"),it=A("File"),at=A("Blob"),ct=A("FileList"),ut=e=>V(e)&&S(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=$(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},ft=A("URLSearchParams"),[dt,pt,ht,mt]=["ReadableStream","Request","Response","Headers"].map(A),yt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _e=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),Be=e=>!D(e)&&e!==_e;function ee(){const{caseless:e}=Be(this)&&this||{},t={},n=(r,s)=>{const o=e&&Le(t,s)||s;j(t[o])&&j(r)?t[o]=ee(t[o],r):j(r)?t[o]=ee({},r):L(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const wt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,o)=>{n&&S(s)?e[o]=Ce(s,n):e[o]=s},{allOwnKeys:r}),e),bt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Et=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},gt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&ae(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Rt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},St=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ot=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&ae(Uint8Array)),Tt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},At=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},xt=A("HTMLFormElement"),Pt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),me=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ct=A("RegExp"),Ue=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Nt=e=>{Ue(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Ft=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return L(e)?r(e):r(String(e).split(t)),n},Lt=()=>{},_t=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,X="abcdefghijklmnopqrstuvwxyz",ye="0123456789",De={DIGIT:ye,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+ye},Bt=(e=16,t=De.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Ut(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Dt=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=L(r)?[]:{};return k(r,(i,c)=>{const f=n(i,s+1);!D(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},kt=A("AsyncFunction"),jt=e=>e&&(V(e)||S(e))&&S(e.then)&&S(e.catch);var a={isArray:L,isArrayBuffer:Ne,isBuffer:tt,isFormData:lt,isArrayBufferView:nt,isString:rt,isNumber:Fe,isBoolean:st,isObject:V,isPlainObject:j,isReadableStream:dt,isRequest:pt,isResponse:ht,isHeaders:mt,isUndefined:D,isDate:ot,isFile:it,isBlob:at,isRegExp:Ct,isFunction:S,isStream:ut,isURLSearchParams:ft,isTypedArray:Ot,isFileList:ct,forEach:k,merge:ee,extend:wt,trim:yt,stripBOM:bt,inherits:Et,toFlatObject:gt,kindOf:$,kindOfTest:A,endsWith:Rt,toArray:St,forEachEntry:Tt,matchAll:At,isHTMLForm:xt,hasOwnProperty:me,hasOwnProp:me,reduceDescriptors:Ue,freezeMethods:Nt,toObjectSet:Ft,toCamelCase:Pt,noop:Lt,toFiniteNumber:_t,findKey:Le,global:_e,isContextDefined:Be,ALPHABET:De,generateString:Bt,isSpecCompliantForm:Ut,toJSONObject:Dt,isAsyncFn:kt,isThenable:jt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=h.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(h,je);Object.defineProperty(ke,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,o)=>{const i=Object.create(ke);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),h.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};var qt=null;function te(e){return a.isPlainObject(e)||a.isArray(e)}function qe(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,o){return s=qe(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Ht(e){return a.isArray(e)&&!e.some(te)}const It=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!a.isUndefined(g[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!f&&a.isBlob(d))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?f&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,g){let R=d;if(d&&!g&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&Ht(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(R=a.toArray(d)))return m=qe(m),R.forEach(function(w,B){!(a.isUndefined(w)||w===null)&&t.append(i===!0?we([m],B,o):i===null?m:m+"[]",l(w))}),!1}return te(d)?!0:(t.append(we(g,m,o),l(d)),!1)}const p=[],b=Object.assign(It,{defaultVisitor:u,convertValue:l,isVisitable:te});function y(d,m){if(!a.isUndefined(d)){if(p.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(d),a.forEach(d,function(R,x){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(x)?x.trim():x,m,b))===!0&&y(R,m?m.concat(x):[x])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function be(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ce(e,t){this._pairs=[],e&&W(e,this,t)}const He=ce.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,be)}:be;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||vt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new ce(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Mt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Ee=Mt,ve={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},zt=typeof URLSearchParams!="undefined"?URLSearchParams:ce,$t=typeof FormData!="undefined"?FormData:null,Jt=typeof Blob!="undefined"?Blob:null,Vt={isBrowser:!0,classes:{URLSearchParams:zt,FormData:$t,Blob:Jt},protocols:["http","https","file","blob","url","data"]};const ue=typeof window!="undefined"&&typeof document!="undefined",Wt=(e=>ue&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),Kt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Gt=ue&&window.location.href||"http://localhost";var Xt=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ue,hasStandardBrowserWebWorkerEnv:Kt,hasStandardBrowserEnv:Wt,origin:Gt},Symbol.toStringTag,{value:"Module"})),O={...Xt,...Vt};function Qt(e,t){return W(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function Zt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Yt(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function Me(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=Yt(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Zt(r),s,n,0)}),n}return null}function en(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const le={transitional:ve,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Me(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Qt(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return W(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),en(t)):t}],transformResponse:[function(t){const n=this.transitional||le.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?h.from(c,h.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{le.headers[e]={}});var fe=le;const tn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var nn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&tn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const ge=Symbol("internals");function U(e){return e&&String(e).trim().toLowerCase()}function q(e){return e===!1||e==null?e:a.isArray(e)?e.map(q):String(e)}function rn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Q(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function on(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function an(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const u=U(f);if(!u)throw new Error("header name must be a non-empty string");const p=a.findKey(s,u);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||f]=q(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!sn(t))i(nn(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=U(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return rn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=U(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Q(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=U(i),i){const c=a.findKey(r,i);c&&(!n||Q(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||Q(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=q(s),delete n[o];return}const c=t?on(o):String(o).trim();c!==o&&delete n[o],n[c]=q(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ge]=this[ge]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=U(i);r[c]||(an(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(K.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(K);var T=K;function Z(e,t){const n=this||fe,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ze(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,h,{__CANCEL__:!0});function $e(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function cn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function un(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=r[o];i||(i=l),n[s]=f,r[s]=l;let p=o,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const y=u&&l-u;return y?Math.round(b*1e3/y):void 0}}function ln(e,t){let n=0;const r=1e3/t;let s=null;return function(){const i=this===!0,c=Date.now();if(i||c-n>r)return s&&(clearTimeout(s),s=null),n=c,e.apply(null,arguments);s||(s=setTimeout(()=>(s=null,n=Date.now(),e.apply(null,arguments)),r-(c-n)))}}var I=(e,t,n=3)=>{let r=0;const s=un(50,250);return ln(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),u=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null};p[t?"download":"upload"]=!0,e(p)},n)},fn=O.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),dn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function hn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Je(e,t){return e&&!pn(t)?hn(e,t):t}const Re=e=>e instanceof T?{...e}:e;function N(e,t){t=t||{};const n={};function r(l,u,p){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:p},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,p){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,u,p)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,p){if(p in t)return r(l,u);if(p in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(Re(l),Re(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const p=f[u]||s,b=p(e[u],t[u],u);a.isUndefined(b)&&p!==c||(n[u]=b)}),n}var Ve=e=>{const t=N({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=T.from(i),t.url=Ie(Je(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&fn(t.url))){const l=s&&o&&dn.read(o);l&&i.set(s,l)}return t};const mn=typeof XMLHttpRequest!="undefined";var yn=mn&&function(e){return new Promise(function(n,r){const s=Ve(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:c}=s,f;function l(){s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let u=new XMLHttpRequest;u.open(s.method.toUpperCase(),s.url,!0),u.timeout=s.timeout;function p(){if(!u)return;const y=T.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),m={data:!c||c==="text"||c==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};$e(function(R){n(R),l()},function(R){r(R),l()},m),u=null}"onloadend"in u?u.onloadend=p:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(p)},u.onabort=function(){!u||(r(new h("Request aborted",h.ECONNABORTED,s,u)),u=null)},u.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,s,u)),u=null},u.ontimeout=function(){let d=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const m=s.transitional||ve;s.timeoutErrorMessage&&(d=s.timeoutErrorMessage),r(new h(d,m.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,s,u)),u=null},o===void 0&&i.setContentType(null),"setRequestHeader"in u&&a.forEach(i.toJSON(),function(d,m){u.setRequestHeader(m,d)}),a.isUndefined(s.withCredentials)||(u.withCredentials=!!s.withCredentials),c&&c!=="json"&&(u.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&u.addEventListener("progress",I(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",I(s.onUploadProgress)),(s.cancelToken||s.signal)&&(f=y=>{!u||(r(!y||y.type?new _(null,e,u):y),u.abort(),u=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const b=cn(s.url);if(b&&O.protocols.indexOf(b)===-1){r(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}u.send(o||null)})};const wn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const l=f instanceof Error?f:this.reason;n.abort(l instanceof h?l:new _(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new h(`timeout ${t} of ms exceeded`,h.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]};var bn=wn;const En=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},gn=async function*(e,t,n){for await(const r of e)yield*En(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Se=(e,t,n,r,s)=>{const o=gn(e,t,s);let i=0;return new ReadableStream({type:"bytes",async pull(c){const{done:f,value:l}=await o.next();if(f){c.close(),r();return}let u=l.byteLength;n&&n(i+=u),c.enqueue(new Uint8Array(l))},cancel(c){return r(c),o.return()}},{highWaterMark:2})},Oe=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},G=typeof fetch!="undefined",We=G&&typeof ReadableStream!="undefined",ne=G&&(typeof TextEncoder!="undefined"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Rn=We&&(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Te=64*1024,re=We&&!!(()=>{try{return a.isReadableStream(new Response("").body)}catch{}})(),v={stream:re&&(e=>e.body)};G&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!v[t]&&(v[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new h(`Response type '${t}' is not supported`,h.ERR_NOT_SUPPORT,r)})})})(new Response);const Sn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ne(e)).byteLength},On=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n==null?Sn(t):n};var Tn=G&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:p="same-origin",fetchOptions:b}=Ve(e);l=l?(l+"").toLowerCase():"text";let[y,d]=s||o||i?bn([s,o],i):[],m,g;const R=()=>{!m&&setTimeout(()=>{y&&y.unsubscribe()}),m=!0};let x;try{if(f&&Rn&&n!=="get"&&n!=="head"&&(x=await On(u,r))!==0){let P=new Request(t,{method:"POST",body:r,duplex:"half"}),F;a.isFormData(r)&&(F=P.headers.get("content-type"))&&u.setContentType(F),P.body&&(r=Se(P.body,Te,Oe(x,I(f)),null,ne))}a.isString(p)||(p=p?"cors":"omit"),g=new Request(t,{...b,signal:y,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",withCredentials:p});let w=await fetch(g);const B=re&&(l==="stream"||l==="response");if(re&&(c||B)){const P={};["status","statusText","headers"].forEach(he=>{P[he]=w[he]});const F=a.toFiniteNumber(w.headers.get("content-length"));w=new Response(Se(w.body,Te,c&&Oe(F,I(c,!0)),B&&R,ne),P)}l=l||"text";let Ze=await v[a.findKey(v,l)||"text"](w,e);return!B&&R(),d&&d(),await new Promise((P,F)=>{$e(P,F,{data:Ze,headers:T.from(w.headers),status:w.status,statusText:w.statusText,config:e,request:g})})}catch(w){throw R(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new h("Network Error",h.ERR_NETWORK,e,g),{cause:w.cause||w}):h.from(w,w&&w.code,e,g)}});const se={http:qt,xhr:yn,fetch:Tn};a.forEach(se,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,An=e=>a.isFunction(e)||e===null||e===!1;var Ke={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!An(n)&&(r=se[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ae).join(`
`):" "+Ae(o[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:se};function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function xe(e){return Y(e),e.headers=T.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ke.getAdapter(e.adapter||fe.adapter)(e).then(function(r){return Y(e),r.data=Z.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return ze(r)||(Y(e),r&&r.response&&(r.response.data=Z.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const Ge="1.7.1",de={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{de[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};de.transitional=function(t,n,r){function s(o,i){return"[Axios v"+Ge+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new h(s(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Pe[i]&&(Pe[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function xn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new h("option "+o+" must be "+f,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+o,h.ERR_BAD_OPTION)}}var oe={assertOptions:xn,validators:de};const C=oe.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new Ee,response:new Ee}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=N(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&oe.assertOptions(r,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:oe.assertOptions(s,{encode:C.function,serialize:C.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=T.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(f=f&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,p=0,b;if(!f){const d=[xe.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),b=d.length,u=Promise.resolve(n);p<b;)u=u.then(d[p++],d[p++]);return u}b=c.length;let y=n;for(p=0;p<b;){const d=c[p++],m=c[p++];try{y=d(y)}catch(g){m.call(this,g);break}}try{u=xe.call(this,y)}catch(d){return Promise.reject(d)}for(p=0,b=l.length;p<b;)u=u.then(l[p++],l[p++]);return u}getUri(t){t=N(this.defaults,t);const n=Je(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(N(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(N(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});var H=M;class pe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new _(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new pe(function(s){t=s}),cancel:t}}}var Pn=pe;function Cn(e){return function(n){return e.apply(null,n)}}function Nn(e){return a.isObject(e)&&e.isAxiosError===!0}const ie={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ie).forEach(([e,t])=>{ie[t]=e});var Fn=ie;function Xe(e){const t=new H(e),n=Ce(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Xe(N(e,s))},n}const E=Xe(fe);E.Axios=H;E.CanceledError=_;E.CancelToken=Pn;E.isCancel=ze;E.VERSION=Ge;E.toFormData=W;E.AxiosError=h;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Cn;E.isAxiosError=Nn;E.mergeConfig=N;E.AxiosHeaders=T;E.formToJSON=e=>Me(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=Ke.getAdapter;E.HttpStatusCode=Fn;E.default=E;var Qe=E;const z=Qe.create({baseURL:"http://localhost:8080/api"});z.interceptors.response.use(e=>e,e=>(console.error("API error:",e.response||e.message),Promise.reject(e)));z.interceptors.request.use(e=>{const t=localStorage.getItem("authToken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));var _n=Ye(({app:e})=>{e.config.globalProperties.$axios=Qe,e.config.globalProperties.$api=z,console.log("Axios boot file loaded with baseURL:",z.defaults.baseURL)});export{z as api,_n as default};
