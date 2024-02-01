// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let extensionsToInstall = [
	  'usernamehw.errorlens', 
	  'vscode-icons-team.vscode-icons',
	  'esbenp.prettier-vscode',
	  'tal7aouy.rainbow-bracket',
	  'alefragnani.project-manager',
	  'bmewburn.vscode-intelephense-client',
	  'christian-kohler.path-intellisense',
	  'IBM.output-colorizer',
	  'codezombiech.gitignore',
	  'miguelsolorio.fluent-icons',
	  'dbaeumer.vscode-eslint',
	  'EditorConfig.EditorConfig',
	  'ExodiusStudios.comment-anchors',
	  'adpyke.codesnap',
	  'zhuangtongfa.material-theme',
	];
  
	extensionsToInstall.forEach(extensionId => {
  
	  let extension = vscode.extensions.getExtension(extensionId);
  
	  if (!extension) {
		vscode.commands.executeCommand('workbench.extensions.installExtension', extensionId)
		  .then(undefined, error => console.error(`Failed to install ${extensionId}`, error));
	  }
  
	});
  
  }
  
  module.exports = {
	activate
  }
