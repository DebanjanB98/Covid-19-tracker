(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[43],{289:function(t,e,r){"use strict";r.r(e);var n=r(116),i=r(125),a=r.n(i),c=r(157),o=r(113),s=r(51),l=r(10),u=r(25),d=r(218),f=r(291),p=r(187),b=r(273),j=r(258),m=r(280),v=r(253),O=r(150),h=r(217),g=r(78),x=r(255),k=r(2),y=r(121),w=r(137),C=r(20);var E=function(t){t.data;var e=t.statistic,r=t.mapViz,n=t.mapScale,i=Object(y.a)().t,a=Object(k.useRef)(null),c=Object(w.a)(),E=Object(s.a)(c,2),T=E[0],N=E[1].width;return Object(k.useEffect)((function(){var t=Object(x.a)(a.current),e=t.transition().duration(l.b);if(r!==l.q.CHOROPLETH){var n=t.transition().duration(l.b);t.select(".ramp").transition(n).attr("opacity",0).attr("display","none").attr("xlink:href",null),t.select(".bars").selectAll("rect").transition(n).attr("opacity",0).remove(),t.selectAll(".axis > *:not(.axistext)").remove(),t.select(".axistext").text("")}r!==l.q.BUBBLE&&(t.select(".circles").selectAll("circle").transition(e).attr("r",0).attr("cy",0).remove(),t.selectAll(".circle-axis > *").remove()),r!==l.q.SPIKES&&(t.select(".spikes").call((function(t){return t.selectAll("path").transition(e).attr("d",Object(u.l)(0)).remove()})).call((function(t){return t.selectAll("text").remove()})).transition(e).selectAll("g").remove(),t.selectAll(".spike-axis > *").remove())}),[r]),Object(k.useEffect)((function(){if(N){var t=Object(x.a)(a.current),c=l.x[e],o=N/l.k[0];if(r===l.q.BUBBLE){var k=n.domain(),y=Object(s.a)(k,2)[1],w=t.select(".circles").attr("transform","translate(48,40)").attr("text-anchor","middle"),C=[.1,.4,1].map((function(t){return t*y}));w.selectAll("circle").data(C).join("circle").attr("fill","none").attr("stroke",c.color+"70").transition(i).attr("cy",(function(t){return-n(t)})).attr("r",(function(t){return n(t)}));var E=n.copy().range([0,-2*n(y)]);t.select(".circle-axis").attr("transform","translate(48,50)").transition(i).call(Object(p.b)(E).tickSize(0).tickPadding(0).tickValues(C).tickFormat((function(t){return Object(u.e)(t,"long"===c.format?"short":c.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/o),t.select(".circle-axis").call((function(t){return t.select(".domain").remove()}))}else if(r===l.q.SPIKE){var T=n.ticks(3).slice(1).reverse(),R=28/o;t.select(".spikes").attr("transform","translate(32,24)").selectAll("g").data(T).join((function(t){return t.append("g").call((function(t){return t.append("path").attr("fill-opacity",.3).attr("d",(function(t){return Object(u.l)(0)}))}))})).attr("transform",(function(t,e){return"translate(".concat(e*R,",0)")})).call((function(t){return t.select("path").transition(i).attr("d",(function(t){return Object(u.l)(n(t))})).attr("fill",c.color+"70").attr("stroke",c.color+"70")}));var S=n.copy().range([R*T.length,0]);t.select(".spike-axis").attr("transform","translate(32,32)").transition(i).call(Object(p.a)(S).tickSize(0).tickPadding(0).tickValues(T).tickFormat((function(t){return Object(u.e)(t,"long"===c.format?"short":c.format)}))).selectAll(".tick text").style("text-anchor","middle").attr("font-size",10/o),t.select(".spike-axis").call((function(t){return t.select(".domain").remove()}))}else{var q;t.call((function(){return function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.svg,n=e.color,i=e.title,a=e.tickSize,c=void 0===a?6:a,o=e.width,s=void 0===o?320:o,u=e.height,x=void 0===u?44+c:u,k=e.marginTop,y=void 0===k?18:k,w=e.marginRight,C=void 0===w?0:w,E=e.marginBottom,T=void 0===E?16+c:E,N=e.marginLeft,R=void 0===N?0:N,S=e.ticks,q=void 0===S?s/64:S,H=e.tickFormat,M=e.tickValues,P=e.ordinalWeights,L=r.transition().duration(l.b),B=function(t){t.selectAll(".tick line").attr("y1",y+T-x)};if(n.interpolate){var F=Math.min(n.domain().length,n.range().length);t=n.copy().rangeRound(Object(j.a)(Object(m.a)(R,s-C),F)),r.select(".ramp").attr("x",R).attr("y",y).attr("width",s-R-C).attr("height",x-y-T).attr("xlink:href",A(n.copy().domain(Object(j.a)(Object(m.a)(0,1),F))).toDataURL())}else if(n.interpolator){if(r.select(".bars").selectAll("rect").transition(L).attr("opacity",0).remove(),t=Object.assign(n.copy().interpolator(Object(v.a)(R,s-C)),{range:function(){return[R,s-C]}}),r.select(".ramp").attr("x",R).attr("y",y).attr("width",s-R-C).attr("height",x-y-T).attr("xlink:href",A(n.interpolator()).toDataURL()).attr("display","visible").transition(L).attr("opacity",1),!t.ticks){if(void 0===M){var _=Math.round(q+1);M=Object(d.a)(_).map((function(t){return Object(f.a)(n.domain(),t/(_-1))}))}"function"!==typeof H&&(H=Object(b.a)(void 0===H?",f":H))}}else if(n.invertExtent){var z=n.thresholds?n.thresholds():n.quantiles?n.quantiles():n.domain(),I=void 0===H?function(t){return t}:"string"===typeof H?Object(b.a)(H):H;t=Object(O.a)().domain([-1,n.range().length-1]).rangeRound([R,s-C]),r.append("g").selectAll("rect").data(n.range()).join("rect").attr("x",(function(e,r){return t(r-1)})).attr("y",y).attr("width",(function(e,r){return t(r)-t(r-1)})).attr("height",x-y-T).attr("fill",(function(t){return t})),M=Object(d.a)(-1,z.length),H=function(t){return-1===t?I(1):t!==z.length-1?t===z.length-2?I(z[t]+"+",t):I(z[t],t):void 0}}else{if(r.select(".ramp").transition(L).attr("opacity",0).attr("xlink:href",null),P){var U=Object(O.a)().domain([0,P.reduce((function(t,e){return t+e}))]).rangeRound([0,s-R-C]),V=P.map((function(t,e){return P.slice(0,e).reduce((function(t,e){return t+U(e)}),R)}));t=Object(g.a)().domain(n.domain()).range(V),r.select(".bars").selectAll("rect").data(n.domain()).join((function(e){return e.append("rect").attr("x",t).attr("width",(function(t,e){return U(P[e])}))})).attr("y",y).attr("height",x-y-T).attr("fill",n).transition(L).attr("x",t).attr("width",(function(t,e){return U(P[e])})).attr("opacity",1)}else t=Object(h.a)().domain(n.domain().filter((function(t){return t}))).rangeRound([R,s-C]),r.select(".bars").selectAll("rect").data(n.domain().filter((function(t){return t}))).join("rect").attr("x",t).attr("y",y).attr("width",Math.max(0,t.bandwidth()-1)).attr("height",x-y-T).attr("fill",n);B=function(){}}return r.select(".axis").attr("transform","translate(0,".concat(x-T,")")).transition(L).attr("class","axis").call(Object(p.a)(t).ticks(q,"string"===typeof H?H:void 0).tickFormat("function"===typeof H?H:void 0).tickSize(c).tickValues(M)).on("start",(function(){r.call(B).call((function(t){return t.select(".domain").remove()}))})).call((function(t){return t.select(".axistext").attr("class","axistext").attr("x",R).attr("y",y+T-x-6).attr("fill","currentColor").attr("text-anchor","start").attr("font-weight","bold").text(i)})),r.node()}({svg:t,color:n,width:N,height:l.l,ticks:5,tickFormat:function(t,e,n){var i;return(null===c||void 0===c||null===(i=c.mapConfig)||void 0===i?void 0:i.colorScale)?t:r!==l.q.CHOROPLETH||Number.isInteger(t)?e===n.length-1?Object(u.e)(t,c.format)+"+":Object(u.e)(t,c.format):""},marginLeft:2,marginRight:0})})),t.attr("class",(null===c||void 0===c||null===(q=c.mapConfig)||void 0===q?void 0:q.colorScale)?"zone":"")}}}),[i,N,e,n,r]),Object(C.jsxs)("div",{className:"svg-parent maplegend",ref:T,style:{height:2*l.l},children:[Object(C.jsxs)("svg",Object(o.a)(Object(o.a)({id:"legend",preserveAspectRatio:"xMinYMid meet",ref:a},r!==l.q.CHOROPLETH&&{viewBox:"0 0 ".concat(l.k[0]," ").concat(l.l)}),{},{children:[Object(C.jsx)("image",{className:"ramp",preserveAspectRatio:"none"}),Object(C.jsx)("g",{className:"bars"}),Object(C.jsx)("g",{className:"circles"}),Object(C.jsx)("g",{className:"spikes"}),Object(C.jsx)("g",{className:"circle-axis"}),Object(C.jsx)("g",{className:"spike-axis"}),Object(C.jsx)("g",{className:"axis",children:Object(C.jsx)("text",{className:"axistext"})})]})),Object(C.jsx)("canvas",{className:"color-scale",style:{position:"absolute",height:0}})]})};function A(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:256,r=Object(x.a)(".color-scale").node(),n=(r.width=e,r.height=1,r).getContext("2d"),i=0;i<e;++i)n.fillStyle=t(i/(e-1)),n.fillRect(i,0,1,1);return r}var T=r(104),N=r(101),R=r.n(N),S=r(147),q=r(266),H=r(276),M=r(274),P=r(222),L=r(290),B=r(259),F=r(260),_=r(261),z=r(262),I=r(263),U=r(264),V=r(265),D=r(130),K=r(5),W=r(149),Y=r(229);e.default=function(t){var e,r=this,i=t.mapCode,o=t.isDistrictView,s=t.mapViz,d=t.data,f=t.regionHighlighted,p=t.setRegionHighlighted,b=t.statistic,j=t.getMapStatistic,m=t.transformStatistic,v=t.noDistrictData,h=Object(y.a)().t,g=Object(k.useRef)(null),w=l.m[i],A=Object(K.g)(),N=Object(W.a)(w.geoDataFile,function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(q.a)(e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{suspense:!1,revalidateOnFocus:!1}).data,J=Object(k.useMemo)((function(){return j(d[i])}),[d,i,j]),G=l.x[b],Q=Object(k.useCallback)((function(t){return((null===G||void 0===G?void 0:G.color)||"#343a40")+t}),[G]),X=Object(k.useMemo)((function(){return N?(o?w.mapType===l.o.COUNTRY&&s!==l.q.CHOROPLETH?[].concat(Object(n.a)(Object(Y.a)(N,N.objects.states).features),Object(n.a)(Object(Y.a)(N,N.objects.districts).features)):Object(Y.a)(N,N.objects.districts).features:Object(Y.a)(N,N.objects.states).features).map((function(t){var e=t.properties.district,r=t.properties.st_nm,n=Object.assign({},t);return n.id="".concat(i,"-").concat(r).concat(e?"-"+e:""),n})):null}),[N,i,o,s,w]),Z=Object(k.useMemo)((function(){return N&&o?Object(Y.a)(N,N.objects.districts).features.reduce((function(t,e){var r=l.u[e.properties.st_nm];return t[r]||(t[r]=new Set),t[r].add(e.properties.district),t}),{}):{}}),[N,o]),$=Object(k.useMemo)((function(){var t=Object.keys(d).filter((function(t){return"TT"!==t&&Object.keys(l.m).includes(t)}));if(o){var e=t.reduce((function(t,e){var r,i=Object.keys((null===(r=d[e])||void 0===r?void 0:r.districts)||[]).filter((function(t){return((null===Z||void 0===Z?void 0:Z[e])||new Set).has(t)||s!==l.q.CHOROPLETH&&t===l.F}));return t.push.apply(t,Object(n.a)(i.map((function(t){return m(j(d[e].districts[t]))})))),t}),[]);return Object(S.a)(e)}return Object(S.a)(t,(function(t){return m(j(d[t]))}))}),[d,o,j,s,Z,m]),tt=Object(k.useMemo)((function(){var t,e;return s===l.q.BUBBLE?Object(P.b)([0,Math.max(1,$||0)],[0,40]).clamp(!0).nice(3):s===l.q.SPIKE?Object(O.a)([0,Math.max(1,$||0)],[0,80]).clamp(!0).nice(3):(null===(t=l.x[b])||void 0===t||null===(e=t.mapConfig)||void 0===e?void 0:e.colorScale)?l.x[b].mapConfig.colorScale:Object(L.a)([0,Math.max(1,$||0)],function(t){var e;return"confirmed"===t?function(t){return Object(B.a)(.85*t)}:"active"===t?function(t){return Object(F.a)(.85*t)}:"recovered"===t?function(t){return Object(_.a)(.85*t)}:"deceased"===t?function(t){return Object(z.a)(.85*t)}:"tested"===t?function(t){return Object(I.a)(.85*t)}:"tpr"===t||"cfr"===t||"other"===t?function(t){return Object(U.a)(.85*t)}:"vaccinated"===(null===(e=l.x[t])||void 0===e?void 0:e.category)?function(t){return Object(V.a)(.15+.35*(1-t))}:function(t){return Object(U.a)(.85*t)}}(b)).clamp(!0)}),[s,b,$]),et=Object(k.useCallback)((function(t){if(s===l.q.CHOROPLETH){var e,r=l.u[t.properties.st_nm],n=t.properties.district,i=d[r],a=null===i||void 0===i||null===(e=i.districts)||void 0===e?void 0:e[n],c=m(j(n?a:i));return c?tt(c):"#ffffff00"}}),[s,d,tt,j,m]),rt=Object(k.useCallback)((function(t){t.select("title").text((function(t){if(s!==l.q.CHOROPLETH&&!(null===G||void 0===G?void 0:G.nonLinear)){var e,r,n=t.properties.st_nm,i=l.u[n],a=t.properties.district,c=d[i],o=null===c||void 0===c||null===(e=c.districts)||void 0===e?void 0:e[a];return r=j(a?o:c),"".concat(Object(u.e)(r/(J||.001)*100,"%")," from ").concat(Object(u.m)(a||n))}}))}),[s,d,j,J,G]),nt=Object(k.useRef)(null);Object(k.useEffect)((function(){Object(x.a)(g.current).attr("pointer-events","auto").on("click",(function(){nt.current=null,p({stateCode:i,districtName:null})}))}),[i,p]);var it=Object(k.useMemo)((function(){return N?Object(H.a)(Object(M.a)()):null}),[N]);Object(k.useEffect)((function(){if(N){var t=Object(x.a)(g.current),e=Object(D.a)().duration(l.b);t.select(".regions").selectAll("path").data(s===l.q.CHOROPLETH?X:[],(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke-width",1.8).attr("stroke-opacity",0).style("cursor","pointer").on("mouseenter",(function(t,e){nt.current||p({stateCode:l.u[e.properties.st_nm],districtName:e.properties.district})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:l.u[e.properties.st_nm],districtName:e.properties.district})})).attr("fill","#fff0").attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").attr("fill","#fff0").remove()})).attr("pointer-events","all").on("click",(function(e,r){var n;e.stopPropagation();var i=l.u[r.properties.st_nm];!nt.current&&w.mapType!==l.o.STATE&&(null===(n=d[i])||void 0===n?void 0:n.districts)&&(t.attr("pointer-events","none"),t.select(".regions").selectAll("path").attr("pointer-events","none"),A.push("/state/".concat(i).concat(window.innerWidth<769?"#MapExplorer":"")))})).call((function(t){t.transition(e).attr("fill",et).attr("stroke",Q.bind(r,""))}))}}),[s,d,X,et,N,A,w.mapType,it,p,Q]);var at=Object(k.useMemo)((function(){return s===l.q.CHOROPLETH?[]:(X||[]).map((function(t){var e=l.u[t.properties.st_nm],r=t.properties.district,n=d[e];if(o){var i,a,c=null===n||void 0===n||null===(i=n.districts)||void 0===i?void 0:i[r];t.value=j(r?c:null===n||void 0===n||null===(a=n.districts)||void 0===a?void 0:a[l.F])}else t.value=j(n);return t})).filter((function(t){return t.value>0})).sort((function(t,e){return e.value-e.value}))}),[s,o,j,X,d]);return Object(k.useEffect)((function(){var t=Object(x.a)(g.current),e=Object(D.a)().duration(l.b),r=t.select(".circles").selectAll("circle").data(s===l.q.BUBBLE?at:[],(function(t){return t.id})).join((function(t){return t.append("circle").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("r",0).remove()}))})).on("mouseenter",(function(t,e){nt.current||p({stateCode:l.u[e.properties.st_nm],districtName:o?e.properties.district||l.F:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:l.u[e.properties.st_nm],districtName:o?e.properties.district||l.F:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||w.mapType===l.o.STATE||A.push("/state/".concat(l.u[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("r",(function(t){return tt(t.value)}))}));window.requestIdleCallback((function(){rt(r)}))}),[w.mapType,s,o,at,A,tt,it,p,rt,G,j]),Object(k.useEffect)((function(){var t=Object(x.a)(g.current),e=Object(D.a)().duration(l.b),r=t.select(".spikes").selectAll("path").data(s===l.q.SPIKE?at:[],(function(t){return t.id}),(function(t){return t.id})).join((function(t){return t.append("path").attr("transform",(function(t){return"translate(".concat(it.centroid(t),")")})).attr("opacity",0).attr("fill-opacity",.25).style("cursor","pointer").attr("pointer-events","all").attr("d",Object(u.l)(0)).call((function(t){t.append("title")}))}),(function(t){return t}),(function(t){return t.call((function(t){return t.transition(e).attr("opacity",0).attr("d",Object(u.l)(0)).remove()}))})).on("mouseenter",(function(t,e){nt.current||p({stateCode:l.u[e.properties.st_nm],districtName:o?e.properties.district||l.F:null})})).on("pointerdown",(function(t,e){nt.current===e?nt.current=null:nt.current=e,p({stateCode:l.u[e.properties.st_nm],districtName:o?e.properties.district||l.F:null})})).on("click",(function(t,e){t.stopPropagation(),nt.current||w.mapType===l.o.STATE||A.push("/state/".concat(l.u[e.properties.st_nm]).concat(window.innerWidth<769?"#MapExplorer":""))})).call((function(t){t.transition(e).attr("opacity",1).attr("fill",G.color+"70").attr("stroke",G.color+"70").attr("d",(function(t){return Object(u.l)(tt(t.value))}))}));window.requestIdleCallback((function(){rt(r)}))}),[w.mapType,s,o,at,A,tt,it,p,rt,G,j]),Object(k.useEffect)((function(){if(N){var t=Object(x.a)(g.current),e=Object(D.a)().duration(l.b),n=[],a=[];w.mapType===l.o.COUNTRY&&((n=[Object(Y.b)(N,N.objects.states)])[0].id="".concat(i,"-states")),(w.mapType===l.o.STATE||o&&s===l.q.CHOROPLETH)&&((a=[Object(Y.b)(N,N.objects.districts)])[0].id="".concat(i,"-districts")),t.select(".state-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(n,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(r,"40")),t.select(".district-borders").attr("fill","none").attr("stroke-width",1.5).selectAll("path").data(a,(function(t){return t.id})).join((function(t){return t.append("path").attr("d",it).attr("d",it).attr("stroke","#fff0")}),(function(t){return t}),(function(t){return t.transition(e).attr("stroke","#fff0").remove()})).transition(e).attr("stroke",Q.bind(r,"40"))}}),[N,w,i,s,o,b,it,Q]),Object(k.useEffect)((function(){var t=f.stateCode,e=l.w[t],r=f.districtName,n=Object(x.a)(g.current);s===l.q.BUBBLE?n.select(".circles").selectAll("circle").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===l.F&&!n.properties.district)?1:.25})):s===l.q.SPIKE?n.select(".spikes").selectAll("path").attr("fill-opacity",(function(n){var a;return e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o||r===l.F&&!n.properties.district)?1:.25})):n.select(".regions").selectAll("path").each((function(n){var a,c=e===n.properties.st_nm&&(!r&&t!==i||r===(null===(a=n.properties)||void 0===a?void 0:a.district)||!o);c&&this.parentNode.appendChild(this),Object(x.a)(this).attr("stroke-opacity",c?1:0)}))}),[N,d,i,o,s,f.stateCode,f.districtName,b]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("div",{className:"svg-parent",children:[Object(C.jsxs)("svg",{id:"chart",className:R()({zone:!!(null===G||void 0===G||null===(e=G.mapConfig)||void 0===e?void 0:e.colorScale)}),viewBox:"0 0 ".concat(l.k[0]," ").concat(l.k[1]),preserveAspectRatio:"xMidYMid meet",ref:g,children:[Object(C.jsx)("g",{className:"regions"}),Object(C.jsx)("g",{className:"state-borders"}),Object(C.jsx)("g",{className:"district-borders"}),Object(C.jsx)("g",{className:"circles"}),Object(C.jsx)("g",{className:"spikes"})]}),v&&(null===G||void 0===G?void 0:G.hasPrimary)&&Object(C.jsxs)("div",{className:R()("disclaimer","is-".concat(b)),children:[Object(C.jsx)(T.a,{}),Object(C.jsx)("span",{children:h("District-wise data not available in state bulletin")})]})]}),tt&&Object(C.jsx)(E,{data:d,statistic:b,mapViz:s,mapScale:tt}),Object(C.jsx)("svg",{style:{position:"absolute",height:0},children:Object(C.jsx)("defs",{children:Object(C.jsx)("filter",{id:"balance-color",colorInterpolationFilters:"sRGB",children:Object(C.jsx)("feColorMatrix",{type:"matrix",values:"0.91372549  0           0            0  0.08627451 0           0.91372549  0            0  0.08627451 0           0           0.854901961  0  0.145098039 0           0           0            1  0"})})})})]})}}}]);
//# sourceMappingURL=43.f17934fe.chunk.js.map