(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{98:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(10),r=a.n(c),o=a(13),l=a(18),i=a(9),u=a(26),m=a(59),j=a(2);function d(e){var t=e.isAuth,a=e.where,n=e.component,s=Object(m.a)(e,["isAuth","where","component"]);return Object(j.jsx)(i.b,Object(u.a)(Object(u.a)({},s),{},{render:function(){return t?Object(j.jsx)(n,{}):Object(j.jsx)(i.a,{to:a})}}))}var b=function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-primary",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l.b,{className:"navbar-brand",to:"/",children:Object(j.jsx)("b",{className:"text-light",children:"Chat Room"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarText",children:Object(j.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item px-4",children:Object(j.jsx)(l.b,{className:"nav-link text-white",to:"/",children:"Registrar"})}),Object(j.jsx)("li",{className:"nav-item px-4",children:Object(j.jsx)(l.b,{className:"nav-link text-white",to:"/chat/",children:"Chat"})}),Object(j.jsx)("li",{className:"nav-item px-4",children:Object(j.jsx)(l.b,{className:"nav-link text-white",to:"/logout/",children:"Salir"})})]})})]})})};var h,x=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Not Found"})})},p=a(23),O=a.n(p),g=[],v=[];var f=function(e){var t=e.token,a=s.a.useRef(null),c=Object(i.h)().room_name,r=s.a.useRef(),l=s.a.useState({name:""}),u=Object(o.a)(l,2),m=u[0],d=u[1];s.a.useEffect((function(){a.current=new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(c,"/")),a.current.onopen=function(){console.log("Connected to Django Services"),h=a.current},a.current.onclose=function(){console.log("Disconnected to Django Services")},v.includes(c)?h.close():v.push(c),a.current.onmessage=function(e){var t=JSON.parse(e.data);document.getElementById("floatingTextarea").value+="".concat(t.user,": ").concat(t.message,"\n"),g.push({user:t.user,message:t.message}),console.log(g)},O.a.get("http://127.0.0.1:8000/user/current_user/",{headers:{Authorization:"Token ".concat(t)}}).then((function(e){var t=e.data;d({name:t.user})}))}),[]);var b=function(){r.current.value&&(a.current.send(JSON.stringify({message:r.current.value,user:m.name})),r.current.value="")};return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("div",{className:"row justify-content-center mt-5",children:Object(j.jsxs)("div",{className:"col-md-4",children:[Object(j.jsxs)("div",{className:"form-floating",children:[Object(j.jsx)("textarea",{readOnly:!0,style:{height:"320px",background:"#fff"},className:"form-control",id:"floatingTextarea"}),Object(j.jsxs)("label",{className:"text-success",htmlFor:"floatingTextarea",children:["Chat: ",Object(j.jsx)("b",{children:c})]})]}),Object(j.jsxs)("div",{className:"input-group mb-3 mt-2",children:[Object(j.jsx)("input",{id:"message-input",type:"text",className:"form-control",placeholder:"Mensaje...",ref:r,onKeyUp:function(e){13===e.keyCode&&r.current.value&&b()}}),Object(j.jsx)("input",{className:"btn btn-outline-success",type:"button",id:"button-chat",onClick:b,value:"Enviar Mensaje"})]}),Object(j.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(j.jsx)("input",{className:"btn btn-outline-danger",type:"button",id:"button-chat-exit",onClick:function(){a.current.close()},value:"Salir"})})]})})})},N=a(15),k=a(140),y=a(137),w=a(135),S=a(136),C={inputs:[{label:"Nombre de la sala",name:"room",focus:!0,required:!0}]},E=a(138);var T=function(e){var t=e.onChange,a=e.inputs;return Object(j.jsx)(j.Fragment,{children:a.map((function(e,a){return Object(j.jsx)(E.a,{variant:"outlined",margin:"normal",fullWidth:!0,label:e.label,name:e.name,onChange:t,autoFocus:e.focus,required:e.required},a)}))})},q=a(139);var A=function(e){var t=e.classes,a=e.type;return Object(j.jsx)(q.a,{type:a,fullWidth:!0,variant:"contained",className:t,children:"Entrar"})};var I=function(e){var t=e.token,a=s.a.useState({name:""}),n=Object(o.a)(a,2),c=n[0],r=n[1];return s.a.useEffect((function(){O.a.get("http://127.0.0.1:8000/user/current_user/",{headers:{Authorization:"Token ".concat(t)}}).then((function(e){var t=e.data;r({name:t.user})}))}),[t]),c.name},_=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(12),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#0094C6",width:"5rem",height:"5rem"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(2,0,2),backgroundColor:"#0094C6",color:"white","&:hover":{backgroundColor:"#005E7C"}},user:{color:"Green",fontWeight:"bold"}}}));function D(e){var t=e.token,a=Object(i.g)(),n=_(),c=s.a.useState({room:""}),r=Object(o.a)(c,2),l=r[0],m=r[1];return Object(j.jsx)(S.a,{maxWidth:"xs",children:Object(j.jsxs)("div",{className:n.paper,children:[Object(j.jsx)(k.a,{className:n.avatar}),Object(j.jsxs)(y.a,{component:"h1",variant:"h5",children:["Bienvenido:"," ",Object(j.jsx)("span",{className:n.user,children:Object(j.jsx)(I,{token:t})})]}),Object(j.jsxs)("form",{className:n.form,onSubmit:function(e){a.push("/chat/".concat(l.room,"/")),localStorage.setItem("room",l.room),e.preventDefault()},children:[Object(j.jsx)(T,{inputs:C.inputs,onChange:function(e){m(Object(u.a)(Object(u.a)({},l),{},Object(N.a)({},e.target.name,e.target.value)))}}),Object(j.jsx)(A,{type:"submit",classes:n.submit})]})]})})}var F=function(e){var t=e.setToken,a=Object(i.g)(),n=s.a.useState({email:"",password:""}),c=Object(o.a)(n,2),r=c[0],l=c[1],m=s.a.useRef(""),d=function(e){l(Object(u.a)(Object(u.a)({},r),{},Object(N.a)({},e.target.name,e.target.value)))};return Object(j.jsx)("div",{className:"row justify-content-center",children:Object(j.jsx)("div",{className:"col-md-6",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),O.a.post("http://localhost:8000/api/v1/token/login/",{password:r.password,email:r.email}).then((function(e){t(e.data.auth_token),localStorage.setItem("token",e.data.auth_token),a.push("/chat/")})).catch((function(e){console.log(e),m.current.innerText="No coinciden!!!!"}))},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Correo Electr\xf3nico"}),Object(j.jsx)("input",{type:"email",name:"email",onChange:d,className:"form-control",required:!0}),Object(j.jsx)("div",{id:"emailHelp",className:"form-text",children:"Este correo eletr\xf3nico no ser\xe1 compartido con nadie."})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Contrase\xf1a"}),Object(j.jsx)("input",{type:"password",name:"password",onChange:d,className:"form-control",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Entrar"}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{ref:m,className:"text-danger"})})]})})})};var R=function(e){var t=e.setAuth,a=e.token,n=Object(i.g)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"LogOut Page"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),O.a.post("http://localhost:8000/api/v1/token/logout/",{},{headers:{Authorization:"token ".concat(a)}}).then((function(e){t(!1),localStorage.removeItem("token"),n.push("/")})).catch((function(e){console.log(e)}))},children:"Logout"})]})},B=a(58);var W=function(){var e,t,a,n,s,c=Object(B.a)(),r=c.register,o=c.errors,l=c.handleSubmit,u=Object(i.g)();return Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(j.jsx)("h3",{className:"mt-4 text-primary display-5 text-center",children:"Nuevo usuario"}),Object(j.jsxs)("form",{onSubmit:l((function(e){O.a.post("http://localhost:8000/api/v1/users/",{username:e.username,first_name:e.firstname,last_name:e.lastname,email:e.email,password:e.password}).then((function(){u.push("/login/")})).catch((function(e){var t=e.response.data;for(var a in document.getElementById("server").innerText="",t)document.getElementById("server").innerText+="".concat(a,": Ya existe un usuario con esos datos.\n")}))})),children:[Object(j.jsx)("input",{type:"text",name:"username",placeholder:"Apodo",className:"mt-2 form-control",ref:r({required:{value:!0,message:"El apodo es requerido!"}})}),Object(j.jsx)("p",{className:"text-danger text-small d-block mb-2",children:null===(e=o.username)||void 0===e?void 0:e.message}),Object(j.jsx)("input",{type:"text",name:"firstname",placeholder:"Nombres",className:"mt-2 form-control",ref:r({required:{value:!0,message:"El primer nombre es requerido!!"}})}),Object(j.jsx)("p",{className:"text-danger text-small d-block mb-2",children:null===(t=o.firstname)||void 0===t?void 0:t.message}),Object(j.jsx)("input",{type:"text",name:"lastname",placeholder:"Apellidos",className:"mt-2 form-control",ref:r({required:{value:!0,message:"El apellido es requerido!"}})}),Object(j.jsx)("p",{className:"text-danger text-small d-block mb-2",children:null===(a=o.lastname)||void 0===a?void 0:a.message}),Object(j.jsx)("input",{type:"email",name:"email",placeholder:"Email",className:"mt-2 form-control",ref:r({required:{value:!0,message:"El email es requerido!"}})}),Object(j.jsx)("p",{className:"text-danger text-small d-block mb-2",children:null===(n=o.email)||void 0===n?void 0:n.message}),Object(j.jsx)("input",{type:"password",name:"password",placeholder:"Contrase\xf1a",className:"mt-2 form-control",ref:r({required:{value:!0,message:"Necesitas una contrase\xf1a!"},minLength:{value:8,message:"Minimo de caracteres 8!"}})}),Object(j.jsx)("p",{className:"text-danger text-small d-block mb-2",children:null===(s=o.password)||void 0===s?void 0:s.message}),Object(j.jsx)("p",{id:"server"}),Object(j.jsx)("div",{className:"mt-3 d-grid gap-2 col-6 mx-auto",children:Object(j.jsx)("input",{className:"btn btn-primary",value:"Registrar",type:"submit"})})]})]})})};function J(){var e=s.a.useState(),t=Object(o.a)(e,2),a=t[0],n=t[1],c=s.a.useState(!1),r=Object(o.a)(c,2),u=r[0],m=r[1];return s.a.useEffect((function(){localStorage.getItem("token")&&(n(localStorage.getItem("token")),m(!0))}),[a]),Object(j.jsxs)(l.a,{children:[Object(j.jsx)(b,{}),Object(j.jsxs)(i.d,{children:[Object(j.jsx)(d,{exact:!0,isAuth:u,where:"/login",path:"/chat/:room_name",component:function(){return Object(j.jsx)(f,{token:a})}}),Object(j.jsx)(d,{exact:!0,isAuth:u,where:"/login/",path:"/chat",component:function(){return Object(j.jsx)(D,{token:a})}}),Object(j.jsx)(d,{exact:!0,isAuth:!u,where:"/chat/",path:"/login",component:function(){return Object(j.jsx)(F,{setToken:n})}}),Object(j.jsx)(d,{exact:!0,isAuth:u,where:"/chat/",path:"/logout",component:function(){return Object(j.jsx)(R,{setAuth:m,token:a})}}),Object(j.jsx)(d,{exact:!0,isAuth:!u,where:"/chat/",path:"/",component:function(){return Object(j.jsx)(W,{})}}),Object(j.jsx)(i.b,{component:function(){return Object(j.jsx)(x,{})}})]})]})}var M=function(){return Object(j.jsx)(J,{})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(M,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.88bb1218.chunk.js.map