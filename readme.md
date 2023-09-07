# Project Name: SOP-Generation-Tool-UI

This project creates a web-based user interface for a tool that allows users to input information similar to a Google Form. The information entered by the user is stored in a MySQL database via a Node.js backend. Additionally, an email is generated and sent to the user's provided email address with all the information they entered in the UI.

## Features

1. **Web-Based UI:** Users can input information through a web-based user interface.

2. **Data Storage:** Information entered by users is securely stored in a MySQL database.

3. **Email Notification:** An email containing all the user-entered information is generated and sent to the user's provided email address.

## Prerequisites

Before running this project, ensure you have the following prerequisites installed:

- Node.js: Download and install Node.js from [nodejs.org](https://nodejs.org/).

- MySQL Database: Set up a MySQL database and configure the connection details in the project.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Asthasingh-2002/SOP-Generation-Tool-UI.git
   cd your-project

 - Download this template from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
    ```
        npm install
    ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
    ```
    ex: 
    ```
        PORT=3000
    ```
 - execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
    ```
      npm run dev
    ```