import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(config, {
      typescript: require.resolve("typescript"),
    })
  );

  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://test.ship-docs.ttsw.com.pl',
    viewportWidth: 1920,
    viewportHeight: 1080,
    screenshotsFolder: "cypress/downloads",
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents,
  },
});
