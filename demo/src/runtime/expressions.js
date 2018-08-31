var ls;
(function (ls) {
	ls.MainScene = function() {
		return {
			"%22tweenIn%22": function() { return "tweenIn" },
			"%22TitleIn%22": function() { return "TitleIn" },
			"%22isWIN%22": function() { return "isWIN" },
			"false": function() { return false },
			"%22backInOut%22": function() { return "backInOut" },
			"%22elasticOut%22": function() { return "elasticOut" },
			"%22GameScene%22": function() { return "GameScene" }
		}
	};
	ls.GameOverScene = function() {
		return {
			"%22isWIN%22": function() { return "isWIN" },
			"%22equalTo%22": function() { return "equalTo" },
			"%22bounceOut%22": function() { return "bounceOut" },
			"%22MainScene%22": function() { return "MainScene" },
			"%22tween%22": function() { return "tween" },
			"true": function() { return true },
			"%22GameScene%22": function() { return "GameScene" },
			"false": function() { return false }
		}
	};
	ls.GameScene = function() {
		return {
			"BOSS.x": function() { return BOSS.x },
			"bg.rdPosX": function() { return bg.rdPosX },
			"BulletP0.atk": function() { return BulletP0.atk },
			"50%2BgameMesger.fSpeed": function() { return 50+gameMesger.fSpeed },
			"%22next%22": function() { return "next" },
			"10%2Bls.random()*50": function() { return 10+ls.random()*50 },
			"true": function() { return true },
			"Function.param('forBullet'%2C1)": function() { return Function.param('forBullet',1) },
			"%22cNum%22": function() { return "cNum" },
			"false": function() { return false },
			"%22atk%22": function() { return "atk" },
			"%22model%22": function() { return "model" },
			"%22HP%22": function() { return "HP" },
			"%22rdPosY%22": function() { return "rdPosY" },
			"player.atk": function() { return player.atk },
			"%22tX%22": function() { return "tX" },
			"%22CanUse%22": function() { return "CanUse" },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"ls.stageWidth()%2F2": function() { return ls.stageWidth()/2 },
			"Function.param('forBullet'%2C2)": function() { return Function.param('forBullet',2) },
			"%22isWIN%22": function() { return "isWIN" },
			"Touch.touchSceneX": function() { return Touch.touchSceneX },
			"bg.rdPosY": function() { return bg.rdPosY },
			"enemy3.y": function() { return enemy3.y },
			"%22equalTo%22": function() { return "equalTo" },
			"enemy2.x": function() { return enemy2.x },
			"BOSS.HP": function() { return BOSS.HP },
			"(ls.sceneHeight()%2F2)*ls.random()%2B(bg.cNum%252-1)*(ls.sceneHeight()%2F2)": function() { return (ls.sceneHeight()/2)*ls.random()+(bg.cNum%2-1)*(ls.sceneHeight()/2) },
			"%22MaxHP%22": function() { return "MaxHP" },
			"player.atkLV%2B1": function() { return player.atkLV+1 },
			"bg.tX": function() { return bg.tX },
			"bg.cNumSet": function() { return bg.cNumSet },
			"%22HP%3A%22%2Bplayer.HP": function() { return "HP:"+player.HP },
			"%22fSpeed1%22": function() { return "fSpeed1" },
			"%22greaterThan%22": function() { return "greaterThan" },
			"ls.stageHeight()%2F2": function() { return ls.stageHeight()/2 },
			"%22cIndex%22": function() { return "cIndex" },
			"%22cNum1%3A%22%2Bbg.cNum1": function() { return "cNum1:"+bg.cNum1 },
			"enemy.score": function() { return enemy.score },
			"1%2B2*gameMesger.boshu": function() { return 1+2*gameMesger.boshu },
			"bg.tY": function() { return bg.tY },
			"enemy2.y": function() { return enemy2.y },
			"player.atkTime": function() { return player.atkTime },
			"%22GameOverScene%22": function() { return "GameOverScene" },
			"%22createEnemy%22": function() { return "createEnemy" },
			"%22isBoss%22": function() { return "isBoss" },
			"%220%2C5%22": function() { return "0,5" },
			"(enemy.width%2BgameMesger.jiange)*ls.getloopIndex(%22i%22)%2Benemy.width%2F2": function() { return (enemy.width+gameMesger.jiange)*ls.getloopIndex("i")+enemy.width/2 },
			"%22lessThan%22": function() { return "lessThan" },
			"%22id%22": function() { return "id" },
			"%22tY%22": function() { return "tY" },
			"gameMesger.cNumber": function() { return gameMesger.cNumber },
			"gameMesger.cIndex": function() { return gameMesger.cIndex },
			"player.x": function() { return player.x },
			"360%2F10*ls.getloopIndex(%22k%22)": function() { return 360/10*ls.getloopIndex("k") },
			"%221%2C1%2C1%2C1%2C0%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C1%2C0%22": function() { return "1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0" },
			"360%2F8*ls.getloopIndex(%22i%22)": function() { return 360/8*ls.getloopIndex("i") },
			"Function.param('forBullet'%2C3)*ls.getloopIndex(%22j%22)%2B(180-Function.param('forBullet'%2C5))": function() { return Function.param('forBullet',3)*ls.getloopIndex("j")+(180-Function.param('forBullet',5)) },
			"%22Score%22": function() { return "Score" },
			"%22time1%22": function() { return "time1" },
			"player.y": function() { return player.y },
			"2%2Bls.random()*2": function() { return 2+ls.random()*2 },
			"mask": function() { return mask },
			"%22eNumber%22": function() { return "eNumber" },
			"enemy2": function() { return enemy2 },
			"%22Score%3A%22%2BSystem.Score": function() { return "Score:"+System.Score },
			"%22cNumber%22": function() { return "cNumber" },
			"%222%2CBOSS.x%2CBOSS.y%22": function() { return "2,BOSS.x,BOSS.y" },
			"%22isStart%22": function() { return "isStart" },
			"%22mTag%22": function() { return "mTag" },
			"%22bossBullet%22": function() { return "bossBullet" },
			"ls.int(ls.random()*5)%2BgameMesger.boshu*5%2B1": function() { return ls.int(ls.random()*5)+gameMesger.boshu*5+1 },
			"BOSS.Score": function() { return BOSS.Score },
			"%22BOSS%3A%22": function() { return "BOSS:" },
			"1.5%2Bls.getloopIndex(%22i%22)*0.2": function() { return 1.5+ls.getloopIndex("i")*0.2 },
			"enemy3.score": function() { return enemy3.score },
			"Touch.touchSceneY": function() { return Touch.touchSceneY },
			"ls.sceneWidth()%2F2": function() { return ls.sceneWidth()/2 },
			"BulletP1": function() { return BulletP1 },
			"player": function() { return player },
			"20*ls.getloopIndex(%22i%22)-player.atkLV*20%2F2": function() { return 20*ls.getloopIndex("i")-player.atkLV*20/2 },
			"enemy.x": function() { return enemy.x },
			"BOSS.x%2Bls.random()*100-50": function() { return BOSS.x+ls.random()*100-50 },
			"BulletP1.angle-90": function() { return BulletP1.angle-90 },
			"fxBoom": function() { return fxBoom },
			"%228%22": function() { return "8" },
			"Function.param('createEnemy'%2C1)": function() { return Function.param('createEnemy',1) },
			"%22%22%2Bbg.eNumber": function() { return ""+bg.eNumber },
			"%22isDie%22": function() { return "isDie" },
			"400%2Bls.random()*300": function() { return 400+ls.random()*300 },
			"%22fSpeed%22": function() { return "fSpeed" },
			"%22zdNum%22": function() { return "zdNum" },
			"%22forBullet%22": function() { return "forBullet" },
			"%22boshu%22": function() { return "boshu" },
			"enemy.y": function() { return enemy.y },
			"%22rdPosX%22": function() { return "rdPosX" },
			"ls.sceneHeight()%2F2": function() { return ls.sceneHeight()/2 },
			"%22k%22": function() { return "k" },
			"BOSS.y%2Bls.random()*100-50": function() { return BOSS.y+ls.random()*100-50 },
			"%22type%22": function() { return "type" },
			"500*ls.random()": function() { return 500*ls.random() },
			"ls.sceneWidth()*ls.random()": function() { return ls.sceneWidth()*ls.random() },
			"(10%2B5*(BOSS.zdNum%252))*ls.getloopIndex(%22i%22)%2B(180-(45%2B5*(BOSS.zdNum%252)))-90": function() { return (10+5*(BOSS.zdNum%2))*ls.getloopIndex("i")+(180-(45+5*(BOSS.zdNum%2)))-90 },
			"BOSS.y-60": function() { return BOSS.y-60 },
			"10*gameMesger.fSpeed1": function() { return 10*gameMesger.fSpeed1 },
			"%22dieFX%22": function() { return "dieFX" },
			"%221%2CBOSS.x%2CBOSS.y%2C30%2C5%2C60%22": function() { return "1,BOSS.x,BOSS.y,30,5,60" },
			"enemy0": function() { return enemy0 },
			"%222%2Cenemy3.x%2Cenemy3.y%22": function() { return "2,enemy3.x,enemy3.y" },
			"ls.random()*2%2BgameMesger.time1": function() { return ls.random()*2+gameMesger.time1 },
			"%22j%22": function() { return "j" },
			"BOSS": function() { return BOSS },
			"BOSS.x-AISprite86.width%2F2": function() { return BOSS.x-AISprite86.width/2 },
			"touchcube": function() { return touchcube },
			"%22isAtk%22": function() { return "isAtk" },
			"BOSS.HP%2FBOSS.MaxHP": function() { return BOSS.HP/BOSS.MaxHP },
			"%22fly2Start%22": function() { return "fly2Start" },
			"enemy2.score": function() { return enemy2.score },
			"enemy3": function() { return enemy3 },
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"75%2Bls.random()*75": function() { return 75+ls.random()*75 },
			"bulletE0": function() { return bulletE0 },
			"10%2Bls.random()*500": function() { return 10+ls.random()*500 },
			"ls.random()*360": function() { return ls.random()*360 },
			"enemy3.x": function() { return enemy3.x },
			"%22A%3A%22%2BBulletP1.angle": function() { return "A:"+BulletP1.angle },
			"Function.param('forBullet'%2C4)": function() { return Function.param('forBullet',4) },
			"%22cNum1%22": function() { return "cNum1" },
			"%22i%22": function() { return "i" },
			"Function.param('bossBullet'%2C0)": function() { return Function.param('bossBullet',0) },
			"BulletP0": function() { return BulletP0 },
			"enemy": function() { return enemy }
		}
	};
})(ls || (ls = {}));