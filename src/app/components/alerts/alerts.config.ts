
export var AlertsConfigData: any[] = [];

export var AlertsSettingsData: Object = {};

AlertsConfigData['error'] = {
		css: {
			background: '#d80202',
			color: '#000',
			fadebackground: '#fff',
			icon: 'error',
			border: '1px solid #d80202',
			closeiconcolor: '#000'
		}
};

AlertsConfigData['success'] = {
		css: {
			background: '#22aa0d',
			color: '#000',
			fadebackground: '#fff',
			icon: 'done',
			border: '1px solid #22aa0d',
			closeiconcolor: '#000'
		}
};

AlertsConfigData['warn'] = {
		css: {
			background: '#ff7b00',
			color: '#fff',
			fadebackground: '#f98f31',
			icon: 'warning',
			border: '1px solid #ff7b00',
			closeiconcolor: '#000'
		}
};

AlertsSettingsData['timeout'] = 3;

export class AlertsConfig {
	settings: Object[] =  [];
	getstyles(type) {
		return {
			backgroundColor: AlertsConfigData[type].css.background,
			Color: AlertsConfigData[type].css.color,
			fadebackgroundColor: AlertsConfigData[type].css.fadebackground,
			icon: AlertsConfigData[type].css.icon,
			border: AlertsConfigData[type].css.border,
			closeiconcolor: AlertsConfigData[type].css.closeiconcolor
		};
	}

	setSettings() {
		return AlertsSettingsData;
	}
}