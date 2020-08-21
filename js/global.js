// POPUP Generator
global_popup = (modal_id, title, message) => {
  $('.popup-title')[0].textContent = title
  $('.popup-msg')[0].textContent = message
  
  $(`#${modal_id}`).toggle()
}

$(`.close`).click(() =>{
  $(`.modal`).toggle()
})

// $(window).click((e) => {
//   console.log(e.target)
//   if(e.target.class === 'modal'){
//     $(`.modal`).toggle()
//   }
// })



