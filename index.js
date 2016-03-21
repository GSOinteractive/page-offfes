
window.onload = function () {
  var listener = function (e) {
    e.preventDefault()
    var target = document.getElementById(viewMoreOffers.getAttribute('data-target'))
    if (target.classList) {
      target.classList.add('in')
    } else {
      target.className += ' in'
    }
    viewMoreOffers.parentNode.removeChild(viewMoreOffers)
    return false
  }

  var viewMoreOffers = document.querySelector('.view-more')
  if (viewMoreOffers.addEventListener) {
    viewMoreOffers.addEventListener('click', listener)
  } else {
    viewMoreOffers.onclick = listener
  }
}
