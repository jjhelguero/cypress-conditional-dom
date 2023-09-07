<!-- fiddle Example -->
```html
<div class="item">One</div>
<div class="item">Two</div>
<div class="item">Three</div>
<script> 
  var random = Math.floor(Math.random() * jQuery('.item').length);
  jQuery('.item').hide().eq(random).show();r
</script>
```

```js
cy.contains('.item', 'Three')
  .should(Cypress._.noop)
  .then($item => {
    if(Cypress.dom.isVisible($item)) {
      cy.log('Is visible!')
    } else {
      cy.log('Is NOT visible!')
    }
  })
```
<!-- fiddle.end -->