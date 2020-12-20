<script>
    export default {
        name: 'ReactorPanel',

        props: {
            score: Number,
        },

        data() {
            return {
                leds: [1, 2, 3, 4, 5],
                buttons: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            }
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
            }
        }
    }
</style>
