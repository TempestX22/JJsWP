//locations of car crashes in 2023 new years eve
//the size od the img is determined by how many were injured
//on the location
let backgroundMap;
let table1, table2;
let lat, lon, xgeo, ygeo, dmg;
let img;

let mapGeoLeft = -74.0672; // Longitude 180 degrees west
let mapGeoRight = -73.7684; // Longitude 180 degrees east
let mapGeoTop = 40.7964; // Latitude 90 degrees north.
let mapGeoBottom = 40.5698; // Latitude 90 degrees south.

function setup() {
  createCanvas(500, 500);
  background(backgroundMap);
  noStroke();
}

function preload() {
  img = loadImage("/car.png");
  backgroundMap = loadImage("/Map.png");
  table1 = loadTable("/Crashes.csv", "csv", "header"); // capitals

}

function draw() {
  for (let r = 0; r < table1.getRowCount(); r++) {
    let tableRow = table1.rows[r];
    for (let c = 0; c < table1.getColumnCount(); c++) {
      lat = tableRow.get("LATITUDE");
      lon = tableRow.get("LONGITUDE");

      xgeo = (width * (lon - mapGeoLeft)) / (mapGeoRight - mapGeoLeft);
      ygeo =
        height - (height * (lat - mapGeoBottom)) / (mapGeoTop - mapGeoBottom);
      
      dmg = tableRow.get("NUMBER OF PERSONS INJURED");

      fill(255, 0, 0);
      strokeWeight(0.5* dmg);
      image(img,xgeo,ygeo,10*dmg+5,10*dmg+5);
    }
  }
  noLoop();
}