"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[325],{89938:function(Me,D,s){s.r(D),s.d(D,{default:function(){return ge}});var G=s(13769),z=s.n(G),Y=s(5574),T=s.n(Y),H=s(15009),i=s.n(H),K=s(97857),P=s.n(K),J=s(99289),v=s.n(J),y=s(2618),Q=s(24969),X=s(1524),k=s(58211),q=s(2236),_=s(37476),L=s(5966),I=s(90672),ee=s(98097),r=s(80854),f=s(45360),ae=s(69677),Z=s(71577),se=s(85265),F=s(67294),C=s(38020),w=s(64317),te=s(86615),re=s(22452),ne=s(5914),e=s(85893),le=function(d){var t=(0,r.useIntl)();return(0,e.jsxs)(C.L0,{stepsProps:{size:"small"},stepsFormRender:function(p,a){return(0,e.jsx)(ne.Z,{width:640,bodyStyle:{padding:"32px 40px 48px"},destroyOnClose:!0,title:t.formatMessage({id:"pages.searchTable.updateForm.ruleConfig",defaultMessage:"\u89C4\u5219\u914D\u7F6E"}),open:d.updateModalOpen,footer:a,onCancel:function(){d.onCancel()},children:p})},onFinish:d.onSubmit,children:[(0,e.jsxs)(C.L0.StepForm,{initialValues:{name:d.values.name,desc:d.values.desc},title:t.formatMessage({id:"pages.searchTable.updateForm.basicConfig",defaultMessage:"\u57FA\u672C\u4FE1\u606F"}),children:[(0,e.jsx)(L.Z,{name:"name",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"\u89C4\u5219\u540D\u79F0"}),width:"md",rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.updateForm.ruleName.nameRules",defaultMessage:"\u8BF7\u8F93\u5165\u89C4\u5219\u540D\u79F0\uFF01"})}]}),(0,e.jsx)(I.Z,{name:"desc",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descLabel",defaultMessage:"\u89C4\u5219\u63CF\u8FF0"}),placeholder:t.formatMessage({id:"pages.searchTable.updateForm.ruleDesc.descPlaceholder",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26"}),rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.updateForm.ruleDesc.descRules",defaultMessage:"\u8BF7\u8F93\u5165\u81F3\u5C11\u4E94\u4E2A\u5B57\u7B26\u7684\u89C4\u5219\u63CF\u8FF0\uFF01"}),min:5}]})]}),(0,e.jsxs)(C.L0.StepForm,{initialValues:{target:"0",template:"0"},title:t.formatMessage({id:"pages.searchTable.updateForm.ruleProps.title",defaultMessage:"\u914D\u7F6E\u89C4\u5219\u5C5E\u6027"}),children:[(0,e.jsx)(w.Z,{name:"target",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),valueEnum:{0:"\u8868\u4E00",1:"\u8868\u4E8C"}}),(0,e.jsx)(w.Z,{name:"template",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleProps.templateLabel",defaultMessage:"\u89C4\u5219\u6A21\u677F"}),valueEnum:{0:"\u89C4\u5219\u6A21\u677F\u4E00",1:"\u89C4\u5219\u6A21\u677F\u4E8C"}}),(0,e.jsx)(te.Z.Group,{name:"type",label:t.formatMessage({id:"pages.searchTable.updateForm.ruleProps.typeLabel",defaultMessage:"\u89C4\u5219\u7C7B\u578B"}),options:[{value:"0",label:"\u5F3A"},{value:"1",label:"\u5F31"}]})]}),(0,e.jsxs)(C.L0.StepForm,{initialValues:{type:"1",frequency:"month"},title:t.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.title",defaultMessage:"\u8BBE\u5B9A\u8C03\u5EA6\u5468\u671F"}),children:[(0,e.jsx)(re.Z,{name:"time",width:"md",label:t.formatMessage({id:"pages.searchTable.updateForm.schedulingPeriod.timeLabel",defaultMessage:"\u5F00\u59CB\u65F6\u95F4"}),rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.updateForm.schedulingPeriod.timeRules",defaultMessage:"\u8BF7\u9009\u62E9\u5F00\u59CB\u65F6\u95F4\uFF01"})}]}),(0,e.jsx)(w.Z,{name:"frequency",label:t.formatMessage({id:"pages.searchTable.updateForm.object",defaultMessage:"\u76D1\u63A7\u5BF9\u8C61"}),width:"md",valueEnum:{month:"\u6708",week:"\u5468"}})]})]})},ue=le,de=["defaultRender"],ie=function(){var M=v()(i()().mark(function d(t){var o;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=f.ZP.loading("\u6B63\u5728\u6DFB\u52A0"),a.prev=1,a.next=4,(0,y.HP)(P()({},t));case 4:return o(),f.ZP.success("Added successfully"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),o(),f.ZP.error("Adding failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},d,null,[[1,9]])}));return function(t){return M.apply(this,arguments)}}(),oe=function(){var M=v()(i()().mark(function d(t){var o;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=f.ZP.loading("Configuring"),a.prev=1,a.next=4,(0,y.D7)({name:t.name,desc:t.desc,key:t.key});case 4:return o(),f.ZP.success("Configuration is successful"),a.abrupt("return",!0);case 9:return a.prev=9,a.t0=a.catch(1),o(),f.ZP.error("Configuration failed, please try again!"),a.abrupt("return",!1);case 14:case"end":return a.stop()}},d,null,[[1,9]])}));return function(t){return M.apply(this,arguments)}}(),ce=function(){var M=v()(i()().mark(function d(t){var o;return i()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(o=f.ZP.loading("\u6B63\u5728\u5220\u9664"),t){a.next=3;break}return a.abrupt("return",!0);case 3:return a.prev=3,a.next=6,(0,y.DV)({key:t.map(function(x){return x.key})});case 6:return o(),f.ZP.success("Deleted successfully and will refresh soon"),a.abrupt("return",!0);case 11:return a.prev=11,a.t0=a.catch(3),o(),f.ZP.error("Delete failed, please try again"),a.abrupt("return",!1);case 16:case"end":return a.stop()}},d,null,[[3,11]])}));return function(t){return M.apply(this,arguments)}}(),me=function(){var d=(0,F.useState)(!1),t=T()(d,2),o=t[0],p=t[1],a=(0,F.useState)(!1),x=T()(a,2),fe=x[0],A=x[1],pe=(0,F.useState)(!1),O=T()(pe,2),B=O[0],E=O[1],b=(0,F.useRef)(),he=(0,F.useState)(),N=T()(he,2),m=N[0],S=N[1],ve=(0,F.useState)([]),$=T()(ve,2),j=$[0],U=$[1],R=(0,r.useIntl)(),V=[{title:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.updateForm.ruleName.nameLabel",defaultMessage:"Rule name"}),dataIndex:"name",tip:"The rule name is the unique key",render:function(n,l){return(0,e.jsx)("a",{onClick:function(){S(l),E(!0)},children:n})}},{title:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleDesc",defaultMessage:"Description"}),dataIndex:"desc",valueType:"textarea"},{title:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleCallNo",defaultMessage:"Number of service calls"}),dataIndex:"callNo",sorter:!0,hideInForm:!0,renderText:function(n){return"".concat(n).concat(R.formatMessage({id:"pages.searchTable.tenThousand",defaultMessage:" \u4E07 "}))}},{title:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleStatus",defaultMessage:"Status"}),dataIndex:"status",hideInForm:!0,valueEnum:{0:{text:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.nameStatus.default",defaultMessage:"Shut down"}),status:"Default"},1:{text:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.nameStatus.running",defaultMessage:"Running"}),status:"Processing"},2:{text:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.nameStatus.online",defaultMessage:"Online"}),status:"Success"},3:{text:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.nameStatus.abnormal",defaultMessage:"Abnormal"}),status:"Error"}}},{title:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleUpdatedAt",defaultMessage:"Last scheduled time"}),sorter:!0,dataIndex:"updatedAt",valueType:"dateTime",renderFormItem:function(n,l,g){var h=l.defaultRender,c=z()(l,de),W=g.getFieldValue("status");return"".concat(W)==="0"?!1:"".concat(W)==="3"?(0,e.jsx)(ae.Z,P()(P()({},c),{},{placeholder:R.formatMessage({id:"pages.searchTable.exception",defaultMessage:"Please enter the reason for the exception!"})})):h(n)}},{title:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.titleOption",defaultMessage:"Operating"}),dataIndex:"option",valueType:"option",render:function(n,l){return[(0,e.jsx)("a",{onClick:function(){A(!0),S(l)},children:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.config",defaultMessage:"Configuration"})},"config"),(0,e.jsx)("a",{href:"https://procomponents.ant.design/",children:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.subscribeAlert",defaultMessage:"Subscribe to alerts"})},"subscribeAlert")]}}];return(0,e.jsxs)(X._z,{children:[(0,e.jsx)(k.Z,{headerTitle:R.formatMessage({id:"pages.searchTable.title",defaultMessage:"Enquiry form"}),actionRef:b,rowKey:"key",search:{labelWidth:120},toolBarRender:function(){return[(0,e.jsxs)(Z.ZP,{type:"primary",onClick:function(){p(!0)},children:[(0,e.jsx)(Q.Z,{})," ",(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.new",defaultMessage:"New"})]},"primary")]},request:y.jR,columns:V,rowSelection:{onChange:function(n,l){U(l)}}}),(j==null?void 0:j.length)>0&&(0,e.jsxs)(q.S,{extra:(0,e.jsxs)("div",{children:[(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.chosen",defaultMessage:"Chosen"})," ",(0,e.jsx)("a",{style:{fontWeight:600},children:j.length})," ",(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.item",defaultMessage:"\u9879"}),"\xA0\xA0",(0,e.jsxs)("span",{children:[(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.totalServiceCalls",defaultMessage:"Total number of service calls"})," ",j.reduce(function(u,n){return u+n.callNo},0)," ",(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.tenThousand",defaultMessage:"\u4E07"})]})]}),children:[(0,e.jsx)(Z.ZP,{onClick:v()(i()().mark(function u(){var n,l;return i()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,ce(j);case 2:U([]),(n=b.current)===null||n===void 0||(l=n.reloadAndRest)===null||l===void 0||l.call(n);case 4:case"end":return h.stop()}},u)})),children:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.batchDeletion",defaultMessage:"Batch deletion"})}),(0,e.jsx)(Z.ZP,{type:"primary",children:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.batchApproval",defaultMessage:"Batch approval"})})]}),(0,e.jsxs)(_.Y,{title:R.formatMessage({id:"pages.searchTable.createForm.newRule",defaultMessage:"New rule"}),width:"400px",open:o,onOpenChange:p,onFinish:function(){var u=v()(i()().mark(function n(l){var g;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,ie(l);case 2:g=c.sent,g&&(p(!1),b.current&&b.current.reload());case 4:case"end":return c.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),children:[(0,e.jsx)(L.Z,{rules:[{required:!0,message:(0,e.jsx)(r.FormattedMessage,{id:"pages.searchTable.ruleName",defaultMessage:"Rule name is required"})}],width:"md",name:"name"}),(0,e.jsx)(I.Z,{width:"md",name:"desc"})]}),(0,e.jsx)(ue,{onSubmit:function(){var u=v()(i()().mark(function n(l){var g;return i()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,oe(l);case 2:g=c.sent,g&&(A(!1),S(void 0),b.current&&b.current.reload());case 4:case"end":return c.stop()}},n)}));return function(n){return u.apply(this,arguments)}}(),onCancel:function(){A(!1),B||S(void 0)},updateModalOpen:fe,values:m||{}}),(0,e.jsx)(se.Z,{width:600,open:B,onClose:function(){S(void 0),E(!1)},closable:!1,children:(m==null?void 0:m.name)&&(0,e.jsx)(ee.vY,{column:2,title:m==null?void 0:m.name,request:v()(i()().mark(function u(){return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",{data:m||{}});case 1:case"end":return l.stop()}},u)})),params:{id:m==null?void 0:m.name},columns:V})})]})},ge=me}}]);
