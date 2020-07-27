<template>
	<div id="chat-container">
		<div id="conversation-list">
			<Thread />
		</div>

		<div id="chat-title">
			<span>Rehema</span>
			<img height="20px" width="20px" src="../assets/img/trash.png" alt="Delete Conversation">
		</div>

		<div v-if="messages !== undefined">
		<div id="chat-message-list" v-for="message in messages" :key="message.id">
			<div class="message-row you-message">
				<div class="message-text">Ok then</div>
				<div class="message-time">Jun 27</div>
			</div>
			<div class="message-row other-message">
				<div class="message-text">
					{{	message.message }}  
				</div>
				<div class="message-time">Jun 27</div>
			</div>
			<!-- <div class="message-row you-message">
				<div class="message-text">Ok then</div>
				<div class="message-time">Jun 27</div>
			</div>
			<div class="message-row other-message">
				<div class="message-text">
					Yeah I think it's best we do that. Otherwise things won't work well.
					I'm adding more text here to test the sizing of the chat buble to see if it fits well  
				</div>
				<div class="message-time">Jun 27</div>
			</div>
			<div class="message-row you-message">
				<div class="message-text">Ok then</div>
				<div class="message-time">Jun 27</div>
			</div>
			<div class="message-row other-message">
				<div class="message-text">
					Yeah I think it's best we do that. Otherwise things won't work well.
					I'm adding more text here to test the sizing of the chat buble to see if it fits well  
				</div>
				<div class="message-time">Jun 27</div>
			</div> -->
		</div>
		</div>

		<div id="chat-form">
			<ChatForm />
		</div>
	</div>
</template>

<script>
import Thread from '../components/message/Thread'
import ChatForm from "../components/message/ChatForm";
import { mapGetters } from 'vuex'

export default {
  	components: {
		Thread,
		ChatForm
	},

	computed: {
		...mapGetters({
			user: 'user/getUserTo',
			messages: 'message/getThreadMessages' 
		})
	}
}
</script>

<style scoped>
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html, body {
height: 100%; 
}

html {
	font-family: Arial, Helvetica, sans-serif;
	background: linear-gradient(to right, #57c1eb 0%, #246fa8 100%);
	font-size: 10px;
}

body {
	display: grid;
	place-items: center;
}

#chat-container {
	display: grid;
	grid:
		'conversation-list chat-title' 71px
		'conversation-list chat-message-list' 1fr
		'conversation-list chat-form' 78px
		/ 275px 1fr;
	min-width: 800px;
	max-width: 1000px;
	max-height: 800px;
	width: 100%;
	height: 95vh;
	background: #FFF;
	border-radius: 10px;
	border: 1px solid rgba(0,0,0,0.25);
	box-shadow: 3px 3px 3px 3px rgba(0,0,0,0.75);
}

#search-container {
	color: #eee;
	outline: none;
	font-weight: bold;
	border-radius: 2px;
	height: 30px;
	border: 0;
	padding-left: 48px;
	padding-right: 20px;
}
 
#conversation-list {
	grid-area: conversation-list;
}

#new-message-container {
	display: grid;
	grid: 40px / 40px;
	align-content: center;
	grid-area: new-message-container;
	border-top: 1px solid rgba(0,0,0,0.25);
	border-radius: 0 0 0 10px;
}

#new-message-container a {
	display: grid;
	place-content: center center;
	background: #eee;
	border-radius: 100%;
	color: #002C88;
	text-decoration: none;
	font-size: 3.6rem;
}

#chat-title {
	display: grid;
	grid: 36px / 1fr 36px;
	align-content: center;
	align-items: center;
	grid-area: chat-title;
	color: #0048AA;
	font-weight: bold;
	font-size: 15px;
	border-radius: 0 10px 0 0;
	box-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);
	padding: 0 20px;
}

#chat-title > img {
	cursor: pointer
}

#chat-message-list {
	grid-area: chat-message-list;
	display: flex;
	flex-direction: column-reverse;
	padding: 0 20px;
	overflow-y: scroll;
}

.message-row {
	display: grid;
	grid-template-columns: 70%;
	margin-bottom: 20px;
}

.you-message {
	justify-content: end;
	justify-items: end;
}

.other-message {
	justify-items: start;
}

.message-text {
	padding: 9px 14px;
	font-size: 8 px;
	margin-bottom: 5px;
}

.message-time {
	font-size: 9 px;
	color: #777;
}

.you-message .message-text {
	background: red;
	color: #eee;
	border: 1px solid #0048AA;
	border-radius: 14px 14px 0 14px;
}

.other-message .message-text {
	background: #eee;
	color: #111;
	border: 1px solid #ddd;
	border-radius: 14px 14px 14px 0;
}

#chat-form {
	grid-area: chat-form;
	border-radius: 0 0 10px 0;
	border-top: 1px solid rgba(0,0,0,0.25);
	box-shadow: 0 1px 3px -1px rgba(0,0,0,0.75);
}
</style>
