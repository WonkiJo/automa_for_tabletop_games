<template>
    <div class="difficulty-selection">
      <h2>게임 준비</h2>
      <div class="setup-info">
        <ul>
          <li v-for="(step, index) in setup" :key="index">{{ step }}</li>
        </ul>
      </div>
      <h2>난이도 선택</h2>
      <div v-for="(difficulty, index) in difficulties" :key="index" class="difficulty-option">
        <button @click="selectDifficulty(index)" class="difficulty-button">
          {{ difficulty.label }}
        </button>
        <div class="difficulty-description">
          <ul>
            <li v-for="(desc, descIndex) in difficulty.description" :key="descIndex">
              {{ desc }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import gwt_automa_data from '@/data/gwt_automa_data.json'
  
  export default {
    name: 'DifficultySelection',
    data() {
      return {
        setup: gwt_automa_data.setup,
        difficulties: gwt_automa_data.difficulties
      }
    },
    methods: {
      selectDifficulty(index) {
        this.$emit('difficulty-selected', index)
      }
    }
  }
  </script>
  
  <style scoped>
  .difficulty-selection {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  .setup-info {
    text-align: left;
    margin-bottom: 30px;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  .setup-info ul, .difficulty-description ul {
    padding-left: 20px;
  }
  .setup-info li, .difficulty-description li {
    margin-bottom: 10px;
  }
  .difficulty-option {
    margin-bottom: 20px;
    text-align: left;
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease;
  }
  .difficulty-option:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  .difficulty-button {
    display: inline-block;
    margin-bottom: 15px;
    padding: 12px 24px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    transition: background-color 0.3s, transform 0.1s;
  }
  .difficulty-button:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
  .difficulty-button:active {
    transform: translateY(0);
  }
  .difficulty-description {
    font-size: 14px;
    color: #555;
    line-height: 1.6;
  }
  h2 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  </style>