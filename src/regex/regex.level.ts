export const REGEX_LEVEL: any = Object.seal({
  email: "warning",
  ssn: "error",
  ipAddress: "warning",
  macAddress: "error",
  creditCard: "warning",
  slackToken: "warning",
  awsApiKey: "warning",
  awsMwsAuthToken: "warning",
  awsAppsyncGraphqlKey: "warning",
  fbAccessToken: "warning",
  fbOath: "warning",
  github: "warning",
  genericApiKey: "warning",
  genericSecret: "warning",
  googleApiKey: "warning",
  gcpApiKey: "warning",
  gcpOath: "warning",
  gDriveApiKey: "warning",
  gDriveOath: "warning",
  gcpServiceKey: "warning",
  gmailApiKey: "warning",
  gmailOath: "warning",
  gmailOathAccessToken: "warning",
  youtubeApiKey: "warning",
  youtubeOath: "warning",
  herokuApiKey: "warning",
  mailChimpApiKey: "warning",
  mailGunApiKey: "warning",
  passwordInUrl: "warning",
  paypalKey: "warning",
  picaticApiKey: "warning",
  stripeApiKey: "warning",
  stripeRestrictedApiKey: "warning",
  squareAccessToken: "warning",
  squareOath: "warning",
  telegramBotApiKey: "warning",
  twillioApiKey: "warning",
  twitterAccessToken: "warning",
  twitterOath: "warning",
  license: "warning",
  francePhone: "warning",
  germanPhone: "warning",
  ukPhone: "warning",
  usPhone: "warning",
  usStreetAddress: "warning",
  ibanCode: "warning",

  passportCanada: "warning",
  nationalIdFrance: "warning",
  driverLicenseFrance: "warning",
  germanyPassport: "warning",
  germanyLicense: "warning",
  ukPassport: "warning",
  nhsUk: "warning",
  ssnUs: "warning",
  californiaAddress: "warning",
  ukAddress: "warning",
  address: "warning",
  indianPhoneNumber: "warning",
  ukDriverLicense: "warning",
  ukNationalInsuranceNumber: "warning",
  indianPanCard: "warning",
  indianAadhar: "warning",
  indianDl: "warning",
  indianPassport: "warning",
});

export const REGEX_LEVEL_KEYS = Object.keys(REGEX_LEVEL);
