$('#view-menu').on('click', function() {
  const menu = $('#menu').position().top;

  $('html, body').animate({
    scrollTop: menu
  }, 900)
  (this).fadeOut()
})





$('#view-connect').on('click', function() {
  const connect = $('#connect').position().top;

  $('html, body').animate({
    scrollTop: connect
  }, 900)
})

$('#view-order').on('click', function() {
  const order = $('#order').position().top;

  $('html, body').animate({
    scrollTop: order
  }, 900)
})
