const multiLib = require("multi-lib/library");
const fabs=[
  ["copper/1","whiw-uu-matter/10","copper/0"],
  ["lead/1","whiw-uu-matter/10","lead/0"],
  ["metaglass/1","whiw-uu-matter/15","metaglass/0"],
  ["graphite/1","whiw-uu-matter/15","graphite/0"],
  ["sand/1","whiw-uu-matter/5","sand/0"],
  ["coal/1","whiw-uu-matter/10","coal/0"],
  ["titanium/1","whiw-uu-matter/30","titanium/0"],
  ["thorium/1","whiw-uu-matter/60","thorium/0"],
  ["scrap/1","whiw-uu-matter/50","scrap/0"],
  ["silicon/1","whiw-uu-matter/15","silicon/0"],
  ["plastanium/1","whiw-uu-matter/40","plastanium/0"],
  ["phase-fabric/1","whiw-uu-matter/125","phase-fabric/0"],
  ["surge-alloy/1","whiw-uu-matter/175","surge-alloy/0"],
  ["spore-pod/1","whiw-uu-matter/5","spore-pod/0"],
  ["blast-compound/1","whiw-uu-matter/25","blast-compound/0"],
  ["pyratite/1","whiw-uu-matter/15","pyratite/0"],
];
var recs = [];
//var fab;
for (let fab of fabs) {
  recs.push(
    {
      input: {
        power: 20,
        items: [fab[0]],
      },
      output: {
        liquids: [fab[1]],
        items: [fab[2]],
      },
      craftTime: 10,
    }
  )
} 
print(recs);
const massFab = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "mass-fab", recs, {
  /*you can customize block here. ex) load()*/
},

function Extra(){
  /*you can use customUpdate = function(){}. this function excuted before update()
  also this.draw = function(){}
  you can customize entity here.
  ex)
  this._myProp=0;
  this.getMyProp=function(){
      return this._myProp;
  };
  this.setMyProp=function(a){
      this._myProp=a;
  };*/
});
/*
YOU MUST NOT MODIFY VALUE OF THESE
configurable
outputsPower
hasItems
hasLiquids
hasPower
*/

massFab.itemCapacity = 50;
massFab.liquidCapacity = 500;
massFab.size = 2;
massFab.health = 100;
massFab.craftEffect = Fx.pulverizeMedium;
massFab.updateEffect = Fx.none;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
massFab.dumpToggle = true;
massFab.drawer = new DrawLiquid();
massFab.category = Category.crafting;
massFab.buildVisibility = BuildVisibility.shown;
massFab.alwaysUnlocked = true;
massFab.requirements = ItemStack.with(Items.copper,75);