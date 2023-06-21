# TOTY Sports - PWA Project

This is the readme file for the "TOTY Sports" progressive web application (PWA) project. The project is built using Next.js, Tailwind CSS, and TypeScript. It also utilizes other libraries such as Framer Motion. The application features order processing, a section for favorite articles, and a shopping cart. All of this functionality is implemented with data persistence using localStorage. Additionally, a custom hook called `useLocalStorage` and `useContext` are used for managing and accessing data.

## Installation

1. Clone the repository:

   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```
   cd toty-sports-pwa
   ```

3. Install the dependencies:

   ```
   npm install
   ```

## Development

To start the development server, run the following command:

```
npm run dev
```

This will start the application in development mode. Open your browser and visit `http://localhost:3000` to see the application.

## Build

To build the production-ready application, run the following command:

```
npm run build
```

This will generate an optimized production build of the application.

## Deployment

The application can be deployed to various hosting platforms that support Next.js applications. One popular option is [Vercel](https://vercel.com/), which offers seamless deployment for Next.js projects.

To deploy the application to Vercel, follow these steps:

1. Install the Vercel CLI globally:

   ```
   npm install -g vercel
   ```

2. Log in to your Vercel account:

   ```
   vercel login
   ```

3. Navigate to the project directory:

   ```
   cd toty-sports-pwa
   ```

4. Deploy the application:

   ```
   vercel
   ```

   This command will guide you through the deployment process and provide you with a unique URL for your deployed application.

## Usage

Once the application is running, you can explore the various features and functionalities of TOTY Sports. Here are some key features to get you started:

- **Order Processing**: Navigate to the order processing section to place orders for sports-related items.
- **Favorite Articles**: Use the favorite articles section to save and view your preferred sports articles.
- **Shopping Cart**: Add items to your shopping cart and proceed to checkout when you're ready to purchase.

## Technologies Used

- Next.js: A React framework for building server-side rendered and statically generated web applications.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom user interfaces.
- TypeScript: A statically-typed superset of JavaScript that enhances developer productivity and code quality.
- Framer Motion: A library for creating animations and gestures in React applications.
- localStorage: A web browser feature that provides persistent storage of key-value pairs.
- useLocalStorage: A custom hook developed to simplify the management of localStorage data.
- useContext: A React hook used for accessing data stored in the application's context.

## Contributing

Contributions to the TOTY Sports project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the project's GitHub repository.

When contributing, please follow the existing code style and adhere to the project's coding guidelines. Additionally, ensure that your changes are well-documented and thoroughly tested.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code according to the terms of the license.

## Contact

If you have any questions or inquiries regarding the TOTY Sports project, please contact our team at [contact@totysports.com](mailto:contact@totysports.com). We are happy to assist you and provide any necessary information.
