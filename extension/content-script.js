function handleMutations() {
  let nextButton = $('[data-purpose="go-to-next-button"]')
  if (nextButton.length > 0) {
    nextButton.click()
  }
}

let observer = new MutationObserver(handleMutations)
observer.observe(document.body, {childList: true, subtree: true})