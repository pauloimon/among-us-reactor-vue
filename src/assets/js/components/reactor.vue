<template>
    <div class="reactor">
        <reactor-computer-panel :score="score"></reactor-computer-panel>
        <reactor-user-panel :score="score"></reactor-user-panel>
    </div>
</template>

<script>
    import ReactorComputerPanel from './reactor-computer-panel'
    import ReactorUserPanel from './reactor-user-panel'

    export default {
        name: 'Reactor',

        components: {
            ReactorComputerPanel,
            ReactorUserPanel,
        },

        data() {
            return {
                score: 0,
            }
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
