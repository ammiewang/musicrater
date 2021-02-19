var ratingClicked = false

function changeStar (id, fill) {
  if (ratingClicked) {
    return
  }
  for (let i = 0; i < parseInt(id); i++) {
    var s = document.getElementById('star' + (i+1) + 'f')
    s.style.display = fill ? 'inline' : 'none'
    // console.log(s)
  }
}

function setStar (stopChange) {
  ratingClicked = stopChange ? true : false
  var changeRating = document.getElementById('ratingButtonContainer')
  if (stopChange) {
    changeRating.style.display = 'block'
  } else {
    changeRating.style.display = 'none'
    for (let i = 0; i < 5; i++) {
      var s = document.getElementById('star' + (i+1) + 'f')
      s.style.display = 'none'
    }
  }
}

function reviewSubmitted () {
  var thanks = document.getElementById('thanksMessageContainer')
  thanks.style.display = 'block'
}
