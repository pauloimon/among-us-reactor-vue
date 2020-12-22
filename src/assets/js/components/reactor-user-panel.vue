<template>
    <div class="reactor-panel">
        <div class="leds-wrapper">
            <div v-for="led in leds" class="led" :class="{ on: led < level }"></div>
        </div>

        <div v-show="blockButtons || reactorStatus === 'on'" class="block"></div>

        <div class="buttons-wrapper">
            <button
                v-for="button in buttons"
                :class="{ blinking: button.isBlinking }"
                @click="registerClick(button)"
                type="button"
            ></button>
        </div>
    </div>
</template>

<script>
    import ReactorPanel from './reactor-panel'

    export default {
        name: 'ReactorUserPanel',

        extends: ReactorPanel,

        data() {
            return {
                blockButtons: false,
            }
        },

        watch: {
            level: 'startLevel',
        },

        methods: {
            startLevel(level) {
                this.combination = []

                this.blockButtons = true

                setTimeout(_ => this.blockButtons = false, 300 * level)
            },

            registerClick(button) {
                this.combination.push(button.number)

                this.animateButton(button)

                this.$emit('combination-updated', this.combination)
            },
        },
    }
</script>
