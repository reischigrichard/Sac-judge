<template>
  <div>
    <div v-if="!finalScreen" class="main_content">
      <div class="main_content-info">
        <h2>
          {{ currentPosition.color }} just played {{ currentPosition.move }},
          was this a <span class="main_content-info-good">good</span> sacrifice
          for {{ (currentPosition.color || "").toLowerCase() }} or
          <span class="main_content-info-bad">not?</span>
        </h2>
      </div>
      <div
        v-if="userGuessed"
        @click="roundAddUp"
        class="main_content-next_arrow"
      >
        <p>{{ nextArrow }}</p>
      </div>
      <img
        :src="getImgUrl(currentPosition.position)"
        class="main_content-chess_board"
      />
      <div v-if="!userGuessed" class="main_content-buttons">
        <div @click="goodButton" class="main_content-buttons-good judge_button">
          <p>GOOD</p>
        </div>
        <div @click="badButton" class="main_content-buttons-bad judge_button">
          <p>BAD</p>
        </div>
      </div>
      <div v-if="userGuessed" class="main_content-description">
        <div class="main_content-description-guess_result">
          <h2>
            Your guess was
            <span :style="correctColor">{{ currentPosition.correctGuess }}</span
            >!
          </h2>
        </div>
        <div class="main_content-description-line"></div>
        <div class="main_content-description-names">
          <h3>{{ currentPosition.playersAndResult }}</h3>
        </div>
        <div
          v-if="!currentPosition.link == ''"
          class="main_content-description-place_and_year"
        >
          <h3>{{ currentPosition.event }}</h3>
        </div>
        <div
          v-if="!currentPosition.link == ''"
          class="main_content-description-link"
        >
          <a :href="currentPosition.link"><h3>See the whole game!</h3></a>
        </div>
      </div>
    </div>
    <div v-if="finalScreen" class="result_content">
      <h2 :style="resultColor">Your score is {{ score }}/5</h2>
      <p @click="playNewRound">Play again?</p>
      <router-link class="result_content-router" to="/"><p>Back to the homepage</p></router-link
      >
    </div>
  </div>
</template>

<script>
import { chess_positions } from "./MediumVersionObject";

export default {
  data() {
    return {
      possible_positions: Array.from(Array(11).keys()),
      currentPosition: {},
      userGuessed: false,
      correctGuess: "correct",
      correctColor: {
        color: "#4aa96c",
      },
      resultColor: {
        color: "#4aa96c",
      },
      score: 0,
      round: 1,
      nextArrow: "---> Next",
      finalScreen: false,
    };
  },
  watch: {
    round(oldVal, newVal) {
      if (newVal === 5) {
        this.finalScreen = true;
        if (this.score <= 3) {
          this.resultColor.color = "#fb3640";
        } else {
          this.resultColor.color = "#4aa96c";
        }
      }
    },
  },
  created() {
    this.generateNewPosition();
  },
  methods: {
    getImgUrl(number) {
      return number
        ? require(`../../../../static/chess_positions/easy/${number}.png`)
        : "";
    },
    playNewRound(){
      this.finalScreen = false;
      this.round = 1;
      this.score = 0;
      this.nextArrow = "---> Next";
      this.possible_positions = Array.from(Array(11).keys())
    },
    goodButton() {
      if (this.currentPosition.result == "good") {
        this.userGuessed = true;
        this.correctColor.color = "#4aa96c";
        this.currentPosition.correctGuess = "correct";
        this.score = this.score + 1;
      } else {
        this.userGuessed = true;
        this.currentPosition.correctGuess = "wrong";
        this.correctColor.color = "#fb3640";
      }
    },
    badButton() {
      if (this.currentPosition.result == "bad") {
        this.userGuessed = true;
        this.correctColor.color = "#4aa96c";
        this.currentPosition.correctGuess = "correct";
        this.score = this.score + 1;
      } else {
        this.userGuessed = true;
        this.currentPosition.correctGuess = "wrong";
        this.correctColor.color = "#fb3640";
      }
    },
    generateNewPosition() {
      let random_position;
      do {
        random_position = Math.floor(Math.random() * 11);
      } while (!this.possible_positions.includes(random_position));

      this.currentPosition = chess_positions[random_position];
      this.userGuessed = false;
      this.possible_positions = this.possible_positions.filter(
        (val) => val !== random_position
      );
    },
    roundAddUp() {
      this.generateNewPosition();
      this.round++;
      if (this.round === 5) this.nextArrow = "---> See result"; }
    }
  }

</script>
