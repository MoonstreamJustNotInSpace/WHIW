const multiLib = require("multi-lib/library");
print("done!");
const etmConverter = multiLib.MultiCrafter(GenericCrafter, GenericCrafter.GenericCrafterBuild, "etm-conv", [
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
  {
    input: {
      power:10,
    },
    output: {
      items: ["copper/1"],
      power: 0,
    },
    craftTime: 30,
  },
  {
    input: {
      power:11,
    },
    output: {
      items: ["lead/1"],
      power: 0,
    },
    craftTime: 30,
  },
  {
    input: {
      power:15,
    },
    output: {
      items: ["titanium/1"],
      power: 0,
    },
    craftTime: 60,
  },
  {
    input: {
      power:20,
    },
    output: {
      items: ["thorium/1"],
      power: 0,
    },
    craftTime: 60,
  },
  {
    input: {
      power:8,
    },
    output: {
      items: ["scrap/1"],
      power: 0,
    },
    craftTime: 30,
  },
  
], {
  /*you can customize block here. ex) load()*/
},
/*this is Object constructor. This way is much better than literal way{a:123}
you can replace this with {} if you don't want to modify entity*/
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

etmConverter.itemCapacity = 50;
etmConverter.liquidCapacity = 50;
etmConverter.size = 1;
etmConverter.health = 100;
etmConverter.craftEffect = Fx.pulverizeMedium;
etmConverter.updateEffect = Fx.none;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
etmConverter.dumpToggle = true;
etmConverter.category = Category.distribution;
etmConverter.buildVisibility = BuildVisibility.shown;
etmConverter.alwaysUnlocked = true;
etmConverter.requirements = ItemStack.with(Items.copper,75);