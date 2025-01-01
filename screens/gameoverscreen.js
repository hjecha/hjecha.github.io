class GameOverScreen extends Scene{
	constructor() {
		super();
		this.divid = 'GameOverScreen';
	}

	Init(args) {
		CreateHTMLElement({
			type:'h1',
			par:this.divid,
			textContent:'Game Over!!',
			style:'text-align:center;'
		});
		let ScoreObj = CreateHTMLElement({
			type:'h1',
			par:this.divid,
			textContent:'testing',
			style:'text-align:center;',
			id:'GameOverScreenScore'
		});
		ScoreObj.textContent=`Score : ${args.score}`;
	}

	SendKey() {
		return;
	}
}

gameoverscreen = new GameOverScreen();
