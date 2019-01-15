'use strict';

const responseServer = () => [
  'js',
  'java',
  'c#',
];

it('Test Snapshot', () => {
  expect(responseServer()).toMatchSnapshot();
});
