"use strict";(self.webpackChunktony_vo_blog=self.webpackChunktony_vo_blog||[]).push([[678],{6558:function(e,t,l){l.r(t);var n=l(7294),r=l(1883),a=l(8771),o=l(8678),s=l(9357);t.default=e=>{var t;let{data:l,location:i}=e;const c=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",m=l.allMarkdownRemark.nodes;return 0===m.length?n.createElement(o.Z,{location:i,title:c},n.createElement(s.Z,{title:"All posts"}),n.createElement(a.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(o.Z,{location:i,title:c},n.createElement(s.Z,{title:"All posts"}),n.createElement(a.Z,null),n.createElement("ol",{style:{listStyle:"none"}},m.filter((e=>"draft"!==e.frontmatter.status)).map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h2",null,n.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("span",{itemProp:"headline"},t))),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-137bafc43fb95c27cc25.js.map