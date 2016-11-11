### What is React?

* It's a component tree. You make components and they break out into more components.

* Usually not just react, usually also Redux which is your view model (controller?)

* 1 global state. No view models and views are intrinsically linked. Data is passed into each view's properties as function arguments.

### Angular v React

* Angular doesn't have a component tree. It has controllers attached to views. Use services, factories, directives.

* React only deals w the view, Angular is MVVM, deals with a lot more of the problem for you. If you want a controller, data structure, provide your own.

* Angular has 2-way data binding. View is attached directly to the view model. Coupled together. Controllers (view models) are intrinsically linked.

* Angular focuses on using existing JavaScript and HTML without breaking standards.

### Code

`npm init -y`

`npm install --save react react-dom webpack babel-preset-react babel-preset-es2015`

`npm install --save babel-core`

`module: {
  loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a valid name to reference
      query: {
        presets: ['es2015']
      }
    }
  ]
}`

`npm install -g gitignore`

`echo node_modules >> .gitignore`
