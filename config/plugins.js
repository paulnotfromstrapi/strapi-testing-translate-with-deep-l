module.exports = ({ env }) => ({
  // ...
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: 'deepl',
      // Pass credentials and other options to the provider
      providerOptions: {
        // your API key - required and wil cause errors if not provided
        apiKey: 'Your API Key Here',
        // use custom api url - optional
        apiUrl: env('DEPL_API_KEY'),
        // use custom locale mapping (for example 'en' locale is deprecated so need to choose between 'EN-GB' and 'EN-US')
        localeMap: {
          // use uppercase here!
          EN: 'EN-US',
        },
        apiOptions: {
          // see <https://github.com/DeepLcom/deepl-node#text-translation-options> for supported options.
          // note that tagHandling Mode cannot be set this way. 
          // use with caution, as non-default values may break translation of markdown 
          formality: 'default',
          // ...
        }
      },
      // other options ...
    },
  },
  // ...
});

