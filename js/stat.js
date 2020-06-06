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
var CLOUD_COLOR = 'rgba(0, 0, 0, 0.7)';
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

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + TEXT_WIDTH + GAP + FONT_GAP);

  var setRandomColorToColumn = function () {
    ctx.fillStyle = 'hsl(240, ' + (Math.random() * (100 - 1) + 1) + '%, 50%';
  };
  var maxTime = getMaxElement(times);


  var createColumn = function (player, time) {
    if (player === 'Вы') {
      ctx.fillStyle = 'red';
    } else {
      setRandomColorToColumn();
    }

    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_WIDTH + GAP + FONT_GAP + GAP + 150, BAR_WIDTH, BAR_HEIGHT * time / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(player, CLOUD_X + GAP + TEXT_WIDTH + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_WIDTH + GAP + FONT_GAP + GAP + 150 + GAP + FONT_GAP);
  };

  for (var i = 0; i < players.length; i++) {

    createColumn(players[i], times[i]);
  }
};

