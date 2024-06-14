import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.crimedetector.app',
  appName: 'crime-detector',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    hostname: '127.0.0.1',
    cleartext: true,
    allowNavigation: ['*']
  }
};

export default config;
