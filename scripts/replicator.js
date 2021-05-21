const multiLib = require("multi-lib/library");
const fabs=[
  ["copper/1","whiw-uu-matter/20","copper/0"],
  ["lead/1","whiw-uu-matter/20","lead/0"],
  ["metaglass/1","whiw-uu-matter/30","metaglass/0"],
  ["graphite/1","whiw-uu-matter/30","graphite/0"],
  ["sand/1","whiw-uu-matter/10","sand/0"],
  ["coal/1","whiw-uu-matter/20","coal/0"],
  ["titanium/1","whiw-uu-matter/60","titanium/0"],
  ["thorium/1","whiw-uu-matter/120","thorium/0"],
  ["scrap/1","whiw-uu-matter/100","scrap/0"],
  ["silicon/1","whiw-uu-matter/30","silicon/0"],
  ["plastanium/1","whiw-uu-matter/80","plastanium/0"],
  ["phase-fabric/1","whiw-uu-matter/250","phase-fabric/0"],
  ["surge-alloy/1","whiw-uu-matter/350","surge-alloy/0"],
  ["spore-pod/1","whiw-uu-matter/10","spore-pod/0"],
  ["blast-compound/1","whiw-uu-matter/50","blast-compound/0"],
  ["pyratite/1","whiw-uu-matter/30","pyratite/0"],
];
var recs = [];
//var fab;
for (let fab of fabs) {
  recs.push(
    {
      input: {
        power: 20,
        liquids: [fab[1]],
      },
      output: {
        items: [fab[0]],
      },
      craftTime: 10,
    }
  )
} 
print(recs);
const replicator = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "replicator", recs/*[
  
      {
        input: {
          items: ["pyratite/1"],
          power: 10,
        },
        output: {
          liquids: ["whiw-uu-matter/1"],
        },
        craftTime: 5,
      },
      {
        input: {
          items: ["pyratite/1"],
          power: 10,
        },
        output: {
          liquids: ["water/1"],
        },
        craftTime: 5,
      },
]*/, {
  /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/

/*default form for each recipes. You can change values.
  {
    input: {
      items: [],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
      liquids: [],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
      power:0,
    },
    output: {
      items: [],
      liquids: [],
      power: 0,
    },
    craftTime: 80,
  },*/

function Extra(){
  //replicator.drawer = new DrawRotator()
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

replicator.itemCapacity = 50;
replicator.liquidCapacity = 500;
replicator.size = 3;
replicator.health = 100;
replicator.craftEffect = Fx.pulverizeMedium;
replicator.updateEffect = Fx.none;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
replicator.dumpToggle = true;
replicator.category = Category.crafting;
replicator.buildVisibility = BuildVisibility.shown;
replicator.alwaysUnlocked = true;
replicator.requirements = ItemStack.with(Items.copper,75);