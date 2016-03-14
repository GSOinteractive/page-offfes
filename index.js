
window.onload = function () {
  console.log('loaded')

  var viewMoreOffers = document.querySelector('.view-more')
  viewMoreOffers.addEventListener('click', function (e) {
    e.preventDefault()
    document.querySelector(viewMoreOffers.getAttribute('data-target')).classList.add('in')
    viewMoreOffers.parentNode.removeChild(viewMoreOffers)
  })
}
