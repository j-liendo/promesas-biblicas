const projectName = 'biblical-promises';

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
    "GraajutbJHE"
]

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
    "Deuteronomio 28:1-14",
    "Deuteronomio 28:15-68",
    "Deuteronomio 30:1-20",
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
    "1 Corintios 4:7",
    "1 Corintios 10:13",
    "2 Corintios 7:1",
    "2 Corintios 9:6-8",
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
    "1 Juan 1:9",
    "1 Juan 1:19",
    "1 Juan 2:25",
    "1 Juan 3:2-3",
    "1 Juan 5:11",
    "1 Juan 5:14-15",
    "Apocalipsis 2:10",
    "Apocalipsis 3:5",
    "Apocalipsis 3:20"
]


const getRandomPhoto = (verse, photoList = photosID) => {
    let photoRandomID = photoList[Math.floor(Math.random() * (photoList.length))];
    fetch(`https://source.unsplash.com/${photoRandomID}/800x600`)
        .then(data => {
            let url = data.url

            printOnScreen(verse, url)



        })
        .catch(error => {
            showAlert()
            console.warn(error)
        })
}

const getRandomVerse = (verseList = verses) => {
    $('#new-verse').prop('disabled', true)
    let verse = verseList[Math.floor(Math.random() * (verseList.length))];

    // Biblia.com API request
    fetch("https://api.biblia.com/v1/bible/content/RVR60.txt.js?passage=" + verse.replace(" ", "") + "&key=d86d581ef490d1f2a63a99ced904b1d8")
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            let content = {
                "head": verse,
                "text": data.text
            };

            getRandomPhoto(content)
        })
        .catch(error => {
            showAlert();
            console.warn(error)
        })
}

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

    $('.bg').animate({ opacity: 0 }, 600, function() {
        $('.bg').css("background-image", "url('" + photo + "')");
        $('.bg').animate({ opacity: 1 }, 600);
    });

    enabledBtn()
}

const enabledBtn = () => {
    $('#new-verse').prop('disabled', false)
}

const showAlert = () => {
    enabledBtn();
    $('#alert').css("bottom", "0px")
}

const hideAlert = () => {
    $('#alert').css("bottom", "-100px");
}


// Main Function
$(document).ready(function() {
    console.log("conncet");


    getRandomVerse()

    $('#new-verse').on("click", () => {
        hideAlert()
        getRandomVerse()
    })


})