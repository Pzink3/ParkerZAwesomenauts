game.SpendExp = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {	
		me.game.world.addChild(new me.Sprite(0, 0, me.loader.getImage("exp-screen")), -10); // TODO
                me.input.bindKey(me.input.KEY.F1, "F1");
                me.input.bindKey(me.input.KEY.F2, "F2");
                me.input.bindKey(me.input.KEY.F3, "F3");
                me.input.bindKey(me.input.KEY.F4, "F4");
                me.input.bindKey(me.input.KEY.F5, "F5");
                var exp1cost = ((game.data.exp1 + 1) * 10);
                var exp2cost = ((game.data.exp2 + 2) * 10);
                var exp3cost = ((game.data.exp3 + 3) * 10);
                var exp4cost = ((game.data.exp4 + 4) * 10);
                me.game.world.addChild(new (me.Renderable.extend({
                    init: function(){
                        this._super(me.Renderable, 'init', [10, 10, 300, 50]);
                        this.font = new me.Font("Tw Cen MT", 21, "white");
                   
                    },
                    
                    draw: function(renderer){
                        this.font.draw(renderer.getContext(), "PRESS F1 - F4 TO BUY, AND F5 TO SKIP", this.pos.x, this.pos.y);
                        this.font.draw(renderer.getContext(), "CURRENT ACCOUNT: " + "$" + game.data.exp.toString() + ".00", this.pos.x + 100, this.pos.y + 50);
                        this.font.draw(renderer.getContext(), "F1: INCREASE GOLD PRODUCTION CURRENT LEVEL " + game.data.exp1.toString() + " PRICE: " + "$" + exp1cost + ".00", this.pos.x + 200, this.pos.y + 100);
                        this.font.draw(renderer.getContext(), "F2: ADD STARTING GOLD " + game.data.exp2.toString() + " PRICE: " + "$" + exp2cost + ".00", this.pos.x + 200, this.pos.y + 150);
                        this.font.draw(renderer.getContext(), "F3: INCREASE ATTACK DAMAGES " + game.data.exp3.toString() + " PRICE: " + "$" + exp3cost + ".00", this.pos.x + 200, this.pos.y + 200);
                        this.font.draw(renderer.getContext(), "F4: INCREASE STARTING HEALTH " + game.data.exp4.toString() + " PRICE: " + "$" + exp4cost + ".00", this.pos.x + 200, this.pos.y + 250);
                        
                    }
                })));
                
                this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge){
                    if(action === "F1"){
                        if(game.data.exp >= exp1cost){
                            game.data.exp1 += 1;
                            game.data.exp -= exp1cost;
                            me.state.change(me.state.PLAY);
                             
                        }else{
                            console.log("ERROR: NOT ENOUGH MONEY");
                        }
                    }else if(action === "F2"){
                        if(game.data.exp2 >= exp2cost){
                            game.data.exp2 += 2;
                            game.data.exp -= exp2cost;
                            me.state.change(me.state.PLAY);
                             
                        }else{
                            console.log("ERROR: NOT ENOUGH MONEY");
                        }
                    }else if(action === "F3"){
                        if(game.data.exp3 >= exp3cost){
                            game.data.exp3 += 3;
                            game.data.exp -= exp3cost;
                            me.state.change(me.state.PLAY);
                             
                        }else{
                            console.log("ERROR: NOT ENOUGH MONEY");
                        }
                    }else if(action === "F4"){
                          if(game.data.exp4 >= exp4cost){
                            game.data.exp4 += 4;
                            game.data.exp -= exp4cost;
                            me.state.change(me.state.PLAY);
                             
                        }else{
                            console.log("ERROR: NOT ENOUGH MONEY");
                        }
                    }else if(action === "F5"){
                        me.state.change(me.state.PLAY);
                    }
                });
        },
	
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
	me.input.unbindKey(me.input.KEY.F1, "F1");
        me.input.unbindKey(me.input.KEY.F2, "F2");
        me.input.unbindKey(me.input.KEY.F3, "F3");
        me.input.unbindKey(me.input.KEY.F4, "F4");
        me.input.unbindKey(me.input.KEY.F5, "F5");
        me.event.unsubscribe(this.handler);
	}
});
