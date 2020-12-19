<template>
    <div class="reactor">
        <reactor-panel :has-screen="true"></reactor-panel>
        <reactor-panel></reactor-panel>
    </div>
</template>

<script>
    import ReactorPanel from './reactor-panel'

    export default {
        name: 'Reactor',

        components: {
            ReactorPanel,
        },
    }
</script>

<style lang="scss" scoped>
    .reactor {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
