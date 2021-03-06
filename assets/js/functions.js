$( document ).ready(function() {

  // Get started!

  //tested jQuery functionality here
  $("#main, #side, #link").hide();
  $("#main, #side").fadeIn(2000);

  $("#new").on('click', function(){
    $("#link").show(800);
  });


});

  //created the array for different quotes here

  var quotes = [

    "The law of harvest is to reap more than you sow. Sow an act, and you reap a habit. Sow a habit and you reap a character. Sow a character and you reap a destiny.",
    "The more tranquil a man becomes, the greater is his success, his influence, his power for good. Calmness of mind is one of the beautiful jewels of wisdom.",
    "A man sooner or later discovers that he is the master-gardener of his soul, the director of his life.",
    "In all human affairs there are efforts, and there are results, and the strength of the effort is the measure of the result.",
    "For true success ask yourself these four questions: Why? Why not? Why not me? Why not now?",
    "The greatest achievement was at first and for a time a dream. The oak sleeps in the acorn, the bird waits in the egg, and in the highest vision of the soul a waking angel stirs. Dreams are the seedlings of realities.",
    "Circumstances do not make the man, they reveal him.",
    "If your real desire is to be good, there is no need to wait for the money before you do it; you can do it now, this very moment, and just where you are.",
    "Men are anxious to improve their circumstances, but are unwilling to improve themselves; they therefore remain bound.",
    "As in the rankest soil the most beautiful flowers are grown, so in the dark soil of poverty the choicest flowers of humanity have developed and bloomed.",
    "To begin to think with purpose, is to enter the ranks of those strong ones who only recognize failure as one of the pathways to attainment.",
    "He who would accomplish little must sacrifice little; he who would achieve much must sacrifice much; he who would attain highly must sacrifice greatly.",
    "Above all be of single aim; have a legitimate and useful purpose, and devote yourself unreservedly to it.",
    "A man is not rightly conditioned until he is a happy, healthy, and prosperous being; and happiness, health, and prosperity are the result of a harmonious adjustment of the inner with the outer of the man with his surroundings.",
    "You are today where your thoughts have brought you; you will be tomorrow where your thoughts take you.",
    "Dream lofty dreams, and as you dream, so you shall become. Your vision is the promise of what you shall one day be; your ideal is the prophecy of what you shall at last unveil.",
    "You will become as small as your controlling desire; as great as you dominant aspiration.",
    "Good thoughts bear good fruit, bad thoughts bear bad fruit.",
    "Work joyfully and peacefully, knowing that right thoughts and right efforts inevitably bring about right results.",
    "The will to do springs from the knowledge that we can do.",
    "Whether you be man or woman you will never do anything in this world without courage. It is the greatest quality of the mind next to honor.",
    "Let there be nothing within thee that is not very beautiful and very gentle, and there will be nothing without thee that is not beautiful and softened by the spell of thy presence.",
    "No temptation can gravitate to a man unless there is that is his heart which is capable of responding to it.",
    "Man is made or unmade by himself. By the right choice he ascends. As a being of power, intelligence, and love, and the lord of his own thoughts, he holds the key to every situation.",
    "Harmony is one phase of the law whose spiritual expression is love.",
    "A man is literally what he thinks.",
    "All that you accomplish or fail to accomplish with your life is the direct result of your thoughts.",
    "To desire is to obtain; to aspire is to achieve.",
    "Our life is what our thoughts make it. A man will find that as he alters his thoughts toward things and other people, things and other people will alter towards him.",
    "Happiness is mental harmony; unhappiness is mental inharmony.",
    "They who have conquered doubt and fear have conquered failure.",
    "The more intense the nature of a man, the more readily will he find meditation, and the more successfully will he practice it.",
    "The man who cannot endure to have his errors and shortcomings brought to the surface and made known, but tries to hide them, is unfit to walk the highway of truth.",
    "The very fact that you are a complainer, shows that you deserve your lot.",
    "When mental energy is allowed to follow the line of least resistance and to fall into easy channels, it is called weakness.",
    "A man has to learn that he cannot command things, but that he can command himself; that he cannot coerce the wills of others, but that he can mold and master his own will: and things serve him who serves Truth; people seek guidance of him who is master of himself.",
    "The man who sows wrong thoughts and deeds and prays that God will bless him is in the position of a farmer who, having sown tares, asks God to bring forth for him a harvest of wheat."

  ];

  var links = [

    "<a href=\'http://ctt.ec/8yWea\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/9_DbL\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/T1z1V\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/OUSVb\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/wNukT\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/eeeJ3\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/HGVeQ\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/13577\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/c5m4d\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/rGUV8\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/7vdy1\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/nc0fx\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/QM4dr\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/Y3vUL\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/l9PoF\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/NeEMp\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/3xOt1\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/_6HSR\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/bl47W\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/6zN1H\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/YxT27\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/MEqQf\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/4cIm0\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/4c4_3\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/XMOH3\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/e5Wzw\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/ja08b\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/fdbeh\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/NqXRd\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/d0O5b\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/Qt9cf\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/I8c2r\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/a52AC\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/0yzD8\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/fckUJ\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/PbRvJ\' target=\'_blank\'>Tweet This</a>",
    "<a href=\'http://ctt.ec/41U48\' target=\'_blank\'>Tweet This</a>"

  ];

  //The newQuote function is declared here

    newQuote = function() {
    var randomN = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomN];
    document.getElementById('link').innerHTML = links[randomN];

  }
