(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,o=window.React,a=window.wp.i18n,n=window.wp.data,r=window.wp.coreData,l=window.wp.blockEditor,s=window.wp.components,i=window.wp.serverSideRender;var p=e.n(i);const c=JSON.parse('{"UU":"sitemap/sitemap-block"}');(0,t.registerBlockType)(c.UU,{edit:function({attributes:e,setAttributes:t}){const{postTypes:i,showHeadings:c}=e,w=(0,n.useSelect)((e=>e(r.store).getPostTypes({per_page:-1})),[]);var d=Array.isArray(w)?w.filter((e=>1==e.viewable)).map((e=>({label:e.labels.singular_name,value:e.slug}))):w;return(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(s.PanelBody,{title:(0,a.__)("Sitemap Settings","sitemap")},(0,o.createElement)(s.ToggleControl,{checked:!!c,label:(0,a.__)("Show post-type headings?","sitemap"),onChange:()=>t({showHeadings:!c})}),(0,o.createElement)(s.SelectControl,{multiple:!0,label:"Select post types to include",value:i||"",onChange:e=>{t({postTypes:e})},options:d,__nextHasNoMarginBottom:!0}))),(0,o.createElement)("div",{...(0,l.useBlockProps)()},(0,o.createElement)(p(),{block:"sitemap/sitemap-block",attributes:e})))}})})();