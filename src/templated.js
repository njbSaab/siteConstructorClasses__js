// function title(block) {
//    return `
//     <div class="row">
//        <div class="col-sm">
//           <p>${block.value}</p>
//        </div>
//     </div>
//     `;
//  }
//  function text(block) {
//    return `
//     <div class="row">
//        <div class="col-sm">
//           <p>${block.value}</p>
//        </div>
//     </div>
//     `;
//  }
//  function columns(block) {
//    block.value.forEach((item) => {
 
//    });
//    const html = block.value.map(item => `<div class="col-sm">${item}</div>`)
//    return `<div class="row">
//                 ${html.join('')}
//              </div>`;
//  }
//  function image(block){
//     return `
//     <div class="row">
//         <img src ="${block.value}">
//     </div>
//     `
//  }
 


// import{row, col, css} from './utils.js'


//  export const templates ={
//    title: function (block){
//       const {tag = 'h1', styles} = block.options
//       return row(col(`<${tag}>${block.value}</${tag}>`), css(styles));
//    },
//    image: function(block){
//       const {imageStyles, alt ='', styles} = block.options
//      return row(`<img src="${block.value}" style="${css(imageStyles)}"/>`,css(styles))
//    },
//     text: function(block){ 
//       return row(col(`<p>"${block.value}"</p>`, css(block.options.styles)));
//     },
//     columns: function(block){
//       const html = block.value.map(col).join('')
//       return row(html, css(block.options.styles))
//     },
//  }