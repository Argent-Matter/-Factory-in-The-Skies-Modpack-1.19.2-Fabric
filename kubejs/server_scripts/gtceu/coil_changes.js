ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('cupronickel_coil')             
                .itemInputs('8x gtceu:cupronickel_double_wire', '8x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:cupronickel_coil_block')
                .duration(200)
                .EUt(30)
                .inputFluids('gtceu:tin_alloy 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('kanthal_coil')             
                .itemInputs('8x gtceu:kanthal_double_wire', '12x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:kanthal_coil_block')
                .duration(300)
                .EUt(120)
                .inputFluids('gtceu:cupronickel 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('nichrome_coil')             
                .itemInputs('8x gtceu:nichrome_double_wire', '16x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:nichrome_coil_block')
                .duration(400)
                .EUt(480)
                .inputFluids('gtceu:kanthal 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('tungstensteel_coil')             
                .itemInputs('8x gtceu:tungsten_steel_double_wire', '20x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:tungstensteel_coil_block')
                .duration(500)
                .EUt(1920)
                .inputFluids('gtceu:nichrome 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('hssg_coil')             
                .itemInputs('8x gtceu:hssg_double_wire', '24x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:hssg_coil_block')
                .duration(600)
                .EUt(7680)
                .inputFluids('gtceu:tungsten_steel 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('hsss_coil')             
                .itemInputs('8x gtceu:hsss_double_wire', '28x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:hsss_coil_block')
                .duration(700)
                .EUt(7680)
                .inputFluids('gtceu:hssg 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('naquadah_coil')             
                .itemInputs('8x gtceu:naquadah_double_wire', '32x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:naquadah_coil_block')
                .duration(800)
                .EUt(30720)
                .inputFluids('gtceu:hsss 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('trinium_coil')             
                .itemInputs('8x gtceu:trinium_double_wire', '40x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:trinium_coil_block')
                .duration(1000)
                .EUt(122880)
                .inputFluids('gtceu:naquadah_alloy 144')
                .circuitMeta(3)

                event.recipes.gtceu.assembler('tritanium_coil')             
                .itemInputs('8x gtceu:tritanium_double_wire', '64x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:tritanium_coil_block')
                .duration(1200)
                .EUt(512048)
                .inputFluids('gtceu:trinium 144')
                .circuitMeta(3)
                
                event.recipes.gtceu.assembly_line('infinity_coil')
                .itemInputs('gtceu:wetware_processor_mainframe', '8x gtceu:infinity_double_wire', '8x gtceu:infinity_screw' , '64x gtceu:mica_pulp_foil', '32x gtceu:mica_pulp_foil')
                .itemOutputs('gtceu:infinity_coil_block')
                .duration(1200)
                .EUt(8000000)
                .inputFluids('gtceu:tritanium 576')
})