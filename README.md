# GSS for Meteor

This package integrates GSS engine v2.0.0 for Meteor. It uses a build plugin that links and serves `.gss` files at `/gss/<filename>`.

## Usage

Refer to the GSS project documentation.

[GSS project site](http://gridstylesheets.org/)

[GSS github](https://github.com/gss/engine)

## Installation

```
$ meteor add neonaleon:gss
```

## Example

```
{{! myapp.html }}
<div id="container"></div>
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
```
```
/* myapp.gss */
/* normal CSS */
#one {
  background-color: red;
}
#two {
  background-color: green;
}
#three {
  background-color: blue;
}

/* CCSS */
#container[left] == ::window[left];
#container[top] == ::window[top];

#container[size] == ::window[size];

shared-width == ::window[width] / 3;

/* VFL, 3 full height equal width columns in window */
@h |-(#one)-(#two)-(#three)-| in(#container) {
  height: == ::window[height];
  width: == shared-width;
}
```

