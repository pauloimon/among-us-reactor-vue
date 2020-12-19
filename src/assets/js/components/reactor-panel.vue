<template>
    <div class="reactor-panel">
        <div class="leds-wrapper">
            <div class="led on"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
            <div class="led"></div>
        </div>

        <div v-if="hasScreen" class="screen"></div>

        <div class="buttons-wrapper">
            <button type="button" class="blinking"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
            <button type="button"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ReactorPanel',

        props: {
            hasScreen: Boolean,
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
