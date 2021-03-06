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
        class="main_content-next_arrow">
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
import { chess_positions } from "./EasyVersionObject";

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
<style lang="scss">
.main_content {
  &-info {
    width: 35%;
    margin: 2% auto;
    font-size: 20px;
    text-align: center;

    &-good {
      color: #4aa96c;
    }

    &-bad {
      color: #fb3640;
    }
  }

  &-chess_board {
    display: block;
    width: 35%;
    margin: 0 auto;
    background-size: 100%;
    border-radius: 5px;
    border: 3px black solid;

    &:after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }

  &-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45%;
    margin: 0 auto;

    & p {
      color: white;
      font-weight: bold;
      margin: 15px 0;
      text-align: center;
      font-size: 22px;
    }

    &-good {
      background-color: #4aa96c;
    }

    &-bad {
      background-color: #fb3640;
    }
  }

  &-description {
    width: 35%;
    margin: 1% auto;
    text-align: center;
    border: 3px #4aa96c solid;
    border-radius: 10px;
    padding: 0 1%;

    &-guess_result {
      font-size: 22px;
    }

    &-place_and_year h3 {
      color: #aaaaaa;
    }

    &-line {
      height: 5px;
      width: 40px;
      background-color: black;
      margin: 1% auto;
    }
  }

  &-next_arrow {
    opacity: 0.1;
    position: absolute;
    top: 40%;
    right: 15%;
    font-size: 26px;
    cursor: pointer;
    text-decoration: none;
    font-size: 36px;
    font-weight: bold;

    &:hover {
      opacity: 0.3;
      color: #4aa96c;
    }
  }
}

.result_content {
  text-align: center;

  & h2 {
    font-size: 32px;
    margin: 10% 0;
  }

  & p {
    font-size: 26px;
    opacity: 0.4;
    font-weight: bold;
    margin: 0;
    width: 30%;
    margin: 0 auto;
  }

  &-router {
    text-decoration: none;
    color: black;
  }

  & p:hover {
    color: #4aa96c;
    cursor: pointer;
  }
}

.judge_button {
  width: 35%;
  height: 60px;
  border-radius: 10px;
  margin: 5% 4%;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
}
</style>
