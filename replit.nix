{ pkgs }: {
	deps = [
    pkgs.rubyPackages_3_0.jekyll
    pkgs.ruby_3_0
    pkgs.bind.dnsutils
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
    pkgs.nodePackages.yarn
	];
}