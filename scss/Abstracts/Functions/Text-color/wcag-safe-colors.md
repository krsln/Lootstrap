## Usage

````scss
@@use 'sass:map';

$base-color: hsl(250, 53%, 54%);
$colors: wcag-safe-colors($base-color);

.wcag-safe-base-colors {
  background-color: $base-color ;
  color: map.get($colors, 'wcag21-aaa-normal-color');
  font-size: 12pt;

  --base-color: #{map.get($colors, 'base-color')};
  --wcag20-aa-normal-color: #{map.get($colors, 'wcag20-aa-normal-color')};
  --wcag20-aa-normal-ratio: #{map.get($colors, 'wcag20-aa-normal-ratio')};
  --wcag20-aa-large-color:  #{map.get($colors, 'wcag20-aa-large-color')};
  --wcag20-aa-large-ratio:  #{map.get($colors, 'wcag20-aa-large-ratio')};
  --wcag21-aa-input-color:  #{map.get($colors, 'wcag21-aa-input-color')};
  --wcag21-aa-input-ratio:  #{map.get($colors, 'wcag21-aa-input-ratio')};
  --wcag21-aaa-normal-color:#{map.get($colors, 'wcag21-aaa-normal-color')};
  --wcag21-aaa-normal-ratio:#{map.get($colors, 'wcag21-aaa-normal-ratio')};
  --wcag21-aaa-large-color: #{map.get($colors, 'wcag21-aaa-large-color')};
  --wcag21-aaa-large-ratio: #{map.get($colors, 'wcag21-aaa-large-ratio')};
}

// result
.wcag-safe-base-colors {
  background-color: #604cc8;
  color: black;
  font-size: 12pt;
  --base-color: #604cc8;
  --wcag20-aa-normal-color: black;
  --wcag20-aa-normal-ratio: 3.6894705532;
  --wcag20-aa-large-color: #171137;
  --wcag20-aa-large-ratio: 3.0865645841;
  --wcag21-aa-input-color: #171137;
  --wcag21-aa-input-ratio: 3.0865645841;
  --wcag21-aaa-normal-color:black;
  --wcag21-aaa-normal-ratio:3.6894705532;
  --wcag21-aaa-large-color: black;
  --wcag21-aaa-large-ratio: 3.6894705532;
}


````