const multiLib = require("multi-lib/library");
const crystallizer = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "crystalizer", [
  
      {
        input: {
          items: ["whiw-uu-crystal/1"],
          power: 1,
        },
        output: {
          liquids: ["whiw-uu-matter/500"],
        },
        craftTime: 5,
      },
      {
        input: {
          liquids: ["whiw-uu-matter/500"],
          power: 1,
        },
        output: {
          items: ["whiw-uu-crystal/1"],
        },
        craftTime: 5,
      },
], {
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
  //crystallizer.drawer = new DrawRotator()
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

crystallizer.itemCapacity = 50;
crystallizer.liquidCapacity = 1000;
crystallizer.size = 1;
crystallizer.health = 100;
crystallizer.craftEffect = Fx.pulverizeMedium;
crystallizer.updateEffect = Fx.none;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
crystallizer.dumpToggle = true;
crystallizer.category = Category.crafting;
crystallizer.buildVisibility = BuildVisibility.shown;
crystallizer.alwaysUnlocked = true;
crystallizer.requirements = ItemStack.with(Items.copper,75);