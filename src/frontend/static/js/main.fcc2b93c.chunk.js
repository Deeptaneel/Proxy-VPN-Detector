(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{119:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},218:function(e,t,a){e.exports=a(411)},223:function(e,t,a){},224:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),i=(a(223),a(32)),o=(a(119),a(63)),s=a(425),m=a(426),u=a(427),d=a(412),E=a(420),f=a(414),p=(a(224),f.a.Title),v=window.require("electron"),y=(v.ipcRenderer,v.remote.BrowserWindow.getFocusedWindow());var g=function(){return l.a.createElement("div",{className:"title-bar"},l.a.createElement(E.a,{style:{fontSize:"24px",color:"#ffffff"}}),l.a.createElement(p,{level:4,style:{color:"#ffffff"}},"InfoWise"," "),l.a.createElement("div",{class:"actions focus"},l.a.createElement("div",{class:"traffic-lights focus"},l.a.createElement("button",{class:"traffic-light traffic-light-close",id:"close",onClick:function(){y.close()}}),l.a.createElement("button",{class:"traffic-light traffic-light-minimize",id:"minimize",onClick:function(){y.minimize()}}),l.a.createElement("button",{class:"traffic-light traffic-light-maximize",id:"maximize",onClick:function(){y.maximize()}}))))},h=(a(159),a(419)),b=a(413),k=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement("a",null,e)}},{title:"Type",dataIndex:"type",key:"type"},{title:"Status",dataIndex:"status",key:"status"},{title:"Score",key:"score",dataIndex:"score",render:function(e){var t="green";return e>50&&(t="volcano"),l.a.createElement(h.a,{color:t},e)}}];var I=function(e){var t=e.data;return l.a.createElement("div",{className:"third-party"},l.a.createElement(b.a,{columns:k,dataSource:t,pagination:!1,scroll:{y:"350px"}})," ")},S=[{title:"Inspector Name",dataIndex:"name",key:"name",render:function(e){return l.a.createElement("a",null,e)}},{title:"Time",dataIndex:"time",key:"status"},{title:"Score",key:"score",dataIndex:"score",render:function(e){var t="green";return e>21&&(t="volcano"),l.a.createElement(h.a,{color:t},e)}}];var x=function(e){var t=e.data;return l.a.createElement("div",{className:"third-party"},l.a.createElement(b.a,{columns:S,dataSource:t,pagination:!1,scroll:{y:"350px"}})," ")},w=a(418),O=a(146),P=a(416),N=a(415),j=w.a.Search,B=O.a.TabPane,A=f.a.Title,C=f.a.Paragraph,T=window.require("electron"),D=(T.remote.dialog,T.ipcRenderer);function z(e){var t=e.programState,a=e.signature;return"Idle"==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{level:4},"Awaiting Input"),l.a.createElement(C,null,"Please enter an IP to analyze")):"Detecting"==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{level:3},"Detecting"),l.a.createElement(C,null,"Running modules...")):"Bad"==t?l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{type:"danger",level:3},"VPN/Proxy Detected"),l.a.createElement(C,null,"This IP is a VPN/Proxy ",a)):l.a.createElement(l.a.Fragment,null,l.a.createElement(A,{level:3},"Good Ip"),l.a.createElement(C,null,"A VPN or Proxy was not detected"))}var F=function(){var e=Object(n.useState)("Idle"),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(i.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),E=d[0],f=d[1],p=Object(n.useState)(0),v=Object(i.a)(p,2),y=v[0],g=v[1],h=Object(n.useState)([]),b=Object(i.a)(h,2),k=b[0],S=b[1],w=Object(n.useState)([]),T=Object(i.a)(w,2),F=T[0],R=T[1],W=Object(n.useState)(["Sucessfully started program."]),G=Object(i.a)(W,2);return G[0],G[1],Object(n.useEffect)((function(){return D.on("thirdPartyData",(function(e,t){S(t),console.log(t)})),D.on("whoisData",(function(e,t){m(t.sig),R(t.table),g(t.value),t.value>65?r("Bad"):r("Good")})),function(){D.removeAllListeners("thirdPartyData"),D.removeAllListeners("whoisData")}}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ipBox"},l.a.createElement("div",null,l.a.createElement(A,{level:3},"Proxy VPN Check"),l.a.createElement(C,{className:"subtitle"},"Start a comprehensive check to determine whether the given IP is a VPN or Proxy")),l.a.createElement(j,{placeholder:"127.0.0.1",loading:"Detecting"==a,enterButton:!0,onSearch:function(e){f(e),r("Detecting"),D.send("thirdPartyRecon",e),D.send("startWhoisModule",e)}})),l.a.createElement("div",{className:"toplog"}),l.a.createElement("div",{className:"info"},l.a.createElement(O.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)}},l.a.createElement(B,{tab:"WHOIS Analysis",key:"1"},l.a.createElement(x,{data:F})),l.a.createElement(B,{tab:"Third Party Analysis",key:"2"},l.a.createElement(I,{data:k})))),l.a.createElement("div",{className:"result"},l.a.createElement(P.a,{bordered:!0,style:{width:"100%"}},l.a.createElement("div",{className:"result"},l.a.createElement("div",null,l.a.createElement(N.a,{type:"circle",percent:y,width:80,status:y>65?"exception":"",format:function(e){return e+"%"}})),l.a.createElement("div",null,l.a.createElement(z,{programState:a,signature:s})),l.a.createElement("div",null,l.a.createElement(A,{level:3},E),l.a.createElement(C,null,"Infowise Beta 0.5")))))))},R=a(42),W=window.require("electron").ipcRenderer,G=[{title:"IP",dataIndex:"ip",key:"name",render:function(e){return l.a.createElement("a",null,e)}},{title:"Score",dataIndex:"result",key:"result",render:function(e){var t="green";return e>55&&(t="volcano"),l.a.createElement(h.a,{color:t},e)}},{title:"Action",key:"ip",dataIndex:"ip",render:function(e){return l.a.createElement(R.a,{onClick:function(){W.send("render-report",e),alert("Report saved")}},"Details")}}];var M=function(e){var t=e.data;return l.a.createElement("div",{className:"third-party"},l.a.createElement(b.a,{columns:G,dataSource:t,pagination:!1,scroll:{y:"350px"}})," ")},V=[{title:"IP",dataIndex:"ip",key:"name",render:function(e){return l.a.createElement("a",null,e)}}];var q=function(e){var t=e.data;return l.a.createElement("div",{className:"third-party"},l.a.createElement(b.a,{columns:V,dataSource:t,pagination:!1,scroll:{y:"350px"}})," ")},K=a(421),L=a(422),H=a(423),J=a(424),$=a(417),Q=(w.a.Search,O.a.TabPane),U=f.a.Title,X=f.a.Paragraph,Y=window.require("electron"),Z=(Y.remote.dialog,Y.ipcRenderer);var _=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),s=o[0],m=o[1],u=Object(n.useState)([]),d=Object(i.a)(u,2),E=d[0],f=d[1];return Object(n.useEffect)((function(){return Z.on("updateBatchState",(function(e,t){var a=[],n=[],l=[];Object.keys(t).forEach((function(e){2==t[e].status?n.push(t[e]):1==t[e].status?a.push(t[e]):l.push(t[e])})),r(a),m(n),f(l),console.log(t)})),function(){Z.removeAllListeners("updateBatchState"),Z.removeAllListeners("whoisData")}}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"ipBox"},l.a.createElement("div",null,l.a.createElement(U,{level:3},"Batch Check"),l.a.createElement(R.a,{type:"primary",onClick:function(){Z.send("batchProcess","start")}},l.a.createElement(K.a,null)),l.a.createElement(X,{className:"subtitle"},"Masscheck IPs from .txt or csv."))),l.a.createElement("div",{className:"result"},l.a.createElement(P.a,{bordered:!0,style:{width:"100%"}},l.a.createElement("div",{className:"result"},l.a.createElement($.a,{title:"Good",value:a.length,precision:0,valueStyle:{color:"#3f8600"},prefix:l.a.createElement(L.a,null),suffix:"Ips"}),l.a.createElement($.a,{title:"Bad",value:s.length,precision:0,valueStyle:{color:"#cf1322"},prefix:l.a.createElement(H.a,null),suffix:"Ips"}),l.a.createElement($.a,{title:"Scanning",value:E.length,precision:0,prefix:l.a.createElement(J.a,null),suffix:"Ips"})))),l.a.createElement("div",{className:"toplog"}),l.a.createElement("div",{className:"info"},l.a.createElement(O.a,{defaultActiveKey:"1",onChange:function(e){console.log(e)}},l.a.createElement(Q,{tab:"Good",key:"1"},l.a.createElement(M,{data:a})),l.a.createElement(Q,{tab:"Bad",key:"2"},l.a.createElement(M,{data:s})),l.a.createElement(Q,{tab:"Processing",key:"3"},l.a.createElement(q,{data:E}))))))};var ee=function(e){return 3==e.content?l.a.createElement(_,null):l.a.createElement(F,null)},te=(d.a.Header,d.a.Footer,d.a.Sider),ae=d.a.Content,ne=o.a.SubMenu;var le=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement(d.a,null,l.a.createElement(te,null,l.a.createElement(o.a,{onClick:function(e){console.log("click ",e),r(e.key)},style:{width:200,height:"100vh"},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline"},l.a.createElement(ne,{key:"sub1",title:l.a.createElement("span",null,l.a.createElement(s.a,null),l.a.createElement("span",null,"Test IPS"))},l.a.createElement(o.a.ItemGroup,{key:"g1",title:"Single IPs"},l.a.createElement(o.a.Item,{key:"1"},"Complete Test")),l.a.createElement(o.a.ItemGroup,{key:"g2",title:"Batch IPs"},l.a.createElement(o.a.Item,{key:"3"},"Batch Test"))),l.a.createElement(ne,{key:"sub2",icon:l.a.createElement(m.a,null),title:"Navigation Two"},l.a.createElement(o.a.Item,{key:"5"},"Option 5"),l.a.createElement(o.a.Item,{key:"6"},"Option 6"),l.a.createElement(ne,{key:"sub3",title:"Submenu"},l.a.createElement(o.a.Item,{key:"7"},"Option 7"),l.a.createElement(o.a.Item,{key:"8"},"Option 8"))),l.a.createElement(ne,{key:"sub4",title:l.a.createElement("span",null,l.a.createElement(u.a,null),l.a.createElement("span",null,"Settings"))},l.a.createElement(o.a.Item,{key:"9"},"Cloud"),l.a.createElement(o.a.Item,{key:"10"},"Module Preferences")))),l.a.createElement(ae,null,l.a.createElement(ee,{content:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.fcc2b93c.chunk.js.map