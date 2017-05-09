# vue-jquery-mask

> Vue directive jquery mask plugin

## Usage

```
$ yarn add vue-jquery-mask --dev
```

```vue
<template>
  <div class="app">
    <input type="text" v-mask="'00/00/0000'">
  </div>
</template>

<script>
import mask from 'vue-jquery-mask'

export default {
  directives: { mask }
}
</script>
```

## Reference

- [jquery-mask-plugin](https://igorescobar.github.io/jQuery-Mask-Plugin/) - A jQuery Plugin to make masks on form fields and html elements.

## License

MIT © [Dang Van Thanh](http://dangthanh.org)
