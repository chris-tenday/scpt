import{_ as f,H as g,P as h,F as v,r as i,o as n,c,a as d,b as e,t as r,d as w,e as b,f as x}from"./index-Cu1BsjZb.js";const y={name:"SingleBlog",components:{Header:g,Partners:h,Footer:v},computed:{article(){for(var _=this.$route.params.id,t=this.$store.getters.GET_ARTICLES,l,s=0;s<t.length;s++)if(t[s].id==_){l=t[s];break}return l},articles(){return this.$store.getters.GET_ARTICLES}},mounted(){}},B={class:"container-fluid py-5 wow fadeInUp","data-wow-delay":"0.1s"},E={class:"container py-5"},F={class:"row g-5"},S={class:"col-lg-8"},T={class:"mb-5"},k=["src"],A={class:"mb-4"},H={class:"col-lg-4"},I={class:"mb-5 wow slideInUp","data-wow-delay":"0.1s"},P=["src"],C={href:"",class:"h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0",style:{width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}};function L(_,t,l,s,N,o){const m=i("Header"),p=i("Partners"),u=i("Footer");return n(),c("div",null,[d(m,{"page-title":"Article"}),e("div",B,[e("div",E,[e("div",F,[e("div",S,[e("div",T,[e("img",{class:"img-fluid w-100 rounded mb-5",src:o.article.img_cover,alt:""},null,8,k),e("h1",A,r(o.article.titre),1),e("p",null,r(o.article.content),1)]),t[1]||(t[1]=e("hr",null,null,-1)),e("p",null,[t[0]||(t[0]=e("span",{class:"fa fa-calendar"},null,-1)),w(" "+r(o.article.date),1)])]),e("div",H,[e("div",I,[t[2]||(t[2]=e("div",{class:"section-title section-title-sm position-relative pb-3 mb-4"},[e("h3",{class:"mb-0"},"Autres articles")],-1)),(n(!0),c(b,null,x(o.articles,a=>(n(),c("div",{key:a,class:"d-flex rounded overflow-hidden mb-3"},[e("img",{class:"img-fluid",src:a.img_cover,style:{width:"100px",height:"100px","object-fit":"cover"},alt:""},null,8,P),e("a",C,r(a.titre),1)]))),128))])])])])]),d(p),d(u)])}const G=f(y,[["render",L]]);export{G as default};
