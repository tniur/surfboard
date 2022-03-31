let myMap;

const init = () => {
	myMap = new ymaps.Map('map', {
		center: [55.752004, 37.576133],
		zoom: 17,
		controls: [],
	});

	const coords = [[55.752004, 37.576133]];

	const myCollection = new ymaps.GeoObjectCollection(
		{},
		{
			draggable: false,
			iconLayout: 'default#image',
			iconImageHref: './img/svg/map-point.svg',
			iconImageSize: [58, 73],
		}
	);

	for (var i = 0; i < coords.length; i++) {
		myCollection.add(new ymaps.Placemark(coords[i]));
	}

	myMap.geoObjects.add(myCollection);
	myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);
