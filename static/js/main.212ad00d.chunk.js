(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],Array(43).concat([function(e,t,n){},,,function(e,t,n){},,function(e,t,n){var r={"./bug.svg":49,"./dark.svg":50,"./dragon.svg":51,"./electric.svg":52,"./fairy.svg":53,"./fighting.svg":54,"./fire.svg":55,"./flying.svg":56,"./ghost.svg":57,"./grass.svg":58,"./ground.svg":59,"./ice.svg":60,"./normal.svg":61,"./poison.svg":62,"./psychic.svg":63,"./rock.svg":64,"./steel.svg":65,"./water.svg":66};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id=48},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/bug.204df919.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/dark.27fdc7ed.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/dragon.9d32757b.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/electric.bc35c5a3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fairy.767c2f56.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fighting.f20d1bd2.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/fire.e0bd7fca.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/flying.d1778503.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ghost.ddf26831.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/grass.e09623e3.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ground.e567f4fc.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/ice.cd2f9043.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/normal.2ba66dd5.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/poison.43956925.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/psychic.67439878.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rock.61a8428d.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/steel.cb91a92a.svg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/water.b6d13329.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),a=n(22),c=n.n(a),o=n(10),s=n(19),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))},l=n(14),d=n(15),f=n(6),p=n.n(f),m=n(16),v="https://pokeapi.co/api/v2",j={headers:{"Content-Type":"application/json",Accept:"application/json"}},b=function(e){return e.includes(v)?e:"".concat(v).concat(e)},h=function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,i,a,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b(t),i=Object(d.a)(Object(d.a)({},j),n),a=null,e.prev=3,e.next=6,fetch(r,i);case 6:return c=e.sent,e.next=9,c.json();case 9:return o=e.sent,a={data:o,error:null,responseDate:Date.now()},e.abrupt("return",a);case 14:return e.prev=14,e.t0=e.catch(3),console.log("fetched failed with",e.t0.message),a={data:null,error:e.t0,responseDate:Date.now()},e.abrupt("return",a);case 19:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t,n){return e.apply(this,arguments)}}(),g=Object(l.b)("pokemon/fetchPokemonByName",function(){var e=Object(m.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("/pokemon/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),O=function(e){var t=Object(d.a)(Object(d.a)({},{limit:8,page:0}),e),n=["offset=".concat((t.page-1)*t.limit),"limit=".concat(t.limit)];return"/pokemon?".concat(n.join("&"))},x=Object(l.b)("pokemon/fetchPokemons",function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,i,a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,i=O(t),e.next=4,h(i);case 4:return(a=e.sent).error||r(w(null===(c=a.data)||void 0===c?void 0:c.results)),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),k=function(e,t){var n=e.pokemons;return t.reduce((function(e,t){return n.entities[t.name]||e.push(t.url),e}),[])},w=Object(l.b)("pokemon/fetchPokemonsInfo",function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,i=k(r(),t),e.abrupt("return",Promise.all(i.map((function(e){return h(e)}))).then((function(e){return{data:e,error:null,responseDate:Date.now()}})));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(l.c)({name:"pokemons",initialState:{list:[],listFetching:!1,nextUrl:"",previousUrl:"",entities:{},entitiesFetching:!1,error:null,responseDate:0},reducers:{resetPokemonsInfo:function(e){e.entities={}}},extraReducers:function(e){e.addCase(g.fulfilled,(function(e,t){var n=t.payload,r=n.data,i=n.error;i?e.error=i:e.entities[r.name]=r})),e.addCase(x.pending,(function(e){e.listFetching=!0})),e.addCase(x.fulfilled,(function(e,t){var n=t.payload,r=n.data,i=n.error;if(i)return e.listFetching=!1,void(e.error=i);e.list=r.results,e.listFetching=!1,e.nextUrl=r.next,e.previousUrl=r.previous})),e.addCase(w.pending,(function(e){e.entitiesFetching=!0})),e.addCase(w.fulfilled,(function(e,t){var n=t.payload,r=n.data,i=n.error,a=n.responseDate;if(i)return e.entitiesFetching=!1,void(e.error=i);e.entitiesFetching=!1,e.responseDate=a,r.forEach((function(t){var n=t.data;return e.entities[n.name]=n}))}))}}),y=function(e){var t=e.pokemons,n=t.list,r=t.entities;return t.entitiesFetching?[]:n.map((function(e){var t=e.name;return r[t]}))},F=function(e,t){return e.pokemons.entities[t]},C=function(e){return e.pokemons.listFetching||e.pokemons.entitiesFetching},D=function(e){return{previousUrl:e.pokemons.previousUrl,nextUrl:e.pokemons.nextUrl}},P=N.actions.resetPokemonsInfo,U=N.reducer,I=function(e,t){if(e){var n=[];!function e(r){r&&r.species&&(r.species&&(n.push(r.species.name),e(r.evolves_to.find((function(e){var n=e.species;return(null===n||void 0===n?void 0:n.name)===t}))||r.evolves_to[0])))}(e.chain);var r=n.findIndex((function(e){return e===t}));return{previousForm:n[r-1],nextForm:n[r+1]}}},_=function(e,t){return e.entities[t]},S=Object(l.b)("evolution/fetchPokemonSpecies",function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,i,a,c,o,s,u,l,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n.dispatch,i=n.getState,a=i(),c=a.pokemons.entities[t]){e.next=5;break}return e.abrupt("return",{data:null,error:"No data available",responseDate:Date.now()});case 5:return o=c.species.url,e.next=8,h(o);case 8:return(s=e.sent).error||(d=null===(u=s.data)||void 0===u||null===(l=u.evolution_chain)||void 0===l?void 0:l.url,r(A({url:d,name:c.name}))),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),E=function(e,t){return e.filter((function(e){return e})).reduce((function(e,n){return F(t,n)||e.push(n),e}),[])},A=Object(l.b)("evolution/fetchPokemonEvolutionChain",function(){var e=Object(m.a)(p.a.mark((function e(t,n){var r,i,a,c,o,s,u,l,d,f,m;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.url,i=t.name,a=n.getState,c=n.dispatch,e.next=4,h(r);case 4:if((o=e.sent).error){e.next=12;break}return s=a(),u=_(s.evolution,i),l=I(o.data,u.evolution.curentForm),d=l.previousForm,f=l.nextForm,m=E([d,f],s),e.next=12,Promise.all(m.map((function(e){return c(g(e))})));case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),K=Object(l.c)({name:"pokemons",initialState:{entities:{}},reducers:{},extraReducers:function(e){e.addCase(S.pending,(function(e,t){var n=t.meta.arg,r=_(e,n);r?r.fetching=!0:e.entities[n]=function(e){return Object(d.a)({fetching:!1,error:null,state:"idle",evolution:{}},e)}({fetching:!0})})),e.addCase(S.fulfilled,(function(e,t){var n=t.payload,r=n.data,i=n.error,a=t.meta.arg,c=_(e,a);if(i)return c.fetching=!1,void(c.error=i);c.evolution=function(e){var t=e.base_happiness,n=e.capture_rate,r=e.generation,i=e.name;return{hapiness:t,captureRate:n,generation:r.name,curentForm:i}}(r)})),e.addCase(A.fulfilled,(function(e,t){var n=t.payload,r=n.data,i=n.error,a=t.meta.arg.name,c=_(e,a);if(i)return c.fetching=!1,c.error=i,void(c.state="finished");var o=I(r,c.evolution.curentForm),s=o.previousForm,u=o.nextForm;c.fetching=!1,c.state="finished",c.evolution.previousForm=s,c.evolution.nextForm=u}))}}),L=K.reducer,T=function(e){return function(t){return function(n){switch(n.type){case"".concat(w.typePrefix,"/pending"):H(e)}return t(n)}}},H=function(e){var t=e.dispatch,n=(0,e.getState)().pokemons.responseDate,r=Date.now();n&&r-n>36e5&&t(P())},R=Object(l.a)({reducer:{pokemons:U,evolution:L},middleware:function(e){return e().concat(T)}}),B=(n(43),n(4)),J=n(11),M=n(5),W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e){var n=t.map((function(e){return e.name})),r=e.stats.filter((function(e){return n.includes(e.stat.name)}));return r.map((function(e){var n=e.stat.name,r=t.find((function(e){return e.name===n}));return Object(d.a)({name:n,value:e.base_stat},r&&{alias:r.alias})}))}},q=function(e){switch(!0){case e>=80:return"high";case e>=50:return"medium";default:return"low"}},z=function(e){var t,n,r;return e?null===(t=e.sprites)||void 0===t||null===(n=t.other)||void 0===n||null===(r=n["official-artwork"])||void 0===r?void 0:r.front_default:null},G=n(28),Q=n.n(G),V=(n(46),n(0)),X=n(48),Y=X.keys().reduce((function(e,t){return e[Q.a.basename(t,Q.a.extname(t))]={path:t,file:X(t).default},e}),{}),Z=function(e){var t=e.type,n=Y[t];return n?Object(V.jsx)("span",{"data-tooltip":t,className:"type-icon ".concat(t),children:Object(V.jsx)("img",{src:n.file,alt:t})}):null},$=n(33),ee=(n(67),function(e){var t=e.pokemon,n=Object(r.useState)(!1),i=Object($.a)(n,2),a=i[0],c=i[1],o=z(t),s=function(e){var t,n,r;return e?null===(t=e.sprites)||void 0===t||null===(n=t.other)||void 0===n||null===(r=n.dream_world)||void 0===r?void 0:r.front_default:null}(t),u=!!o&&!!s;return Object(V.jsxs)("div",{className:"pokemon-image-switcher",children:[u&&Object(V.jsxs)("label",{className:"checkbox-label",children:[Object(V.jsx)("input",{type:"checkbox",className:"checkbox-input",checked:a,onChange:function(){c((function(e){return!e}))}}),Object(V.jsx)("span",{className:"checkbox-custom"})]}),Object(V.jsx)("img",{className:"pokemon-image ".concat(a?"hidden":""),src:o,alt:t.name}),Object(V.jsx)("img",{className:"pokemon-image ".concat(a?"":"hidden"),src:s,alt:t.name})]})}),te=(n(68),[{name:"hp",alias:"HP"}]),ne=function(e){var t,n=e.pokemon,r=e.children,i=n.name,a=n.height,c=n.weight,o=function(e){if(e)return e.types.map((function(e){return e.type.name}))}(n),s=W(n,te);return Object(V.jsxs)("div",{className:"pokemon-card",children:[Object(V.jsxs)("div",{className:"pokemon-card-header",children:[Object(V.jsxs)("div",{className:"pokemon-card-info",children:[Object(V.jsx)("p",{className:"pokemon-name",children:i}),Object(V.jsx)(J.a,{icon:M.g,className:"pokemon-hp-icon"}),Object(V.jsxs)("span",{className:"pokemon-hp",children:[null===(t=s[0])||void 0===t?void 0:t.value,"HP"]}),Object(V.jsx)("ul",{className:"pokemon-types reset-list",children:o.map((function(e,t){return Object(V.jsx)("li",{children:Object(V.jsx)(Z,{type:e})},t)}))})]}),Object(V.jsx)(ee,{pokemon:n})]}),Object(V.jsxs)("div",{className:"pokemon-label",children:["Height: ",a," | Weight: ",c]}),Object(V.jsx)("hr",{className:"pokemon-separator"}),r]})},re=n(17),ie=n.n(re),ae=(n(69),function(e){var t=e.fetching,n=e.finished,r=e.onClick;return Object(V.jsxs)("div",{className:ie()("pokeball",{fetching:t,finished:n}),onClick:r,children:[Object(V.jsx)("div",{className:"pokeball-up"}),Object(V.jsx)("div",{className:"pokeball-down"})]})}),ce=n.p+"static/media/pickachu2.aec47caa.png",oe=(n(70),function(e){var t=e.evolution,n=e.finished,r=Object(o.c)((function(e){return e})),i=F(r,null===t||void 0===t?void 0:t.previousForm),a=F(r,null===t||void 0===t?void 0:t.nextForm),c=z(i),s=z(a);return n?i||a||!n?Object(V.jsxs)("div",{className:ie()("evolution-chain",{right:!!a&&!i}),children:[i?Object(V.jsxs)("div",{className:"evolution-form previous-form",children:[Object(V.jsx)("p",{className:"evolution-name align-left",children:null===i||void 0===i?void 0:i.name}),Object(V.jsxs)("div",{className:"evolution-image-wrapper",children:[Object(V.jsx)("img",{className:"evolution-image",src:c,alt:i.name}),Object(V.jsx)(J.a,{className:"evolution-arrow previous",icon:M.a}),Object(V.jsx)(J.a,{className:"evolution-arrow previous",icon:M.a})]})]}):Object(V.jsx)("div",{}),Object(V.jsxs)("div",{className:"current-form",children:[Object(V.jsx)(J.a,{className:"evolution-arrow current",icon:M.b}),Object(V.jsx)(J.a,{className:"evolution-arrow current",icon:M.b}),Object(V.jsx)(J.a,{className:"evolution-arrow current",icon:M.b})]}),a?Object(V.jsxs)("div",{className:"evolution-form next-form",children:[Object(V.jsx)("p",{className:"evolution-name align-right",children:null===a||void 0===a?void 0:a.name}),Object(V.jsxs)("div",{className:"evolution-image-wrapper",children:[Object(V.jsx)(J.a,{className:"evolution-arrow next",icon:M.a}),Object(V.jsx)(J.a,{className:"evolution-arrow next",icon:M.a}),Object(V.jsx)("img",{className:"evolution-image",src:s,alt:a.name})]})]}):Object(V.jsx)("div",{})]}):Object(V.jsxs)("div",{className:"no-evolution",children:[Object(V.jsx)("p",{children:"No evolution form found."}),Object(V.jsx)("img",{src:ce,alt:"no evolution form"})]}):null}),se=(n(71),function(e){var t=e.pokemon,n=Object(o.b)(),r=Object(o.c)((function(e){return function(e,t){return _(e.evolution,t)}(e,t.name)})),i="finished"===(null===r||void 0===r?void 0:r.state);return Object(V.jsxs)("div",{className:"pokemon-evolution",children:[Object(V.jsx)(ae,{fetching:null===r||void 0===r?void 0:r.fetching,finished:i,onClick:function(){(null===r||void 0===r?void 0:r.fetching)||i||n(S(t.name))}}),Object(V.jsx)(oe,{evolution:null===r||void 0===r?void 0:r.evolution,finished:i})]})}),ue=(n(72),function(e){var t=e.pokemon,n=e.attributes,r=W(t,void 0===n?[]:n);return Object(V.jsx)("ul",{className:"pokemons-attributes reset-list",children:r.map((function(e,t){var n=e.alias,r=e.value;return Object(V.jsxs)("li",{className:"pokemons-attributes-item",children:[Object(V.jsx)("div",{className:"pokemons-attributes-name",children:n}),Object(V.jsx)("div",{className:"pokemons-attributes-value ".concat(q(r)),children:r})]},t)}))})}),le=(n(73),[{name:"attack",alias:"atck"},{name:"defense",alias:"def"},{name:"special-attack",alias:"spec. atck"},{name:"special-defense",alias:"spec. def"},{name:"speed",alias:"def"}]),de=function(e){var t=e.pokemons;return Object(V.jsx)("div",{className:"pokemon-list",children:t.map((function(e){return Object(V.jsxs)(ne,{pokemon:e,children:[Object(V.jsx)(se,{pokemon:e}),Object(V.jsx)(ue,{pokemon:e,attributes:le})]},e.id)}))})},fe=(n(74),function(){return Object(V.jsx)("div",{className:"spinner"})}),pe=n(24),me=function(){},ve=(n(75),{left:"ArrowLeft",right:"ArrowRight",down:"ArrowDown",up:"ArrowUp"}),je={left:M.d,right:M.e,down:M.c,up:M.f},be=Object(r.memo)((function(e){var t=e.direction,n=e.disabled,i=e.onClick,a=e.className,c=void 0===a?"":a,o=e.enableKeyDown,s=void 0!==o&&o,u=e.onKeyDown,l=void 0===u?me:u,d=je[t];return Object(r.useEffect)((function(){var e=function(e){n||e.code===ve[t]&&l()};return s&&window.addEventListener("keydown",e),function(){s&&window.removeEventListener("keydown",e)}}),[]),Object(V.jsx)("button",{className:ie()(c,Object(pe.a)({},t,!0)),disabled:n,onClick:i,children:Object(V.jsx)(J.a,{icon:d})})})),he=(n(76),function(){var e=Object(o.b)(),t=Object(B.g)(),n=Object(B.h)().pageNumber,i=Object(o.c)(y),a=Object(o.c)(C),c=Object(o.c)(D),u=function(e){var r=e?parseInt(n)+1:parseInt(n)-1;t.push("/".concat(r))},l=Object(r.useCallback)((function(){return u(0)}),[n]),d=Object(r.useCallback)((function(){return u(1)}),[n]);return Object(r.useEffect)((function(){var r=parseInt(n);if(isNaN(r))return t.push("/1");e(x({page:parseInt(n)}))}),[n]),Object(V.jsxs)("div",{className:"pokemon-app",children:[a&&Object(V.jsx)(fe,{}),!a&&!!(null===i||void 0===i?void 0:i.length)&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsxs)("h2",{children:["Pokemon application based on ",Object(V.jsx)("a",{href:"https://pokeapi.co/",children:"Pok\xe9mon API"})]}),c.previousUrl&&Object(V.jsx)(be,{className:"pokemon-btn",direction:"left",disabled:a,onClick:l,enableKeyDown:!0,onKeyDown:l}),Object(V.jsx)(de,{pokemons:i}),c.nextUrl&&Object(V.jsx)(be,{className:"pokemon-btn",direction:"right",disabled:a,onClick:d,enableKeyDown:!0,onKeyDown:d})]}),!a&&!(null===i||void 0===i?void 0:i.length)&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)("div",{className:"no-results",children:"No pokemons were found, sorry ;("}),Object(V.jsx)(s.b,{to:"/1",children:"Try Home"})]})]})});var ge=function(){return Object(V.jsxs)(B.d,{children:[Object(V.jsx)(B.b,{path:"/:pageNumber",children:Object(V.jsx)(he,{})}),Object(V.jsx)(B.a,{to:"/1"})]})};c.a.render(Object(V.jsx)(i.a.StrictMode,{children:Object(V.jsx)(o.a,{store:R,children:Object(V.jsx)(s.a,{basename:"/page",children:Object(V.jsx)(ge,{})})})}),document.getElementById("root")),u()}]),[[78,1,2]]]);
//# sourceMappingURL=main.212ad00d.chunk.js.map