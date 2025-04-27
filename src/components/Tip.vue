<template>
	<div class="tip">
		<span class="tip-label"><icon icon="info-circle" />Tip</span>
		<span class="tip-content">
			<slot></slot>
		</span>
	</div>
</template>

<style scoped lang="scss">
.tip {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	border: 1px solid rgb(var(--text));
	border-radius: var(--border-radius);
	background-color: rgba(var(--primary), 0.15);
	padding: 0.5rem;
	max-width: max-content;
	margin: 0.5rem 0;
}

.tip-label {
	display: inline-flex;
	gap: 0.25rem;
	align-items: center;
	border-radius: var(--border-radius);
	background-color: rgb(var(--primary));
	color: rgb(var(--background));
	padding: 0.15rem 0.5rem;
	font-size: small;
}
</style>
