"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1306],{6067:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=o(3117),r=(o(7294),o(3905));const s={title:"Review Workflows",slug:"/settings/review-workflows",description:"Guide for review workflows in settings.",tags:["settings","review-workflows"]},a=void 0,i={unversionedId:"docs/core/admin/settings/review-workflows",id:"docs/core/admin/settings/review-workflows",title:"Review Workflows",description:"Guide for review workflows in settings.",source:"@site/docs/docs/01-core/admin/03-settings/01-review-workflows.mdx",sourceDirName:"docs/01-core/admin/03-settings",slug:"/settings/review-workflows",permalink:"/settings/review-workflows",draft:!1,editUrl:"https://github.com/strapi/strapi/tree/main/docs/docs/docs/01-core/admin/03-settings/01-review-workflows.mdx",tags:[{label:"settings",permalink:"/tags/settings"},{label:"review-workflows",permalink:"/tags/review-workflows"}],version:"current",sidebarPosition:1,frontMatter:{title:"Review Workflows",slug:"/settings/review-workflows",description:"Guide for review workflows in settings.",tags:["settings","review-workflows"]},sidebar:"docs",previous:{title:"Introduction",permalink:"/settings/intro"},next:{title:"Introduction",permalink:"/docs/core/content-manager/intro"}},l={},d=[{value:"Summary",id:"summary",level:2},{value:"Form submission",id:"form-submission",level:3},{value:"Stage deletion",id:"stage-deletion",level:3},{value:"Hooks",id:"hooks",level:3},{value:"<code>useReviewWorkflows(workflowId?: number)</code>",id:"usereviewworkflowsworkflowid-number",level:4},{value:"Data shapes",id:"data-shapes",level:3},{value:"Endpoints",id:"endpoints",level:3},{value:"<code>GET /admin/review-workflows/workflows/</code>",id:"get-adminreview-workflowsworkflows",level:4},{value:"<code>PUT /admin/review-workflows/workflows/</code>",id:"put-adminreview-workflowsworkflows",level:4},{value:"Payload",id:"payload",level:5}],w={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},w,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The settings page for review workflows is where users can add and edit stages in any workflow. A stage is a step within\neach workflow. It is only ",(0,r.kt)("strong",{parentName:"p"},"accessible in enterprise mode")," and if the read permission ",(0,r.kt)("inlineCode",{parentName:"p"},"admin::review-workflows.read")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,"Upon mount the settings page injects itself into the global redux store under the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"settings_review-workflows"),". Redux is\nthen used for all state management updates on the settings page. ",(0,r.kt)("inlineCode",{parentName:"p"},"Formik")," is used to render and validate the list of stages. It\nis integrated with redux, so that all input components are controlled components."),(0,r.kt)("h3",{id:"form-submission"},"Form submission"),(0,r.kt)("p",null,"The form the wraps workflow stages submits all stages at once, because we expect the number of stages per workflow to be\nrather small. Because of this we can simply re-order stages by sending a different order. Every stage that sends a corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\nattribute will be re-ordered and not created. Stages without an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property will be created in the database on submission."),(0,r.kt)("h3",{id:"stage-deletion"},"Stage deletion"),(0,r.kt)("p",null,"In case a stage is deleted, all ",(0,r.kt)("strong",{parentName:"p"},"entities which are connected to that stage are moved to the previous stage"),". Because a stage deletion\nmight have big effects on the database, a confirmation is shown when a stage is up for deletion."),(0,r.kt)("p",null,'Changes are only applied if the user hits "Save". It is not possible to remove all stages from a workflow (neither in the UI nor the API).'),(0,r.kt)("h3",{id:"hooks"},"Hooks"),(0,r.kt)("h4",{id:"usereviewworkflowsworkflowid-number"},(0,r.kt)("inlineCode",{parentName:"h4"},"useReviewWorkflows(workflowId?: number)")),(0,r.kt)("p",null,"This hook allows to fetch either one (if ",(0,r.kt)("inlineCode",{parentName:"p"},"workflowId")," is passed) or all workflows at once. By default all stages are populated. The\nhooks returns a react-query result. This hook is used to fetch a workflow on the settings page and the content-manager edit view."),(0,r.kt)("p",null,"The API returns an ",(0,r.kt)("inlineCode",{parentName:"p"},"array")," of workflows. In the first iteration only one workflow is supported, but this is subject to change soon."),(0,r.kt)("h3",{id:"data-shapes"},"Data shapes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Stage {\n    id: int\n    name: string // max-length: 255 characters\n    createdAt: Date\n    updatedAt: Date\n}\n\ntype Worklow {\n    id: int,\n    stages: Stage[]\n    createdAt: Date\n    updatedAt: Date\n}\n")),(0,r.kt)("h3",{id:"endpoints"},"Endpoints"),(0,r.kt)("h4",{id:"get-adminreview-workflowsworkflows"},(0,r.kt)("inlineCode",{parentName:"h4"},"GET /admin/review-workflows/workflows/")),(0,r.kt)("p",null,"Returns a list of all workflows. Stages can be populated using ",(0,r.kt)("inlineCode",{parentName:"p"},"?populate=stages"),"."),(0,r.kt)("h4",{id:"put-adminreview-workflowsworkflows"},(0,r.kt)("inlineCode",{parentName:"h4"},"PUT /admin/review-workflows/workflows/")),(0,r.kt)("p",null,"Update workflow stages."),(0,r.kt)("h5",{id:"payload"},"Payload"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  data: Stage[]\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": All stages need to be submitted. Stages without an ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," attribute will be created. The order of stages is persisted in the database."))}p.isMDXComponent=!0},3905:(e,t,o)=>{o.d(t,{Zo:()=>w,kt:()=>c});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},w=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,w=i(e,["components","mdxType","originalType","parentName"]),u=d(o),c=r,f=u["".concat(l,".").concat(c)]||u[c]||p[c]||s;return o?n.createElement(f,a(a({ref:t},w),{},{components:o})):n.createElement(f,a({ref:t},w))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<s;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);