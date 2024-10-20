"use strict";exports.id=6040,exports.ids=[6040],exports.modules={6040:(e,i,s)=>{s.r(i),s.d(i,{default:()=>c});var a=s(997),t=s(4165),u=s(1664),l=s.n(u),n=s(6689),r=s(9700),o=s.n(r);function c(){let[e,i]=(0,n.useState)(t.length),[s,u]=(0,n.useState)(1),[r,c]=(0,n.useState)(Math.ceil(e/8)),[d,m]=(0,n.useState)(0),[p,v]=(0,n.useState)(8),[b,g]=(0,n.useState)(Date.now()),[h,q]=(0,n.useState)(0);return(0,a.jsxs)("div",{className:"announcements-wrapper-dashed rts-reviewd-area-dashed table-responsive",children:[a.jsx("h5",{className:"title",children:"Assignment"}),(0,a.jsxs)("div",{className:"course-short-by-date-wrapper",children:[(0,a.jsxs)("div",{className:"single-course-filter",children:[a.jsx("span",{children:"Course"}),(0,a.jsxs)("select",{className:"nice-select",name:"price",children:[a.jsx("option",{children:"Read (12)"}),a.jsx("option",{value:"asc",children:"Stars (30)"}),a.jsx("option",{value:"desc",children:"Comments(42)"}),a.jsx("option",{value:"pop",children:"Popularity (20)"}),a.jsx("option",{value:"low",children:"Questions & Ans (10)"}),a.jsx("option",{value:"high",children:"Stars (52)"})]})]}),(0,a.jsxs)("div",{className:"single-course-filter short-by",children:[a.jsx("span",{children:"Course"}),(0,a.jsxs)("select",{className:"nice-select",name:"price",children:[a.jsx("option",{children:"Read (12)"}),a.jsx("option",{value:"asc",children:"Stars (30)"}),a.jsx("option",{value:"desc",children:"Comments(42)"}),a.jsx("option",{value:"pop",children:"Popularity (20)"}),a.jsx("option",{value:"low",children:"Questions & Ans (10)"}),a.jsx("option",{value:"high",children:"Stars (52)"})]})]}),(0,a.jsxs)("div",{className:"single-course-filter short-by",children:[a.jsx("span",{children:"Date"}),(0,a.jsxs)("div",{className:"date-picker-area",children:[a.jsx("input",{placeholder:"Select your date",type:"date",name:"checkIn",id:"datepicker",className:"calendar"}),a.jsx("i",{className:"far fa-calendar-alt"})]})]})]}),(0,a.jsxs)("table",{className:"table-reviews quiz mt--30",children:[a.jsx("thead",{children:(0,a.jsxs)("tr",{children:[a.jsx("th",{children:"Assignment Name"}),a.jsx("th",{children:"Total Marks"}),a.jsx("th",{children:"Total Submit"})]})}),a.jsx("tbody",{children:t.map((e,i)=>(0,a.jsxs)("tr",{children:[a.jsx("td",{children:(0,a.jsxs)("div",{className:"information-quiz",children:[a.jsx("p",{className:"quiz",children:e.title}),(0,a.jsxs)("p",{children:["Course: ",a.jsx("span",{children:e.topic})]})]})}),a.jsx("td",{children:a.jsx("span",{className:"questions",children:e.marks})}),a.jsx("td",{children:(0,a.jsxs)("div",{className:"betweena-area-assignment",children:[a.jsx("span",{className:"marks",children:e.submit}),a.jsx(l(),{href:`assignments/${e.slug||"details"}`,className:"rts-btn btn-border",children:"Details"})]})})]},i)).slice(d,p)})]}),(0,a.jsxs)("div",{className:"pagination-full-width",children:[(0,a.jsxs)("span",{children:["Page ",s," of ",r]}),a.jsx("div",{className:"pagination",children:a.jsx(o(),{breakLabel:"...",onPageChange:e=>{let i=e.selected+1;u(i),m(8*i-8),v(8*i)},nextLabel:a.jsx("i",{className:"fa-solid fa-chevron-right"}),previousLabel:a.jsx("i",{className:"fa-solid fa-chevron-left"}),pageRangeDisplayed:3,forcePage:h,pageCount:Math.ceil(e/8),renderOnZeroPageCount:null},b)})]})]})}},4165:e=>{e.exports=JSON.parse('[{"id":1,"slug":"recent-design-course","topic":"New Courses","title":"Recently Update Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":2,"slug":"web-design-course","topic":"New Designs","title":"Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":3,"slug":"marketing-design-course","topic":"Marketing: New Marketing","title":"Update Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":4,"slug":"recent-web-course","topic":"New Courses","title":"Recently Update Web Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":5,"slug":"update-design-course","topic":"New Designs","title":"Web: Update Web Design Course","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":6,"slug":"recent-web-design","topic":"New Courses","title":"Recently Update Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":7,"slug":"update-web-course","topic":"New Courses","title":"Recently Update Web Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":8,"slug":"recent-web-design-course","topic":"New Courses","title":"Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":9,"slug":"update-web-design-course","topic":"New Courses","title":"Update Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":10,"slug":"recent-update-design-course","topic":"New Courses","title":"Recently Update Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":11,"slug":"recent-web-design-course","topic":"New Courses","title":"Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"},{"id":12,"slug":"recent-web-design-course","topic":"New Courses","title":"Recently Update Web Design Assignment","description":"Onubia semper vel donec torquent fusce mauris felis aptent lacinia nisl, lectus himenaeos euismod molestie iaculis interdum in laoreet condimentum dictum, quisque quam risus sollicitudin gravida ut odio per a et. Gravida maecenas lobortis suscipit mus sociosqu convallis, mollis vestibulum donec aliquam risus sapien ridiculus, nulla sollicitudin eget in venenatis. Tortor montes platea iaculis posuere per mauris, eros porta blandit curabitur ullamcorper varius","marks":"6","submit":"9"}]')}};