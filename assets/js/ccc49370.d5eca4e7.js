"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[249],{4029:(e,n,t)=>{t.r(n),t.d(n,{default:()=>p});t(6540);var i=t(4164),a=t(1003),s=t(7559),o=t(7131),l=t(6535),r=t(3435),c=t(1312),d=t(9022),u=t(4848);function m(e){const{nextItem:n,prevItem:t}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function g(){const{assets:e,metadata:n}=(0,o.e)(),{title:t,description:i,date:s,tags:l,authors:r,frontMatter:c}=n,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:t,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:s}),r.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:r.map((e=>e.url)).filter(Boolean).join(",")}),l.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:l.map((e=>e.label)).join(",")})]})}var h=t(3691),f=t(996);function v(e){let{sidebar:n,children:t}=e;const{metadata:i,toc:a}=(0,o.e)(),{nextItem:s,prevItem:c,frontMatter:d,unlisted:g}=i,{hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:x}=d;return(0,u.jsxs)(l.A,{sidebar:n,toc:!v&&a.length>0?(0,u.jsx)(h.A,{toc:a,minHeadingLevel:p,maxHeadingLevel:x}):void 0,children:[g&&(0,u.jsx)(f.A,{}),(0,u.jsx)(r.A,{children:t}),(s||c)&&(0,u.jsx)(m,{nextItem:s,prevItem:c})]})}function p(e){const n=e.content;return(0,u.jsx)(o.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,i.A)(s.G.wrapper.blogPages,s.G.page.blogPostPage),children:[(0,u.jsx)(g,{}),(0,u.jsx)(v,{sidebar:e.sidebar,children:(0,u.jsx)(n,{})})]})})}},3691:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(6540),a=t(4164),s=t(6342);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>r(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:o}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:o}),r=c(l,{anchorTopOffset:t.current}),d=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var m=t(8774),g=t(4848);function h(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,g.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,g.jsxs)("li",{children:[(0,g.jsx)(m.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,g.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function v(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const h=(0,s.p)(),v=c??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,x=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>l({toc:o(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:v,maxHeadingLevel:p});return u((0,i.useMemo)((()=>{if(a&&r)return{linkClassName:a,linkActiveClassName:r,minHeadingLevel:v,maxHeadingLevel:p}}),[a,r,v,p])),(0,g.jsx)(f,{toc:x,className:t,linkClassName:a,...m})}const p={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},x="table-of-contents__link toc-highlight",b="table-of-contents__link--active";function j(e){let{className:n,...t}=e;return(0,g.jsx)("div",{className:(0,a.A)(p.tableOfContents,"thin-scrollbar",n),children:(0,g.jsx)(v,{...t,linkClassName:x,linkActiveClassName:b})})}},996:(e,n,t)=>{t.d(n,{A:()=>g});t(6540);var i=t(4164),a=t(1312),s=t(5260),o=t(4848);function l(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,o.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,o.jsx)(s.A,{children:(0,o.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){let{className:n}=e;return(0,o.jsx)(u.A,{type:"caution",title:(0,o.jsx)(l,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,o.jsx)(r,{})})}function g(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)(m,{...e})]})}}}]);