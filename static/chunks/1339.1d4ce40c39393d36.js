(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1339],{51339:function(e,a,i){"use strict";i.r(a),i.d(a,{default:function(){return p}});var t=i(85893),s=i(59183),n=i(25675),r=i.n(n),l=i(41664),o=i.n(l),u=i(67294),c=i(11358),d=i.n(c);function p(){let[e,a]=(0,u.useState)(null),[i,n]=(0,u.useState)(!1),[l,c]=(0,u.useState)(s.length),[p,m]=(0,u.useState)(1),[g,v]=(0,u.useState)(Math.ceil(l/8)),[b,h]=(0,u.useState)(0),[f,x]=(0,u.useState)(8),[C,y]=(0,u.useState)(Date.now()),[N,j]=(0,u.useState)(0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"announcements-wrapper-dashed",children:[(0,t.jsxs)("div",{className:"top-announcement-wrapper",children:[(0,t.jsxs)("div",{className:"left-wrapper",children:[(0,t.jsx)("div",{className:"icon",children:(0,t.jsx)(r(),{src:"/images/dashboard/announcement/01.png",width:60,height:60,alt:"announcement"})}),(0,t.jsxs)("div",{className:"information",children:[(0,t.jsx)("span",{children:"Create Announcement"}),(0,t.jsx)("p",{children:"Notify all students of your course"})]})]}),(0,t.jsx)("div",{className:"right",children:(0,t.jsx)("button",{type:"button",className:"rts-btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal",onClick:()=>{n(!0)},children:"Add New Announcement"})})]}),(0,t.jsxs)("div",{className:"course-short-by-date-wrapper",children:[(0,t.jsxs)("div",{className:"single-course-filter",children:[(0,t.jsx)("span",{children:"Course"}),(0,t.jsxs)("select",{className:"nice-select",name:"price",children:[(0,t.jsx)("option",{children:"Read (12)"}),(0,t.jsx)("option",{value:"asc",children:"Stars (30)"}),(0,t.jsx)("option",{value:"desc",children:"Comments(42)"}),(0,t.jsx)("option",{value:"pop",children:"Popularity (20)"}),(0,t.jsx)("option",{value:"low",children:"Questions & Ans (10)"}),(0,t.jsx)("option",{value:"high",children:"Stars (52)"})]})]}),(0,t.jsxs)("div",{className:"single-course-filter short-by",children:[(0,t.jsx)("span",{children:"Course"}),(0,t.jsxs)("select",{className:"nice-select",name:"price",children:[(0,t.jsx)("option",{children:"Read (12)"}),(0,t.jsx)("option",{value:"asc",children:"Stars (30)"}),(0,t.jsx)("option",{value:"desc",children:"Comments(42)"}),(0,t.jsx)("option",{value:"pop",children:"Popularity (20)"}),(0,t.jsx)("option",{value:"low",children:"Questions & Ans (10)"}),(0,t.jsx)("option",{value:"high",children:"Stars (52)"})]})]}),(0,t.jsxs)("div",{className:"single-course-filter short-by",children:[(0,t.jsx)("span",{children:"Date"}),(0,t.jsxs)("div",{className:"date-picker-area",children:[(0,t.jsx)("input",{placeholder:"Select your date",type:"date",name:"checkIn",id:"datepicker",className:"calendar"}),(0,t.jsx)("i",{className:"far fa-calendar-alt"})]})]})]}),(0,t.jsxs)("div",{className:"rts-reviewd-area-dashed table-responsive",children:[(0,t.jsxs)("table",{className:"table-reviews quiz announcement",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Date"}),(0,t.jsx)("th",{children:"Announcements"})]})}),(0,t.jsx)("tbody",{children:s.map((i,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"information-quiz",children:[(0,t.jsx)("span",{children:i.date}),(0,t.jsx)("p",{className:"quiz",children:i.time})]})}),(0,t.jsxs)("td",{className:"announcement-1",children:[(0,t.jsxs)("div",{className:"left",children:[(0,t.jsx)("p",{children:i.title}),(0,t.jsx)("span",{children:i.topic})]}),(0,t.jsxs)("div",{className:"right",children:[(0,t.jsx)(o(),{href:"announcements/".concat(i.slug||"details"),className:"rts-btn btn-primary",children:"Details"}),(0,t.jsx)("i",{className:"fa-regular fa-ellipsis-vertical",onClick:()=>{var e;return e=i.id,void a(a=>a===e?null:e)}}),e===i.id&&(0,t.jsxs)("ul",{className:"action-dropdown",children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>{console.log("Edit Clicked",i.id)},children:"Edit"})}),(0,t.jsx)("li",{children:(0,t.jsx)("button",{onClick:()=>{console.log("Delete Clicked",i.id)},children:"Delete"})})]})]})]})]},s)).slice(b,f)})]}),(0,t.jsxs)("div",{className:"pagination-full-width",children:[(0,t.jsxs)("span",{children:["Page ",p," of ",g]}),(0,t.jsx)("div",{className:"pagination",children:(0,t.jsx)(d(),{breakLabel:"...",onPageChange:e=>{let a=e.selected+1;m(a),h(8*a-8),x(8*a)},nextLabel:(0,t.jsx)("i",{className:"fa-solid fa-chevron-right"}),previousLabel:(0,t.jsx)("i",{className:"fa-solid fa-chevron-left"}),pageRangeDisplayed:3,forcePage:N,pageCount:Math.ceil(l/8),renderOnZeroPageCount:null},C)})]})]})]}),(0,t.jsx)("div",{className:"modal announcement fade ".concat(i?"show":""),id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-modal":"true",role:"dialog",children:(0,t.jsx)("div",{className:"modal-dialog",children:(0,t.jsxs)("div",{className:"modal-content",children:[(0,t.jsxs)("div",{className:"modal-header",children:[(0,t.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Create Announcement"}),(0,t.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:()=>{n(!1)}})]}),(0,t.jsx)("div",{className:"modal-body",children:(0,t.jsxs)("form",{action:"#",className:"modal-form",children:[(0,t.jsx)("div",{className:"nice-select-wrap",children:(0,t.jsxs)("select",{name:"price",children:[(0,t.jsx)("option",{children:"Select New Topic"}),(0,t.jsx)("option",{value:"asc",children:"Recently Update Web Design "}),(0,t.jsx)("option",{value:"desc",children:"Web Design Course"}),(0,t.jsx)("option",{value:"pop",children:"Update Web Design"}),(0,t.jsx)("option",{value:"low",children:"Recently Update Web"}),(0,t.jsx)("option",{value:"high",children:"Course: New Courses"})]})}),(0,t.jsxs)("div",{className:"single-input mt--20",children:[(0,t.jsx)("label",{htmlFor:"course",children:"Announcement Title"}),(0,t.jsx)("input",{id:"course",type:"text",placeholder:"Announcement title"})]}),(0,t.jsxs)("div",{className:"single-input",children:[(0,t.jsx)("label",{htmlFor:"message",children:"Summary"}),(0,t.jsx)("textarea",{id:"message",placeholder:"Summary..."})]})]})}),(0,t.jsx)("div",{className:"modal-footer",children:(0,t.jsx)("button",{type:"button",className:"rts-btn btn-primary",onClick:()=>{handleFormSubmit()},children:"Publish"})})]})})})]})}},11358:function(e,a,i){var t;t=e=>(()=>{var a={703:(e,a,i)=>{"use strict";var t=i(414);function s(){}function n(){}n.resetWarningCache=s,e.exports=function(){function e(e,a,i,s,n,r){if(r!==t){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function a(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:s};return i.PropTypes=i,i}},697:(e,a,i)=>{e.exports=i(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},98:a=>{"use strict";a.exports=e}},i={};function t(e){var s=i[e];if(void 0!==s)return s.exports;var n=i[e]={exports:{}};return a[e](n,n.exports,t),n.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var i in a)t.o(a,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:a[i]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};return(()=>{"use strict";t.r(s),t.d(s,{default:()=>f});var e=t(98),a=t.n(e),i=t(697),n=t.n(i);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}var l=function(e){var i=e.pageClassName,t=e.pageLinkClassName,s=e.page,n=e.selected,l=e.activeClassName,o=e.activeLinkClassName,u=e.getEventListener,c=e.pageSelectedHandler,d=e.href,p=e.extraAriaContext,m=e.pageLabelBuilder,g=e.rel,v=e.ariaLabel||"Page "+s+(p?" "+p:""),b=null;return n&&(b="page",v=e.ariaLabel||"Page "+s+" is your current page",i=void 0!==i?i+" "+l:l,void 0!==t?void 0!==o&&(t=t+" "+o):t=o),a().createElement("li",{className:i},a().createElement("a",r({rel:g,role:d?void 0:"button",className:t,href:d,tabIndex:n?"-1":"0","aria-label":v,"aria-current":b,onKeyPress:c},u(c)),m(s)))};function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}l.propTypes={pageSelectedHandler:n().func.isRequired,selected:n().bool.isRequired,pageClassName:n().string,pageLinkClassName:n().string,activeClassName:n().string,activeLinkClassName:n().string,extraAriaContext:n().string,href:n().string,ariaLabel:n().string,page:n().number.isRequired,getEventListener:n().func.isRequired,pageLabelBuilder:n().func.isRequired,rel:n().string};var u=function(e){var i=e.breakLabel,t=e.breakAriaLabel,s=e.breakClassName,n=e.breakLinkClassName,r=e.breakHandler,l=e.getEventListener;return a().createElement("li",{className:s||"break"},a().createElement("a",o({className:n,role:"button",tabIndex:"0","aria-label":t,onKeyPress:r},l(r)),i))};function c(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null!=e?e:a}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var i=arguments[a];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}).apply(this,arguments)}function m(e,a){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e})(e,a)}function g(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}u.propTypes={breakLabel:n().oneOfType([n().string,n().node]),breakAriaLabel:n().string,breakClassName:n().string,breakLinkClassName:n().string,breakHandler:n().func.isRequired,getEventListener:n().func.isRequired};var h=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),a&&m(e,a)}(n,e);var i,t,s=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,a=v(n);return e=t?Reflect.construct(a,arguments,v(this).constructor):a.apply(this,arguments),function(e,a){if(a&&("object"===d(a)||"function"==typeof a))return a;if(void 0!==a)throw TypeError("Derived constructors may only return object or undefined");return g(e)}(this,e)});function n(e){var i,t;return function(e,a){if(!(e instanceof a))throw TypeError("Cannot call a class as a function")}(this,n),b(g(i=s.call(this,e)),"handlePreviousPage",function(e){var a=i.state.selected;i.handleClick(e,null,a>0?a-1:void 0,{isPrevious:!0})}),b(g(i),"handleNextPage",function(e){var a=i.state.selected,t=i.props.pageCount;i.handleClick(e,null,a<t-1?a+1:void 0,{isNext:!0})}),b(g(i),"handlePageSelected",function(e,a){if(i.state.selected===e)return i.callActiveCallback(e),void i.handleClick(a,null,void 0,{isActive:!0});i.handleClick(a,null,e)}),b(g(i),"handlePageChange",function(e){i.state.selected!==e&&(i.setState({selected:e}),i.callCallback(e))}),b(g(i),"getEventListener",function(e){return b({},i.props.eventListener,e)}),b(g(i),"handleClick",function(e,a,t){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=s.isPrevious,r=s.isNext,l=s.isBreak,o=s.isActive;e.preventDefault?e.preventDefault():e.returnValue=!1;var u=i.state.selected,c=i.props.onClick,d=t;if(c){var p=c({index:a,selected:u,nextSelectedPage:t,event:e,isPrevious:void 0!==n&&n,isNext:void 0!==r&&r,isBreak:void 0!==l&&l,isActive:void 0!==o&&o});if(!1===p)return;Number.isInteger(p)&&(d=p)}void 0!==d&&i.handlePageChange(d)}),b(g(i),"handleBreakClick",function(e,a){var t=i.state.selected;i.handleClick(a,e,t<e?i.getForwardJump():i.getBackwardJump(),{isBreak:!0})}),b(g(i),"callCallback",function(e){void 0!==i.props.onPageChange&&"function"==typeof i.props.onPageChange&&i.props.onPageChange({selected:e})}),b(g(i),"callActiveCallback",function(e){void 0!==i.props.onPageActive&&"function"==typeof i.props.onPageActive&&i.props.onPageActive({selected:e})}),b(g(i),"getElementPageRel",function(e){var a=i.state.selected,t=i.props,s=t.nextPageRel,n=t.prevPageRel,r=t.selectedPageRel;return a-1===e?n:a===e?r:a+1===e?s:void 0}),b(g(i),"pagination",function(){var e=[],t=i.props,s=t.pageRangeDisplayed,n=t.pageCount,r=t.marginPagesDisplayed,l=t.breakLabel,o=t.breakClassName,c=t.breakLinkClassName,d=t.breakAriaLabels,p=i.state.selected;if(n<=s)for(var m=0;m<n;m++)e.push(i.getPageElement(m));else{var g=s/2,v=s-g;p>n-s/2?g=s-(v=n-p):p<s/2&&(v=s-(g=p));var b,h,f=function(e){return i.getPageElement(e)},x=[];for(b=0;b<n;b++){var C=b+1;if(C<=r)x.push({type:"page",index:b,display:f(b)});else if(C>n-r)x.push({type:"page",index:b,display:f(b)});else if(b>=p-g&&b<=p+(0===p&&s>1?v-1:v))x.push({type:"page",index:b,display:f(b)});else if(l&&x.length>0&&x[x.length-1].display!==h&&(s>0||r>0)){var y=b<p?d.backward:d.forward;h=a().createElement(u,{key:b,breakAriaLabel:y,breakLabel:l,breakClassName:o,breakLinkClassName:c,breakHandler:i.handleBreakClick.bind(null,b),getEventListener:i.getEventListener}),x.push({type:"break",index:b,display:h})}}x.forEach(function(a,i){var t=a;"break"===a.type&&x[i-1]&&"page"===x[i-1].type&&x[i+1]&&"page"===x[i+1].type&&x[i+1].index-x[i-1].index<=2&&(t={type:"page",index:a.index,display:f(a.index)}),e.push(t.display)})}return e}),void 0!==e.initialPage&&void 0!==e.forcePage&&console.warn("(react-paginate): Both initialPage (".concat(e.initialPage,") and forcePage (").concat(e.forcePage,") props are provided, which is discouraged.")+" Use exclusively forcePage prop for a controlled component.\nSee https://reactjs.org/docs/forms.html#controlled-components"),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,i.state={selected:t},i}return i=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,i=e.disableInitialCallback,t=e.extraAriaContext,s=e.pageCount,n=e.forcePage;void 0===a||i||this.callCallback(a),t&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead."),Number.isInteger(s)||console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(s,"). Did you forget a Math.ceil()?")),void 0!==a&&a>s-1&&console.warn("(react-paginate): The initialPage prop provided is greater than the maximum page index from pageCount prop (".concat(a," > ").concat(s-1,").")),void 0!==n&&n>s-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(n," > ").concat(s-1,")."))}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&(this.props.forcePage>this.props.pageCount-1&&console.warn("(react-paginate): The forcePage prop provided is greater than the maximum page index from pageCount prop (".concat(this.props.forcePage," > ").concat(this.props.pageCount-1,").")),this.setState({selected:this.props.forcePage})),Number.isInteger(e.pageCount)&&!Number.isInteger(this.props.pageCount)&&console.warn("(react-paginate): The pageCount prop value provided is not an integer (".concat(this.props.pageCount,"). Did you forget a Math.ceil()?"))}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,i=a.pageCount,t=e+a.pageRangeDisplayed;return t>=i?i-1:t}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"getElementHref",value:function(e){var a=this.props,i=a.hrefBuilder,t=a.pageCount,s=a.hrefAllControls;if(i)return s||e>=0&&e<t?i(e+1,t,this.state.selected):void 0}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var i=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(i=i+" "+this.props.extraAriaContext),i}}},{key:"getPageElement",value:function(e){var i=this.state.selected,t=this.props,s=t.pageClassName,n=t.pageLinkClassName,r=t.activeClassName,o=t.activeLinkClassName,u=t.extraAriaContext,c=t.pageLabelBuilder;return a().createElement(l,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:i===e,rel:this.getElementPageRel(e),pageClassName:s,pageLinkClassName:n,activeClassName:r,activeLinkClassName:o,extraAriaContext:u,href:this.getElementHref(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,pageLabelBuilder:c,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props.renderOnZeroPageCount;if(0===this.props.pageCount&&void 0!==e)return e?e(this.props):e;var i=this.props,t=i.disabledClassName,s=i.disabledLinkClassName,n=i.pageCount,r=i.className,l=i.containerClassName,o=i.previousLabel,u=i.previousClassName,d=i.previousLinkClassName,m=i.previousAriaLabel,g=i.prevRel,v=i.nextLabel,b=i.nextClassName,h=i.nextLinkClassName,f=i.nextAriaLabel,x=i.nextRel,C=this.state.selected,y=0===C,N=C===n-1,j="".concat(c(u)).concat(y?" ".concat(c(t)):""),k="".concat(c(b)).concat(N?" ".concat(c(t)):""),P="".concat(c(d)).concat(y?" ".concat(c(s)):""),q="".concat(c(h)).concat(N?" ".concat(c(s)):"");return a().createElement("ul",{className:r||l,role:"navigation","aria-label":"Pagination"},a().createElement("li",{className:j},a().createElement("a",p({className:P,href:this.getElementHref(C-1),tabIndex:y?"-1":"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y?"true":"false","aria-label":m,rel:g},this.getEventListener(this.handlePreviousPage)),o)),this.pagination(),a().createElement("li",{className:k},a().createElement("a",p({className:q,href:this.getElementHref(C+1),tabIndex:N?"-1":"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":N?"true":"false","aria-label":f,rel:x},this.getEventListener(this.handleNextPage)),v)))}}],function(e,a){for(var i=0;i<a.length;i++){var t=a[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),n}(e.Component);b(h,"propTypes",{pageCount:n().number.isRequired,pageRangeDisplayed:n().number,marginPagesDisplayed:n().number,previousLabel:n().node,previousAriaLabel:n().string,prevPageRel:n().string,prevRel:n().string,nextLabel:n().node,nextAriaLabel:n().string,nextPageRel:n().string,nextRel:n().string,breakLabel:n().oneOfType([n().string,n().node]),breakAriaLabels:n().shape({forward:n().string,backward:n().string}),hrefBuilder:n().func,hrefAllControls:n().bool,onPageChange:n().func,onPageActive:n().func,onClick:n().func,initialPage:n().number,forcePage:n().number,disableInitialCallback:n().bool,containerClassName:n().string,className:n().string,pageClassName:n().string,pageLinkClassName:n().string,pageLabelBuilder:n().func,activeClassName:n().string,activeLinkClassName:n().string,previousClassName:n().string,nextClassName:n().string,previousLinkClassName:n().string,nextLinkClassName:n().string,disabledClassName:n().string,disabledLinkClassName:n().string,breakClassName:n().string,breakLinkClassName:n().string,extraAriaContext:n().string,ariaLabelBuilder:n().func,eventListener:n().string,renderOnZeroPageCount:n().func,selectedPageRel:n().string}),b(h,"defaultProps",{pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevPageRel:"prev",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextPageRel:"next",nextRel:"next",breakLabel:"...",breakAriaLabels:{forward:"Jump forward",backward:"Jump backward"},disabledClassName:"disabled",disableInitialCallback:!1,pageLabelBuilder:function(e){return e},eventListener:"onClick",renderOnZeroPageCount:void 0,selectedPageRel:"canonical",hrefAllControls:!1});let f=h})(),s})(),e.exports=t(i(67294))},59183:function(e){"use strict";e.exports=JSON.parse('[{"id":1,"slug":"recent-design-course","topic":"Course: New Courses","title":"Recently Update Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"10:00 pm"},{"id":2,"slug":"web-design-course","topic":"Design: New Designs","title":"Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"09:00 pm"},{"id":3,"slug":"marketing-design-course","topic":"Marketing: New Marketing","title":"Update Web Design","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"09:30 pm"},{"id":4,"slug":"recent-web-course","topic":"Course: New Courses","title":"Recently Update Web","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"08:30 pm"},{"id":5,"slug":"update-design-course","topic":"Design: New Designs","title":"Web: Update Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"09:00 pm"},{"id":6,"slug":"recent-web-design","topic":"Course: New Courses","title":"Recently Update Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"09:15 pm"},{"id":7,"slug":"update-web-course","topic":"Course: New Courses","title":"Recently Update Web","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"08:20 pm"},{"id":8,"slug":"recent-web-design-course","topic":"Course: New Courses","title":"Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"10:00 pm"},{"id":9,"slug":"update-web-design-course","topic":"Course: New Courses","title":"Update Web Design","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"10:30 pm"},{"id":10,"slug":"recent-update-design-course","topic":"Course: New Courses","title":"Recently Update Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"08:30 pm"},{"id":11,"slug":"recent-web-design-course","topic":"Course: New Courses","title":"Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"09:00 pm"},{"id":12,"slug":"recent-web-design-course","topic":"Course: New Courses","title":"Recently Update Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","date":"November 28, 2023","time":"10:30 pm"}]')}}]);