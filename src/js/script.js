$(document).ready(function () {
  $('#mobile_btn').on('click', function () { // quando o menu hamburguer for clicado

    $('#mobile_menu').toggleClass('active')
    $('#mobile_btn').find('i').toggleClass('fa-x')
  })

  const secoes = $('section')
  const navItens = $('.nav-item')

  $(window).on('scroll', function() {
    const header = $('header')
    const scrollPosicao = $(window).scrollTop() - header.outerHeight()
    let ativarSecaoIndex = 0

    if (scrollPosicao <= 0) {
      header.css('box-shadow', 'none')
    }else{
      header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)')
    }

    secoes.each(function (i) {
      const secao = $(this)
      const secaoTopo = secao.offset().top - 96
      const secaoRodape = secaoTopo + secao.outerHeight()

      if (scrollPosicao >= secaoTopo && scrollPosicao < secaoRodape) {
        ativarSecaoIndex = i
        return false
      }
    })

    navItens.removeClass('active')
    $(navItens[ativarSecaoIndex]).addClass('active')
  })

  ScrollReveal().reveal('#call-to-action',{
    origin: 'left',
    duration: 2000,
    distance: '20%'
  })

  ScrollReveal().reveal('.prato',{
    origin: 'left',
    duration: 2000,
    distance: '20%'
  })
})