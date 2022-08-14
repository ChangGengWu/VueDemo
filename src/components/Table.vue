<template>
    <ul>
        <li v-for="each in data" :key="each">
            {{each}}
        </li>
    </ul>
</template>
<script>
export default {
  name: 'CustomTable',
  props: {
    data: Array
  }
}
</script>