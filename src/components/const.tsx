const citiesData = [{
  id:1,
  city:'Paris',
  active: false
}, {
  id:2,
  city:'Cologne',
  active: false
}, {
  id:3,
  city:'Brussels',
  active: false
}, {
  id:4,
  city:'Amsterdam',
  active: true
}, {
  id:5,
  city:'Hamburg',
  active: false
}, {
  id:6,
  city:'Dusseldorf',
  active: false
}];

const options: string[] = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

const temps = [{
  id: '1',
  previewImage: 'img/apartment-01.jpg',
  title: 'Beautiful &amp; luxurious apartment at great location',
  type: 'Apartment',
  price : 120,
  isPremium: true
}, {
  id: '2',
  previewImage: 'img/room.jpg',
  title: 'Wood and stone place',
  type: 'Room',
  price : 80,
  isPremium: false
}, {
  id: '3',
  previewImage: 'img/apartment-02.jpg',
  title: 'Canal View Prinsengracht',
  type: 'Apartment',
  price : 132,
  isPremium: false
}, {
  id: '4',
  previewImage: 'img/apartment-03.jpg',
  title: 'Nice, cozy, warm big bed apartment',
  type: 'Apartment',
  price : 180,
  isPremium: true
}, {
  id: '5',
  previewImage: 'img/room.jpg',
  title: 'Wood and stone place',
  type: 'Room',
  price : 80,
  isPremium: false
}];

export {citiesData, options, temps};
