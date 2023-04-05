
# Business Card Generator

[![Check the preview here](https://fast.wistia.com/embed/medias/nws3968frh.jsonp)](https://lorran-parrilla.wistia.com/medias/nws3968frh)


Business Card Generator is a web application that generates a QR code for a business card containing the user's name, description, and contact information. This application is built using the following stacks:

## Stacks

**Front-end:** React,  React Router, TailwindCSS, Axios.

**Back-end:** Node, MySQL, Express, Sequelize.


## API

#### Create a card in the database
```http
POST /card/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `body` | `object` | **Required**. Body with keys: {name: string, description: string, github: string, linkedin: string} |

#### Returns

```http
  GET /card/${name}
```

![image](https://user-images.githubusercontent.com/53099585/229912144-f2a7f6f8-decf-4bad-a485-f0b47ef64bc1.png)



## Install

Install the project dependencies with npm

```bash
  npm run init
```

This command will install both the backend and frontend dependencies, and will also create the database.

## Usage
To start the application, run the following command:


```bash
  npm start
```

## Using the application

Once the application is running, open your web browser and go to http://localhost:3000 to see the project in action. The backend and database will be running on ports 3000 and 3003, respectively.


