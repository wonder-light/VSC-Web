(function(){"use strict";var e={5164:function(e,t,n){var r=n(9242),o=n(3396),i=n(4870),a=n(4239);const u={key:1,class:"goto-home"};function s(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(r.uT,{"enter-active-class":"animate__fadeIn","leave-active-class":"animate__fadeOut",mode:"out-in"},{default:(0,o.w5)((()=>["/"!==e.$route.path?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"goto-home",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},"返回首页")):(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",u,"首页",512)),[[r.F8,!1]])])),_:1})])}var c={name:"HomeNav"},h=n(89);const l=(0,h.Z)(c,[["render",s]]);var p=l,d={setup(e){return a.Z.state.user||document.body.setAttribute("login","true"),(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)((0,i.SU)(p)),(0,o.Wm)(n,null,{default:(0,o.w5)((({Component:t})=>[(0,o.Wm)(r.uT,{"enter-active-class":"animate__fadeIn","leave-active-class":"animate__fadeOut",mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)(o.Ob,null,[((0,o.wg)(),(0,o.j4)((0,o.LL)(t),{key:e.$route.path}))],1024))])),_:2},1024)])),_:1})],64)}}};const f=d;var g=f;let m=!1;const w=()=>{window.MathJax&&(window.MathJax.Hub.Config({showProcessingMessages:!1,messageStyle:"none",jax:["input/TeX","output/HTML-CSS"],tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],skipTags:["script","noscript","style","textarea","pre","code","a"]},"HTML-CSS":{availableFonts:["STIX","TeX"],showMathMenu:!1}}),m=!0)},y=function(e){window.MathJax&&window.MathJax.Hub.Queue(["Typeset",window.MathJax.Hub,document.getElementById(e)])};var v={isMathjaxConfig:m,initMathjaxConfig:w,MathQueue:y},A=n(678);const b=[{path:"/",name:"home",component:()=>n.e(482).then(n.bind(n,6482))},{path:"/purpose",name:"purpose",component:()=>n.e(300).then(n.bind(n,300))},{path:"/principle",name:"principle",component:()=>n.e(796).then(n.bind(n,9796))},{path:"/problem",name:"problem",component:()=>n.e(568).then(n.bind(n,7568))},{path:"/simulation",name:"simulation",component:()=>n.e(301).then(n.bind(n,4301))},{path:"/processing",name:"processing",component:()=>n.e(284).then(n.bind(n,8284))},{path:"/result",name:"result",component:()=>n.e(285).then(n.bind(n,5285))}],D=(0,A.p7)({history:(0,A.r5)("/"),routes:b});let B=!0;D.beforeEach(((e,t)=>{if(B)return B=!1,"/";if("/simulation"===e.path){let e=a.Z.state.score<80&&!window.isDevelopment;return e&&alert("习题分数不足80分，不能进行仿真"),!e||t.path}if("/result"===e.path){let e=a.Z.state.didExp||window.isDevelopment;return e||alert("仿真暂未完成，不能查看结果"),!!e||t.path}return!0}));var x=D;let q=(0,r.ri)(g).use(a.Z).use(x);q.config.globalProperties.MathJax=v,q.mount("#app")},4239:function(e,t,n){var r=n(7139);let o=(0,r.MT)({state:{user:null,topics:[],showEXP:!0,showData:!1,showResult:!0,score:0,didExp:!1},getters:{GetRandomTopic:e=>function(){let t=[];for(let e=0;e<8;e++){let n=e<4?20:35,r=e<4?0:20,o=Math.floor(Math.random()*(n-r)+r);while(t.includes(o))o=Math.floor(Math.random()*(n-r)+r);t.push(o)}return t.map((t=>{let n=e.topics[t];return n.select="",n}))}},mutations:{setShowEXP(e,t){e.showEXP=t},setShowData(e,t){e.showData=t},setShowResult(e,t){e.showResult=t},setScore(e,t){e.score=t},setDidExp(e,t){e.didExp=t},setUser(e,t){e.user=t,document.body.setAttribute("login",t?"false":"true")}},actions:{},modules:{}});o.state.topics=[{type:"choice",question:"精馏塔设计时，若F、xF、xD、xw、V均为定值，将进料热状态从q=1变为q>1，则设计所需理论板数(  )。",answer:["A.多","B.少","C.不变","D.无法判断"],right:"B.少"},{type:"choice",question:"精馏操作时，若F、D、XF、q、加料板位置、R都不变，而将塔顶泡点回流改为冷回流，则塔顶产品组成xD的变化为(  )",answer:["A.变小","B.变大","C.不变","D.不确定"],right:"B.变大"},{type:"choice",question:"在常压下苯的沸点为80.1℃，环己烷的沸点为80.73℃，为使这两组份的混合液能得到分离，可采用(  )分离方法。",answer:["A.恒沸精馏","B.普通精馏","C.萃取精馏","D.水蒸汽直接加热精馏"],right:"C.萃取精馏"},{type:"choice",question:"精馏塔设计时采用的参数F、x F、q、D、xD、R均为定值，若降低塔顶回流液的温度，则所需理论板数(  )",answer:["A.增大","B.减小","C.不变","D.不确定"],right:"B.减小"},{type:"choice",question:"某精馏塔的设计任务为:原料为F、xF，塔顶为xD，塔底为xW，若塔釜上升蒸汽量V’不变，加料热状态由原来的饱和蒸汽改为饱和液体，则所需理论板NT()",answer:["A.增加","B.减少","C.不变","D.不确定"],right:"A.增加"},{type:"choice",question:"在连续蒸馏操作中，若F、xF、q不变，仅加大回流比时，则可以使塔顶产品浓度xD(  )",answer:["A.变大","B.变小","C.不变","D.不确定"],right:"A.变大"},{type:"choice",question:"精馏塔引入回流，使下降的液流与上升的汽流发生传质，并使上升汽相中的易挥发组分浓度提高，最恰当的说法是由于",answer:["A.液相中易挥发组分进入汽相","B.汽相中难挥发组分进入液相","C.液相中易挥发组分和难挥发组分同时进入汽相，但其中易挥发组分较多","D.液相中易挥发组分进入汽相和汽相中难挥发组分进入液相的现象同时发生"],right:"D.液相中易挥发组分进入汽相和汽相中难挥发组分进入液相的现象同时发生"},{type:"choice",question:"被分离物系最小回流比Rmin的数值与(  )无关。",answer:["A.被分离物系的汽液平衡关系","B.塔顶产品组成","C.进料组成和进料状态","D.塔底产品组成"],right:"D.塔底产品组成"},{type:"choice",question:"维持精馏塔F、q、xD及进料位置不变，减小xF，则有(  )。",answer:["A.D增大，R减小","B.D不变，R增加","C.D减小，R增加","D.D减小，R不变"],right:"C.D减小，R增加"},{type:"choice",question:"精馏塔在一定条件下操作时，将加料口向上移动两层塔板，此时塔顶产品浓度xD将(  )。",answer:["A.变大","B.变小","C.不变","D.不确定"],right:"B.变小"},{type:"choice",question:"精馏塔在操作过程中，若进料量F适当增加，而进料组成，热状况q、回流比R、塔顶馏出物D均不变，则塔釜组成xW将(  )。",answer:["A.变大","B.变小","C.不变","D.不确定"],right:"A.变大"},{type:"choice",question:"操作中的精馏塔，保持F、xF、q、 不变，减少D，则塔顶易挥发组分回收率( )。",answer:["A.变大","B.变小","C.不变","D.不确定"],right:"B.变小"},{type:"choice",question:"精馏操作时，若F、xF、q、R均不变，将塔顶产品量D增加，则(  )。",answer:["A.xD下降，xW下降","B.xD下降，xW上升","C.xD下降，xW不变","D.xD不变，xW下降"],right:"A.xD下降，xW下降"},{type:"choice",question:"二元溶液连续精馏计算中，进料热状态的变化将引起以下(  )线的变化。",answer:["A.平衡线","B.操作线与ｑ线","C.平衡线与操作线","D.平衡线与ｑ线"],right:"B.操作线与ｑ线"},{type:"choice",question:"两组分物系的相对挥发度越小，则表示分离该物系越(  )。",answer:["A.容易","B.困难","C.完全","D.不完全"],right:"B.困难"},{type:"choice",question:"精馏操作中，回流比越大，分离效果( )。",answer:["A.越好","B.越差","C.没变化","D.难确定"],right:"A.越好"},{type:"choice",question:"对理论板的叙述错误的是(  )。",answer:["A.板上气液两相呈平衡状态","B.实际上不可能存在","C.是衡量实际塔板分离效率的一个标准","D.比实际塔板数多"],right:"D.比实际塔板数多"},{type:"choice",question:"塔板上造成雾沫夹带的原因是(  )。",answer:["A.气速过大","B.气速过小","C.液流量过大","D.液流量过小"],right:"A.气速过大"},{type:"choice",question:"增大精馏塔塔顶冷凝器中的冷却水量，可以( )塔顶压力。",answer:["A.降低","B.提高 ","C.不改变 "],right:"A.降低"},{type:"choice",question:"精馏过程的理论板假设是指(  )。",answer:["A.进入该板的气液两相组成相等","B.进入该板的气液两相组成平衡","C.离开该板的气液两相组成相等","D.离开该板的气液两相组成平衡"],right:"D.离开该板的气液两相组成平衡"},{type:"judgment",question:"精馏段操作线方程为:y=0.75x+0.3，这种情况不可能出现。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"连续稳定进料操作的精馏塔，提馏段液汽比总是大于1，精馏段液汽比总是小于1。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"精馏设计时，采用相同的塔釜蒸发量，则冷液进料比热加料需要较少理论板数。",answer:["A.对","B.错"],right:"B.错"},{type:"judgment",question:"最小回流比状态下的理论塔板数为最少理论塔板数。",answer:["A.对","B.错"],right:"B.错"},{type:"judgment",question:"在理想的两组分溶液中，组分 A和 B的相对挥发度为1，则二者的混合溶液不能用普通精馏的方法分离。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"根据恒摩尔流假设，精馏塔内气、液两相的縻尔流量一定相等。",answer:["A.对","B.错"],right:"B.错"},{type:"judgment",question:"精馏塔分为精馏段、加料板、 提馏段三个部分。",answer:["A.对","B.错"],right:"B.错"},{type:"judgment",question:"精馏塔中理论板实际上是不存在的。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"塔顶冷凝器中的冷凝液既可全部作为产品，也可部分回流至塔内。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"精馏塔的实际回流比都比最小回流比大。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"采用图解法与逐板法求理论塔板数的基本原理完全相同。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"在塔的操作中应先停再沸器再停进料。",answer:["A.对","B.错"],right:"B.错"},{type:"judgment",question:"精馏的操作线为直线，主要是因为理论板假设。",answer:["A.对","B.错"],right:"B.错"},{type:"judgment",question:"安装出口堰是为了保证气液两相在塔板上有充分的接触时间。",answer:["A.对","B.错"],right:"A.对"},{type:"judgment",question:"板式塔内以塔板作为气液两相接触传质的基本条件。",answer:["A.对","B.错"],right:"A.对"}];for(let i of o.state.topics)i.select="";t["Z"]=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(h=0;h<e.length;h++){r=e[h][0],o=e[h][1],i=e[h][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(h--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var h=e.length;h>0&&e[h-1][2]>i;h--)e[h]=e[h-1];e[h]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{284:"71801469",285:"9b786180",300:"29487846",301:"836baa35",482:"84dba0d0",568:"1b30e1fd",796:"70f12670"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".9411f9e9.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="bang:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),h=0;h<c.length;h++){var l=c[h];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var p=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={482:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var h=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(h)},r=self["webpackChunkbang"]=self["webpackChunkbang"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5164)}));r=n.O(r)})();
//# sourceMappingURL=app.49da7aba.js.map