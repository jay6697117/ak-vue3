import{C as o}from"./vue-37563251.js";import{e as _,r as E,a as i,o as h,c as u,g as a,b as l,F as m,f as A,_ as g,w as t,d as s,u as d,h as f}from"./index-67e3a6d2.js";/* empty css                                                            */const C=_({__name:"README.md.Virtual287c234e",setup(r){const e=E("初始默认值");return(n,p)=>{const c=i("ak-input");return h(),u(m,null,[a("p",null,[l(c)]),a("p",null,[l(c,{placeholder:"请输入内容"})]),a("p",null,[l(c,{placeholder:"请输入内容",modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=j=>e.value=j)},null,8,["modelValue"])]),a("p",null,[l(c,{placeholder:"禁用状态",disabled:!0})])],64)}}}),k={__name:"README.md.Virtualcc5a3e9c",setup(r){const e=E("");return(n,p)=>{const c=i("ak-input");return h(),A(c,{placeholder:"试着输入些什么看看",modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=j=>e.value=j),clear:!0},null,8,["modelValue"])}}},B=_({__name:"README.md.Virtualdebb0d75",setup(r){const e=E("");return(n,p)=>{const c=i("ak-input");return h(),A(c,{placeholder:"请输入内容",modelValue:e.value,"onUpdate:modelValue":p[0]||(p[0]=j=>e.value=j),showEye:!0,type:"password"},null,8,["modelValue"])}}}),F={};function D(r,e){const n=i("ak-input");return h(),u(m,null,[a("p",null,[l(n,{placeholder:"请输入内容","prefix-icon":"icon-user"})]),a("p",null,[l(n,{placeholder:"请输入内容","suffix-icon":"icon-search"})])],64)}const x=g(F,[["render",D]]),v={};function y(r,e){const n=i("ak-input");return h(),u(m,null,[a("p",null,[l(n,{placeholder:"请输入内容"},{append:t(()=>[s("CM")]),_:1})]),a("p",null,[l(n,{placeholder:"请输入内容"},{prepend:t(()=>[s("http://")]),_:1})])],64)}const V=g(v,[["render",y]]),w={};function b(r,e){const n=i("ak-input");return h(),u(m,null,[a("p",null,[l(n,{placeholder:"默认尺寸",size:"large"})]),a("p",null,[l(n,{placeholder:"默认尺寸"})]),a("p",null,[l(n,{placeholder:"sixe=small",size:"small"})]),a("p",null,[l(n,{placeholder:"sixe=mini",size:"mini"})])],64)}const z=g(w,[["render",b]]),$={class:"marked-body"},I=a("h1",{id:"input-输入框"},"Input 输入框",-1),M=a("h3",{id:"基本使用"},"基本使用",-1),N=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"defaultValue"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"禁用状态"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" defaultValue = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"'初始默认值'"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),R=a("h3",{id:"显示清空按钮"},"显示清空按钮",-1),P=a("p",null,[s("设置"),a("code",null,'clear="true"'),s("，在输入框不为空时显示清空按钮")],-1),U=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"试着输入些什么看看"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"valueClear"'),s(`
    `),a("span",{class:"hljs-attr"},":clear"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" valueClear = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),S=a("h3",{id:"可显示密码明文"},"可显示密码明文",-1),T=a("p",null,[a("code",null,'type="password'),s("时设置"),a("code",null,'showEye="true"'),s("可显示密码明文")],-1),q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(`
    `),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(`
    `),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"value"'),s(`
    `),a("span",{class:"hljs-attr"},":showEye"),s("="),a("span",{class:"hljs-string"},'"true"'),s(`
    `),a("span",{class:"hljs-attr"},"type"),s("="),a("span",{class:"hljs-string"},'"password"'),s(`
  />`)]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" value = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-string"},"''"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),G=a("h3",{id:"添加前后缀icon"},"添加前后缀Icon",-1),H=a("p",null,[s("可以通过 "),a("code",null,"prefix-icon"),s(" 和 "),a("code",null,"suffix-icon"),s(" 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot "),a("code",null,"prefix"),s(" 和 "),a("code",null,"suffix"),s(" 来放置图标。")],-1),J=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(),a("span",{class:"hljs-attr"},"prefix-icon"),s("="),a("span",{class:"hljs-string"},'"icon-user"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(),a("span",{class:"hljs-attr"},"suffix-icon"),s("="),a("span",{class:"hljs-string"},'"icon-search"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),K=a("h3",{id:"复合型输入框"},"复合型输入框",-1),L=a("p",null,"可前置或后置元素，一般为标签或按钮",-1),O=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"append"),s(">")]),s("CM"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-input"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"请输入内容"'),s(">")]),s(`
      `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"prepend"),s(">")]),s("http://"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-input"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Q=a("h3",{id:"设置大小"},"设置大小",-1),W=a("p",null,[s("支持 "),a("code",null,"large"),s("、"),a("code",null,"normal"),s("、"),a("code",null,"small"),s("、"),a("code",null,"mini"),s(" 四种尺寸，默认为 normal")],-1),X=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"默认尺寸"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"large"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"默认尺寸"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"sixe=small"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"small"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-input"),s(),a("span",{class:"hljs-attr"},"placeholder"),s("="),a("span",{class:"hljs-string"},'"sixe=mini"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},'"mini"'),s(" />")]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`)])],-1),Y=f('<h2 id="api">API</h2><h3 id="input-props">Input Props</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>any</td><td>输入框的值</td></tr><tr><td>clear</td><td>boolean/false</td><td>显示清空按钮</td></tr><tr><td>showEye</td><td>boolean/false</td><td>密码框显示明文切换</td></tr><tr><td>width</td><td>string</td><td>设置宽度属性</td></tr><tr><td>size</td><td>string</td><td>支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code></td></tr><tr><td>prefixIcon</td><td>string</td><td>前缀icon图标</td></tr><tr><td>suffixIcon</td><td>string</td><td>后缀icon图标</td></tr><tr><td>-</td><td></td><td>其它原生所有属性</td></tr></tbody></table><h3 id="input-slots">Input Slots</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>prepend</td><td>输入框前置内容</td></tr><tr><td>append</td><td>输入框后置内容</td></tr><tr><td>prefix</td><td>前缀icon图标</td></tr><tr><td>suffix</td><td>后缀icon图标</td></tr></tbody></table>',5),ls={__name:"README",setup(r){return(e,n)=>(h(),u("div",$,[I,M,l(d(o),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%3Cak-input%20%2F%3E%3C%2Fp%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%20%2F%3E%3C%2Fp%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%20v-model%3D%22defaultValue%22%20%2F%3E%3C%2Fp%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22%E7%A6%81%E7%94%A8%E7%8A%B6%E6%80%81%22%20%3Adisabled%3D%22true%22%20%2F%3E%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20defaultValue%20%3D%20ref('%E5%88%9D%E5%A7%8B%E9%BB%98%E8%AE%A4%E5%80%BC')%0A%3C%2Fscript%3E%0A"},{code:t(()=>[N]),default:t(()=>[l(C)]),_:1}),R,P,l(d(o),{code:"%3Ctemplate%3E%0A%20%20%3Cak-input%0A%20%20%20%20placeholder%3D%22%E8%AF%95%E7%9D%80%E8%BE%93%E5%85%A5%E4%BA%9B%E4%BB%80%E4%B9%88%E7%9C%8B%E7%9C%8B%22%0A%20%20%20%20v-model%3D%22valueClear%22%0A%20%20%20%20%3Aclear%3D%22true%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20valueClear%20%3D%20ref('')%0A%3C%2Fscript%3E%0A"},{code:t(()=>[U]),default:t(()=>[l(k)]),_:1}),S,T,l(d(o),{code:"%3Ctemplate%3E%0A%20%20%3Cak-input%0A%20%20%20%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%0A%20%20%20%20v-model%3D%22value%22%0A%20%20%20%20%3AshowEye%3D%22true%22%0A%20%20%20%20type%3D%22password%22%0A%20%20%2F%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20value%20%3D%20ref('')%0A%3C%2Fscript%3E%0A"},{code:t(()=>[q]),default:t(()=>[l(B)]),_:1}),G,H,l(d(o),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%20prefix-icon%3D%22icon-user%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%20suffix-icon%3D%22icon-search%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A"},{code:t(()=>[J]),default:t(()=>[l(x)]),_:1}),K,L,l(d(o),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23append%3ECM%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-input%3E%0A%20%20%3C%2Fp%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-input%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%86%85%E5%AE%B9%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23prepend%3Ehttp%3A%2F%2F%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fak-input%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A"},{code:t(()=>[O]),default:t(()=>[l(V)]),_:1}),Q,W,l(d(o),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%22%20size%3D%22large%22%20%2F%3E%3C%2Fp%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22%E9%BB%98%E8%AE%A4%E5%B0%BA%E5%AF%B8%22%20%2F%3E%3C%2Fp%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22sixe%3Dsmall%22%20size%3D%22small%22%20%2F%3E%3C%2Fp%3E%0A%20%20%3Cp%3E%3Cak-input%20placeholder%3D%22sixe%3Dmini%22%20size%3D%22mini%22%20%2F%3E%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A"},{code:t(()=>[X]),default:t(()=>[l(z)]),_:1}),Y]))}};export{ls as default};
