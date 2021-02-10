const miniCore = extend(CoreBlock, "mini-core", {
canPlaceOn(tile, team){
        return true;
    },
canBreak(tile){
        return true;
    }

})
miniCore.buildType = () => {
  return extend(CoreBlock.CoreBuild,miniCore,{});
}