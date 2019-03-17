"use strict";

const width = 1920;
const height = 1080;
const r = 200;
const xstep = 16;
const ystep = 9;
const pi2 = 2 * Math.PI;

const xband = width / xstep;
const yband = height / ystep;
const xcenter = width / 2;
const ycenter = height / 2;

//
const canvas = document.getElementsByTagName("canvas")[0];
canvas.width = width;
canvas.height = height;
{
  const ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, 1920, 1080);

  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  for (let y = 0; y < ystep; y++) {
    for (let x = 0; x < xstep; x++) {
      ctx.beginPath();
      const xpos = (x + 0.5) * xband;
      const ypos = (y + 0.5) * yband;
      const xnorm = ((xpos - xcenter) / xcenter) ** 2;
      const ynorm = ((ypos - ycenter) / ycenter) ** 2;
      const d = 1 - Math.sqrt((xnorm + ynorm) / 2);
      const rpos = r * d;
      ctx.arc(xpos, ypos, rpos, 0, pi2, true);
      ctx.fill();
      ctx.closePath();
    }
  }
}

//
const canvas2 = document.getElementsByTagName("canvas")[1];
canvas2.width = width;
canvas2.height = height;
{
  const ctx = canvas2.getContext("2d");
  ctx.fillRect(0, 0, 1920, 1080);

  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  for (let y = 0; y < ystep; y++) {
    for (let x = 0; x < xstep; x++) {
      ctx.beginPath();
      const xpos = (x + 0.5) * xband;
      const ypos = (y + 0.5) * yband;
      const d = 1 - Math.abs(-xpos / width + ypos / height);
      const rpos = d * 100;
      ctx.arc(xpos, ypos, rpos, 0, pi2, true);
      ctx.fill();
      ctx.closePath();
    }
  }
}

//
const canvas3 = document.getElementsByTagName("canvas")[2];
canvas3.width = width;
canvas3.height = height;
{
  const ctx = canvas3.getContext("2d");
  ctx.fillRect(0, 0, 1920, 1080);

  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  for (let y = 0; y < ystep; y++) {
    for (let x = 0; x < xstep; x++) {
      ctx.beginPath();
      const xpos = (x + 0.5) * xband;
      const ypos = (y + 0.5) * yband;
      const xnorm = ((xpos - xcenter) / xcenter) ** 2;
      const ynorm = ((ypos - ycenter) / ycenter) ** 2;
      const d1 = 1 - Math.sqrt((xnorm + ynorm) / 2);
      const d2 = 1 - Math.abs(-xpos / width + ypos / height);
      const rpos = (d1 + d2) * 80;
      ctx.arc(xpos, ypos, rpos, 0, pi2, true);
      ctx.fill();
      ctx.closePath();
    }
  }
}
