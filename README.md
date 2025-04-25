# README

This repo contains the source code of Dead Pixel's project for CEG-7370.

# Docker Instructions
It is recommended to pull the image from the public repository to avoid having to generate new certificates. 
### Pull Build 
1. Pull the image from docker 
   - 'docker pull mechree/ceg-7370-02:latest'

2. Run the image
   - `docker run -d -p 443:443 mechree/ceg-7370-02:latest`

### Self Build
1. Ensure Docker Desktop is installed on your system.

2. Navigate to the main repo folder

   - _Note_: Make sure you are in the same directory as the Dockerfile
3. Create openssl certificates and save them to the `certs` folder

4. Build a docker image from the Dockerfile if image is out of date. 
   - `docker build -f Dockerfile -t ar-web-app:latest .` 

5. Run the container from a new build

   - `docker run -d --name ar-web-app -p 443:443 ar-web-app:latest`

6. If container already exists
   - `sudo docker start ar-web-app`

### View Web-App Locally

- Enter `https://localhost` in your browser.
   _Note_: A url parameter must be added to to the url to fetch events from firebase. Example below.
   * `https://localhost/?eventName=Luncheon`
   
### Stopping the Container

- `sudo docker stop ar-web-app`

If that does not work try the following:
   1. Get a list of active containers and get the `CONTAINER ID`
      - `docker ps`

   2. Stop container
      - `docker stop <container-id>`

### Removing the Container

- `sudo docker rm -f ar-web-app`

# Resources

- [Docker](https://www.docker.com/)

- [G4G - HTTPS with Node.js](https://www.geeksforgeeks.org/how-to-create-https-server-with-node-js/)

- [Node JS Docs](https://nodejs.org/api/https.html#https_https_createserver_options_requestlistener)

- [A-frame Docs](https://aframe.io/docs/1.7.0/introduction/) - Unfortunately, this documentation has some incorrect code, but is still excellent for learning more about the tools inside A-frame.

- [A-frame Course](https://aframe-course.glitch.me/0090-intro-aframe.html) - Excellent resource for learning A-frame.

- [A-frame Repo](https://github.com/aframevr/aframe/tree/master) - More detailed and updated information compared to A-frame Docs.

- [AR.js Docs](https://ar-js-org.github.io/AR.js-Docs/#arjs-augmented-reality-on-the-web)

- [AR.js Location Based AR Tutorial](https://ar-js-org.github.io/AR.js-Docs/location-based-aframe/)

- [AR.js Repo](https://github.com/AR-js-org/AR.js)

- [NPM A-Frame Package](https://www.npmjs.com/package/aframe)

- [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

- [w3 JS & DOM](https://www.w3schools.com/jsref/) - Explanation and examples of JS and DOM components

- [THREE.js Docs](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

- [THREE.js Repo](https://github.com/mrdoob/three.js)

- [CodePen Browser Coding](https://codepen.io/) - useful for seeing immediate changes. Does not work well with location based components, but is useful for experimenting with scenes.
