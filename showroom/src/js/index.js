const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  init () {
    window.select = document.querySelector('.default').input
  }
})
