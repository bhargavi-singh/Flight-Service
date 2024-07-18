This is a a node js project template which anyone can use as it has been prepared by keeping some of the most important code principles and project management recommendation. feel free to change anything.

`src` -> Inside the src folder all the source code regarding the project will reside , this will not include any kind of tests. (You might want to make seperate tests folder)

Lets take a look inside the `src` folder

- `config` -> In this folder anything and everything regarding any configuration of setup of a library or module will be done. For example:setting up a `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done inn `server-config.js`. one more example can be to setup  your logging library that can help you to prepare menaning ful logs, so configuration for this library also be done here.

- `routes` => In the routes folder , we register a route and corresponding middleware and controllers to it.

- `middleware` -> they are just going to intercept the incoming request where we can wite our validators,authentication etc.

- `controllers` -> they are kind of last middleware as post then you call your business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output , we structure the API response in controllers and send the output.

- `repositories`-> this folder contains all the logic using which we can interact the DB by writing queries, all the raw queries or ORM queries will go here.

-`services` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper method,error classes etc.

SETUP the project


- Download this template from github and open it in your favourite editoe.
- In the root directory craete a `.env` file and add the following env variables
    
    ```
    PORT=<port number of your choice>
    ```

    ex:
    ```
    PORT:3000

    ```

-`config` -> Inside config file create a `config.json` file and put the following code 

    ```
    {
    "development": {
        "username": "root",
        "password": null,
        "database": "database_development",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
    }
    ```

- Go inside the   `src` folder and execute the followimg command

    ```
        npx sequelize init
    ```
By executing this command you will get migrations and seeders folder along with a config.json inside the config folder

- to run the server exeute 
    ```
    npm run dev
    ```

- To create a sequel db you need to run the following command
    ```
    npx sequelize db:create
    ```
