function handleMutations() {
  let nextButton = $('[data-purpose="go-to-next-button"]')
  if (nextButton.length > 0) {
    let autoplaySetting = $('label[class^="video-viewer--autoplay-setting--"]')
    if (
      autoplaySetting.length > 0 &&
      autoplaySetting.parent().attr('aria-checked') === 'true'
    ) {
      nextButton.click()
    }
  }
}

let observer = new MutationObserver(handleMutations)
observer.observe(document.body, {childList: true, subtree: true})