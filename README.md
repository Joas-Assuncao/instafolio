# Instafolio

---

#### _Developed by [Joas Assunção](https://linkedin.com/in/Joas-Assuncao)_

---

### Technologies

This app was developed with Next and the Github API. I used phosphor for some icons, axios for http-requests, Styled-Components for styles and Typescript as language!

It consists of a portfolio for all devs, backend, frontend and anyone who needs portfolio for their projects on Github!

### First of all:

- You needs to have a code editor to edit the code! I'm use [VScode](https://code.visualstudio.com/)
- Have [Github](https://github.com);
- Have some repos;
- You need to [generate an auth token](https://github.com/settings/tokens) from github;

### Get Started

Clone the repo
Run to install all dependences:

```sh
npm install
or
yarn
```

Go to the api.ts file and change the user to your user

Run this to see the development project:

```sh
npm run dev
or
yarn dev
```

Open in your browser the url http://localhost:3000 and check if your information is corrects!

After all that, go to [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/dashboard) or your favorite app deployment platform and deploy! To deploy you need to add the environment variable with your github key, the variable name is NEXT_PUBLIC_AUTH_KEY. This is necessary for you to have more requests available.
