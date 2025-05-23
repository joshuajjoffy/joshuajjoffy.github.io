{
  description = "Astro CMS flake";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };
  outputs = {
    self,
    nixpkgs,
    utils,
    ...
  } @ inputs:
    utils.lib.eachDefaultSystem (
      system: let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShell = with pkgs; mkShell {
          name = "fcoscms";
          nativeBuildInputs = with pkgs; [
            alejandra
            docker
            dotenv-linter
            editorconfig-checker
            git
            hadolint
            nodejs
            pre-commit
            rnix-lsp
            vscodium-fhs
          ];
        };
      });
}