(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[45],{312:function(t,e,i){"use strict";i.r(e);var a=i(51),s=i(10),c=i(25),d=i(101),l=i.n(d),n=i(100),o=i.n(n),r=i(2),b=i(105),j=i(20),u=function(t){var e=t.statistic,i=t.data,a=t.getTableStatistic,d=t.noDistrictData,n=a(i,e,"total"),o=a(i,e,"delta"),r=Object(b.useSpring)({total:n,delta:o,config:s.t}),u=s.x[e];return Object(j.jsxs)("div",{className:"cell statistic",children:[(null===u||void 0===u?void 0:u.showDelta)&&Object(j.jsx)(b.animated.div,{className:l()("delta","is-".concat(e)),title:o,children:r.delta.to((function(t){return d&&u.hasPrimary?"":t>0?"\u2191"+Object(c.e)(t,u.format):t<0?"\u2193"+Object(c.e)(Math.abs(t),u.format):""}))}),Object(j.jsx)(b.animated.div,{className:"total",title:n,children:r.total.to((function(t){return d&&u.hasPrimary?"-":Object(c.e)(t,u.format,e)}))})]})},m=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.noDistrictData,null===(l=e.data)||void 0===l?void 0:l.noDistrictData)&&!!o()(t.getTableStatistic,e.getTableStatistic)))},h=Object(r.memo)(u,m),g=i(115),v=i(104),O=i(118),x=i(122);function N(t){var e,i=t.stateCode,a=t.districtName,s=t.data,c=t.tableStatistics,d=t.regionHighlighted,n=t.setRegionHighlighted,o=(t.expandTable,t.getTableStatistic),b=t.noDistrictData,u=Object(x.a)().t,m=Object(r.useCallback)((function(){d.districtName!==a&&n(Object(O.a)(d,(function(t){t.stateCode=i,t.districtName=a})))}),[d,a,n,i]);return Object(j.jsxs)("div",{className:l()("row","district",{"is-highlighted":(null===d||void 0===d?void 0:d.districtName)===a}),onMouseEnter:m,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name",children:u(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(g.a,{message:s.meta.notes,children:Object(j.jsx)(v.k,{size:16})})]}),c.map((function(t){return Object(j.jsx)(h,{statistic:t,data:s,getTableStatistic:o,noDistrictData:b},t)}))]})}var C=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.noDistrictData,e.noDistrictData)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics)))))))},f=Object(r.memo)(N,C),p=i(196),D=i(5),S=i(276);function T(t){var e,i,d=this,n=t.data,o=t.tableStatistics,b=t.stateCode,u=t.districtName,m=t.regionHighlighted,N=t.setRegionHighlighted,C=t.expandTable,T=t.getTableStatistic,H=t.tableWidth,k=t.noDistrictData,w=Object(r.useState)(!1),A=Object(a.a)(w,2),F=A[0],y=A[1],z=Object(S.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),R=Object(a.a)(z,2),_=R[0],E=R[1],M=Object(D.g)(),W=Object(x.a)().t,I=Object(r.useRef)(),J=Object(r.useCallback)((function(t){_.sortColumn!==t?E(Object(O.a)(_,(function(e){"districtName"!==_.sortColumn&&"districtName"!==t||(e.isAscending=!_.isAscending),e.sortColumn=t}))):E(Object(O.a)(_,(function(t){t.isAscending=!_.isAscending})))}),[_,E]),P=Object(r.useCallback)((function(t,e){if("districtName"!==_.sortColumn){var i=s.x[_.sortColumn],a=_.delta&&(null===i||void 0===i?void 0:i.showDelta)?"delta":"total",c=T(n.districts[t],_.sortColumn,a),d=T(n.districts[e],_.sortColumn,a);return _.isAscending?c-d:d-c}return _.isAscending?t.localeCompare(e):e.localeCompare(t)}),[_,n,T]),U=Object(r.useCallback)((function(){b?m.stateCode!==b&&N(Object(O.a)(m,(function(t){t.stateCode=b,t.districtName=null}))):u&&(m.districtName===u&&m.stateCode===n.stateCode||N(Object(O.a)(m,(function(t){t.stateCode=n.stateCode,t.districtName=u}))))}),[n.stateCode,u,m,N,b]),V=Object(r.useCallback)((function(){n.districts&&y(!F)}),[F,n]),q=W(u);u===s.F&&(q="".concat(W(s.F)," [").concat(W(s.w[n.stateCode]),"]"));var B=Object(r.useCallback)((function(t){M.push("state/".concat(t))}),[M]),G=Object(r.useCallback)((function(){y(!1),I.current.scrollIntoView({block:"start"})}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:l()("row",{"is-total":"TT"===b},{"is-highlighted":b&&(null===m||void 0===m?void 0:m.stateCode)===b||u&&(null===m||void 0===m?void 0:m.districtName)===u&&(null===m||void 0===m?void 0:m.stateCode)===n.stateCode}),onMouseEnter:U,onClick:V,ref:I,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name fadeInUp",children:W(s.w[b])||q}),(null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(g.a,{message:n.meta.notes,children:Object(j.jsx)(v.k,{size:16})})]}),o.map((function(t){return Object(j.jsx)(h,{noDistrictData:!b&&u!==s.F&&k,data:n,statistic:t,getTableStatistic:T},t)}))]}),F&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"state-meta",style:{width:H},children:[Object(j.jsxs)("div",{className:"state-meta-top",children:[Object(j.jsxs)("div",{className:"state-page",onClick:B.bind(this,b),children:[Object(j.jsx)(v.h,{}),Object(j.jsx)("span",{children:W("See more details")})]}),(null===n||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated)&&Object(j.jsxs)("p",{className:"last-updated",children:[Object(j.jsx)(v.d,{}),Object(c.a)("".concat(Object(c.d)(n.meta.last_updated)," ").concat(W("ago")))]})]}),n.districts&&s.F in n.districts&&Object(j.jsx)("div",{className:"state-meta-bottom",children:Object(j.jsxs)("div",{className:l()("disclaimer"),children:[Object(j.jsx)(v.a,{}),Object(j.jsx)("span",{children:W("District-wise data not available in state bulletin")})]})})]}),Object(j.jsxs)("div",{className:l()("row","heading"),children:[Object(j.jsxs)("div",{className:"cell heading",onClick:J.bind(this,"districtName"),children:[Object(j.jsx)("div",{className:"district-name",children:W("District")}),"districtName"===_.sortColumn&&Object(j.jsx)("div",{className:"sort-icon",children:_.isAscending?Object(j.jsx)(v.r,{size:12}):Object(j.jsx)(v.s,{size:12})})]}),o.map((function(t){return Object(j.jsx)(p.a,{statistic:t,sortData:_,setSortData:E,handleSort:J.bind(d,t)},t)}))]})]}),F&&Object.keys(n.districts||{}).sort((function(t,e){return P(t,e)})).map((function(t){return Object(j.jsx)(f,{data:n.districts[t],noDistrictData:t!==s.F&&k,tableStatistics:o,districtName:t,regionHighlighted:m,setRegionHighlighted:N,stateCode:b,expandTable:C,getTableStatistic:T},t)})),F&&Object(j.jsx)("div",{className:"spacer-row",style:{width:H},children:Object(j.jsxs)("div",{className:"spacer",children:[Object(j.jsx)("p",{children:"End of ".concat(W(s.w[b]),"'s districts")}),Object(j.jsx)("div",{className:"fold",onClick:G,children:Object(j.jsx)(v.g,{})})]})})]})}var H=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.noDistrictData,e.noDistrictData)&&(!!o()(t.tableWidth,e.tableWidth)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics))))))))};e.default=Object(r.memo)(T,H)}}]);
//# sourceMappingURL=45.5f9f008d.chunk.js.map