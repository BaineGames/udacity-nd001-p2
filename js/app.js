/*
 * Create a list that holds all of your cards
 */

// variable setup


// all brand icons from the neweset FA pack v5.5.0
const ICON_SET = Object.freeze(["500px", "accessible-icon", "accusoft", "acquisitions-incorporated", "adn", "adversal", "affiliatetheme", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "asymmetrik", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "behance", "behance-square", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", "bluetooth", "bluetooth-b", "btc", "buromobelexperte", "buysellads", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "centercode", "chrome", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "connectdevelop", "contao", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dashcube", "delicious", "deploydog", "deskpro", "dev", "deviantart", "digg", "digital-ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble-square", "dropbox", "drupal", "dyalog", "earlybirds", "ebay", "edge", "elementor", "ello", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "expeditedssl", "facebook", "facebook-f", "facebook-messenger", "facebook-square", "fantasy-flight-games", "firefox", "first-order", "first-order-alt", "firstdraft", "flickr", "flipboard", "fly", "font-awesome", "font-awesome-alt", "font-awesome-flag", "fonticons", "fonticons-fi", "fort-awesome", "fort-awesome-alt", "forumbee", "foursquare", "free-code-camp", "freebsd", "fulcrum", "galactic-republic", "galactic-senate", "get-pocket", "gg", "gg-circle", "git", "git-square", "github", "github-alt", "github-square", "gitkraken", "gitlab", "gitter", "glide", "glide-g", "gofore", "goodreads", "goodreads-g", "google", "google-drive", "google-play", "google-plus", "google-plus-g", "google-plus-square", "google-wallet", "gratipay", "grav", "gripfire", "grunt", "gulp", "hacker-news", "hacker-news-square", "hackerrank", "hips", "hire-a-helper", "hooli", "hornbill", "hotjar", "houzz", "html5", "hubspot", "imdb", "instagram", "internet-explorer", "ioxhost", "itunes", "itunes-note", "java", "jedi-order", "jenkins", "joget", "joomla", "js", "js-square", "jsfiddle", "kaggle", "keybase", "keycdn", "kickstarter", "kickstarter-k", "korvue", "laravel", "lastfm", "lastfm-square", "leanpub", "less", "line", "linkedin", "linkedin-in", "linode", "linux", "lyft", "magento", "mailchimp", "mandalorian", "markdown", "mastodon", "maxcdn", "medapps", "medium", "medium-m", "medrt", "meetup", "megaport", "microsoft", "mix", "mixcloud", "mizuni", "modx", "monero", "napster", "neos", "nimblr", "nintendo-switch", "node", "node-js", "npm", "ns8", "nutritionix", "odnoklassniki", "odnoklassniki-square", "old-republic", "opencart", "openid", "opera", "optin-monster", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "penny-arcade", "periscope", "phabricator", "phoenix-framework", "phoenix-squadron", "php", "pied-piper", "pied-piper-alt", "pied-piper-hat", "pied-piper-pp", "pinterest", "pinterest-p", "pinterest-square", "playstation", "product-hunt", "pushed", "python", "qq", "quinscape", "quora", "r-project", "ravelry", "react", "reacteurope", "readme", "rebel", "red-river", "reddit", "reddit-alien", "reddit-square", "renren", "replyd", "researchgate", "resolving", "rev", "rocketchat", "rockrms", "safari", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "shopware", "simplybuilt", "sistrix", "sith", "skyatlas", "skype", "slack", "slack-hash", "slideshare", "snapchat", "snapchat-ghost", "snapchat-square", "soundcloud", "speakap", "spotify", "squarespace", "stack-exchange", "stack-overflow", "staylinked", "steam", "steam-square", "steam-symbol", "sticker-mule", "strava", "stripe", "stripe-s", "studiovinari", "stumbleupon", "stumbleupon-circle", "superpowers", "supple", "teamspeak", "telegram", "telegram-plane", "tencent-weibo", "the-red-yeti", "themeco", "themeisle", "think-peaks", "trade-federation", "trello", "tripadvisor", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "typo3", "uber", "uikit", "uniregistry", "untappd", "usb", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo-square", "viber", "vimeo", "vimeo-square", "vimeo-v", "vine", "vk", "vnv", "vuejs", "weebly", "weibo", "weixin", "whatsapp", "whatsapp-square", "whmcs", "wikipedia-w", "windows", "wix", "wizards-of-the-coast", "wolf-pack-battalion", "wordpress", "wordpress-simple", "wpbeginner", "wpexplorer", "wpforms", "wpressr", "xbox", "xing", "xing-square", "y-combinator", "yahoo", "yandex", "yandex-international", "yelp", "yoast", "youtube", "youtube-square", "zhihu"]);

//buld html for each item and add to document fragment
let deck_container;
let deck;
let stars;
let cardsOpened = [];
let preventClick = false;
let moveCounter = 0;
let matchCounter = 0;
let timerStart = 0;
let gameStep;
let timerDisplay;
let gameTimer = 0;


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// open and show classes are needed for click actions
// match is the class used for a winning pair

document.addEventListener('DOMContentLoaded', function () {
    init();
});

function init() {

    deck_container = document.querySelector(".deck");
    timerDisplay = document.querySelector(".timer");

    stars = document.querySelector(".stars");
    cardsOpened = [];
    matchCounter = 0;

    document.querySelector('.popup').classList.add("hide");
    preventClick = false;

    //empty deck in case of reset
    while (deck_container.firstChild) {
        deck_container.removeChild(deck_container.firstChild);
    }

    //reset move counter
    moveCounter = 0;
    document.querySelector(".moves").textContent = moveCounter;

    //reset timer
    timerStart = 0;
    gameTimer = 0;
    clearInterval(gameStep);
    timerDisplay.textContent = "Timer - 00:00:00";

    //reset stars
    for (let star of stars.children) {
        star.classList.remove("starMissed");
    }

    let temp_list = ICON_SET.slice();

    //select 8 icons at random from the list
    let selectedIcons = [];
    for (let i = 0; i < 8; i++) {
        let selectedIcon = temp_list[Math.floor(Math.random() * temp_list.length)];
        selectedIcons.push(selectedIcon);
        temp_list.pop(selectedIcon);
    }

    //double the selectedIcons List
    selectedIcons.push(...selectedIcons);

    //shuffle list
    shuffle(selectedIcons);

    let doc_frag = document.createDocumentFragment();

    selectedIcons.forEach(function (icon) {
        let create_li = document.createElement("li");
        let create_i = document.createElement("i");

        create_li.classList.add("card");
        create_i.classList.add("fab", `fa-${icon}`);

        create_li.appendChild(create_i);
        doc_frag.appendChild(create_li);

    });

    //add document fragment to deck ul item
    deck_container.appendChild(doc_frag);

    deck = document.querySelectorAll(".card");

    deck.forEach(function (card) {
        card.addEventListener("click", function (e) {
            if (!timerStart) {
                timerStart = 1;
                gameStep = setInterval(runTimer, 1000);
            }
            if (!preventClick) {
                if (cardsOpened.indexOf(card) != -1) {
                    return;
                }
                if (cardsOpened.length < 2) {
                    card.classList.add("open");
                    card.classList.add("show");
                    cardsOpened.push(card);
                }
                if (cardsOpened.length == 2) {
                    preventClick = true;
                    setTimeout(checkMatch, 500);
                    return;
                }
            } else {
                return;
            }
        });
    });

    let reset = document.querySelectorAll(".restart");

    for (let item of reset) {
        item.addEventListener("click", function () {
            init();
        });
    }
}

function runTimer() {
    gameTimer++;
    timerDisplay.textContent = `Timer - ${(new Date(gameTimer * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]}`;
}

function checkMatch() {
    let cardA = cardsOpened[0];
    let cardA_img = cardA.querySelector("i").classList[1];
    let cardB = cardsOpened[1];
    let cardB_img = cardB.querySelector("i").classList[1];
    if (cardA_img == cardB_img) {
        cardA.classList.add("match");
        cardA.classList.remove("open", "show");
        cardB.classList.add("match");
        cardB.classList.remove("open", "show");
        matchCounter++;
    }
    processTurn();
}

function processTurn() {


    let cardsToHide = document.querySelectorAll(".card.open.show");
    cardsToHide.forEach(function (card) {
        card.classList.remove("open");
        card.classList.remove("show");
    });
    cardsOpened = [];
    preventClick = false;
    incrementMove();
}

function winGame() {
    clearInterval(gameStep);
    let timeCompleteDisplay = document.querySelector(".time-complete");
    let starCompleteDisplay = document.querySelector(".star-complete");
    timeCompleteDisplay.textContent = (new Date(gameTimer * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0];

    let starsMissed = document.querySelectorAll(".starMissed").length;
    starCompleteDisplay.textContent = `${3 - starsMissed}`;
    preventClick = true;
    document.querySelector(".popup").classList.remove("hide");
}

function incrementMove() {
    moveCounter++;
    document.querySelector(".moves").textContent = moveCounter;

    if (moveCounter == 15) {
        stars.children[0].classList.add("starMissed");
    }

    if (moveCounter == 25) {
        stars.children[1].classList.add("starMissed");
    }

    if (moveCounter == 35) {
        stars.children[2].classList.add("starMissed");
    }

    if (matchCounter == 8) {
        winGame();
    }
}