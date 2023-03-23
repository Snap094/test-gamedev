import{a,o as n,b as l,e as t,r as p,c as C,t as v,j as k,k as B,p as u,i as m,f as _,w as r,l as $,m as L,q as b,s as U,v as M,x as R,T}from"./entry.39105294.js";const A={name:"Star"},E={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"15",viewBox:"0 0 16 15",fill:"none"},N=t("path",{d:"M7.42617 1.95482C7.6433 1.45166 8.35674 1.45166 8.57387 1.95482L9.93639 5.11225C10.0283 5.3253 10.2307 5.46988 10.4621 5.48776L13.9562 5.75776C14.5169 5.80107 14.7396 6.50486 14.306 6.86286L11.6783 9.0324C11.4929 9.18543 11.4118 9.43119 11.4695 9.66451L12.2782 12.9322C12.4112 13.4696 11.8315 13.9018 11.3544 13.621L8.3171 11.8329C8.12141 11.7177 7.87863 11.7177 7.68294 11.8329L4.64561 13.621C4.16855 13.9018 3.58884 13.4696 3.72183 12.9322L4.53055 9.66451C4.58829 9.43119 4.50712 9.18543 4.32177 9.0324L1.69403 6.86286C1.26043 6.50486 1.48318 5.80107 2.0438 5.75776L5.53796 5.48776C5.76931 5.46988 5.97172 5.3253 6.06365 5.11225L7.42617 1.95482Z",fill:"#353945"},null,-1),F=[N];function V(e,o,s,c,i,d){return n(),l("svg",E,F)}const q=a(A,[["render",V]]);const D={},H={class:"button"};function W(e,o){const s=q;return n(),l("button",H,[p(e.$slots,"default"),e.$slots.icon?p(e.$slots,"icon",{key:0}):(n(),C(s,{key:1,class:"button__star"}))])}const w=a(D,[["render",W]]);const S=e=>(u("data-v-e553e1f7"),e=e(),m(),e),Z={class:"custom-input"},j={key:0,class:"custom-input__legend"},O={class:"custom-input__wrap"},z=["type","placeholder"],P=S(()=>t("div",{class:"custom-input__icon custom-input__icon_hide-password"},null,-1)),G=S(()=>t("div",{class:"custom-input__icon custom-input__icon_clear"},null,-1)),J={class:"custom-input__message"},K={__name:"Input",props:{inputType:{type:String,default:"password"},placeholder:{type:String,default:"Input caption"},legend:{type:String},message:{type:String,default:"Display error message here."},className:{type:String}},setup(e){const o=e;return(s,c)=>(n(),l("fieldset",Z,[o.legend?(n(),l("legend",j,v(o.legend),1)):k("",!0),t("div",O,[t("input",{required:"",type:o.inputType,class:B(["custom-input__input",o.className]),placeholder:o.placeholder},null,10,z),P,G,t("span",J,v(o.message),1)])]))}},I=a(K,[["__scopeId","data-v-e553e1f7"]]),Q=""+globalThis.__publicAssetsURL("lock.svg");const X={},Y=e=>(u("data-v-8ec2be90"),e=e(),m(),e),ee=Y(()=>t("div",{class:"form__head"},[t("div",{class:"form__img"},[t("img",{src:Q,alt:"lock"})]),t("h3",{class:"typography_form-title"},"Вхід")],-1)),te={class:"form__inner"};function oe(e,o){const s=I,c=w;return n(),l("form",{class:"form",onSubmit:o[0]||(o[0]=L(()=>{},["prevent"]))},[ee,t("div",te,[_(s,{"input-type":"email",placeholder:"Ваш email"}),_(s,{"input-type":"password",placeholder:"Ваш пароль"}),_(c,{class:"form__button button_medium button_primary"},{default:r(()=>[$(" Війти ")]),_:1})])],32)}const se=a(X,[["render",oe],["__scopeId","data-v-8ec2be90"]]),_e={},ne={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},ce=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z",fill:"#777E91"},null,-1),le=[ce];function ae(e,o){return n(),l("svg",ne,le)}const ie=a(_e,[["render",ae]]);const re={class:"popup__content"},de={__name:"Modal",props:{open:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const s=e,c=b(null);U(()=>s.open,d=>{d?document.querySelector("body").className="open-modal":document.querySelector("body").classList.remove("open-modal")});const i=function(d){d.target===c.value&&o("close")};return(d,h)=>{const f=ie;return n(),C(T,{name:"fade"},{default:r(()=>[M(t("div",{class:"popup",ref_key:"modal",ref:c,onMousedown:i},[t("div",{class:"popup__inner",ref_key:"modal",ref:c},[t("div",re,[p(d.$slots,"default",{},void 0,!0),t("div",{class:"popup__close",onClick:h[0]||(h[0]=x=>d.$emit("close"))},[_(f)])])],512)],544),[[R,s.open]])]),_:3})}}},pe=a(de,[["__scopeId","data-v-0547a04b"]]),ue={},me={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none"},he=t("path",{d:"M6 12L10 16L18 8",stroke:"#FCFCFD","stroke-width":"2","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),fe=[he];function ve(e,o){return n(),l("svg",me,fe)}const $e=a(ue,[["render",ve]]);const ge={class:"slider-item"},ye={class:"slider-item__image"},be={class:"typography_button-small typography_cl-gray-100"},we={class:"typography_caption-text typography_cl-gray-100"},xe={__name:"Item",props:{title:String,desc:String},setup(e){const o=e;return(s,c)=>{const i=$e;return n(),l("div",ge,[t("div",ye,[_(i)]),t("div",null,[t("p",be,v(o.title),1),t("p",we,v(o.desc),1)])])}}},Ce=a(xe,[["__scopeId","data-v-641ebce7"]]);const Le={},Se={class:"slide"},Ie={class:"slide__title"},ke={class:"slide__body"};function Be(e,o){return n(),l("div",Se,[t("div",Ie,[p(e.$slots,"title",{},void 0,!0)]),t("div",ke,[p(e.$slots,"default",{},void 0,!0)])])}const Ue=a(Le,[["render",Be],["__scopeId","data-v-2c10aafa"]]),Me={},Re={xmlns:"http://www.w3.org/2000/svg",width:"10",height:"7",viewBox:"0 0 10 7",fill:"none"},Te=t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.60588 0.843461C3.33533 0.593724 2.91356 0.610592 2.66382 0.881138L0.509972 3.21444C0.27424 3.46982 0.274238 3.86344 0.509967 4.11882L2.66382 6.45218C2.91355 6.72273 3.33532 6.7396 3.60587 6.48987C3.87642 6.24013 3.89329 5.81836 3.64356 5.54781L2.52248 4.3333L8.99984 4.3333C9.36803 4.3333 9.6665 4.03482 9.6665 3.66663C9.6665 3.29844 9.36803 2.99997 8.99984 2.99997L2.52251 2.99997L3.64355 1.78552C3.89329 1.51497 3.87642 1.0932 3.60588 0.843461Z",fill:"#E6E8EC"},null,-1),Ae=[Te];function Ee(e,o){return n(),l("svg",Re,Ae)}const Ne=a(Me,[["render",Ee]]);const Fe={},Ve=e=>(u("data-v-de466a62"),e=e(),m(),e),qe={class:"slider-control"},De=Ve(()=>t("ul",{class:"slider-control__dots"},[t("li",{class:"slider-control__dot active"}),t("li",{class:"slider-control__dot"}),t("li",{class:"slider-control__dot"})],-1));function He(e,o){const s=Ne;return n(),l("div",qe,[_(s,{class:"slider-control__arrow slider-control__arrow_left"}),De,_(s,{class:"slider-control__arrow slider-control__arrow_right"})])}const We=a(Fe,[["render",He],["__scopeId","data-v-de466a62"]]);const Ze={},je=e=>(u("data-v-2e6402f4"),e=e(),m(),e),Oe={class:"slider-wrapper"},ze=je(()=>t("p",{class:"typography_cl-gray-100 typography_slider-title"}," Зможеш обрати свій варіант ",-1));function Pe(e,o){const s=Ce,c=Ue,i=We;return n(),l("div",Oe,[_(c,null,{title:r(()=>[ze]),default:r(()=>[_(s,{title:"CPA",desc:"$25 і вище"}),_(s,{title:"REVSHARE",desc:"Піднімай до 60%"}),_(s,{title:"Гібрід",desc:"Зробимо як скажеш"})]),_:1}),_(i)])}const Ge=a(Ze,[["render",Pe],["__scopeId","data-v-2e6402f4"]]),Je=""+globalThis.__publicAssetsURL("user.svg"),Ke=""+globalThis.__publicAssetsURL("telegram.svg"),Qe=""+globalThis.__publicAssetsURL("skype.svg");const Xe={},g=e=>(u("data-v-12b5a4a5"),e=e(),m(),e),Ye=g(()=>t("div",{class:"form__head"},[t("div",{class:"form__img"},[t("img",{src:Je,alt:"user"})]),t("h3",{class:"typography_form-title"},"Реєстрація")],-1)),et={class:"form__inner"},tt={class:"form__contact"},ot=g(()=>t("p",{class:"form__contact-title typography_hairline-small typography_cl-gray-400 typography_text-center"}," Оберіть спосіб звязку ",-1)),st={class:"form__contact-row"},_t=g(()=>t("img",{src:Ke,alt:"telegram"},null,-1)),nt=g(()=>t("img",{src:Qe,alt:"skype"},null,-1));function ct(e,o){const s=I,c=w;return n(),l("form",{class:"form",onSubmit:o[0]||(o[0]=L(()=>{},["prevent"]))},[Ye,t("div",et,[_(s,{"class-name":"valid","input-type":"text",placeholder:"Ваше імʼя"}),_(s,{"input-type":"email",placeholder:"Ваш email"}),_(s,{"input-type":"password",placeholder:"Ваш пароль"}),_(s,{"class-name":"error",message:"Паролі не співпадають","input-type":"password",placeholder:"Повторіть пароль"}),t("div",tt,[ot,t("div",st,[_(c,{class:"form__social form__social_telegram button_medium button_light button_icon-only"},{icon:r(()=>[_t]),_:1}),_(c,{class:"form__social button_medium button_light button_icon-only"},{icon:r(()=>[nt]),_:1}),_(s,{"input-type":"text",placeholder:"@телеграм_адреса"})])]),_(c,{class:"form__button button_medium button_primary"},{default:r(()=>[$(" Реєстрація ")]),_:1})])],32)}const lt=a(Xe,[["render",ct],["__scopeId","data-v-12b5a4a5"]]);const at={},it={class:"register-wrapper"};function rt(e,o){const s=Ge,c=lt;return n(),l("div",it,[_(s,{class:"register-wrapper__slider"}),_(c)])}const dt=a(at,[["render",rt],["__scopeId","data-v-b9d401e4"]]),pt=""+globalThis.__publicAssetsURL("logo.png");const ut=e=>(u("data-v-4c360d44"),e=e(),m(),e),mt={class:"header"},ht={class:"header__inner"},ft=ut(()=>t("div",{class:"header__logo"},[t("img",{class:"header__logo-img",src:pt,alt:"logo"})],-1)),vt={class:"header__auth"},$t={__name:"HeaderComponent",setup(e){const o=b(!1),s=b(!1);return(c,i)=>{const d=w,h=se,f=pe,x=dt;return n(),l("header",mt,[t("div",ht,[ft,t("div",vt,[_(d,{onClick:i[0]||(i[0]=y=>o.value=!0),class:"button_small button_dark"},{default:r(()=>[$("Вхід")]),_:1}),_(d,{onClick:i[1]||(i[1]=y=>s.value=!0),class:"button_primary button_small"},{default:r(()=>[$("Реєстрація")]),_:1}),_(f,{open:o.value,onClose:i[2]||(i[2]=y=>o.value=!o.value)},{default:r(()=>[_(h)]),_:1},8,["open"]),_(f,{open:s.value,onClose:i[3]||(i[3]=y=>s.value=!s.value)},{default:r(()=>[_(x)]),_:1},8,["open"])])])])}}},gt=a($t,[["__scopeId","data-v-4c360d44"]]),yt={},bt={class:"global-content"},wt={class:"content"};function xt(e,o){const s=gt;return n(),l("div",bt,[_(s),t("div",wt,[p(e.$slots,"default")])])}const Lt=a(yt,[["render",xt]]);export{Lt as default};
