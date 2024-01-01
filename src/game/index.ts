export class SnakeGame {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private snake: Snake | null;
  private foods: Food[];
  private score: number;
  private isGameOver: boolean;
  private gameSpeedInterval: number;
  private size: number = 30;

  constructor() {
    this.canvas = document.getElementById('game') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.snake = null;
    this.foods = [];
    this.score = 0;
    this.isGameOver = false;
    this.gameSpeedInterval = 1000;
  }
  start() {
    this.reset();
    this.dropFood();
    this.snake = new Snake(this.canvas, { x: this.canvas.width / 2, y: this.canvas.height / 2 }, '#fff', { x: this.canvas.width / 2, y: this.canvas.height / 2 + 3 * this.size })
    this.clock();
  }
  clock() {
    this.detectCollision()
    this.foodInteraction()
    this.snake?.move()
  }
  dropFood() {
    let [x, y] = [0, 0]
    const newfood = new Food(this.canvas, x, y, 30)
    newfood.drop()
    this.foods.push(newfood)
  }
  reset() {
    this.foods = [];
    this.score = 0;
    this.isGameOver = false;
    this.snake = null;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  detectCollision() {

  }
  foodInteraction() {
    if (this.foods.length) {
      const food = this.foods[this.foods.length - 1]
      if (food.getPos().x === this.snake?.getHead().x && food.getPos().y === this.snake?.getHead().y) {
        this.foods[this.foods.length - 1].eat()
        this.snake.extend()
        this.dropFood()
        this.score += 1
      }
    }
  }
}

class Food {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  public size: number;
  private isEatenBoolean: boolean = false;

  constructor(canvas: HTMLCanvasElement, x: number, y: number, size: number = 30) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.x = x;
    this.y = y;
    this.size = size;
  }
  private makeFood() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size / 2, 0, 2 * Math.PI);
    this.ctx.globalAlpha = 0.4;
    this.ctx.fillStyle = "rgba(67, 217, 173, 0.3)";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size / 3, 0, 2 * Math.PI);
    this.ctx.globalAlpha = 0.7;
    this.ctx.fillStyle = "rgba(67, 217, 173, 0.6)";
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size / 6, 0, 2 * Math.PI);
    this.ctx.globalAlpha = 1;
    this.ctx.fillStyle = "rgba(67, 217, 173, 1)";
    this.ctx.fill();
    this.ctx.closePath();
  }
  public drop() {
    this.makeFood();
  }
  public eat() {
    this.ctx.clearRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    this.isEatenBoolean = true;
  }
  public isEaten() {
    return this.isEatenBoolean;
  }
  public getPos() {
    return { x: this.x, y: this.y }
  }
}

class Snake {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private isDeadBoolean: boolean;
  private lines: Line[];
  private head: Point;
  private dir: 'up' | 'down' | 'left' | 'right'
  public size: number = 30;

  constructor(canvas: HTMLCanvasElement, tail: Point, color: string, head: Point) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.isDeadBoolean = false;
    this.lines = [{
      point: tail,
      turnTaken: 'straight'
    }]
    this.head = head;
    this.dir = 'up';
  }

  public isDead() {
    return this.isDeadBoolean;
  }

  private moveUP() {
    if (this.dir === 'down') {
      this.isDeadBoolean = true;
    } else {
      this.head.y += this.size
      this.dir = 'up'
      this.draw()
    }
  }
  private moveDOWN() {
    if (this.dir === 'up') {
      this.isDeadBoolean = true;
    } else {
      this.head.y -= this.size
      this.dir = 'down'
      this.draw()
    }
  }
  private moveLEFT() {
    if (this.dir === 'right') {
      this.isDeadBoolean = true;
    } else {
      this.lines.push({
        point: this.head,
        turnTaken: 'left'
      })
      this.head.x -= this.size
      this.dir = 'left'
      this.draw()
    }
  }
  private moveRIGHT() {
    if (this.dir === 'left') {
      this.isDeadBoolean = true;
    } else {
      this.lines.push({
        point: this.head,
        turnTaken: 'right'
      })
      this.head.x += this.size
      this.dir = 'right'
      this.draw()
    }
  }
  private draw() {
    this.ctx.fillStyle = '#fff';
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillRect(this.head.x - this.size / 2, this.head.y - this.size / 2, this.lines[this.lines.length - 1].point.x - this.size / 2, this.lines[this.lines.length - 1].point.y - this.size / 2);
    for (let i = this.lines.length - 1; i > 0; i--) {
      const line = this.lines[i];
      this.ctx.fillRect(line.point.x - this.size / 2, line.point.y - this.size / 2, this.lines[i - 1].point.x - this.size / 2, this.lines[i - 1].point.y - this.size / 2);
    }
  }
  public move() {
    switch (this.dir) {
      case 'up':
        this.moveUP()
        break;
      case 'down':
        this.moveDOWN()
        break;
      case 'left':
        this.moveLEFT()
        break;
      case 'right':
        this.moveRIGHT()
        break;
    }
  }
  public getHead() {
    return this.head
  }
  public extend() {

  }
}