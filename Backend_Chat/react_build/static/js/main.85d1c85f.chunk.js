(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{53:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),s=n.n(r),o=(n(53),n(11)),i=n(6);var u=function(e){var t=e.user,n=Object(o.g)().room_name,r=new WebSocket("ws://127.0.0.1:8000/ws/chat/".concat(n,"/")),s=c.a.useRef(),u=c.a.useRef();c.a.useEffect((function(){r.onopen=function(){console.log("Connected to Django Services")},r.onmessage=function(e){var t=JSON.parse(e.data);s.current.value+="".concat(t.user,": ").concat(t.message," \n")}}));var l=function(){u.current.value&&(r.send(JSON.stringify({message:u.current.value,user:t})),u.current.value="")};return Object(i.jsx)(a.Fragment,{children:Object(i.jsx)("div",{className:"row justify-content-center mt-5",children:Object(i.jsxs)("div",{className:"col-md-4",children:[Object(i.jsxs)("div",{className:"form-floating",children:[Object(i.jsx)("textarea",{readOnly:!0,style:{height:"320px",background:"#fff"},className:"form-control",id:"floatingTextarea",ref:s}),Object(i.jsxs)("label",{className:"text-success",htmlFor:"floatingTextarea",children:["Chat: ",Object(i.jsx)("b",{children:n})]})]}),Object(i.jsxs)("div",{className:"input-group mb-3 mt-2",children:[Object(i.jsx)("input",{id:"message-input",type:"text",className:"form-control",placeholder:"Message...",ref:u,onKeyUp:function(e){13===e.keyCode&&u.current.value&&l()}}),Object(i.jsx)("input",{className:"btn btn-outline-success",type:"button",id:"button-chat",onClick:l,value:"Button"})]})]})})})},l=n(32),j=n(40),m=n(43),d=n(106),b=n(105),h=n(104),p=n(103),x=n(98),f=n(101),O={inputs:[{label:"Nombre de la sala",name:"room",focus:!0,required:!0}]},g=Object(x.a)((function(e){return{paper:{marginTop:e.spacing(12),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#0094C6",width:"5rem",height:"5rem"},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(2,0,2),backgroundColor:"#0094C6",color:"white","&:hover":{backgroundColor:"#005E7C"}},user:{color:"Green"}}}));function v(e){var t=e.user,n=g(),a=c.a.useState({room:""}),r=Object(m.a)(a,2),s=r[0],u=r[1],x=Object(o.f)(),v=function(e){u(Object(j.a)(Object(j.a)({},s),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(i.jsx)(f.a,{maxWidth:"sm",children:Object(i.jsxs)("div",{className:n.paper,children:[Object(i.jsx)(d.a,{className:n.avatar}),Object(i.jsxs)(p.a,{component:"h1",variant:"h5",children:["Bienvenido: ",Object(i.jsx)("span",{className:n.user,children:t})]}),Object(i.jsxs)("form",{className:n.form,onSubmit:function(){x.push("/chat/".concat(s.room,"/"))},children:[O.inputs.map((function(e){return Object(i.jsx)(h.a,{variant:"outlined",margin:"normal",fullWidth:!0,label:e.label,name:e.name,onChange:v,autoFocus:e.focus,required:e.required})})),Object(i.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",className:n.submit,children:"Entrar"})]})]})})}var N=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("p",{children:"Login Page"})})},y={request:function(e){var t=document.getElementById(e);return JSON.parse(t.textContent)}("page_request")},C=n(30);var k=function(){return Object(i.jsx)(C.a,{children:Object(i.jsxs)(o.c,{children:[Object(i.jsx)(o.a,{path:"/chat/:room_name",exact:!0,component:function(){return Object(i.jsx)(u,{user:y.request.user})}}),Object(i.jsx)(o.a,{path:"/chat",exact:!0,component:function(){return Object(i.jsx)(v,{user:y.request.user})}}),Object(i.jsx)(o.a,{path:"/usuario/login",exact:!0,component:function(){return Object(i.jsx)(N,{})}}),Object(i.jsx)(o.a,{exact:!0,path:"/",children:Object(i.jsx)("p",{children:"Hola Mundo a todos!!!!"})}),Object(i.jsx)(o.a,{children:Object(i.jsx)("p",{children:"No se encontro nada en esta pagina"})})]})})};s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.85d1c85f.chunk.js.map