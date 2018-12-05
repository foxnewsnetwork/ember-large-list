ember-large-list
==============================================================================

[![Build Status](https://travis-ci.org/foxnewsnetwork/ember-large-list.svg?branch=master)](https://travis-ci.org/foxnewsnetwork/ember-large-list)

[see demo here](https://foxnewsnetwork.github.io/ember-large-list/)

Want to render a large list of items in paginated groups, but Ember's DOM teardowns and setups are reducing performance, and "canonical" smoke-and-mirrors patterns (e.g. [ember-collection](https://www.npmjs.com/package/ember-collection)) is causing memory-leak crashes?

This addon is for you.

Installation
------------------------------------------------------------------------------

```
ember install ember-large-list
```

It's also up to you to provide the `compute` [template helper](https://www.npmjs.com/package/ember-composable-helpers#compute).

This repo just sorta assumes you have it. (see [how to implement](https://github.com/DockYard/ember-composable-helpers/blob/master/addon/helpers/compute.js))

Usage
------------------------------------------------------------------------------

```hbs
<ul>
  {{#large-list items=data startIndex=0 perPage=5 as |item|}}
    {{my-row-presentation data=item}}
  {{/large-list}}
</ul>
```


### How does it work?

Very simple, instead of using `each`, we use `n.times`. Consider the following pseudo-code in ruby:

```ruby
paged_list = items.slice(start_index).take(per_page)
per_page.times do |i|
  yield paged_list[i]
end
```

We can translate this idea over to hbs and javascript like so:

`large-list/component.js`
```javascript
Component.extend({
  startIndex: 0,
  perPage: 5,
  items: [
    { name: 'God of War', icon: 'images/god-of-war.png' },
    // ...
  ]
});
```
`large-list/template.hbs`
```hbs
{{#let (take items startIndex perPage) as |smallArray|}}
  {{#n-times perPage do |index|}}
    {{my-row-presentation data=(get smallArray index)}}
  {{/n-times}}
{{/let}}
```

And that's it! Instead of depending on `each` to iterate through out array, we use generic helpers `let`, `take`, and `n-times` and suddenly, we guarantee ourselves the following:

- only `perPage=5` elements are ever rendered to dom
- no custom manipulation of DOM (e.g. `this.element`) happens
- no weird `registerChild` anti-pattern

### Do I Even Need This Addon?

Not really, given how simple the actual solution to performant rendering is, all you need is the `take` helper and the `n-times` component

However, this addon does provide the helpful following

- scroll support
- action support

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-large-list`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
