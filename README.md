
## Prerequisites
Must have [Django v3.1.1](https://docs.djangoproject.com/en/3.1/topics/install/) and [Node.js v12.19.0](https://nodejs.org/en/) installed, preferably in a virtual environment(virtualENV or pipENV)

## To Run Locally
After you clone the project, navigate to the root of the project and run the following commands into the terminal:

```
$ pip install -r requirements.txt
$ npm install
$ npm run dev
$ python3 manage.py runserver
```
Go to your browser and in the address bar type in: `http://127.0.0.1:8000/`

## To Upload Project to Your Heroku
I'm assuming you know how to deploy a simple Django project to Heroku. Below are added instructions to deploy a Djano+React (this project) to Heroku.

To get a Django+React project deployed, Heroku needs a build pack of `nodejs` as well as `python` so when you run  `$ heroku buildpack` after you created your Heroku app you should see something like:
```
1. heroku/nodejs
2. heroku/python
```

If you don't have something like that, to add both the build packs to your Heroku App run:
```
$ heroku buildpacks:add --index 1 heroku/nodejs
$ heroku buildpacks:add --index 2 heroku/python
```

Alternatively, you can find your app's build packs under the Settings option within your app's console on `heroku.com` and add the necessary build packs there.

***If nothing shows on Heroku a possible error could be static collection. More [here](https://devcenter.heroku.com/articles/django-assets)
