# Repo Search

A simple search utilising calls to Githubs API to search for repositories returning the top 20 most forked.

# Setup

### Check that node is installed

```node -v```

Install [here](https://nodejs.org/en/download/package-manager/)

### Check npm is installed

```npm -v```

Install [here](https://www.npmjs.com/get-npm)

### Check git is installed

```git --version```

Install [here](https://git-scm.com/)

# To run:
In order to run this project you will need to clone onto your local machine and install all dependencies.

Navigate to your favoured directory and clone the repository using this link: 

```https://github.com/barks1212/repo-search.git```

Change into the project directory with:

```cd repo-search``

Install all project dependancies using:

```npm install```

To run locally, navigate to the directory in a terminal window and run:

```npm start```

The program will run on 
http://localhost:3000

# Testing:

Testing has been programmed using snapshots(Jest) and Enzyme

To test:

```npm test```

# Improvements

I have very limited experience testing React components with Enzyme and Jest. The intention here was to develop using TDD however I soon ran into an issue with both libraries returning errors. This transpired to be due to how Enzyme and Jest deal with fetching data from API's. Given time constraints I decided to do simple snapshot testing as and when I could with the intention to coming back and fixing this error in the near future.

I would also like to add pagination at some stage as well as find a way to decode the content returned from GH API when trying to fetch repo content such as README's.


# This app was developed Mobile First and is responsive across all platforms

![Screenshot](/public/screenshots/repos-mobile.png "Repo list on mobile")

### Repo list on mobile

![Screenshot](/public/screenshots/repos-desktop.png "Repo list on desktop")

### Repo list on desktop

![Screenshot](/public/screenshots/overlay-mobile.png "Overlay on mobile")

### Overlay on mobile

![Screenshot](/public/screenshots/overlay-desktop.png "Overlay on desktop")

### Overlay on desktop