"use strict";exports.id=6913,exports.ids=[6913],exports.modules={621:(e,i,t)=>{t.d(i,{Z:()=>n});var s=t(997),a=t(1664),r=t.n(a);function n(e){let{Img:i,Title:t,subTitle:a}=e,n={backgroundImage:`url(${i||"/images/breadcrumb/01.jpg"})`};return s.jsx("div",{className:"rts-bread-crumbarea-1 rts-section-gap bg_image",style:n,children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"row ",children:s.jsx("div",{className:"col-md-12",children:(0,s.jsxs)("div",{className:"breadcrumb-main-wrapper",children:[s.jsx("h1",{className:"title",children:t||"About Us"}),(0,s.jsxs)("div",{className:"pagination-wrapper",children:[s.jsx(r(),{href:"/",children:"Home"}),s.jsx("i",{className:"fa-regular fa-chevron-right"}),s.jsx(r(),{href:"#",className:"active",children:a||"About Us"})]})]})})})})})}},5026:(e,i,t)=>{t.d(i,{Z:()=>r});var s=t(997),a=t(6689);let r=e=>{let{scrollClassName:i}=e,[t,r]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=()=>{window.pageYOffset>200?r(!0):r(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),s.jsx(s.Fragment,{children:t&&s.jsx("div",{className:`${i||"progress-wrap"} ${t?"active-progress":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:s.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:s.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})})}},6913:(e,i,t)=>{t.r(i),t.d(i,{default:()=>c});var s=t(997),a=t(621),r=t(5026),n=t(5675),o=t.n(n),m=t(1664),d=t.n(m);function g(e){let{meetingClass:i,Slug:t,Img:a,Title:r,meetingDate:n,meetingTime:m,meetingLInk:g,imgWidth:l,imgHeight:h}=e;return(0,s.jsxs)("div",{className:i||"single-zoom-meeting-area",children:[s.jsx(d(),{href:`/meeting/${t||"details"}`,className:"thumbnail",children:s.jsx(o(),{src:a||"/images/meeting/01.jpg",alt:"meetings",width:l||400,height:h||240})}),(0,s.jsxs)("div",{className:"inner-content",children:[(0,s.jsxs)("div",{className:"head",children:[(0,s.jsxs)("div",{className:"single",children:[s.jsx("i",{className:"far fa-calendar"}),s.jsx("span",{children:n||"December 26, 2023"})]}),(0,s.jsxs)("div",{className:"single",children:[s.jsx("i",{className:"fa-light fa-clock"}),s.jsx("span",{children:m||"10:30 am"})]})]}),s.jsx(d(),{href:`/meeting/${t||"details"}`,children:s.jsx("h5",{className:"title",children:r||"Insights from Industry Experts"})}),(0,s.jsxs)("div",{className:"bottom",children:[(0,s.jsxs)("div",{className:"left",children:[s.jsx(o(),{src:"/images/zoom/01.png",width:"30",height:"30",alt:"left"}),s.jsx("span",{children:"Meeting ID:"})]}),s.jsx("a",{href:`zoom.com/join?${g}`,target:"_blank",children:g||"512475523222"})]})]})]})}var l=t(6159);function h(){return s.jsx("div",{className:"rts-zoom-meeting-area rts-section-gapTop",children:s.jsx("div",{className:"container pb_md--100 pb_sm--80",children:s.jsx("div",{className:"row g-5",children:l.map(e=>s.jsx("div",{className:"col-lg-4 col-md-6 col-sm-6 col-12",children:s.jsx(g,{Slug:e.slug,Img:e.img,Title:e.title,Date:e.date,Time:e.time,Link:e.link})})).slice(0,6)})})})}function c(){return(0,s.jsxs)("main",{children:[s.jsx(a.Z,{Title:"Meeting",subTitle:"Zoom"}),s.jsx(h,{}),s.jsx(r.Z,{})]})}},6159:e=>{e.exports=JSON.parse('[{"id":1,"slug":"insight-industry-expert","img":"/images/zoom/01.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 12, 2024","time":"10:30 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"512475523222","host":"Adam Smith","categories":"Strategies","title":"Insights from Industry Experts","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":2,"slug":"tips-for-confident-communication","img":"/images/zoom/02.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 07, 2024","time":"09:30 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"432175523222","host":"Adam Smith","categories":"Strategies","title":"Tips for Confident Communication","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":3,"slug":"from-idea-to-business-plan","img":"/images/zoom/03.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 14, 2024","time":"11:00 am","duration":"45 minutes","timezone":"Atlantic/Azores","link":"712475523222","host":"Adam Smith","categories":"Strategies","title":"From Idea to Business Plan","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":4,"slug":"an-introductory-guide","img":"/images/zoom/04.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 26, 2024","time":"09:45 am","duration":"45 minutes","timezone":"Atlantic/Azores","link":"212475523222","host":"Adam Smith","categories":"Strategies","title":"An Introductory Guide","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":5,"slug":"building-a-greener-future","img":"/images/zoom/05.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 22, 2024","time":"04:30 pm","duration":"40 minutes","timezone":"Atlantic/Azores","link":"312475523222","host":"Adam Smith","categories":"Strategies","title":"Building a Greener Future","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":6,"slug":"strategies-for-success-in-algebra","img":"/images/zoom/06.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 29, 2024","time":"11:00 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"912475523222","host":"Adam Smith","categories":"Strategies","title":"Strategies for Success in Algebra","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":7,"slug":"insight-industry-expert","img":"/images/zoom/01.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 26, 2024","time":"10:30 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"512475523222","host":"Adam Smith","categories":"Strategies","title":"Insights from Industry Experts","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":8,"slug":"insight-industry-expert","img":"/images/zoom/01.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 26, 2024","time":"10:30 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"512475523222","host":"Adam Smith","categories":"Strategies","title":"Insights from Industry Experts","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":9,"slug":"insight-industry-expert","img":"/images/zoom/01.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 26, 2024","time":"10:30 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"512475523222","host":"Adam Smith","categories":"Strategies","title":"Insights from Industry Experts","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240},{"id":10,"slug":"insight-industry-expert","img":"/images/zoom/01.jpg","detailsImg":"/images/zoom/07.jpg","date":"December 26, 2024","time":"10:30 am","duration":"30 minutes","timezone":"Atlantic/Azores","link":"512475523222","host":"Adam Smith","categories":"Strategies","title":"Insights from Industry Experts","description":"Join us for a day of insightful talks, interactive workshops, and networking opportunities with industry experts and thought leaders.","imgWidth":400,"imgHeight":240}]')}};