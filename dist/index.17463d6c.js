function e(e){return`\n    <div class="row">\n       <div class="col-sm">\n          <p>${e.value}</p>\n       </div>\n    </div>\n    `}function t(e){return`\n    <div class="row">\n       <div class="col-sm">\n          <p>${e.value}</p>\n       </div>\n    </div>\n    `}function o(e){e.value.forEach((e=>{}));return`<div class="row">\n                ${e.value.map((e=>`<div class="col-sm">${e}</div>`)).join("")}\n             </div>`}function s(e){return`\n    <div class="row">\n        <img src ="${e.value}">\n    </div>\n    `}const i=document.querySelector("#site");[{type:"title",value:"hello world from JS"},{type:"text",value:"here we go with some text"},{type:"colums",value:["Lorem ipsum dolor sit  elit. Voluptas, eos!","here we go with some text","Lorem ipsum dolor sit  elit. Voluptas, eos!Lorem ipsum dolor sit  elit. Voluptas, eos!"]},{type:"image",value:"./assets/image.png"}].forEach((l=>{let n="";"title"===l.type?n=e(l):"text"==l.type?n=t(l):"colums"===l.type?n=o(l):"image"===l.type&&(n=s(l)),i.insertAdjacentHTML("beforeend",n)}));