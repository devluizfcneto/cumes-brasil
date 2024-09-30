import{a as h,c as Q,r as S,m as A,o as H,h as f,w as O,T as P,J as C,d as U,K as J,g as K}from"./index.6959b9b0.js";import{u as $,a as b,f as q,r as N}from"./utils.d414aad9.js";import{api as l}from"./axios.4554e810.js";const W={ratio:[String,Number]};function G(e,i){return h(()=>{const a=Number(e.ratio||(i!==void 0?i.value:void 0));return isNaN(a)!==!0&&a>0?{paddingBottom:`${100/a}%`}:null})}const X=1.7778;var ae=Q({name:"QImg",props:{...W,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:X},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:i,emit:a}){const r=S(e.initialRatio),t=G(e,r),o=K(),{registerTimeout:s,removeTimeout:c}=$(),{registerTimeout:u,removeTimeout:g}=$(),y=h(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),B=h(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),m=[S(null),S(y.value)],d=S(0),w=S(!1),E=S(!1),D=h(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),z=h(()=>({width:e.width,height:e.height})),L=h(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),V=h(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function R(){if(g(),e.loadingShowDelay===0){w.value=!0;return}u(()=>{w.value=!0},e.loadingShowDelay)}function _(){g(),w.value=!1}function j({target:n}){C(o)===!1&&(c(),r.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,I(n,1))}function I(n,v){v===1e3||C(o)===!0||(n.complete===!0?F(n):s(()=>{I(n,v+1)},50))}function F(n){C(o)!==!0&&(d.value=d.value^1,m[d.value].value=null,_(),n.getAttribute("__qerror")!=="true"&&(E.value=!1),a("load",n.currentSrc||n.src))}function k(n){c(),_(),E.value=!0,m[d.value].value=B.value,m[d.value^1].value=y.value,a("error",n)}function T(n){const v=m[n].value,x={key:"img_"+n,class:L.value,style:V.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return d.value===n?Object.assign(x,{class:x.class+"current",onLoad:j,onError:k}):x.class+="loaded",f("div",{class:"q-img__container absolute-full",key:"img"+n},f("img",x))}function M(){return w.value===!1?f("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},U(i[E.value===!0?"error":"default"])):f("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},i.loading!==void 0?i.loading():e.noSpinner===!0?void 0:[f(J,{color:e.spinnerColor,size:e.spinnerSize})])}{let n=function(){O(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,v=>{c(),E.value=!1,v===null?(_(),m[d.value^1].value=y.value):R(),m[d.value].value=v},{immediate:!0})};A.value===!0?H(n):n()}return()=>{const n=[];return t.value!==null&&n.push(f("div",{key:"filler",style:t.value})),m[0].value!==null&&n.push(T(0)),m[1].value!==null&&n.push(T(1)),n.push(f(P,{name:"q-transition--fade"},M)),f("div",{key:"main",class:D.value,style:z.value,role:"img","aria-label":e.alt},n)}}});class Y{async getByUsuarioId(){var a;const i=localStorage.getItem("userId");try{const t=(await l.get(`/colecoes/usuario/${i}`)).data;for(const o of t)(a=o.imagem)!=null&&a.url&&(o.imagem.url=b(o.imagem.url));return t}catch(r){throw new Error("Erro ao buscar cole\xE7\xF5es: "+r.message)}}async create(i){try{await l.post("/colecoes",i)}catch(a){throw new Error("Erro ao criar cole\xE7\xE3o: "+a.message)}}async delete(i){try{await l.delete(`/colecoes/${i}`)}catch(a){throw new Error("Erro ao deletar cole\xE7\xE3o: "+a.message)}}async update(i,a){try{await l.put(`/colecoes/${i}`,a)}catch(r){throw new Error("Erro ao atualizar cole\xE7\xE3o: "+r.message)}}async getById(i){var a;try{const t=(await l.get(`/colecoes/${i}`)).data;return(a=t.imagem)!=null&&a.url&&(t.imagem.url=b(t.imagem.url)),t}catch(r){throw new Error("Erro ao buscar detalhes da cole\xE7\xE3o: "+r.message)}}async getViasIn(i){try{const a=await l.get(`/vias/colecao/${i}`),{vias:r}=a.data;return r.map(q)}catch(a){throw new Error("Erro ao buscar vias da cole\xE7\xE3o: "+a.message)}}async getViasNotIn(i,a,r=10){try{const t=await l.get(`/vias/colecao/not/${i}`,{params:{page:a,limit:r}});return{vias:t.data.vias.map(q),total:t.data.total}}catch(t){throw new Error("Erro ao buscar vias n\xE3o adicionadas \xE0 cole\xE7\xE3o: "+t.message)}}async getCollecoesNotContainingVia(i,a,r){return(await l.get(`/colecoes/not-containing-via/${i}`,{params:{page:a,limit:r}})).data}async searchByName(i){var a;try{const t=(await l.get("/colecoes/search",{params:{name:i}})).data;for(const o of t)(a=o.imagem)!=null&&a.url&&(o.imagem.url=b(o.imagem.url));return t}catch(r){throw new Error("Erro ao buscar cole\xE7\xF5es: "+r.message)}}async search(i){var a;try{const t=(await l.get("/colecoes/search",{params:i})).data;for(const o of t)(a=o.imagem)!=null&&a.url&&(o.imagem.url=b(o.imagem.url));return t}catch(r){throw new Error("Erro ao buscar cole\xE7\xF5es: "+r.message)}}async sortVias(i,{key:a,order:r}){const t=[...i];if(a==="grau"&&r!==null)t.sort((o,s)=>{const c=o.grau?N(o.grau):0,u=s.grau?N(s.grau):0;return r==="asc"?c-u:u-c});else if(a==="duracao"&&r!==null){const o={D1:1,D2:2,D3:3,D4:4};t.sort((s,c)=>{const u=o[s.duracao||""]||0,g=o[c.duracao||""]||0;return r==="asc"?u-g:g-u})}else a==="extensao"&&r!==null?t.sort((o,s)=>{var g,y;const c=(g=o.extensao)!=null?g:0,u=(y=s.extensao)!=null?y:0;return r==="asc"?c-u:u-c}):a==="data"&&r!==null&&t.sort((o,s)=>r==="asc"?o.id-s.id:s.id-o.id);return t}async addViaToColecao(i,a){var r,t;try{const o=`/colecoes/adicionarVia?colecao_id=${i}&via_id=${a}`;await l.post(o)}catch(o){throw new Error("Erro ao adicionar via \xE0 cole\xE7\xE3o: "+((t=(r=o.response)==null?void 0:r.data)==null?void 0:t.message)||o.message)}}}var re=new Y;export{re as C,ae as Q};
