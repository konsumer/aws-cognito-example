// TODO: build this from separate source-files
import 'aws-sdk/dist/aws-sdk'

import 'amazon-cognito-identity-js/dist/aws-cognito-sdk'
import 'amazon-cognito-identity-js/src/CognitoUser'
import 'amazon-cognito-identity-js/src/CognitoUserPool'
import 'amazon-cognito-identity-js/src/CognitoRefreshToken'
import 'amazon-cognito-identity-js/src/CognitoIdToken'
import 'amazon-cognito-identity-js/src/CognitoAccessToken'
import 'amazon-cognito-identity-js/src/AuthenticationDetails'
import 'amazon-cognito-identity-js/src/CognitoUserSession'
import 'amazon-cognito-identity-js/src/CognitoUserAttribute'
import 'amazon-cognito-identity-js/src/AuthenticationHelper'
import 'amazon-cognito-identity-js/src/DateHelper'

const { AWS, AWSCognito } = window
const { CognitoUser, CognitoUserPool, CognitoRefreshToken, CognitoIdToken, CognitoAccessToken, AuthenticationDetails, CognitoUserSession, CognitoUserAttribute, AuthenticationHelper, DateHelper } = AWSCognito.CognitoIdentityServiceProvider
const { util, VERSION, Signers, Protocol, XML, JSON, Model, apiLoader, Service, Credentials, CredentialProviderChain, TemporaryCredentials, WebIdentityCredentials, CognitoIdentityCredentials, SAMLCredentials, Config, config, Endpoint, HttpRequest, HttpResponse, HttpClient, SequentialExecutor, EventListeners, Request, Response, ResourceWaiter, ParamValidator, events, XHRClient, ACM, APIGateway, ApplicationAutoScaling, AutoScaling, CloudFormation, CloudFront, CloudHSM, CloudTrail, CloudWatch, CloudWatchEvents, CloudWatchLogs, CodeCommit, CodeDeploy, CodePipeline, CognitoIdentity, CognitoIdentityServiceProvider, CognitoSync, ConfigService, DeviceFarm, DirectConnect, DynamoDB, DynamoDBStreams, EC2, ECR, ECS, ElastiCache, ElasticBeanstalk, ElasticTranscoder, ELB, EMR, Firehose, GameLift, Inspector, IotData, Kinesis, KMS, Lambda, MachineLearning, MarketplaceCommerceAnalytics, MobileAnalytics, OpsWorks, RDS, Redshift, Route53, Route53Domains, S3, SES, SNS, SQS, SSM, StorageGateway, STS, WAF } = AWS
export { AWS, AWSCognito, CognitoUser, CognitoUserPool, CognitoRefreshToken, CognitoIdToken, CognitoAccessToken, AuthenticationDetails, CognitoUserSession, CognitoUserAttribute, AuthenticationHelper, DateHelper, util, VERSION, Signers, Protocol, XML, JSON, Model, apiLoader, Service, Credentials, CredentialProviderChain, TemporaryCredentials, WebIdentityCredentials, CognitoIdentityCredentials, SAMLCredentials, Config, config, Endpoint, HttpRequest, HttpResponse, HttpClient, SequentialExecutor, EventListeners, Request, Response, ResourceWaiter, ParamValidator, events, XHRClient, ACM, APIGateway, ApplicationAutoScaling, AutoScaling, CloudFormation, CloudFront, CloudHSM, CloudTrail, CloudWatch, CloudWatchEvents, CloudWatchLogs, CodeCommit, CodeDeploy, CodePipeline, CognitoIdentity, CognitoIdentityServiceProvider, CognitoSync, ConfigService, DeviceFarm, DirectConnect, DynamoDB, DynamoDBStreams, EC2, ECR, ECS, ElastiCache, ElasticBeanstalk, ElasticTranscoder, ELB, EMR, Firehose, GameLift, Inspector, IotData, Kinesis, KMS, Lambda, MachineLearning, MarketplaceCommerceAnalytics, MobileAnalytics, OpsWorks, RDS, Redshift, Route53, Route53Domains, S3, SES, SNS, SQS, SSM, StorageGateway, STS, WAF }
