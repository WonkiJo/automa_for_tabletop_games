<template>
  <div class="automa-card">
    <h2>{{ card.id }}번 카드</h2>
    <ul>
      <li v-for="(desc, index) in card.description" :key="index">
        {{ desc }}
      </li>
    </ul>
    <button @click="selectNext">다음</button>
    <button @click="exit">종료</button>
  </div>
</template>

<script>
export default {
  name: 'AutomaCard',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectNext() {
      this.$emit('next-selected', this.card.id);
    },
    exit() {
      this.$emit('exit-selected');
    }
  }
}
</script>

<style scoped>
.automa-card {
  border: 1px solid #ddd;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5px;
}

button {
  margin-top: 15px;
  margin-right: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
