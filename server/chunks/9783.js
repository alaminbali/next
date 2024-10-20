exports.id=9783,exports.ids=[9783],exports.modules={621:(e,i,s)=>{"use strict";s.d(i,{Z:()=>r});var a=s(997),n=s(1664),t=s.n(n);function r(e){let{Img:i,Title:s,subTitle:n}=e,r={backgroundImage:`url(${i||"/images/breadcrumb/01.jpg"})`};return a.jsx("div",{className:"rts-bread-crumbarea-1 rts-section-gap bg_image",style:r,children:a.jsx("div",{className:"container",children:a.jsx("div",{className:"row ",children:a.jsx("div",{className:"col-md-12",children:(0,a.jsxs)("div",{className:"breadcrumb-main-wrapper",children:[a.jsx("h1",{className:"title",children:s||"About Us"}),(0,a.jsxs)("div",{className:"pagination-wrapper",children:[a.jsx(t(),{href:"/",children:"Home"}),a.jsx("i",{className:"fa-regular fa-chevron-right"}),a.jsx(t(),{href:"#",className:"active",children:n||"About Us"})]})]})})})})})}},4800:(e,i,s)=>{"use strict";s.d(i,{Z:()=>o});var a=s(997),n=s(5675),t=s.n(n),r=s(6689),c=s(609),l=s.n(c);function o(){let[e,i]=(0,r.useState)(!0),s=[{countNum:65972,countTitle:"Students Enrolled",countIcon:"/images/fun-facts/icon/01.svg"},{countNum:5321,countTitle:"Completed Course",countIcon:"/images/fun-facts/icon/02.svg"},{countNum:44239,countTitle:"Students Learner",countIcon:"/images/fun-facts/icon/03.svg"},{countNum:75992,countTitle:"Students Community",countIcon:"/images/fun-facts/icon/04.svg"}];return a.jsx("div",{className:"fun-facts-area-4 pt--100",children:a.jsx("div",{className:"container",children:s&&a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-lg-12",children:a.jsx("div",{className:"fun-facts-main-wrapper-1 style-two",children:s.map((s,n)=>(0,a.jsxs)("div",{className:"single-fun-facts",children:[a.jsx("div",{className:"icon",children:a.jsx(t(),{src:s.countIcon,alt:"icon",width:"40",height:"40"})}),a.jsx("h5",{className:"title",children:a.jsx("span",{className:"counter",children:a.jsx(l(),{start:e?0:s.countNum,end:s.countNum,duration:10,onEnd:()=>i(!1)})})}),a.jsx("span",{className:"enr",children:s.countTitle})]},n))})})})})})}},5558:(e,i,s)=>{"use strict";s.d(i,{Z:()=>l});var a=s(997),n=s(5675),t=s.n(n),r=s(1664),c=s.n(r);function l(e){let{instructorClass:i,Slug:s,Img:n,Title:r,Designation:l,imgWidth:o,imgHeight:d}=e;return a.jsx("div",{className:i||"single-instructor",children:(0,a.jsxs)("div",{className:"single-instructor",children:[(0,a.jsxs)("div",{className:"thumbnail-img",children:[a.jsx(c(),{href:`/instructor/${s||"details"}`,className:"thumbnail",children:a.jsx(t(),{src:n||"/images/instructor/01.jpg",alt:"instructor",width:o||338,height:d||374})}),a.jsx("div",{className:"social-img-instructor",children:(0,a.jsxs)("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#",children:a.jsx("i",{className:"fa-sharp fa-light fa-share-nodes"})})}),a.jsx("li",{className:"bottom",children:a.jsx("a",{href:"#",children:a.jsx("i",{className:"fa-brands fa-skype"})})}),a.jsx("li",{className:"bottom",children:a.jsx("a",{href:"#",children:a.jsx("i",{className:"fa-brands fa-linkedin"})})}),a.jsx("li",{className:"bottom",children:a.jsx("a",{href:"#",children:a.jsx("i",{className:"fa-brands fa-facebook-f"})})})]})})]}),a.jsx(c(),{href:`/instructor/${s||"details"}`,children:a.jsx("h5",{className:"title",children:r||"Emma Elizabeth"})}),a.jsx("p",{children:l||"Assistant Teacher"})]})})}},5026:(e,i,s)=>{"use strict";s.d(i,{Z:()=>t});var a=s(997),n=s(6689);let t=e=>{let{scrollClassName:i}=e,[s,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{window.pageYOffset>200?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),a.jsx(a.Fragment,{children:s&&a.jsx("div",{className:`${i||"progress-wrap"} ${s?"active-progress":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:a.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:a.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})})}},2742:(e,i,s)=>{"use strict";s.d(i,{Z:()=>r});var a=s(997),n=s(5675),t=s.n(n);function r(e){let{testimonialClass:i,Img:s,Author:n,Position:r,Content:c,imgWidth:l,imgHeight:o,QuoteIcon:d}=e;return(0,a.jsxs)("div",{className:i||"single-testimonials-area-1",children:[(0,a.jsxs)("div",{className:"stars-area stars",children:[a.jsx("i",{className:"fa-solid fa-star"}),a.jsx("i",{className:"fa-solid fa-star"}),a.jsx("i",{className:"fa-solid fa-star"}),a.jsx("i",{className:"fa-solid fa-star"}),a.jsx("i",{className:"fa-regular fa-star"})]}),a.jsx("p",{className:"disc",children:c||"I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary."}),(0,a.jsxs)("div",{className:"feedback-author authore-area",children:[a.jsx(t(),{src:s||"/images/students-feedback/02.png",alt:"feedback",width:l||50,height:o||50}),(0,a.jsxs)("div",{className:"information author",children:[a.jsx("h5",{className:"title",children:n||"Emma Elizabeth"}),a.jsx("span",{children:r||"Assistant Teacher"})]})]}),d&&a.jsx("div",{className:"quote",children:a.jsx(t(),{src:d||"/images/students-feedback/19.png",width:"71",height:"56",alt:"feedback"})})]})}},312:(e,i,s)=>{"use strict";s.d(i,{Z:()=>l});var a=s(997),n=s(5675),t=s.n(n),r=s(1664),c=s.n(r);function l(){return a.jsx("div",{className:"about-area-start style-two",children:(0,a.jsxs)("div",{className:"container",children:[a.jsx("p",{className:"paragraph",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from characteristic words etc."}),(0,a.jsxs)("div",{className:"row align-items-center",children:[a.jsx("div",{className:"col-xl-6 col-lg-12",children:a.jsx("div",{className:"about-one-left-image",children:a.jsx("div",{className:"second-order",children:a.jsx(t(),{src:"/images/about/08.jpg",alt:"about",width:"1532",height:"828"})})})}),(0,a.jsxs)("div",{className:"col-xl-6 col-lg-12 pl--60 pl_lg--15 pl_md--10 pl_sm--10 pt_lg--50 pt_md--50 pt_sm--50",children:[a.jsx("div",{className:"title-area-left-style",children:a.jsx("h2",{className:"title",children:"Know Studyhub Empowering Learners Worldwide"})}),(0,a.jsxs)("div",{className:"about-inner-right-two",children:[(0,a.jsxs)("div",{className:"what-you-get",children:[(0,a.jsxs)("div",{className:"single-facilityes",children:[a.jsx("div",{className:"icon",children:a.jsx(t(),{src:"/images/about/icon/06.png",alt:"icon-image",width:"50",height:"50"})}),(0,a.jsxs)("div",{className:"information",children:[a.jsx("h5",{className:"title",children:"Wide Range "}),a.jsx("p",{children:"We are passionate education."})]})]}),(0,a.jsxs)("div",{className:"single-facilityes",children:[a.jsx("div",{className:"icon",children:a.jsx(t(),{src:"/images/about/icon/07.png",alt:"icon-image",width:"50",height:"50"})}),(0,a.jsxs)("div",{className:"information",children:[a.jsx("h5",{className:"title",children:"Expert Instructors"}),a.jsx("p",{children:"We are passionate about education"})]})]})]}),(0,a.jsxs)("div",{className:"author-area",children:[(0,a.jsxs)("div",{className:"single-author-and-info",children:[a.jsx(t(),{src:"/images/about/01.png",alt:"about",width:"50",height:"50"}),(0,a.jsxs)("div",{className:"information",children:[a.jsx("a",{href:"#",children:a.jsx("h6",{className:"title",children:"William James"})}),a.jsx("p",{className:"desig",children:"CEO, Studyhub Online Education"})]})]}),a.jsx(c(),{href:"about",className:"rts-btn btn-primary",children:"About Us"})]})]})]})]})]})})}},7691:(e,i,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(i,{Z:()=>u});var n=s(997),t=s(4800),r=s(312),c=s(5371),l=s(247),o=s(2816),d=s(5265),h=s(9350),m=e([c,d]);function u(){return(0,n.jsxs)(n.Fragment,{children:[n.jsx(r.Z,{}),n.jsx(c.Z,{}),n.jsx(l.Z,{}),n.jsx(d.Z,{}),n.jsx(h.Z,{}),n.jsx(t.Z,{}),n.jsx(o.Z,{})]})}[c,d]=m.then?(await m)():m,a()}catch(e){a(e)}})},5371:(e,i,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(i,{Z:()=>o});var n=s(997),t=s(5675),r=s.n(t),c=s(3015);s(7644);var l=e([c]);function o(){return n.jsx("div",{className:"brand-area-one ptb--100",children:n.jsx("div",{className:"container",children:n.jsx("div",{className:"row",children:n.jsx("div",{className:"col-lg-12",children:(0,n.jsxs)("div",{className:"brand-style-one ",children:[n.jsx("div",{className:"left-title",children:n.jsx("h6",{className:"title",children:"Trusted by:"})}),(0,n.jsxs)(c.Swiper,{slidesPerView:6,spaceBetween:30,centeredSlides:!1,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{1366:{slidesPerView:6,spaceBetween:20},1200:{slidesPerView:5},992:{slidesPerView:4},767:{slidesPerView:3},0:{slidesPerView:2}},children:[n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/08.svg",alt:"brand",width:"117",height:"87"})})},"1"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/09.svg",alt:"brand",width:"117",height:"87"})})},"2"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/10.svg",alt:"brand",width:"117",height:"87"})})},"3"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/11.svg",alt:"brand",width:"117",height:"87"})})},"4"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/12.svg",alt:"brand",width:"117",height:"87"})})},"5"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/13.svg",alt:"brand",width:"117",height:"87"})})},"6"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/10.svg",alt:"brand",width:"117",height:"87"})})},"7"),n.jsx(c.SwiperSlide,{children:n.jsx("div",{className:"brand-area",children:n.jsx(r(),{src:"/images/brand/11.svg",alt:"brand",width:"117",height:"87"})})},"8")]})]})})})})})}c=(l.then?(await l)():l)[0],a()}catch(e){a(e)}})},247:(e,i,s)=>{"use strict";s.d(i,{Z:()=>m});var a=s(997),n=s(5675),t=s.n(n),r=s(6689),c=s(4449),l=s.n(c);function o(){return(0,a.jsxs)("form",{action:"#",className:"registration",children:[(0,a.jsxs)("div",{className:"half-wrapper",children:[a.jsx("input",{type:"text",placeholder:"First Name",required:!0}),a.jsx("input",{type:"text",placeholder:"Last Name"})]}),(0,a.jsxs)("div",{className:"half-wrapper",children:[a.jsx("input",{type:"email",placeholder:"Email Address"}),a.jsx("input",{type:"text",placeholder:"Phone"})]}),a.jsx("input",{type:"text",placeholder:"Address"}),a.jsx("textarea",{placeholder:"Comment"}),a.jsx("button",{className:"rts-btn btn-primary",children:"Registration Now "})]})}let d=()=>a.jsx("span",{children:"Time's up!"}),h=({days:e,hours:i,minutes:s,seconds:n,completed:t})=>t?a.jsx(d,{}):(0,a.jsxs)("div",{className:"counter-remaining-area",id:"timer",children:[a.jsx("div",{className:"single-counter",children:a.jsx("div",{className:"inner",children:a.jsx("div",{className:"title",children:a.jsx("span",{id:"days",children:e})})})}),a.jsx("div",{className:"single-counter",children:a.jsx("div",{className:"inner",children:a.jsx("div",{className:"title",children:a.jsx("span",{id:"hours",children:i})})})}),a.jsx("div",{className:"single-counter",children:a.jsx("div",{className:"inner",children:a.jsx("div",{className:"title",children:a.jsx("span",{id:"minutes",children:s})})})}),a.jsx("div",{className:"single-counter",children:a.jsx("div",{className:"inner",children:a.jsx("div",{className:"title",children:a.jsx("span",{id:"seconds",children:n})})})})]});function m(){let[e,i]=(0,r.useState)(!1);return a.jsx("div",{className:"rts-fun-facts-area-3 bg_image rts-section-gap bg-dark-image",children:a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[a.jsx("div",{className:"col-lg-6",children:(0,a.jsxs)("div",{className:"title-area-left-style",children:[(0,a.jsxs)("div",{className:"pre-title",children:[a.jsx(t(),{src:"/images/banner/bulb-2.png",alt:"icon",width:"22",height:"22"}),a.jsx("span",{children:"Registration"})]}),(0,a.jsxs)("h2",{className:"title mb--30",children:["Register Your Account Get free ",a.jsx("br",{}),"access to 60000 online course",a.jsx(t(),{src:"/images/fun-facts/01.png",alt:"fun-facts",width:"174",height:"14"})]}),e&&a.jsx(l(),{date:new Date("2025-12-31T00:00:00"),renderer:h})]})}),a.jsx("div",{className:"col-lg-6 d-flex justify-content-end justify-content-sm-center mt_sm--50",children:(0,a.jsxs)("div",{className:"registration-area-right",children:[a.jsx("h4",{className:"title",children:"Fill Your Registration"}),a.jsx(o,{})]})})]})})})}},2816:(e,i,s)=>{"use strict";s.d(i,{Z:()=>d});var a=s(997),n=s(5558),t=s(2203),r=s(5675),c=s.n(r),l=s(1664),o=s.n(l);function d(){return a.jsx("div",{className:"instrustor-area rts-section-gap",children:(0,a.jsxs)("div",{className:"container pb--120",children:[a.jsx("div",{className:"row",children:a.jsx("div",{className:"col-lg-12",children:(0,a.jsxs)("div",{className:"title-between-area align-items-end",children:[(0,a.jsxs)("div",{className:"title-area-left-style",children:[(0,a.jsxs)("div",{className:"pre-title",children:[a.jsx(c(),{src:"/images/banner/bulb.png",alt:"icon",width:"44",height:"44"}),a.jsx("span",{children:"Instructor"})]}),a.jsx("h2",{className:"title",children:"Our Professional Instructor"}),a.jsx("p",{className:"post-title",children:"You'll find something to spark your curiosity and enhance"})]}),(0,a.jsxs)(o(),{href:"/instructor",className:"rts-btn btn-primary with-arrow",children:["View All Teacher ",a.jsx("i",{className:"fa-light fa-arrow-right"})]})]})})}),a.jsx("div",{className:"row g-5 mt--10",children:t.map((e,i)=>a.jsx("div",{className:"col-lg-3 col-md-6 col-sm-12 col-12",children:a.jsx(n.Z,{Slug:e.slug,Img:e.img,Name:e.name,Position:e.position,imgWidth:e.imgWidth,imgHeight:e.imgHeight})},i)).slice(0,4)})]})})}},5265:(e,i,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.d(i,{Z:()=>h});var n=s(997),t=s(707),r=s(3877),c=s(2184),l=s(3015),o=s(2742);s(7644),s(3039),s(5392);var d=e([r,c,l]);function h(){return n.jsx("div",{className:"rts-students-feedback-area rts-section-gap",children:(0,n.jsxs)("div",{className:"container pt--120 ptb_md--0 pt_sm--20",children:[n.jsx("div",{className:"row",children:n.jsx("div",{className:"col-lg-12",children:(0,n.jsxs)("div",{className:"section-title-w-style-center",children:[n.jsx("h2",{className:"title",children:"My Students Feedback"}),n.jsx("p",{children:"You'll find something to spark your curiosity and enhance"})]})})}),n.jsx("div",{className:"row mt--50",children:n.jsx("div",{className:"col-lg-12",children:n.jsx("div",{className:"swiper-feedback-wrapper-5",children:(0,n.jsxs)(l.Swiper,{slidesPerView:3,spaceBetween:30,centeredSlides:!1,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{clickable:!0},breakpoints:{1200:{slidesPerView:3},992:{slidesPerView:2},0:{slidesPerView:1}},className:"mySwiper-testimonials-1",children:[t.map((e,i)=>n.jsx(l.SwiperSlide,{children:n.jsx(o.Z,{Img:e.avatar,Avatar:e.avatar,Content:e.content,Author:e.author,Position:e.position,QuoteIcon:e.quoteIcon,imgWidth:"50",imgHeight:"50",testimonialClass:"single-students-feedback-5"})},i)).slice(3,7),n.jsx("div",{className:"swiper-button-next",children:n.jsx("i",{className:"fa-solid fa-chevron-right"})}),n.jsx("div",{className:"swiper-button-prev",children:n.jsx("i",{className:"fa-solid fa-chevron-left"})})]})})})})]})})}[r,c,l]=d.then?(await d)():d,r.default.use([c.Navigation,c.Pagination]),a()}catch(e){a(e)}})},9350:(e,i,s)=>{"use strict";s.d(i,{Z:()=>o});var a=s(997),n=s(5675),t=s.n(n),r=s(6689),c=s(9485),l=s.n(c);function o(){let[e,i]=(0,r.useState)(!1),s=()=>i(!e);return(0,a.jsxs)("div",{className:"rts-video-area",children:[a.jsx(l(),{channel:"youtube",isOpen:e,videoId:"FdrNFEbcsRs",onClose:()=>{s()}}),a.jsx("div",{className:"container",children:(0,a.jsxs)("div",{className:"thumbnail relative mb--30",children:[a.jsx(t(),{className:"w-100",src:"/images/fun-facts/03.jpg",width:"2880",height:"1200",alt:""}),a.jsx("div",{className:"vedio-icone",children:a.jsx("a",{className:"video-play-button play-video popup-video",href:"#",onClick:()=>{s()},children:a.jsx("span",{})})})]})})]})}},9783:(e,i,s)=>{"use strict";s.a(e,async(e,a)=>{try{s.r(i),s.d(i,{default:()=>o});var n=s(997),t=s(621),r=s(5026),c=s(7691),l=e([c]);function o(){return(0,n.jsxs)("main",{children:[n.jsx(t.Z,{Title:"About Two",subTitle:"About Us"}),n.jsx(c.Z,{}),n.jsx(r.Z,{})]})}c=(l.then?(await l)():l)[0],a()}catch(e){a(e)}})},3039:()=>{},5392:()=>{},7644:()=>{},2203:e=>{"use strict";e.exports=JSON.parse('[{"id":1,"slug":"dr-angela-yu","img":"/images/instructor/01.jpg","name":"Dr. Angela Yu","position":"Web Developer","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1094,"lectureCount":172,"ratingCount":4.5,"imgWidth":338,"imgHeight":374},{"id":2,"slug":"john-smith","img":"/images/instructor/02.jpg","name":"John Smith","position":"Data Scientist","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1653,"lectureCount":183,"ratingCount":4.6,"imgWidth":338,"imgHeight":374},{"id":3,"slug":"jane-doe","img":"/images/instructor/03.jpg","name":"Jane Doe","position":"Machine Learning Engineer","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1550,"lectureCount":172,"ratingCount":4.3,"imgWidth":338,"imgHeight":374},{"id":4,"slug":"michael-johnson","img":"/images/instructor/04.jpg","name":"Michael Johnson","position":"Cloud Architect","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1150,"lectureCount":112,"ratingCount":4.7,"imgWidth":338,"imgHeight":374},{"id":5,"slug":"emily-davis","img":"/images/instructor/06.jpg","name":"Emily Davis","position":"Cybersecurity Expert","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":465,"lectureCount":42,"ratingCount":4.8,"imgWidth":338,"imgHeight":374},{"id":6,"slug":"david-wilson","img":"/images/instructor/07.jpg","name":"David Wilson","position":"DevOps Engineer","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":875,"lectureCount":82,"ratingCount":4.5,"imgWidth":338,"imgHeight":374},{"id":7,"slug":"sarah-lee","img":"/images/instructor/08.jpg","name":"Sarah Lee","position":"UI/UX Designer","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1250,"lectureCount":132,"ratingCount":4.4,"imgWidth":338,"imgHeight":374},{"id":8,"slug":"robert-brown","img":"/images/instructor/09.jpg","name":"Robert Brown","position":"Software Engineer","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1750,"lectureCount":115,"ratingCount":4.7,"imgWidth":338,"imgHeight":374},{"id":9,"slug":"laura-martinez","img":"/images/instructor/09.jpg","name":"Laura Martinez","position":"AI Researcher","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1520,"lectureCount":152,"ratingCount":4.2,"imgWidth":338,"imgHeight":374},{"id":10,"slug":"daniel-anderson","img":"/images/instructor/10.jpg","name":"Daniel Anderson","position":"Blockchain Developer","biography":"As an English lecturer, I am fervently dedicated to shaping the linguistic and literary acumen of my students. With a profound passion for language education, I employ dynamic and innovative teaching methods to inspire a love for literature and effective communication. My commitment extends beyond the curriculum, fostering an environment where students develop critical thinking skills and a deep appreciation for the nuances of the English language.","studentCount":1250,"lectureCount":122,"ratingCount":4,"imgWidth":338,"imgHeight":374}]')},707:e=>{"use strict";e.exports=JSON.parse('[{"id":1,"img":"/images/students-feedback/01.jpg","avatar":"/images/students-feedback/02.png","quoteIcon":"/images/students-feedback/19.png","content":"I can\'t recommend The Gourmet Haven enough. It\'s a place for special occasions, date nights, or whenever you\'re in the mood for a culinary adventure. The combination of exceptional.","author":"Emma Elizabeth","position":"Assistant Teacher"},{"id":2,"img":"/images/students-feedback/02.jpg","avatar":"/images/students-feedback/02.png","quoteIcon":"/images/students-feedback/19.png","content":"The atmosphere at The Gourmet Haven is absolutely stunning. Perfect for a relaxing evening with friends or family.","author":"John Doe","position":"Software Engineer"},{"id":3,"img":"/images/students-feedback/04.jpg","avatar":"/images/students-feedback/03.png","quoteIcon":"/images/students-feedback/19.png","content":"The food is exquisite and the service is top-notch. A must-visit for any food enthusiast.","author":"Jane Smith","position":"Graphic Designer"},{"id":4,"img":"/images/students-feedback/06.jpg","avatar":"/images/students-feedback/04.png","quoteIcon":"/images/students-feedback/19.png","content":"A hidden gem! The flavors are unique and the presentation is beautiful.","author":"Michael Brown","position":"Marketing Manager"},{"id":5,"img":"/images/students-feedback/02.jpg","avatar":"/images/students-feedback/05.png","quoteIcon":"/images/students-feedback/19.png","content":"An unforgettable dining experience with a cozy and welcoming ambiance.","author":"Emily White","position":"Event Planner"},{"id":6,"img":"/images/students-feedback/06.jpg","avatar":"/images/students-feedback/06.png","quoteIcon":"/images/students-feedback/19.png","content":"A delightful place for a culinary journey. The staff is friendly and attentive.","author":"Robert Wilson","position":"Architect"},{"id":7,"img":"/images/students-feedback/01.jpg","avatar":"/images/students-feedback/07.png","quoteIcon":"/images/students-feedback/19.png","content":"The Gourmet Haven never disappoints. The dishes are creative and full of flavor.","author":"Jessica Lee","position":"Photographer"},{"id":8,"img":"/images/students-feedback/02.jpg","avatar":"/images/students-feedback/08.png","quoteIcon":"/images/students-feedback/19.png","content":"Perfect for foodies looking for an extraordinary dining experience.","author":"David Taylor","position":"Chef"},{"id":9,"img":"/images/students-feedback/04.jpg","avatar":"/images/students-feedback/09.png","quoteIcon":"/images/students-feedback/19.png","content":"The perfect blend of elegance and comfort. Highly recommend!","author":"Laura Martin","position":"Interior Designer"},{"id":10,"img":"/images/students-feedback/06.jpg","avatar":"/images/students-feedback/10.png","quoteIcon":"/images/students-feedback/19.png","content":"A wonderful place to celebrate special moments. The attention to detail is impeccable.","author":"Daniel Jackson","position":"Lawyer"}]')}};