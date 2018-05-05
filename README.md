# README

Bare bones boilerplate for a rails project with React. Must run both rails server and npm start (which runs webpack) concurrently in the terminal.

Just rename the database, run `rake db:create`, and it's all set.

https://launchschool.com/blog/rails-and-foundation-part-1

install Sass:
gem install sass
run bundle install


Install the Ruby Gem for Foundation:
Add the foundation-rails gem to your Gemfile:

1 # Gemfile
2 ...
3 gem 'foundation-rails'

Run `$ bundle install `in the Terminal to install the gem.

Configuring Foundation
To finish setting Foundation up, we need to run a generator that the gem provides called foundation:install

Install Foundation:
rails g foundation:install

Your application.js should look like this:
....

//= require jquery
//= require jquery_ujs
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation(); });

Your application.css should be similar to this:
...

 *
 *= require_tree .
 *= require_self
 *= require foundation_and_overrides

 */
overwrite: Y

to run:
in one terminal window run the command: `npm start`
Open another terminal and run: `rails server -b 0.0.0.0`

if broken due to crash or restart, reopen Postgres
