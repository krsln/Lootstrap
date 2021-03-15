```scss
@mixin media($width) {
  @media only screen and (max-width: $width) {
    @content;
  }
}

@include media(320px) {
  background: red;
}

//Generates:
@media only screen and (max-width: 320px) {
  background: red;
}
```


```shell
Install Node.js

Install NPM

Create package.json file.

Write {} in the package.json file.

Run command: npm install

Run command to install Node-Sass: npm install node-sass

Write this code into the package.json file
```
