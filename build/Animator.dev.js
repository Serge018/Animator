class Animator{constructor(){if(Animator._instance)return Animator._instance;this.module_name="Animator",this.default_config={distort_content_on_scroll:{will_change:"transform",timing_function:"cubic-bezier(.6,.17,.85,.54)",transiton_duration:.5,speed:.35,offset_max:100}},this.available_implementations_name=["distort_content_on_scroll"],this.implemetation_options={distort_content_on_scroll:{}},Animator._instance=this}init(t){let{implementation_name:e=!1,selector_wrapper:n=!1}=t;if(!e)return console.error(this.module_name+" :: implementation_name requierd"),console.log("init_options : ",t),!1;if(!this.available_implementations_name.includes(e))return console.error(this.module_name+" :: implementation_name is not available"),console.log("init_options : ",t),!1;if(!t.selector_wrapper.length)return console.error(this.module_name+" :: unvalid selector_wrapper"),console.log("init_options : ",t),!1;t=Object.assign(this.default_config[e],t),this.implemetation_options[e]=t;let o="_setup_"+e;if(navigator.userAgent.search("Firefox")>-1)return!1;let i=n.toString().split(",");for(let n of i){this[o]({...t,selector_wrapper:n})||console.error(this.module_name+` :: ${e} not setup`)}return!0}_setup_distort_content_on_scroll(t){document.body.insertAdjacentHTML("afterbegin",`\n\t\t\t<style type="text/css">\n\t\t\t\t${t.selector_wrapper} {\n\t\t\t\t\ttransition-property : transform;\n\t\t\t\t\ttransition-duration : ${t.transiton_duration}s;\n\t\t\t\t\ttransition-timing-function : ${t.timing_function});\n\t\t\t\t\twill-change : transform;\n\t\t\t\t}\n\t\t\t</style>`);let e=document.querySelector(t.selector_wrapper);if(!e)return console.error(this.module_name+" :: selector_wrapper requierd type of string"),console.log("init_options : ",t),!1;let n=window.pageYOffset,o=function(){let i=window.pageYOffset,r=i-n;r>t.offset_max?r=t.offset_max:r<0-t.offset_max&&(r=0-t.offset_max);let s=Math.floor(r*t.speed);n=i,e.style.transform=`skewY(${s}deg)`,requestAnimationFrame(o)};return o(),!0}animate(){}destroy(){}}