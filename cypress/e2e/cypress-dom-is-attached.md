<!-- fiddle Example -->
```html
<button id="button"></button>
<script> 
  var i = document.getElementById('button');
  var randomNum = Math.floor(Math.random()*4)
  i.innerText = randomNum
</script>
```

```js
cy.contains('#button', '3')
  .should(Cypress._.noop)
  .then($item => {
    if(Cypress.dom.isAttached($item)) {
      cy.log('Exists!')
    } else {
      cy.log('Does not exist!')
    }
  })
```
<!-- fiddle.end -->