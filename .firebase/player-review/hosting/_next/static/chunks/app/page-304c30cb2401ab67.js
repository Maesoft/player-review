(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5903:function(e,t,r){Promise.resolve().then(r.bind(r,2958)),Promise.resolve().then(r.bind(r,5200)),Promise.resolve().then(r.bind(r,635)),Promise.resolve().then(r.bind(r,3940)),Promise.resolve().then(r.bind(r,720)),Promise.resolve().then(r.bind(r,146))},2958:function(e,t,r){"use strict";r.d(t,{Consolas:function(){return c}});var i=r(7437),a=r(2265),n=r(6648),s=e=>{let{active:t,selectTab:r,children:a}=e;return(0,i.jsx)("button",{onClick:r,children:(0,i.jsx)("p",{className:"mr-3 font-semibold hover:text-white ".concat(t?"text-white border-b border-purple-500":"text-[#adb7be]"),children:a})})},o=r(146);let l=[{title:"Portatiles",id:"portatiles",content:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"GameBoy Advance"}),(0,i.jsx)("li",{children:"PSP"}),(0,i.jsx)("li",{children:"PS-VITA"}),(0,i.jsx)("li",{children:"Nintendo Switch"})]})},{title:"Sobremesa",id:"Sobremesa",content:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"PS 3"}),(0,i.jsx)("li",{children:"PS 4"}),(0,i.jsx)("li",{children:"PS 5"}),(0,i.jsx)("li",{children:"Xbox 360"}),(0,i.jsx)("li",{children:"Xbox One"}),(0,i.jsx)("li",{children:"Xbox Series s/x"})]})},{title:"PC",id:"PC",content:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Procesadores"}),(0,i.jsx)("li",{children:"Placas de video"})]})}],c=()=>{let[e,t]=(0,a.useState)("portatiles"),[r,c]=(0,a.useTransition)(),{userData:u}=(0,o.a)()||{},d=e=>{c(()=>{t(e)})};return(0,i.jsx)("section",{className:"text-white",children:u.name&&(0,i.jsxs)("div",{className:"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16",children:[(0,i.jsx)(n.default,{src:"/images/consolas.jpg",alt:"imagen cosolas",width:500,height:500}),(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-4xl text-white font-bold mb-4",children:"Consolas:"}),(0,i.jsx)("p",{className:"text-base lg:text-lg",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est perspiciatis, eos debitis officiis id optio omnis minus quo amet? Illo, magnam excepturi vero rerum ipsa possimus odit blanditiis iste. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est perspiciatis, eos debitis officiis id optio omnis minus quo amet? Illo, magnam excepturi vero rerum ipsa possimus odit blanditiis iste."}),(0,i.jsxs)("div",{className:"flex flex-row mt-8",children:[(0,i.jsxs)(s,{selectTab:()=>d("portatiles"),active:"portatiles"===e,children:["","portatiles",""]}),(0,i.jsxs)(s,{selectTab:()=>d("Sobremesa"),active:"Sobremesa"===e,children:["","Sobremesa",""]}),(0,i.jsxs)(s,{selectTab:()=>d("PC"),active:"PC"===e,children:["","PC",""]})]}),(0,i.jsxs)("div",{className:"mt-8",children:[" ",l.find(t=>t.id===e).content]})]})]})})}},7692:function(e,t,r){"use strict";r.d(t,{default:function(){return c}});var i=r(7437),a=r(2265),n=r(146),s=e=>{let{gameId:t}=e,{userData:r}=(0,n.a)()||{},[s,o]=(0,a.useState)([]),[l,c]=(0,a.useState)("");(0,a.useEffect)(()=>{(async()=>{try{let e=await fetch("app-7627139a-0e98-484c-b5e6-93e7f2612bf3.cleverapps.io/comments/games/".concat(t),{method:"GET",headers:{Authorization:"Bearer ".concat(r.token)}}),i=await e.json();o(i)}catch(e){console.error("Error al cargar los comentarios:",e),o([])}})()},[t]);let u=async()=>{if(l.trim()){let e={comment:l,userId:r.id,videoGameId:t};o([e]),c("");try{if(!(await fetch("app-7627139a-0e98-484c-b5e6-93e7f2612bf3.cleverapps.io/comments/".concat(t),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.token)},body:JSON.stringify(e)})).ok)throw Error("Error al postear el comentario")}catch(e){console.error("Error al postear el comentario:",e)}}};return(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{className:"text-xl font-bold mb-2",children:"Comentarios"}),(0,i.jsx)("div",{className:"mb-4",children:Array.isArray(s)&&s.map(e=>(0,i.jsx)("div",{className:"mb-2 p-2 border-b",children:e.comment},e.id))}),(0,i.jsx)("input",{type:"text",value:l,onChange:e=>c(e.target.value),className:"text-black w-full p-2 border mb-1 mt-2",placeholder:"Escribe un comentario..."}),(0,i.jsx)("button",{onClick:u,className:"mt-6 px-4 py-2 bg-blue-500 text-white rounded",children:"Postear"})]})},o=r(3617),l=r(6648),c=e=>{let{id:t,title:r,description:a,imgUrl:n,onClose:c}=e;return(0,i.jsx)("div",{className:"fixed top-12 left-0 w-full h-full rounded-xl flex flex-row justify-center items-center bg-black bg-opacity-75",children:(0,i.jsxs)("div",{className:"bg-black rounded-lg p-6 max-w-3xl w-full h-3/4 overflow-auto relative",children:[(0,i.jsxs)("div",{className:"flex justify-between items-center mb-4 mt-6",children:[(0,i.jsx)("h2",{className:"text-xl font-bold mb-1",children:r}),(0,i.jsx)("button",{onClick:c,children:(0,i.jsx)(o.Z,{className:"h-7 w-7"})})]}),(0,i.jsxs)("div",{className:"flex flex-col items-center mt-6 mb-6",children:[(0,i.jsx)(l.default,{src:n,alt:r,className:" flex items-center rounded-t-xl h-52 md:h-72 mb-4"}),(0,i.jsx)("p",{className:"mt-6 mb-6",children:a})]}),(0,i.jsx)(s,{gameId:t})]})})}},635:function(e,t,r){"use strict";r.d(t,{GamesSection:function(){return p}});var i=r(7437),a=r(2265);let n=a.forwardRef(function(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"}),a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}),s=a.forwardRef(function(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))});var o=r(7138),l=e=>{let{imgUrl:t,title:r,description:a,gameUrl:l,previewUrl:c,onEyeClick:u}=e;return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"h-52 md:h-72 rounded-t-xl relative group",style:{background:"url(".concat(t,")"),backgroundSize:"cover"},children:(0,i.jsxs)("div",{className:"items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500",children:[(0,i.jsx)(o.default,{onClick:u,href:l,className:"h-14 w-14 mr-4 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link",children:(0,i.jsx)(n,{className:"h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"})}),(0,i.jsx)(o.default,{href:c,className:"h-14 w-14 border-2 relative rounded-full border-[#adb7be] hover:border-white group/link",children:(0,i.jsx)(s,{className:"h-10 w-10 text-[#adb7be] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white"})})]})}),(0,i.jsxs)("div",{className:"text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4",children:[(0,i.jsx)("h5",{className:"font-xl font-semibold mb-2",children:r}),(0,i.jsx)("p",{className:" text-[#adb7be]",children:a})]})]})};let c=e=>{let{name:t,onClick:r,isSelected:a}=e;return(0,i.jsx)("button",{className:"".concat(a?"text-white bg-purple-500":"text-[#adb7be] border-slate-600 hover:border-white"," rounded-full border-2 px-6 py-3 sm:text-sm cursor-pointer"),onClick:()=>r(t),children:t})};var u=r(7692),d=r(146);let m=[{id:1,title:"BioShock 1",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/bioshock1.png",tag:["Todos","FPS"],gameUrl:"/",previewUrl:"/"},{id:2,title:"League of legends",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/lol.png",tag:["Todos","MMO","Online"],gameUrl:"/",previewUrl:"/"},{id:3,title:"GTA V",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/gtav.png",tag:["Todos","Autos","Accion"],gameUrl:"/",previewUrl:"/"},{id:4,title:"FallOut 76",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/fallout76.png",tag:["Todos","RPG","Online"],gameUrl:"/",previewUrl:"/"},{id:5,title:"Doom: Eternal",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/doom_eternal.png",tag:["Todos","FPS"],gameUrl:"/",previewUrl:"/"},{id:6,title:"Dead Cells",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/dead_cells.png",tag:["Todos","Plataforma","Aventura"],gameUrl:"/",previewUrl:"/"},{id:7,title:"The last of us 2",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/tlou2.png",tag:["Todos","Accion"],gameUrl:"/",previewUrl:"/"},{id:8,title:"Call of Duty: Modern Warfare 3 Remake",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/cod3rm.png",tag:["Todos","FPS","Online"],gameUrl:"/",previewUrl:"/"},{id:9,title:"Dead Island 2",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/di2.png",tag:["Todos","FPS","Survival"],gameUrl:"/",previewUrl:"/"},,{id:10,title:"GTA V",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/gtav.png",tag:["Todos","Autos","Accion"],gameUrl:"/",previewUrl:"/"},{id:11,title:"FallOut 76",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/fallout76.png",tag:["Todos","RPG","Online"],gameUrl:"/",previewUrl:"/"},{id:12,title:"Doom: Eternal",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/doom_eternal.png",tag:["Todos","FPS"],gameUrl:"/",previewUrl:"/"},{id:13,title:"Dead Cells",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/dead_cells.png",tag:["Todos","Plataforma","Aventura"],gameUrl:"/",previewUrl:"/"},{id:14,title:"The last of us 2",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/tlou2.png",tag:["Todos","Accion"],gameUrl:"/",previewUrl:"/"},{id:15,title:"Call of Duty: Modern Warfare 3 Remake",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/cod3rm.png",tag:["Todos","FPS","Online"],gameUrl:"/",previewUrl:"/"},{id:16,title:"Dead Island 2",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore totam perferendis nemo at? Quae, ullam! Asperiores ut amet ducimus obcaecati mollitia, et nobis, consequatur aut autem facere numquam sit cupiditate!",image:"/images/juegos/di2.png",tag:["Todos","FPS","Survival"],gameUrl:"/",previewUrl:"/"}],p=()=>{let[e,t]=(0,a.useState)("Todos"),[r,n]=(0,a.useState)(!1),[s,o]=(0,a.useState)(null),{userData:p}=(0,d.a)()||{},f=e=>{t(e)},h=e=>{o(e)},x=m.filter(t=>t.tag.includes(e)),g=r?x:x.slice(0,9);return(0,i.jsxs)(i.Fragment,{children:[p.name&&(0,i.jsx)("h2",{className:"text-center text-4xl font-bold text-white mt-4 mb-8",children:"Categorias y Juegos"}),(0,i.jsxs)("div",{className:"text-white justify-center items-center grid md:grid-cols-5 gap-3 md:gap-4 p-4 mb-8",children:[p.name&&(0,i.jsx)(c,{onClick:f,name:"Todos",isSelected:"Todos"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"Accion",isSelected:"Accion"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"Autos",isSelected:"Autos"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"Aventura",isSelected:"Aventura"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"FPS",isSelected:"FPS"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"MMO",isSelected:"MMO"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"Online",isSelected:"Online"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"Survival",isSelected:"Survival"===e}),p.name&&(0,i.jsx)(c,{onClick:f,name:"RPG",isSelected:"RPG"===e})]}),p.name&&(0,i.jsx)("div",{className:"grid md:grid-cols-3 gap-8 md:gap-12",children:g.map(e=>(0,i.jsx)(l,{onEyeClick:()=>h(e),title:e.title,description:e.description,imgUrl:e.image,gameUrl:e.gameUrl,previewUrl:e.previewUrl},e.id))}),p.name&&s&&(0,i.jsx)("div",{children:(0,i.jsx)(u.default,{id:s.id,title:s.title,description:s.description,imgUrl:s.image,onClose:()=>{o(null)}})}),p.name&&!r&&(0,i.jsx)("div",{className:"flex justify-center mt-10",children:(0,i.jsx)("button",{className:"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-300 border hover:border-pink-700 text-white",onClick:()=>n(!0),children:"Ver m\xe1s"})}),p.name&&r&&(0,i.jsx)("div",{className:"flex justify-center mt-10",children:(0,i.jsx)("button",{className:"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-300 border hover:border-pink-700 text-white",onClick:()=>n(!1),children:"Ver menos"})})]})}},3940:function(e,t,r){"use strict";r.d(t,{Navbar:function(){return p}});var i=r(7437),a=r(2265),n=r(7138),s=e=>{let{href:t,title:r,path:a}=e;return(0,i.jsx)(n.default,{href:"".concat(t),className:"block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white",children:r})};let o=a.forwardRef(function(e,t){let{title:r,titleId:i,...n}=e;return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":i},n),r?a.createElement("title",{id:i},r):null,a.createElement("path",{fillRule:"evenodd",d:"M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))});var l=r(3617);let c=e=>{let{links:t,onClickLink:r}=e;return(0,i.jsx)("ul",{className:"flex flex-col py-4 items-center justify-center",children:t.map((e,t)=>(0,i.jsx)("li",{onClick:()=>r(e.path),children:(0,i.jsx)(s,{href:e.path,title:e.title})},t))})};var u=r(6648),d=r(146);let m=[{title:"Home",path:"#Presentacion"},{title:"Consolas",path:"#consolas"},{title:"Categorias y Juegos",path:"#games-section"},{title:"About us",path:"/login"}],p=()=>{let[e,t]=(0,a.useState)(!1),{userData:r}=(0,d.a)()||{},p=e=>{let r=document.querySelector(e);r&&(r.scrollIntoView({behavior:"smooth"}),t(!1))};return(0,i.jsxs)("nav",{className:"fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-95",children:[(0,i.jsxs)("div",{className:"flex flex-wrap items-center justify-between mx-auto px-8",children:[(0,i.jsx)(n.default,{href:"/",className:"text-1lg md:text-lg text-white font-semibold mt-3 mb-3",children:(0,i.jsx)(u.default,{src:"/images/logo-nav.png",alt:"logo",width:75,height:40})}),(0,i.jsx)("div",{className:"mobile-menu block md:hidden",children:e?(0,i.jsx)("button",{onClick:()=>t(!1),className:"flex item-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200 ",children:(0,i.jsx)(l.Z,{className:"h-5 w-5"})}):(0,i.jsx)("button",{onClick:()=>t(!0),className:"flex item-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200 ",children:(0,i.jsx)(o,{className:"h-5 w-5"})})}),(0,i.jsx)("div",{className:"menu hidden md:block md:w-auto",id:"navbar",children:(0,i.jsx)("ul",{className:"flex p-2 mb-5 md:p-0 md:flex-row md:space-x-8 mt-5",children:r.name&&m.map((e,t)=>(0,i.jsx)("li",{onClick:()=>p(e.path),children:(0,i.jsx)(s,{href:e.path,title:e.title})},t))})})]}),e?(0,i.jsx)(c,{links:m,onClickLink:p}):null]})}},720:function(e,t,r){"use strict";r.d(t,{default:function(){return x}});var i=r(7437),a=r(2265),n=r(6648);function s(e,t,r,i){return new(r||(r=Promise))(function(a,n){function s(e){try{l(i.next(e))}catch(e){n(e)}}function o(e){try{l(i.throw(e))}catch(e){n(e)}}function l(e){var t;e.done?a(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(s,o)}l((i=i.apply(e,t||[])).next())})}function o(e,t){var r,i,a,n,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function o(n){return function(o){return function(n){if(r)throw TypeError("Generator is already executing.");for(;s;)try{if(r=1,i&&(a=2&n[0]?i.return:n[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return s.label++,{value:n[1],done:!1};case 5:s.label++,i=n[1],n=[0];continue;case 7:n=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){s=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){s.label=n[1];break}if(6===n[0]&&s.label<a[1]){s.label=a[1],a=n;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(n);break}a[2]&&s.ops.pop(),s.trys.pop();continue}n=t.call(e,s)}catch(e){n=[6,e],i=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,o])}}}function l(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],i=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function c(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var i,a,n=r.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(i=n.next()).done;)s.push(i.value)}catch(e){a={error:e}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return s}function u(e,t,r){if(r||2==arguments.length)for(var i,a=0,n=t.length;a<n;a++)!i&&a in t||(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))}function d(e,t,r,i,a){for(var n=[],d=5;d<arguments.length;d++)n[d-5]=arguments[d];return s(this,void 0,void 0,function(){var d,p,f,h,x;return o(this,function(g){switch(g.label){case 0:g.trys.push([0,12,13,14]),p=(d=l(n)).next(),g.label=1;case 1:if(p.done)return[3,11];switch(typeof(f=p.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,r,i,a,n){return s(this,void 0,void 0,function(){var d,p;return o(this,function(f){switch(f.label){case 0:var h,x;return h=d=e.textContent||"",x=c(r).slice(0),p=u(u([],c(h),!1),[NaN],!1).findIndex(function(e,t){return x[t]!==e}),[4,function(e,t,r,i,a){return s(this,void 0,void 0,function(){var n,s,u,d,p,f,h,x,g,b,v,j;return o(this,function(w){switch(w.label){case 0:if(n=t,a){for(s=0,u=1;u<t.length;u++)if(p=(d=c([t[u-1],t[u]],2))[0],(f=d[1]).length>p.length||""===f){s=u;break}n=t.slice(s,t.length)}w.label=1;case 1:w.trys.push([1,6,7,8]),x=(h=l(function(e){var t,r,i,a,n,s;return o(this,function(c){switch(c.label){case 0:t=function(e){return o(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var r=t.textContent||"";return""===e||r.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},c.label=1;case 1:c.trys.push([1,6,7,8]),i=(r=l(e)).next(),c.label=2;case 2:return i.done?[3,5]:(a=i.value,[5,t(a)]);case 3:c.sent(),c.label=4;case 4:return i=r.next(),[3,2];case 5:return[3,8];case 6:return n={error:c.sent()},[3,8];case 7:try{i&&!i.done&&(s=r.return)&&s.call(r)}finally{if(n)throw n.error}return[7];case 8:return[2]}})}(n))).next(),w.label=2;case 2:return x.done?[3,5]:(b="WRITING"===(g=x.value).opCode(e)?r+r*(Math.random()-.5):i+i*(Math.random()-.5),g.op(e),[4,m(b)]);case 3:w.sent(),w.label=4;case 4:return x=h.next(),[3,2];case 5:return[3,8];case 6:return v={error:w.sent()},[3,8];case 7:try{x&&!x.done&&(j=h.return)&&j.call(h)}finally{if(v)throw v.error}return[7];case 8:return[2]}})})}(e,u(u([],c(function(e,t,r){var i,a;return void 0===r&&(r=0),o(this,function(n){switch(n.label){case 0:a=(i=t(e)).length,n.label=1;case 1:return a>r?[4,i.slice(0,--a).join("")]:[3,3];case 2:return n.sent(),[3,1];case 3:return[2]}})}(d,t,p)),!1),c(function(e,t,r){var i,a;return void 0===r&&(r=0),o(this,function(n){switch(n.label){case 0:a=(i=t(e)).length,n.label=1;case 1:return r<a?[4,i.slice(0,++r).join("")]:[3,3];case 2:return n.sent(),[3,1];case 3:return[2]}})}(r,t,p)),!1),i,a,n)];case 1:return f.sent(),[2]}})})}(e,t,f,r,i,a)];case 3:case 5:case 7:return g.sent(),[3,10];case 4:return[4,m(f)];case 6:return[4,f.apply(void 0,u([e,t,r,i,a],c(n),!1))];case 8:return[4,f];case 9:g.sent(),g.label=10;case 10:return p=d.next(),[3,1];case 11:return[3,14];case 12:return h={error:g.sent()},[3,14];case 13:try{p&&!p.done&&(x=d.return)&&x.call(d)}finally{if(h)throw h.error}return[7];case 14:return[2]}})})}function m(e){return s(this,void 0,void 0,function(){return o(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===r&&i.firstChild?i.insertBefore(a,i.firstChild):i.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var p=(0,a.memo)((0,a.forwardRef)(function(e,t){var r=e.sequence,i=e.repeat,n=e.className,s=e.speed,o=void 0===s?40:s,l=e.deletionSpeed,m=e.omitDeletionAnimation,p=void 0!==m&&m,f=e.preRenderFirstString,h=e.wrapper,x=e.splitter,g=void 0===x?function(e){return u([],c(e),!1)}:x,b=e.cursor,v=void 0===b||b,j=e.style,w=function(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)0>t.indexOf(i[a])&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(r[i[a]]=e[i[a]])}return r}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),y=w["aria-label"],N=w["aria-hidden"],k=w.role;l||(l=o);var S=[,,].fill(40);[o,l].forEach(function(e,t){switch(typeof e){case"number":S[t]=Math.abs(e-100);break;case"object":var r=e.type,i=e.value;if("number"!=typeof i)break;"keyStrokeDelayInMs"===r&&(S[t]=i)}});var C,T,A,P,q,E,U,O,L=S[0],R=S[1],_=(void 0===C&&(C=null),T=(0,a.useRef)(C),(0,a.useEffect)(function(){t&&("function"==typeof t?t(T.current):t.current=T.current)},[t]),T),I="index-module_type__E-SaG";A=n?"".concat(v?I+" ":"").concat(n):v?I:"",P=(0,a.useRef)(function(){var e,t=r;i===1/0?e=d:"number"==typeof i&&(t=Array(1+i).fill(r).flat());var a=e?u(u([],c(t),!1),[e],!1):u([],c(t),!1);return d.apply(void 0,u([_.current,g,L,R,p],c(a),!1)),function(){_.current}}),q=(0,a.useRef)(),E=(0,a.useRef)(!1),U=(0,a.useRef)(!1),O=c((0,a.useState)(0),2)[1],E.current&&(U.current=!0),(0,a.useEffect)(function(){return E.current||(q.current=P.current(),E.current=!0),O(function(e){return e+1}),function(){U.current&&q.current&&q.current()}},[]);var M=void 0!==f&&f?r.find(function(e){return"string"==typeof e})||"":null;return a.createElement(void 0===h?"span":h,{"aria-hidden":N,"aria-label":y,role:k,style:j,className:A,children:y?a.createElement("span",{"aria-hidden":"true",ref:_,children:M}):M,ref:y?void 0:_})}),function(e,t){return!0}),f=r(7138),h=r(146),x=()=>{let{userData:e}=(0,h.a)()||{};return(0,i.jsx)("section",{children:(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-12",children:[(0,i.jsxs)("div",{className:"col-span-7 place-self-center text-center sm:text-left",children:[(0,i.jsx)("span",{children:(0,i.jsx)("h1",{className:"text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold",children:(0,i.jsx)("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-purple-500 to-orange-300",children:"Player Review"})})}),(0,i.jsx)("span",{className:"text-white mb-8 text-4xl sm:text-3xl lg:text-5xl font-extrabold",children:(0,i.jsx)(p,{sequence:["Juegos",1e3,"Rese\xf1as",1e3,"Trucos",1e3,"La mejor comunidad!!",1e3],wrapper:"span",speed:50,repeat:1/0})}),(0,i.jsx)("p",{className:"text-[#adb7be] text-base sm:text-lg mb-6 mt-4 lg:text-xl",children:"\xa1Bienvenido a PlayerReview! Aqu\xed encontrar\xe1s las mejores rese\xf1as de videojuegos, hechas por y para gamers. Explora an\xe1lisis detallados, descubre nuevos t\xedtulos y comparte tus opiniones. \xa1\xdanete a nuestra comunidad y lleva tu experiencia de juego al siguiente nivel!"}),!e.name&&(0,i.jsxs)("div",{children:[(0,i.jsx)("button",{className:"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-orange-300 border hover:border-pink-700 text-white",children:(0,i.jsx)(f.default,{href:"/login",children:" Iniciar sesi\xf3n"})}),(0,i.jsx)("button",{className:"px-6 py-3 w-full sm:w-fit bg-trasnparent rounded-full hover:bg-slate-800 text-white border border-white mt-3",children:(0,i.jsx)(f.default,{href:"/register",children:" Registrate"})})]})||(0,i.jsx)("div",{className:"col-span-5 place-self-center mt-4 lg:mt-0",children:(0,i.jsx)("h1",{className:"text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold",children:(0,i.jsxs)("span",{className:"text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 via-red-500 to-green-300",children:["Hola ",e.name,", que bueno es verte por aqui!"]})})})]}),(0,i.jsx)("div",{className:"col-span-5 place-self-center mt-4 lg:mt-0",children:(0,i.jsx)("div",{className:"rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative",children:(0,i.jsx)(n.default,{src:"/images/games-logo.png",alt:"logo",className:"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2",width:290,height:290})})})]})})}},5200:function(e,t,r){"use strict";var i=r(7437);r(2265),t.default=()=>(0,i.jsx)("footer",{className:"footer border border-t-[#33353f] mt-8 border-l-transparent border-r-transparent border-b-transparent text-white",children:(0,i.jsx)("div",{className:" p-5 flex justify-center",children:(0,i.jsx)("p",{className:"text-slate-600",children:" Player Review. Todos los derechos reservados."})})})},146:function(e,t,r){"use strict";r.d(t,{UserProvider:function(){return s},a:function(){return o}});var i=r(7437),a=r(2265);let n=(0,a.createContext)(),s=e=>{let{children:t}=e,[r,s]=(0,a.useState)({});return(0,a.useEffect)(()=>{{let e=localStorage.getItem("token"),t=function(e){if(!e)return;let t=e.split(".")[1].replace("-","+").replace("_","/");return JSON.parse(window.atob(t))}(e);s(t?{token:e,...t}:{})}},[]),(0,i.jsx)(n.Provider,{value:{userData:r,setUserData:s},children:t})},o=()=>(0,a.useContext)(n)}},function(e){e.O(0,[138,864,971,23,744],function(){return e(e.s=5903)}),_N_E=e.O()}]);