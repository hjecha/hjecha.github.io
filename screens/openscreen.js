class OpenScreen extends Scene{
	constructor() {
		super();
		this.divid = 'OpenScreen';
	}

	Init(args) {
		let StartGameButton = CreateHTMLElement({
			id:'OpenScreenStartGameButton',
			type:'button',
			par:this.divid,
			style:'height:200px;width:500px;font-size:30px;',
			textContent:'Start Game'
		});
		StartGameButton.addEventListener('click',() => ChangeScene(this,playscreen));
		let SettingButton = CreateHTMLElement({
			id:'OpenScreenSettingButton',
			type:'button',
			par:this.divid,
			style:'height:200px;width:500px;font-size:30px;',
			textContent:'Settings'
		});
		SettingButton.addEventListener('click',() => ChangeScene(this,settingscreen));
	}

	SendKey() {
		return;
	}
}

openscreen = new OpenScreen();
