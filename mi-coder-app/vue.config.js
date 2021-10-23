  Vue.config.devtools = true
	Vue.config.silent = true
	Vue.config.errorHandler = function (err, vm, info) {
		// manejo de errores
		// `info` es información específica de Vue, por ejemplo, en cual _hook_ del ciclo de vida fue encontrado el error.
		// disponible en 2.2.0+ 
	}
	Vue.config.warnHandler = function (msg, vm, trace) {
		// `trace`: traza de jerarquía de componentes.
	}
	Vue.config.ignoredElements = [
		'my-custom-web-component',
		'another-web-component',
		// Use una `RegExp` para ignorar elementos que comienzan con "ion-"
		/^ion-/
	]
	Vue.config.keyCodes = {
		v: 86,
		f1: 112, 		// camelCase no funcionará
		mediaPlayPause: 179,
		// puede usar kebab-case con comillas dobles
		"media-play-pause": 179,
		up: [38, 87]
	}
