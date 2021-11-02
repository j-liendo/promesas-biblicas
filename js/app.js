const projectName = "biblical-promises";

let promise = {};

const photosID = [
    "YFFGkE3y4F8",
    "sSjv3orVsCo",
    "xzPMUMDDsfk",
    "6wmFPgnd__Q",
    "qkfxBc2NQ18",
    "ycG0A6DlvOk",
    "RbbdzZBKRDY",
    "BR1WANLLpDU",
    "-LRuNvY8W7Q",
    "VRDdukhrwMc",
    "r1XwWjI4PyE",
    "Yy1daqzJodU",
    "UewgGfZgYj0",
    "uOi3lg8fGl4",
    "dJVU4jXV1Q8",
    "d6kSvT2xZQo",
    "qzgN45hseN0",
    "u0ZgqJD55pE",
    "tNDvFkxkBHo",
    "6mU7uCAO64I",
    "Rnqa6jOpnHw",
    "a72o8w9HC2w",
    "3Kv48NS4WUU",
    "Dag9cv89jb4",
    "1EYMue_AwDw",
    "hm5wC_HY34E",
    "qxCqkbF7tUc",
    "6yBAQeeNROU",
    "ii5JY_46xH0",
    "sMQiL_2v4vs",
    "pQMM63GE7fo",
    "bcW3NDWHMwc",
    "2E_dT65fyxo",
    "wr8LlOLnq0Q",
    "ClWvcrkBhMY",
    "k2zWqv_yfNM",
    "Dksk8szLRN0",
    "frmovOarYdE",
    "nsFLt0rBQHI",
    "P8PlK2nGwqA",
    "kFHz9Xh3PPU",
    "FXEWwXMCq3I",
    "lVDnLUACI18",
    "ARVFsI-32Uk",
    "qxO2PBn7eKU",
    "xg8z_KhSorQ",
    "DlkF4-dbCOU",
    "PGExULGintM",
    "EvKBHBGgaUo",
    "IUY_3DvM__w",
    "-N_UwPdUs7E",
    "p3OzJuT_Dks",
    "YvkH8R1zoQM",
    "gyIRjKPXupE",
    "19SC2oaVZW0",
    "UMJUr3st0AE",
    "-G3rw6Y02D0",
    "NjT4O7WYmwk",
    "gooBgyq17i0",
    "oMneOBYhJxY",
    "JgOeRuGD_Y4",
    "ZVbv1akA-l4",
    "9Y8A97opXQ4",
    "yzgF-AQt1sQ",
    "NRQV-hBF10M",
    "hFzIoD0F_i8",
    "ktZZiHb-GoI",
    "b1ovoL_F1S8",
    "GraajutbJHE",
];

let photos = [
    "https://images.unsplash.com/photo-1480497490787-505ec076689f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1569877655410-48c526a77f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTg2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1515446134809-993c501ca304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5MDM3Mzc0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1612712191426-54db4d88cbec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxNzMzNjQz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1506355683710-bd071c0a5828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE2NDQyNzI0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1444090542259-0af8fa96557e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1501446690852-da55df7bfe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjg0MDY2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1489782419474-4d4221dc5b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/10/caroline_sada_landscape.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTgwMDAwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1607287337851-a1c9e9155047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTg2Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1564714584729-46b9143bd911?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTgwNTk0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDc2MjIyMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1473800447596-01729482b8eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1440847899694-90043f91c7f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjg0MDQ1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1440581572325-0bea30075d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTcxMzA4OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxNjgwOTc0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzA4MTU1OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1422493757035-1e5e03968f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTc5OTY4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1530563937443-1f02f662fa5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTg2NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1546942113-a6c43b63104a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1496526311033-8a80ae14a1f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDU0MjY2MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMzg4NTMz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1518534249708-e8f3537753ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzMTcyNjMy&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1561198789-add490cf55a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTg2NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1466133633688-187f0b492390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDI5NTUwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1533130061792-64b345e4a833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTg2NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1453791052107-5c843da62d97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1508144753681-9986d4df99b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMzA0MjI0Mg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1469122312224-c5846569feb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1509677189330-4b7b9213ec7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTc5OTc2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzMDU4NTM3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1466354424719-343280fe118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1566419808810-658178380987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTg1OTg2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1571235908530-fccae94bb402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjg0MTA3NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1477322524744-0eece9e79640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1482784160316-6eb046863ece?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzNjQyNDUw&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1530096044079-966a654d6ae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDI5NDg0MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1464039397811-476f652a343b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzMzU0MjQ5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1549472579-e133f59d8b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1549558549-415fe4c37b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjg0ODIwMA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1488215545351-57e673dc3789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNDI5NTU4Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1488415032361-b7e238421f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIxMTkzNDA3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1470137430626-983a37b8ea46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzODAxNDQ0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjg0ODA5NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1461301214746-1e109215d6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1505028106030-e07ea1bd80c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTU4MjI2NQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1471893370050-2c1a36cf555c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjg0MTIwMg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1422205512921-12dac7b3b603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE2MDkwOTA1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1544084944-15269ec7b5a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNTc5OTQ2Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMDQxOTEyNw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1438786657495-640937046d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjI1MTE2Mjc1&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1547148915-7527397648e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIzMTU5MzEz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1493815793585-d94ccbc86df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNTYyNTQ1Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1482192505345-5655af888cc4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1505245208761-ba872912fac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1552082919-e60010758c47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
    "https://images.unsplash.com/photo-1471513671800-b09c87e1497c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
];

const verses = [
    "2 Pedro 1:3-4",
    "Jeremias 29:11",
    "Romanos 8:1-2",
    "Filipenses 4:6-7",
    "Juan 10:27-29",
    "Hebreos 13:5",
    "Filipenses 4:19",
    "Hechos 1:8",
    "Juan 14:1-3",
    "2 Pedro 1:4",
    "2 Timoteo 3:12",
    "Genesis 9:11",
    "Genesis 9:13",
    "Genesis 28:15",
    "Exodo 19:5",
    "Exodo 20:12",
    "Levitico 26:11-12",
    "Deuteronomio 7:9",
    "Josue 1:5",
    "Josue 1:8-9",
    "Josue 23:14",
    "Salmos 1:1-3",
    "Salmos 32:8",
    "Salmos 34:7",
    "Salmos 41:1",
    "Salmos 67:6",
    "Salmos 84:11-12",
    "Salmos 103:3",
    "Salmos 107:9",
    "Salmos 126:5",
    "Proverbios 1:7",
    "Proverbios 3:9-10",
    "Proverbios 19:17",
    "Proverbios 22:9",
    "Isaias 40:31",
    "Isaias 41:10",
    "Isaias 43:2",
    "Isaias 45:22-23",
    "Isaias 57:15",
    "Jeremias 7:5-7",
    "Jeremias 17:7-8",
    "Jeremias 29:11",
    "Jeremias 33:3",
    "Jeremias 33:14-16",
    "Malaquias 3:10",
    "Mateo 6:33",
    "Mateo 7:7",
    "Mateo 11:28",
    "Mateo 21:22",
    "Mateo 28:19-20",
    "Lucas 6:38",
    "Juan 1:16",
    "Juan 3:16",
    "Juan 10:27-29",
    "Juan 11:25-26",
    "Juan 14:21",
    "Juan 14:27",
    "Juan 15:4-5",
    "Juan 16:33",
    "Hechos 1:4-5",
    "Romanos 5:1",
    "1 Cor 4:7",
    "1 Cor 10:13",
    "2 Cor 7:1",
    "Efesios 6:2",
    "Filipenses 4:6-7",
    "Filipenses 4:19",
    "Hebreos 8:9",
    "Hebreos 9:15",
    "Hebreos 10:23",
    "Hebreos 11:6",
    "Hebreos 6:13-15",
    "1 Timoteo 4:8",
    "Santiago 1:12",
    "1 Tesalonicenses 5:24",
    "1 Pedro 5:10",
    "2 Pedro 1:4",
    "2 Pedro 3:9",
    "2 Pedro 3:13",
    "1 Jn 1:9",
    "1 Jn 2:25",
    "1 Jn 3:2-3",
    "1 Jn 5:11",
    "1 Jn 5:14-15",
    "Apocalipsis 2:10",
    "Apocalipsis 3:5",
    "Apocalipsis 3:20",
];

const getRandomPhoto = (verse, photoList = photos) => {
    let url = photoList[Math.floor(Math.random() * photoList.length)];
    fetch(url)
        .then(data => {

            printOnScreen(verse, data.url);
        })
};

const getRandomVerse = (verseList = verses) => {
    $("#new-verse").prop("disabled", true);
    let verse = verseList[Math.floor(Math.random() * verseList.length)];

    // Biblia.com API request
    fetch(
            "https://api.biblia.com/v1/bible/content/RVR60.txt.js?passage=" +
            verse.replace(/\s/g, "") +
            "&key=d86d581ef490d1f2a63a99ced904b1d8"
        )
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let content = {
                head: verse,
                text: data.text,
            };

            getRandomPhoto(content);
        })
        .catch((error) => {
            showAlert();
            console.warn(error);
        });
};

const printOnScreen = (verse, photo) => {
    console.log(verse, photo);

    let head = verse.head;
    let text = verse.text;

    // console.log(text, head);

    console.log(text);
    $("#text").fadeOut(function() {
        $(this).text(text).fadeIn();
    });
    $("#author").fadeOut(function() {
        $(this).text(`—${head}`).fadeIn();
    });

    $(".bg").animate({ opacity: 0 }, 500, function() {
        setTimeout($(".bg").css("background-image", "url('" + photo + "')"), 200)
        $(".bg").animate({ opacity: 1 }, 500);
    });

    enabledBtn();
};

const enabledBtn = () => {
    $("#new-verse").prop("disabled", false);
};

const showAlert = () => {
    enabledBtn();
    $("#alert").css("bottom", "0px");
};

const hideAlert = () => {
    $("#alert").css("bottom", "-100px");
};

// -------------------------Photos--------------------------
var urls = [];

const photosUrl = () => {
    for (let i = 0; i < photosID.length; i++) {
        const id = photosID[i];
        console.log(id);
        fetch(`https://source.unsplash.com/${id}/`).then((data) => {
            let url = data.url;

            urls.push(url);
        });
    }
    console.log("succes url");
    console.log(urls);
};
// -------------------------Photos--------------------------

// Main Function
$(document).ready(function() {
    console.log("conncet");

    getRandomVerse()

    $("#new-verse").on("click", () => {
        hideAlert();
        getRandomVerse();
    });
});