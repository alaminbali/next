(()=>{var e={};e.id=2888,e.ids=[2888],e.modules={3414:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>n});var d=r(997);r(7181);var u=r(307),s=e([u]);u=(s.then?(await s)():s)[0];let n=function({Component:e,pageProps:t}){return d.jsx(u.C,{children:d.jsx(e,{...t})})};a()}catch(e){a(e)}})},307:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{C:()=>c});var d=r(997),u=r(3291),s=r(2454),n=e([u]);function c({children:e}){return d.jsx(u.Provider,{store:s.h,children:e})}u=(n.then?(await n)():n)[0],a()}catch(e){a(e)}})},2454:(e,t,r)=>{"use strict";r.d(t,{h:()=>c});let a={},d={addedProducts:[{id:1,quantity:1},{id:2,quantity:1},{id:3,quantity:1}]},u={themeData:{mode:"light",language:"english",currency:"usd"}},s={admin:null},{configureStore:n}=r(5184),c=n({reducer:{user:(e=s,t)=>{let{type:r,user:a}=t;switch(r){case"SET_USER":return{...e,admin:a};case"UPDATE_USER":let d=e.admin&&e.admin.username===a.username?a:e.admin;return{...e,admin:d};case"CLEAR_USER":return{...e,admin:null};default:return e}},theme:(e=u,t)=>{let{type:r,mode:a,language:d,currency:s}=t;switch(r){case"SET_MODE":return{...e,themeData:{...e.themeData,mode:a}};case"SET_LANGUAGE":return{...e,themeData:{...e.themeData,language:d}};case"SET_CURRENCY":return{...e,themeData:{...e.themeData,currency:s}};default:return e}},product:(e=d,t)=>{let{type:r,id:a,quantity:u}=t;switch(r){case"ADD_PRODUCT":if(!e.addedProducts.some(e=>e.id===a))return{...e,addedProducts:[...e.addedProducts,{id:a,quantity:1}]};return console.log("Product already added"),e;case"REMOVE_PRODUCT":return{...e,addedProducts:e.addedProducts.filter(e=>e.id!==a)};case"UPDATE_QUANTITY":let s=e.addedProducts.findIndex(e=>e.id===a);if(-1===s)return e;{let t=[...e.addedProducts];return t[s]={...t[s],quantity:u},{...e,addedProducts:t}}case"PRODUCT_ERR":return console.log("PRODUCT_ERR: ",e),{...e};default:return e}},filter:(e=a,t)=>{let{type:r,data:d}=t;switch(r){case"SET_FILTER":return{...e,data:d};case"FILTER_ERR":return{...e};default:return e}}}})},7181:()=>{},5184:e=>{"use strict";e.exports=require("@reduxjs/toolkit")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},3291:e=>{"use strict";e.exports=import("react-redux")}};var t=require("../webpack-runtime.js");t.C(e);var r=t(t.s=3414);module.exports=r})();