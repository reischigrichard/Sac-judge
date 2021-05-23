<template>
	<div>
		<div class="main_content">
		<div class="main_content-info">
			<h2>
				{{playerColor}} just played {{move}}, was this a <span class="main_content-info-good">good</span> 
				sacrifice for {{playerColor.toLowerCase()}} or <span class="main_content-info-bad">not?</span>
			</h2>
			</div>
			<router-link v-if="guessMade" to="/easy/final" class="main_content-next_arrow" ><h2>---> See result</h2></router-link>
			<img :src="getImgUrl(position)" class="main_content-chess_board"/>
			<div v-if="!guessMade" class="main_content-buttons">
				<div @click="goodButton" class="main_content-buttons-good judge_button"><p>GOOD</p></div>
				<div @click="badButton" class="main_content-buttons-bad judge_button"><p>BAD</p></div>
			</div>
			<div v-if="guessMade" class="main_content-description">
				<div class="main_content-description-guess_result">
					<h2>Your guess was <span :style="correctColor">{{correctGuess}}</span>!</h2>
				</div>
				<div class="main_content-description-line"></div>
				<div class="main_content-description-names"><h3>{{playersAndResult}}</h3></div>
				<div class="main_content-description-place_and_year"><h3>{{event}}</h3></div>
				<div v-if="!link == ''" class="main_content-description-link"><a :href="link"><h3>See the whole game!</h3></a></div>
			</div>
		</div>
	</div>
</template>

<script>
import {chess_positions} from "../easy_version-objects"
import {usedIds} from "./easy_version-position_checker"

const random_position = Math.floor(Math.random() * 11)
export default {
	data() {
		return {
			chess_positions,
			usedIds,
			move: chess_positions[random_position].move,
			playerColor: chess_positions[random_position].color,
			sacrificeId: chess_positions[random_position].id,
			result: chess_positions[random_position].result,
			position: chess_positions[random_position].position,
			playersAndResult: chess_positions[random_position].playersAndResult,
			event:chess_positions[random_position].event,
			link: chess_positions[random_position].link,
			guessMade: false,
			correctGuess: "correct",
			correctColor:{
				color: "#4aa96c"
			},
			usedPositions:[]
		}
	},
	methods: {
		getImgUrl(number) {
    	return require(`../../../../static/chess_positions/easy/${number}.png`)
		},
		goodButton() {
			if (this.result == "good") {
				this.guessMade = true
			}
			else{
				this.guessMade = true
				this.correctGuess = "wrong"
				this.correctColor.color = "#fb3640"
			}
		},
		badButton() {
			if (this.result == "bad") {
				this.guessMade = true
			}
			else{
				this.guessMade = true
				this.correctGuess = "wrong"
				this.correctColor.color = "#fb3640"
			}
		}
	}
}
</script>
<style lang="scss" scoped>
	
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
				color: #fb3640
			}
		}

		&-chess_board {
			display: block;
			width: 35%;
			margin: 0 auto;
			background-size: 100%;
			border-radius: 5px;
			border: 3px black solid;

		&:after  {
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

		&-description{
			width: 35%;
			margin: 1% auto;
			text-align: center;
			border: 3px #4aa96c solid;
			border-radius: 10px;
			padding: 0 1%;

			&-guess_result{
				font-size: 22px;
			}

			&-place_and_year h3{
				color: #aaaaaa;
			}

			&-line{
				height: 5px;
        width: 40px;
				background-color: black;
				margin: 1% auto;
			}
		}

		&-next_arrow{
				opacity: 0.1;
				position: absolute;
				top: 40%;
				right: 10%;
				font-size: 26px;
				cursor: pointer;
				text-decoration: none;

				&:hover{
					opacity: 0.3;
					color: #4aa96c;
				}
			}

	}

	.judge_button {
			width: 35%;
			height: 60px;
			border-radius: 10px;
			margin: 5% 4%;
			cursor: pointer;
			box-shadow: 0 1px 2px rgba(0,0,0,0.15);
			transition: box-shadow 0.2s ease-in-out;

				&:hover {
					box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
				}
		}
</style>