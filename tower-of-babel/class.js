var Character = function(x, y) {
      this.x = x;
      this.y = y;
      this.health_ = 100;
    };

    Character.prototype.damage = function() {
      this.health_ = this.health_ - 10;
    };

    Character.prototype.getHealth = function() {
      return this.health_;
    };

    Character.prototype.toString = function() {
      return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
    };
