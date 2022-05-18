"use strict";(self.webpackChunkp2wdb_com=self.webpackChunkp2wdb_com||[]).push([[212],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),h=i,w=b["".concat(c,".").concat(h)]||b[h]||p[h]||a;return r?n.createElement(w,o(o({ref:t},u),{},{components:r})):n.createElement(w,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6195:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={sidebar_position:2},c="Circuit Relays",l={unversionedId:"local-back-end/circuit-relay",id:"local-back-end/circuit-relay",title:"Circuit Relays",description:"An IPFS Circuit Relay is an IPFS node that can help two other IPFS nodes communicate across the internet, when a firewall would otherwise block them from talking to one another.",source:"@site/docs/local-back-end/circuit-relay.md",sourceDirName:"local-back-end",slug:"/local-back-end/circuit-relay",permalink:"/p2wdb.com/docs/local-back-end/circuit-relay",editUrl:"https://github.com/Permissionless-Software-Foundation/p2wdb.com/tree/main/docs/local-back-end/circuit-relay.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Local Back End",permalink:"/p2wdb.com/docs/local-back-end/"},next:{title:"Global Back End",permalink:"/p2wdb.com/docs/global-back-end"}},u={},p=[{value:"Network Configuration",id:"network-configuration",level:2}],b={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},b,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"circuit-relays"},"Circuit Relays"),(0,a.kt)("p",null,"An ",(0,a.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/concepts/circuit-relay/"},"IPFS Circuit Relay")," is an IPFS node that can help two other IPFS nodes communicate across the internet, when a firewall would otherwise block them from talking to one another."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Circuit Relay",src:r(4798).Z,width:"164",height:"401"})),(0,a.kt)("p",null,"Circuit Relays are a critical piece in the censorship resistance, and are a core element in forming a mesh network."),(0,a.kt)("p",null,"In the Cash Stack, Circuit Relays are operated by running the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"},"ipfs-service-provider")," software. Requirements for successfully operating one are described in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/bounties/blob/master/bounties/active/circuit-relays.md"},"Circuit Relay Bounty"),". These are light-weight and inexpensive to operate, but they have specific requirements around their connection to the internet."),(0,a.kt)("h2",{id:"network-configuration"},"Network Configuration"),(0,a.kt)("p",null,"The core dependency of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Permissionless-Software-Foundation/ipfs-service-provider"},"ipfs-service-provider")," is the ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ipfs-coord"},"ipfs-coord")," library. ",(0,a.kt)("inlineCode",{parentName:"p"},"ipfs-coord")," controls the IPFS node and forms a mesh network with other nodes running PSF software."),(0,a.kt)("p",null,"All other PSF software that is based on IPFS will automatically find and connect to Circuit Relays, eliminating any complex setup. But creating a Circuit Relay requires a specific network configuration:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The PSF currently operates on a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ipfs/go-ipfs/blob/master/docs/experimental-features.md#private-networks"},(0,a.kt)("em",{parentName:"a"},"private")," IPFS network"),", which is setup using a ",(0,a.kt)("inlineCode",{parentName:"li"},"swarm.key")," file."),(0,a.kt)("li",{parentName:"ul"},"The Circuit Relay requires a public ipv4 or ipv6 address."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ENABLE_CIRCUIT_RELAY")," environment variable must be set to a value of 1"),(0,a.kt)("li",{parentName:"ul"},"In order to provide network access to browser-based IPFS nodes, the Circuit Relay must be available over secure websockets, which requires a registered domain name with an SSL certificate.")))}h.isMDXComponent=!0},4798:function(e,t){t.Z="data:image/png;base64,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"}}]);