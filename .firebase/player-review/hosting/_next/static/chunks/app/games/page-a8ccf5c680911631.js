(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{8127:function(e,t,r){Promise.resolve().then(r.bind(r,7692))},7692:function(e,t,r){"use strict";r.d(t,{default:function(){return i}});var n=r(7437),a=r(2265),l=r(146),o=e=>{let{gameId:t}=e,{userData:r}=(0,l.a)()||{},[o,s]=(0,a.useState)([]),[c,i]=(0,a.useState)("");(0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("app-7627139a-0e98-484c-b5e6-93e7f2612bf3.cleverapps.io/comments/games/".concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r.token)}}),n=await e.json();s(n)}catch(e){console.error("Error al cargar los comentarios:",e),s([])}})()},[t]);let u=async()=>{if(c.trim()){let e={comment:c,userId:r.id,videoGameId:t};s([e]),i("");try{if(!(await fetch("app-7627139a-0e98-484c-b5e6-93e7f2612bf3.cleverapps.io/comments/".concat(t),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)},body:JSON.stringify(e)})).ok)throw Error("Error al postear el comentario")}catch(e){console.error("Error al postear el comentario:",e)}}};return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Comentarios"}),(0,n.jsx)("div",{className:"mb-4",children:Array.isArray(o)&&o.map(e=>(0,n.jsx)("div",{className:"mb-2 p-2 border-b",children:e.comment},e.id))}),(0,n.jsx)("input",{type:"text",value:c,onChange:e=>i(e.target.value),className:"text-black w-full p-2 border mb-1 mt-2",placeholder:"Escribe un comentario..."}),(0,n.jsx)("button",{onClick:u,className:"mt-6 px-4 py-2 bg-blue-500 text-white rounded",children:"Postear"})]})},s=r(3617),c=r(6648),i=e=>{let{id:t,title:r,description:a,imgUrl:l,onClose:i}=e;return(0,n.jsx)("div",{className:"fixed top-12 left-0 w-full h-full rounded-xl flex flex-row justify-center items-center bg-black bg-opacity-75",children:(0,n.jsxs)("div",{className:"bg-black rounded-lg p-6 max-w-3xl w-full h-3/4 overflow-auto relative",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center mb-4 mt-6",children:[(0,n.jsx)("h2",{className:"text-xl font-bold mb-1",children:r}),(0,n.jsx)("button",{onClick:i,children:(0,n.jsx)(s.Z,{className:"h-7 w-7"})})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center mt-6 mb-6",children:[(0,n.jsx)(c.default,{src:l,alt:r,className:" flex items-center rounded-t-xl h-52 md:h-72 mb-4"}),(0,n.jsx)("p",{className:"mt-6 mb-6",children:a})]}),(0,n.jsx)(o,{gameId:t})]})})}},146:function(e,t,r){"use strict";r.d(t,{UserProvider:function(){return o},a:function(){return s}});var n=r(7437),a=r(2265);let l=(0,a.createContext)(),o=e=>{let{children:t}=e,[r,o]=(0,a.useState)({});return(0,a.useEffect)(()=>{{let e=localStorage.getItem("token"),t=function(e){if(!e)return;let t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}(e);o(t?{token:e,...t}:{})}},[]),(0,n.jsx)(l.Provider,{value:{userData:r,setUserData:o},children:t})},s=()=>(0,a.useContext)(l)},291:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(9920)._(r(2265)).default.createContext(null)}},function(e){e.O(0,[864,971,23,744],function(){return e(e.s=8127)}),_N_E=e.O()}]);