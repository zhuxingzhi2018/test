var ls;
(function (ls) {
	ls.MainScene = function() {
		return {
			"%22backInOut%22": function() { return "backInOut" },
			"%22elasticOut%22": function() { return "elasticOut" },
			"%22tweenIn%22": function() { return "tweenIn" },
			"%22isWIN%22": function() { return "isWIN" },
			"false": function() { return false },
			"%22TitleIn%22": function() { return "TitleIn" },
			"%22GameScene%22": function() { return "GameScene" }
		}
	};
	ls.GameOverScene = function() {
		return {
			"%22bounceOut%22": function() { return "bounceOut" },
			"%22GameScene%22": function() { return "GameScene" },
			"true": function() { return true },
			"%22tween%22": function() { return "tween" },
			"false": function() { return false },
			"%22isWIN%22": function() { return "isWIN" },
			"%22MainScene%22": function() { return "MainScene" },
			"%22equalTo%22": function() { return "equalTo" }
		}
	};
	ls.GameScene = function() {
		return {
			"%22greaterOrEqual%22": function() { return "greaterOrEqual" },
			"enemy3": function() { return enemy3 },
			"%22forBullet%22": function() { return "forBullet" },
			"%22type%22": function() { return "type" },
			"%22Score%22": function() { return "Score" },
			"false": function() { return false },
			"%22id%22": function() { return "id" },
			"ls.sceneWidth()*ls.random()": function() { return ls.sceneWidth()*ls.random() },
			"ls.sceneHeight()%2F2": function() { return ls.sceneHeight()/2 },
			"true": function() { return true },
			"%22BOSS%3A%22": function() { return "BOSS:" },
			"%222%2Cenemy3.x%2Cenemy3.y%22": function() { return "2,enemy3.x,enemy3.y" },
			"%22equalTo%22": function() { return "equalTo" },
			"(10%2B5*(BOSS.zdNum%252))*ls.getloopIndex(%22i%22)%2B(180-(45%2B5*(BOSS.zdNum%252)))-90": function() { return (10+5*(BOSS.zdNum%2))*ls.getloopIndex("i")+(180-(45+5*(BOSS.zdNum%2)))-90 },
			"%221%2CBOSS.x%2CBOSS.y%2C30%2C5%2C60%22": function() { return "1,BOSS.x,BOSS.y,30,5,60" },
			"enemy2": function() { return enemy2 },
			"BulletP1": function() { return BulletP1 },
			"%22isAtk%22": function() { return "isAtk" },
			"%22time1%22": function() { return "time1" },
			"%22j%22": function() { return "j" },
			"ls.random()*360": function() { return ls.random()*360 },
			"%220%2C5%22": function() { return "0,5" },
			"%22isWIN%22": function() { return "isWIN" },
			"%22HP%3A%22%2Bplayer.HP": function() { return "HP:"+player.HP },
			"%22rdPosX%22": function() { return "rdPosX" },
			"%22fSpeed%22": function() { return "fSpeed" },
			"%22cIndex%22": function() { return "cIndex" },
			"%22i%22": function() { return "i" },
			"2%2Bls.random()*2": function() { return 2+ls.random()*2 },
			"fxBoom": function() { return fxBoom },
			"%22cNumber%22": function() { return "cNumber" },
			"BulletP0.atk": function() { return BulletP0.atk },
			"%22HP%22": function() { return "HP" },
			"ls.int(ls.random()*5)%2BgameMesger.boshu*5%2B1": function() { return ls.int(ls.random()*5)+gameMesger.boshu*5+1 },
			"10*gameMesger.fSpeed1": function() { return 10*gameMesger.fSpeed1 },
			"1.5%2Bls.getloopIndex(%22i%22)*0.2": function() { return 1.5+ls.getloopIndex("i")*0.2 },
			"enemy3.x": function() { return enemy3.x },
			"BOSS.x-AISprite86.width%2F2": function() { return BOSS.x-AISprite86.width/2 },
			"%22tX%22": function() { return "tX" },
			"Function.param('bossBullet'%2C0)": function() { return Function.param('bossBullet',0) },
			"%22atk%22": function() { return "atk" },
			"Touch.touchSceneX": function() { return Touch.touchSceneX },
			"%22cNum1%22": function() { return "cNum1" },
			"%22A%3A%22%2BBulletP1.angle": function() { return "A:"+BulletP1.angle },
			"player.atk": function() { return player.atk },
			"ls.random()*2%2BgameMesger.time1": function() { return ls.random()*2+gameMesger.time1 },
			"bg.rdPosX": function() { return bg.rdPosX },
			"ls.stageWidth()%2F2": function() { return ls.stageWidth()/2 },
			"enemy2.score": function() { return enemy2.score },
			"Function.param('forBullet'%2C4)": function() { return Function.param('forBullet',4) },
			"%22cNum%22": function() { return "cNum" },
			"enemy3.y": function() { return enemy3.y },
			"bg.tX": function() { return bg.tX },
			"enemy0": function() { return enemy0 },
			"Function.param('createEnemy'%2C1)": function() { return Function.param('createEnemy',1) },
			"Function.param('forBullet'%2C1)": function() { return Function.param('forBullet',1) },
			"%22fly2Start%22": function() { return "fly2Start" },
			"%22mTag%22": function() { return "mTag" },
			"%22lessOrEqual%22": function() { return "lessOrEqual" },
			"ls.stageHeight()%2F2": function() { return ls.stageHeight()/2 },
			"%22boshu%22": function() { return "boshu" },
			"enemy.score": function() { return enemy.score },
			"Function.param('forBullet'%2C2)": function() { return Function.param('forBullet',2) },
			"player.atkLV%2B1": function() { return player.atkLV+1 },
			"%228%22": function() { return "8" },
			"mask": function() { return mask },
			"%22rdPosY%22": function() { return "rdPosY" },
			"BOSS.y-60": function() { return BOSS.y-60 },
			"touchcube": function() { return touchcube },
			"BOSS": function() { return BOSS },
			"bg.cNumSet": function() { return bg.cNumSet },
			"player.atkTime": function() { return player.atkTime },
			"(ls.sceneHeight()%2F2)*ls.random()%2B(bg.cNum%252-1)*(ls.sceneHeight()%2F2)": function() { return (ls.sceneHeight()/2)*ls.random()+(bg.cNum%2-1)*(ls.sceneHeight()/2) },
			"enemy2.x": function() { return enemy2.x },
			"bg.rdPosY": function() { return bg.rdPosY },
			"bulletE0": function() { return bulletE0 },
			"%22cNum1%3A%22%2Bbg.cNum1": function() { return "cNum1:"+bg.cNum1 },
			"%221%2C1%2C1%2C1%2C0%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C1%2C0%2C0%2C0%2C0%2C0%2C1%2C0%22": function() { return "1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0" },
			"1%2B2*gameMesger.boshu": function() { return 1+2*gameMesger.boshu },
			"%222%2CBOSS.x%2CBOSS.y%22": function() { return "2,BOSS.x,BOSS.y" },
			"%22CanUse%22": function() { return "CanUse" },
			"player.x": function() { return player.x },
			"bg.tY": function() { return bg.tY },
			"player": function() { return player },
			"10%2Bls.random()*500": function() { return 10+ls.random()*500 },
			"Touch.touchSceneY": function() { return Touch.touchSceneY },
			"360%2F10*ls.getloopIndex(%22k%22)": function() { return 360/10*ls.getloopIndex("k") },
			"%22tY%22": function() { return "tY" },
			"%22isStart%22": function() { return "isStart" },
			"enemy2.y": function() { return enemy2.y },
			"BOSS.Score": function() { return BOSS.Score },
			"BOSS.x": function() { return BOSS.x },
			"50%2BgameMesger.fSpeed": function() { return 50+gameMesger.fSpeed },
			"BOSS.HP%2FBOSS.MaxHP": function() { return BOSS.HP/BOSS.MaxHP },
			"%22Score%3A%22%2BSystem.Score": function() { return "Score:"+System.Score },
			"enemy": function() { return enemy },
			"%22isDie%22": function() { return "isDie" },
			"%22next%22": function() { return "next" },
			"player.y": function() { return player.y },
			"%22bossBullet%22": function() { return "bossBullet" },
			"360%2F8*ls.getloopIndex(%22i%22)": function() { return 360/8*ls.getloopIndex("i") },
			"%22k%22": function() { return "k" },
			"10%2Bls.random()*50": function() { return 10+ls.random()*50 },
			"gameMesger.cIndex": function() { return gameMesger.cIndex },
			"Function.param('forBullet'%2C3)*ls.getloopIndex(%22j%22)%2B(180-Function.param('forBullet'%2C5))": function() { return Function.param('forBullet',3)*ls.getloopIndex("j")+(180-Function.param('forBullet',5)) },
			"BulletP0": function() { return BulletP0 },
			"gameMesger.cNumber": function() { return gameMesger.cNumber },
			"(enemy.width%2BgameMesger.jiange)*ls.getloopIndex(%22i%22)%2Benemy.width%2F2": function() { return (enemy.width+gameMesger.jiange)*ls.getloopIndex("i")+enemy.width/2 },
			"%22eNumber%22": function() { return "eNumber" },
			"%22dieFX%22": function() { return "dieFX" },
			"20*ls.getloopIndex(%22i%22)-player.atkLV*20%2F2": function() { return 20*ls.getloopIndex("i")-player.atkLV*20/2 },
			"%22MaxHP%22": function() { return "MaxHP" },
			"500*ls.random()": function() { return 500*ls.random() },
			"%22greaterThan%22": function() { return "greaterThan" },
			"enemy.x": function() { return enemy.x },
			"%22createEnemy%22": function() { return "createEnemy" },
			"%22lessThan%22": function() { return "lessThan" },
			"75%2Bls.random()*75": function() { return 75+ls.random()*75 },
			"%22zdNum%22": function() { return "zdNum" },
			"%22GameOverScene%22": function() { return "GameOverScene" },
			"BOSS.x%2Bls.random()*100-50": function() { return BOSS.x+ls.random()*100-50 },
			"BulletP1.angle-90": function() { return BulletP1.angle-90 },
			"%22isBoss%22": function() { return "isBoss" },
			"enemy3.score": function() { return enemy3.score },
			"%22fSpeed1%22": function() { return "fSpeed1" },
			"ls.sceneWidth()%2F2": function() { return ls.sceneWidth()/2 },
			"BOSS.HP": function() { return BOSS.HP },
			"%22model%22": function() { return "model" },
			"enemy.y": function() { return enemy.y },
			"BOSS.y%2Bls.random()*100-50": function() { return BOSS.y+ls.random()*100-50 },
			"%22%22%2Bbg.eNumber": function() { return ""+bg.eNumber },
			"400%2Bls.random()*300": function() { return 400+ls.random()*300 }
		}
	};
})(ls || (ls = {}));