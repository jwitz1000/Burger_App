# Burger_App

<br>

# Summary

This is a burger application that allows users to create burgers and then "Devour" them. Burgers are stored in a MySQL database with values for id, burger_name, and devoured (boolean). Express is used for routing the various api calls that create/devour burgers (via buttons).
<br>

# Sample Images

Main Page
<br>

![Image](/public/assets/images/sc1.png)
<br>

# Technologies

- HTML
- CSS
- Bootstrap
- VScode
- Git
- GitHub
- Javascript
- Node
- MySQL
- Express
- Express-handlebars

# Author

Arman Riahi

# Links

[LinkedIn](https://www.linkedin.com/in/arman-riahi/)
<br>

[GitHub](https://github.com/namrataffy)
<br>

# Code Snippet

Code showing how the burger lists are formed:

```
 <div class="main row">
    <div class="col-sm-6">
      <h2>Fresh Burgers</h2>
      <ul>
        {{#each burgers}}
        {{#unless devoured}}
        <div class="burgerText">{{id}}. {{ burger_name}}</div>
        <button class="food btn btn-light" id="{{id}}" value="{{id}}">Devour!</button>
        {{/unless}}
        {{/each}}
      </ul>
    </div>

    <div class="col-sm-6">
      <h2>Devoured Burgers</h2>
      <ul>
        {{#each burgers}}
        {{#if devoured}}
        <div class="burgerText">{{id}}. {{ burger_name}}</div>
        {{/if}}
        {{/each}}
      </ul>
    </div>
  </div>
```
