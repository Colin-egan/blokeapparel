const PRODUCTS = [
  {
    "id": "p000",
    "name": "A.R. Denim / Harlan / Dark",
    "dept": "denim",
    "price": 228,
    "priceHigh": null,
    "img": "images/shop/p000.webp"
  },
  {
    "id": "p001",
    "name": "Iron & Resin / Garage Shirt",
    "dept": "tees",
    "price": 39,
    "priceHigh": null,
    "img": "images/shop/p001.webp"
  },
  {
    "id": "p002",
    "name": "A.R. / Tee / Carbon",
    "dept": "tees",
    "price": 55,
    "priceHigh": null,
    "img": "images/shop/p002.webp"
  },
  {
    "id": "p003",
    "name": "Mavrans / Strike Match Shirt",
    "dept": "shirts",
    "price": 99,
    "priceHigh": null,
    "img": "images/shop/p003.webp"
  },
  {
    "id": "p004",
    "name": "DL1961 / Nick / Social",
    "dept": "denim",
    "price": 218,
    "priceHigh": null,
    "img": "images/shop/p004.webp"
  },
  {
    "id": "p005",
    "name": "CS / Rothko / Black",
    "dept": "knitwear",
    "price": 98,
    "priceHigh": null,
    "img": "images/shop/p005.webp"
  },
  {
    "id": "p006",
    "name": "Zeus / Sea Salt Grooming Spray / Verbena",
    "dept": "personal-care",
    "price": 20,
    "priceHigh": null,
    "img": "images/shop/p006.webp"
  },
  {
    "id": "p007",
    "name": "Alfred Lane / Roll On Cologne / Brio",
    "dept": "personal-care",
    "price": 44,
    "priceHigh": null,
    "img": "images/shop/p007.webp"
  },
  {
    "id": "p008",
    "name": "Iron & Resin / Brigade Short / Army",
    "dept": "shorts",
    "price": 89,
    "priceHigh": null,
    "img": "images/shop/p008.webp"
  },
  {
    "id": "p009",
    "name": "Alfred Lane / Solid Cologne / Brio",
    "dept": "personal-care",
    "price": 22,
    "priceHigh": null,
    "img": "images/shop/p009.webp"
  },
  {
    "id": "p010",
    "name": "Alfred Lane / Solid Cologne / Bravado",
    "dept": "personal-care",
    "price": 22,
    "priceHigh": null,
    "img": "images/shop/p010.webp"
  },
  {
    "id": "p011",
    "name": "Misc Goods / Deo / Grey Haven",
    "dept": "personal-care",
    "price": 15,
    "priceHigh": null,
    "img": "images/shop/p011.webp"
  },
  {
    "id": "p012",
    "name": "Veja / Campo / Black Leather",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p012.webp"
  },
  {
    "id": "p013",
    "name": "Misc Goods / Deo / Valley Of Gold",
    "dept": "personal-care",
    "price": 15,
    "priceHigh": null,
    "img": "images/shop/p013.webp"
  },
  {
    "id": "p014",
    "name": "Brass Square Striped Ring: 11",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p014.webp"
  },
  {
    "id": "p015",
    "name": "Swedish Dream / Sea Salt Soap",
    "dept": "personal-care",
    "price": 9,
    "priceHigh": null,
    "img": "images/shop/p015.webp"
  },
  {
    "id": "p016",
    "name": "Abalone Inlay Folding Knife",
    "dept": "accessories",
    "price": 40,
    "priceHigh": null,
    "img": "images/shop/p016.webp"
  },
  {
    "id": "p017",
    "name": "Holbrook / Black",
    "dept": "shorts",
    "price": 62,
    "priceHigh": 78.0,
    "img": "images/shop/p017.webp"
  },
  {
    "id": "p018",
    "name": "Reversible Tiger Eyes / Onyx Men Ring: 11",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p018.webp"
  },
  {
    "id": "p019",
    "name": "A.R. / Tee / Chalk",
    "dept": "tees",
    "price": 55,
    "priceHigh": null,
    "img": "images/shop/p019.webp"
  },
  {
    "id": "p020",
    "name": "DL1961 / Nick / Soft Beige",
    "dept": "denim",
    "price": 198,
    "priceHigh": null,
    "img": "images/shop/p020.webp"
  },
  {
    "id": "p021",
    "name": "Diamond Flat Top Brass Cuff",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p021.webp"
  },
  {
    "id": "p022",
    "name": "Hall\u00f3 S\u00e1pa / Icelandic Ash Soap",
    "dept": "personal-care",
    "price": 9,
    "priceHigh": null,
    "img": "images/shop/p022.webp"
  },
  {
    "id": "p023",
    "name": "Mavrans / Strike Match Short",
    "dept": "shorts",
    "price": 99,
    "priceHigh": null,
    "img": "images/shop/p023.webp"
  },
  {
    "id": "p024",
    "name": "Tortoise Zippo Style Lighter",
    "dept": "accessories",
    "price": 40,
    "priceHigh": null,
    "img": "images/shop/p024.webp"
  },
  {
    "id": "p025",
    "name": "Steel Screw Cuff: 6in",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p025.webp"
  },
  {
    "id": "p026",
    "name": "Herschel / Retreat / Black",
    "dept": "travel",
    "price": 150,
    "priceHigh": null,
    "img": "images/shop/p026.webp"
  },
  {
    "id": "p027",
    "name": "Moisturizing Lip Balm for Men",
    "dept": "personal-care",
    "price": 4,
    "priceHigh": null,
    "img": "images/shop/p027.webp"
  },
  {
    "id": "p028",
    "name": "Misc Goods / Deo / Underhill",
    "dept": "personal-care",
    "price": 15,
    "priceHigh": null,
    "img": "images/shop/p028.webp"
  },
  {
    "id": "p029",
    "name": "Casablanca Short / Black",
    "dept": "shorts",
    "price": 74,
    "priceHigh": null,
    "img": "images/shop/p029.webp"
  },
  {
    "id": "p030",
    "name": "A.R. Denim / Brodie / Black",
    "dept": "denim",
    "price": 228,
    "priceHigh": null,
    "img": "images/shop/p030.webp"
  },
  {
    "id": "p031",
    "name": "DL1961 / Nick / Clearwater",
    "dept": "denim",
    "price": 208,
    "priceHigh": null,
    "img": "images/shop/p031.webp"
  },
  {
    "id": "p032",
    "name": "Malachite Inlay Ring: 11",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p032.webp"
  },
  {
    "id": "p033",
    "name": "Veja / Rio Branco / Black",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p033.webp"
  },
  {
    "id": "p034",
    "name": "Braided Leather Bracelet: Leather, 8\"",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p034.webp"
  },
  {
    "id": "p035",
    "name": "Veja / Rio Branco / Tent",
    "dept": "shoes",
    "price": 170,
    "priceHigh": null,
    "img": "images/shop/p035.webp"
  },
  {
    "id": "p036",
    "name": "CS / Aleppo / Stone",
    "dept": "knitwear",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p036.webp"
  },
  {
    "id": "p037",
    "name": "Iron & Resin / Solimar Short",
    "dept": "shorts",
    "price": 109,
    "priceHigh": null,
    "img": "images/shop/p037.webp"
  },
  {
    "id": "p038",
    "name": "CS / Rapa Crop / Black",
    "dept": "knitwear",
    "price": 85,
    "priceHigh": null,
    "img": "images/shop/p038.webp"
  },
  {
    "id": "p039",
    "name": "Tiger Eyes Beaded Bracelet",
    "dept": "accessories",
    "price": 65,
    "priceHigh": null,
    "img": "images/shop/p039.webp"
  },
  {
    "id": "p040",
    "name": "CS / Braga / Black",
    "dept": "shirts",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p040.webp"
  },
  {
    "id": "p042",
    "name": "Hallo Iceland Kelp Soap",
    "dept": "personal-care",
    "price": 9,
    "priceHigh": null,
    "img": "images/shop/p042.webp"
  },
  {
    "id": "p043",
    "name": "Veja / Campo / Natural",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p043.webp"
  },
  {
    "id": "p044",
    "name": "CS / Linwood / Mocha",
    "dept": "shirts",
    "price": 65,
    "priceHigh": 82.0,
    "img": "images/shop/p044.webp"
  },
  {
    "id": "p045",
    "name": "Herschel / Little American / Nay",
    "dept": "travel",
    "price": 180,
    "priceHigh": null,
    "img": "images/shop/p045.webp"
  },
  {
    "id": "p046",
    "name": "Large Terrazzo Ashtray with Lighter Holder: Standard",
    "dept": "accessories",
    "price": 50,
    "priceHigh": null,
    "img": "images/shop/p046.webp"
  },
  {
    "id": "p047",
    "name": "Alfred Lane / Solid Cologne / Ace",
    "dept": "personal-care",
    "price": 28,
    "priceHigh": null,
    "img": "images/shop/p047.webp"
  },
  {
    "id": "p048",
    "name": "Iron & Resin / Trapper Hat",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p048.webp"
  },
  {
    "id": "p049",
    "name": "CS / Chuck / Olive",
    "dept": "denim",
    "price": 78,
    "priceHigh": 92.0,
    "img": "images/shop/p049.webp"
  },
  {
    "id": "p050",
    "name": "Alfred Lane / Roll On Cologne / Ace",
    "dept": "personal-care",
    "price": 54,
    "priceHigh": null,
    "img": "images/shop/p050.webp"
  },
  {
    "id": "p051",
    "name": "DL1961 / Nick / Shadow",
    "dept": "denim",
    "price": 158,
    "priceHigh": 198.0,
    "img": "images/shop/p051.webp"
  },
  {
    "id": "p052",
    "name": "A.R. / Tee / Military",
    "dept": "tees",
    "price": 55,
    "priceHigh": null,
    "img": "images/shop/p052.webp"
  },
  {
    "id": "p053",
    "name": "Alfred Lane / Solid Cologne / Vanguard",
    "dept": "personal-care",
    "price": 22,
    "priceHigh": null,
    "img": "images/shop/p053.webp"
  },
  {
    "id": "p054",
    "name": "Veja / Campo / Cyprus",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p054.webp"
  },
  {
    "id": "p055",
    "name": "CS / Durbin / Hthr Brown",
    "dept": "shirts",
    "price": 100,
    "priceHigh": null,
    "img": "images/shop/p055.webp"
  },
  {
    "id": "p056",
    "name": "CS / Javier / Clay",
    "dept": "shirts",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p056.webp"
  },
  {
    "id": "p057",
    "name": "Horseshoe Ring: 11",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p057.webp"
  },
  {
    "id": "p058",
    "name": "CS / Durbin / Grey",
    "dept": "shirts",
    "price": 100,
    "priceHigh": null,
    "img": "images/shop/p058.webp"
  },
  {
    "id": "p059",
    "name": "FC / Ripstop Short",
    "dept": "shorts",
    "price": 50,
    "priceHigh": 68.0,
    "img": "images/shop/p059.webp"
  },
  {
    "id": "p060",
    "name": "Herschel / Retreat / Navy",
    "dept": "travel",
    "price": 150,
    "priceHigh": null,
    "img": "images/shop/p060.webp"
  },
  {
    "id": "p061",
    "name": "CS / Rancho / White",
    "dept": "shirts",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p061.webp"
  },
  {
    "id": "p062",
    "name": "Veja / Rio Branco / Nautico",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p062.webp"
  },
  {
    "id": "p063",
    "name": "A.R. Denim / Brodie / Dirty",
    "dept": "denim",
    "price": 228,
    "priceHigh": 229.0,
    "img": "images/shop/p063.webp"
  },
  {
    "id": "p064",
    "name": "Zeus / Beard Oil / Tea Tree",
    "dept": "personal-care",
    "price": 26,
    "priceHigh": null,
    "img": "images/shop/p064.webp"
  },
  {
    "id": "p065",
    "name": "Zeus / Beard Oil / Verbena Lime",
    "dept": "personal-care",
    "price": 26,
    "priceHigh": null,
    "img": "images/shop/p065.webp"
  },
  {
    "id": "p066",
    "name": "CS / Rancho / Sage",
    "dept": "shirts",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p066.webp"
  },
  {
    "id": "p067",
    "name": "Lucas Short / Olive",
    "dept": "shorts",
    "price": 59,
    "priceHigh": null,
    "img": "images/shop/p067.webp"
  },
  {
    "id": "p068",
    "name": "Brass Screw Bracelet: 8in",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p068.webp"
  },
  {
    "id": "p069",
    "name": "CS / Ace / Dark Slate",
    "dept": "shirts",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p069.webp"
  },
  {
    "id": "p070",
    "name": "Herschel / Shoulder Bag",
    "dept": "travel",
    "price": 60,
    "priceHigh": null,
    "img": "images/shop/p070.webp"
  },
  {
    "id": "p071",
    "name": "Mavrans / Out Of Office",
    "dept": "shirts",
    "price": 169,
    "priceHigh": null,
    "img": "images/shop/p071.webp"
  },
  {
    "id": "p072",
    "name": "Zeus / Beard Oil / Sandalwood",
    "dept": "personal-care",
    "price": 26,
    "priceHigh": null,
    "img": "images/shop/p072.webp"
  },
  {
    "id": "p073",
    "name": "Hallo Iceland Moss Soap",
    "dept": "personal-care",
    "price": 9,
    "priceHigh": null,
    "img": "images/shop/p073.webp"
  },
  {
    "id": "p074",
    "name": "Patchwork Bandana",
    "dept": "accessories",
    "price": 30,
    "priceHigh": null,
    "img": "images/shop/p074.webp"
  },
  {
    "id": "p075",
    "name": "Zeus / Pomade / Cream - Medium",
    "dept": "personal-care",
    "price": 18,
    "priceHigh": null,
    "img": "images/shop/p075.webp"
  },
  {
    "id": "p076",
    "name": "Iron & Resin / Take It Easy Tee",
    "dept": "tees",
    "price": 49,
    "priceHigh": null,
    "img": "images/shop/p076.webp"
  },
  {
    "id": "p077",
    "name": "Veja / Panenka / Black",
    "dept": "shoes",
    "price": 170,
    "priceHigh": null,
    "img": "images/shop/p077.webp"
  },
  {
    "id": "p078",
    "name": "Iron & Resin / Valley Shirt",
    "dept": "shirts",
    "price": 89,
    "priceHigh": null,
    "img": "images/shop/p078.webp"
  },
  {
    "id": "p079",
    "name": "Nordic Wellness / Hemp Soap",
    "dept": "personal-care",
    "price": 9,
    "priceHigh": null,
    "img": "images/shop/p079.webp"
  },
  {
    "id": "p080",
    "name": "Veja / V90 / White Kaki",
    "dept": "shoes",
    "price": 185,
    "priceHigh": null,
    "img": "images/shop/p080.webp"
  },
  {
    "id": "p081",
    "name": "5mm Ball Chain Bracelet: Brass",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p081.webp"
  },
  {
    "id": "p082",
    "name": "Green Duo Triangle Ring: 11",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p082.webp"
  },
  {
    "id": "p083",
    "name": "Herschel / City Backpack",
    "dept": "travel",
    "price": 75,
    "priceHigh": null,
    "img": "images/shop/p083.webp"
  },
  {
    "id": "p084",
    "name": "CS / Linwood / Gray",
    "dept": "shirts",
    "price": 69,
    "priceHigh": 88.0,
    "img": "images/shop/p084.webp"
  },
  {
    "id": "p085",
    "name": "Veja / Campo / California",
    "dept": "shoes",
    "price": 175,
    "priceHigh": null,
    "img": "images/shop/p085.webp"
  },
  {
    "id": "p086",
    "name": "Zeus / Pomade / Clay - Firm",
    "dept": "personal-care",
    "price": 18,
    "priceHigh": null,
    "img": "images/shop/p086.webp"
  },
  {
    "id": "p087",
    "name": "Veja / Campo / Black",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p087.webp"
  },
  {
    "id": "p088",
    "name": "CS / Shafa / Natural",
    "dept": "knitwear",
    "price": 64,
    "priceHigh": null,
    "img": "images/shop/p088.webp"
  },
  {
    "id": "p089",
    "name": "A.R. Denim / Harlan / Medium",
    "dept": "denim",
    "price": 228,
    "priceHigh": null,
    "img": "images/shop/p089.webp"
  },
  {
    "id": "p090",
    "name": "Mavrans / Cabana Short / Emerald",
    "dept": "shorts",
    "price": 99,
    "priceHigh": null,
    "img": "images/shop/p090.webp"
  },
  {
    "id": "p091",
    "name": "Veja / Campo / Black Suede",
    "dept": "shoes",
    "price": 160,
    "priceHigh": null,
    "img": "images/shop/p091.webp"
  },
  {
    "id": "p092",
    "name": "Iron & Resin / Mama Tried Hat",
    "dept": "accessories",
    "price": 39,
    "priceHigh": null,
    "img": "images/shop/p092.webp"
  },
  {
    "id": "p093",
    "name": "Nordic + Wellness / Vitamin C Soap",
    "dept": "personal-care",
    "price": 9,
    "priceHigh": null,
    "img": "images/shop/p093.webp"
  },
  {
    "id": "p094",
    "name": "CS / Aldrich / Tobacco",
    "dept": "shirts",
    "price": 100,
    "priceHigh": null,
    "img": "images/shop/p094.webp"
  },
  {
    "id": "p095",
    "name": "Herschel / Little America / Black",
    "dept": "travel",
    "price": 180,
    "priceHigh": null,
    "img": "images/shop/p095.webp"
  },
  {
    "id": "p096",
    "name": "Veja / Paulistana / Ardois",
    "dept": "shoes",
    "price": 170,
    "priceHigh": null,
    "img": "images/shop/p096.webp"
  },
  {
    "id": "p097",
    "name": "Skull brass money clip",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p097.webp"
  },
  {
    "id": "p098",
    "name": "Alfred Lane / Roll On Cologne / Bravado",
    "dept": "personal-care",
    "price": 44,
    "priceHigh": null,
    "img": "images/shop/p098.webp"
  },
  {
    "id": "p099",
    "name": "Mavrans / Stripe Knit / Emerald",
    "dept": "knitwear",
    "price": 179,
    "priceHigh": null,
    "img": "images/shop/p099.webp"
  },
  {
    "id": "p100",
    "name": "Turquoise Inlay Bracelet: Brass",
    "dept": "accessories",
    "price": 65,
    "priceHigh": null,
    "img": "images/shop/p100.webp"
  },
  {
    "id": "p101",
    "name": "Mavrans / Oceanside Shirt",
    "dept": "shirts",
    "price": 139,
    "priceHigh": null,
    "img": "images/shop/p101.webp"
  },
  {
    "id": "p102",
    "name": "Stacked Brass Bracelet: One Size",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p102.webp"
  },
  {
    "id": "p103",
    "name": "A.R. / Tee / Black",
    "dept": "tees",
    "price": 55,
    "priceHigh": null,
    "img": "images/shop/p103.webp"
  },
  {
    "id": "p104",
    "name": "CS / Wake / Natural",
    "dept": "knitwear",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p104.webp"
  },
  {
    "id": "p105",
    "name": "Flat Cuff: Brass",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p105.webp"
  },
  {
    "id": "p106",
    "name": "Misc Goods / Deo / Meadowland",
    "dept": "personal-care",
    "price": 15,
    "priceHigh": null,
    "img": "images/shop/p106.webp"
  },
  {
    "id": "p107",
    "name": "Mavrans / Cabana Shirt / Emerald",
    "dept": "shirts",
    "price": 99,
    "priceHigh": null,
    "img": "images/shop/p107.webp"
  },
  {
    "id": "p108",
    "name": "CS / Merida / Black",
    "dept": "shirts",
    "price": 80,
    "priceHigh": null,
    "img": "images/shop/p108.webp"
  },
  {
    "id": "p109",
    "name": "Ox-bone / Ox-horn Inlay Folding Knife: Black Ox-horn",
    "dept": "accessories",
    "price": 40,
    "priceHigh": null,
    "img": "images/shop/p109.webp"
  },
  {
    "id": "p110",
    "name": "Iron & Resin / Howard Shirt",
    "dept": "shirts",
    "price": 59,
    "priceHigh": null,
    "img": "images/shop/p110.webp"
  },
  {
    "id": "p111",
    "name": "Veja / V12 / Olive",
    "dept": "shoes",
    "price": 120,
    "priceHigh": 160.0,
    "img": "images/shop/p111.webp"
  },
  {
    "id": "p112",
    "name": "Lapis Signet Ring: 11",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p112.webp"
  },
  {
    "id": "p113",
    "name": "Zeus / Beard Oil / Italian Cypress",
    "dept": "personal-care",
    "price": 26,
    "priceHigh": null,
    "img": "images/shop/p113.webp"
  },
  {
    "id": "p114",
    "name": "Iron & Resin / Cactus Shirt",
    "dept": "shirts",
    "price": 99,
    "priceHigh": null,
    "img": "images/shop/p114.webp"
  },
  {
    "id": "p115",
    "name": "5mm Ball Chain Necklace: Brass",
    "dept": "accessories",
    "price": 45,
    "priceHigh": null,
    "img": "images/shop/p115.webp"
  },
  {
    "id": "p116",
    "name": "Alfred Lane / Roll On Cologne / Vanguard",
    "dept": "personal-care",
    "price": 44,
    "priceHigh": null,
    "img": "images/shop/p116.webp"
  }
];
