<template>
    <div class="reactor">
        <reactor-computer-panel
            :level="level"
            :reactor-status="reactorStatus"
            @combination-updated="setComputerCombination"
        />

        <reactor-user-panel
            :level="level"
            :reactor-status="reactorStatus"
            @combination-updated="setUserCombination"
        />
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
                level: 1,
                computerCombination: [],
                userCombination: [],
            }
        },

        computed: {
            reactorStatus() {
                if (this.level === 0) {
                    return 'error'
                }

                if (this.level === 6) {
                    return 'on'
                }

                return 'off'
            },
        },

        watch: {
            userCombination: 'checkUserCombination',
        },

        methods: {
            setComputerCombination(combination) {
                this.computerCombination = combination
            },

            setUserCombination(combination) {
                this.userCombination = combination
            },

            checkUserCombination(userCombination) {
                const numbersMatch = (number, index) => number === this.computerCombination[index]

                if (! userCombination.every(numbersMatch)) {
                    this.resetReactor()

                    return
                }

                if (userCombination.length === this.computerCombination.length) {
                    this.level++
                }
            },

            resetReactor() {
                this.computerCombination = []
                this.level = 0

                setTimeout(_ => this.level = 1, 1000)
            },
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
