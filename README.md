# aws-cognito-example

Basic usage of amazon-cognito-identity with modern javascript tooling

I wanted to use [amazon-cognito-identity](https://github.com/aws/amazon-cognito-identity-js) with modern javascript tooling, react, and the npm ecosystem.

You can use it as a boilerplate for your next kickass AWS-based serverless react/redux site.


## getting started

* configure
* `npm install` to install dependencies
* `npm start` to start a development webserver
* `npm run build` to create an optimized static site, ready for deployment, in `client/webroot`.


## configuration

Make a `.env` file that looks like this:

```
AWS_REGION=us-west-2
AWS_IDENTITYPOOL=us-west-2_BADWOLFBADWOLF
AWS_CLIENTAPP=badwolfbadwolfbadwolfbadwo
```

1. Create an app for your user pool. Note that the generate client secret box must be **unchecked** because the JavaScript SDK doesn't support apps that have a client secret.
2. Set the above variables from your AWS console, under Cognito User Pools, replacing the Doctor Who reference with your own stuff.
3. Install all the dependencies with `npm install`
4. Run the app with `npm start`, and click the links.
5. Once you get your app working the way you want, run `npm run build` and deploy the `client/webroot` folder on any static webhost (like S3 or whatever.)
