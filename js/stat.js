'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -CLOUD_HEIGHT + 150;
var BAR_GAP = 50;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);

};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH + GAP + FONT_GAP);


  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,100%,50%)';
    }
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_WIDTH + GAP + FONT_GAP + GAP + 150, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_WIDTH + GAP + FONT_GAP + GAP + 150 + GAP + FONT_GAP);


  }


};

