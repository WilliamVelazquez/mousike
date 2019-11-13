# Mousike - a Spotify React Clone

This project has 3 main folders

## **ssr-frontend**: 

This is the main React Folder, It contains every component and the app logic, It is structured with 3 main functionalities:

1. Render the frontend via ssr (server side rendering)

```bash
npm run start
```

2. Render the frontend with node

```bash
npm run front
```

3. Render the storybook for the project

```bash
npm run storybook
```

## **mousike-api**: 

This folder contains the api with the main role of connecting to the database, for run this server just type:
Enter `mousike-api`folder and type:

```bash
npm run start
```

## **ssr-server**: 

This folder contains the api with the main role of being used by the non-administrator user, being consumed by the frontend with read permissions.
Enter `ssr-server`folder and type:

* ```bash
  npm run start
  ```



**Created in platzi javascript school.**