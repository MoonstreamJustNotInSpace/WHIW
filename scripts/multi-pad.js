const multiPad = extend(CoreBlock, "multi-pad", {
    canPlaceOn(tile, team){
        return true;
    },
    canBreak(tile){
        return true;
    },
    configurable:true,
    unitType:UnitTypes.dagger,
});
    multiPad.buildType = () => extend(CoreBlock.CoreBuild, multiPad, {
        buildConfiguration(table){
        
            table.button(new TextureRegionDrawable(Core.atlas.find("dagger")), Styles.clearTransi, () => {
                this.block.unitType=UnitTypes.dagger;
            });
            table.button(new TextureRegionDrawable(Core.atlas.find("nova")), Styles.clearTransi, () => {
                this.block.unitType=UnitTypes.nova;
            });
            table.button(new TextureRegionDrawable(Core.atlas.find("crawler")), Styles.clearTransi, () => {
                this.block.unitType=UnitTypes.crawler;
            });
	   table.row();
            table.button(new TextureRegionDrawable(Core.atlas.find("flare")), Styles.clearTransi, () => {
                this.block.unitType=UnitTypes.flare;
            });
            table.button(new TextureRegionDrawable(Core.atlas.find("mono")), Styles.clearTransi, () => {
                this.block.unitType=UnitTypes.mono;
            });
            table.button(new TextureRegionDrawable(Core.atlas.find("risso")), Styles.clearTransi, () => {
                this.block.unitType=UnitTypes.risso;
            });
        }
    });
