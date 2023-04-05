
# Business Card Generator

<script src="https://fast.wistia.com/embed/medias/nws3968frh.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:53.33% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_nws3968frh videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/nws3968frh/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>

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


