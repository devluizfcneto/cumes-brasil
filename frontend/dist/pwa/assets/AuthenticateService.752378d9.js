import{api as o}from"./axios.4554e810.js";class n{async login(r,t){try{const e=await o.post("/auth/login",{email:r,password:t});return e.data.token&&(localStorage.setItem("authToken",e.data.token.token),localStorage.setItem("userId",e.data.token.userId)),e}catch(e){throw new Error("Erro ao fazer login: "+e)}}async authenticateWithGoogle(r){try{const t=await o.post("/auth/google-login",{token:r});return t.data.token&&localStorage.setItem("authToken",t.data.token),t}catch(t){throw new Error("Erro ao autenticar com o Google: "+t)}}async register(r,t,e){try{return await o.post("/auth/register",{nome:r,email:t,senha:e})}catch(a){throw new Error("Erro ao fazer cadastro: "+a)}}async resetPassword(r){try{return await o.post("/auth/reset-password",{email:r})}catch(t){throw new Error("Erro ao redefinir senha: "+t)}}isAuthenticated(){return!!localStorage.getItem("authToken")}}var i=new n;export{i as A};
