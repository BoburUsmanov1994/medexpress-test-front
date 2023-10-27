"use strict";(self.webpackChunkmedexpress=self.webpackChunkmedexpress||[]).push([[648],{63393:function(e,s,a){a.r(s),a.d(s,{default:function(){return K}});var t=a(72791),n=a(57689),r=a(1413),i=a(44925),l=a(29439),c=a(72509),o=a(39230),d=a(11087),m=a(52007),p=a.n(m);function x(){return x=Object.assign||function(e){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},x.apply(this,arguments)}function g(e,s){if(null==e)return{};var a,t,n=function(e,s){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=(0,t.forwardRef)((function(e,s){var a=e.color,n=void 0===a?"currentColor":a,r=e.size,i=void 0===r?24:r,l=g(e,["color","size"]);return t.createElement("svg",x({ref:s,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("polyline",{points:"15 18 9 12 15 6"}))}));u.propTypes={color:p().string,size:p().oneOfType([p().string,p().number])},u.displayName="ChevronLeft";var j=u,h=a(59828),y=a(11469),b=a(94502),f=a(48665),N=a(18720),v=a(63917),Z=a(763),w=a(92013),z=a(38954),k=a.p+"static/media/photo.fec5fb0520691887ed9c.png",L=a.p+"static/media/map.f57fac0e131ae1b14e89.png",O=a(30948),S=a(54179),_=a(13759),q=a(9443),A=a(88430),C=a(6921),T=a(58746),E=a(58309),P=a(60179),D=a(80184),F=["parent","names","service_types","contacts","level","locations"],I=["rate","organization_id"],R=function(e){var s=e.id,a=void 0===s?null:s,n=(0,t.useState)(!1),m=(0,l.Z)(n,2),p=m[0],x=m[1],g=(0,t.useState)(!1),u=(0,l.Z)(g,2),R=u[0],K=u[1],M=(0,o.$G)().t,B=(0,t.useState)("dept"),H=(0,l.Z)(B,2),U=H[0],V=H[1],W=(0,b.xq)({id:a,url:f.n.organizations}),G=W.data,$=W.isLoading,J=(0,b.i7)({key:N.t.organizationDepartments,url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationDepartments)}),Q=J.data,X=(J.isLoading,(0,b.i7)({key:N.t.organizationTypeMedical,url:f.n.organizationTypeMedical,params:{params:{limit:100}},enabled:p})),Y=X.data,ee=X.isLoading,se=(0,b.i7)({key:N.t.organizationType,url:f.n.organizationType,params:{params:{limit:100}},enabled:p}).data,ae=(0,b.i7)({key:N.t.organizationTypeLevel,url:f.n.organizationTypeLevel,params:{params:{limit:100}},enabled:p}),te=ae.data,ne=ae.isLoading,re=(0,b.i7)({key:N.t.organizationTypeService,url:f.n.organizationTypeService,params:{params:{limit:100}},enabled:p}),ie=re.data,le=re.isLoading,ce=(0,b.n7)({listKeyId:N.t.organizationDepartments}),oe=ce.mutate,de=ce.isLoading,me=(0,b.n7)({listKeyId:N.t.organizationPositions}),pe=me.mutate,xe=me.isLoading,ge=[{title:M("\u0414\u041e\u041b\u0416\u041d\u041e\u0421\u0422\u042c"),key:"names",render:function(e){var s=e.value,a=void 0===s?[]:s;return(0,Z.get)((0,Z.find)(a,(function(e){return"uz"==(0,Z.get)(e,"locale")})),"value","-")}},{title:M("\u041f\u041e \u041a\u041b\u0410\u0421\u0421\u0418\u0424\u0418\u041a\u0410\u0422\u041e\u0420\u0423"),key:"role",render:function(e){var s=e.value;return(0,Z.get)(s,"display","-")}},{title:M("\u041e\u0411\u0429\u0410\u042f \u0421\u0422\u0410\u0412\u041a\u0410"),key:"rate"},{title:M("\u0417\u0410\u041f\u041e\u041b\u041d\u0415\u041d\u041d\u041e\u0421\u0422\u042c"),key:"filled_rate"},{title:M("\u041a\u041e\u041b-\u0412\u041e \u0421\u041e\u0422\u0420\u0423\u0414\u041d\u0418\u041a\u041e\u0412"),key:"practitioner_role_count"}];return $?(0,D.jsx)(v.E,{}):(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:"grid grid-cols-12",children:[(0,D.jsx)("div",{className:"col-span-12 mb-5",children:(0,D.jsxs)(d.rU,{className:"text-primary  font-bold inline-flex items-center",to:"/hrm/organizations",children:[(0,D.jsx)(j,{className:"mr-1"}),M("\u041d\u0430\u0437\u0430\u0434 \u043a \u0441\u043f\u0438\u0441\u043a\u0443")]})}),(0,D.jsx)("div",{className:"col-span-12 mb-4",children:(0,D.jsx)(c.Z,{children:(0,Z.get)(G,"data.display")})}),(0,D.jsx)("div",{className:"col-span-12",children:(0,D.jsxs)(w.m,{children:[(0,D.jsx)(w.O,{tab:"info",label:M("\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),children:(0,D.jsxs)(z.Z,{sm:!0,children:[(0,D.jsxs)("div",{className:"grid grid-cols-12 mb-6",children:[(0,D.jsx)("div",{className:"col-span-8",children:(0,D.jsx)(c.Z,{sm:!0,children:M("\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438")})}),(0,D.jsx)("div",{className:"col-span-4 text-right",children:(0,D.jsxs)("button",{className:"inline-flex items-center py-2 px-4 text-sm font-bold text-primary border border-primary rounded-lg",children:[(0,D.jsx)(h.Z,{size:18,className:"mr-3"}),M("\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435")]})})]}),(0,D.jsxs)("div",{className:"grid grid-cols-12 gap-x-16",children:[(0,D.jsxs)("div",{className:"col-span-9",children:[(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0418\u041d\u041d:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.tin")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.parent.display")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0422\u0438\u043f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.medical_type.display")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.level.display")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0424\u043e\u0440\u043c\u0430 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.legal_form.display")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0412\u0438\u0434\u044b \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.service_types",[]).map((function(e){var s=e.display;return"".concat(void 0===s?null:s,", ")}))})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u041f\u043e\u043b\u043d\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.display")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u041a\u0440\u0430\u0442\u043a\u043e\u0435 \u043d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,Z.get)(G,"data.display")})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0410\u0434\u0440\u0435\u0441:"}),(0,D.jsx)("strong",{className:"w-2/3",children:"".concat((0,Z.get)((0,Z.head)((0,Z.get)(G,"data.locations",[])),"address.state.display"),", ").concat((0,Z.get)((0,Z.head)((0,Z.get)(G,"data.locations",[])),"address.city.display"))})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0420\u0435\u0433\u0438\u043e\u043d \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f:"}),(0,D.jsx)("strong",{className:"w-2/3",children:"\u0421\u044b\u0440\u0434\u0430\u0440\u044c\u0438\u043d\u0441\u043a\u0430\u044f \u043e\u0431\u043b\u0430\u0441\u0442\u044c"})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:"}),(0,D.jsx)("strong",{className:"w-2/3",children:(0,D.jsx)(O.HH,{displayType:"text",format:"+998 ## ### ## ##",value:(0,Z.get)((0,Z.find)((0,Z.get)((0,Z.head)((0,Z.get)(G,"data.contacts",[])),"telecoms",[]),(function(e){return 1==(0,Z.get)(e,"system.id")})),"value")})})]}),(0,D.jsxs)("div",{className:"flex py-5 border-b items-center",children:[(0,D.jsx)("span",{className:"w-1/3",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:"}),(0,D.jsx)("strong",{className:"text-primary w-2/3",children:(0,Z.get)((0,Z.find)((0,Z.get)((0,Z.head)((0,Z.get)(G,"data.contacts",[])),"telecoms",[]),(function(e){return 2==(0,Z.get)(e,"system.id")})),"value")})]})]}),(0,D.jsxs)("div",{className:"col-span-3",children:[(0,D.jsx)("img",{className:"mb-6 object-cover",src:k,alt:""}),(0,D.jsx)("img",{className:"object-cover",src:L,alt:""})]})]})]})}),(0,D.jsx)(w.O,{tab:"employees",label:M("\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"),children:(0,D.jsx)(z.Z,{sm:!0})}),(0,D.jsx)(w.O,{tab:"departments",label:M("\u041e\u0440\u0433. \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430"),children:(0,D.jsxs)("div",{className:"grid grid-cols-12 gap-x-6",children:[(0,D.jsx)("div",{className:"col-span-3",children:(0,D.jsxs)(z.Z,{sm:!0,classNames:"!p-4",children:[(0,D.jsx)("ul",{className:"mb-6",children:(0,Z.get)(Q,"data.data",[]).map((function(e){return(0,D.jsx)("li",{className:"cursor-pointer text-[#222222] font-bold py-1.5 mb-2",children:(0,Z.get)(e,"display")},(0,Z.get)(e,"id"))}))}),(0,D.jsxs)("button",{onClick:function(){return x(!0)},className:"text-primary font-bold flex items-center justify-center w-full text-center p-4 border-t border-1 border-t-[rgba(0,0,0,0.1)]",children:["\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435 ",(0,D.jsx)(y.Z,{className:"ml-2",size:24})]})]})}),(0,D.jsx)("div",{className:"col-span-9",children:(0,D.jsx)(z.Z,{sm:!0,children:(0,D.jsxs)("div",{className:"grid grid-cols-12",children:[(0,D.jsx)("div",{className:"col-span-6",children:(0,D.jsx)(c.Z,{sm:!0,children:"\u0428\u0442\u0430\u0442\u043d\u044b\u0435 \u0435\u0434\u0438\u043d\u0438\u0446\u044b"})}),(0,D.jsx)("div",{className:"col-span-6 text-right",children:(0,D.jsxs)("button",{onClick:function(){return K(!0)},className:"inline-flex py-2.5 pl-2.5 pr-5 rounded-lg text-primary items-center font-bold border-2 border-primary text-center ",children:[(0,D.jsx)(y.Z,{className:"mr-1.5"}),M("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c")]})}),(0,D.jsx)("div",{className:"col-span-12",children:(0,D.jsx)(P.Z,{noBorder:!0,columns:ge,url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationPositions),listKey:N.t.organizationPositions})})]})})})]})})]})})]}),(0,D.jsxs)(S.Z,{open:p,onClose:function(){return x(!1)},classNames:"!w-[1000px]",title:M("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435"),children:[de&&(0,D.jsx)(v.p,{}),ee?(0,D.jsx)(v.p,{}):(0,D.jsxs)(_.Z,{classNames:"grid grid-cols-12 gap-x-6",formRequest:function(e){return function(e){var s=e.data,t=s.parent,n=s.names,l=s.service_types,c=s.contacts,o=s.level,d=s.locations,m=(0,i.Z)(s,F);oe({url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationDepartments),attributes:(0,Z.isEqual)(U,"dept")?(0,r.Z)((0,r.Z)({},m),{},{names:n,parent:null!==t&&void 0!==t?t:void 0,display:(0,Z.get)(n,"[0].value"),type:(0,Z.find)((0,Z.get)(se,"data",[]),(function(e){return(0,Z.isEqual)((0,Z.get)(e,"code"),"dept")}))}):(0,r.Z)((0,r.Z)({},m),{},{locations:d,service_types:l,contacts:c,level:o,display:(0,Z.get)(n,"[0].value"),names:n,type:(0,Z.find)((0,Z.get)(se,"data",[]),(function(e){return(0,Z.isEqual)((0,Z.get)(e,"code"),"prov")}))})},{onSuccess:function(){x(!1)}})}(e)},footer:(0,D.jsx)("div",{className:"col-span-12 ",children:(0,D.jsxs)("div",{className:"flex justify-end",children:[(0,D.jsx)("button",{onClick:function(){return x(!1)},type:"button",className:"text-[#7A7A7A] border-2 border-[#7A7A7A] py-3 px-6 rounded-lg mr-4 inline-block   font-bold text-center  mt-6",children:M("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,D.jsx)("button",{type:"submit",className:" py-3 px-6 rounded-lg bg-primary inline-block  text-white font-bold text-center  mt-6",children:M("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})]})}),children:[(0,D.jsx)(q.Z,{type:"select",isLoading:ee,defaultValue:(0,Z.find)((0,Z.get)(Y,"data",[]),(function(e){return(0,Z.isEqual)((0,Z.get)(e,"code"),U)})),property:{onChange:function(e){return V((0,Z.get)(e,"code"))}},classNames:"col-span-12",name:"medical_type",label:(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("span",{children:M("\u0422\u0438\u043f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438")}),(0,D.jsx)("img",{className:"ml-1",src:A.Z,alt:"org"})]}),params:{required:!0},options:(0,Z.get)(Y,"data",[])}),(0,Z.isEqual)(U,"dept")&&(0,D.jsxs)(D.Fragment,{children:[" ",(0,D.jsx)(q.Z,{type:"async-select",isDisabledSearch:!0,url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationDepartments),keyId:N.t.organizationsListForSelect,classNames:"col-span-12",name:"parent",label:M("\u0420\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f")}),(0,D.jsx)("hr",{className:"mt-2 mb-6 col-span-12"}),(0,D.jsx)(C.Z,{})]}),U&&!(0,Z.isEqual)(U,"dept")&&(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(q.Z,{type:"select",isLoading:ne,classNames:"col-span-6",name:"level",label:(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("span",{children:M("\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433")}),(0,D.jsx)("img",{className:"ml-1",src:A.Z,alt:"org"})]}),params:{required:!0},options:(0,Z.get)(te,"data",[])}),(0,D.jsx)(q.Z,{params:{required:!0},type:"select",isLoading:le,classNames:"col-span-6",name:"service_types",isMulti:!0,label:(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("span",{children:M("\u0412\u0438\u0434\u044b \u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u0443\u0441\u043b\u0443\u0433")}),(0,D.jsx)("img",{className:"ml-1",src:A.Z,alt:"org"})]}),options:(0,Z.get)(ie,"data",[])}),(0,D.jsx)(C.Z,{}),(0,D.jsx)("hr",{className:"mb-3 w-full block col-span-12"}),(0,D.jsx)(E.Z,{}),(0,D.jsx)("hr",{className:"mb-3 w-full block col-span-12"}),(0,D.jsx)(T.Z,{})]})]})]}),(0,D.jsxs)(S.Z,{open:R,onClose:function(){return K(!1)},classNames:"!w-[552px]",title:M("\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c"),children:[xe&&(0,D.jsx)(v.p,{}),(0,D.jsxs)(_.Z,{classNames:"grid grid-cols-12 gap-x-6",formRequest:function(e){return function(e){var s=e.data,t=s.rate,n=s.organization_id,l=(0,i.Z)(s,I);"dept"==(0,Z.get)(n,"type.code")?pe({url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationPositions),attributes:(0,r.Z)((0,r.Z)({},l),{},{rate:parseFloat(t),department_id:(0,Z.get)(n,"id"),display:(0,Z.get)(l,"[0].value")})},{onSuccess:function(){K(!1)}}):(0,Z.get)(n,"id")?pe({url:"".concat(f.n.organizations,"/").concat((0,Z.get)(n,"id")).concat(f.n.organizationPositions),attributes:(0,r.Z)((0,r.Z)({},l),{},{rate:parseFloat(t),display:(0,Z.get)(l,"[0].value")})},{onSuccess:function(){K(!1)}}):pe({url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationPositions),attributes:(0,r.Z)((0,r.Z)({},l),{},{rate:parseFloat(t),display:(0,Z.get)(l,"[0].value")})},{onSuccess:function(){K(!1)}})}(e)},footer:(0,D.jsx)("div",{className:"col-span-12 ",children:(0,D.jsxs)("div",{className:"flex justify-end",children:[(0,D.jsx)("button",{onClick:function(){return K(!1)},type:"button",className:"text-[#7A7A7A] border-2 border-[#7A7A7A] py-3 px-6 rounded-lg mr-4 inline-block   font-bold text-center  mt-6",children:M("\u041e\u0442\u043c\u0435\u043d\u0430")}),(0,D.jsx)("button",{type:"submit",className:" py-3 px-6 rounded-lg bg-primary inline-block  text-white font-bold text-center  mt-6",children:M("\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")})]})}),children:[(0,D.jsx)(q.Z,{type:"async-select",isDisabledSearch:!0,url:"".concat(f.n.organizations,"/").concat(a).concat(f.n.organizationDepartments),keyId:N.t.organizationsListForSelect,classNames:"col-span-12",name:"organization_id",label:M("\u041e\u0442\u0434\u0435\u043b\u0435\u043d\u0438\u0435")}),(0,D.jsx)(q.Z,{type:"async-select",url:f.n.practitionerRole,keyId:N.t.practitionerRole,classNames:"col-span-12",name:"role",label:(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("span",{children:M("\u041f\u043e \u043a\u043b\u0430\u0441\u0441\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440\u0443")}),(0,D.jsx)("img",{className:"ml-1",src:A.Z,alt:"org"})]}),params:{required:!0}}),(0,D.jsx)("hr",{className:"mt-2 mb-6 col-span-12"}),(0,D.jsx)(C.Z,{fullWidth:!0,hideValueShort:!0}),(0,D.jsx)("hr",{className:"mt-2 mb-6 col-span-12"}),(0,D.jsx)(q.Z,{type:"input",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",classNames:"col-span-12",name:"rate",label:(0,D.jsxs)("div",{className:"flex",children:[(0,D.jsx)("span",{children:M("\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430")}),(0,D.jsx)("img",{className:"ml-1",src:A.Z,alt:"org"})]}),params:{required:!0}})]})]})]})},K=function(){var e=(0,n.UO)().id;return(0,D.jsx)(D.Fragment,{children:(0,D.jsx)(R,{id:e})})}}}]);
//# sourceMappingURL=648.14b48cab.chunk.js.map