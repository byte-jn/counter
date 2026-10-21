// RAW SVG PIXEL ART MATRIX DEFINITIONS FOR ALL THEMES
let PIXEL_ART_DATA = null;
let PIXEL_MATRICES = {};
const pixelSvgCache = new Map();

async function loadPixelArt() {
    try {
        PIXEL_ART_DATA = {
            "version": 1,
            "spriteSize": [
                16,
                16
            ],
            "palette": {
                ".": "transparent",
                "K": "#20212b",
                "W": "#fff3d6",
                "B": "#3478f6",
                "C": "#46d9e8",
                "R": "#f04452",
                "Y": "#ffd34e",
                "G": "#49c66e",
                "O": "#f28c28",
                "P": "#9b65e8",
                "S": "#d4d9e5",
                "~": "#91a5bc"
            },
            "themes": {
                "classic": [
                {
                    "name": "star",
                    "pixels": [
                    ".......Y........",
                    "......YYY.......",
                    "......YYY.......",
                    "..BBBBYYYBBBB...",
                    "...BBBBYBBB.....",
                    "....BBBBYB......",
                    ".....BBBB.......",
                    "....BBBBBBB.....",
                    "...BBBBBBBBB....",
                    "..BBBBBBBBBBB...",
                    "..BBB....BBB....",
                    ".BB........BB...",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "coin",
                    "pixels": [
                    ".....GGGGGG.....",
                    "...GGYYYYYYGG...",
                    "..GYYYYYYYYYYG..",
                    ".GYYYYYYYYYYYYG.",
                    ".GYYYGGYYGGYYYG.",
                    "GYYYGGYYGGYYYG..",
                    "GYYYYYYGGYYYYYG.",
                    "GYYYYYYGGYYYYYG.",
                    "GYYYGGYYGGYYYG..",
                    ".GYYYGGYYGGYYYG.",
                    ".GYYYYYYYYYYYYG.",
                    "..GYYYYYYYYYYG..",
                    "...GGYYYYYYGG...",
                    ".....GGGGGG.....",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "heart",
                    "pixels": [
                    "................",
                    "..RRR....RRR....",
                    ".RRRR..RRRR.....",
                    ".RRRRRRRRRRRR...",
                    "RRRRRRRRRRRRRR..",
                    "RRRRRRRRRRRRRR..",
                    "RRRRRRRRRRRRRR..",
                    "RRRRRRRRRRRRRR..",
                    "RRRRRRRRRRRRRR..",
                    ".RRRRRRRRRRRR...",
                    "..RRRRRRRRRR....",
                    "...RRRRRRRR.....",
                    "....RRRRRR......",
                    ".....RRR........",
                    "......R.........",
                    "................"
                    ]
                },
                {
                    "name": "gem",
                    "pixels": [
                    ".......C........",
                    "......CCC.......",
                    ".....CCCCC......",
                    "....CCWWCCC.....",
                    "...CCWWWWCCC....",
                    "..CCWWWWWWCCC...",
                    "..CCWWWWWWWWC...",
                    "..CCWWWWWWWWC...",
                    "..CCWWWWWWCCC...",
                    "...CCWWWWCCC....",
                    "....CCWWCCC.....",
                    ".....CCCCC......",
                    "......CCC.......",
                    ".......C........",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "mushroom",
                    "pixels": [
                    ".....RRRRRR.....",
                    "...RRRWWWWRRR...",
                    "..RRWWWWWWWWRR..",
                    ".RRWWRRWWRRWWRR.",
                    "RRWWRRRRRRRRWWRR",
                    "RRRRRRRRRRRRRRRR",
                    "..BBBBBBBBBBBB..",
                    "...BBKKBBBBKK...",
                    "...BBKKBBBBKK...",
                    "....BBBBBBBB....",
                    ".....BBBBBB.....",
                    ".....BB..BB.....",
                    ".....BB..BB.....",
                    "....BBBBBBBB....",
                    "................",
                    "................"
                    ]
                }
                ],
                "old": [
                {
                    "name": "gameboy",
                    "pixels": [
                    "....KKKKKKKK....",
                    "...KGGGGGGGGK...",
                    "..KGGGGGGGGGGK..",
                    ".KGGGKKKKKKGGGK.",
                    ".KGGKGGGGGGKGGK.",
                    "KGGKGGKKKKGGKGGK",
                    "KGGKGGKGGKGGKGGK",
                    "KGGKGGKKKKGGKGGK",
                    "KGGKGGGGGGGGKGGK",
                    "KGGKKKKKKKKKKGGK",
                    "KGGGGGGGGGGGGGGK",
                    ".KKKKKKKKKKKKKK.",
                    "..KGGGGGGGGGGK..",
                    "...KKKKKKKKKK...",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "skull",
                    "pixels": [
                    ".....WWWWWW.....",
                    "...WWWWWWWWWW...",
                    "..WWWKKWWKKWWW..",
                    ".WWWKKKWWKKKWWW.",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    ".WWWWWWWWWWWWWW.",
                    "..WWWWWWWWWW....",
                    "...WWW..WWW.....",
                    "..KKK....KKK....",
                    "..KKK....KKK....",
                    "...KKKKKKKK.....",
                    "....KKKKKK......",
                    ".....KKKK.......",
                    "................"
                    ]
                },
                {
                    "name": "trophy",
                    "pixels": [
                    ".....YYYYYY.....",
                    "....YYWWWWYY....",
                    "....YYWWWWYY....",
                    "....YYYYYYYY....",
                    ".....YYYYYY.....",
                    "......YYYY......",
                    "......YYYY......",
                    ".....KKKKKK.....",
                    "....KKKKKKKK....",
                    "...KKYYYYKKK....",
                    "..KKYYYYYYKK....",
                    "..KKYYYYYYKK....",
                    "...KKYYYYKK.....",
                    "....KKKKKK......",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "robot",
                    "pixels": [
                    "....CCCCCCCC....",
                    "...CCCCCCCCCC...",
                    "..CCKKKKKKKKCC..",
                    ".CCKKWWKKWWKKCC.",
                    ".CCKKWWKKWWKKCC.",
                    "CCKKKKKKKKKKKKCC",
                    "CCKKKCCCCCCKKKCC",
                    "CCKKCCCCCCCCKKCC",
                    "CCKKKKKKKKKKKKCC",
                    ".CCKKKKKKKKKKCC.",
                    "..CCCCCCCCCCCC..",
                    "....CC....CC....",
                    "....CC....CC....",
                    "...CCCC..CCCC...",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "ghost",
                    "pixels": [
                    ".....WWWWWW.....",
                    "...WWWWWWWWWW...",
                    "..WWWWWWWWWWWW..",
                    ".WWWKKWWWWKKWWW.",
                    "WWWKKKWWWWKKKWWW",
                    "WWWKKKKWWKKKKWWW",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    ".WWWWWWWWWWWWWW.",
                    "..WWWWWWWWWWWW..",
                    "...WWWW..WWWW...",
                    "................",
                    "................"
                    ]
                }
                ],
                "dinos": [
                {
                    "name": "t-rex",
                    "pixels": [
                    "........GGGG....",
                    ".......GGGGGG...",
                    "......GGGGGGGG..",
                    "......GGGWWGGG..",
                    "......GGGKKGGG..",
                    "GG....GGGGGGGG..",
                    "GGG..GGGGGGGGG..",
                    ".GGGGGGGGGGGGGG.",
                    "..GGGGGGGGGGGGG.",
                    "...GGGGGGGGGG...",
                    "....GGGGGG......",
                    "...GGG..GGG.....",
                    "..GGGG..GGGG....",
                    "..GG....GG......",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "stegosaurus",
                    "pixels": [
                    "......GGG.......",
                    ".....GGGGG......",
                    "...GGGGGGGGG....",
                    "..GGGGGGGGGGGG..",
                    ".GGGGGGGGGGGGGGG",
                    "GGGGGGGGGGGGGGGG",
                    "GGGGGGGGGGGGGGGG",
                    "..GGGGGGGGGGGG..",
                    "...GGGGGGGGGG...",
                    "....GGGGGGGG....",
                    "....GGG..GGG....",
                    "...GGG....GGG...",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "egg",
                    "pixels": [
                    "......WWWW......",
                    ".....WWWWWW.....",
                    "....WWWWWWWW....",
                    "...WWWWWWWWWW...",
                    "..WWWWWWWWWWWW..",
                    "..WWWWGGGGWWWW..",
                    ".WWWWGGGGGGWWWW.",
                    ".WWWWGGGGGGWWWW.",
                    "..WWWWGGGGWWWW..",
                    "..WWWWWWWWWWWW..",
                    "...WWWWWWWWWW...",
                    "....WWWWWWWW....",
                    ".....WWWWWW.....",
                    "......WWWW......",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "ptero",
                    "pixels": [
                    ".....GG....GG...",
                    "...GGGGG..GGGG..",
                    "..GGGGGGGGGGGG..",
                    ".GGGGGGGGGGGGGGG",
                    "GGGGGGGGGGGGGGGG",
                    "..GGGGGGGGGGGG..",
                    "...GGGGGGGGGG...",
                    "....GGGGGGGG....",
                    ".....GGGGGG.....",
                    "......GGGG......",
                    ".....GG..GG.....",
                    "....GG....GG....",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "fossil",
                    "pixels": [
                    "......YYYY......",
                    ".....YYYYYY.....",
                    "....YYKKKKYY....",
                    "...YYKYYYYKYY...",
                    "..YYKYYKKYYKYY..",
                    ".YYKYYKYYKYYKYY.",
                    "YYKYYKYYYYKYYKYY",
                    "YYKYYKYYYYKYYKYY",
                    ".YYKYYKYYKYYKYY.",
                    "..YYKYYKKYYKYY..",
                    "...YYKYYYYKYY...",
                    "....YYKKKKYY....",
                    ".....YYYYYY.....",
                    "......YYYY......",
                    "................",
                    "................"
                    ]
                }
                ],
                "humans": [
                {
                    "name": "knight",
                    "pixels": [
                    ".....SSSSSS.....",
                    "....SSSSSSSS....",
                    "....SSKKKKSS....",
                    "....SSKWWKSS....",
                    "....SSKKKKSS....",
                    ".....SSSSSS.....",
                    "...BBBBBBBBBB...",
                    "..BBBBRRBBBBBB..",
                    "..BBB..RR..BBB..",
                    "..BBB..RR..BBB..",
                    ".....RRRRRR.....",
                    ".....RR..RR.....",
                    ".....RR..RR.....",
                    "....RR....RR....",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "wizard",
                    "pixels": [
                    "......PPPP......",
                    ".....PPPPPP.....",
                    "....PPPPPPPP....",
                    "...PPPPPPPPPP...",
                    "......SSSS......",
                    ".....SSWWSS.....",
                    ".....SSKKSS.....",
                    "......SSSS......",
                    "....BBBBBBBB....",
                    "...BBBBBBBBBB...",
                    "..BBBYBBBBYBBB..",
                    "....BB....BB....",
                    "....BB....BB....",
                    "...BBB....BBB...",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "pirate",
                    "pixels": [
                    ".....KKKKKK.....",
                    "...KKKKKKKKKK...",
                    "..KKKKKKKKKKKK..",
                    "..KKWWWWWWWWKK..",
                    "...WWWWWWWWWW...",
                    "....SSSSSSSS....",
                    "....SSKSSKSS....",
                    "....SSSSSSSS....",
                    "...SSSSRRSSSS...",
                    "...SSSSSSSSSS...",
                    "....SSSSSSSS....",
                    ".....SS..SS.....",
                    "....SS....SS....",
                    "...SS......SS...",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "scientist",
                    "pixels": [
                    ".....WWWWWW.....",
                    "....WWWWWWWW....",
                    "....WWKKKKWW....",
                    "....WWKWWKWW....",
                    "....WWKKKKWW....",
                    ".....WWWWWW.....",
                    "...CCCCCCCCCC...",
                    "..CCWWCCCCWWCC..",
                    "..CCWWCCCCWWCC..",
                    "..CCCCCCCCCCCC..",
                    "...CC..CC..CC...",
                    "...CC..CC..CC...",
                    "..CC...CC...CC..",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "farmer",
                    "pixels": [
                    ".....YYYYYY.....",
                    "....YYYYYYYY....",
                    "...YYYYYYYYYY...",
                    "..YYYYYYYYYYYY..",
                    "..YYYYYYYYYYYY..",
                    "....SSSSSSSS....",
                    "....SSKSSKSS....",
                    "....SSSSSSSS....",
                    "...SSSSSSSSSS...",
                    "...SSGGGGSSSS...",
                    "....SSGGGGSS....",
                    ".....SS..SS.....",
                    "....SS....SS....",
                    "...SS......SS...",
                    "................",
                    "................"
                    ]
                }
                ],
                "cats": [
                {
                    "name": "orange cat",
                    "pixels": [
                    "..OO......OO....",
                    ".OOO......OOO...",
                    ".OOOO....OOOO...",
                    "..OOOOOOOOOO....",
                    "..OOOKKKKOOO....",
                    "..OOOKWWKOOO....",
                    "..OOOKKKKOOO....",
                    "..OOOOOOOOOO....",
                    "...OOORROOO.....",
                    "....OOOOOO......",
                    "...OO....OO.....",
                    "..OOO....OOO....",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "black cat",
                    "pixels": [
                    "..KK......KK....",
                    ".KKK......KKK...",
                    ".KKKK....KKKK...",
                    "..KKKKKKKKKK....",
                    "..KKKWWKKWWK....",
                    "..KKKKKKKKKK....",
                    "...KKKRRKKK.....",
                    "....KKKKKK......",
                    "...KK....KK.....",
                    "..KKK....KKK....",
                    "................",
                    "................",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "sleepy cat",
                    "pixels": [
                    "..KK......KK....",
                    ".KKK......KKK...",
                    ".KKKK....KKKK...",
                    "..KKKKKKKKKK....",
                    "..KKKKKKKKKK....",
                    "..KKK~~~~KKK....",
                    "..KKKKKKKKKK....",
                    "...KKKKKKKK.....",
                    "....KKKKKK......",
                    "...KK....KK.....",
                    "..KKK....KKK....",
                    "................",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "calico",
                    "pixels": [
                    "..OO......WW....",
                    ".OOO......WWW...",
                    ".OOOO....WWWW...",
                    "..OOOOOOOOOO....",
                    "..OOOKKKKOOO....",
                    "..OOOKWWKOOO....",
                    "..OOOKKKKOOO....",
                    "..WWWWOOOOOO....",
                    "...WWWRROOO.....",
                    "....OOOOOO......",
                    "...OO....OO.....",
                    "..OOO....OOO....",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "pixel paw",
                    "pixels": [
                    "....OO....OO....",
                    "...OOOO..OOOO...",
                    "...OOOO..OOOO...",
                    "....OO....OO....",
                    "................",
                    "..KKKKKKKKKKKK..",
                    ".KKKKKKKKKKKKKK.",
                    "KKKKKKKKKKKKKKKK",
                    "KKKKKKKKKKKKKKKK",
                    ".KKKKKKKKKKKKKK.",
                    "..KKKKKKKKKKKK..",
                    "...KKKKKKKKKK...",
                    "....KKKKKKKK....",
                    ".....KKKKKK.....",
                    "................",
                    "................"
                    ]
                }
                ],
                "symbols": [
                {
                    "name": "heart",
                    "pixels": [
                    "....RRRR..RRRR..",
                    "..RRRRRRRRRRRR..",
                    ".RRRRRRRRRRRRRR.",
                    "RRRRRRRRRRRRRRRR",
                    "RRRRRRRRRRRRRRRR",
                    "RRRRRRRRRRRRRRRR",
                    ".RRRRRRRRRRRRRR.",
                    "..RRRRRRRRRRRR..",
                    "...RRRRRRRRRR...",
                    "....RRRRRRRR....",
                    ".....RRRRRR.....",
                    "......RRRR......",
                    ".......RR.......",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "lightning",
                    "pixels": [
                    "........YY......",
                    ".......YYY......",
                    "......YYY.......",
                    ".....YYY........",
                    "....YYYYYYYYYY..",
                    "...YYYYYYYYYY...",
                    "........YYY.....",
                    ".......YYY......",
                    "......YYY.......",
                    ".....YYY........",
                    "....YYY.........",
                    "...YY...........",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "skull",
                    "pixels": [
                    ".....WWWWWW.....",
                    "...WWWWWWWWWW...",
                    "..WWWKKWWKKWWW..",
                    ".WWWKKKWWKKKWWW.",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    "WWWWWWWWWWWWWWWW",
                    ".WWWWWWWWWWWWWW.",
                    "..WWWWWWWWWW....",
                    "...WWW..WWW.....",
                    "..KKK....KKK....",
                    "..KKK....KKK....",
                    "...KKKKKKKK.....",
                    "....KKKKKK......",
                    ".....KKKK.......",
                    "................"
                    ]
                },
                {
                    "name": "crown",
                    "pixels": [
                    "....YYYYYYYY....",
                    "...YYYYYYYYYY...",
                    "..YY..YYYY..YY..",
                    ".YY...YYYY...YY.",
                    "YY....YYYY....YY",
                    "YY....YYYY....YY",
                    "YYYYYYYYYYYYYYYY",
                    "YYYYYYYYYYYYYYYY",
                    ".YYYYYYYYYYYYYY.",
                    "..YYYYYYYYYYYY..",
                    "...YYYYYYYYYY...",
                    "....YYYYYYYY....",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "gem",
                    "pixels": [
                    ".......C........",
                    "......CCC.......",
                    ".....CCCCC......",
                    "....CCWWCCC.....",
                    "...CCWWWWCCC....",
                    "..CCWWWWWWCCC...",
                    "..CCWWWWWWWWC...",
                    "..CCWWWWWWWWC...",
                    "..CCWWWWWWCCC...",
                    "...CCWWWWCCC....",
                    "....CCWWCCC.....",
                    ".....CCCCC......",
                    "......CCC.......",
                    ".......C........",
                    "................",
                    "................"
                    ]
                }
                ],
                "dragons": [
                {
                    "name": "dragon head",
                    "pixels": [
                    ".....GGGGGG.....",
                    "...GGGGGGGGGG...",
                    "..GGGGGGGGGGGG..",
                    ".GGGGGGGGGGGGGG.",
                    "GGGWWGGGGWWGGGGG",
                    "GGGWWGGGGWWGGGGG",
                    "GGGGGGKKKKGGGGGG",
                    "GGGGGGGGGGGGGGGG",
                    ".GGGGGGGGGGGGGG.",
                    "..GGGGGGGGGG....",
                    "...GGGGGGGG.....",
                    "....GG..GG......",
                    "...GG....GG.....",
                    "..GG......GG....",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "fire",
                    "pixels": [
                    "......RR........",
                    ".....RRR........",
                    "....RYYYR.......",
                    "...RYYYYYR......",
                    "..RYYYYYYYR.....",
                    "..RYYYYYYYR.....",
                    ".RYYYYYYYYYR....",
                    "..RYYYYYYYR.....",
                    "...RYYYYYR......",
                    "....RYYYR.......",
                    ".....RRR........",
                    "......R.........",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "egg",
                    "pixels": [
                    "......WWWW......",
                    ".....WWWWWW.....",
                    "....WWWWWWWW....",
                    "...WWWWWWWWWW...",
                    "..WWWWWWWWWWWW..",
                    "..WWWWGGGGWWWW..",
                    ".WWWWGGGGGGWWWW.",
                    ".WWWWGGGGGGWWWW.",
                    "..WWWWGGGGWWWW..",
                    "..WWWWWWWWWWWW..",
                    "...WWWWWWWWWW...",
                    "....WWWWWWWW....",
                    ".....WWWWWW.....",
                    "......WWWW......",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "wing",
                    "pixels": [
                    "...GGG......GGG.",
                    "..GGGGG....GGGGG",
                    ".GGGGGGG..GGGGGG",
                    "GGGGGGGGGGGGGGGG",
                    "GGGGGGGGGGGGGGGG",
                    ".GGGGGGGGGGGGGGG",
                    "..GGGGGGGGGGGGGG",
                    "...GGGGGGGGGGGG.",
                    "....GGGGGGGGGG..",
                    ".....GGGGGGGG...",
                    "......GGGGGG....",
                    ".......GGGG.....",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "claw",
                    "pixels": [
                    "....WW......WW..",
                    "....WW......WW..",
                    ".....WW....WW...",
                    "......WW..WW....",
                    ".......WWWW.....",
                    "........WW......",
                    ".......WWWW.....",
                    "......WW..WW....",
                    ".....WW....WW...",
                    "....WW......WW..",
                    "...WW........WW.",
                    "..WW..........WW",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                }
                ],
                "anime": [
                {
                    "name": "hero face",
                    "pixels": [
                    "....BBBBBBBB....",
                    "..BBBBBBBBBBBB..",
                    ".BBBBBBBBBBBBBB.",
                    "BBBBBWWBBBBWWBBB",
                    "BBBBBWWBBBBWWBBB",
                    "BBBBBBBBBBBBBBBB",
                    "BBBBBRRRRRRBBBBB",
                    "BBBBBBBBBBBBBBBB",
                    ".BBBBBBBBBBBBBB.",
                    "..BBBBBBBBBBBB..",
                    "...BBBBBBBBBB...",
                    "....BB....BB....",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "magic wand",
                    "pixels": [
                    "........YY......",
                    ".......YYYY.....",
                    "......YYYYYY....",
                    ".......YYYY.....",
                    "........YY......",
                    ".........BB.....",
                    "..........BB....",
                    "...........BB...",
                    "............BB..",
                    ".............BB.",
                    "..............BB",
                    "...............B",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "sword",
                    "pixels": [
                    "........SS......",
                    ".......SSSS.....",
                    "......SSSS......",
                    ".....SSSS.......",
                    "....SSSS........",
                    "...SSSS.........",
                    "..SSSS..........",
                    ".SSSS...........",
                    "SSSS............",
                    "..KKKK..........",
                    "...KKKK.........",
                    "....KK..........",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "star",
                    "pixels": [
                    ".......Y........",
                    "......YYY.......",
                    "......YYY.......",
                    "..BBBBYYYBBBB...",
                    "...BBBBYBBB.....",
                    "....BBBBYB......",
                    ".....BBBB.......",
                    "....BBBBBBB.....",
                    "...BBBBBBBBB....",
                    "..BBBBBBBBBBB...",
                    "..BBB....BBB....",
                    ".BB........BB...",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                },
                {
                    "name": "mask",
                    "pixels": [
                    "..KKKKKKKKKK....",
                    "..KBBBBBBBBK....",
                    ".KKBBBBBBBBKK...",
                    "KKKBBWWBBWWBKKK.",
                    "KKKBBWWBBWWBKKK.",
                    "KKKBBBBBBBBBKKK.",
                    "..KKKKRRKKKK....",
                    "...KKKKKKKK.....",
                    "....KKKKKK......",
                    ".....KKKK.......",
                    "......KK........",
                    "................",
                    "................",
                    "................",
                    "................",
                    "................"
                    ]
                }
                ]
            }
        };

        PIXEL_MATRICES = Object.fromEntries(
            Object.entries(PIXEL_ART_DATA.themes).map(([theme, items]) => [
                theme,
                items.map(item => item.pixels)
            ])
        );
    } catch (error) {
        console.error(error);

        PIXEL_ART_DATA = {
            palette: {
                ".": "transparent",
                "K": "#20212b",
                "W": "#fff3d6",
                "B": "#3478f6",
                "C": "#46d9e8",
                "R": "#f04452",
                "Y": "#ffd34e",
                "G": "#49c66e",
                "O": "#f28c28",
                "P": "#9b65e8",
                "S": "#d4d9e5",
                "~": "#91a5bc"
            },
            themes: {}
        };

        PIXEL_MATRICES = {};
    }
}

const PALETTE = [
    '#ef4444',
    '#f97316',
    '#f59e0b',
    '#10b981',
    '#06b6d4',
    '#3b82f6',
    '#8b5cf6',
    '#ec4899'
];

let counters = {};
let activeId = "";
let editingId = null;
let selectedColor = PALETTE[0];
let selectedPixelIdx = 0;

let primaryColor = '#3b82f6';
let currentTheme = "classic";
let isDarkMode = true;
let particlesEnabled = true;
let soundEnabled = true;

let stats = {
    totalClicks: 0,
    pageLoads: 0,
    createdCounters: 0,
    deletedCounters: 0,
    themeChanges: 0,
    autoTriggersExecuted: 0
};

// JSON sprite data supports transparent pixels and per-pixel colors.
function getPixelSVG(matrix, color = "#ffffff", size = 24) {
    const paletteMap = PIXEL_ART_DATA?.palette || {};
    const key = `${matrix.join("|")}:${color}:${size}`;

    const cached = pixelSvgCache.get(key);
    if (cached) return cached;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const rects = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const symbol = matrix[r][c];

            if (symbol === ".") continue;

            const fill = paletteMap[symbol] || color;

            rects.push(
                `<rect x="${c}" y="${r}" width="1" height="1" fill="${fill}"/>`
            );
        }
    }

    const svg = `<svg viewBox="0 0 ${cols} ${rows}" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges" style="image-rendering:pixelated">${rects.join("")}</svg>`;

    if (pixelSvgCache.size > 300) {
        pixelSvgCache.clear();
    }

    pixelSvgCache.set(key, svg);
    return svg;
}

function getCounterPixelSVG(pixelIdx, color = "#ffffff", size = 24) {
    const themeMatrices =
        PIXEL_MATRICES[currentTheme] || PIXEL_MATRICES.classic;

    return getPixelSVG(
        themeMatrices[pixelIdx % themeMatrices.length],
        color,
        size
    );
}

// STORAGE MANAGEMENT
function setStorage(key, value) {
    const str = JSON.stringify(value);
    const expires = new Date(
        Date.now() + 365 * 86400000
    ).toUTCString();

    document.cookie =
        `${key}=${encodeURIComponent(str)}; expires=${expires}; path=/; SameSite=Lax`;

    try {
        localStorage.setItem(key, str);
    } catch (e) {}
}

function getStorage(key) {
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
        const [k, v] = cookie.trim().split('=');

        if (k === key) {
            try {
                return JSON.parse(decodeURIComponent(v));
            } catch (e) {}
        }
    }

    try {
        const ls = localStorage.getItem(key);

        if (ls) {
            return JSON.parse(ls);
        }
    } catch (e) {}

    return null;
}

function initApp() {
    loadData();

    stats.pageLoads = (stats.pageLoads || 0) + 1;

    executePageLoadTriggers();
    recalculateTimeBasedCounters();
    startIntervalTriggers();

    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    applyPrimaryColor();
    lucide.createIcons();
    setupKeyboardShortcuts();
}

function loadData() {
    counters = getStorage('ce_counters') || {};
    activeId = getStorage('ce_active_id') || "";
    currentTheme = getStorage('ce_theme') || "classic";
    primaryColor = getStorage('ce_primary_color') || "#3b82f6";
    isDarkMode = getStorage('ce_darkmode') !== false;
    stats = getStorage('ce_stats') || stats;
    particlesEnabled = getStorage('ce_particles') !== false;
    soundEnabled = getStorage('ce_sound') !== false;

    if (Object.keys(counters).length === 0) {
        const defaultId = 'c_' + Date.now();

        counters[defaultId] = {
            id: defaultId,
            name: 'Standard Zähler',
            baseCount: 0,
            count: 0,
            trigger: 'none',
            pixelIdx: 0,
            color: PALETTE[5],
            lastResetTimestamp: Date.now()
        };

        stats.createdCounters = 1;
    }

    if (!activeId || !counters[activeId]) {
        activeId = Object.keys(counters)[0];
    }

    document.getElementById('themeSelect').value = currentTheme;
    document.getElementById('particleToggle').checked = particlesEnabled;
    document.getElementById('soundToggle').checked = soundEnabled;
}

function saveData() {
    setStorage('ce_counters', counters);
    setStorage('ce_active_id', activeId);
    setStorage('ce_theme', currentTheme);
    setStorage('ce_primary_color', primaryColor);
    setStorage('ce_darkmode', isDarkMode);
    setStorage('ce_stats', stats);
    setStorage('ce_particles', particlesEnabled);
    setStorage('ce_sound', soundEnabled);
}

// TIME CALCULATIONS FOR OFFLINE BACKGROUND PROGRESSION
function recalculateTimeBasedCounters() {
    const now = Date.now();
    let updated = false;

    Object.values(counters).forEach(c => {
        if (
            c.trigger &&
            c.trigger !== 'none' &&
            c.trigger !== 'load'
        ) {
            const start = c.lastResetTimestamp || now;
            const elapsed = now - start;
            let increments = 0;

            if (c.trigger === '1s') {
                increments = Math.floor(elapsed / 1000);
            } else if (c.trigger === '1m') {
                increments = Math.floor(elapsed / 60000);
            } else if (c.trigger === '1d') {
                increments = Math.floor(elapsed / 86400000);
            } else if (c.trigger === '1y') {
                increments = Math.floor(elapsed / 31536000000);
            }

            const newTotal = (c.baseCount || 0) + increments;

            if (c.count !== newTotal) {
                c.count = newTotal;
                updated = true;
            }
        }
    });

    if (updated) saveData();
}

function handleRouting() {
    const hash = window.location.hash || '#/hub';

    if (hash.startsWith('#/c_')) {
        const id = hash.replace('#/', '');

        if (counters[id]) {
            activeId = id;
            saveData();
            showView('single');
            return;
        }
    }

    showView('hub');
}

function navigateTo(hash) {
    window.location.hash = hash;
}

function showView(viewName) {
    const hub = document.getElementById('hubView');
    const single = document.getElementById('singleView');
    const header = document.getElementById('hubHeader');

    if (viewName === 'single') {
        hub.classList.add('hidden');
        header.classList.add('hidden');
        single.classList.remove('hidden');
    } else {
        single.classList.add('hidden');
        hub.classList.remove('hidden');
        header.classList.remove('hidden');
    }

    renderUI();
}

function renderUI() {
    recalculateTimeBasedCounters();

    const activeCounter = counters[activeId];
    if (!activeCounter) return;

    // Single View
    document.getElementById('activeCounterName').innerText =
        activeCounter.name;

    document.getElementById('activeCounterName').style.color =
        activeCounter.color || primaryColor;

    document.getElementById('activeCountDisplay').innerText =
        activeCounter.count;

    document.getElementById('activeCounterPixel').innerHTML =
        getCounterPixelSVG(
            activeCounter.pixelIdx || 0,
            activeCounter.color || primaryColor,
            64
        );

    const triggerBadge = document.getElementById('activeTriggerBadge');

    if (activeCounter.trigger && activeCounter.trigger !== 'none') {
        triggerBadge.classList.remove('hidden');
        triggerBadge.innerText = `⚡ Trigger: ${activeCounter.trigger}`;
    } else {
        triggerBadge.classList.add('hidden');
    }

    document.getElementById('pixelHeaderBadge').innerHTML =
        getCounterPixelSVG(0, primaryColor, 20);

    document.getElementById('brandPixel').innerHTML =
        getCounterPixelSVG(0, primaryColor, 24);

    renderHubGrid();
    renderStats();
}

function renderHubGrid() {
    const grid = document.getElementById('countersGrid');
    grid.innerHTML = '';

    Object.values(counters).forEach(c => {
        const isActive = c.id === activeId;
        const card = document.createElement('div');

        card.className = `p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
            isActive
                ? 'bg-white/[0.08] border-white/30 shadow-2xl'
                : 'bg-white/[0.03] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.05]'
        }`;

        card.onclick = () => {
            activeId = c.id;
            saveData();
            navigateTo(`#/${c.id}`);
        };

        card.innerHTML = `
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                    <div class="w-7 h-7 flex items-center justify-center">${getCounterPixelSVG(c.pixelIdx || 0, c.color || primaryColor, 28)}</div>
                    <span class="text-xs font-bold uppercase tracking-wider truncate max-w-[120px]" style="color: ${c.color || primaryColor}">${escapeHtml(c.name)}</span>
                </div>
                <div class="flex items-center gap-1">
                    <button onclick="event.stopPropagation(); openEditModal('${c.id}')" class="p-1 text-neutral-500 hover:text-white transition-colors" title="Einstellungen">
                        <i data-lucide="settings-2" class="w-3.5 h-3.5"></i>
                    </button>
                    <button onclick="event.stopPropagation(); deleteCounter('${c.id}')" class="p-1 text-neutral-500 hover:text-red-400 transition-colors" title="Löschen">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                    </button>
                </div>
            </div>

            <div class="my-6">
                <span class="font-mono-num text-5xl font-extrabold text-white">${c.count}</span>
            </div>

            <div class="flex items-center justify-between text-xs border-t border-white/[0.06] pt-3">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-neutral-400 font-mono">
                    ${c.trigger && c.trigger !== 'none' ? 'Trigger: ' + c.trigger : 'Manuell'}
                </span>
                <button onclick="event.stopPropagation(); resetCounter('${c.id}')" class="p-1 text-neutral-500 hover:text-amber-400 transition-colors" title="Zurücksetzen">
                    <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `;

        grid.appendChild(card);
    });

    lucide.createIcons();
}

function renderStats() {
    const grid = document.getElementById('statsGrid');
    if (!grid) return;

    grid.innerHTML = `
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Klicks gesamt:</span> <strong class="text-white font-mono">${stats.totalClicks || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Seitenaufrufe:</span> <strong class="text-white font-mono">${stats.pageLoads || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Erstellte Zähler:</span> <strong class="text-white font-mono">${stats.createdCounters || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Gelöschte Zähler:</span> <strong class="text-white font-mono">${stats.deletedCounters || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Theme Wechsel:</span> <strong class="text-white font-mono">${stats.themeChanges || 0}</strong></div>
        <div class="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05]"><span class="text-neutral-500 block">Auto-Triggers:</span> <strong class="text-white font-mono">${stats.autoTriggersExecuted || 0}</strong></div>
    `;
}

function incrementActiveCounter(e) {
    if (e) e.stopPropagation();

    counters[activeId].count++;
    counters[activeId].baseCount =
        (counters[activeId].baseCount || 0) + 1;

    stats.totalClicks = (stats.totalClicks || 0) + 1;

    saveData();

    playBleepSound();

    if (particlesEnabled && e) {
        spawnParticle(e.clientX, e.clientY);
    }

    const card = document.getElementById('counterCard');

    card.classList.remove('animate-spring');
    void card.offsetWidth;
    card.classList.add('animate-spring');

    renderUI();
}

function createNewCounter() {
    const name = prompt('Name für neuen Zähler:', 'Neuer Zähler');

    if (!name || !name.trim()) return;

    const newId = 'c_' + Date.now();
    const randomColor =
        PALETTE[Math.floor(Math.random() * PALETTE.length)];

    counters[newId] = {
        id: newId,
        name: name.trim(),
        baseCount: 0,
        count: 0,
        trigger: 'none',
        pixelIdx: 0,
        color: randomColor,
        lastResetTimestamp: Date.now()
    };

    activeId = newId;

    stats.createdCounters = (stats.createdCounters || 0) + 1;

    saveData();
    renderUI();
}

function openEditModal(id) {
    editingId = id;

    const c = counters[id];
    if (!c) return;

    document.getElementById('editNameInput').value = c.name;
    document.getElementById('editValueInput').value = c.count;
    document.getElementById('editTriggerSelect').value =
        c.trigger || 'none';

    selectedColor = c.color || primaryColor;
    selectedPixelIdx = c.pixelIdx || 0;

    // Render Color Picker
    const colorContainer = document.getElementById('colorPickerList');
    colorContainer.innerHTML = '';

    PALETTE.forEach(col => {
        const dot = document.createElement('div');

        dot.className =
            `color-dot ${col === selectedColor ? 'selected' : ''}`;

        dot.style.backgroundColor = col;

        dot.onclick = () => {
            selectedColor = col;

            document.querySelectorAll(
                '#colorPickerList .color-dot'
            ).forEach(d => d.classList.remove('selected'));

            dot.classList.add('selected');
        };

        colorContainer.appendChild(dot);
    });

    // Render Pixel Pickers
    const pixelContainer = document.getElementById('pixelPickerList');
    pixelContainer.innerHTML = '';

    const themeMatrices =
        PIXEL_MATRICES[currentTheme] || PIXEL_MATRICES.classic;

    themeMatrices.forEach((_, idx) => {
        const btn = document.createElement('button');

        btn.className =
            `p-2 rounded-xl flex items-center justify-center ${
                idx === selectedPixelIdx
                    ? 'bg-white/20 border border-white/40'
                    : 'hover:bg-white/10'
            }`;

        btn.innerHTML = getCounterPixelSVG(idx, selectedColor, 36);

        btn.title =
            PIXEL_ART_DATA?.themes?.[currentTheme]?.[idx]?.name ||
            `Pixel-Art ${idx + 1}`;

        btn.setAttribute("aria-label", btn.title);

        btn.onclick = () => {
            selectedPixelIdx = idx;

            document.querySelectorAll(
                '#pixelPickerList button'
            ).forEach(b => {
                b.className =
                    'p-2 rounded-xl flex items-center justify-center hover:bg-white/10';
            });

            btn.className =
                'p-2 rounded-xl flex items-center justify-center bg-white/20 border border-white/40';
        };

        pixelContainer.appendChild(btn);
    });

    document.getElementById('editModal').classList.remove('hidden');
}

function saveEditModal() {
    if (!editingId || !counters[editingId]) return;

    const newName =
        document.getElementById('editNameInput').value.trim();

    const newVal = parseInt(
        document.getElementById('editValueInput').value,
        10
    );

    const newTrigger =
        document.getElementById('editTriggerSelect').value;

    if (newName) {
        counters[editingId].name = newName;
    }

    const targetVal = isNaN(newVal) ? 0 : newVal;

    counters[editingId].count = targetVal;
    counters[editingId].baseCount = targetVal;
    counters[editingId].trigger = newTrigger;
    counters[editingId].color = selectedColor;
    counters[editingId].pixelIdx = selectedPixelIdx;
    counters[editingId].lastResetTimestamp = Date.now();

    saveData();
    closeEditModal();
    renderUI();
}

function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
}

function deleteCounter(id) {
    if (Object.keys(counters).length <= 1) {
        alert('Es muss mindestens ein Zähler existieren.');
        return;
    }

    delete counters[id];

    stats.deletedCounters = (stats.deletedCounters || 0) + 1;

    if (activeId === id) {
        activeId = Object.keys(counters)[0];
    }

    saveData();
    renderUI();
}

function resetCounter(id) {
    if (counters[id]) {
        counters[id].count = 0;
        counters[id].baseCount = 0;
        counters[id].lastResetTimestamp = Date.now();

        saveData();
        renderUI();
    }
}

function changeTheme(themeKey) {
    if (PIXEL_MATRICES[themeKey]) {
        currentTheme = themeKey;

        stats.themeChanges = (stats.themeChanges || 0) + 1;

        saveData();
        renderUI();
    }
}

function applyPrimaryColor() {
    document.getElementById('btnNewCounter').style.backgroundColor =
        primaryColor;

    document.getElementById('btnSaveEdit').style.backgroundColor =
        primaryColor;

    // Primary Color Picker in Settings
    const container = document.getElementById('primaryColorPicker');

    if (container) {
        container.innerHTML = '';

        PALETTE.forEach(col => {
            const dot = document.createElement('div');

            dot.className =
                `color-dot ${col === primaryColor ? 'selected' : ''}`;

            dot.style.backgroundColor = col;

            dot.onclick = () => {
                primaryColor = col;

                saveData();
                applyPrimaryColor();
                renderUI();
            };

            container.appendChild(dot);
        });
    }
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;

    const body = document.getElementById('appBody');
    const box = document.getElementById('mainBox');
    const icon = document.getElementById('themeIcon');

    if (isDarkMode) {
        body.className = body.className.replace(
            'bg-neutral-200',
            'bg-[#050505]'
        );

        box.className = box.className.replace(
            'bg-white text-black',
            'bg-[#0e0e0e] text-neutral-200'
        );

        icon.setAttribute('data-lucide', 'moon');
    } else {
        body.className = body.className.replace(
            'bg-[#050505]',
            'bg-neutral-200'
        );

        box.className = box.className.replace(
            'bg-[#0e0e0e] text-neutral-200',
            'bg-white text-black'
        );

        icon.setAttribute('data-lucide', 'sun');
    }

    saveData();
    lucide.createIcons();
}

function executePageLoadTriggers() {
    Object.values(counters).forEach(c => {
        if (c.trigger === 'load') {
            c.count++;
            c.baseCount = (c.baseCount || 0) + 1;

            stats.autoTriggersExecuted =
                (stats.autoTriggersExecuted || 0) + 1;
        }
    });

    saveData();
}

function startIntervalTriggers() {
    const hasLiveTriggers = () =>
        Object.values(counters).some(c =>
            c.trigger === "1s" ||
            c.trigger === "1m" ||
            c.trigger === "1d" ||
            c.trigger === "1y"
        );

    setInterval(() => {
        if (!hasLiveTriggers()) return;

        recalculateTimeBasedCounters();
        renderUI();
    }, 1000);
}

function spawnParticle(x, y) {
    const container = document.getElementById('particleContainer');
    const p = document.createElement('div');

    p.className = 'particle';

    p.innerHTML = getCounterPixelSVG(
        counters[activeId].pixelIdx || 0,
        counters[activeId].color || primaryColor,
        32
    );

    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    container.appendChild(p);

    setTimeout(() => p.remove(), 600);
}

let audioContext = null;

function playBleepSound() {
    if (!soundEnabled) return;

    try {
        const AudioContextClass =
            window.AudioContext || window.webkitAudioContext;

        if (!AudioContextClass) return;

        if (!audioContext) {
            audioContext = new AudioContextClass();
        }

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const ctx = audioContext;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const now = ctx.currentTime;

        osc.type = "square";

        osc.frequency.setValueAtTime(
            440 + Math.random() * 200,
            now
        );

        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(
            0.001,
            now + 0.06
        );

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 0.06);
    } catch (e) {}
}

function openSettingsModal() {
    applyPrimaryColor();

    document.getElementById('settingsModal')
        .classList.remove('hidden');
}

function closeSettingsModal() {
    document.getElementById('settingsModal')
        .classList.add('hidden');
}

function toggleParticleSetting(val) {
    particlesEnabled = val;
    saveData();
}

function toggleSoundSetting(val) {
    soundEnabled = val;
    saveData();
}

function wipeAllData() {
    if (confirm('Wirklich ALLE Zähler und Statistiken löschen?')) {
        counters = {};

        stats = {
            totalClicks: 0,
            pageLoads: 0,
            createdCounters: 0,
            deletedCounters: 0,
            themeChanges: 0,
            autoTriggersExecuted: 0
        };

        loadPixelArt().finally(() => initApp());
        closeSettingsModal();
    }
}

function setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            if (
                document.getElementById('singleView')
                    .classList.contains('hidden')
            ) {
                return;
            }

            e.preventDefault();

            if (!e.repeat) {
                incrementActiveCounter();
            }
        } else if (e.key === 'Escape') {
            closeSettingsModal();
            closeEditModal();
            navigateTo('#/hub');
        }
    });
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

loadPixelArt().finally(() => initApp());