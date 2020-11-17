<div align="center">
  <img src="https://github.com/c-Bruno/I5-FE/blob/main/src/assets/imgs/logocompleto.fw.png" alt="logo-i5" height="200"> 
</div>

## Installation
### [](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#install-globally)Install Globally
```shell
npm install -g @angular/cli
```

### [](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#install-locally)Install Locally
```shell
npm install @angular/cli
```

To run a locally installed version of the angular-cli, you can call  `ng`  commands directly by adding the  `.bin`  folder within your local  `node_modules`  folder to your PATH. The  `node_modules`  and  `.bin`  folders are created in the directory where  `npm install @angular/cli`  was run upon completion of the install command.

Alternatively, you can install  [npx](https://www.npmjs.com/package/npx)  and run  `npx ng <command>`  within the local directory where  `npm install @angular/cli`  was run, which will use the locally installed angular-cli.

### [](https://github.com/angular/angular-cli/blob/master/packages/angular/cli/README.md#install-specific-version-example-611)Install Specific Version (Example: 6.1.1)
```shell
npm install -g @angular/cli@6.1.1
```


## Get started
```shell
git clone https://github.com/extensao-pucc/recycle-FE.git
cd recycle-FE
```
### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:
```shell
npm install
ng serve
```

### Generating and serving an Angular project
The `ng serve` command builds and serves your app, rebuilding on file changes and runs on port `4200`.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Shut it down manually with `Ctrl-C`.
