(this.webpackJsonpshop_frontend=this.webpackJsonpshop_frontend||[]).push([[0],{206:function(e,t,a){e.exports=a(387)},279:function(e,t,a){},387:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),c=a(28),i=a(35),s=a(45),m=a(69),u=a(13),p=a(82),d=a.n(p),g=a(390),f=a(389),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={Meals:[{meal_name:"",description:"",price_tag:""}],list:["a"]},e}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this;d.a.get("https://shop-281014.nw.r.appspot.com/api/").then((function(t){e.setState({Meals:t.data,list:["b"]}),console.log(t.data),console.log(e.state.Meals[0].meal_name)}))}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"75%",margin:"auto"}},r.a.createElement(g.b,{style:{margin:"auto",minInlineSize:"100%"},grid:{gutter:16,xs:1,sm:2,md:3,lg:4,xl:5,xxl:5},dataSource:this.state.Meals,renderItem:function(e){return r.a.createElement(g.b.Item,null,r.a.createElement(f.a,{title:e.meal_name,extra:r.a.createElement("a",{href:"/"},"More")},r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.price_tag)))}}))}}]),a}(r.a.Component),E=a(44),b=a(391),v=a(184),y=a(392),w=a(394),O=a(142),k=a(43),j=function(e){return{type:"AUTH_SUCCES",token:e}},I=function(e){return{type:"AUTH_FAIL",error:e}},T=function(){return localStorage.removeItem("user"),localStorage.removeItem("expirationDate"),{type:"AUTH_LOGOUT"}},S=function(e){return function(t){setTimeout((function(){t(T())}),1e3*e)}},_=a(397),x=a(396),A=(a(279),Object(k.b)((function(e){return{loading:e.loading,error:e.error}}),(function(e){return{onAuth:function(t,a){return e(function(e,t){return function(a){a({type:"AUTH_START"}),d.a.post("http://127.0.0.1:8000/^rest-auth/login/",{username:e,password:t}).then((function(e){var t=e.data.key,n=new Date((new Date).getTime()+36e5);localStorage.setItem("token",t),localStorage.setItem("expirationDate",n),a(j(t)),a(S(3600))})).catch((function(e){a(I(e))}))}}(t,a))}}}))((function(e){var t=b.a.useForm(),a=Object(E.a)(t,1)[0];console.log(e);var n=null;return e.error&&(n=r.a.createElement("p",{style:{color:"red"}},e.error.message)),r.a.createElement("div",null,n,e.loading?r.a.createElement(v.a,{indicator:v.a}):r.a.createElement(b.a,{form:a,style:{minWidth:"10rem",maxWidth:"30rem",margin:"auto"},name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(t){console.log("Received values of form: ",t),console.log(e.isAuthenticated),console.log(e.match),e.onAuth(t.username,t.password)}},r.a.createElement(b.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}]},r.a.createElement(y.a,{prefix:r.a.createElement(_.a,{className:"site-form-item-icon"}),placeholder:"Username"})),r.a.createElement(b.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}]},r.a.createElement(y.a,{prefix:r.a.createElement(x.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0},r.a.createElement(w.a,null,"Remember me")),r.a.createElement("p",{className:"login-form-forgot"},"Forgot password")),r.a.createElement(b.a.Item,null,r.a.createElement(O.a,{type:"primary",htmlType:"submit",className:"login-form-button"},"Log in"),"Or ",r.a.createElement("a",{href:"/signup"}," Sign Up!"))))}))),P=a(203),U=a(395),C={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},N={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},D=function(){var e=b.a.useForm(),t=Object(E.a)(e,1)[0];return r.a.createElement(b.a,Object.assign({},C,{form:t,name:"register",onFinish:function(e){console.log("Received values of form: ",e)},initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},scrollToFirstError:!0}),r.a.createElement(b.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},r.a.createElement(y.a,null)),r.a.createElement(b.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0},r.a.createElement(y.a.Password,null)),r.a.createElement(b.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject("The two passwords that you entered do not match!"):Promise.resolve()}}}]},r.a.createElement(y.a.Password,null)),r.a.createElement(b.a.Item,{name:"nickname",label:r.a.createElement("span",null,"Nickname\xa0",r.a.createElement(P.a,{title:"What do you want others to call you?"},r.a.createElement(U.a,null))),rules:[{required:!0,message:"Please input your nickname!",whitespace:!0}]},r.a.createElement(y.a,null)),r.a.createElement(b.a.Item,Object.assign({name:"agreement",valuePropName:"checked",rules:[{validator:function(e,t){return t?Promise.resolve():Promise.reject("Should accept agreement")}}]},N),r.a.createElement(w.a,null,"I have read the agreement")),r.a.createElement(b.a.Item,N,r.a.createElement(O.a,{type:"primary",htmlType:"submit"},"Register")))},F=function(){return r.a.createElement("div",null,r.a.createElement(u.a,{exact:!0,path:"/",component:h}),r.a.createElement(u.a,{exact:!0,path:"/login",component:A}),r.a.createElement(u.a,{exact:!0,path:"/signup",component:D}))},H=a(81),L=(a(384),a(388)),M=a(393),R=L.a.Header,q=L.a.Content,W=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(L.a,null,r.a.createElement(R,{className:"header"},r.a.createElement("div",{className:"logo"}),r.a.createElement(M.a,{style:{float:"right"},theme:"dark",mode:"horizontal"},null!=this.props.isAuthenticated?(console.log("isAuthenticated: ".concat(null)),r.a.createElement(M.a.Item,{key:"1"},r.a.createElement(H.b,{to:"/login"},"Login"))):(console.log(null),r.a.createElement(M.a.Item,{key:"1"},"Logout")))),r.a.createElement(L.a,null,r.a.createElement(L.a,{style:{padding:"0 24px 24px"}},r.a.createElement(q,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280}},this.props.children))))}}]),a}(r.a.Component),z=Object(u.e)(Object(k.b)(null,(function(e){return{logout:function(){return e(T())}}}))(W)),V=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,null,r.a.createElement(z,this.props,r.a.createElement(F,null))))}}]),a}(n.Component),B=Object(k.b)((function(e){return{isAuthenticated:null!==e.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(void 0===t)e(T());else{var a=new Date(localStorage.getItem("expirationDate"));a<=new Date?e(T()):(e(j(t)),e(S(a.getTime()-(new Date).getTime())/1e3))}}))}}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(74),J=a(201),X=a(141),$=function(e,t){return Object(X.a)(Object(X.a)({},e),t)},K={token:null,error:null,loading:!1},Q=function(e,t){return $(e,{error:null,loading:!0})},Y=function(e,t){return $(e,{token:t.token,error:null,loading:!1,isAuthenticated:!0})},Z=function(e,t){return $(e,{token:t.token,error:t.error,loading:!1})},ee=function(e,t){return $(e,{token:null})},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Q(e);case"AUTH_SUCCES":return Y(e,t);case"AUTH_FAIL":return Z(e,t);case"AUTH_LOGOUT":return ee(e);default:return e}},ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.c,ne=Object(G.d)(te,ae(Object(G.a)(J.a))),re=r.a.createElement(k.a,{store:ne},r.a.createElement(B,null));l.a.render(re,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.2c2ec694.chunk.js.map