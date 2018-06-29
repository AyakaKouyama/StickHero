function Stick()
{

  this.x = 0;
  this.y = 0;
  this.w = 5;
  this.h = 10;
  this.fall = false;
  this.counter = 0;

  this.draw = function()
  {
    push();
    fill("#202026");
    rect(this.x, this.y, this.w, this.h);
    pop();

  }

  this.update = function()
  {
    if(this.fall == true && this.counter == 0)
    {
      var temp = this.w;
      this.w = -this.h;
      this.h = temp;
      this.counter++;
    }
  }
  this.add = function()
  {
    if(this.counter == 0)
      this.h -= 5;
  }

}
