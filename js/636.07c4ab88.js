"use strict";(self["webpackChunkbang"]=self["webpackChunkbang"]||[]).push([[636],{3636:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var o=i(3396);const s={class:"first-layout",style:{"flex-direction":"column"}},n={class:"text-content default-border"},c={key:0};function l(t,e,i,l,r,u){const a=(0,o.up)("Topic");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",{class:"goto-home",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},"返回首页"),(0,o._)("div",n,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.topics,((t,e)=>((0,o.wg)(),(0,o.j4)(a,{key:e,index:e,topic:t},{default:(0,o.w5)((()=>[7!==e?((0,o.wg)(),(0,o.iD)("hr",c)):(0,o.kq)("",!0)])),_:2},1032,["index","topic"])))),128))]),(0,o._)("button",{class:"submit-answer",onClick:e[1]||(e[1]=(...t)=>u.Submit&&u.Submit(...t))},"提交")])}var r=i(7139),u=i(9242);const a={style:{width:"100%"}},p={class:"question"},d={class:"answer"},w=["name","value"];function h(t,e,i,s,n,c){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o._)("div",p,(0,r.zw)(i.index+1)+" : "+(0,r.zw)(i.topic.question),1),(0,o._)("ul",d,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.topic.answer,((t,s)=>((0,o.wg)(),(0,o.iD)("li",{key:s},[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.topic.select=t),name:t,value:t,type:"radio"},null,8,w),[[u.G2,i.topic.select]]),(0,o._)("label",null,(0,r.zw)(t),1)])))),128))])]),(0,o.WI)(t.$slots,"default")],64)}var m={name:"Topic",props:["topic","index"]},f=i(89);const b=(0,f.Z)(m,[["render",h]]);var g=b,v={name:"Problem",components:{Topic:g},created(){this.topics=this.$store.getters.GetRandomTopic()},data(){return{topics:[]}},methods:{Submit(){let t=0;this.topics.forEach(((e,i)=>{e.select===e.right&&(t+=i<4?15:10)})),t>=80&&(this.$store.commit("setShowEXP",!0),this.$store.commit("setShowResult",!0)),alert(t>=80?"通过":"不通过"),this.$router.push("/")}}};const k=(0,f.Z)(v,[["render",l]]);var _=k}}]);
//# sourceMappingURL=636.07c4ab88.js.map