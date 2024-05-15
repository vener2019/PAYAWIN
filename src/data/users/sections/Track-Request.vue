<script setup>
import features from '../request/services.js';
import { ref } from 'vue';

let isOpen = ref(1);

</script>

<template>
    <div id="track-request" class="bg-theme-primary">
        <!-- component -->
<!-- Creacte By Joker Banny -->
<div class="flex justify-center items-center">
	<div class="container rounded-lg p-14">
		<form>
			<h1 class="text-center font-bold text-white text-4xl mb-5">Track my request</h1>
				<div class="flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
					<input class="text-black flex-grow outline-none px-2 font-bold" type="text" placeholder="Search your tracking code..." />
					<div class="items-center px-2 rounded-lg space-x-4 mx-auto ">
						<LinkButton btn-type="red" link="#about">SEARCH</LinkButton>
					</div>
				</div>
		</form>
	</div>
</div>
    </div>
</template>
