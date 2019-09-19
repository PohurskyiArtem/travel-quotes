var quotes = [
	{
		quote: 'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake. The great affair is to move',
		img: 'img/bg-robert-louis-stevenson.jpg'
	},
	{
		quote: 'Adventure is worthwhile',
		img: 'img/31043125426_fcb1b2aeed_b.jpg'
	},
	{
		quote: 'Traveling – it leaves you speechless, then turns you into a storyteller',
		img: 'img/tours-pakages.jpg'
	},
	{
		quote: 'We travel, some of us forever, to seek other places, other lives, other souls',
		img: 'img/travel.jpg'
	},
	{
		quote: 'A journey is best measured in friends, rather than miles',
		img: 'img/images.jpg'
	},
	{
		quote: 'The gladdest moment in human life, me thinks, is a departure into unknown lands',
		img: 'img/18617395536_b585df783c_b.jpg'
	},
	{
		quote: 'No place is ever as bad as they tell you it’s going to be',
		img: 'img/a-lonely-shots-in-the-mountains.jpg'
	},
	{
		quote: 'I am not the same, having seen the moon shine on the other side of the world',
		img: 'img/Give the Moon to Me.jpg'
	},
	{
		quote: 'Travel makes one modest. You see what a tiny place you occupy in the world',
		img: 'img/1_saRTn2POpGcuAzH__QD7WA.jpeg'
	},
	{
		quote: 'We travel not to escape life, but for life not to escape us',
		img: 'img/images (1).jpg'
	},
	{
		quote: 'The man who goes alone can start today; but he who travels with another must wait till that other is ready',
		img: 'img/cycling-holiday-copyright-n-1.jpg'
	},
	{
		quote: 'To awaken alone in a strange town is one of the pleasantest sensations in the world',
		img: 'img/3255292949_a30a0693f6_z.jpg'
	},
	{
		quote: 'The life you have led doesn’t need to be the only life you have',
		img: 'img/blog-1-1.jpg'
	},
	{
		quote: 'Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all of one’s lifetime',
		img: 'img/DSCN3575-1024x768.jpeg'
	},
	{
		quote: 'Man cannot discover new oceans unless he has the courage to lose sight of the shore',
		img: 'img/sunset-ocean-Hawaii-sail-boat-cc-Ilya-Grigorik.jpg'
	},
	{
		quote: 'The use of traveling is to regulate imagination with reality, and instead of thinking of how things may be, see them as they are',
		img: 'img/DI4w_jVWsAIW-TR.jpg'
	},
	{
		quote: 'The world is a book, and those who do not travel read only one page',
		img: 'img/moraine-lake.jpg'
	},
	{
		quote: 'Travel and change of place impart new vigor to the mind',
		img: 'img/DS9Ov1XXUAEazW6.jpg'
	},
	{
		quote: 'Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do',
		img: 'img/28327025406_f76fdd5175_b.jpg'
	},
	{
		quote: 'Once a year, go someplace you’ve never been before',
		img: 'img/50630174_293934534590456_2721256334141977395_n.jpg'
	},
	{
		quote: 'Travel is the only thing you buy that makes you richer',
		img: 'img/mountain-2585069_1920-e1512755166696.jpg'
	},
	{
		quote: 'To travel is to discover that everyone is wrong about other countries',
		img: 'img/DousZ8QXgAAv-_b.jpg'
	},
	{
		quote: 'See the world. It’s more fantastic than any dream made or paid for in factories',
		img: 'img/DTDkHewVwAAQ5QZ.jpg'
	},
	{
		quote: 'Traveling tends to magnify all human emotions',
		img: 'img/philipp-kammerer-346387-unsplash.jpg'
	},
	{
		quote: 'You don’t have to be rich to travel well',
		img: 'img/2f527d8aa9f62aac30fd4dd546b6085e.jpg'
	}
  ];

  var button = document.getElementById('button');
  button.addEventListener('click', function (){
	var randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
	document.querySelector('#text').textContent = randomQuote.quote;
	document.querySelector('#quoteImage').src = randomQuote.img;
  })