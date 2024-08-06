import{C as m}from"./vue-37563251.js";import{e as g,r as o,a as w,o as i,c as f,g as a,b as l,F as A,f as E,w as c,d as s,t as v,u,h as C}from"./index-67e3a6d2.js";/* empty css                                                            */const k=g({__name:"README.md.Virtual6e0a900a",setup(d){const t=o(!1),p=o(!0);return(h,n)=>{const r=w("ak-switch");return i(),f(A,null,[a("p",null,[l(r,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e)},null,8,["modelValue"])]),a("p",null,[l(r,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=e=>p.value=e)},null,8,["modelValue"])])],64)}}}),D=g({__name:"README.md.Virtual177a57a8",setup(d){const t=o(!1);return(p,h)=>{const n=w("ak-switch");return i(),E(n,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=r=>t.value=r)},{open:c(()=>[s("开")]),close:c(()=>[s("关")]),_:1},8,["modelValue"])}}}),V=g({__name:"README.md.Virtual79586de2",setup(d){const t=o(!1),p=o(!0);return(h,n)=>{const r=w("ak-switch");return i(),f(A,null,[a("p",null,[l(r,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),disabled:!0},null,8,["modelValue"])]),a("p",null,[l(r,{modelValue:p.value,"onUpdate:modelValue":n[1]||(n[1]=e=>p.value=e),disabled:!0},null,8,["modelValue"])])],64)}}}),F=g({__name:"README.md.Virtual9e30e775",setup(d){const t=o(!0);return(p,h)=>{const n=w("ak-switch");return i(),f("p",null,[s(v(t.value)+" ",1),l(n,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=r=>t.value=r),"close-color":"#999","active-color":"red"},null,8,["modelValue"])])}}}),b=g({__name:"README.md.Virtual5974e48e",setup(d){const t=o(!0);return(p,h)=>{const n=w("ak-switch");return i(),f("p",null,[s(v(t.value)+" ",1),l(n,{modelValue:t.value,"onUpdate:modelValue":h[0]||(h[0]=r=>t.value=r),"close-value":"a","active-value":"b"},null,8,["modelValue"])])}}}),y=g({__name:"README.md.Virtual44ca8412",setup(d){const t=o(!1),p=()=>(alert("不能切换"),!1);return(h,n)=>{const r=w("ak-switch");return i(),f("p",null,[l(r,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),beforeChange:p},null,8,["modelValue"])])}}}),B=g({__name:"README.md.Virtual1e78f3b7",setup(d){const t=o(!1),p=o(!1),h=o(!1),n=o(!1);return(r,e)=>{const _=w("ak-switch");return i(),f("p",null,[l(_,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=j=>t.value=j),size:"large"},null,8,["modelValue"]),l(_,{modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=j=>p.value=j),size:"normal"},null,8,["modelValue"]),l(_,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=j=>h.value=j),size:"small"},null,8,["modelValue"]),l(_,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=j=>n.value=j),size:"mini"},null,8,["modelValue"])])}}}),x={class:"marked-body"},z=a("h1",{id:"switch-开关"},"Switch 开关",-1),S=a("h3",{id:"基本用法"},"基本用法",-1),U=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch2"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),M=a("h3",{id:"自定显示文本"},"自定显示文本",-1),R=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"open"),s(">")]),s("开"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(" #"),a("span",{class:"hljs-attr"},"close"),s(">")]),s("关"),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"ak-switch"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),$=a("h3",{id:"禁用"},"禁用",-1),N=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch2"'),s(),a("span",{class:"hljs-attr"},":disabled"),s("="),a("span",{class:"hljs-string"},'"true"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"setup"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),P=a("h3",{id:"设置开关状态时的颜色"},"设置开关状态时的颜色",-1),I=a("p",null,[a("code",null,"closeColor"),s("设置关闭状态颜色，"),a("code",null,"activeColor"),s("设置打开状态颜色")],-1),T=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
    >`)]),s(`{{ switch1 }}
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(),a("span",{class:"hljs-attr"},"close-color"),s("="),a("span",{class:"hljs-string"},'"#999"'),s(),a("span",{class:"hljs-attr"},"active-color"),s("="),a("span",{class:"hljs-string"},'"red"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`

`)])],-1),q=a("h3",{id:"设置开关状态时的值"},"设置开关状态时的值",-1),G=a("p",null,[a("code",null,"closeValue"),s("设置关闭状态时的值，"),a("code",null,"activeValue"),s("设置打开状态的值，当"),a("code",null,"v-model=activeValue"),s("时选中状态")],-1),H=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(`
    >`)]),s(`{{ switch1 }}
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(),a("span",{class:"hljs-attr"},"close-value"),s("="),a("span",{class:"hljs-string"},'"a"'),s(),a("span",{class:"hljs-attr"},"active-value"),s("="),a("span",{class:"hljs-string"},'"b"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"true"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),J=a("h3",{id:"异步控制"},"异步控制",-1),K=a("p",null,[a("code",null,"beforeChange"),s("切换前事件，"),a("code",null,"return false"),s("阻止切换")],-1),L=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(),a("span",{class:"hljs-attr"},":beforeChange"),s("="),a("span",{class:"hljs-string"},'"beforeChange"'),s(" />")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(),a("span",{class:"hljs-title function_"},"beforeChange"),s(" = ("),a("span",{class:"hljs-params"}),s(`) => {
    `),a("span",{class:"hljs-title function_"},"alert"),s("("),a("span",{class:"hljs-string"},"'不能切换'"),s(`)
    `),a("span",{class:"hljs-keyword"},"return"),s(),a("span",{class:"hljs-literal"},"false"),s(`
  }
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),O=a("h3",{id:"设置大小"},"设置大小",-1),Q=a("pre",{class:"language-xml"},[a("code",{class:"hljs"},[a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch1"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},"'large'"),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch2"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},"'normal'"),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch3"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},"'small'"),s("/>")]),s(`
    `),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"ak-switch"),s(),a("span",{class:"hljs-attr"},"v-model"),s("="),a("span",{class:"hljs-string"},'"switch4"'),s(),a("span",{class:"hljs-attr"},"size"),s("="),a("span",{class:"hljs-string"},"'mini'"),s("/>")]),s(`
  `),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"p"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"template"),s(">")]),s(`
`),a("span",{class:"hljs-tag"},[s("<"),a("span",{class:"hljs-name"},"script"),s(),a("span",{class:"hljs-attr"},"lang"),s("="),a("span",{class:"hljs-string"},'"ts"'),s(),a("span",{class:"hljs-attr"},"setup"),s(">")]),a("span",{class:"language-javascript"},[s(`
  `),a("span",{class:"hljs-keyword"},"import"),s(" { ref } "),a("span",{class:"hljs-keyword"},"from"),s(),a("span",{class:"hljs-string"},"'vue'"),s(`
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch1 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch2 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch3 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
  `),a("span",{class:"hljs-keyword"},"const"),s(" switch4 = "),a("span",{class:"hljs-title function_"},"ref"),s("("),a("span",{class:"hljs-literal"},"false"),s(`)
`)]),a("span",{class:"hljs-tag"},[s("</"),a("span",{class:"hljs-name"},"script"),s(">")]),s(`
`)])],-1),W=C('<h2 id="api">API</h2><h3 id="switch">Switch</h3><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>boolean/false</td><td>指定当前是否选中</td></tr><tr><td>disabled</td><td>boolean/false</td><td>是否禁用状态</td></tr><tr><td>closeColor</td><td>String</td><td>设置关闭时颜色值</td></tr><tr><td>activeColor</td><td>String</td><td>设置打开时颜色值</td></tr><tr><td>closeValue</td><td>String</td><td>设置关闭状态时的值</td></tr><tr><td>activeValue</td><td>String</td><td>设置打开状态时的值</td></tr><tr><td>size</td><td>String</td><td>大小尺寸，支持 <code>large</code>、<code>normal</code>、<code>small</code>、<code>mini</code> 四种尺寸，默认为 <code>normal</code></td></tr><tr><td>beforeChange</td><td>Function</td><td>选项改变前事件,return false阻止选择</td></tr></tbody></table><h3 id="switch-event">Switch Event</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>change</td><td>改变事件</td></tr></tbody></table><h3 id="switch-slot">Switch Slot</h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>open</td><td>自定义显示打开时的内容</td></tr><tr><td>close</td><td>自定义显示关闭时的内容</td></tr></tbody></table>',7),ss={__name:"README",setup(d){return(t,p)=>(i(),f("div",x,[z,S,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch1%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch2%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(false)%0A%20%20const%20switch2%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A"},{code:c(()=>[U]),default:c(()=>[l(k)]),_:1}),M,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cak-switch%20v-model%3D%22switch1%22%3E%0A%20%20%20%20%3Ctemplate%20%23open%3E%E5%BC%80%3C%2Ftemplate%3E%0A%20%20%20%20%3Ctemplate%20%23close%3E%E5%85%B3%3C%2Ftemplate%3E%0A%20%20%3C%2Fak-switch%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A"},{code:c(()=>[R]),default:c(()=>[l(D)]),_:1}),$,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch1%22%20%3Adisabled%3D%22true%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch2%22%20%3Adisabled%3D%22true%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(false)%0A%20%20const%20switch2%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A"},{code:c(()=>[N]),default:c(()=>[l(V)]),_:1}),P,I,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cp%0A%20%20%20%20%3E%7B%7B%20switch1%20%7D%7D%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch1%22%20close-color%3D%22%23999%22%20active-color%3D%22red%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A%0A"},{code:c(()=>[T]),default:c(()=>[l(F)]),_:1}),q,G,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cp%0A%20%20%20%20%3E%7B%7B%20switch1%20%7D%7D%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch1%22%20close-value%3D%22a%22%20active-value%3D%22b%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(true)%0A%3C%2Fscript%3E%0A"},{code:c(()=>[H]),default:c(()=>[l(b)]),_:1}),J,K,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch1%22%20%3AbeforeChange%3D%22beforeChange%22%20%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(false)%0A%20%20const%20beforeChange%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20alert('%E4%B8%8D%E8%83%BD%E5%88%87%E6%8D%A2')%0A%20%20%20%20return%20false%0A%20%20%7D%0A%3C%2Fscript%3E%0A"},{code:c(()=>[L]),default:c(()=>[l(y)]),_:1}),O,l(u(m),{code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch1%22%20size%3D'large'%2F%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch2%22%20size%3D'normal'%2F%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch3%22%20size%3D'small'%2F%3E%0A%20%20%20%20%3Cak-switch%20v-model%3D%22switch4%22%20size%3D'mini'%2F%3E%0A%20%20%3C%2Fp%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0A%20%20import%20%7B%20ref%20%7D%20from%20'vue'%0A%20%20const%20switch1%20%3D%20ref(false)%0A%20%20const%20switch2%20%3D%20ref(false)%0A%20%20const%20switch3%20%3D%20ref(false)%0A%20%20const%20switch4%20%3D%20ref(false)%0A%3C%2Fscript%3E%0A"},{code:c(()=>[Q]),default:c(()=>[l(B)]),_:1}),W]))}};export{ss as default};
