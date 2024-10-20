"use strict";exports.id=2854,exports.ids=[2854],exports.modules={1336:(s,a,e)=>{e.d(a,{Z:()=>d});var i=e(997),r=e(5675),l=e.n(r),c=e(1664),n=e.n(c);function d(s){let{courseClass:a,Slug:e,Img:r,Title:c,Category:d,ratingCount:t,lessonCount:h,studentCount:o,Author:m,prevPrice:x,Price:j,imgWidth:f,imgHeight:g,type:u}=s;return(0,i.jsxs)("div",{className:a||"rts-single-course",children:[i.jsx(n(),{href:`/course/${e||"details"}`,className:"thumbnail",children:i.jsx(l(),{src:r||"/images/course/01.jpg",width:f||290,height:g||210,alt:"course"})}),i.jsx("div",{className:"save-icon","data-bs-toggle":"modal","data-bs-target":"#exampleModal-login",children:i.jsx("i",{className:"fa-sharp fa-light fa-bookmark"})}),i.jsx("div",{className:"tags-area-wrapper",children:i.jsx("div",{className:"single-tag",children:i.jsx("span",{children:d||"Web Development"})})}),(0,i.jsxs)("div",{className:"lesson-studente",children:[(0,i.jsxs)("div",{className:"lesson",children:[i.jsx("i",{className:"far fa-calendar-alt"}),(0,i.jsxs)("span",{children:[h||"25"," Lessons"]})]}),(0,i.jsxs)("div",{className:"lesson",children:[i.jsx("i",{className:"fa-light fa-user-group"}),(0,i.jsxs)("span",{children:[o||"54"," Students"]})]})]}),i.jsx(n(),{href:`/course/${e||"details"}`,children:i.jsx("h5",{className:"title",children:c||"The Complete Web Developer in 2023: Zero to Mastery"})}),i.jsx("p",{className:"teacher",children:m||"Dr. Angela Yu"}),(0,i.jsxs)("div",{className:"rating-and-price",children:[(0,i.jsxs)("div",{className:"rating-area",children:[i.jsx("span",{children:t||"4.5"}),i.jsx("div",{className:"stars",children:(0,i.jsxs)("ul",{children:[i.jsx("li",{children:i.jsx("i",{className:"fa-sharp fa-solid fa-star"})}),i.jsx("li",{children:i.jsx("i",{className:"fa-sharp fa-solid fa-star"})}),i.jsx("li",{children:i.jsx("i",{className:"fa-sharp fa-solid fa-star"})}),i.jsx("li",{children:i.jsx("i",{className:"fa-sharp fa-solid fa-star"})}),i.jsx("li",{children:i.jsx("i",{className:"fa-sharp fa-regular fa-star"})})]})})]}),(0,i.jsxs)("div",{className:"price-area",children:["dashboard"!==u&&(0,i.jsxs)("div",{className:"not price",children:["$",x||"79.99"]}),(0,i.jsxs)("div",{className:"price",children:["$",j||"79.99"]})]})]})]})}},5026:(s,a,e)=>{e.d(a,{Z:()=>l});var i=e(997),r=e(6689);let l=s=>{let{scrollClassName:a}=s,[e,l]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let s=()=>{window.pageYOffset>200?l(!0):l(!1)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),i.jsx(i.Fragment,{children:e&&i.jsx("div",{className:`${a||"progress-wrap"} ${e?"active-progress":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:i.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:i.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})})}},2854:(s,a,e)=>{e.r(a),e.d(a,{default:()=>x});var i=e(997),r=e(5026),l=e(1336),c=e(85),n=e(2203),d=e(5675),t=e.n(d),h=e(1664),o=e.n(h);function m({item:s}){s||(s=n[0]);let{img:a,name:e,position:r,biography:d,studentCount:h,lectureCount:m,ratingCount:x}=s;return(0,i.jsxs)(i.Fragment,{children:[i.jsx("div",{className:"dashboard-banner-area-wrapper",children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row",children:i.jsx("div",{className:"col-lg-12",children:(0,i.jsxs)("div",{className:"dashboard-banner-area-start bg_image",children:[(0,i.jsxs)("div",{className:"rating-area-banner-dashboard",children:[(0,i.jsxs)("div",{className:"stars",children:[i.jsx("span",{children:x||"4.5"}),i.jsx("i",{className:"fa-solid fa-star"}),i.jsx("i",{className:"fa-solid fa-star"}),i.jsx("i",{className:"fa-solid fa-star"}),i.jsx("i",{className:"fa-solid fa-star"}),i.jsx("i",{className:"fa-regular fa-star"})]}),i.jsx("p",{children:r||"Digital Marketing Instructor"}),(0,i.jsxs)(o(),{href:"/course/create",className:"create-btn",children:[i.jsx("i",{className:"fa-regular fa-circle-plus"})," Create a New Course"]})]}),(0,i.jsxs)("div",{className:"author-profile-image-and-name",children:[i.jsx("div",{className:"profile-pic",children:i.jsx(t(),{src:a||"/images/dashboard/01.png",width:"200",height:"200",alt:"dashboard"})}),(0,i.jsxs)("div",{className:"name-desig",children:[i.jsx("h1",{className:"title",children:e||"Jon Adam"}),(0,i.jsxs)("div",{className:"course-vedio",children:[(0,i.jsxs)("div",{className:"single",children:[i.jsx("i",{className:"fa-light fa-users"}),(0,i.jsxs)("span",{children:[h||"1350"," Students"]})]}),(0,i.jsxs)("div",{className:"single",children:[i.jsx("i",{className:"fa-regular fa-video"}),(0,i.jsxs)("span",{children:[m||"1350"," Lectures"]})]})]})]})]})]})})})})}),i.jsx("div",{className:"rts-instructor-profile rts-section-gapBottom pt--50",children:i.jsx("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[i.jsx("div",{className:"col-lg-3"}),i.jsx("div",{className:"col-lg-9",children:(0,i.jsxs)("div",{className:"instructor-profile-right-area-start",children:[(0,i.jsxs)("div",{className:"bio-graphyarea",children:[i.jsx("h5",{className:"title",children:"Biography"}),i.jsx("p",{className:"disc",children:d||"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language."}),i.jsx("div",{className:"social-area-dashboard-footer",children:(0,i.jsxs)("ul",{children:[i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"fa-brands fa-facebook-f"})})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"fa-brands fa-instagram"})})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"fa-brands fa-linkedin"})})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"fa-brands fa-pinterest"})})}),i.jsx("li",{children:i.jsx("a",{href:"#",children:i.jsx("i",{className:"fa-brands fa-youtube"})})})]})})]}),i.jsx("div",{className:"row g-5 mt--30",children:c.map((s,a)=>i.jsx("div",{className:"col-lg-4 col-md-6 col-sm-12 col-12",children:i.jsx(l.Z,{Slug:s.slug,Img:s.img,Category:s.category,lessonCount:s.lessonCount,studentCount:s.studentCount,Title:s.title,Author:s.authorName,ratingCount:s.ratingCount,prevPrice:s.prevPrice,Price:s.price,imgWidth:s.imgWidth,imgHeight:s.imgHeight})},a)).slice(0,6)})]})})]})})})]})}function x(s){return(0,i.jsxs)("main",{children:[i.jsx(m,{item:s.item}),i.jsx(r.Z,{})]})}}};