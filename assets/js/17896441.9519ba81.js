"use strict";(self.webpackChunkserenity_users_guide=self.webpackChunkserenity_users_guide||[]).push([[7918],{9362:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(7294),l=a(6010),r=a(3783),s=a(6742),o=a(4973);const i=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(2263),d=a(907),m=a(941);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:r}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,m.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:i}=(0,d.Jo)(r),u=null!=o?o:(p=i).docs.find((e=>e.id===p.mainDocId));var p;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:i.label,to:u.path,onClick:()=>s(i.name)})))}const E=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)};var g=a(1217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(6146),k=a(7682);const Z="lastUpdated_mt2f";function L(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(k.Z,e)))}function T(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function U(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:s,formattedLastUpdatedAt:o,lastUpdatedBy:i,tags:c}=a,d=c.length>0,u=!!(r||s||i);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(L,{tags:c}),u&&n.createElement(T,{editUrl:r,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:o})):n.createElement(n.Fragment,null)}var y=a(571);const C="tocCollapsible_aw-L",w="tocCollapsibleButton_zr6a",A="tocCollapsibleContent_0dom",M="tocCollapsibleExpanded_FSiv";function S(e){let{toc:t,className:a}=e;const{collapsed:r,toggleCollapsed:s}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(C,{[M]:!r},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w),onClick:s},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:A,collapsed:r},n.createElement(y.r,{toc:t})))}var B=a(6159);const x="docItemContainer_oiyr",F="docItemCol_zHA2",O="tocMobile_Tx6Y";function V(e){const{content:t,versionMetadata:a}=e,{metadata:s,frontMatter:o}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:h}=o,{description:v,title:p}=s,b=!u&&void 0===t.contentTitle,f=(0,r.Z)(),_=!h&&t.toc&&t.toc.length>0,N=_&&("desktop"===f||"ssr"===f);return n.createElement(n.Fragment,null,n.createElement(g.Z,{title:p,description:v,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[F]:!h})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:x},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),_&&n.createElement(S,{toc:t.toc,className:(0,l.Z)(m.kM.docs.docTocMobile,O)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},b&&n.createElement(B.N,null,p),n.createElement(t,null)),n.createElement(U,e)),n.createElement(i,{metadata:s}))),N&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,className:m.kM.docs.docTocDesktop}))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(4973),r=a(7462),s=a(6010);const o="iconEdit_mS5F",i=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(941);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(i,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),s=a(4973),o=a(941);const i="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:d}}=(0,o.LU)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,r.Z)("anchor","anchor__"+t,{[c]:d,[i]:!d}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},571:(e,t,a)=>{a.d(t,{r:()=>h,Z:()=>v});var n=a(7294),l=a(6010),r=a(941);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function o(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:null!=(l=a[a.indexOf(n)-1])?l:null;var l}return a[a.length-1]}function i(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=i();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),r=o({anchorTopOffset:a.current}),s=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,a])},d="tableOfContents_vrFS",m="table-of-contents__link",u={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function h(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(h,{isChild:!0,toc:e.children}))))):null}const v=function(e){let{toc:t}=e;return c(u),n.createElement("div",{className:(0,l.Z)(d,"thin-scrollbar")},n.createElement(h,{toc:t}))}},7211:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(6742);const s="tag_WK-t",o="tagRegular_LXbV",i="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,{[o]:!c,[i]:c})},a,c&&n.createElement("span",null,c))}},7682:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(4973),s=a(7211);const o="tags_NBRY",i="tag_F03v";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(o,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);