const unitCapThing = extend(CoreBlock, "unitcapthing", {
canPlaceOn(tile, team){
        return true;
    },
canBreak(tile){
        return true;
    }

})
unitCapThing.buildType = () => {
  return extend(CoreBlock.CoreBuild,unitCapThing,{});
}