import{a as o,Q as i}from"./QCardSection.90f19a00.js";import{v as d,r as m,x as u,y as c,z as r,B as e,aN as f,$ as p,Q as _,F as Q}from"./index.6959b9b0.js";import{Q as h}from"./QForm.a4749b3d.js";import{Q as v,a as S}from"./QPage.a8faf3df.js";import{A as w}from"./AuthenticateService.752378d9.js";import"./axios.4554e810.js";const y=Q("div",{class:"text-h6"},"Redefinir Senha",-1),C=d({name:"ResetPasswordPage",__name:"RedefinirSenha",setup(B){const s=m(""),l=async()=>{try{const a=await w.resetPassword(s.value);console.log(a.data)}catch(a){console.error("Erro ao redefinir senha:",a.message)}};return(a,t)=>(u(),c(v,{class:"q-pa-md"},{default:r(()=>[e(S,null,{default:r(()=>[e(o,null,{default:r(()=>[y]),_:1}),e(o,null,{default:r(()=>[e(h,{onSubmit:f(l,["prevent"])},{default:r(()=>[e(i,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=n=>s.value=n),label:"Email",type:"email",required:""},null,8,["modelValue"]),p(a.$slots,"default"),e(_,{type:"submit",label:"Redefinir Senha",color:"primary",class:"q-mt-md"})]),_:3})]),_:3})]),_:3})]),_:3}))}});export{C as default};
