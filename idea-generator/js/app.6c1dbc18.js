(function(e){function t(t){for(var n,i,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)i=c[u],r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/idea-generator/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=o("bb71");o("da64");n["a"].use(r["a"],{iconfont:"md"});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-toolbar",{attrs:{color:"primary",app:"",dark:"","clipped-left":""}},[o("v-toolbar-side-icon"),o("v-toolbar-title",{staticClass:"headline text-uppercase"},[o("span",[e._v("ГЕНЕРАТОР ИДЕЙ")])])],1),o("v-navigation-drawer",{attrs:{app:"",clipped:"",permanent:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[o("v-text-field",{attrs:{type:"text",label:"Добавить ещё идею",box:"","append-icon":"send"},on:{"click:append":e.addTodo},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}}),o("v-list",{attrs:{subheader:""}},[o("v-subheader",[e._v("Идеи")]),e._l(e.todos,function(t,n){return o("v-list-tile",{key:n},[o("v-list-tile-action",[o("v-checkbox",{attrs:{value:t,label:t},on:{change:e.saveInLocaleStorage},model:{value:e.todosChecked,callback:function(t){e.todosChecked=t},expression:"todosChecked"}})],1),o("v-spacer"),o("v-list-tile-action",[o("v-btn",{attrs:{icon:""},on:{click:function(t){return e.removeTodo(n)}}},[o("v-icon",[e._v("clear")])],1)],1)],1)})],2)],1),o("v-content",[o("v-list",{attrs:{subheader:""}},[o("v-subheader",[e._v("В поисках интересных комбинаций")]),e._l(e.filtredTodo,function(t,n){return o("v-list-tile",{key:n},[o("v-list-tile-content",[o("v-list-tile-title",[e._v(e._s(t))])],1)],1)}),o("v-divider")],2)],1)],1)},i=[],c=(o("2fdb"),o("6762"),o("ac6a"),{name:"App",data:function(){return{drawer:!0,newItem:"",todos:localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):["Инструменты","Фильтры","Нейросети"],todosChecked:localStorage.getItem("todosChecked")?JSON.parse(localStorage.getItem("todosChecked")):[]}},computed:{filtredTodo:function(){var e=this,t=[];return this.todosChecked.forEach(function(o){t.push(o),e.todosChecked.forEach(function(e){o!==e&&(t.includes(e+" + "+o)||t.push(o+" + "+e))})}),t}},methods:{addTodo:function(){this.todos.push(this.newItem),this.newItem="",this.saveInLocaleStorage()},removeTodo:function(e){this.todosChecked.includes(this.todos[e])&&this.todosChecked.splice(this.todosChecked.indexOf(this.todos[e]),1),this.todos.splice(e,1),this.saveInLocaleStorage()},saveInLocaleStorage:function(){localStorage.setItem("todos",JSON.stringify(this.todos)),localStorage.setItem("todosChecked",JSON.stringify(this.todosChecked))}}}),s=c,l=o("2877"),d=o("6544"),u=o.n(d),p=o("7496"),f=o("8336"),v=o("ac7c"),h=o("549c"),b=o("ce7e"),g=o("132d"),m=o("8860"),k=o("ba95"),w=o("40fe"),S=o("5d23"),y=o("f774"),T=o("9910"),x=o("e0c7"),I=o("2677"),V=o("71d9"),C=o("706c"),_=o("2a7f"),O=Object(l["a"])(s,a,i,!1,null,null,null),j=O.exports;u()(O,{VApp:p["a"],VBtn:f["a"],VCheckbox:v["a"],VContent:h["a"],VDivider:b["a"],VIcon:g["a"],VList:m["a"],VListTile:k["a"],VListTileAction:w["a"],VListTileContent:S["a"],VListTileTitle:S["b"],VNavigationDrawer:y["a"],VSpacer:T["a"],VSubheader:x["a"],VTextField:I["a"],VToolbar:V["a"],VToolbarSideIcon:C["a"],VToolbarTitle:_["a"]}),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.6c1dbc18.js.map