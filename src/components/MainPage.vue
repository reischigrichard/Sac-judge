<template>
  <div>
    <div class="upper_part">
      <div class="upper_part-logo">
        <h1>Sac-judge</h1>
      </div>
    </div>
    <div class="main_part">
      <div class="main_part-text">
        <h2>Welcome to Sac-judge!</h2>
        <p>
          You will be presented with 5 different chess games where one of the
          players just sacrificed something. Your job is to analyze the position
          and then select if you think that the sacrifice was good or not. After
          you click your selection you will see the result as well as the
          description about the whole game. Please enjoy!
        </p>

        <div class="main_part-text-line"></div>

        <h3>Select your difficluty</h3>
      </div>
      <div class="main_part-buttons">
        <router-link
          to="/easy"
          class="main_part-buttons-easy_button button_properties"
        >
          <p>EASY</p>
        </router-link>
        <router-link
          to="/medium"
          class="main_part-buttons-medium_button button_properties"
        >
          <p>MEDIUM</p>
        </router-link>
        <router-link
          to="/hard"
          class="main_part-buttons-hard_button button_properties"
        >
          <p>HARD</p>
        </router-link>
      </div>
    </div>
    <div class="bottom_part">
      <div class="bottom_part-credits">
        <p>© Reischig Richard 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.upper_part {
  text-align: left;
  height: 10%;
  padding: 0.2% 2%;
  font-size: 20px;
}

.main_part {
  height: 30%;
  text-align: center;
  padding: 3% 0;

  &-text {
    width: 45%;
    margin: 0 auto;

    & h2 {
      font-size: 30px;
    }

    &-line {
      height: 5px;
      width: 60px;
      background-color: black;
      margin: 10% auto;
      border-radius: 2px;
    }
  }

  &-buttons {
    margin: 1% auto;
    width: 50%;
    display: inline-block;

    &-easy_button {
      background-color: #4aa96c;
      text-decoration: none;
    }

    &-medium_button {
      background-color: #ff7b54;
      text-decoration: none;
    }

    &-hard_button {
      background-color: #fb3640;
      text-decoration: none;
    }
  }

  &-buttons p {
    color: white;
    font-weight: bold;
    margin: 15px 0;
    text-align: center;
    font-size: 22px;
  }
}

.button_properties {
  width: 20%;
  height: 60px;
  border-radius: 10px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 3%;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.2s ease-in-out;
}

.button_properties:hover {
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}

.bottom_part {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 80px;
  width: 100%;
  background-color: #e4efe7;
  color: black;
  text-align: center;
}

.bottom_part p {
  margin: 30px 0;
  font-size: 18px;
}
</style>
