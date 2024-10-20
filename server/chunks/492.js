"use strict";exports.id=492,exports.ids=[492],exports.modules={621:(e,a,s)=>{s.d(a,{Z:()=>n});var i=s(997),r=s(1664),t=s.n(r);function n(e){let{Img:a,Title:s,subTitle:r}=e,n={backgroundImage:`url(${a||"/images/breadcrumb/01.jpg"})`};return i.jsx("div",{className:"rts-bread-crumbarea-1 rts-section-gap bg_image",style:n,children:i.jsx("div",{className:"container",children:i.jsx("div",{className:"row ",children:i.jsx("div",{className:"col-md-12",children:(0,i.jsxs)("div",{className:"breadcrumb-main-wrapper",children:[i.jsx("h1",{className:"title",children:s||"About Us"}),(0,i.jsxs)("div",{className:"pagination-wrapper",children:[i.jsx(t(),{href:"/",children:"Home"}),i.jsx("i",{className:"fa-regular fa-chevron-right"}),i.jsx(t(),{href:"#",className:"active",children:r||"About Us"})]})]})})})})})}},5026:(e,a,s)=>{s.d(a,{Z:()=>t});var i=s(997),r=s(6689);let t=e=>{let{scrollClassName:a}=e,[s,t]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>{window.pageYOffset>200?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),i.jsx(i.Fragment,{children:s&&i.jsx("div",{className:`${a||"progress-wrap"} ${s?"active-progress":""}`,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},children:i.jsx("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102",children:i.jsx("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})})})})}},492:(e,a,s)=>{s.a(e,async(e,i)=>{try{s.r(a),s.d(a,{default:()=>c});var r=s(997),t=s(621),n=s(5026),o=s(5477),l=e([o]);function c(){return(0,r.jsxs)("main",{children:[r.jsx(t.Z,{Title:"Become an Instructor",subTitle:"Become an Instructor"}),r.jsx(o.Z,{}),r.jsx(n.Z,{})]})}o=(l.then?(await l)():l)[0],i()}catch(e){i(e)}})},5477:(e,a,s)=>{s.a(e,async(e,i)=>{try{s.d(a,{Z:()=>g});var r=s(997),t=s(8028),n=s(2094),o=s(5675),l=s.n(o),c=s(1664),d=s.n(c),m=s(1163),h=s(6689),u=s(3291),p=e([u]);function g(){let[e,a]=(0,h.useState)("instructor"),[s,i]=(0,h.useState)(t),[o,c]=(0,h.useState)({name:"",username:"",email:"",password:"",rePassword:""}),[p,g]=(0,h.useState)(""),x=(0,u.useDispatch)(),v=(0,m.useRouter)();(0,u.useSelector)(e=>e.user.admin);let j=e=>{let{id:a,value:s}=e.target;c(e=>({...e,[a]:s}))};return r.jsx("div",{className:"rts-section-gap",children:r.jsx("div",{className:"container-2",children:r.jsx("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-lg-12",children:[(0,r.jsxs)("div",{className:"becomeinstructor--wrapper",children:[(0,r.jsxs)("div",{className:"title-top-wrapper mb--50 mb--50",children:[r.jsx("h2",{className:"title",children:"How to Become an Instructor"}),r.jsx("p",{className:"disc",children:"Becoming an instructor involves a series of steps that may vary depending on the type of instruction you're interested"})]}),r.jsx("div",{className:"large-image-thumb",children:r.jsx(l(),{src:"/images/instructor/14.jpg",width:1195,height:630,alt:"instructor"})})]}),(0,r.jsxs)("div",{className:"becom-instructor-tabs-area-wrapper mt--50",children:[(0,r.jsxs)("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist",children:[r.jsx("li",{className:"nav-item",role:"presentation",children:(0,r.jsxs)("button",{className:`nav-link ${"instructor"===e&&"active"}`,onClick:()=>{var e;e="instructor",a(e)},children:[r.jsx("i",{className:"fa-regular fa-user"}),"Become an Instructor"]})}),r.jsx("li",{className:"nav-item",role:"presentation",children:(0,r.jsxs)("button",{className:`nav-link ${"rules"===e&&"active"}`,onClick:()=>{var e;e="rules",a(e)},children:[r.jsx("i",{className:"fa-light fa-list"}),"Instructor Rules"]})}),r.jsx("li",{className:"nav-item",role:"presentation",children:(0,r.jsxs)("button",{className:`nav-link ${"course"===e&&"active"}`,onClick:()=>{var e;e="course",a(e)},children:[r.jsx("i",{className:"fa-regular fa-box"}),"Start with Courses"]})})]}),(0,r.jsxs)("div",{className:"tab-content",id:"myTabContent",children:[r.jsx("div",{className:`tab-pane fade ${"instructor"===e&&"active show"}`,children:(0,r.jsxs)("div",{className:"becom-instructor-tabs-content",children:[(0,r.jsxs)("div",{className:"",children:[r.jsx("p",{className:"disc",children:"Becoming an instructor involves a series of steps that may vary depending on the type of instruction you're interested in (e.g., academic teaching, corporate training, online courses). Here's a general guide to help you become an instructor:"}),r.jsx("h6",{className:"title",children:"Identify Your Area of Expertise:"}),r.jsx("p",{className:"disc",children:"Determine the subject or skill in which you have expertise and are passionate about teaching."}),r.jsx("h6",{className:"title",children:"Educational Qualifications:"}),r.jsx("p",{className:"disc",children:"Obtain the necessary educational qualifications for the level and type of instruction you are aiming for. This may include a bachelor's degree."})]}),r.jsx("div",{className:"right-side",children:r.jsx("div",{className:"thumbnail",children:r.jsx(l(),{src:"/images/instructor/15.jpg",width:420,height:318,alt:"instructor"})})})]})}),r.jsx("div",{className:`tab-pane fade ${"rules"===e&&"active show"}`,children:(0,r.jsxs)("div",{className:"becom-instructor-tabs-content",children:[(0,r.jsxs)("div",{className:"",children:[r.jsx("p",{className:"disc",children:"Becoming an two instructor involves a series of steps that may vary depending on the type of instruction you're interested in (e.g., academic teaching, corporate training, online courses). Here's a general guide to help you become an instructor:"}),r.jsx("h6",{className:"title",children:"Identify Your Area of Expertise:"}),r.jsx("p",{className:"disc",children:"Determine the subject or skill in which you have expertise and are passionate about teaching."}),r.jsx("h6",{className:"title",children:"Educational Qualifications:"}),r.jsx("p",{className:"disc",children:"Obtain the necessary educational qualifications for the level and type of instruction you are aiming for. This may include a bachelor's degree."})]}),r.jsx("div",{className:"right-side",children:r.jsx("div",{className:"thumbnail",children:r.jsx(l(),{src:"/images/instructor/15.jpg",width:420,height:318,alt:"instructor"})})})]})}),r.jsx("div",{className:`tab-pane fade ${"course"===e&&"active show"}`,children:(0,r.jsxs)("div",{className:"becom-instructor-tabs-content",children:[(0,r.jsxs)("div",{className:"",children:[r.jsx("p",{className:"disc",children:"Becoming an three instructor involves a series of steps that may vary depending on the type of instruction you're interested in (e.g., academic teaching, corporate training, online courses). Here's a general guide to help you become an instructor:"}),r.jsx("h6",{className:"title",children:"Identify Your Area of Expertise:"}),r.jsx("p",{className:"disc",children:"Determine the subject or skill in which you have expertise and are passionate about teaching."}),r.jsx("h6",{className:"title",children:"Educational Qualifications:"}),r.jsx("p",{className:"disc",children:"Obtain the necessary educational qualifications for the level and type of instruction you are aiming for. This may include a bachelor's degree."})]}),r.jsx("div",{className:"right-side",children:r.jsx("div",{className:"thumbnail",children:r.jsx(l(),{src:"/images/instructor/15.jpg",width:420,height:318,alt:"instructor"})})})]})})]})]}),(0,r.jsxs)("div",{className:"becom-an-instructor-form-area rts-section-gapTop pl--120 pr--120 pl_sm--10 pr_sm--10",children:[(0,r.jsxs)("div",{className:"title-instructor-wrapper",children:[r.jsx("h2",{className:"title",children:"Become an Instructor Today"}),r.jsx("p",{className:"disc",children:"Join the world's largest online learning marketplace. Start teaching today"})]}),(0,r.jsxs)("form",{onSubmit:e=>{if(e.preventDefault(),o.password!==o.rePassword){g("Passwords do not match."),console.error("Error: Passwords do not match");return}if(s.some(e=>e.email===o.email)){g("Email is already registered."),console.error("Error: Email is already registered");return}if(s.some(e=>e.username===o.username)){g("Username is already taken."),console.error("Error: Username is already taken");return}let a={id:s.length+1,registration:new Date().toLocaleString(),firstName:o.name.split(" ")[0],lastName:o.name.split(" ")[1]||"",username:o.username,password:o.password,email:o.email,phone:"",designation:"",biography:"",role:"instructor"};i([...s,a]),x((0,n.M)(a)),g("Instructor registration successful!"),v.push("/dashboard")},className:"instructor-form",children:[r.jsx("input",{id:"name",type:"text",placeholder:"Enter Your Name",value:o.name,onChange:j,required:!0}),r.jsx("input",{id:"username",type:"text",placeholder:"Enter User Name",value:o.username,onChange:j,required:!0}),r.jsx("input",{id:"email",type:"email",placeholder:"Enter Your Email",value:o.email,onChange:j,required:!0}),r.jsx("input",{id:"password",type:"password",placeholder:"Password",value:o.password,onChange:j,required:!0}),r.jsx("input",{id:"rePassword",type:"password",placeholder:"Re Password",value:o.rePassword,onChange:j,required:!0}),r.jsx("div",{className:"single-checkbox-filter",children:(0,r.jsxs)("div",{className:"check-box",children:[r.jsx("input",{type:"checkbox",id:"type-1",required:!0}),r.jsx("label",{htmlFor:"type-1",children:"Accept the Terms and Privacy Policy"}),r.jsx("br",{})]})}),r.jsx("button",{type:"submit",className:"rts-btn btn-primary",children:"Sign up"}),(0,r.jsxs)("p",{children:["Already have an account? ",r.jsx(d(),{href:"/signin",children:"Sign in"})]})]}),p&&r.jsx("p",{"aria-live":"polite",children:p})]})]})})})})}u=(p.then?(await p)():p)[0],i()}catch(e){i(e)}})},8028:e=>{e.exports=JSON.parse('[{"id":1,"registration":"February 25, 2022 6:01 am","firstName":"Jon","lastName":"Adam","username":"demo","password":"demo","email":"demo@mail.com","phone":"0123456789","designation":"Full Stack Developer","biography":"I have a degree in Journalism with over 15 years of work experience in the field. Throughout the years, I have worked in several well-known institutions and published several books on Journalism that are available on Amazon.","role":"instructor"},{"id":2,"registration":"March 12, 2023 10:15 am","firstName":"Emily","lastName":"Clark","username":"emilyc","password":"123456","email":"emilyclark@example.com","phone":"0987654321","designation":"Data Scientist","biography":"Emily is a seasoned Data Scientist with over 10 years of experience in data analysis and machine learning, working with Fortune 500 companies.","role":"instructor"},{"id":3,"registration":"April 1, 2023 3:45 pm","firstName":"Michael","lastName":"Smith","username":"msmith","password":"123456","email":"michael.smith@example.com","phone":"1234567890","designation":"Software Engineer","biography":"Michael is a passionate Software Engineer specializing in building scalable web applications. He enjoys working with new technologies and contributing to open-source projects.","role":"instructor"},{"id":4,"registration":"January 15, 2022 9:30 am","firstName":"Sophia","lastName":"Brown","username":"sophiab","password":"123456","email":"sophia.brown@example.com","phone":"2345678901","designation":"UX Designer","biography":"Sophia is a UX Designer with a knack for creating intuitive user experiences. She has designed for both mobile and web applications, focusing on accessibility and user engagement.","role":"student"},{"id":5,"registration":"May 20, 2022 11:00 am","firstName":"Liam","lastName":"Johnson","username":"liamj","password":"123456","email":"liam.johnson@example.com","phone":"3456789012","designation":"Project Manager","biography":"Liam has over 12 years of experience in project management, leading teams to deliver successful projects on time and within budget. He specializes in agile methodologies.","role":"instructor"},{"id":6,"registration":"June 8, 2023 2:20 pm","firstName":"Olivia","lastName":"Martinez","username":"oliviam","password":"123456","email":"olivia.martinez@example.com","phone":"4567890123","designation":"Marketing Specialist","biography":"Olivia is a Marketing Specialist with a focus on digital marketing strategies. She has helped brands grow their online presence through targeted campaigns and SEO optimization.","role":"student"},{"id":7,"registration":"July 13, 2022 8:10 am","firstName":"Noah","lastName":"Williams","username":"noahw","password":"123456","email":"noah.williams@example.com","phone":"5678901234","designation":"Cybersecurity Analyst","biography":"Noah is a Cybersecurity Analyst dedicated to protecting organizations from cyber threats. He has extensive experience in network security, penetration testing, and incident response.","role":"instructor"},{"id":8,"registration":"August 25, 2023 4:55 pm","firstName":"Emma","lastName":"Davis","username":"emmad","password":"123456","email":"emma.davis@example.com","phone":"6789012345","designation":"Product Manager","biography":"Emma is a Product Manager who excels at turning ideas into successful products. She has a strong background in tech and a passion for user-centered design.","role":"instructor"},{"id":9,"registration":"September 5, 2022 7:25 pm","firstName":"James","lastName":"Garcia","username":"jamesg","password":"123456","email":"james.garcia@example.com","phone":"7890123456","designation":"DevOps Engineer","biography":"James is a DevOps Engineer with a deep understanding of CI/CD pipelines, cloud infrastructure, and automation. He has a talent for optimizing deployment processes.","role":"student"},{"id":10,"registration":"October 30, 2023 1:05 pm","firstName":"Isabella","lastName":"Miller","username":"isabellam","password":"123456","email":"isabella.miller@example.com","phone":"8901234567","designation":"Graphic Designer","biography":"Isabella is a creative Graphic Designer with a passion for branding and visual storytelling. She has designed for various industries and enjoys working on creative projects.","role":"student"}]')}};