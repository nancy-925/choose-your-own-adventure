// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20000800040b040404040b0b0b0404040404040412161616161616161616161616161616020101010101030202020201010302021214151415141514151415141514151401030202020201010101030302020201121313131313131313131313131313130809090909090909090909090909090912111111111111111111111111111111070a0a0a0a0a0a0a0a0a0a0a0a0a0a0a1211110f0c1111111111111111111111070a0a0a0a0a0a0a0a0a0a0a0a0a0a0a1211110d0e1111110f0c111111111111070a0a0a0a0a0a0a0a0a0a0a0a0a0a0a12111111111111110d0e1111111111110506060606060606060606060606060612111111111111111111111111111111`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.castle.tilePath5,sprites.swamp.swampTile0,myTiles.tile3,myTiles.tile4,myTiles.tile7,myTiles.tile8,myTiles.tile9,sprites.dungeon.floorLight2,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.stairEast], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile7":
            case "tile9":return tile9;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
