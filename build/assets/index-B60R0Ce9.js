import{u as A,r as l,C as w,c as M,_ as Q,a as E,s as U,g as J,d as v,f as K,b as Z,e as ee,T as D,h as F,i as te,j as oe,k as R,D as re,l as se,m as _,n,P as I,o as ne,p as ae,O as ie,N as le,q as ce}from"./index-BOP-Y-Uy.js";import{S as X,L as de,a as ge,M as ue,I as B,u as he}from"./useConfirm-BOllBSjR.js";import{t as me,g as fe,o as xe,B as P}from"./index-CiXHf8FL.js";function be(t,e,o){return typeof o=="boolean"?o:t.length?!0:me(e).some(s=>s.type===X)}const pe=t=>{const{componentCls:e,bodyBg:o,lightSiderBg:r,lightTriggerBg:s,lightTriggerColor:a}=t;return{[`${e}-sider-light`]:{background:r,[`${e}-sider-trigger`]:{color:a,background:s},[`${e}-sider-zero-width-trigger`]:{color:a,background:s,border:`1px solid ${o}`,borderInlineStart:0}}}},ye=t=>{const{antCls:e,componentCls:o,colorText:r,triggerColor:s,footerBg:a,triggerBg:c,headerHeight:d,headerPadding:i,headerColor:g,footerPadding:b,triggerHeight:u,zeroTriggerHeight:p,zeroTriggerWidth:y,motionDurationMid:h,motionDurationSlow:m,fontSize:S,borderRadius:C,bodyBg:N,headerBg:$,siderBg:k}=t;return{[o]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:N,"&, *":{boxSizing:"border-box"},[`&${o}-has-sider`]:{flexDirection:"row",[`> ${o}, > ${o}-content`]:{width:0}},[`${o}-header, &${o}-footer`]:{flex:"0 0 auto"},[`${o}-sider`]:{position:"relative",minWidth:0,background:k,transition:`all ${h}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${e}-menu${e}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:u},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:u,color:s,lineHeight:A(u),textAlign:"center",background:c,cursor:"pointer",transition:`all ${h}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:d,insetInlineEnd:t.calc(y).mul(-1).equal(),zIndex:1,width:y,height:p,color:s,fontSize:t.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:k,borderStartStartRadius:0,borderStartEndRadius:C,borderEndEndRadius:C,borderEndStartRadius:0,cursor:"pointer",transition:`background ${m} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${m}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:t.calc(y).mul(-1).equal(),borderStartStartRadius:C,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:C}}}}},pe(t)),{"&-rtl":{direction:"rtl"}}),[`${o}-header`]:{height:d,padding:i,color:g,lineHeight:A(d),background:$,[`${e}-menu`]:{lineHeight:"inherit"}},[`${o}-footer`]:{padding:b,color:r,fontSize:S,background:a},[`${o}-content`]:{flex:"auto",color:r,minHeight:0}}},Se=t=>{const{colorBgLayout:e,controlHeight:o,controlHeightLG:r,colorText:s,controlHeightSM:a,marginXXS:c,colorTextLightSolid:d,colorBgContainer:i}=t,g=r*1.25;return{colorBgHeader:"#001529",colorBgBody:e,colorBgTrigger:"#002140",bodyBg:e,headerBg:"#001529",headerHeight:o*2,headerPadding:`0 ${g}px`,headerColor:s,footerPadding:`${a}px ${g}px`,footerBg:e,siderBg:"#001529",triggerHeight:r+c*2,triggerBg:"#002140",triggerColor:d,zeroTriggerWidth:r,zeroTriggerHeight:r,lightSiderBg:i,lightTriggerBg:i,lightTriggerColor:s}},W=fe("Layout",t=>[ye(t)],Se,{deprecatedTokens:[["colorBgBody","bodyBg"],["colorBgHeader","headerBg"],["colorBgTrigger","triggerBg"]]});var V=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(o[r[s]]=t[r[s]]);return o};function T(t){let{suffixCls:e,tagName:o,displayName:r}=t;return s=>l.forwardRef((c,d)=>l.createElement(s,Object.assign({ref:d,suffixCls:e,tagName:o},c)))}const L=l.forwardRef((t,e)=>{const{prefixCls:o,suffixCls:r,className:s,tagName:a}=t,c=V(t,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:d}=l.useContext(w),i=d("layout",o),[g,b,u]=W(i),p=r?`${i}-${r}`:i;return g(l.createElement(a,Object.assign({className:M(o||p,s,b,u),ref:e},c)))}),Ce=l.forwardRef((t,e)=>{const{direction:o}=l.useContext(w),[r,s]=l.useState([]),{prefixCls:a,className:c,rootClassName:d,children:i,hasSider:g,tagName:b,style:u}=t,p=V(t,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),y=xe(p,["suffixCls"]),{getPrefixCls:h,layout:m}=l.useContext(w),S=h("layout",a),C=be(r,i,g),[N,$,k]=W(S),G=M(S,{[`${S}-has-sider`]:C,[`${S}-rtl`]:o==="rtl"},m==null?void 0:m.className,c,d,$,k),q=l.useMemo(()=>({siderHook:{addSider:O=>{s(z=>[].concat(Q(z),[O]))},removeSider:O=>{s(z=>z.filter(Y=>Y!==O))}}}),[]);return N(l.createElement(de.Provider,{value:q},l.createElement(b,Object.assign({ref:e,className:G,style:Object.assign(Object.assign({},m==null?void 0:m.style),u)},y),i)))}),je=T({tagName:"div",displayName:"Layout"})(Ce),Be=T({suffixCls:"header",tagName:"header",displayName:"Header"})(L),ke=T({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(L),ve=T({suffixCls:"content",tagName:"main",displayName:"Content"})(L),x=je;x.Header=Be;x.Footer=ke;x.Content=ve;x.Sider=X;x._InternalSiderContext=ge;const Te=t=>{const e=t!=null&&t.algorithm?E(t.algorithm):E(v),o=Object.assign(Object.assign({},U),t==null?void 0:t.token);return J(o,{override:t==null?void 0:t.token},e,K)};function Ne(t){const{sizeUnit:e,sizeStep:o}=t,r=o-2;return{sizeXXL:e*(r+10),sizeXL:e*(r+6),sizeLG:e*(r+2),sizeMD:e*(r+2),sizeMS:e*(r+1),size:e*r,sizeSM:e*r,sizeXS:e*(r-1),sizeXXS:e*(r-1)}}const $e=(t,e)=>{const o=e??v(t),r=o.fontSizeSM,s=o.controlHeight-4;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},o),Ne(e??t)),Z(r)),{controlHeight:s}),ee(Object.assign(Object.assign({},o),{controlHeight:s})))},f=(t,e)=>new D(t).setAlpha(e).toRgbString(),j=(t,e)=>new D(t).lighten(e).toHexString(),Oe=t=>{const e=F(t,{theme:"dark"});return{1:e[0],2:e[1],3:e[2],4:e[3],5:e[6],6:e[5],7:e[4],8:e[6],9:e[5],10:e[4]}},ze=(t,e)=>{const o=t||"#000",r=e||"#fff";return{colorBgBase:o,colorTextBase:r,colorText:f(r,.85),colorTextSecondary:f(r,.65),colorTextTertiary:f(r,.45),colorTextQuaternary:f(r,.25),colorFill:f(r,.18),colorFillSecondary:f(r,.12),colorFillTertiary:f(r,.08),colorFillQuaternary:f(r,.04),colorBgElevated:j(o,12),colorBgContainer:j(o,8),colorBgLayout:j(o,0),colorBgSpotlight:j(o,26),colorBgBlur:f(r,.04),colorBorder:j(o,26),colorBorderSecondary:j(o,19)}},He=(t,e)=>{const o=Object.keys(te).map(s=>{const a=F(t[s],{theme:"dark"});return new Array(10).fill(1).reduce((c,d,i)=>(c[`${s}-${i+1}`]=a[i],c[`${s}${i+1}`]=a[i],c),{})}).reduce((s,a)=>(s=Object.assign(Object.assign({},s),a),s),{}),r=e??v(t);return Object.assign(Object.assign(Object.assign({},r),o),oe(t,{generateColorPalettes:Oe,generateNeutralColorPalettes:ze}))};function we(){const[t,e,o]=se();return{theme:t,token:e,hashId:o}}const Le={defaultSeed:R.token,useToken:we,defaultAlgorithm:v,darkAlgorithm:He,compactAlgorithm:$e,getDesignToken:Te,defaultConfig:R,_internalContext:re};function H(t,e,o,r){return{key:e,icon:o,children:r,label:t}}function Ae(){const t=_();let e=[];e=[H("Dashboard",I.DASHBOARD,n.jsx(B,{icon:"ic:baseline-dashboard-customize"})),H("Tasks","tasks",n.jsx(B,{icon:"mdi:marketplace"}),[H("Tasks List",I.TASK_LIST,n.jsx(B,{icon:"material-symbols:order-approve"}))])];const o=l.useMemo(()=>e,[]);return n.jsx(ue,{theme:"light",mode:"inline",className:"mt-2 space-y-3",defaultSelectedKeys:["1"],items:o,onClick:({key:r})=>{t(r)}})}const{Header:Ee,Sider:Re,Content:Ie,Footer:Pe}=x,_e=()=>{const[t,e]=l.useState(!1),[o,r]=l.useState(80),{isAuthenticated:s}=ne(),{token:{colorBgContainer:a,borderRadiusLG:c,heightFull:d}}=Le.useToken(),{contextHolder:i,confirmed:g}=he("Logout","Your session will be end"),b=_(),u=async()=>{await g()&&(ce(),b("/"))},{pathname:p}=ae();l.useEffect(()=>{o===0&&e(!0)},[p]);const y=()=>{o===0&&e(!0)};return n.jsxs(n.Fragment,{children:[i,s?n.jsxs(x,{style:{height:d},hasSider:!0,children:[n.jsxs(Re,{breakpoint:"md",trigger:null,collapsible:!0,width:250,collapsed:t,collapsedWidth:o,onBreakpoint:h=>{h?(e(!0),r(0)):(e(!1),r(80))},style:{backgroundColor:a,height:"100svh",position:o===0&&"fixed",left:0,zIndex:10},className:"overflow-y-auto mobile-view",children:[!t&&n.jsx("p",{className:"mt-4 text-md ml-7 font-semibold",children:"General"}),n.jsx(Ae,{}),n.jsx("div",{className:" flex justify-center pt-5 border-t pb-3",children:n.jsx(P,{style:{},startIcon:n.jsx(B,{icon:"material-symbols:logout-sharp",className:"text-lg"}),onClick:u,children:n.jsx("span",{className:`${t?"hidden":"block "} text-nowrap`,children:"Logout"})})})]}),n.jsxs(x,{children:[n.jsxs(Ee,{style:{padding:0,background:a},className:"flex items-center justify-between max-md:justify-start",children:[n.jsx(P,{variant:"text",onClick:()=>e(h=>!h),style:{fontSize:"22px",width:64,height:64,position:o===0&&"absolute",right:o===0&&0,transition:"left 0.3s"},className:"toggle-button",children:t?n.jsx(B,{icon:"ant-design:menu-unfold-outlined"}):n.jsx(B,{icon:"ant-design:menu-fold-outlined"})}),n.jsx("div",{className:"flex justify-center w-full"})]}),n.jsx(Ie,{onClick:y,style:{margin:"24px 16px",padding:24,minHeight:280,background:a,borderRadius:c,display:"block",overflowY:"scroll"},children:n.jsx(ie,{})}),n.jsxs(Pe,{style:{textAlign:"center",padding:0},className:"text-primary select-none",children:["Task Manager ©",new Date().getFullYear()," Developed by"," ",n.jsxs("a",{href:"/",target:"_black",className:"hover:underline hover:text-primary",rel:"noopener noreferrer",children:["Business Automation"," "]})]})]})]}):n.jsx(le,{to:"/"})]})};export{_e as default};
