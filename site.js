function changeIframe(isRate) {
  console.log('in here')
  console.log(isRate)
  if (isRate) {
    document.getElementById('review-iframe').style.display = 'none';
    document.getElementById('review-button').style.background = '#95a1a0';
    document.getElementById('rate-iframe').style.display = 'flex';
    document.getElementById('rate-button').style.background = '#e4f5f3';
  } else {
    document.getElementById('rate-iframe').style.display = 'none';
    document.getElementById('rate-button').style.background = '#95a1a0';
    document.getElementById('review-iframe').style.display = 'flex';
    document.getElementById('review-button').style.background = '#e4f5f3';
  }
}
