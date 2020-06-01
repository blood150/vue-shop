<template>
	<div>
		<box :id="this.$route.params.id"></box>
	</div>
</template>
<script>
	import commit from '../subcomonents/commit.vue'
	export default {
		components:{
			"box":commit
		}
	}
</script>
<style lang="scss" scoped>
	
</style>