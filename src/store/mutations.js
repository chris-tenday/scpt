import cacheStore from "@/store/cacheStore.js";

export default{
    SET_ARTICLES: (state,data)=>{
        cacheStore.cache("articles",data);
        state.articles=data
    },
    UPDATE_ARTICLE:(state,data)=>{
        var i=data[0];
        state.articles[i].img_cover=data[1]
        cacheStore.cache("articles",state.articles);
    },
    SET_MISSION:(state,data)=>{state.section_mission=data},
    SET_CONTACT:(state,data)=>{state.section_contact=data},
    SET_HOSTING:(state,data)=>{state.section_hosting=data},
    SET_TEAMS:(state,data)=>{state.section_team=data},
    SET_BANNER:(state,data)=>{state.section_banner=data},
    SET_LAPOSTE:(state,data)=>{state.laposte=data},
    SET_EMS:(state,data)=>{state.ems=data},
    SET_POSTEMARKET:(state,data)=>{state.postemarket=data},
    SET_ON:(state,data)=>{state.on=data},
    SET_POSTEFINANCE:(state,data)=>{state.postefinance=data},
    SET_TELECOM:(state,data)=>{state.telecom=data},
    SET_IMMOBILIER:(state,data)=>{state.immobilier=data},
    SET_YELOO:(state,data)=>{state.yeloo=data},
}