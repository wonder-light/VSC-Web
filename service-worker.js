if(!self.define){let e,c={};const i=(i,n)=>(i=new URL(i+".js",n).href,c[i]||new Promise((c=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=c,document.head.appendChild(e)}else e=i,importScripts(i),c()})).then((()=>{let e=c[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(c[o])return;let s={};const d=e=>i(e,o),u={module:{uri:o},exports:s,require:d};c[o]=Promise.all(n.map((e=>u[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"bang"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/app.11704871.css",revision:null},{url:"css/chunk-vendors.be7abf4f.css",revision:null},{url:"document/全回流30-59分.docx",revision:"a474653d3f7199632a39596ff6a42bf6"},{url:"document/全回流60-69分.docx",revision:"bf97574f39204ac09c735581ec712688"},{url:"document/全回流70-79分.docx",revision:"ab9938bf17d0cea7672bee867deb6007"},{url:"document/全回流80-89分.docx",revision:"689b155b6c101e35505009d8aa1d16ee"},{url:"document/全回流90-95分.docx",revision:"58fabe846c6a1d9db1127c78a3cf1c9d"},{url:"document/全回流96-100分.docx",revision:"c877e2d18a54e9ece0266d16fc13ac50"},{url:"document/全回流低于30分.docx",revision:"2d8e2cd8f6652d93f2715ac2492bbf60"},{url:"document/精馏实验报告模板.docx",revision:"50e61e52c561c810dcf280e20b57e598"},{url:"document/部分回流30-59分.docx",revision:"435841294a4de8e7ecf0e4fe21d15dfc"},{url:"document/部分回流60-69分.docx",revision:"afe5164f3ce854966ad5a86fc0840762"},{url:"document/部分回流70-79分.docx",revision:"a8f4b3972f9e1a838cff53a464297398"},{url:"document/部分回流80-89分.docx",revision:"633f709645969bc59dda88ac41b0db3f"},{url:"document/部分回流90-95分.docx",revision:"0414c8821c3df8dcfffa2566ec0ded11"},{url:"document/部分回流96-100分.docx",revision:"acc2baf25e3c20e42f1aafd30a08ee59"},{url:"document/部分回流低于30分.docx",revision:"24aafe5dbd65a4e5d9f030044ae85358"},{url:"img/图片1.4c544f80.jpg",revision:null},{url:"img/校徽.a52c88a4.png",revision:null},{url:"index.html",revision:"f05912b351afe4bc023cced48cd83c8a"},{url:"js/299.2a45bd4e.js",revision:null},{url:"js/300.9e9a09aa.js",revision:null},{url:"js/407.d69cb8ea.js",revision:null},{url:"js/419.10715152.js",revision:null},{url:"js/624.613f896c.js",revision:null},{url:"js/657.de856a44.js",revision:null},{url:"js/830.fb0450f9.js",revision:null},{url:"js/app.11782efc.js",revision:null},{url:"js/chunk-vendors.83a719fa.js",revision:null},{url:"manifest.json",revision:"2594deca8f717b1d799bc8f0b5618a21"},{url:"robots.txt",revision:"735ab4f94fbcd57074377afca324c813"},{url:"unity/Build/unity.framework.js",revision:"9f14026819e4b43a0c35228ea88c0655"},{url:"unity/Build/unity.loader.js",revision:"f46d1676969f857195e01e62445c0903"},{url:"unity/TemplateData/style.css",revision:"4a292c7d8c41c853d9e9301a2d8961fe"},{url:"unity/index.html",revision:"c78315c21b085e67d5868268b3537aa0"}],{})}));
//# sourceMappingURL=service-worker.js.map
