function Block()
{
  this.x = random(45, width - 45);
  this.w = 40;
  this.h = height/2 - 50;
  this.y = height - this.h;
  this.fail = false;
  this.win = false;

  this.draw = function()
  {

    if(this.win == true)
    {
      fill("#75e52b");
    }
    else if(this.fail == true)
    {
      fill("#f22121");
    }
    else
    {
      fill("#303038");
    }
    
    rect(this.x, this.y, this.w, this.h);
  }

}
