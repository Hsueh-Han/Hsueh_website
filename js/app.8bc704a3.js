(function(t){function e(e){for(var a,n,r=e[0],l=e[1],o=e[2],u=0,p=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var t,e=0;e<c.length;e++){for(var s=c[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(c.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},c=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var o=0;o<r.length;o++)e(r[o]);var d=l;c.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0c5e":function(t,e,s){t.exports=s.p+"media/wiad_01.f94bf6c3.mp4"},"0d42":function(t,e,s){},"16b0":function(t,e,s){},"1b53":function(t,e,s){"use strict";s("0d42")},"23eb":function(t,e,s){"use strict";s("9906")},"2ba5":function(t,e,s){},3219:function(t,e,s){"use strict";s("2ba5")},5676:function(t,e,s){"use strict";s("8a8c")},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=s("5c96"),c=s.n(i),n=(s("0fae"),s("68df"),s("bc3a")),r=s.n(n),l=s("2106"),o=s.n(l),d=s("5530"),u=s("7bb1"),p=s("5527");Object(u["c"])({classes:{valid:"",invalid:"in-valid"}}),Object(u["d"])("required",Object(d["a"])(Object(d["a"])({},p["required"]),{},{message:"{_field_} 為必填欄位"})),Object(u["d"])("email",Object(d["a"])(Object(d["a"])({},p["email"]),{},{message:"請輸入正確 e-mail 格式"})),Object(u["d"])("alpha_num",Object(d["a"])(Object(d["a"])({},p["alpha_num"]),{},{message:"{_field_} 不可包含特殊字元"})),a["default"].component("ValidationProvider",u["b"]),a["default"].component("ValidationObserver",u["a"]);var v=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"position-relative vh-100 index-bg-img-cover",class:{"index-bg-img":t.scrollTop<=t.enterScreenHeight,"index-bg-img-second":t.scrollTop>t.enterScreenHeight},staticStyle:{overflow:"hidden","overflow-y":"auto"},attrs:{id:"screen-container"},on:{scroll:t.scrollAnchor}},[s("div",{staticClass:"sidebar-wrap",class:{"sidebar-wrap-position-fixed":t.scrollTop>=t.enterScreenHeight,"sidebar-wrap-position-absolute":t.scrollTop<t.enterScreenHeight}},[s("SideBar",{attrs:{anchorData:t.scrollData,enterScreen:t.enterScreenHeight,current:t.currentSection}})],1),s("div",{staticClass:"position-absolute w-100",staticStyle:{top:"0"}},[s("div",{staticClass:" w-100 vh-100",staticStyle:{"background-color":"rgba(0, 0, 0, 0.5)"}},[s("EnterScreen",{attrs:{anchorData:t.scrollData,enterScreen:t.enterScreenHeight}})],1),s("div",{ref:"profileSection",staticClass:"bg-white",attrs:{id:"profile"}},[s("Profile",{attrs:{scrollTop:t.scrollTop,anchorData:t.scrollData,enterScreen:t.enterScreenHeight}})],1),s("div",{ref:"expSection",staticClass:"text-white",staticStyle:{background:"rgb(207, 196, 182)"}},[s("ExpSkill")],1),s("div",{ref:"projectSection",staticClass:"text-white",staticStyle:{"background-color":"rgba(0, 0, 0, 0.35)"},attrs:{id:"#project"}},[s("Projects")],1),s("div",{ref:"contactSection",staticClass:"bg-white"},[t.scrollData.length>0?s("Contact",{attrs:{scrollTop:t.scrollTop,anchorData:t.scrollData}}):t._e()],1),t._m(0)])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-white p-5 ff-mono",staticStyle:{"background-color":"#6d5b5b"}},[s("p",{staticClass:"fz-12 text-center mb-0"},[t._v(" Design & Development by Hsueh-Han Chen, 2021")])])}],h=(s("b64b"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-white px-1 shadow sidebar-content",class:{"sidebar-hide":!t.isSlide}},[s("div",{staticClass:"py-2 text-center border-bottom"},[s("p",{staticClass:"mb-0"},[t._v("MENU")]),t.isSlide?t._e():s("button",{staticClass:"list-btn",on:{click:function(e){t.isSlide=!0}}},[s("i",{staticClass:"el-icon-caret-bottom"})])]),s("div",{staticClass:"space-wrap mb-1 mt-4",class:{active:"profileSection"===t.current},on:{click:function(e){return t.toAnchor("profileSection")}}},[t._m(0)]),s("div",{staticClass:"space-wrap mb-1",class:{active:"expSection"===t.current},on:{click:function(e){return t.toAnchor("expSection")}}},[t._m(1)]),s("div",{staticClass:"space-wrap mb-1",class:{active:"projectSection"===t.current},on:{click:function(e){return t.toAnchor("projectSection")}}},[t._m(2)]),s("div",{staticClass:"space-wrap",class:{active:"contactSection"===t.current},on:{click:function(e){return t.toAnchor("contactSection")}}},[t._m(3)]),s("hr",{staticClass:"mt-4"}),t._m(4),s("div",{staticClass:"text-center mt-3"},[s("button",{staticClass:"hide-btn",on:{click:function(e){t.isSlide=!1}}},[t._m(5)])])])}),b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"space"},[s("div",{staticClass:"box"},[s("i",{staticClass:"el-icon-tickets"})]),s("div",{staticClass:"box-2 pt-3 fz-14 shadow"},[t._v("Profile")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"space"},[s("div",{staticClass:"box"},[s("i",{staticClass:"el-icon-trophy-1"})]),s("div",{staticClass:"box-2 fz-12 pt-2 shadow"},[t._v("Experiences & skills")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"space"},[s("div",{staticClass:"box"},[s("i",{staticClass:"el-icon-collection"})]),s("div",{staticClass:"box-2 pt-3 fz-14  shadow"},[t._v("Projects")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"space"},[s("div",{staticClass:"box"},[s("i",{staticClass:"el-icon-chat-line-round"})]),s("div",{staticClass:"box-2 pt-3 fz-14 shadow"},[t._v("Contact")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center mt-3"},[s("a",{staticClass:"fz-24 text-secondary d-inline-block w-50 lh-1 text-decoration-none",attrs:{href:"https://github.com/Hsueh-Han",target:"_blank"}},[s("i",{staticClass:"fab fa-github"}),s("span",{staticClass:"fz-12"},[t._v("GitHub")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("i",{staticClass:"el-icon-caret-bottom"})])}],_={props:["current","anchorData","enterScreen"],data:function(){return{isActive:"",isSlide:!0}},methods:{toAnchor:function(t){var e=this;this.anchorData.forEach((function(s){if(s.section===t){var a=document.querySelector("#screen-container");a.scrollTo({behavior:"smooth",top:s.offsetAnchor+e.enterScreen})}}))}}},C=_,x=(s("a736"),s("2877")),g=Object(x["a"])(C,h,b,!1,null,null,null),w=g.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid h-100 position-relative"},[s("div",{staticClass:"row enter-font-family h-100 justify-content-center align-items-center"},[s("div",{staticClass:"col-10 col-lg-8 col-xxl-6 col-xxxl-5 p-4 text-center"},[s("transition",{attrs:{name:"opacity-1"}},[s("h1",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"enter-title"},[t._v("HSUEH")])]),s("transition",{attrs:{name:"opacity-2"}},[s("h2",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"enter-title mb-5"},[t._v("Learning is an endless journey.")])]),s("div",{staticClass:"w-75 mx-auto mb-2"},[s("transition",{attrs:{name:"fade-1"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"border-bottom border-white mx-auto"})])],1),s("transition",{attrs:{name:"opacity-3"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"py-5"},[s("button",{staticClass:"quick-view-btn",on:{click:function(e){return t.toProject("projectSection")}}},[t._v("Quick view of my projects ")])])])],1)]),s("a",{ref:"arrowBtn",staticClass:"arrow-btn radius-50 text-center d-block",attrs:{href:"#profile"},on:{click:function(e){return e.preventDefault(),t.toProfile(e)}}},[t._m(0)])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"d-inline-block"},[s("i",{staticClass:"fas fa-chevron-down"})])}],j={props:["anchorData","enterScreen"],data:function(){return{isShow:!1}},mounted:function(){var t=this;setTimeout((function(){t.isShow=!0}),500)},methods:{toProfile:function(){var t=document.querySelector("#screen-container");window.scrollTo&&t.scrollTo({behavior:"smooth",top:document.querySelector(this.$refs.arrowBtn.hash).offsetTop})},toProject:function(t){var e=this;this.anchorData.forEach((function(s){if(s.section===t){var a=document.querySelector("#screen-container");a.scrollTo({behavior:"smooth",top:s.offsetAnchor+e.enterScreen})}}))}}},k=j,D=Object(x["a"])(k,S,y,!1,null,null,null),E=D.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid",staticStyle:{padding:"80px 0px"}},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-10 col-md-4 col-xxxl-3 mb-3 mb-md-0 d-flex align-items-center"},[s("div",{staticClass:"profile-bg w-100 radius-4",class:{"opacity-animation-left":t.scrollTop>0}})]),s("div",{staticClass:"profile-content\n    col-12 col-md-6 col-xxxl-4 p-5 d-flex flex-column justify-content-center",class:{"opacity-animation-right":t.scrollTop>0}},[t._m(0),s("el-divider"),s("div",{staticClass:"fz-14"},[s("p",[t._v("Hsueh-Han, Chen ——")]),t._m(1),t._m(2),s("p",{staticClass:"font-italic mt-5"},[t._v("“ 脫口而出的熱情向來都不太真實，唯有拿出相對的實力才是 ”")]),s("p",{staticClass:"font-italic indent-16 text-right"},[t._v("—— Hsueh-Han, Dec 2021")]),s("el-divider"),s("p",[t._v(" 若您也正在尋找優秀事業同仁, 我將隨時等候您的聯繫！ ")]),s("div",{staticClass:"text-right"},[s("button",{staticClass:"quick-contact-btn",on:{click:function(e){return t.toContact("contactSection")}}},[t._v(" Quick contact "),t._m(3)])])],1)],1)])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"profile-title"},[t._v(" My passion and focus is "),s("br"),t._v("front-end web development. ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" 我是一位極富熱忱與時刻保持專注的前端開發者,"),s("br"),t._v(" 重視技術成長更是大於其它事物,"),s("br"),t._v(" 邏輯思考、理性思維、重視紀律、優雅開發, 是我在工作中的核心理念,"),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" 我重視具有計畫性的去執行每一項任務與挑戰,"),s("br"),t._v(" 並且認為嘗試困難的項目才是讓自身獲得巨幅成長的唯一關鍵. ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"profile-arrow-icon"},[s("i",{staticClass:"el-icon-right"})])}],$={props:["anchorData","enterScreen","scrollTop"],data:function(){return{day:null,isShow:!0}},mounted:function(){var t=Date.parse("2020-01-13"),e=Date.now();this.day=Math.floor((e-t)/24/3600/1e3)},methods:{toContact:function(t){var e=this;this.anchorData.forEach((function(s){if(s.section===t){var a=document.querySelector("#screen-container");a.scrollTo({behavior:"smooth",top:s.offsetAnchor+e.enterScreen})}}))}}},A=$,P=(s("b3d7"),Object(x["a"])(A,T,O,!1,null,null,null)),V=P.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center py-5"},[s("div",{staticClass:"col-12 col-md-8 col-lg-9 col-xxxl-7"},[s("h2",{staticClass:"exp-title"},[t._v("Experiences")]),s("el-timeline",[s("el-timeline-item",{attrs:{timestamp:"Jan 2020",placement:"top"}},[s("el-card",[s("h3",[t._v("Start the front-end learning journey —— Hex School 六角學院 "),s("a",{attrs:{href:"https://www.hexschool.com/",target:"_blank"}},[s("i",{staticClass:"el-icon-location-outline"})])]),s("p",{staticClass:"mb-0"},[t._v("初入前端開發領域, 我選擇彈性及時間靈活度較高的線上課程作為起步,")]),s("p",{staticClass:"mb-0"},[t._v("持續保持每週投入平均有 20 小時以上的學習強度,")]),s("p",{staticClass:"mb-0"},[t._v("期間完成所有基礎前端開發課程及實作並取得相關結業證書。")])])],1),s("el-timeline-item",{attrs:{timestamp:"Jan 2021",placement:"top"}},[s("el-card",[s("h3",[t._v("Taiwan Data Science Co. —— Front-end Developer "),s("a",{attrs:{href:"https://www.tdsc.com.tw/",target:"_blank"}},[s("i",{staticClass:"el-icon-location-outline"})])]),s("p",{staticClass:"mb-0"},[t._v("這是一間整合資料、人流、大數據等資訊的新創科技公司, 在此獲得前端開發正式工作,")]),s("p",[t._v("期間負責多人協作、更新維護 1~2 個現有專案，並在以下二個專案中擔任主力前端開發職務,")]),s("p",{staticClass:"mb-0"},[t._v("首個負責專案為 "),s("a",{attrs:{href:"#/wiside",target:"_blank"}},[t._v("Wiside 資料數據平台")]),t._v(" ，其包含圖表呈現、動態移動軌跡等項目, 同時也參與邏輯及視覺呈現構思,")]),s("p",{staticClass:"mb-0"},[t._v("技術主力在於 chart.js、D3.js、多國語系、驗證機制等技術, 完善多元資料的狀態管理與設計實現化,")]),s("p",[t._v("然而，此專案產品也於 2021年 8月份順利上線服務。")]),s("p",{staticClass:"mb-0"},[t._v("第二個負責專案為 以藍芽 Beacon 偵測訊號 為核心的 "),s("a",{attrs:{href:"#/wiad",target:"_blank"}},[t._v("WiAD 廣告投放平台")]),t._v(" ,")]),s("p",{staticClass:"mb-0"},[t._v("其功能包含：完整的用戶權限架構、上下架廣告素材/排程、複雜表單、資料匯入/匯出、20個頁面以上 CRUD 操作等,")]),s("p",[t._v("然而，此專案產品也順利於 2021年末達成第一版完工之進度。")])])],1),s("el-timeline-item",{attrs:{timestamp:"Mar 2022",placement:"top"}},[s("el-card",[s("h3",[t._v("KKday 酷遊天股份有限公司 —— Front-end Developer "),s("a",{attrs:{href:"https://www.kkday.com/static/zh-tw/about/about.html",target:"_blank"}},[s("i",{staticClass:"el-icon-location-outline"})])]),s("p",[t._v("KKday 研發部門 : 新事業開發組 - 前端工程師,")]),s("p",{staticClass:"mb-0"},[t._v("主要負責為公司新開發的業務項目撰寫前台服務頁面, 約莫參與 9 個服務頁面的開發/維運,")]),s("p",[t._v("如: 全球租車、歐洲鐵路、台灣高鐵、中港通巴士、韓國機票等交通票券及租車訂購服務。")]),s("p",{staticClass:"mb-0"},[t._v("針對現有的已上線服務進行邏輯重構、目錄遷移、持續優化專案內容( 如: 模組化、命名語意、函式通用性優化等 )")]),s("p",[t._v("獨立負責使用 vue 3 開發交通服務行銷後台上架頁面、撰寫相關文件提供給團隊成員日後接手維運可作為參閱所使用, ")]),s("p",{staticClass:"mb-0"},[t._v("常態為進行多人協作開發, 與團隊成員間保持開發進度的同步及溝通方面的暢通")]),s("p",{staticClass:"mb-0"},[t._v("注重專案程式碼內容具高度的可維護性、擴充性、以及邏輯運行的穩定性,")]),s("p",[t._v("同時也提出並落實撰寫團隊開發項目之對應 jest unit testing、測試覆蓋率目標與技術說明文件。")])])],1),s("el-timeline-item",{attrs:{timestamp:"Feb 2023",placement:"top"}},[s("el-card",[s("h3",[t._v("統智科技股份有限公司 —— Front-end Developer "),s("a",{attrs:{href:"https://www.ptc-nec.com.tw/",target:"_blank"}},[s("i",{staticClass:"el-icon-location-outline"})])]),s("p",[t._v("物流解決方案課 - 前端工程師,")]),s("p",{staticClass:"mb-0"},[t._v("負責單位新業務與既有業務專案之前端開發任務,")]),s("p",{staticClass:"mb-0"},[t._v("主要負責專案項目包含: 物流智能路徑規劃系統、企業資產維修管理系統、統一超商區顧問訪店數位化等專案,")]),s("p",[t._v("另外需負責參與前端架構規劃、提供設計建議、工時評估與控管、開發、維護、測試與部署等工作項目。")]),s("p",{staticClass:"mb-0"},[t._v("協助單位將專案導入 CI/CD、自動化測試、源碼掃描等技術架構, 並提供實作成果報告與流程文件來協助其他專案同仁共同執行,")]),s("p",{staticClass:"mb-0"},[t._v("參與其他技術類型專案之支援工作, 如:.NET Core Web API Server、Cordova APP 等技術語言專案、")]),s("p",[t._v("兼任「企業資產維修管理系統」PM、協助與指導其他 MVC 專案同仁的前端維護技術課題。")]),s("p",{staticClass:"mb-0"},[t._v("目前已高度並全面使用 Vue 3 Composition API 與 TypeScript 進行日常開發,")]),s("p",{staticClass:"mb-0"},[t._v("可獨立撰寫高度客製化與規格嚴謹的自定義共通、業務元件,")]),s("p",{staticClass:"mb-0"},[t._v("並具備大量數據效能處理能力、擴展性、可讀性、可維護性等設計考量,")]),s("p",[t._v("設計及撰寫具有企業需求規格的前端系統操作架構。")])])],1),s("el-timeline-item",{staticClass:"now-point",attrs:{timestamp:"Now",placement:"top",color:"rgb(62, 115, 194)"}})],1),s("p",{staticClass:"text-center fz-14 mt-3 font-italic"},[t._v(' "I am not worried about the future, just because I am more focused on now." ')])],1)]),s("div",{staticClass:"row justify-content-center bg-white py-5"},[s("div",{staticClass:"col-12 col-md-8 col-lg-9 col-xxxl-7 text-dark"},[s("h2",{staticClass:"skill-title mb-4 d-flex justify-content-start align-items-center"},[s("span",{staticClass:"mr-2"},[t._v("Skills")]),s("el-popover",{staticClass:"fz-16 cursor-pointer",attrs:{width:"300",trigger:"hover",content:"綜合條件：使用頻率、掌握度、深入程度"}},[s("span",{attrs:{slot:"reference"},slot:"reference"},[s("i",{staticClass:"el-icon-warning-outline"})])])],1),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-6"},[s("Skills")],1),s("div",{staticClass:"col-12 col-lg-6"},[s("Tools")],1)])])])])},z=[],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.skillData,(function(e,a){return s("el-card",{key:a,staticClass:"mb-3",attrs:{shadow:"always","body-style":{padding:"10px"}}},[s("div",{staticClass:"d-flex justify-content-between align-items-end px-3"},[s("h4",{staticClass:"mb-0"},[t._v(t._s(e.skill))]),s("el-rate",{staticStyle:{width:"150px"},attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.score,callback:function(s){t.$set(e,"score",s)},expression:"item.score"}})],1),e.describe.length>0?s("el-divider",{staticClass:"my-2"}):t._e(),e.describe.length>0?s("div",{staticClass:"pl-2 fz-14"},t._l(e.describe,(function(e,a){return s("p",{key:a,staticClass:"mb-1"},[t._v(" "+t._s(e)+" ")])})),0):t._e()],1)})),1)},q=[],N={data:function(){return{skillData:[{skill:"Vue",score:4.5,describe:["Vuex、Router、Composition API、Vue-transition"]},{skill:"JavaScript",score:4.5,describe:["Events、Prototype、AJAX、ES6、Async/Await、Axios interceptors"]},{skill:"TypeScript",score:4.5,describe:["Generics、Intersection、Type Assertion"]},{skill:"Jest",score:4.5,describe:["Vue utils test、JavaScript unit testing"]},{skill:"CSS 3 / SASS / SCSS",score:4.5,describe:["BEM、RWD、Animation。"]},{skill:"Nuxt.js",score:4,describe:[]},{skill:".NET Core",score:3,describe:[]},{skill:"jQuery",score:3,describe:[]},{skill:"Node.js",score:2.5,describe:[]}]}}},M=N,W=Object(x["a"])(M,I,q,!1,null,null,null),J=W.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.skillData,(function(e,a){return s("el-card",{key:a,staticClass:"mb-3",attrs:{shadow:"always","body-style":{padding:"10px"}}},[s("div",{staticClass:"d-flex justify-content-between align-items-end px-3"},[s("h4",{staticClass:"mb-0"},[t._v(t._s(e.skill))]),s("el-rate",{staticStyle:{width:"150px"},attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}"},model:{value:e.score,callback:function(s){t.$set(e,"score",s)},expression:"item.score"}})],1),e.describe.length>0?s("el-divider",{staticClass:"my-2"}):t._e(),e.describe.length>0?s("div",{staticClass:"pl-2 fz-14"},t._l(e.describe,(function(e,a){return s("p",{key:a,staticClass:"mb-1"},[t._v(" "+t._s(e)+" ")])})),0):t._e()],1)})),1)},U=[],B={data:function(){return{skillData:[{skill:"Tailwind",score:5,describe:[]},{skill:"Element UI",score:5,describe:[]},{skill:"Chart.js",score:5,describe:[]},{skill:"Vue-i18n",score:4.5,describe:[]},{skill:"Vee-validate",score:4.5,describe:[]},{skill:"D3.js",score:4,describe:[]},{skill:"SQL Database",score:4,describe:[]},{skill:"Azure DevOps",score:4,describe:[]}]}}},F=B,K=Object(x["a"])(F,L,U,!1,null,null,null),Q=K.exports,R={components:{Skills:J,Tools:Q}},G=R,X=(s("1b53"),Object(x["a"])(G,H,z,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid py-5"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-11"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-10 col-lg-6 text-center"},[s("h2",{staticClass:"projects-title mb-0"},[t._v("Projects")]),s("p",{staticClass:"mb-0 font-italic"},[t._v('"It is often said that time changes things,')]),s("p",{staticClass:"mb-0 font-italic"},[t._v('but you actually have to change them on your own."')]),s("el-divider")],1)]),s("div",{staticClass:"row pt-5 justify-content-around"},[s("div",{staticClass:"col-8 col-lg-3 mb-5 projects-card project-card-img-1 border border-white"},[s("div",{staticClass:"projects-hover-bg p-3 projects-hover-bg-img-1"},[s("a",{staticClass:"projects-content text-dark h-100",attrs:{href:"#/wiad",target:"_blank"}},[s("div",{staticClass:"h-100 d-flex flex-column p-3 justify-content-center align-items-center"},[t._m(0),s("h2",{staticClass:"text-center mb-0 project-content-title"},[t._v("WiAD 廣告投放平台")]),s("el-divider",[s("i",{staticClass:"el-icon-link"})]),t._m(1),s("p",{staticClass:"fz-14"},[t._v("Vue、Vuex、Element UI、Vee-validate、Chart.js")])],1)])])]),s("div",{staticClass:"col-8 col-lg-3 mt-lg-5 mb-5 projects-card project-card-img-2\n        border border-white"},[s("div",{staticClass:"projects-hover-bg p-3 projects-hover-bg-img-2"},[s("a",{staticClass:"projects-content text-dark h-100",attrs:{href:"#/wiside",target:"_blank"}},[s("div",{staticClass:"h-100 d-flex flex-column p-3 justify-content-center align-items-center"},[t._m(2),t._m(3),s("el-divider",[s("i",{staticClass:"el-icon-link"})]),t._m(4),s("p",{staticClass:"fz-14"},[t._v("Vue、Vuex、Chart.js、D3.js、Element UI")])],1)])])]),s("div",{staticClass:"col-8 col-lg-3 mb-5 projects-card project-card-img-3 border border-white"},[s("div",{staticClass:"projects-hover-bg p-3 projects-hover-bg-img-3"},[s("a",{staticClass:"projects-content text-dark h-100",attrs:{href:"https://hsueh-han.github.io/HanShop/",target:"_blank"}},[s("div",{staticClass:"h-100 d-flex flex-column p-3 justify-content-center align-items-center"},[s("h2",{staticClass:"text-center mb-0 project-content-title"},[t._v("Sunset Accessory Shop")]),s("el-divider",[s("i",{staticClass:"el-icon-link"})]),t._m(5),s("p",{staticClass:"fz-14"},[t._v("Vue、Vuex、Bootstrap")])],1)])])])]),s("el-divider",{staticClass:"w-50 mx-auto"})],1)])])},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-warning mb-0"},[s("i",{staticClass:"fas fa-star"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"fz-14"},[t._v("WiAD 廣告投放平台"),s("br"),t._v("正式產品規格的使用者廣告投放後台")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-warning mb-0"},[s("i",{staticClass:"fas fa-star"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-center mb-0 project-content-title"},[t._v(" Wiside 數據平台"),s("br"),s("small",[t._v("上線中產品")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"fz-14"},[t._v(" Wireless Signal Detection"),s("br"),t._v("整合多樣圖表最佳化呈現資料數據 ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"fz-14"},[t._v("電商範例作品網站 Demo"),s("br"),t._v("包含前、後台 API 完整功能實作")])}],et={},st=et,at=(s("23eb"),Object(x["a"])(st,Z,tt,!1,null,null,null)),it=at.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid py-5"},[s("div",{staticClass:"row justify-content-center py-4"},[s("div",{staticClass:"col-12 col-md-8 col-lg-9 col-xxxl-9"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-xl-7 col-xxxl-6 mb-5 mb-xl-0"},[s("div",{staticClass:"contact-input-group p-3 shadow position-relative mail-animation",class:{"opacity-animation-top":t.scrollTop>=t.anchorData[3].offsetAnchor||t.isOpened}},[t.mailLoading?s("div",{staticClass:"mail-loading d-flex align-items-center justify-content-center"},[t.successText?t._e():s("h4",{staticClass:"text-white text-center"},[s("i",{staticClass:"el-icon-loading"}),s("span",{staticClass:"ml-2"},[t._v("正在為您寄出信件 ⋯⋯")])]),t.successText?s("h4",{staticClass:"text-white text-center"},[t._m(0),s("span",{staticClass:"ml-2"},[t._v("信件成功寄出！將會儘速給予您回覆！")])]):t._e()]):t._e(),s("h2",{staticClass:"contact-title text-white"},[t._v("Contact")]),s("el-divider",{staticClass:"contact-el-divider"}),s("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.handleSubmit;return[s("ValidationProvider",{attrs:{rules:"required|alpha_num",mode:"passive",name:"名稱"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[s("el-input",{staticClass:"mb-3 w-50",class:i,attrs:{clearable:"",placeholder:"公司名稱或您的大名"},model:{value:t.mailData.name,callback:function(e){t.$set(t.mailData,"name",e)},expression:"mailData.name"}}),a[0]?s("span",{staticClass:"text-danger fz-14 ml-2"},[s("i",{staticClass:"el-icon-warning-outline mr-1"}),t._v(t._s(a[0])+" ")]):t._e()]}}],null,!0)}),s("ValidationProvider",{attrs:{rules:"required|email",mode:"passive",name:"E-mail"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[s("el-input",{class:i,attrs:{clearable:"",placeholder:"E-mail 信箱"},model:{value:t.mailData.email,callback:function(e){t.$set(t.mailData,"email",e)},expression:"mailData.email"}}),s("div",{staticStyle:{height:"20px"}},[a[0]?s("span",{staticClass:"text-danger fz-14"},[s("i",{staticClass:"el-icon-warning-outline mr-1"}),t._v(t._s(a[0])+" ")]):t._e()])]}}],null,!0)}),s("el-divider",{staticClass:"contact-el-divider"}),s("ValidationProvider",{attrs:{rules:"required",mode:"passive",name:"信件主旨"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[s("el-input",{class:i,attrs:{clearable:"",placeholder:"主旨"},model:{value:t.mailData.title,callback:function(e){t.$set(t.mailData,"title",e)},expression:"mailData.title"}}),s("div",{staticClass:"mb-2",staticStyle:{height:"20px"}},[a[0]?s("span",{staticClass:"text-danger fz-14"},[s("i",{staticClass:"el-icon-warning-outline mr-1"}),t._v(t._s(a[0])+" ")]):t._e()])]}}],null,!0)}),s("ValidationProvider",{attrs:{rules:"required",mode:"passive",name:"信件內容"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors,i=e.classes;return[s("el-input",{class:i,attrs:{type:"textarea",resize:"none",placeholder:"您的寶貴訊息",rows:"8"},model:{value:t.mailData.text,callback:function(e){t.$set(t.mailData,"text",e)},expression:"mailData.text"}}),s("div",{staticStyle:{height:"20px"}},[a[0]?s("span",{staticClass:"text-danger fz-14"},[s("i",{staticClass:"el-icon-warning-outline mr-1"}),t._v(t._s(a[0])+" ")]):t._e()])]}}],null,!0)}),s("el-button",{staticClass:"ml-auto d-block contact-btn",attrs:{plain:""},on:{click:function(e){return a(t.mailSubmit)}}},[t._v(" 送出信件 ")])]}}])})],1)]),s("div",{staticClass:"col-12 col-xl-4"},[s("div",{staticClass:"shadow p-3 other-contact-bg other-contact-animation",class:{"opacity-animation-right":t.scrollTop>=t.anchorData[3].offsetAnchor||t.isOpened}},[s("div",{staticClass:"p-4",staticStyle:{background:"rgba(255, 255, 255, 0.5)"}},[s("h2",{staticClass:"mb-0 contact-title"},[t._v("Other contact information.")]),s("el-divider"),s("p",[t._v("Location: Taiwan, Taipei City.")]),s("p",[t._v("E-mail: cookie5year@gmail.com")]),s("p",[t._v("Line-id: aviku")]),s("el-divider")],1)])])])])])])},nt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"text-warning"},[s("i",{staticClass:"el-icon-circle-check"})])}],rt={props:["anchorData","scrollTop"],data:function(){return{mailLoading:!1,successText:!1,isOpened:!1,mailData:{}}},watch:{scrollTop:function(){this.scrollTop>=this.anchorData[3].offsetAnchor?this.isOpened=!0:0===this.scrollTop&&(this.isOpened=!1)}},methods:{mailSubmit:function(){var t=this;this.mailLoading=!0;var e=Object(d["a"])({},this.mailData);this.axios.post("https://fast-basin-06150.herokuapp.com/contact",e).then((function(e){200===e.status&&(t.successText=!0,setTimeout((function(){t.mailLoading=!1,t.successText=!1,t.mailData={}}),2e4))}))}}},lt=rt,ot=(s("7a5a"),Object(x["a"])(lt,ct,nt,!1,null,null,null)),dt=ot.exports,ut={components:{EnterScreen:E,SideBar:w,Profile:V,ExpSkill:Y,Projects:it,Contact:dt},data:function(){return{enterScreenHeight:null,scrollHeight:null,scrollTop:0,scrollData:[],currentSection:"profileSection"}},mounted:function(){var t=this;this.enterScreenHeight=document.querySelector("#screen-container").offsetHeight,this.scrollHeight=document.querySelector("#screen-container").scrollHeight;var e=Object.keys(this.$refs);e.forEach((function(e,s){var a={section:e,index:s,offsetAnchor:t.$refs[e].offsetTop-t.enterScreenHeight};t.scrollData.push(a)}))},methods:{scrollAnchor:function(t){var e=this;this.scrollTop=t.target.scrollTop,0===t.target.scrollTop?this.currentSection="profileSection":t.target.scrollTop>0&&this.enterScreenHeight+this.scrollTop===this.scrollHeight?this.currentSection="contactSection":t.target.scrollTop>0&&this.enterScreenHeight+this.scrollTop!==this.scrollHeight&&this.scrollData.forEach((function(s){t.target.scrollTop-e.enterScreenHeight>=s.offsetAnchor&&(e.currentSection=s.section)}))}}},pt=ut,vt=(s("ecf5"),Object(x["a"])(pt,m,f,!1,null,null,null)),mt=vt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-bg"},[a("div",{staticClass:"bg-mask"},[a("div",{staticClass:"container py-5"},[a("div",{staticClass:"text-center"},[t._m(0),a("el-divider"),t._m(1),a("el-divider"),a("img",{staticClass:"w-100",attrs:{src:s("a5cb")}}),a("img",{staticClass:"w-100",attrs:{src:s("b755")}}),a("el-divider"),a("p",[t._v("軌跡效果：基本型")]),a("div",{staticClass:"px-0 px-md-5"},[a("video",{staticClass:"w-100",attrs:{controls:"controls",muted:"",name:"Video Name",src:s("f742")},domProps:{muted:!0}})]),a("el-divider"),a("p",[t._v("效能優化：debounce 防抖機制")]),a("div",{staticClass:"px-0 px-md-5"},[a("video",{staticClass:"w-100",attrs:{controls:"controls",muted:"",name:"Video Name",src:s("e91e")},domProps:{muted:!0}})]),a("el-divider"),a("p",[t._v("動畫循環技術：單一循環及全項目循環之自由切換功能")]),a("div",{staticClass:"px-0 px-md-5"},[a("video",{staticClass:"w-100",attrs:{controls:"controls",muted:"",name:"Video Name",src:s("bdfc")},domProps:{muted:!0}})]),a("el-divider")],1)])])])},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"mb-0"},[t._v("ＷISIDE 訊號雲數據平台 "),s("small",[t._v("( 產品現已正式上線 )")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-5"},[s("p",[t._v("Vue、Vuex、Element UI、Vee-validate、Chart.js、D3.js")]),s("p",[t._v("本人擔任主要開發：負責專案項目約佔 95%")]),s("p",{staticClass:"mb-0"},[t._v("本平台專案分為三大功能：即時資料呈現、歷史資料查詢、人流動態軌跡")]),s("p",{staticClass:"mb-0"},[t._v("其中運用了眾多類型的圖表 ( Chart.js、D3.js )，因應不同資料維度的呈現")]),s("p",[t._v("針對頁面區塊中各自不同的資料處理邏輯，充分落實組件開發的元件規劃及切分")]),s("p",{staticClass:"mb-0"},[t._v("在動態軌跡功能中，更是將 window.resize 事件加入 debounce 防抖機制來優化效能")]),s("p",{staticClass:"mb-0"},[t._v("進而讓 D3.js 所繪製的動態效果可在使用者任何操作情況中仍保持最佳化呈現（可見下方展示影片）")])])}],bt={},_t=bt,Ct=(s("3219"),Object(x["a"])(_t,ft,ht,!1,null,"3c02d5e0",null)),xt=Ct.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-bg"},[a("div",{staticClass:"bg-mask"},[a("div",{staticClass:"container py-5"},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"mb-0"},[t._v("WIAD 廣告投放平台")]),a("el-divider"),t._m(0),a("el-divider"),a("img",{staticClass:"w-100",attrs:{src:s("f83b")}}),a("el-divider"),a("p",[t._v("即時預覽素材：高度且清晰切分各元件工作，忠實呈現透過資料來驅動畫面")]),a("div",{staticClass:"px-0 px-md-5"},[a("video",{staticClass:"w-100",attrs:{controls:"controls",muted:"",name:"Video Name",src:s("6305")},domProps:{muted:!0}})]),a("el-divider"),a("p",[t._v("全局組件的編輯狀態管理：判斷當下是否為「編輯狀態」並判斷是否需要給予阻擋提示")]),a("div",{staticClass:"px-0 px-md-5"},[a("video",{staticClass:"w-100",attrs:{controls:"controls",muted:"",name:"Video Name",src:s("0c5e")},domProps:{muted:!0}})]),a("el-divider")],1)])])])},wt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"px-5"},[s("p",[t._v("Vue、Vuex、Element UI、Vee-validate、Chart.js")]),s("p",[t._v("本人擔任主要開發：負責專案項目約佔 85%")]),s("p",{staticClass:"mb-0"},[t._v("本平台專案主要功能：廣告素材上架/下架、會員 CRM 系統、門店與裝置綁定系統、會員標籤系統、 公司成員權限管理、數據分析圖表等")]),s("p",{staticClass:"mb-0"},[t._v("其中運用大量的資料狀態管理、模組化、單/雙向數據流使用技巧，並且也透過 Vue Directive 自定義指令來妥善管理帳戶權限架構。")])])}],St={},yt=St,jt=(s("5676"),Object(x["a"])(yt,gt,wt,!1,null,"4cc613cd",null)),kt=jt.exports;a["default"].use(v["a"]);var Dt=new v["a"]({routes:[{path:"*",redirect:"/"},{name:"index",path:"/",component:mt},{name:"wiside",path:"/wiside",component:xt},{name:"wiad",path:"/wiad",component:kt}]}),Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},Tt=[],Ot={name:"App"},$t=Ot,At=Object(x["a"])($t,Et,Tt,!1,null,null,null),Pt=At.exports;a["default"].use(o.a,r.a),a["default"].use(c.a),a["default"].config.productionTip=!1,new a["default"]({router:Dt,render:function(t){return t(Pt)}}).$mount("#app")},6305:function(t,e,s){t.exports=s.p+"media/wiad_02.e6c461bf.mp4"},"68df":function(t,e,s){},"7a5a":function(t,e,s){"use strict";s("ebf5")},"8a8c":function(t,e,s){},9906:function(t,e,s){},a0a6:function(t,e,s){},a5cb:function(t,e,s){t.exports=s.p+"img/immediate.324d7418.png"},a736:function(t,e,s){"use strict";s("a0a6")},abbd:function(t,e,s){},b3d7:function(t,e,s){"use strict";s("16b0")},b755:function(t,e,s){t.exports=s.p+"img/history.cdfa49e8.png"},bdfc:function(t,e,s){t.exports=s.p+"media/wiside_loop.758c6a47.mp4"},e91e:function(t,e,s){t.exports=s.p+"media/wiside_debounce.ae5c97ed.mp4"},ebf5:function(t,e,s){},ecf5:function(t,e,s){"use strict";s("abbd")},f742:function(t,e,s){t.exports=s.p+"media/wiside_01.363e0668.mp4"},f83b:function(t,e,s){t.exports=s.p+"img/wiad_01.05b2c51a.png"}});
//# sourceMappingURL=app.8bc704a3.js.map