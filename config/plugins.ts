// config/plugins.js

export default () => ({
  // Disable the cloud-cronjob-runner plugin entirely
  'cloud-cronjob-runner': {
    enabled: false,
  },

  // Add other plugin configurations here if needed
  // e.g.,
  // 'email': { provider: 'sendgrid', ... }
});
