"use strict";(self["webpackChunkbang"]=self["webpackChunkbang"]||[]).push([[86],{86:function(t,o,e){e.r(o),e.d(o,{default:function(){return T}});var s=e(3396),i=e(9242),l=e(7139);const n={class:"first-layout",style:{"flex-direction":"column"}},r={class:"text-content default-border"},c={key:0},u={key:0,class:"problem-tooltip"},a={class:"default-text default-border dialog"},p={class:"header"},d={key:0};function h(t,o,e,h,w,m){const f=(0,s.up)("Topic");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(w.topics,((t,o)=>((0,s.wg)(),(0,s.j4)(f,{key:t.question,index:o,topic:t},{default:(0,s.w5)((()=>[7!==o?((0,s.wg)(),(0,s.iD)("hr",c)):(0,s.kq)("",!0)])),_:2},1032,["index","topic"])))),128))]),(0,s._)("button",{class:"submit-answer",onClick:o[0]||(o[0]=(...t)=>m.submit&&m.submit(...t))},"提交"),w.show?((0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("div",a,[(0,s._)("div",p,[(0,s._)("button",{onClick:o[1]||(o[1]=(0,i.iM)(((...t)=>m.closeTooltip&&m.closeTooltip(...t)),["self"]))},"关闭")]),(0,s._)("div",null,[(0,s._)("p",null,(0,l.zw)(w.tooltip),1),w.errors.length>0?((0,s.wg)(),(0,s.iD)("p",d,"错误: "+(0,l.zw)(w.errors.join("、")),1)):(0,s.kq)("",!0)])])])):(0,s.kq)("",!0)])}const w={style:{width:"100%"}},m={class:"question"},f={class:"answer"},b=["value"];function g(t,o,e,n,r,c){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",w,[(0,s._)("div",m,(0,l.zw)(e.index+1)+" : "+(0,l.zw)(e.topic.question),1),(0,s._)("ul",f,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.topic.answer,((t,n)=>((0,s.wg)(),(0,s.iD)("li",{key:t},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.topic.select=t),value:t,type:"radio"},null,8,b),[[i.G2,e.topic.select]]),(0,s._)("label",null,(0,l.zw)(t),1)])))),128))])]),(0,s.WI)(t.$slots,"default")],64)}var k={name:"Topic",props:["topic","index"]},v=e(89);const _=(0,v.Z)(k,[["render",g]]);var y=_,D={name:"Problem",components:{Topic:y},created(){this.topics=this.$store.getters.GetRandomTopic()},data(){return{topics:[],show:!1,errors:[],tooltip:""}},methods:{submit(){let t=0;this.topics.forEach(((o,e)=>{o.select===o.right?t+=12.5:this.errors.push(e+1)})),t>=80&&(this.$store.commit("setShowEXP",!0),this.$store.commit("setShowResult",!0)),this.tooltip=`本次答题分数: ${t}  ${t>=80?"通过":"不通过"}`,this.show=!0},closeTooltip(){this.show=!1,this.tooltip="",this.errors=[]}}};const x=(0,v.Z)(D,[["render",h]]);var T=x}}]);
//# sourceMappingURL=86.d5d86c12.js.map