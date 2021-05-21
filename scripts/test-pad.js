const testPad = extend(CoreBlock, "test-pad", {
canPlaceOn(tile, team){
        return true;
    },
canBreak(tile){
        return true;
    }

})
testPad.buildType = () => {
  return extend(CoreBlock.CoreBuild,testPad,{});
}