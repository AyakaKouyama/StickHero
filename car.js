function Car()
{
  this.x = 20;
  this.y = height/2 - 50;
  this.gravity = 3;
  this.velocity = 5;

  this.draw = function()
  {
    fill("#202026");
    rect(this.x, this.y, 15, 40);
    fill("#f22121");
    rect(this.x, this.y + 5, 15, 5);
  }

  this.update = function()
  {
    this.y += this.gravity;
  }

  this.right = function()
  {
    this.x += this.velocity;
  }

  this.left = function()
  {
    this.x -= this.velocity;
  }

  this.colision = function(block)
  {
    if(this.y + 40 >= block.y)
    {
      if(this.x >= block.x - block.w && this.x <= block.x)
      return true;
    }
    else
    {
      return false;
    }
  }

  this.sideCollision = function(block)
  {
    if(this.x >= block.x - block.w && this.x <= block.x && this.y + 39 >block.y)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

}
