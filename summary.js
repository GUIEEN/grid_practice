const body = document.querySelector('body')
body.innerHTML = `
<div class="Intro">
<h1>Summary of Grid Practice</h1>
<p>with vanila CSS, HTML, JS</p>
<h2 style="font-style: italic;"> made by Seung Kwak </h2>
</div>

<div class="container"></div>
`

const container = document.querySelector('.container')

const directories = [
  '1. Course Introduction',
  '2. Your first grid',
  '3. Fraction units and repeat',
  '4. Positioning items',
  '5. Template Areas',
  '6. Auto-fit and minmax',
  '7. Implicit rows',
  '8. An awesome image grid',
  '9. Named Lines',
  '10. Justify-content and align-content',
  '11. Justify-items and align-items',
  '12. Auto-fit vs Auto-fill',
  '13. Creating an Article Layout',
  '14. Grid vs Flexbox',
]


directories.forEach((dirname, index) => {
  const sexyGrid = document.createElement('div')
  sexyGrid.setAttribute('id', `lecture${index}`)
  sexyGrid.setAttribute('class', 'sexygrid')

  sexyGrid.innerHTML = `
  <div class="header">#${dirname}</div>
  <div class="cssheader"><h2>CSS</h2></div>
  <div class="cssbox"></div>
  <div class="htmlheader"><h2>HTML</h2></div>
  <div class="htmlbox"></div>
  <div class="viewheader"><h2>View</h2></div>
  <div class="output"></div>
  `
  container.appendChild(sexyGrid)
})


directories.forEach((dirname, index) => {
  fetch(`./${dirname}/index.css`).then(response => response.text())
    .then(text => {
      const pre = document.createElement('pre')
      const code = document.createElement('code')
      code.setAttribute('class', 'language-css')
      code.innerHTML = Prism.highlight(text, Prism.languages.css)
      pre.appendChild(code)

      container.querySelector(`#lecture${index}`).querySelector('.cssbox').appendChild(pre)
      return null
    })

  fetch(`./${dirname}/index.html`).then(response => response.text())
    .then(text => {
      const pre = document.createElement('pre')
      const code = document.createElement('code')
      code.setAttribute('class', 'language-html')
      code.innerHTML = Prism.highlight(text, Prism.languages.html)
      pre.appendChild(code)

      container.querySelector(`#lecture${index}`).querySelector('.htmlbox').appendChild(pre)
      return null
    })

  container.querySelector(`#lecture${index}`).querySelector('.output').innerHTML = `
    <object id='object${index}' data = './${dirname}/index.html' type = "application/json" >
    </object >
  `
})
