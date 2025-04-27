<script lang="ts" setup>
import { ref, useTemplateRef } from "vue";

const code = useTemplateRef("inline-code"),
	checked = ref(false);

const copy = () => {
	if (code.value?.textContent) {
		navigator.clipboard.writeText(code.value.textContent);
		checked.value = true;
		setTimeout(() => {
			checked.value = false;
		}, 1000);
	}
};
</script>

<template>
	<code class="inline-code" ref="inline-code">
		<slot></slot>
		<button ref="code-copy" type="button" class="code-copy" title="Copy" @click="copy">
			<icon v-if="checked" icon="check-circle" />
			<icon v-else icon="clipboard" />
		</button>
	</code>
</template>

<style scoped lang="scss">
.inline-code {
	display: inline-flex;
	gap: 0.5rem;
	align-items: center;
	border: 1px solid rgb(var(--text));
	border-radius: var(--border-radius);
	background-color: black;
	color: white;
	padding: 0.25rem;
	font-family: var(--monospace);
	font-size: small;
}
</style>
