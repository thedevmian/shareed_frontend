# Shareed - Next.js Frontend for Shareed E-Commerce

## About

Shareed is an e-commerce platform that allows users to buy and sell second-hand items. For the frontend is used Next.js and for the backend Keystone.js. The project is deployed free on Vercel and Heroku.

### Built With

- [Next.js](https://nextjs.org/) (React.js framework)
- [Typescript](https://www.typescriptlang.org/) (Javascript superset)
- [Keystone.js](https://keystonejs.com/) (CMS)
- [PostgreSQL](https://www.postgresql.org/) (database)
- [Apollo Client](https://www.apollographql.com/docs/react/) (GraphQL client)
- [Formik](https://formik.org/) (form library)
- [Yup](https://www.npmjs.com/package/yup) (form validation)
- [Stripe](https://stripe.com) (payment processing)
- [Vercel](https://vercel.com/) (hosting)

### Features

- Debounced Product Search with [DownshiftJS](https://github.com/downshift-js/downshift)
- Custom Stripe Checkout with [Stripe Elements](https://stripe.com/docs/stripe-js)
- Form Validation with Formik and Yup
- [Incremental Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration) for product pages
- [Server-Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) for showing products
- Provide advanced caching with [Apollo Client](https://www.apollographql.com/docs/react/)
- Testing with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and Jest

## Demo

### Backend

The backend is deployed right now on the Heroku free tier.

- Live demo: [https://shareed-backedn.onrender.com/](https://shareed-backedn.onrender.com/)
- GraphQL Playground: [https://shareed-backedn.onrender.com/api/graphql](https://shareed-backedn.onrender.com/api/graphql)
- Repository: [https://github.com/thedevmian/shareed_backend](https://github.com/thedevmian/shareed_backend)

Demo credentials:

```sh
email: testmail@gmail.com
password: password1
```

### Frontend

The frontend is deployed right now on the Vercel free tier. Vercel is a hosting platform that supports Next.js out of the box.

- Live demo: [https://shareed.vercel.app/](https://shareed.vercel.app/)

Test user credentials:

```sh
email: testmail@gmail.com
password: password1
```

Test credit card:

```sh
4242 4242 4242 4242
CVC: 222
MM/YY: 12/24
```

## Resources

- Photos by [Bailey Alexander](https://unsplash.com/@baileyal3xander?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/@baileyal3xander?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
- Video by [Cottonbro](https://www.pexels.com/@cottonbro) from [Pexels](https://www.pexels.com/)

## Screenshots

### Home Page

![](https://github.com/thedevmian/shareed_frontend/blob/main/public/static/images/home.gif)

### Product Page

![](https://res.cloudinary.com/dkxixe3yr/image/upload/v1663779301/shareed/gif/SCR-20220921-p8a_sva6bs.png)

### Cart Page

![](https://res.cloudinary.com/dkxixe3yr/image/upload/v1663779301/shareed/gif/SCR-20220921-p8x_vtspi5.png)

### Checkout Page

![](https://res.cloudinary.com/dkxixe3yr/image/upload/v1663779301/shareed/gif/SCR-20220921-q6r_wj6oqe.png)

### Order Page

![](https://res.cloudinary.com/dkxixe3yr/image/upload/v1663779301/shareed/gif/SCR-20220921-q76_hgsnrf.png)

## Getting Started

If you want to run the project locally, follow these steps:

1. Clone the repository

```sh
git clone https://github.com/thedevmian/shareed_frontend.git

cd shareed_frontend
```

2. Install dependencies

```sh
yarn install
```

3. Create a `.env.local` file in the root directory and add the following environment variables:

```sh
NEXT_PUBLIC_BACKEND=
NEXT_PUBLIC_STRIPE_KEY=

```

4. Run the project

```sh
yarn dev
```

### Testing

```sh
yarn test
```

## To Do

- Add more tests
- Add wishlist functionality
- Add functionality to pay again for an order (e.g. if the payment failed)
- Add toast notifications
