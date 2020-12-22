<script>
    export default {
        name: 'ReactorPanel',

        props: {
            level: Number,
            reactorStatus: String,
        },

        data() {
            return {
                leds: [],
                buttons: [],
                combination: [],
            }
        },

        created() {
            this.createLeds()
            this.createButtons()
        },

        methods: {
            createLeds() {
                for (let i = 1; i < 6; i++) {
                    this.leds.push(i)
                }
            },

            createButtons() {
                for (let i = 1; i < 10; i++) {
                    this.buttons.push({
                        number: i,
                        isBlinking: false,
                    })
                }
            },

            animateButton(button) {
                button.isBlinking = true

                setTimeout(_ => button.isBlinking = false, 200)
            },
        },
    }
</script>

<style lang="scss" scoped>
    .reactor-panel {
        width: 250px;
        margin: 15px;
        padding: 30px;
        border: #000 3px solid;
        border-radius: 15px;
        background-color: #ccc;

        .leds-wrapper {
            margin-bottom: 15px;
            display: flex;
            justify-content: space-between;

            .led {
                width: 20px;
                height: 20px;
                border: #000 3px solid;
                border-radius: 50%;
                background-color: #000;

                &.on {
                    background-color: #3f0;
                }
            }
        }

        .screen {
            width: 250px;
            height: 250px;
            position: absolute;
            border-radius: 5px;
            background-color: #000;
        }

        .block {
            width: 250px;
            height: 250px;
            position: absolute;
            cursor: not-allowed;
        }

        .buttons-wrapper {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            button {
                width: 80px;
                height: 80px;
                margin-bottom: 5px;
                cursor: pointer;
                border: #000 3px solid;
                border-radius: 5px;
                outline: none;
                background-color: #888;

                &.blinking {
                    background-color: #09f;
                    z-index: 1;
                }

                &.on {
                    background-color: #3f0;
                }

                &.error {
                    background-color: #f00;
                }
            }
        }
    }
</style>
