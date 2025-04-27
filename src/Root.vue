<script setup lang="ts">
const updated = new Date(BUILD_TIMESTAMP).toLocaleString();
</script>
<template>
	<main>
		<RouterView />
	</main>
	<hr />
	<footer>Last updated on {{ updated }}</footer>
</template>
