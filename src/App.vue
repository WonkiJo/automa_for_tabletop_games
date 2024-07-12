<template>
  <div id="app">
    <h1>{{ gameData.name }}</h1>
    <DifficultySelection v-if="!selectedDifficulty" @difficulty-selected="onDifficultySelected" />
    <AutomaCard v-else :card="selectedCard" @next-selected="onNextSelected" @exit-selected="onExitSelected" />
  </div>
</template>

<script>
import gameData from './data/gwt_automa_data.json'
import AutomaCard from './components/AutomaCard.vue'
import DifficultySelection from './components/DifficultySelection.vue'

export function shuffleArray(array) {
  const newArray = array.slice(); // 원본 배열을 변경하지 않기 위해 복사본을 만듦
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default {
  name: 'App',
  components: {
    AutomaCard,
    DifficultySelection
  },
  data() {
    return {
      gameData,
      selectedDifficulty: null,
      usageCardIds: null,
      selectedCardIdIndex: null,
      selectedCard: null      
    }
  },
  methods: {
    onDifficultySelected(index) {
      this.selectedDifficulty = this.gameData.difficulties[index]
      this.cards = this.gameData.cards
      this.usageCardIds = shuffleArray(this.selectedDifficulty.usageCardIds)

      this.selectedCardIdIndex = 0
      this.selectedCard = this.cards.find(card => card.id == this.usageCardIds[this.selectedCardIdIndex])
    },
    onNextSelected() {
      this.selectedCardIdIndex++
      if (this.selectedCardIdIndex >= this.usageCardIds.length) {
        this.selectedCardIdIndex = 0
        this.usageCardIds = shuffleArray(this.selectedDifficulty.usageCardIds)
        alert('카드를 섞어 다시 시작합니다.')
      }
      this.selectedCard = this.cards.find(card => card.id == this.usageCardIds[this.selectedCardIdIndex])
    },
    onExitSelected() {
      this.selectedDifficulty = null
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
