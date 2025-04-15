```vue
<template>
  <div>
    <button @click="handleClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const buttonText = ref('クリックして！')

const handleClick = () => {
  buttonText.value = 'クリックされた！'
}
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369870;
}
</style>
```

