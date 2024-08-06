import{C as d}from"./vue-37563251.js";import{e as u,r as A,a as j,o as p,c,g as a,b as l,_ as i,w as t,d as s,u as h,h as E}from"./index-67e3a6d2.js";/* empty css                                                            */const C=u({__name:"README.md.Virtual74e3425f",setup(o){const r=A();return(n,g)=>{const e=j("ak-progress");return p(),c("div",null,[a("p",null,[l(e,{modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=m=>r.value=m)},null,8,["modelValue"])]),a("p",null,[l(e,{modelValue:30})]),a("p",null,[l(e,{modelValue:50,status:"success"})]),a("p",null,[l(e,{modelValue:60,status:"warning"})]),a("p",null,[l(e,{modelValue:70,status:"danger"})]),a("p",null,[l(e,{modelValue:100})])])}}}),_={},D=a("p",null,"设置宽高",-1),F=a("p",null,"设置背景和进度颜色",-1),V=a("p",null,"进度文字固定位置",-1);function k(o,r){const n=j("ak-progress");return p(),c("div",null,[D,a("p",null,[l(n,{modelValue:50,radius:300,border:10})]),F,a("p",null,[l(n,{modelValue:30,color:"#D9E5F1FF",borderColor:"#9907C1FF"})]),V,a("p",null,[l(n,{modelValue:80,followText:!1})])])}const f=i(_,[["render",k]]),b={};function v(o,r){const n=j("ak-progress");return p(),c("div",null,[l(n,{"model-value":0,radius:50,border:8,type:"circle"}),l(n,{modelValue:30,radius:50,border:8,type:"circle",status:"success"}),l(n,{modelValue:50,radius:50,border:8,type:"circle"}),l(n,{modelValue:80,radius:50,border:8,color:"#ddd",borderColor:"#f60",type:"circle"}),l(n,{modelValue:100,radius:50,border:8,type:"circle"}),l(n,{modelValue:80,radius:50,border:8,type:"circle",showText:!1},{default:t(()=>[s("自定义显示内容")]),_:1})])}const y=i(b,[["render",v]]),B={class:"marked-body"},x=a("h1",{id:"progress-进度条"},"Progress 进度条",-1),w=a("h3",{id:"基础用法"},"基础用法",-1),N=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"30"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"success"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"60"'),s(),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"warning"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"70"'),s(),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"danger"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"100"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s(`()
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),T=a("h3",{id:"其他用法"},"其他用法",-1),$=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("设置宽高"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"300"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"10"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("设置背景和进度颜色"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"30"'),s(),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#D9E5F1FF"'),s(),a("span",{class:"hljs-attr"},"borderColor"),s("="),a("span",{class:"hljs-string"},'"#9907C1FF"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s("进度文字固定位置"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"80"'),s(),a("span",{class:"hljs-attr"},":followText"),s("="),a("span",{class:"hljs-string"},'"false"'),s(" />")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")])])],-1),S=a("h3",{id:"环形进度条"},"环形进度条",-1),P=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":model-value"),s("="),a("span",{class:"hljs-string"},'"0"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(`
      `),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"30"'),s(`
      `),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(`
      `),a("span",{class:"hljs-attr"},"status"),s("="),a("span",{class:"hljs-string"},'"success"'),s(`
    />`)]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(`
      `),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"80"'),s(`
      `),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"color"),s("="),a("span",{class:"hljs-string"},'"#ddd"'),s(`
      `),a("span",{class:"hljs-attr"},"borderColor"),s("="),a("span",{class:"hljs-string"},'"#f60"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(`
    />`)]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"100"'),s(),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(" />")]),s(`

    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-progress"),s(`
      `),a("span",{class:"hljs-attr"},":modelValue"),s("="),a("span",{class:"hljs-string"},'"80"'),s(`
      `),a("span",{class:"hljs-attr"},":radius"),s("="),a("span",{class:"hljs-string"},'"50"'),s(`
      `),a("span",{class:"hljs-attr"},":border"),s("="),a("span",{class:"hljs-string"},'"8"'),s(`
      `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"circle"'),s(`
      `),a("span",{class:"hljs-attr"},":showText"),s("="),a("span",{class:"hljs-string"},'"false"'),s(`
      >`)]),s(`自定义显示内容</ak-progress
    >
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"div"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),M=E('<h2 id="api">API</h2><h3 id="progress">Progress</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>Number</td><td>进度值</td></tr><tr><td>type</td><td>String</td><td>进度条类型，支持两种line直线、circle圆环</td></tr><tr><td>radius</td><td>Number</td><td>圆环半径，单位px。line时为宽</td></tr><tr><td>border</td><td>Number</td><td>进度条宽，单位px。line时为高</td></tr><tr><td>color</td><td>String</td><td>背景颜色</td></tr><tr><td>borderColor</td><td>String</td><td>进度颜色</td></tr><tr><td>duration</td><td>Number/1000</td><td>持续时间，单位毫秒</td></tr><tr><td>showText</td><td>Boolean/true</td><td>显示进度文字</td></tr><tr><td>followText</td><td>Boolean/true</td><td>进度文字跟随进度的位置,type=line时有效</td></tr><tr><td>className</td><td>String</td><td>样式类名</td></tr><tr><td>status</td><td>String</td><td>支持 <code>primary</code>、<code>success</code>、<code>warning</code>、<code>danger</code> 类型，默认为 <code>primary</code>。</td></tr></tbody></table>',3),q={__name:"README",setup(o){return(r,n)=>(p(),c("div",B,[x,w,l(h(d),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20v-model%3D%22value%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2230%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2250%22%20status%3D%22success%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2260%22%20status%3D%22warning%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2270%22%20status%3D%22danger%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%22100%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20value%20%3D%20ref()%0A%3C%2Fscript%3E%0A"},{code:t(()=>[N]),default:t(()=>[l(C)]),_:1}),T,l(h(d),{code:"%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cp%3E%E8%AE%BE%E7%BD%AE%E5%AE%BD%E9%AB%98%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2250%22%20%3Aradius%3D%22300%22%20%3Aborder%3D%2210%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%E8%AE%BE%E7%BD%AE%E8%83%8C%E6%99%AF%E5%92%8C%E8%BF%9B%E5%BA%A6%E9%A2%9C%E8%89%B2%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2230%22%20color%3D%22%23D9E5F1FF%22%20borderColor%3D%22%239907C1FF%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%E8%BF%9B%E5%BA%A6%E6%96%87%E5%AD%97%E5%9B%BA%E5%AE%9A%E4%BD%8D%E7%BD%AE%3C%2Fp%3E%0A%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2280%22%20%3AfollowText%3D%22false%22%20%2F%3E%0A%20%20%20%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{code:t(()=>[$]),default:t(()=>[l(f)]),_:1}),S,l(h(d),{code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cak-progress%20%3Amodel-value%3D%220%22%20%3Aradius%3D%2250%22%20%3Aborder%3D%228%22%20type%3D%22circle%22%20%2F%3E%0A%0A%20%20%20%20%3Cak-progress%0A%20%20%20%20%20%20%3AmodelValue%3D%2230%22%0A%20%20%20%20%20%20%3Aradius%3D%2250%22%0A%20%20%20%20%20%20%3Aborder%3D%228%22%0A%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20status%3D%22success%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%2250%22%20%3Aradius%3D%2250%22%20%3Aborder%3D%228%22%20type%3D%22circle%22%20%2F%3E%0A%0A%20%20%20%20%3Cak-progress%0A%20%20%20%20%20%20%3AmodelValue%3D%2280%22%0A%20%20%20%20%20%20%3Aradius%3D%2250%22%0A%20%20%20%20%20%20%3Aborder%3D%228%22%0A%20%20%20%20%20%20color%3D%22%23ddd%22%0A%20%20%20%20%20%20borderColor%3D%22%23f60%22%0A%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%2F%3E%0A%0A%20%20%20%20%3Cak-progress%20%3AmodelValue%3D%22100%22%20%3Aradius%3D%2250%22%20%3Aborder%3D%228%22%20type%3D%22circle%22%20%2F%3E%0A%0A%20%20%20%20%3Cak-progress%0A%20%20%20%20%20%20%3AmodelValue%3D%2280%22%0A%20%20%20%20%20%20%3Aradius%3D%2250%22%0A%20%20%20%20%20%20%3Aborder%3D%228%22%0A%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20%3AshowText%3D%22false%22%0A%20%20%20%20%20%20%3E%E8%87%AA%E5%AE%9A%E4%B9%89%E6%98%BE%E7%A4%BA%E5%86%85%E5%AE%B9%3C%2Fak-progress%0A%20%20%20%20%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A"},{code:t(()=>[P]),default:t(()=>[l(y)]),_:1}),M]))}};export{q as default};
