var elixir = require('laravel-elixir');
var gulp = require("gulp");

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.css.outputFolder = 'styles';
elixir.config.js.outputFolder = 'scripts';

elixir(function(mix) {
    mix.sass('main.scss');
    mix.sass('font-awesome/font-awesome.scss');

    mix.browserify('main.js');
    mix.copy('resources/assets/images', 'public/images');
    mix.copy('resources/assets/fonts', 'public/fonts');

    mix.version([
            'styles/main.css',
            'styles/font-awesome.css',
            'scripts/main.js',
            'images'
        ]);



});
