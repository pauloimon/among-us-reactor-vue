<template>
    <div class="reactor-panel">
        <div class="leds-wrapper">
            <div v-for="led in leds" class="led" :class="{ on: led <= score }"></div>
        </div>

        <div class="buttons-wrapper">
            <button v-for="button in buttons" type="button"></button>
        </div>
    </div>
</template>

<script>
    import ReactorPanel from './reactor-panel'

    export default {
        name: 'ReactorUserPanel',

        extends: ReactorPanel,
    }
</script>
