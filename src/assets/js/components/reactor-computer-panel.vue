<template>
    <div class="reactor-panel">
        <div class="leds-wrapper">
            <div v-for="led in leds" class="led" :class="{ on: led < level }"></div>
        </div>

        <div class="screen"></div>

        <div class="buttons-wrapper">
            <button
                v-for="button in buttons"
                :class="[{ blinking: button.isBlinking }, reactorStatus]"
                type="button"
            ></button>
        </div>
    </div>
</template>

<script>
    import ReactorPanel from './reactor-panel'

    export default {
        name: 'ReactorComputerPanel',

        extends: ReactorPanel,

        watch: {
            level: {
                handler: 'startLevel',
                immediate: true,
            },

            reactorStatus: 'displayReactorStatus',
        },

        methods: {
            startLevel(level) {
                if (level === 0 || level === 6) {
                    this.combination = []

                    return
                }

                const generatedNumber = this.generateRandomNumber()

                this.combination.push(generatedNumber)

                this.displayCombination()

                this.$emit('combination-updated', this.combination)
            },

            generateRandomNumber() {
                return Math.floor(Math.random() * 9) + 1
            },

            async displayCombination() {
                await this.$nextTick()

                this.combination.forEach((number, index) => {
                    const button = this.buttons.find(button => button.number === number)

                    setTimeout(_ => this.animateButton(button), 300 * index)
                })
            },

            displayReactorStatus(reactorStatus) {
                if (reactorStatus === 'error') {
                    this.buttons.forEach(button => this.animateButton(button))
                }

                if (reactorStatus === 'on') {
                    this.buttons.map(button => button.isBlinking = true)
                }
            },
        },
    }
</script>
