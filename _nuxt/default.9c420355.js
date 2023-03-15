import{a as l,o as n,b as r,e,r as p,c as C,t as v,j as k,k as B,p as u,i as m,f as _,w as i,l as $,m as L,q as w,s as U,v as M,x as R,T as E}from"./entry.7ccdeae0.js";const F={name:"Star"},N={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15",viewBox:"0 0 16 15",fill:"none"},T=e("path",{d:"M7.42617 1.95482C7.6433 1.45166 8.35674 1.45166 8.57387 1.95482L9.93639 5.11225C10.0283 5.3253 10.2307 5.46988 10.4621 5.48776L13.9562 5.75776C14.5169 5.80107 14.7396 6.50486 14.306 6.86286L11.6783 9.0324C11.4929 9.18543 11.4118 9.43119 11.4695 9.66451L12.2782 12.9322C12.4112 13.4696 11.8315 13.9018 11.3544 13.621L8.3171 11.8329C8.12141 11.7177 7.87863 11.7177 7.68294 11.8329L4.64561 13.621C4.16855 13.9018 3.58884 13.4696 3.72183 12.9322L4.53055 9.66451C4.58829 9.43119 4.50712 9.18543 4.32177 9.0324L1.69403 6.86286C1.26043 6.50486 1.48318 5.80107 2.0438 5.75776L5.53796 5.48776C5.76931 5.46988 5.97172 5.3253 6.06365 5.11225L7.42617 1.95482Z",fill:"#353945"},null,-1),V=[T];function q(t,o,s,c,a,d){return n(),r("svg",N,V)}const D=l(F,[["render",q]]);const H={},W={class:"button"};function A(t,o){const s=D;return n(),r("button",W,[p(t.$slots,"default"),t.$slots.icon?p(t.$slots,"icon",{key:0}):(n(),C(s,{key:1,class:"button__star"}))])}const x=l(H,[["render",A]]);const S=t=>(u("data-v-9c95da45"),t=t(),m(),t),Z={class:"custom-input"},j={key:0,class:"custom-input__legend"},O={class:"custom-input__wrap"},z=["type","placeholder"],P=S(()=>e("div",{class:"custom-input__icon custom-input__icon_hide-password"},null,-1)),G=S(()=>e("div",{class:"custom-input__icon custom-input__icon_clear"},null,-1)),J={class:"custom-input__message"},K={__name:"Input",props:{inputType:{type:String,default:"password"},placeholder:{type:String,default:"Input caption"},legend:{type:String},message:{type:String,default:"Display error message here."},className:{type:String}},setup(t){const o=t;return(s,c)=>(n(),r("fieldset",Z,[o.legend?(n(),r("legend",j,v(o.legend),1)):k("",!0),e("div",O,[e("input",{required:"",type:o.inputType,class:B(["custom-input__input",o.className]),placeholder:o.placeholder},null,10,z),P,G,e("span",J,v(o.message),1)])]))}},I=l(K,[["__scopeId","data-v-9c95da45"]]),Q=""+new URL("lock.d88cef4e.svg",import.meta.url).href;const X={},Y=t=>(u("data-v-c58bc70f"),t=t(),m(),t),tt=Y(()=>e("div",{class:"form__head"},[e("div",{class:"form__img"},[e("img",{src:Q,alt:"lock"})]),e("h3",{class:"typography_form-title"},"Вхід")],-1)),et={class:"form__inner"};function ot(t,o){const s=I,c=x;return n(),r("form",{class:"form",onSubmit:o[0]||(o[0]=L(()=>{},["prevent"]))},[tt,e("div",et,[_(s,{"input-type":"email",placeholder:"Ваш email"}),_(s,{"input-type":"password",placeholder:"Ваш пароль"}),_(c,{class:"form__button button_medium button_primary"},{default:i(()=>[$(" Війти ")]),_:1})])],32)}const st=l(X,[["render",ot],["__scopeId","data-v-c58bc70f"]]),_t={},nt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ct=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",fill:"#777E91"},null,-1),rt=[ct];function lt(t,o){return n(),r("svg",nt,rt)}const at=l(_t,[["render",lt]]);const it={class:"popup__content"},dt={__name:"Modal",props:{open:{type:Boolean,default:!0}},emits:["close"],setup(t,{emit:o}){const s=t,c=w(null);U(()=>s.open,d=>{d?document.querySelector("html").style.overflow="hidden":document.querySelector("html").style.overflow="auto"});const a=function(d){d.target===c.value&&o("close")};return(d,f)=>{const h=at;return n(),C(E,{name:"fade"},{default:i(()=>[M(e("div",{class:"popup",ref_key:"modal",ref:c,onMousedown:a},[e("div",{class:"popup__inner",ref_key:"modal",ref:c},[e("div",it,[p(d.$slots,"default",{},void 0,!0),e("div",{class:"popup__close",onClick:f[0]||(f[0]=b=>d.$emit("close"))},[_(h)])])],512)],544),[[R,s.open]])]),_:3})}}},pt=l(dt,[["__scopeId","data-v-b603b683"]]),ut={},mt={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ft=e("path",{d:"M6 12L10 16L18 8",stroke:"#FCFCFD","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),ht=[ft];function vt(t,o){return n(),r("svg",mt,ht)}const $t=l(ut,[["render",vt]]);const gt={class:"slider-item"},yt={class:"slider-item__image"},wt={class:"typography_button-small typography_cl-gray-100"},xt={class:"typography_caption-text typography_cl-gray-100"},bt={__name:"Item",props:{title:String,desc:String},setup(t){const o=t;return(s,c)=>{const a=$t;return n(),r("div",gt,[e("div",yt,[_(a)]),e("div",null,[e("p",wt,v(o.title),1),e("p",xt,v(o.desc),1)])])}}},Ct=l(bt,[["__scopeId","data-v-c17abcff"]]);const Lt={},St={class:"slide"},It={class:"slide__title"},kt={class:"slide__body"};function Bt(t,o){return n(),r("div",St,[e("div",It,[p(t.$slots,"title",{},void 0,!0)]),e("div",kt,[p(t.$slots,"default",{},void 0,!0)])])}const Ut=l(Lt,[["render",Bt],["__scopeId","data-v-4883947d"]]),Mt={},Rt={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none"},Et=e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.60588 0.843461C3.33533 0.593724 2.91356 0.610592 2.66382 0.881138L0.509972 3.21444C0.27424 3.46982 0.274238 3.86344 0.509967 4.11882L2.66382 6.45218C2.91355 6.72273 3.33532 6.7396 3.60587 6.48987C3.87642 6.24013 3.89329 5.81836 3.64356 5.54781L2.52248 4.3333L8.99984 4.3333C9.36803 4.3333 9.6665 4.03482 9.6665 3.66663C9.6665 3.29844 9.36803 2.99997 8.99984 2.99997L2.52251 2.99997L3.64355 1.78552C3.89329 1.51497 3.87642 1.0932 3.60588 0.843461Z",fill:"#E6E8EC"},null,-1),Ft=[Et];function Nt(t,o){return n(),r("svg",Rt,Ft)}const Tt=l(Mt,[["render",Nt]]);const Vt={},qt=t=>(u("data-v-47f265e1"),t=t(),m(),t),Dt={class:"slider-control"},Ht=qt(()=>e("ul",{class:"slider-control__dots"},[e("li",{class:"slider-control__dot active"}),e("li",{class:"slider-control__dot"}),e("li",{class:"slider-control__dot"})],-1));function Wt(t,o){const s=Tt;return n(),r("div",Dt,[_(s,{class:"slider-control__arrow slider-control__arrow_left"}),Ht,_(s,{class:"slider-control__arrow slider-control__arrow_right"})])}const At=l(Vt,[["render",Wt],["__scopeId","data-v-47f265e1"]]);const Zt={},jt=t=>(u("data-v-fb104e34"),t=t(),m(),t),Ot={class:"slider-wrapper"},zt=jt(()=>e("p",{class:"typography_cl-gray-100 typography_slider-title"}," Зможеш обрати свій варіант ",-1));function Pt(t,o){const s=Ct,c=Ut,a=At;return n(),r("div",Ot,[_(c,null,{title:i(()=>[zt]),default:i(()=>[_(s,{title:"CPA",desc:"$25 і вище"}),_(s,{title:"REVSHARE",desc:"Піднімай до 60%"}),_(s,{title:"Гібрід",desc:"Зробимо як скажеш"})]),_:1}),_(a)])}const Gt=l(Zt,[["render",Pt],["__scopeId","data-v-fb104e34"]]),Jt=""+new URL("user.5b3b3848.svg",import.meta.url).href,Kt=""+new URL("telegram.c305b5b7.svg",import.meta.url).href,Qt=""+new URL("skype.848a8245.svg",import.meta.url).href;const Xt={},g=t=>(u("data-v-df343433"),t=t(),m(),t),Yt=g(()=>e("div",{class:"form__head"},[e("div",{class:"form__img"},[e("img",{src:Jt,alt:"user"})]),e("h3",{class:"typography_form-title"},"Реєстрація")],-1)),te={class:"form__inner"},ee={class:"form__contact"},oe=g(()=>e("p",{class:"form__contact-title typography_hairline-small typography_cl-gray-400 typography_text-center"}," Оберіть спосіб звязку ",-1)),se={class:"form__contact-row"},_e=g(()=>e("img",{src:Kt,alt:"telegram"},null,-1)),ne=g(()=>e("img",{src:Qt,alt:"skype"},null,-1));function ce(t,o){const s=I,c=x;return n(),r("form",{class:"form",onSubmit:o[0]||(o[0]=L(()=>{},["prevent"]))},[Yt,e("div",te,[_(s,{"class-name":"valid","input-type":"text",placeholder:"Ваше імʼя"}),_(s,{"input-type":"email",placeholder:"Ваш email"}),_(s,{"input-type":"password",placeholder:"Ваш пароль"}),_(s,{"class-name":"error",message:"Паролі не співпадають","input-type":"password",placeholder:"Повторіть пароль"}),e("div",ee,[oe,e("div",se,[_(c,{class:"form__social form__social_telegram button_medium button_light button_icon-only"},{icon:i(()=>[_e]),_:1}),_(c,{class:"form__social button_medium button_light button_icon-only"},{icon:i(()=>[ne]),_:1}),_(s,{"input-type":"text",placeholder:"@телеграм_адреса"})])]),_(c,{class:"form__button button_medium button_primary"},{default:i(()=>[$(" Реєстрація ")]),_:1})])],32)}const re=l(Xt,[["render",ce],["__scopeId","data-v-df343433"]]);const le={},ae={class:"register-wrapper"};function ie(t,o){const s=Gt,c=re;return n(),r("div",ae,[_(s,{class:"register-wrapper__slider"}),_(c)])}const de=l(le,[["render",ie],["__scopeId","data-v-481fcba6"]]),pe=""+new URL("logo.83838496.png",import.meta.url).href;const ue=t=>(u("data-v-102787c9"),t=t(),m(),t),me={class:"header"},fe={class:"header__inner"},he=ue(()=>e("div",{class:"header__logo"},[e("img",{class:"header__logo-img",src:pe,alt:"logo"})],-1)),ve={class:"header__auth"},$e={__name:"HeaderComponent",setup(t){const o=w(!1),s=w(!1);return(c,a)=>{const d=x,f=st,h=pt,b=de;return n(),r("header",me,[e("div",fe,[he,e("div",ve,[_(d,{onClick:a[0]||(a[0]=y=>o.value=!0),class:"button_small button_dark"},{default:i(()=>[$("Вхід")]),_:1}),_(d,{onClick:a[1]||(a[1]=y=>s.value=!0),class:"button_primary button_small"},{default:i(()=>[$("Реєстрація")]),_:1}),_(h,{open:o.value,onClose:a[2]||(a[2]=y=>o.value=!o.value)},{default:i(()=>[_(f)]),_:1},8,["open"]),_(h,{open:s.value,onClose:a[3]||(a[3]=y=>s.value=!s.value)},{default:i(()=>[_(b)]),_:1},8,["open"])])])])}}},ge=l($e,[["__scopeId","data-v-102787c9"]]),ye={},we={class:"global-content"},xe={class:"content"};function be(t,o){const s=ge;return n(),r("div",we,[_(s),e("div",xe,[p(t.$slots,"default")])])}const Le=l(ye,[["render",be]]);export{Le as default};
